import { ArrowRight, ArrowLeftRight, ArrowDown } from 'lucide-react';

const enclaveLayers = [
    { label: 'Agent', accent: true },
    { label: 'Config files / TLS certs' },
    { label: 'HAL + Runtime' },
    { label: 'TEE Enclave CPU HW (SEV / TDX)' },
];

export function ArchitectureDiagram() {
    return (
        <div className="relative w-full max-w-5xl mx-auto rounded-sm border border-border bg-card overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-background/40">
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                    <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    cocos · system_architecture
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
                    v0.5
                </span>
            </div>

            {/* Diagram grid */}
            <div className="relative grid-bg">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-6 lg:gap-0 p-6 lg:p-10">
                    {/* LEFT: Cloud + Client PC */}
                    <div className="flex flex-col gap-8">
                        {/* Cloud zone */}
                        <ZoneLabel n="01" label="Cloud" />

                        <Box label="Computation Management" hint="orchestrator" />

                        <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="font-mono text-xs uppercase tracking-[0.15em]">gRPC</span>
                            <ArrowLeftRight className="h-3.5 w-3.5" />
                            <span className="hidden lg:block flex-1 border-t border-dashed border-border" />
                        </div>

                        {/* Client PC zone */}
                        <div className="mt-4">
                            <ZoneLabel n="04" label="Client PC" />
                        </div>

                        <Box label="User CLI" hint="cocos cli" />

                        <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
                                Attestation
                            </span>
                            <ArrowRight className="h-3.5 w-3.5 text-primary" />
                            <span className="hidden lg:block flex-1 border-t border-dashed border-primary/40" />
                        </div>

                        <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="font-mono text-xs uppercase tracking-[0.15em]">
                                Data + algo upload (mTLS)
                            </span>
                            <ArrowLeftRight className="h-3.5 w-3.5" />
                        </div>
                    </div>

                    {/* CENTER: dashed boundary */}
                    <div className="hidden lg:flex flex-col items-center justify-stretch px-6">
                        <div className="flex-1 border-l border-dashed border-border" />
                        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground rotate-90 my-4 whitespace-nowrap">
                            trust boundary
                        </span>
                        <div className="flex-1 border-l border-dashed border-border" />
                    </div>

                    {/* RIGHT: TEE Servers */}
                    <div className="flex flex-col gap-6">
                        <ZoneLabel
                            n="02"
                            label="TEE Servers"
                            sublabel="amd sev-snp · intel tdx"
                        />

                        {/* Manager box */}
                        <Box
                            label="Manager"
                            hint="TEE provisioning & configuration"
                            accent
                        />

                        {/* Vsock + Qemu connectors */}
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em]">
                                Vsock · Qemu VM launch
                            </span>
                            <ArrowDown className="h-3.5 w-3.5" />
                        </div>

                        {/* TEE + Enclave layered card */}
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-3 items-stretch">
                            <Box label="TEE" hint="vsock i/o" accent center />

                            <div className="border border-border rounded-sm overflow-hidden">
                                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border bg-background/40">
                                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                                        // In-enclave Agent
                                    </span>
                                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                                        03 · EOS
                                    </span>
                                </div>
                                <ul className="divide-y divide-border">
                                    {enclaveLayers.map((layer) => (
                                        <li
                                            key={layer.label}
                                            className={`px-3 py-2 text-xs ${
                                                layer.accent
                                                    ? 'text-primary font-medium'
                                                    : 'text-foreground/80'
                                            }`}
                                        >
                                            <span className="font-mono">› {layer.label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer legend */}
                <div className="border-t border-border px-6 lg:px-10 py-3 flex flex-wrap gap-x-6 gap-y-2 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <span><span className="text-primary">●</span> attested</span>
                    <span><span className="text-foreground">●</span> manager</span>
                    <span><span className="text-muted-foreground">●</span> client</span>
                    <span className="ml-auto">apache-2.0</span>
                </div>
            </div>
        </div>
    );
}

function ZoneLabel({
    n,
    label,
    sublabel,
}: {
    n: string;
    label: string;
    sublabel?: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-primary">{n}</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
                {label}
            </span>
            {sublabel && (
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                    {sublabel}
                </span>
            )}
            <span className="flex-1 border-t border-border" />
        </div>
    );
}

function Box({
    label,
    hint,
    accent,
    center,
}: {
    label: string;
    hint?: string;
    accent?: boolean;
    center?: boolean;
}) {
    return (
        <div
            className={`border rounded-sm px-4 py-4 ${
                accent
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background/60'
            } ${center ? 'flex flex-col items-center justify-center text-center' : ''}`}
        >
            <div
                className={`font-mono text-sm uppercase tracking-[0.1em] ${
                    accent ? 'text-primary' : 'text-foreground'
                }`}
            >
                {label}
            </div>
            {hint && (
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    {hint}
                </div>
            )}
        </div>
    );
}
