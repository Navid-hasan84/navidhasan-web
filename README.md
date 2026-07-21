# navidhasan.com

The source repository for the official professional website of **Navid Hasan**, an independent full-stack developer based in Bangladesh and the founder of Labonno.

The website presents selected work, services, professional background, contact information, planned engineering writing, and the technical systems behind the public site.

## Current status

The current implementation includes:

- a complete visual redesign;
- responsive desktop and mobile navigation;
- dedicated pages for work, services, about, contact, and journal;
- a reserved client portal page;
- centralized metadata;
- canonical URLs;
- Open Graph and Twitter previews;
- JSON-LD structured data;
- sitemap and robots metadata routes;
- a web app manifest;
- AI-readable discovery through `llms.txt`;
- static export support.

The site is currently a static frontend. It does not require a backend, database, or runtime API for its public pages.

## Public routes

```text
/
├── /work
├── /services
├── /about
├── /contact
├── /journal
└── /portal
```

The following routes are included in the public sitemap: `/`, `/work`, `/services`, `/about`, `/contact`, and `/journal`.

`/portal` is unfinished, marked `noindex` and `nofollow`, and excluded from the sitemap.

The Journal currently presents planned writing subjects and editorial direction. It does not yet claim published articles, publication dates, reading times, or article URLs.

## Technology

- Next.js App Router
- React
- TypeScript
- CSS Modules
- static export
- ESLint
- Next.js metadata file conventions

Current core versions are recorded in `package.json`.

## Architecture

The project uses a static-export architecture:

```text
Next.js source
     │
     ▼
npm run build
     │
     ▼
static hosting
```

The Next.js configuration uses `output: "export"`. Images are configured as unoptimized because the exported site does not depend on the Next.js image optimization server.

## Project structure

```text
app/
├── about/
├── contact/
├── home/
├── journal/
├── portal/
├── services/
├── work/
├── layout.tsx
├── manifest.ts
├── robots.ts
└── sitemap.ts

components/
├── footer/
├── navigation/
└── seo/

lib/
├── metadata.ts
├── page-structured-data.ts
├── public-routes.ts
├── site.ts
└── structured-data.ts

styles/
├── foundation/
└── shared/

public/
└── llms.txt

scripts/
└── navidhasan-web-local

docs/
├── architecture/
├── history/
├── operations/
└── project/
```

## Local development

### Requirements

- Node.js
- npm
- Linux or WSL for the included local process helper
- Git

Install dependencies:

```bash
npm ci
```

Run with the normal Next.js command:

```bash
npm run dev
```

The repository also includes `scripts/navidhasan-web-local`. The helper manages the local development server on port 3001, stores its PID and log outside the repository, and refuses to stop unrelated processes.

It is designed to be invoked through command names such as `run_navidhasan-web`, `status_navidhasan-web`, and `stop_navidhasan-web`.

The helper is documented in [docs/operations/local-development.md](docs/operations/local-development.md).

## Validation

Before committing or deploying changes, run:

```bash
npx tsc --noEmit
npm run lint
git diff --check
npm run build
```

A successful build must generate the static site under `out/`. Important exported files include route HTML files, `out/robots.txt`, `out/sitemap.xml`, `out/manifest.webmanifest`, and `out/llms.txt`.

More detailed verification requirements are documented in [docs/operations/verification.md](docs/operations/verification.md).

## SEO and discovery

The SEO system includes unique page titles and descriptions, canonical URLs, index and noindex controls, Open Graph metadata, Twitter large-image cards, social preview images, descriptive social-image alternative text, a centralized sitemap route registry, robots metadata, a web manifest, root and page-specific JSON-LD graphs, and AI-readable identity and project guidance in `public/llms.txt`.

SEO and entity relationships are documented in [docs/architecture/seo-and-discovery.md](docs/architecture/seo-and-discovery.md).

## Public identity boundaries

Navid Hasan is represented as an independent full-stack developer based in Bangladesh, the founder and developer of Labonno, and the developer and system architect behind the Milestogo Business Operations Platform.

Labonno is represented as a pre-launch beauty and cosmetics commerce platform founded and developed by Navid Hasan, in active development, and not yet an operating cosmetics shop with established customers or sales.

Official project website: <https://labonno.online>

Milestogo is represented as a web-based ERP and operational platform for an aquafeed business, designed and developed by Navid Hasan across product governance, permissions, formulation, production, pricing, dealer workflows, portals, APIs, databases, and deployment infrastructure.

The repository must not claim that Navid Hasan founded or owns the Milestogo business unless a separate authoritative source establishes that relationship.

Project website: <https://milestogo.online>

## Visual direction

The current design uses near-black text and surfaces, white and warm off-white backgrounds, restrained brown accents, editorial typography, clear spacing and hierarchy, limited purposeful motion, and responsive desktop and mobile navigation.

The previous moon-heavy visual direction was retired from the active design. The old Orbit mobile menu experiment is preserved only as a historical note in [docs/history/orbit-menu-failure.md](docs/history/orbit-menu-failure.md).

## Documentation

Start with [docs/README.md](docs/README.md).

The documentation is divided into project status, roadmap, and decisions; architecture and design system; SEO and discovery; local development; build and deployment; verification; and historical notes.

Related documents include [docs/operations/build-and-deployment.md](docs/operations/build-and-deployment.md) and [AGENTS.md](AGENTS.md).

## Deployment

The production build is created with:

```bash
npm run build
```

The deployable static output is `out/`. The repository currently targets static hosting. Deployment details and hosting assumptions are documented in [docs/operations/build-and-deployment.md](docs/operations/build-and-deployment.md).

## Environment variables

The current public site does not depend on application environment variables. No `.env.example` is required unless a future implementation introduces an actual environment-dependent feature.

## Repository rules

Future automated agents and contributors must read [AGENTS.md](AGENTS.md) before changing the codebase.

## License and ownership

This repository does not currently contain a project-specific license file. The absence of a license does not grant permission to copy, redistribute, publish, or commercially reuse the source code, content, visual identity, or assets.

A formal ownership and licensing document may be added in a later documentation checkpoint.
