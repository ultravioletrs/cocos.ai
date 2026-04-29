import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b border-border" id="contact">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="max-w-3xl mb-12">
                    <p className="eyebrow mb-4">// Contact</p>
                    <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-4">
                        Talk to the team
                    </h2>
                    <p className="text-muted-foreground md:text-lg font-light leading-relaxed">
                        Reach out for partnerships, deployments, or research collaboration.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-3">
                    {/* Address card */}
                    <div className="border border-border rounded-sm p-8 bg-card flex flex-col gap-6">
                        <p className="eyebrow-accent">// Headquarters</p>

                        <div className="relative h-14 w-48">
                            <Image
                                src="/images/UltraViolet_logo-04.png"
                                alt="Ultraviolet"
                                fill
                                className="object-contain object-left dark:invert"
                            />
                        </div>

                        <div className="font-mono text-sm leading-relaxed text-muted-foreground border border-dashed border-border rounded-sm p-4 bg-secondary/40">
                            <div>Ultraviolet d.o.o.</div>
                            <div>Bulevar Arsenija Čarnojevića 103/4</div>
                            <div>11000 Belgrade, Serbia</div>
                        </div>

                        <Link
                            href="mailto:info@ultraviolet.rs"
                            className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:opacity-80 transition-opacity w-fit"
                        >
                            <span className="underline underline-offset-4">info@ultraviolet.rs</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    {/* Map */}
                    <div className="aspect-video lg:aspect-auto rounded-sm overflow-hidden border border-border">
                        <iframe
                            src="https://maps.google.com/maps?q=Bulevar%20Arsenija%20%C4%8Carnojevica%20103/4,%20Beograd,%20Serbia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '320px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale-[0.3] dark:invert dark:hue-rotate-180"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
