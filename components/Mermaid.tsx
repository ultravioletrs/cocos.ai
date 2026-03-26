'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
});

export function Mermaid({ chart }: { chart: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [svg, setSvg] = useState<string | null>(null);
    const [id] = useState(() => `mermaid-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        async function render() {
            try {
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
            } catch (error) {
                console.error('Mermaid render failed:', error);
            }
        }
        render();
    }, [chart, id]);

    return (
        <div 
            className="flex justify-center my-6 overflow-x-auto" 
            dangerouslySetInnerHTML={{ __html: svg || '' }} 
        />
    );
}
