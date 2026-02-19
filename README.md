# CoCos.ai

A comprehensive product documentation and information site for CoCos (Confidential Computing).

## Overview

CoCos.ai is a Next.js-based web application that provides documentation, guides, and resources for the CoCos ecosystem. It features a modern landing page, extensive documentation, and information about trusted execution environments, attestation, and architecture.

## Technology Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: CSS with Tailwind support
- **Build Tool**: pnpm
- **Linting**: ESLint

## Project Structure

```
├── app/                    # Next.js application pages and layouts
│   ├── docs/              # Documentation pages
│   ├── solution/          # Solution page
│   ├── imprint/           # Imprint/Legal page
│   └── landing/           # Landing page components
├── components/            # Reusable React components
│   ├── landing/           # Landing page specific components
│   └── layout/            # Layout components (navbar, footer)
├── content/              # Markdown content and documentation
│   └── docs/             # Documentation files
│       ├── algorithms/
│       ├── architecture-components/
│       └── trusted-execution/
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
└── scripts/              # Build and utility scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ultravioletrs/cocos.ai.git
cd cocos.ai
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

## Documentation

The documentation is stored in the `content/docs/` directory in Markdown format and includes:

- **Getting Started** - Quick start guide
- **Architecture & Components** - System architecture overview
- **Trusted Execution** - Information about trusted execution environments
- **Attestation** - Details about attestation mechanisms
- **Compliance** - Compliance and security information
- **Developer Guide** - Development resources

## Configuration Files

- `next.config.mjs` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `source.config.ts` - Source configuration

## Contributing

Contributions are welcome! Please ensure code quality by running linting checks before submitting pull requests.
