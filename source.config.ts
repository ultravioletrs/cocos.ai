import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkMdxMermaid } from 'fumadocs-core/mdx-plugins';

export const docs = defineDocs({
    dir: 'content/docs',
});

export default defineConfig({
    mdxOptions: {
        remarkPlugins: [remarkMath, remarkMdxMermaid],
        rehypePlugins: (plugins) => [rehypeKatex, ...(plugins || [])],
    },
});
