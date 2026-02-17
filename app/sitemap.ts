import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/app/source";

const DOMAIN =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cocos.ai";

export const dynamic = "force-static";

function collectPages(dir: string, route = ""): MetadataRoute.Sitemap {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            if (entry.name.startsWith("[") || entry.name.startsWith("_")) return [];

            let nextRoute = route;
            // Handle route groups: do not include folders starting with '(' in the URL path
            if (!entry.name.startsWith("(")) {
                nextRoute = `${route}/${entry.name}`;
            }

            return collectPages(fullPath, nextRoute);
        }

        if (entry.name !== "page.tsx") return [];

        return [
            {
                url: DOMAIN + (route || "/"),
                lastModified: fs.statSync(fullPath).mtime,
            },
        ];
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = collectPages(path.join(process.cwd(), "app"));

    for (const page of source.getPages()) {
        pages.push({
            url: `${DOMAIN}${page.url}`,
            lastModified: new Date(),
        });
    }

    return pages;
}
