"use client"

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background text-sm">
            {/* Schematic top bar */}
            <div className="border-b border-border">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl py-3 flex items-center justify-between gap-4 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    <span>{'// '}COCOS.AI</span>
                    <span className="hidden sm:inline-block flex-1 border-t border-dashed border-border" />
                    <span>CONFIDENTIAL_COMPUTING.SYSTEM</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-6xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/img/ultraviolet-logo.svg"
                                alt="Ultraviolet"
                                width={120}
                                height={30}
                                className="h-8 w-auto dark:invert"
                            />
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Open-source confidential computing for collaborative AI workloads,
                            built on hardware-level isolation and remote attestation.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="eyebrow mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/docs" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="https://github.com/ultravioletrs/cocos" className="text-muted-foreground hover:text-primary transition-colors">Source Code</Link></li>
                            <li><Link href="/solution" className="text-muted-foreground hover:text-primary transition-colors">Solution</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="eyebrow mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://twitter.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Twitter</Link></li>
                            <li><Link href="https://linkedin.com/company/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</Link></li>
                            <li><Link href="https://github.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">GitHub</Link></li>
                            <li><Link href="mailto:info@ultraviolet.rs" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 border border-border rounded-sm p-6 bg-secondary/40">
                        <h3 className="eyebrow-accent mb-3">{'// '}Newsletter</h3>
                        <p className="text-muted-foreground mb-4">
                            Releases, attestation research, and confidential computing news.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="you@domain.com"
                                className="bg-background border border-border rounded-sm px-3 py-2 flex-1 font-mono text-xs focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-primary-foreground rounded-sm px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] hover:opacity-90 transition-opacity whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-3 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-muted-foreground">
                    <p>cocos.ai · made with confidential computing · © {year} ultraviolet</p>
                    <div className="flex gap-6">
                        <Link href="/imprint" className="hover:text-primary transition-colors">Imprint</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
