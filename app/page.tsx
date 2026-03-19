import Link from 'next/link';
import Image from 'next/image';
import { Partners } from '@/components/landing/Partners';
import { UseCases } from '@/components/landing/UseCases';
import { About } from '@/components/landing/About';
import { Contact } from '@/components/landing/Contact';
import { createMetadata } from '@/lib/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, Shield, Cpu, Lock } from 'lucide-react';

export const metadata = createMetadata({
    title: 'Cocos AI - Open Source Confidential Computing System',
    description: 'Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.',
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full min-h-[calc(100vh-64px)] flex items-center py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-indigo-50/50 via-background to-blue-50/50 dark:from-indigo-950/20 dark:via-background dark:to-blue-950/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/tight pb-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400">
                                        Unlock Collaborative AI with Hardware-Level Privacy
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        The open-source foundation for confidential computing. Train and run AI models on sensitive data within secure enclaves, ensuring complete data sovereignty and trust.
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
                                <div className="relative w-full aspect-square max-w-[600px]">
                                    <Image
                                        src="/images/hero-technical.png"
                                        alt="Cocos AI Collaborative Secure Computing Architecture"
                                        fill
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partners Section */}
                <Partners />

                {/* How It Works Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                                    How It Works
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Secure Multi-Party Computation made simple and scalable.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">1. Secure Enclaves</h3>
                                <p className="text-muted-foreground">
                                    Data and code are isolated in hardware-encrypted Trusted Execution Environments (TEEs) like AMD SEV.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Cpu className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">2. Remote Attestation</h3>
                                <p className="text-muted-foreground">
                                    Cryptographic proof ensures that the workload is running on genuine hardware and hasn&apos;t been tampered with.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Lock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold">3. Confidential Computing</h3>
                                <p className="text-muted-foreground">
                                    Compute on encrypted data without ever exposing it to the cloud provider or infrastructure owner.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Link
                                href="/solution"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group"
                            >
                                Learn More About The Solution
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <About />

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
                            <div className="flex justify-center">
                                <Link
                                    href="/docs/architecture-components/architecture"
                                    className="inline-flex h-11 items-center justify-center rounded-md border border-primary/50 bg-background px-6 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 group"
                                >
                                    Learn More About The Architecture
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

