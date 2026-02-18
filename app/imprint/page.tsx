import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
    title: {
        default: 'Imprint - Ultraviolet',
        template: '%s | Cocos AI',
    },
    description: 'Imprint and Legal Information for Ultraviolet',
});

export default function ImprintPage() {
    return (
        <div className="container mx-auto py-16 px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Imprint</h1>

            <div className="space-y-8 text-foreground/90">
                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4">Company Information</h2>
                    <p className="mb-4">
                        <strong>Company Name:</strong> Ultraviolet<br />
                        <strong>Address:</strong> Bulevar Arsenija Carnojevica 103<br />
                        11000 Belgrade, Serbia
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Contact Information</h2>
                    <p className="mb-4">
                        <strong>General Inquiries:</strong><br />
                        Email: <Link href="mailto:info@ultraviolet.rs" className="text-primary hover:underline">info@ultraviolet.rs</Link>
                    </p>

                    <p className="mb-4">
                        <strong>Legal Questions:</strong><br />
                        Email: <Link href="mailto:legal@ultraviolet.rs" className="text-primary hover:underline">legal@ultraviolet.rs</Link>
                    </p>

                    <p className="mb-4">
                        <strong>Privacy Questions:</strong><br />
                        Email: <Link href="mailto:privacy@ultraviolet.rs" className="text-primary hover:underline">privacy@ultraviolet.rs</Link>
                    </p>

                    <p className="mb-4">
                        <strong>Community Chat:</strong><br />
                        <Link href="https://app.gitter.im/#/room/#Ultraviolet_community:gitter.im" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gitter Community</Link>
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Responsible for Content</h2>
                    <p className="mb-4">
                        Ultraviolet is responsible for the content of this website in accordance with applicable laws.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Business Activities</h2>
                    <p className="mb-4">Ultraviolet is a leading company specializing in:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Confidential Computing</li>
                        <li>Cloud Security</li>
                        <li>Artificial Intelligence and Machine Learning</li>
                        <li>Multi-Party Computation</li>
                        <li>Secure Data Sharing</li>
                    </ul>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Online Presence</h2>
                    <p className="mb-4">
                        <strong>Website:</strong> <Link href="https://ultraviolet.rs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ultraviolet.rs</Link>
                    </p>

                    <p className="mb-2 font-semibold">Social Media:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            Twitter: <Link href="https://twitter.com/ultravioletrs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ultravioletrs</Link>
                        </li>
                        <li>
                            LinkedIn: <Link href="https://www.linkedin.com/company/ultravioletrs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ultraviolet</Link>
                        </li>
                        <li>
                            Medium: <Link href="https://medium.com/ultraviolet-blog" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ultraviolet Blog</Link>
                        </li>
                        <li>
                            GitHub: <Link href="https://github.com/ultravioletrs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ultravioletrs</Link>
                        </li>
                    </ul>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Dispute Resolution</h2>
                    <p className="mb-4">
                        The European Commission provides a platform for online dispute resolution (ODR): <Link href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</Link>
                    </p>
                    <p className="mb-4">
                        We are not obliged and not willing to participate in dispute resolution proceedings before a consumer arbitration board.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Copyright and Trademarks</h2>
                    <p className="mb-4">
                        All content on this website, including text, graphics, logos, images, and software, is the property of Ultraviolet or its content suppliers and is protected by international copyright laws.
                    </p>
                    <p className="mb-4">
                        The compilation of all content on this site is the exclusive property of Ultraviolet and is protected by international copyright laws.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Liability for Content</h2>
                    <p className="mb-4">
                        The content of our pages has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
                    </p>
                </section>

                <hr className="border-border" />

                <section>
                    <h2 className="text-2xl font-bold mb-4 mt-8">Liability for Links</h2>
                    <p className="mb-4">
                        Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.
                    </p>
                </section>
            </div>
        </div>
    );
}
