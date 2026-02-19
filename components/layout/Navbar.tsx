import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/ModeToggle';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/Cocos_logo-01.png"
                        alt="Cocos AI Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto dark:invert"
                    />
                </Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        <Link href="/solution" className="transition-colors hover:text-primary">Solution</Link>
                        <Link href="/#usecases" className="transition-colors hover:text-primary">Use Cases</Link>
                        <Link href="/#about" className="transition-colors hover:text-primary">About</Link>
                        <Link href="/docs" className="transition-colors hover:text-primary">Documentation</Link>
                        <Link href="/#contact" className="transition-colors hover:text-primary">Contact</Link>
                    </nav>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
