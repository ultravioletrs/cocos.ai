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
                className={`flex gap-2 w-max ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {doubled.map((item, i) => (
                    <div
                        key={`${item.name}-${i}`}
                        className="
                            flex items-center gap-3 px-4 py-3 rounded-sm
                            border border-border
                            bg-card
                            transition-colors duration-200 cursor-default select-none
                            hover:border-primary
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
                        <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground whitespace-nowrap">
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
        <section className="relative border-b border-border bg-background overflow-hidden">
            {/* Partners ticker */}
            <div className="py-16 border-b border-border">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-10">
                    <div className="max-w-3xl">
                        <p className="eyebrow mb-4">// Trusted Partners</p>
                        <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-foreground">
                            Collaborating with leading organizations
                        </h2>
                        <p className="text-muted-foreground mt-3 font-light">
                            in confidential computing and secure AI.
                        </p>
                    </div>
                </div>

                <TickerStrip items={partners} speed={40} direction="left" />
            </div>

            {/* Memberships */}
            <div className="py-16">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="max-w-3xl mb-10">
                        <p className="eyebrow mb-4">// Memberships</p>
                        <h2 className="text-3xl md:text-4xl font-display font-medium tracking-tight text-foreground">
                            Members of key industry consortia
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {memberships.map((member) => (
                            <div
                                key={member.name}
                                className="
                                    flex items-center gap-4 px-6 py-5 rounded-sm
                                    border border-border bg-card
                                    transition-colors duration-200
                                    hover:border-primary
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
                                <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
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
