"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    const isDark = resolvedTheme === "dark"

    return (
        <div
            role="group"
            aria-label="Toggle theme"
            className="inline-flex items-center border border-border rounded-sm select-none"
        >
            <button
                onClick={() => setTheme("light")}
                aria-label="Light mode"
                aria-pressed={mounted ? !isDark : undefined}
                className={`p-1.5 transition-colors ${
                    mounted && !isDark
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                }`}
            >
                <Sun className="h-3.5 w-3.5" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                aria-label="Dark mode"
                aria-pressed={mounted ? isDark : undefined}
                className={`p-1.5 border-l border-border transition-colors ${
                    mounted && isDark
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                }`}
            >
                <Moon className="h-3.5 w-3.5" />
            </button>
        </div>
    )
}
