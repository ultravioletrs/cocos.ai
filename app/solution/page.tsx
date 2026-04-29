import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, Server, ShieldCheck, Terminal, Cpu, ArrowRight, ArrowUpRight } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: 'Solution - Cocos AI',
    description: 'Learn how Cocos AI enables secure multi-party computation using Trusted Execution Environments (TEEs) and remote attestation.',
});

const components = [
    {
        icon: Server,
        title: 'TEE_MANAGER',
        desc: 'Microservice running on host hardware to dynamically deploy and configure TEEs for confidential computations.',
    },
    {
        icon: ShieldCheck,
        title: 'IN_ENCLAVE_AGENT',
        desc: 'Lightweight component within the enclave serving as a coordinator for execution and remote attestation.',
    },
    {
        icon: Cpu,
        title: 'HAL',
        desc: 'Hardware Abstraction Layer providing a unified interface for AMD SEV, Intel TDX, and other architectures.',
    },
    {
        icon: Terminal,
        title: 'CLI',
        desc: 'Command-line interface for users to configure, manage, and monitor confidential computations.',
    },
];

const platformFeatures = [
    { title: 'SECURE_VM_PROVISIONING', desc: 'Seamlessly deploy and maintain confidential virtual machines.' },
    { title: 'HARDWARE_ABSTRACTION', desc: 'Unified interface for AMD SEV and Intel TDX.' },
    { title: 'END_TO_END_ENCRYPTION', desc: 'Encrypted traffic, data, and execution state.' },
    { title: 'REMOTE_ATTESTATION', desc: 'Verify the integrity of remote systems and establish trust.' },
    { title: 'MULTIPLE_RUNTIMES', desc: 'Python, Docker, and WebAssembly workloads.' },
    { title: 'SDK_AND_CLI', desc: 'Comprehensive tools to streamline development.' },
];

export default function SolutionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative w-full border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-24 lg:py-32">
                        <div className="max-w-4xl">
                            <p className="eyebrow-accent mb-6">{'// '}Solution</p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl/[1.05] font-display font-medium tracking-[-0.02em] text-foreground mb-6">
                                The Cocos AI solution.
                            </h1>
                            <p className="max-w-2xl text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                                A distributed, microservice-based system for confidential and privacy-preserving AI/ML execution — built on Trusted Execution Environments and remote attestation.
                            </p>
                            <div className="mt-4 inline-block border-b-2 border-primary w-24" />
                        </div>
                    </div>
                </section>

                {/* SMPC */}
                <section className="w-full py-16 md:py-24 lg:py-32 border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                            <div className="space-y-6">
                                <p className="eyebrow">{'// '}Secure Multi-Party Computation</p>
                                <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
                                    Compute together, reveal nothing
                                </h2>
                                <p className="text-muted-foreground md:text-lg leading-relaxed font-light">
                                    Secure Multi-party Computation (SMPC) allows two or more parties to collectively perform computation
                                    and receive the resulting output without ever exposing any party&apos;s sensitive input.
                                </p>
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    With advances in machine learning, parties can be the owners of sensitive data on one hand and
                                    providers of machine learning models on the other. Cocos AI ensures that sensitive data is not
                                    exposed to the model providers and vice versa, while still delivering valuable results.
                                </p>
                                <div className="flex flex-col gap-3 pt-4">
                                    {[
                                        'Confidential Data Training',
                                        'Model IP Protection',
                                        'Verifiable Execution',
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                            <span className="font-mono text-sm uppercase tracking-[0.1em]">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-sm overflow-hidden border border-border bg-card">
                                <Image
                                    src="/images/cocos-concept.png"
                                    alt="Cocos AI Concept"
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* TEE Technology */}
                <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/40 border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center lg:grid-flow-col-dense">
                            <div className="lg:col-start-2 space-y-6">
                                <p className="eyebrow">{'// '}Trusted Execution Environments</p>
                                <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
                                    Hardware-rooted isolation
                                </h2>
                                <p className="text-muted-foreground md:text-lg leading-relaxed font-light">
                                    Cocos AI leverages Trusted Execution Environments (TEEs) like Intel TDX and AMD SEV to provide
                                    hardware-enforced isolation of in-use code and data.
                                </p>
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    Cryptographic keys used for code and data isolation are randomly generated and stored on the
                                    processors — never exposed to the hypervisor or operating system. This ensures that even the
                                    cloud provider cannot access the user&apos;s data or code.
                                </p>
                            </div>
                            <div className="lg:col-start-1 relative aspect-video rounded-sm overflow-hidden border border-border bg-card">
                                <Image
                                    src="/images/attestation.png"
                                    alt="Remote attestation process"
                                    fill
                                    className="object-contain p-6"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture */}
                <section className="relative w-full py-16 md:py-24 lg:py-32 border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-40" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">{'// '}System Architecture</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
                                Multiple TEEs, one orchestrator
                            </h2>
                            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed font-light">
                                A robust architecture containing TEEs for code, data, and a central Security Policy Engine.
                            </p>
                        </div>

                        <div className="relative w-full aspect-[2/1] rounded-sm overflow-hidden border border-border bg-card mb-16">
                            <Image
                                src="/images/cocos-architecture.png"
                                alt="Cocos AI architecture diagram"
                                fill
                                className="object-contain p-6"
                            />
                        </div>

                        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                            {components.map((c) => {
                                const Icon = c.icon;
                                return (
                                    <div
                                        key={c.title}
                                        className="flex flex-col gap-4 border border-border rounded-sm p-6 bg-card hover:border-primary transition-colors"
                                    >
                                        <div className="flex items-start justify-between">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-foreground">{c.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/40 border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">{'// '}Platform Features</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight">
                                Comprehensive capabilities for secure AI workloads
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                            {platformFeatures.map((f) => (
                                <div key={f.title} className="flex flex-col gap-3 border border-border rounded-sm p-6 bg-card hover:border-primary transition-colors">
                                    <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-foreground">&gt; {f.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative w-full py-20 md:py-28 border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-40" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-10">
                            <p className="eyebrow-accent mb-4">{'// '}Get Started</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight mb-4">
                                Ready to deploy confidential AI?
                            </h2>
                            <p className="text-muted-foreground md:text-lg font-light leading-relaxed">
                                Explore the documentation or check out the code on GitHub.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Link
                                href="https://github.com/ultravioletrs/cocos"
                                target="_blank"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary px-6 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground hover:opacity-90 transition-opacity"
                            >
                                View on GitHub
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                                href="/docs"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 font-mono text-xs uppercase tracking-[0.15em] text-foreground hover:border-primary transition-colors"
                            >
                                Read Documentation
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
