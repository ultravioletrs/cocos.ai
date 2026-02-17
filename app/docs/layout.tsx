import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/app/source';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Documentation',
    description: 'Cocos AI Documentation',
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout tree={source.pageTree} nav={{ title: 'Cocos AI Docs' }}>
            {children}
        </DocsLayout>
    );
}
