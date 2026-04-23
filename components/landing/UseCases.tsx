import { Activity, Building2, Banknote, Truck, Factory, Code2 } from 'lucide-react';

const useCases = [
    {
        title: "Medical / Pharma",
        icon: Activity,
        items: [
            "Medical trials-encrypted patient data exchange for identifying new treatments and drugs",
            "Drug distribution, serialization, and tracking"
        ]
    },
    {
        title: "Public / Government",
        icon: Building2,
        items: [
            "Analytics on citizen data, or AI/ML on top of confidential data coming from different agencies"
        ]
    },
    {
        title: "Banking / Finance",
        icon: Banknote,
        items: [
            "Private client payment data exchange for payment fraud detection and anti-money-laundering",
            "Credit approval process handling in a secure manner",
            "Transaction handling between two parties"
        ]
    },
    {
        title: "Transportation / Logistics",
        icon: Truck,
        items: [
            "Support for autonomous driving (routing, AI/ML…)",
            "Logistics Data Analytics"
        ]
    },
    {
        title: "Industry",
        icon: Factory,
        items: [
            "Multi-party computation on data from competing and/or cooperating companies",
            "AI/ML for predictive maintenance",
            "Quality Assurance and Data exchange",
            "Production Data Exchange (Industry 4.0)"
        ]
    },
    {
        title: "Software Development",
        icon: Code2,
        items: [
            "Intellectual property protection (algorithms protected from cloud provider)",
            "Insider threats (employees within a company)"
        ]
    }
];

export function UseCases() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-b border-border/40 relative overflow-hidden" id="usecases">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-transparent to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-serif font-medium tracking-tight md:text-4xl text-foreground">Use Cases</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                            Real-world applications of Cocos AI&apos;s confidential computing capabilities.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase, i) => (
                        <div key={i} className="flex flex-col space-y-4 border border-border/50 p-6 rounded-2xl bg-secondary/5 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:border-border group">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-secondary/50 rounded-xl group-hover:bg-primary/5 transition-colors border border-border/40">
                                    <useCase.icon className="h-6 w-6 text-foreground/80" />
                                </div>
                                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">{useCase.title}</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                                {useCase.items.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
