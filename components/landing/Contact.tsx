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

                <div className="max-w-3xl mx-auto">
                    {/* Ultraviolet Contact */}
                    <div className="flex flex-col space-y-8 items-center">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="relative h-16 w-64">
                                <Image
                                    src="/images/UltraViolet_logo-04.png"
                                    alt="Ultraviolet Logo"
                                    fill
                                    className="object-contain dark:invert"
                                />
                            </div>
                            <div className="space-y-1 text-muted-foreground text-lg">
                                <p>Bulevar Arsenija Čarnojevića 103/4</p>
                                <p>11000 Belgrade, Serbia</p>
                                <Link href="mailto:info@ultraviolet.rs" className="text-primary hover:underline font-semibold block mt-4 text-xl">
                                    info@ultraviolet.rs
                                </Link>
                            </div>
                        </div>
                        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border shadow-lg">
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
                </div>
            </div>
        </section>
    );
}
