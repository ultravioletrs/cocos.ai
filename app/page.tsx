import Link from 'next/link';
import { Partners } from '@/components/landing/Partners';
import { UseCases } from '@/components/landing/UseCases';
import { About } from '@/components/landing/About';
import { Contact } from '@/components/landing/Contact';
import { HeroVisual } from '@/components/landing/HeroVisual';
import { ArchitectureDiagram } from '@/components/landing/ArchitectureDiagram';
import { createMetadata } from '@/lib/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, ArrowUpRight, Shield, Cpu, Lock, Check, X, Box, Network, Terminal, Zap, GitBranch, Code2 } from 'lucide-react';

export const metadata = createMetadata({
    title: 'Cocos AI - Open Source Confidential Computing System',
    description: 'Cocos AI is an open-source system for running confidential workloads with a CVM manager, in-enclave Agent, and secure remote attestation.',
});

const howItWorks = [
    {
        n: '01',
        icon: Shield,
        title: 'Secure Enclaves',
        body: 'Data and code are isolated in hardware-encrypted Trusted Execution Environments — AMD SEV-SNP, Intel TDX.',
        meta: '// AMD-SEV · INTEL-TDX',
    },
    {
        n: '02',
        icon: Cpu,
        title: 'Remote Attestation',
        body: 'Cryptographic proofs verify the workload is running on genuine hardware and the expected, untampered binary.',
        meta: '// VTPM · MAA · SEV-AGENT',
    },
    {
        n: '03',
        icon: Lock,
        title: 'Confidential Compute',
        body: 'Compute over encrypted data without exposing it to the cloud provider, hypervisor, or infrastructure operator.',
        meta: '// IN-USE ENCRYPTION',
    },
];

const traditionalDrawbacks = [
    'Plaintext data exposed to the cloud provider',
    'Implicit trust in the hypervisor and host OS',
    'No cryptographic proof of execution integrity',
    'Compliance burden falls on the data owner',
];

const cocosBenefits = [
    'Hardware-isolated TEEs (AMD SEV-SNP, Intel TDX)',
    'Cryptographic remote attestation, end-to-end',
    'Encrypted in-use data — invisible to the host',
    'Open-source. Apache 2.0. Self-hostable.',
];

