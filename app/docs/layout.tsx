import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/app/source';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/metadata';
import Image from 'next/image';
import { Github } from 'lucide-react';

export const metadata = createMetadata({
    title: 'Documentation',
    description: 'Cocos AI Documentation',
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <DocsLayout
            tree={source.pageTree}
            nav={{
                title: (
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/Cocos_logo-01.png"
                            alt="Cocos AI"
                            width={100}
                            height={32}
                            className="h-8 w-auto dark:invert"
                        />
                    </div>
                )
            }}
            sidebar={{
                footer: (
                    <a
                        href="https://github.com/ultravioletrs/cocos"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="size-4" />
                        GitHub
                    </a>
                )
            }}
        >
            {children}
        </DocsLayout>
    );
}
