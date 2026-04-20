import Image from 'next/image';

const partners = [
    { name: 'European Commission', logo: '/images/logos/eu.png' },
    { name: 'Telefónica', logo: '/images/logos/telefonica.png' },
    { name: 'VTT', logo: '/images/logos/vtt.png' },
    { name: 'Fujitsu', logo: '/images/logos/fujitsu.png' },
    { name: 'Fraunhofer', logo: '/images/logos/fraunhofer.png' },
    { name: 'TNO', logo: '/images/logos/tno.png' },
    { name: 'Ericsson', logo: '/images/logos/ericsson.png' },
    { name: 'Nokia', logo: '/images/logos/nokia.png' },
    { name: 'Inserm', logo: '/images/logos/inserm.png' },
    { name: 'TU Eindhoven', logo: '/images/logos/tue.png' },
    { name: 'Thales', logo: '/images/logos/thales.png' },
    { name: 'Imdea', logo: '/images/logos/imdea.svg' },
    { name: 'IF', logo: '/images/logos/if.png' },
    { name: 'ETF', logo: '/images/logos/etf.png' },
];

const memberships = [
    { name: 'Linux Foundation', logo: '/images/logos/lf.png' },
    { name: 'Confidential Computing Consortium', logo: '/images/logos/ccc.png' },
];

function TickerStrip({
    items,
    speed = 35,
    direction = 'left',
}: {
    items: { name: string; logo: string }[];
    speed?: number;
    direction?: 'left' | 'right';
}) {
    // Duplicate items to create a seamless infinite loop
    const doubled = [...items, ...items];
    const animationClass = direction === 'right' ? 'animate-ticker-right' : 'animate-ticker-left';

    return (
        <div
            className="relative overflow-hidden w-full"
            style={{
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
        >
            <div
                className={`flex gap-3 w-max ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((item, i) => (
                    <div
                        key={`${item.name}-${i}`}
                        className="
                            flex items-center gap-3 px-5 py-3 rounded-full
                            border border-border/40
                            bg-background/80 backdrop-blur-sm
                            transition-all duration-300 cursor-default select-none
                            hover:border-border hover:bg-accent/50
                            dark:bg-white/[0.04] dark:border-white/10
                            dark:hover:bg-white/[0.08] dark:hover:border-white/20
                            shrink-0
                        "
                    >
                        <div className="relative h-7 w-16 shrink-0">
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain dark:brightness-[1.2] dark:contrast-[1.05]"
                            />
                        </div>
                        <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Partners() {
    return (
        <section className="relative border-y bg-muted/10 overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/20 to-transparent dark:via-indigo-950/10 pointer-events-none" />

            {/* Partners */}
            <div className="py-16 border-b relative">
                <div className="container mx-auto px-4 md:px-6 mb-10">
                    <div className="text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                            Trusted Partners
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                            Collaborating with leading organizations
                        </h2>
                        <p className="text-muted-foreground mt-2 text-sm">
                            in confidential computing and secure AI.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <TickerStrip items={partners} speed={40} direction="left" />
                </div>
            </div>

            {/* Memberships — static centered since there are only 2 */}
            <div className="py-16 relative">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                            Memberships
                        </p>
                        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600 dark:to-blue-400">
                            Proud members of key industry consortia
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {memberships.map((member) => (
                            <div
                                key={member.name}
                                className="
                                    flex items-center gap-4 px-6 py-4 rounded-full
                                    border border-border/40 bg-background/80 backdrop-blur-sm
                                    transition-all duration-300 cursor-default
                                    hover:border-border hover:bg-accent/50
                                    dark:bg-white/[0.04] dark:border-white/10
                                    dark:hover:bg-white/[0.08] dark:hover:border-white/20
                                "
                            >
                                <div className="relative h-9 w-24 shrink-0">
                                    <Image
                                        src={member.logo}
                                        alt={member.name}
                                        fill
                                        className="object-contain dark:brightness-[1.2] dark:contrast-[1.05]"
                                    />
                                </div>
                                <span className="text-sm font-medium text-foreground/70 whitespace-nowrap">
                                    {member.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
