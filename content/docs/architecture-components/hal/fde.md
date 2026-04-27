---
title: Full Disk Encryption
---

## Overview

Full Disk Encryption (FDE) is an alternative HAL boot flow for Cocos CVMs. Instead of running the full guest environment directly from an in-memory initramfs, the FDE workflow boots a small trusted initramfs first, provisions an encrypted root disk inside the CVM, and then switches into a cloned Ubuntu-based root filesystem.

This complements the RAM-only HAL described in [On-premises](./hal.md). The RAM-only path minimizes persistence and attack surface, while the FDE path is designed for cases where Cocos needs a richer guest OS image and an encrypted block-device-based root filesystem.

## High-Level Architecture

The current FDE implementation is composed of four main pieces:

1. **Prepared source image**: A trusted Ubuntu qcow2 image is prepared ahead of time with the `cocos/hal/cloud-init` workflow.
2. **NBD source export**: The prepared qcow2 is exposed read-only over Network Block Device (NBD) so the early boot environment can consume it as a raw block source.
3. **FDE initramfs**: A Buildroot-generated initramfs boots first, formats a destination disk as LUKS2, copies the source image into the opened encrypted mapping, measures the copied disk, and switches root.
4. **Manager/QEMU integration**: The [Manager](../manager.md) launches the CVM, passes the boot artifacts and kernel command line, and can attach a fresh writable disk for each VM.

## Why This Flow Exists

The FDE workflow changes the trust and runtime model in a few important ways:

- It allows the runtime guest OS to be a prepared Ubuntu image rather than only a minimal in-memory root filesystem.
- It keeps the root filesystem behind dm-crypt and LUKS2 inside the CVM.
- It allows the copied root disk contents to participate in attestation-related measurements.
- It gives the Manager a way to provision a fresh writable destination disk per CVM while keeping the source image immutable and read-only.

## Source Image Preparation

Before the confidential VM boots, a trusted source image is prepared externally. In the current implementation, this is done by the `cocos/hal/cloud-init` workflow:

- a Noble Ubuntu cloud image is used as the base
- `cloud-init` customizes the image with Cocos packages and service setup
- the result is stored as a qcow2 image that later becomes the trusted source for FDE provisioning

At runtime, the source image is not attached directly as the writable root disk. Instead, it is exported read-only over NBD and consumed by the FDE initramfs.

## Boot Flow

The FDE initramfs runs as PID 1 and performs the provisioning sequence during early boot.

### 1. Early System Setup

The initramfs initializes:

- `/dev`, `/proc`, `/sys`, `/run`, and `/tmp`
- `devtmpfs` and `devpts`
- `configfs` when available
- basic networking support

It then parses the kernel command line for:

- `src_ip=<host-or-service-ip>` (required)
- `src_port=<port>` (optional, default `10809`)

If `src_ip` is missing, boot stops and drops into a shell.

### 2. Source Image Access

The initramfs acquires network configuration with DHCP and connects to the read-only NBD export:

```bash
nbd-client -N src "$SRC_IP" "$SRC_PORT" /dev/nbd2
```

Current runtime assumptions are:

- source image device: `/dev/nbd2`
- destination disk: `/dev/sda`
- opened LUKS mapper: `/dev/mapper/sda_crypt`

The NBD export name is currently fixed to `src`.

## Destination Disk Provisioning

After connecting to the source image, the initramfs:

1. generates a 64-byte random key
2. formats `/dev/sda` as a LUKS2 container using `cryptsetup luksFormat`
3. opens the container as `/dev/mapper/sda_crypt`
4. copies the full source block device into the opened mapper with `dd`

In other words, the copied guest OS is written into the plaintext view of the encrypted device mapper, while the underlying block device remains encrypted.

The current LUKS setup uses:

- `luks2`
- `aes-xts-plain64`

The destination disk is treated as disposable provisioning space. Existing contents are overwritten.

## Root Filesystem Handoff

Once the copy completes, the initramfs:

