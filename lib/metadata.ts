import type { Metadata } from "next/types";

export const baseUrl =
    process.env.NEXT_PUBLIC_URL || "https://cocos.ai";

export function createMetadata(override: Metadata): Metadata {
    return {
        ...override,
        openGraph: {
            title: override.title ?? "Cocos AI",
            description: override.description ?? "Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.",
            url: baseUrl,
            images: [
                {
                    url: `${baseUrl}/images/cocos-concept.png`,
                    secureUrl: `${baseUrl}/images/cocos-concept.png`,
                    alt: "Cocos AI",
                    width: 1200,
                    height: 630,
                },
            ],
            siteName: "Cocos AI",
            ...override.openGraph,
        },
        twitter: {
            card: "summary_large_image",
            title: override.title ?? "Cocos AI",
            description: override.description ?? "Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.",
            images: [
                {
                    url: `${baseUrl}/images/cocos-concept.png`,
                    secureUrl: `${baseUrl}/images/cocos-concept.png`,
                    alt: "Cocos AI",
                    width: 1200,
                    height: 630,
                },
            ],
            ...override.twitter,
        },
    };
}
