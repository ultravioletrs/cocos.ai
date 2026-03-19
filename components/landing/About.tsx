import Link from 'next/link';
import Image from 'next/image';

export function About() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden" id="about">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/30 to-transparent dark:from-indigo-950/10 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h2>
                        <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Cocos AI is an ambitious project that started with the support of the School of Electrical Engineering (ETF), University of Belgrade, and the Serbian government&apos;s Innovation Fund. It has since evolved through several major European Union research initiatives, including CONFIDENTIAL6G, TITAN, and ELASTIC.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
                    {/* Lead Developer */}
                    <div className="flex flex-col justify-center space-y-4 border p-8 rounded-3xl bg-card shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-14 w-auto min-w-[120px]">
                            <Image src="/images/UltraViolet_logo-01.png" alt="Ultraviolet" fill className="object-contain object-left dark:invert" />
                        </div>
                        <h3 className="text-2xl font-bold">Ultraviolet</h3>
                        <p className="text-muted-foreground text-lg">
                            A specialized technology company with a strong reputation in the security domain. Ultraviolet coordinates the project, builds the user experience, and manages the SaaS offering, leading the development and commercialization of the Cocos AI platform.
                        </p>
                        <Link href="https://ultraviolet.rs/" target="_blank" className="text-primary hover:underline font-semibold inline-flex items-center text-lg mt-2">
                            Visit Website
                        </Link>
                    </div>

                    {/* Research & Funding Partners Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col justify-center space-y-3 border p-6 rounded-2xl bg-muted/20 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="relative h-10 w-auto min-w-[80px]">
                                <Image src="/images/etf.png" alt="University of Belgrade" fill className="object-contain object-left" />
                            </div>
                            <h4 className="text-lg font-bold">ETF Belgrade</h4>
                            <p className="text-xs text-muted-foreground">Original research partner and expertise provider for TEE and cryptographic protocols.</p>
                        </div>
                        <Link href="https://www.ultraviolet.rs/projects/confidential6g/" target="_blank" className="flex flex-col justify-center space-y-3 border p-6 rounded-2xl bg-muted/20 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="relative h-10 w-auto min-w-[80px]">
                                <Image src="/images/logos/confidential6g.png" alt="CONFIDENTIAL6G" fill className="object-contain object-left" />
                            </div>
                            <h4 className="text-lg font-bold">CONFIDENTIAL6G</h4>
                            <p className="text-xs text-muted-foreground">Quantum-resistant cryptographic protocols and security frameworks for 6G confidential computing.</p>
                        </Link>
                        <Link href="https://www.ultraviolet.rs/projects/elastic/" target="_blank" className="flex flex-col justify-center space-y-3 border p-6 rounded-2xl bg-muted/20 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="relative h-10 w-auto min-w-[80px]">
                                <Image src="/images/logos/elastic.webp" alt="ELASTIC" fill className="object-contain object-left invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0" />
                            </div>
                            <h4 className="text-lg font-bold">ELASTIC</h4>
                            <p className="text-xs text-muted-foreground">Next-gen network orchestration using WebAssembly and Confidential Computing for 6G.</p>
                        </Link>
                        <Link href="https://www.ultraviolet.rs/projects/titan/" target="_blank" className="flex flex-col justify-center space-y-3 border p-6 rounded-2xl bg-muted/20 opacity-90 hover:opacity-100 transition-opacity">
                            <div className="relative h-10 w-auto min-w-[80px]">
                                <Image src="/images/logos/titan.svg" alt="TITAN" fill className="object-contain object-left dark:invert dark:hue-rotate-180" />
                            </div>
                            <h4 className="text-lg font-bold">TITAN</h4>
                            <p className="text-xs text-muted-foreground">Trusted AI & Privacy-Preserving Technologies building secure AI systems via TEEs.</p>
                        </Link>
                    </div>
                </div>

                <div className="mt-16 border-t pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="max-w-2xl">
                            <p className="text-sm text-muted-foreground mb-4">
                                The project was initiated with the support of the School of Electrical Engineering (ETF), University of Belgrade, and funded by the Innovation Fund from the budget of the Republic of Serbia from the division of the Ministry of Education, Science and Technological Development (Project ID 50314).
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Further developed through groundbreaking research in EU-funded projects: <Link href="https://www.ultraviolet.rs/projects/confidential6g/" target="_blank" className="text-primary hover:underline">CONFIDENTIAL6G</Link>, <Link href="https://www.ultraviolet.rs/projects/titan/" target="_blank" className="text-primary hover:underline">TITAN</Link>, and <Link href="https://www.ultraviolet.rs/projects/elastic/" target="_blank" className="text-primary hover:underline">ELASTIC</Link>.
                            </p>
                        </div>
                        <div className="flex gap-6 items-center flex-wrap justify-center md:justify-start">
                            <div className="relative h-16 w-16">
                                <Image src="/images/fid-logo-rs-cir.svg" alt="Innovation Fund" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-20">
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
