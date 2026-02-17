import Link from 'next/link';
import Image from 'next/image';
import { Partners } from '@/components/landing/Partners';
import { UseCases } from '@/components/landing/UseCases';
import { About } from '@/components/landing/About';
import { Resources } from '@/components/landing/Resources';
import { ModeToggle } from '@/components/ModeToggle';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Cocos AI - Open Source Confidential Computing System',
    description: 'Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.',
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Navbar */}
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
                            <Link href="#solution" className="transition-colors hover:text-primary">Solution</Link>
                            <Link href="#usecases" className="transition-colors hover:text-primary">Use Cases</Link>
                            <Link href="#about" className="transition-colors hover:text-primary">About</Link>
                            <Link href="#resources" className="transition-colors hover:text-primary">Resources</Link>
                            <Link href="/docs" className="transition-colors hover:text-primary">Documentation</Link>
                            <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
                        </nav>
                        <ModeToggle />
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-indigo-50/50 via-background to-blue-50/50 dark:from-indigo-950/20 dark:via-background dark:to-blue-950/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                                        Introducing Cocos AI
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        An open-source system designed for running confidential workloads. Features a CVM manager, in-enclave Agent, and secure remote attestation.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link
                                        href="https://github.com/ultravioletrs/cocos"
                                        target="_blank"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        View on GitHub
                                    </Link>
                                    <Link
                                        href="/docs"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Read Documentation
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* Using Collaborative AI.drawio.svg */}
                                <div className="relative w-full aspect-video">
                                    <Image
                                        src="/images/Collaborative AI.drawio.svg"
                                        alt="Cocos AI Architecture"
                                        fill
                                        className="object-contain drop-shadow-xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <Partners />

                {/* Confidential Computing Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden" id="solution">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/30 to-transparent dark:from-indigo-950/10 pointer-events-none" />
                    <div className="container mx-auto px-4 md:px-6 relative">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
                                    Confidential Computing
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Cocos AI ensures the privacy of sensitive data through secure multi-party computation (SMPC) and trusted execution environments.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="relative h-12 w-auto min-w-[100px]">
                                        <Image src="/images/UltraViolet_logo-01.png" alt="Ultraviolet" fill className="object-contain object-left" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">Ultraviolet</h3>
                                <p className="text-muted-foreground">Specialized high-tech services in cybersecurity, focusing on confidential computing in cloud, telecom, and AI/ML.</p>
                            </div>
                            <div className="flex flex-col justify-center space-y-4 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center space-x-4 mb-2">
                                    <div className="relative h-12 w-auto min-w-[100px]">
                                        <Image src="/images/etf.png" alt="University of Belgrade" fill className="object-contain object-left" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold">University of Belgrade</h3>
                                <p className="text-muted-foreground">School of Electrical Engineering, a leading academic institution in the region.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <UseCases />

                {/* Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative" id="features">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">Key Features</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Powerful capabilities for secure and efficient AI workloads.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Secure VM Provisioning", desc: "Seamlessly deploy and maintain secure Virtual Machines." },
                                { title: "Hardware Abstraction Layer", desc: "Unified interface for AMD SEV and Intel TDX." },
                                { title: "In-Enclave Agent", desc: "Execution scheduler and coordinator within secure enclaves." },
                                { title: "End-to-End Encryption", desc: "Encrypted traffic safeguarding confidentiality and integrity." },
                                { title: "Remote Attestation", desc: "Verify the integrity of remote systems and establish trust." },
                                { title: "Multiple Runtimes", desc: "Support for Python, Docker, and WebAssembly workloads." },
                                { title: "SDK and CLI", desc: "Comprehensive tools to streamline development." },
                                { title: "High Performance", desc: "Small memory footprint and lightning-fast execution." },
                                { title: "Open Source", desc: "Apache 2.0 license, fostering transparency." },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-200 group">
                                    <h3 className="text-xl font-bold text-center group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground text-center">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <About />

                {/* Resources Section */}
                <Resources />

                {/* Architecture Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/20 to-transparent dark:from-indigo-950/10 pointer-events-none" />
                    <div className="container mx-auto px-4 md:px-6 relative">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">Architecture</h2>
                                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    A robust system designed for security and scalability.
                                </p>
                            </div>
                            <div className="w-full max-w-4xl py-6">
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border shadow-2xl">
                                    <Image
                                        src="/images/cocos-architecture.png"
                                        alt="Cocos AI Architecture"
                                        fill
                                        className="object-contain bg-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="w-full border-t py-6 bg-muted/10" id="contact">
                <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Cocos AI. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Link href="mailto:info@ultraviolet.rs" className="hover:text-primary hover:underline">info@ultraviolet.rs</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
