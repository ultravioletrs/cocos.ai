"use client"

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t py-12 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/img/ultraviolet-logo.svg"
                                alt="Ultraviolet"
                                width={120}
                                height={30}
                                className="h-8 w-auto dark:invert"
                            />
                        </Link>
                        <p className="text-muted-foreground">
                            Advanced AI solutions with confidential computing and secure data processing.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><Link href="/#features" className="text-muted-foreground hover:text-primary">Features</Link></li>
                            <li><Link href="/docs" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
                            <li><Link href="https://github.com/ultravioletrs/cocos" className="text-muted-foreground hover:text-primary">Cocos AI (Open Source)</Link></li>
                            <li><Link href="/solution" className="text-muted-foreground hover:text-primary">Solution</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://twitter.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">Twitter</Link></li>
                            <li><Link href="https://linkedin.com/company/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">LinkedIn</Link></li>
                            <li><Link href="https://github.com/ultravioletrs" target="_blank" className="text-muted-foreground hover:text-primary">GitHub</Link></li>
                            <li><Link href="mailto:info@ultraviolet.rs" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Newsletter</h3>
                        <p className="text-muted-foreground mb-4">
                            Stay updated with our latest developments.
                        </p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-background border rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-primary w-full"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:opacity-90 transition-opacity"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Ultraviolet. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/imprint" className="hover:text-primary">Imprint</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
