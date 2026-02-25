import './globals.css';
import 'katex/dist/katex.css';
import { Inter } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';

const inter = Inter({ subsets: ['latin'] });

import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: {
        template: '%s | Cocos AI',
        default: 'Cocos AI - Open Source Confidential Computing System',
    },
    description: 'Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.',
    icons: {
        icon: '/icon.png',
    },
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}