const features = [
    { icon: Box, title: 'SECURE_VM_PROVISIONING', desc: 'Deploy and maintain confidential virtual machines.' },
    { icon: Cpu, title: 'HARDWARE_ABSTRACTION', desc: 'Unified interface for AMD SEV and Intel TDX.' },
    { icon: Terminal, title: 'IN_ENCLAVE_AGENT', desc: 'Execution scheduler and coordinator within the enclave.' },
    { icon: Lock, title: 'END_TO_END_ENCRYPTION', desc: 'Encrypted traffic, data, and execution state.' },
    { icon: Shield, title: 'REMOTE_ATTESTATION', desc: 'Verify integrity and establish trust over the wire.' },
    { icon: Network, title: 'MULTIPLE_RUNTIMES', desc: 'Python, Docker, and WebAssembly workloads.' },
    { icon: Code2, title: 'SDK_AND_CLI', desc: 'First-class developer tooling for secure pipelines.' },
    { icon: Zap, title: 'HIGH_PERFORMANCE', desc: 'Small footprint, near-bare-metal execution.' },
    { icon: GitBranch, title: 'OPEN_SOURCE', desc: 'Apache 2.0 — auditable, forkable, accountable.' },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                {/* Hero */}
                <section className="relative w-full border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-60" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-24 lg:py-32">
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
                            <div className="flex flex-col gap-8">
                                <p className="eyebrow-accent">// Confidential AI Infrastructure</p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl/[1.05] font-display font-medium tracking-[-0.02em] text-foreground">
                                    Unlock collaborative AI with hardware-level privacy.
                                </h1>
                                <p className="max-w-xl text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                                    The open-source foundation for confidential computing. Train and run AI models on sensitive data inside secure enclaves — with end-to-end attestation and zero trust in the host.
                                </p>
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
                                        Read Docs
                                        <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>
                                </div>

                                {/* terminal snippet */}
                                <div className="terminal max-w-md mt-4 hidden md:block">
                                    <span className="text-muted-foreground">$</span>{' '}
                                    <span className="text-foreground">go install</span>{' '}
                                    <span className="text-primary">github.com/ultravioletrs/cocos@latest</span>
                                </div>
                            </div>

                            <HeroVisual />
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="w-full py-16 md:py-24 lg:py-32 bg-background border-b border-border">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">// How It Works</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
                                Secure multi-party computation, by construction
                            </h2>
                        </div>

                        <div className="grid gap-3 lg:grid-cols-3">
                            {howItWorks.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={step.n}
                                        className="flex flex-col gap-5 border border-border rounded-sm p-8 bg-card hover:border-primary transition-colors"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-mono text-3xl text-primary">{step.n}</span>
                                            <Icon className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <h3 className="text-2xl font-display font-medium tracking-tight">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed flex-1">{step.body}</p>
                                        <p className="eyebrow-accent">{step.meta}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12">
                            <Link
                                href="/solution"
                                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary hover:opacity-80 transition-opacity group"
                            >
                                Learn More About The Solution
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Partners */}
                <Partners />

                {/* Comparison block */}
                <section className="relative w-full py-16 md:py-24 lg:py-32 bg-background border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-40" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">// Why Cocos</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
                                For decades, AI on sensitive data forced a compromise
                            </h2>
                            <p className="mt-4 text-muted-foreground md:text-lg font-light leading-relaxed">
                                Either you trust the cloud — or you build everything from scratch. Cocos AI removes that tradeoff.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-3">
                            {/* Traditional */}
                            <div className="border border-border rounded-sm p-8 bg-card">
                                <p className="eyebrow mb-2">// Status Quo</p>
                                <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-2">
                                    Traditional Cloud AI
                                </h3>
                                <p className="text-sm text-muted-foreground font-mono mb-6">Speed and integration, but at a cost</p>
                                <ul className="space-y-3">
                                    {traditionalDrawbacks.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <X className="h-4 w-4 mt-1 shrink-0 text-destructive" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cocos */}
                            <div className="border border-primary rounded-sm p-8 bg-card relative">
                                <div className="absolute -top-3 left-6 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground bg-primary px-2 py-0.5">
                                    Cocos AI
                                </div>
                                <p className="eyebrow-accent mb-2">// The New Default</p>
                                <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-2">
                                    Confidential by design
                                </h3>
                                <p className="text-sm text-muted-foreground font-mono mb-6">Hardware-rooted trust, no compromises</p>
                                <ul className="space-y-3">
                                    {cocosBenefits.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground">
                                            <Check className="h-4 w-4 mt-1 shrink-0 text-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />

                {/* Use Cases */}
                <UseCases />

                {/* Features */}
                <section className="w-full py-16 md:py-24 lg:py-32 bg-background border-b border-border" id="features">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">// Capabilities</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
                                One platform. Every confidential workload.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {features.map((f) => {
                                const Icon = f.icon;
                                return (
                                    <div
                                        key={f.title}
                                        className="flex flex-col gap-4 border border-border rounded-sm p-6 bg-card hover:border-primary transition-colors group"
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="font-mono text-xs uppercase tracking-[0.15em] text-foreground group-hover:text-primary transition-colors">
                                                &gt; {f.title}
                                            </span>
                                            <Icon className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Architecture */}
                <section className="relative w-full py-16 md:py-24 lg:py-32 bg-background border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-12">
                            <p className="eyebrow mb-4">// System Architecture</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground">
                                Robust by design, scalable by default
                            </h2>
                        </div>

                        <ArchitectureDiagram />

                        <div className="mt-12">
                            <Link
                                href="/docs/architecture-components/architecture"
                                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-primary hover:opacity-80 transition-opacity group"
                            >
                                Architecture Deep Dive
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Band */}
                <section className="relative w-full py-20 md:py-28 bg-background border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-40" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="max-w-3xl mb-10">
                            <p className="eyebrow-accent mb-4">// Get Started</p>
                            <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-4">
                                Run sensitive AI workloads — without trusting the host.
                            </h2>
                            <p className="text-muted-foreground md:text-lg font-light leading-relaxed">
                                Self-host the open-source stack today, or talk to the team about deployments.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Link
                                href="https://github.com/ultravioletrs/cocos"
                                target="_blank"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-primary px-6 font-mono text-xs uppercase tracking-[0.15em] text-primary-foreground hover:opacity-90 transition-opacity"
                            >
                                Clone the Repo
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                            <Link
                                href="#contact"
                                className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 font-mono text-xs uppercase tracking-[0.15em] text-foreground hover:border-primary transition-colors"
                            >
                                Talk to Us
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
