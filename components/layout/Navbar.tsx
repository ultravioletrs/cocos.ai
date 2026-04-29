"use client"

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';

const navLinks = [
    { href: '/solution', label: 'Solution' },
    { href: '/#usecases', label: 'Use Cases' },
    { href: '/#about', label: 'About' },
    { href: '/docs', label: 'Docs' },
    { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl flex h-14 items-center justify-between">
                <Link href="/" className="flex items-center gap-3 shrink-0">
                    <Image
                        src="/images/Cocos_logo-01.png"
                        alt="Cocos AI"
                        width={120}
                        height={32}
                        className="h-7 w-auto dark:invert"
                    />
                    <span className="hidden sm:inline-block font-mono text-[0.65rem] tracking-[0.15em] uppercase text-muted-foreground border border-border px-1.5 py-0.5 rounded-sm">
                        v0.9.0
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Link
                        href="https://github.com/ultravioletrs/cocos"
                        target="_blank"
                        className="hidden md:inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-mono text-[0.65rem] uppercase tracking-[0.15em] px-3 py-2 rounded-sm hover:opacity-90 transition-opacity"
                    >
                        Github
                        <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        className="md:hidden inline-flex items-center justify-center p-1.5 border border-border rounded-sm text-foreground"
                    >
                        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-border bg-background">
                    <nav className="container mx-auto px-4 max-w-6xl py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="https://github.com/ultravioletrs/cocos"
                            target="_blank"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-mono text-[0.65rem] uppercase tracking-[0.15em] px-3 py-2 rounded-sm w-fit"
                        >
                            Github
                            <ArrowUpRight className="h-3 w-3" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
