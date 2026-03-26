---
title: Attested TLS
---

For the relying party to send confidential data or code to the Agent, a secure channel must be established between them. In Cocos, this is done with attested TLS (aTLS): a TLS 1.3 connection followed by an attestation exchange that is cryptographically bound to that exact TLS session.

In Cocos, the CVM acts as the server. The Agent first establishes a standard TLS 1.3 channel with the relying party. After the TLS handshake completes, the relying party sends an authenticator request and the Agent responds with an exported authenticator. The authenticator contains the certificate chain, proof that it is bound to the live TLS session, and attestation data attached to the leaf certificate entry.

The request sent by the relying party explicitly advertises support for attestation in the exported authenticator:

```go
return &ea.AuthenticatorRequest{
    Type:    ea.HandshakeTypeClientCertificateRequest,
    Context: context,
    Extensions: []ea.Extension{
        sigExt,
        ea.CMWAttestationOfferExtension(),
    },
}, nil
```

The attestation payload is not trusted on its own. It is tied to the TLS session using exporter-derived keying material and the server leaf public key. Cocos derives a binding value from the TLS session and uses it as the input for the attestation evidence. The relying party recomputes the same binding from the live session and verifies that the evidence matches, which proves that the attestation belongs to the endpoint that completed the TLS connection.

The binding is computed directly from the TLS exporter output and the leaf public key:

```go
const ExportedAttestationValueLen = 32

exportedValue, h, err := ExportAttestationValue(st, label, certificateRequestContext)
aikPubHash = AIKPublicKeyHash(h, pub)
binding = BindingValue(h, pub, exportedValue)
```

The server may use a configured certificate, or it may fall back to an ephemeral self-signed identity. Freshness no longer depends on regenerating a certificate for every connection. Instead, freshness comes from the TLS exporter material and the per-request authenticator context, which are unique to the session being verified.

The entire process is illustrated in the picture below. The green color represents the trusted part of the system, while the red represents the untrusted part.

The sequence below shows the new aTLS flow in more detail.

![Attested TLS](/img/attestation/atls.png)

The exported authenticator is validated in three layers:

1. The TLS authenticator itself is verified against the live TLS 1.3 session, which proves that the response was produced by the peer that completed the handshake.
2. The attestation payload carried in the leaf certificate entry is parsed and checked for correct placement and structure.
3. The attestation evidence is verified against the attestation policy, and its binder is recomputed from the live TLS session and the leaf public key.

The attestation evidence is carried as an EAT payload together with binder metadata. The binder contains the exporter label, a hash of the leaf public key, and the session binding value. Cocos verifies the evidence using the configured CoRIM policy and the platform-specific verifier for the reported TEE type.

On the server side, the attestation evidence and binder metadata are packaged into the `cmw_attestation` payload like this:

```go
payloadBytes, err := eaattestation.MarshalPayload(eaattestation.Payload{
    Version:   1,
    MediaType: "application/eat+cwt",
    Evidence:  evidence,
    Binder: eaattestation.AttestationBinder{
        ExporterLabel: eaattestation.ExporterLabelAttestation,
        AIKPubHash:    aikPubHash,
        Binding:       binding,
    },
})
```

If a server CA bundle is configured, the CLI also performs normal X.509 certificate validation. If no CA bundle is configured, the server identity may be self-signed or ephemeral and trust is established primarily through the attestation evidence and the TLS-session binding.

In Cocos terminology, aTLS can also be combined with mutual TLS. In that configuration, the client certificate is still required and verified, while the server additionally proves its TEE state through the attestation-bound authenticator.
