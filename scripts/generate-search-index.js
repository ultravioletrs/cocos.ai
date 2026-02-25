#!/usr/bin/env node
/**
 * Generate search index for static site
 * This script runs during build and creates a JSON file with all searchable content
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const docsDir = path.join(projectRoot, 'content/docs');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

try {
    // Walk through all markdown/mdx files and extract metadata
    const indexes = [];

    function walkDir(dir, baseUrl = '') {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat.isDirectory() && file !== 'node_modules') {
                const dirName = file === 'docs' ? '' : `${file}/`;
                walkDir(filePath, baseUrl + dirName);
            } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
                // Skip index files
                if (file === 'index.md' || file === 'index.mdx') {
                    continue;
                }

                const content = fs.readFileSync(filePath, 'utf-8');
                const titleMatch = content.match(/^#+\s+(.+?)$/m) || content.match(/title:\s*(.+?)$/m);
                const descriptionMatch = content.match(/description:\s*(.+?)$/m);

                const title = titleMatch ? titleMatch[1].trim() : file.replace(/\.(md|mdx)$/, '');
                const description = descriptionMatch ? descriptionMatch[1].trim() : title;
                const fileName = file.replace(/\.(md|mdx)$/, '');
                const url = `/${baseUrl}${fileName === 'index' ? '' : fileName}`.replace(/\/+/g, '/');

                if (title) {
                    indexes.push({
                        title,
                        content: description,
                        url: url === '/' ? '/docs' : `/docs${url}`,
                        id: url,
                    });
                }
            }
        }
    }

    walkDir(docsDir);

    // Write the search index
    const searchIndexPath = path.join(publicDir, 'search.json');
    fs.writeFileSync(searchIndexPath, JSON.stringify(indexes, null, 2));

    console.log(`✓ Search index generated: ${indexes.length} pages indexed`);
    process.exit(0);
} catch (error) {
    console.error('Failed to generate search index:', error);
    process.exit(1);
}
