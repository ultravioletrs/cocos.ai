import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, Server, ShieldCheck, Terminal, Cpu, Lock } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Solution - Cocos AI',
    description: 'Learn how Cocos AI enables secure multi-party computation using Trusted Execution Environments (TEEs) and remote attestation.',
});

export default function SolutionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
                                    The Cocos AI Solution
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    A distributed, microservice-based system for confidential and privacy-preserving AI/ML execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Deep Dive Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    Secure Multi-Party Computation
                                </h2>
                                <p className="text-muted-foreground md:text-lg">
                                    Secure Multi-party Computation (SMPC) allows two or more parties to collectively perform computation
                                    and receive the resulting output without ever exposing any party’s sensitive input.
                                </p>
                                <p className="text-muted-foreground">
                                    With the advances in machine learning, parties can be, for example, the owners of sensitive data
                                    on one hand and the providers of machine learning models on the other. Cocos AI ensures that
                                    sensitive data is not exposed to the model providers and vice versa, while still delivering
                                    valuable results.
                                </p>
                                <div className="flex flex-col gap-2 pt-4">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="font-medium">Confidential Data Training</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="font-medium">Model IP Protection</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        <span className="font-medium">Verifiable Execution</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-xl overflow-hidden border shadow-xl bg-muted/50">
                                {/* Placeholder or specific image for SMPC */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/images/cocos-concept.png"
                                        alt="Cocos AI Concept"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEE Technology Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center lg:grid-flow-col-dense">
                            <div className="lg:col-start-2 space-y-4">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    Powered by Trusted Execution Environments
                                </h2>
                                <p className="text-muted-foreground md:text-lg">
                                    Cocos AI leverages Trusted Execution Environments (TEEs) like Intel SGX and AMD SEV to provide
                                    hardware-enforced isolation of in-use code and data.
                                </p>
                                <p className="text-muted-foreground">
                                    Cryptographic keys used for code and data isolation are randomly generated and stored on the
                                    processors, never exposed to the hypervisor or operating system. This ensures that even the
                                    cloud provider cannot access the user's data or code.
                                </p>
                            </div>
                            <div className="lg:col-start-1 relative aspect-video rounded-xl overflow-hidden border shadow-xl bg-background">
                                <Image
                                    src="/images/attestation.png"
                                    alt="Remote Attestation Process"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">System Architecture</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                A robust architecture containing multiple TEEs for code, data, and a central Security Policy Engine (SPE).
                            </p>
                        </div>

                        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] rounded-xl overflow-hidden border shadow-2xl mb-16">
                            <Image
                                src="/images/cocos-architecture.png"
                                alt="Cocos AI Architecture Diagram"
                                fill
                                className="object-contain bg-white"
                            />
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
                            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Server className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">TEE Manager</h3>
                                <p className="text-sm text-muted-foreground">
                                    Microservice running on host hardware to dynamically deploy and configure TEEs for confidential computations.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">In-Enclave Agent</h3>
                                <p className="text-sm text-muted-foreground">
                                    Lightweight component within the enclave serving as a coordinator for execution and remote attestation.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Cpu className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">HAL</h3>
                                <p className="text-sm text-muted-foreground">
                                    Hardware Abstraction Layer providing a unified interface for AMD SEV, Intel TDX, and other architectures.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg bg-muted/20">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Terminal className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg">CLI</h3>
                                <p className="text-sm text-muted-foreground">
                                    Command Line Interface for users to configure, manage, and monitor confidential computations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Platform Features</h2>
                            <p className="max-w-[700px] text-muted-foreground md:text-lg">
                                Comprehensive capabilities for secure AI workloads.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Secure VM Provisioning", desc: "Seamlessly deploy and maintain secure Virtual Machines." },
                                { title: "Hardware Abstraction Layer", desc: "Unified interface for AMD SEV and Intel TDX." },
                                { title: "End-to-End Encryption", desc: "Encrypted traffic safeguarding confidentiality and integrity." },
                                { title: "Remote Attestation", desc: "Verify the integrity of remote systems and establish trust." },
                                { title: "Multiple Runtimes", desc: "Support for Python, Docker, and WebAssembly workloads." },
                                { title: "SDK and CLI", desc: "Comprehensive tools to streamline development." },
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col space-y-2 border p-6 rounded-xl bg-background shadow-sm">
                                    <h3 className="text-xl font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                    Ready to get started?
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Explore the documentation or check out the code on GitHub.
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
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

