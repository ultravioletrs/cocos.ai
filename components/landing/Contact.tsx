import Link from 'next/link';
import Image from 'next/image';

export function Contact() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background relative overflow-hidden" id="contact">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/20 to-transparent dark:from-indigo-950/10 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Us</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Reach out to us for more information or collaboration opportunities.
                        </p>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Ultraviolet Contact */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative h-12 w-48">
                                <Image
                                    src="/images/UltraViolet_logo-04.png"
                                    alt="Ultraviolet Logo"
                                    fill
                                    className="object-contain object-left dark:invert"
                                />
                            </div>
                            <h3 className="text-2xl font-bold hidden">Ultraviolet</h3>
                            <div className="space-y-1 text-muted-foreground">
                                <p>Bulevar Arsenija Čarnojevića 103/4</p>
                                <p>11000 Belgrade</p>
                                <p>Serbia</p>
                                <Link href="mailto:info@ultraviolet.rs" className="text-primary hover:underline font-medium block mt-2">
                                    info@ultraviolet.rs
                                </Link>
                            </div>
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden border shadow-sm">
                            <iframe
                                src="https://maps.google.com/maps?q=Bulevar%20Arsenija%20%C4%8Carnojevica%20103/4,%20Beograd,%20Serbia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* ETF Contact */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                            <div className="relative h-12 w-48">
                                <Image
                                    src="/images/etf.png"
                                    alt="ETF Logo"
                                    fill
                                    className="object-contain object-left dark:invert"
                                />
                            </div>
                            <h3 className="text-2xl font-bold hidden">ETF University of Belgrade</h3>
                            <div className="space-y-1 text-muted-foreground">
                                <p>Bulevar Kralja Aleksandra 73</p>
                                <p>11120 Belgrade</p>
                                <p>Serbia</p>
                                {/* Spacer to align with Ultraviolet email link if needed, or just leave empty */}
                                <div className="h-[24px] mt-2"></div>
                            </div>
                        </div>
                        <div className="w-full aspect-video rounded-xl overflow-hidden border shadow-sm">
                            <iframe
                                src="https://maps.google.com/maps?q=elektrotehnicki%20fakultet&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
