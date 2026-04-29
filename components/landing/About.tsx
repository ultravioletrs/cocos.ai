import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const partners = [
    {
        name: 'ETF Belgrade',
        logo: '/images/etf.png',
        href: undefined,
        eyebrow: '// Research',
        desc: 'Original research partner and expertise provider for TEE and cryptographic protocols.',
    },
    {
        name: 'CONFIDENTIAL6G',
        logo: '/images/logos/confidential6g.png',
        href: 'https://www.ultraviolet.rs/projects/confidential6g/',
        eyebrow: '// EU Project',
        desc: 'Quantum-resistant cryptography and security frameworks for 6G confidential computing.',
    },
    {
        name: 'ELASTIC',
        logo: '/images/logos/elastic.webp',
        href: 'https://www.ultraviolet.rs/projects/elastic/',
        eyebrow: '// EU Project',
        desc: 'Next-gen network orchestration using WebAssembly and confidential computing for 6G.',
        invertLogo: true,
    },
    {
        name: 'TITAN',
        logo: '/images/logos/titan.svg',
        href: 'https://www.ultraviolet.rs/projects/titan/',
        eyebrow: '// EU Project',
        desc: 'Trusted AI & privacy-preserving technologies building secure AI systems via TEEs.',
        darkInvert: true,
    },
];

export function About() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b border-border" id="about">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="max-w-3xl mb-12">
                    <p className="eyebrow mb-4">{'// '}About</p>
                    <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-4">
                        Built in research, hardened in production
                    </h2>
                    <p className="text-muted-foreground md:text-lg font-light leading-relaxed">
                        Cocos AI started with the support of the School of Electrical Engineering (ETF), University of Belgrade, and the Serbian government&apos;s Innovation Fund. It has since evolved through several major European Union research initiatives, including CONFIDENTIAL6G, TITAN, and ELASTIC.
                    </p>
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                    {/* Lead Developer */}
                    <div className="flex flex-col justify-between border border-border rounded-sm p-8 bg-card">
                        <div>
                            <p className="eyebrow-accent mb-6">{'// '}Lead Developer</p>
                            <div className="relative h-12 w-auto min-w-[140px] mb-6">
                                <Image src="/images/UltraViolet_logo-01.png" alt="Ultraviolet" fill className="object-contain object-left dark:invert" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-4">Ultraviolet</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                A specialized technology company with a strong reputation in the security domain. Ultraviolet coordinates the project, builds the user experience, and manages the SaaS offering — leading the development and commercialization of the Cocos AI platform.
                            </p>
                        </div>
                        <Link
                            href="https://ultraviolet.rs/"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 mt-8 font-mono text-xs uppercase tracking-[0.15em] text-primary hover:opacity-80 transition-opacity w-fit"
                        >
                            Visit Ultraviolet
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    {/* Research & Funding Partners Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {partners.map((p) => {
                            const cardClass = "flex flex-col justify-between border border-border rounded-sm p-6 bg-card hover:border-primary transition-colors group";
                            const inner = (
                                <div>
                                    <p className="eyebrow mb-4">{p.eyebrow}</p>
                                    <div className="relative h-10 w-auto min-w-[80px] mb-4">
                                        <Image
                                            src={p.logo}
                                            alt={p.name}
                                            fill
                                            className={`object-contain object-left ${
                                                p.invertLogo ? 'invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0' : ''
                                            } ${p.darkInvert ? 'dark:invert dark:hue-rotate-180' : ''}`}
                                        />
                                    </div>
                                    <h4 className="text-lg font-display font-medium mb-2 group-hover:text-primary transition-colors">
                                        {p.name}
                                    </h4>
                                    <p className="text-xs text-muted-foreground font-light leading-relaxed">{p.desc}</p>
                                </div>
                            );
                            return p.href ? (
                                <Link key={p.name} href={p.href} target="_blank" className={cardClass}>
                                    {inner}
                                </Link>
                            ) : (
                                <div key={p.name} className={cardClass}>
                                    {inner}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 pt-12 border-t border-border">
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                        <div className="max-w-2xl space-y-3">
                            <p className="eyebrow">{'// '}Funded By</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Initiated with support from the School of Electrical Engineering (ETF), University of Belgrade, and funded by the Innovation Fund from the Republic of Serbia (Project ID 50314). Further developed through EU-funded projects: <Link href="https://www.ultraviolet.rs/projects/confidential6g/" target="_blank" className="text-primary hover:underline font-mono">CONFIDENTIAL6G</Link>, <Link href="https://www.ultraviolet.rs/projects/titan/" target="_blank" className="text-primary hover:underline font-mono">TITAN</Link>, and <Link href="https://www.ultraviolet.rs/projects/elastic/" target="_blank" className="text-primary hover:underline font-mono">ELASTIC</Link>.
                            </p>
                        </div>
                        <div className="flex gap-6 items-center flex-wrap">
                            <div className="relative h-14 w-14">
                                <Image src="/images/fid-logo-rs-cir.svg" alt="Innovation Fund" fill className="object-contain" />
                            </div>
                            <div className="relative h-10 w-16">
                                <Image src="/images/zastava_srbije.jpg" alt="Republic of Serbia" fill className="object-contain rounded-sm" />
                            </div>
                            <div className="relative h-12 w-12">
                                <Image src="/images/eu.png" alt="European Union" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
