import { Check } from 'lucide-react';

const attestationLines = [
    { label: '$ ./build/cocos-cli create-vm --server-url $HOST:7001', tone: 'cmd' as const },
    { label: 'Creating a new virtual machine', tone: 'muted' as const },
    { label: 'Virtual machine created successfully', tone: 'ok' as const },
    { label: 'id e71cdcf5... · port 6100', tone: 'muted' as const },
    { label: '$ ./build/cocos-cli attestation get snp-vtpm', tone: 'cmd' as const },
    { label: 'Attestation retrieved and saved successfully', tone: 'accent' as const },
];

export function HeroVisual() {
    return (
        <div className="relative w-full max-w-[600px] mx-auto">
            {/* Top corner label */}
            <div className="absolute -top-3 left-3 z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground bg-background px-2">
                {'// Architecture'}
            </div>

            {/* Bottom corner label */}
            <div className="absolute -bottom-3 right-3 z-10 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground bg-background px-2">
                v0.9.0 · APACHE-2.0
            </div>

            <div className="relative w-full aspect-square rounded-sm overflow-hidden border border-border bg-card">
                {/* Schematic grid background */}
                <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

                {/* Terminal-style header bar */}
                <div className="relative flex items-center justify-between border-b border-border px-4 py-2.5 bg-background/40 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                        <span className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                        cocos · session
                    </span>
                </div>

                <div className="relative flex flex-col gap-5 p-5 sm:p-7">
                    {/* Attestation log block */}
                    <div className="flex flex-col gap-1.5 text-[0.78rem] sm:text-sm leading-snug">
                        {attestationLines.map((line, i) => (
                            <div key={i} className="flex items-start gap-2">
                                {line.tone === 'cmd' && (
                                    <span className="text-muted-foreground shrink-0">›</span>
                                )}
                                {line.tone === 'ok' && (
                                    <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                                )}
                                {line.tone === 'muted' && (
                                    <span className="text-muted-foreground shrink-0">·</span>
                                )}
                                {line.tone === 'accent' && (
                                    <span className="text-primary shrink-0">›</span>
                                )}
                                <span
                                    className={
                                        line.tone === 'cmd'
                                            ? 'text-foreground'
                                            : line.tone === 'muted'
                                                ? 'text-muted-foreground'
                                                : line.tone === 'accent'
                                                    ? 'text-primary'
                                                    : 'text-foreground/80'
                                    }
                                >
                                    {line.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* ASCII schematic */}
                    <div className="border border-border rounded-sm p-4 bg-background/40">
                        <div className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                            {'// Trust Boundary'}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[0.7rem] sm:text-xs">
                            <Node label="DATA" />
                            <Arrow />
                            <Node label="AGENT" accent />
                        </div>
                        <div className="my-2 flex justify-center">
                            <span className="text-muted-foreground">│</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-[0.7rem] sm:text-xs">
                            <Node label="HAL" />
                            <Arrow />
                            <Node label="TEE" accent />
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                            <span>amd-sev-snp</span>
                            <span className="text-border">·</span>
                            <span>intel-tdx</span>
                            <span className="text-border">·</span>
                            <span className="text-primary">verified</span>
                        </div>
                    </div>

                    {/* Status footer */}
                    <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground border-t border-border pt-3">
                        <span className="flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                            </span>
                            attested · running
                        </span>
                        <span>tee_id: 0xa12c</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Node({ label, accent }: { label: string; accent?: boolean }) {
    return (
        <div
            className={`border rounded-sm py-2 text-center uppercase tracking-[0.15em] ${
                accent
                    ? 'border-primary text-primary bg-primary/5'
                    : 'border-border text-foreground/80 bg-background/60'
            }`}
        >
            {label}
        </div>
    );
}

function Arrow() {
    return (
        <div className="flex items-center justify-center text-muted-foreground">
            ──›
        </div>
    );
}
