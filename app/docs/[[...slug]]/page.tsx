import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { source } from '@/app/source';
import defaultComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/Mermaid';

export default async function Page(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);

    if (!page) notFound();

    const MDX = page.data.body;

    return (
        <DocsPage toc={page.data.toc} full={page.data.full}>
            <DocsBody>
                <h1>{page.data.title}</h1>
                <MDX components={{ ...defaultComponents, Mermaid }} />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return source.generateParams();
}

export async function generateMetadata(props: {
    params: Promise<{ slug?: string[] }>;
}) {
    const params = await props.params;
    const page = source.getPage(params.slug);

    if (!page) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    };
}