- runs `kpartx` on the opened encrypted mapping
- locates the root partition inside the copied image
- mounts that partition at `/root`
- rewrites `/etc/fstab` in the cloned image so `/` points at the encrypted root partition
- preserves or recreates 9P mounts for `certs_share` and `env_share`
- executes `switch_root /root /sbin/init`

After `switch_root`, the prepared Ubuntu system continues booting from the already-open encrypted root mapping.

## Measurements and Attestation

The copied disk contents are measured after the source image has been written into the opened encrypted mapping.

Important detail:

- the measured bytes are read from `/dev/mapper/sda_crypt`
- this means the measured value represents the plaintext view exposed by dm-crypt
- it does not represent the raw ciphertext stored on `/dev/sda`

### vTPM Measurement Path

When a TPM device and `tpm2_pcrextend` are present, the initramfs extends PCR16 with:

- the SHA-256 disk hash
- the SHA-384 disk hash

### TDX Measurement Path

When the TDX configfs RTMR interface and `tdx-rtmr-extend` are present, the initramfs extends RTMR3 with the SHA-384 disk hash.

This complements the standard TDX boot measurements:

- RTMR0: firmware data
- RTMR1: kernel
- RTMR2: initramfs and kernel command line
- RTMR3: runtime-controlled extension point used here for the copied disk measurement

### Best-Effort Behavior

Measurement extension is best-effort:

- missing TPM or `tpm2_pcrextend` skips PCR extension
- missing TDX RTMR support skips RTMR extension
- failed extension emits a warning but does not abort boot

## Key Lifetime and Persistence Model

The LUKS key is generated inside the initramfs and is not persisted into the cloned root filesystem.

Before switching root, the key file is wiped and removed. The encrypted root remains usable because the dm-crypt mapping is already open.

This has an important consequence:

- a later reboot cannot unlock the destination disk from persisted local state alone
- another provisioning run or a separate unlock flow would be required

So the current implementation is best an encrypted provisioning-and-boot flow, not a general-purpose persistent disk unlock mechanism.

## Manager Integration

The Manager participates in the FDE flow by launching the CVM with the correct boot artifacts and, optionally, by attaching a fresh writable destination disk.

Relevant Manager capabilities include:

- booting the FDE kernel and initramfs instead of the RAM-only HAL artifacts
- passing `src_ip` and optional `src_port` through `MANAGER_QEMU_KERNEL_CMDLINE`
- attaching a per-VM writable qcow2 disk when `MANAGER_QEMU_ENABLE_DISK=true`
- sizing that writable destination disk from `MANAGER_QEMU_SRC_DISK_FILE`
- cleaning up the runtime-created destination disk when the VM stops

See the [Manager](../manager.md) page for the Manager-side environment variables and deployment examples.

## Current Operational Assumptions

The current implementation assumes:

- the source image is reachable over NBD
- the export name is `src`
- the destination disk is visible as `/dev/sda`
- the root partition inside the cloned image becomes either:
  - `/dev/mapper/sda_cryptp1`, or
  - `/dev/mapper/sda_crypt1`

## Limitations

The current FDE implementation is powerful but intentionally narrow:

- it depends on a separate source-image preparation flow
- it currently expects NBD for source image delivery
- it assumes a fixed destination block-device layout
- it wipes the ephemeral LUKS key before the normal guest boot completes
- it does not currently describe a persistent re-unlock path after reboot

This behavior is intentional: once the CVM shuts down, data stored on the encrypted disk should no longer be accessible.

Those constraints are important for understanding the current trust model and operational workflow.

## Conclusion

The HAL FDE workflow extends Cocos from a RAM-only CVM model to a disk-backed confidential boot flow. It keeps the bootstrapping logic inside a small trusted initramfs, provisions the runtime OS into a LUKS2-protected destination disk, measures the copied root filesystem, and then hands control to the cloned Ubuntu guest.

Together, the source-image preparation flow, NBD export, FDE initramfs, and Manager integration form the current end-to-end encrypted-root boot path for Cocos CVMs.
