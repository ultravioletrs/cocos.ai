import { Activity, Building2, Banknote, Truck, Factory, Code2 } from 'lucide-react';

const useCases = [
    {
        title: "Medical / Pharma",
        icon: Activity,
        items: [
            "Encrypted patient data exchange for medical trials and drug discovery",
            "Drug distribution, serialization, and tracking",
        ],
    },
    {
        title: "Public / Government",
        icon: Building2,
        items: [
            "Cross-agency analytics and AI/ML over confidential citizen data",
        ],
    },
    {
        title: "Banking / Finance",
        icon: Banknote,
        items: [
            "Private payment data exchange for fraud detection and AML",
            "Secure credit approval workflows",
            "Trustless transaction handling between parties",
        ],
    },
    {
        title: "Transportation / Logistics",
        icon: Truck,
        items: [
            "Autonomous driving routing and AI/ML",
            "Logistics data analytics across operators",
        ],
    },
    {
        title: "Industry",
        icon: Factory,
        items: [
            "Multi-party computation across competing companies",
            "Predictive maintenance via shared models",
            "Quality assurance and Industry 4.0 data exchange",
        ],
    },
    {
        title: "Software Development",
        icon: Code2,
        items: [
            "IP protection — algorithms shielded from cloud providers",
            "Mitigation of insider threats inside organizations",
        ],
    },
];

export function UseCases() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b border-border" id="usecases">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="max-w-3xl mb-12">
                    <p className="eyebrow mb-4">// Use Cases</p>
                    <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-foreground mb-4">
                        Real-world workloads, hardware-isolated
                    </h2>
                    <p className="text-muted-foreground md:text-lg font-light leading-relaxed">
                        Where data sensitivity meets compute demand — Cocos AI keeps both sides honest.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase, i) => {
                        const Icon = useCase.icon;
                        const number = String(i + 1).padStart(2, '0');
                        return (
                            <div
                                key={i}
                                className="flex flex-col space-y-5 border border-border rounded-sm p-6 bg-card hover:border-primary transition-colors group"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                                        {number} · {useCase.title}
                                    </span>
                                    <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-display font-medium tracking-tight text-foreground">
                                    {useCase.title}
                                </h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    {useCase.items.map((item, j) => (
                                        <li key={j} className="flex gap-2">
                                            <span className="font-mono text-primary shrink-0 mt-0.5">›</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
