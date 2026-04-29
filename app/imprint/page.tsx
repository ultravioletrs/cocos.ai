import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata = createMetadata({
    title: {
        default: 'Imprint - Ultraviolet',
        template: '%s | Cocos AI',
    },
    description: 'Imprint and Legal Information for Ultraviolet',
});

const monoLink = "font-mono text-primary hover:underline underline-offset-4";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="border-t border-border pt-8">
            <p className="eyebrow mb-3">{'// '}{title.toUpperCase()}</p>
            <h2 className="text-xl md:text-2xl font-display font-medium tracking-tight mb-4">{title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
        </section>
    );
}

export default function ImprintPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="flex-1">
                <section className="relative w-full border-b border-border overflow-hidden">
                    <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none opacity-50" />
                    <div className="relative container mx-auto px-4 md:px-6 max-w-6xl py-16 md:py-20">
                        <div className="max-w-4xl">
                            <p className="eyebrow-accent mb-6">{'// '}Legal</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.02em]">
                                Imprint
                            </h1>
                            <p className="mt-4 max-w-xl text-muted-foreground font-light leading-relaxed">
                                Legal information and disclosures for Ultraviolet, the company behind Cocos AI.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
                    <div className="space-y-10">
                        <Section title="Company Information">
                            <p>
                                <span className="font-mono text-foreground">Company:</span> Ultraviolet<br />
                                <span className="font-mono text-foreground">Address:</span> Bulevar Arsenija Carnojevica 103<br />
                                11000 Belgrade, Serbia
                            </p>
                        </Section>

                        <Section title="Contact Information">
                            <p>
                                <span className="font-mono text-foreground">General:</span>{' '}
                                <Link href="mailto:info@ultraviolet.rs" className={monoLink}>info@ultraviolet.rs</Link>
                            </p>
                            <p>
                                <span className="font-mono text-foreground">Legal:</span>{' '}
                                <Link href="mailto:legal@ultraviolet.rs" className={monoLink}>legal@ultraviolet.rs</Link>
                            </p>
                            <p>
                                <span className="font-mono text-foreground">Privacy:</span>{' '}
                                <Link href="mailto:privacy@ultraviolet.rs" className={monoLink}>privacy@ultraviolet.rs</Link>
                            </p>
                            <p>
                                <span className="font-mono text-foreground">Community:</span>{' '}
                                <Link href="https://app.gitter.im/#/room/#Ultraviolet_community:gitter.im" target="_blank" rel="noopener noreferrer" className={monoLink}>Gitter</Link>
                            </p>
                        </Section>

                        <Section title="Responsible for Content">
                            <p>
                                Ultraviolet is responsible for the content of this website in accordance with applicable laws.
                            </p>
                        </Section>

                        <Section title="Business Activities">
                            <p>Ultraviolet is a leading company specializing in:</p>
                            <ul className="space-y-1.5">
                                {['Confidential Computing', 'Cloud Security', 'Artificial Intelligence and Machine Learning', 'Multi-Party Computation', 'Secure Data Sharing'].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="font-mono text-primary">›</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section title="Online Presence">
                            <p>
                                <span className="font-mono text-foreground">Website:</span>{' '}
                                <Link href="https://ultraviolet.rs" target="_blank" rel="noopener noreferrer" className={monoLink}>ultraviolet.rs</Link>
                            </p>
                            <p className="font-mono text-foreground">Social:</p>
                            <ul className="space-y-1.5">
                                <li className="flex gap-2"><span className="font-mono text-primary">›</span><span>Twitter: <Link href="https://twitter.com/ultravioletrs" target="_blank" rel="noopener noreferrer" className={monoLink}>@ultravioletrs</Link></span></li>
                                <li className="flex gap-2"><span className="font-mono text-primary">›</span><span>LinkedIn: <Link href="https://www.linkedin.com/company/ultravioletrs" target="_blank" rel="noopener noreferrer" className={monoLink}>Ultraviolet</Link></span></li>
                                <li className="flex gap-2"><span className="font-mono text-primary">›</span><span>Medium: <Link href="https://medium.com/ultraviolet-blog" target="_blank" rel="noopener noreferrer" className={monoLink}>Ultraviolet Blog</Link></span></li>
                                <li className="flex gap-2"><span className="font-mono text-primary">›</span><span>GitHub: <Link href="https://github.com/ultravioletrs" target="_blank" rel="noopener noreferrer" className={monoLink}>ultravioletrs</Link></span></li>
                            </ul>
                        </Section>

                        <Section title="Dispute Resolution">
                            <p>
                                The European Commission provides a platform for online dispute resolution (ODR):{' '}
                                <Link href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className={monoLink}>ec.europa.eu/consumers/odr</Link>
                            </p>
                            <p>
                                We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
                            </p>
                        </Section>

                        <Section title="Copyright and Trademarks">
                            <p>
                                All content on this website, including text, graphics, logos, images, and software, is the property of Ultraviolet or its content suppliers and is protected by international copyright laws.
                            </p>
                            <p>
                                The compilation of all content on this site is the exclusive property of Ultraviolet and is protected by international copyright laws.
                            </p>
                        </Section>

                        <Section title="Liability for Content">
                            <p>
                                The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                            </p>
                        </Section>

                        <Section title="Liability for Links">
                            <p>
                                Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                            </p>
                        </Section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
