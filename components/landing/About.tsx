import Link from 'next/link';
import Image from 'next/image';

export function About() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Us</h2>
                        <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Cocos AI is an innovative project funded by the Serbian government’s Innovation Fund.
                        </p>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start max-w-5xl mx-auto">
                    {/* Ultraviolet */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-muted/20 border border-transparent hover:border-border/50 transition-colors">
                        <div className="relative h-16 w-48 mb-4">
                            <Image
                                src="/images/UltraViolet_logo-04.png"
                                alt="Ultraviolet Logo"
                                fill
                                className="object-contain dark:invert"
                            />
                        </div>
                        <h3 className="text-xl font-bold">Ultraviolet</h3>
                        <p className="text-muted-foreground">
                            A company with a reputation in the security domain, coordinating the project and building the user experience and SaaS offering. Ultraviolet ensures a high-quality product for the market.
                        </p>
                        <Link href="https://ultraviolet.rs/" target="_blank" className="text-primary hover:underline font-medium inline-flex items-center">
                            Visit Website
                        </Link>
                    </div>

                    {/* ETF */}
                    <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-muted/20 border border-transparent hover:border-border/50 transition-colors">
                        <div className="relative h-16 w-48 mb-4">
                            <Image
                                src="/images/etf.png"
                                alt="ETF Logo"
                                fill
                                className="object-contain dark:invert"
                            />
                        </div>
                        <h3 className="text-xl font-bold">ETF University of Belgrade</h3>
                        <p className="text-muted-foreground">
                            The top academic institution in the country. Experts in data security and protection bring novel research and IP into the product, focusing on TEEs and secure multi-party computation protocols.
                        </p>
                        <Link href="https://www.etf.bg.ac.rs/" target="_blank" className="text-primary hover:underline font-medium inline-flex items-center">
                            Visit Website
                        </Link>
                    </div>
                </div>

                <div className="mt-16 border-t pt-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <p className="text-sm text-muted-foreground">
                                The project is funded by the Innovation Fund from the budget of the Republic of Serbia from the division of the Ministry of Education, Science and Technological Development (Project ID 50314).
                            </p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="relative h-16 w-16">
                                <Image src="/images/fid-logo-rs-cir.svg" alt="Innovation Fund" fill className="object-contain" />
                            </div>
                            <div className="relative h-12 w-20">
                                <Image src="/images/zastava_srbije.jpg" alt="Republic of Serbia" fill className="object-contain rounded-sm" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
