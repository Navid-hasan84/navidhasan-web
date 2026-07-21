# Documentation

This directory contains the project, architecture, operations, and historical documentation for `navidhasan.com`.

## Start here

Read the documentation in this order:

1. [`../README.md`](../README.md) — project overview, setup, routes, SEO, and deployment summary.
2. [`../AGENTS.md`](../AGENTS.md) — operating rules for future AI agents and automated contributors.
3. [`project/status.md`](project/status.md) — current implementation status and verified project truth.
4. [`project/roadmap.md`](project/roadmap.md) — planned next work.
5. The architecture or operations document related to the task being performed.

## Project documentation

- [`project/status.md`](project/status.md)
  Current implementation status, completed work, known limitations, and protected project truths.

- [`project/roadmap.md`](project/roadmap.md)
  Planned work following the current redesign and SEO foundation.

- [`project/decisions.md`](project/decisions.md)
  Important product, visual, architectural, SEO, and operational decisions.

## Architecture documentation

- [`architecture/overview.md`](architecture/overview.md)
  High-level architecture, static export model, route structure, shared systems, and data flow.

- [`architecture/frontend.md`](architecture/frontend.md)
  Next.js routes, layouts, components, CSS Modules, and frontend organization.

- [`architecture/design-system.md`](architecture/design-system.md)
  Visual direction, design tokens, typography, layout, navigation, responsiveness, and motion.

- [`architecture/seo-and-discovery.md`](architecture/seo-and-discovery.md)
  Metadata, canonical URLs, structured data, sitemap, robots, manifest, social previews, and `llms.txt`.

## Operations documentation

- [`operations/local-development.md`](operations/local-development.md)
  Installation, local server usage, helper commands, logs, ports, and troubleshooting.

- [`operations/build-and-deployment.md`](operations/build-and-deployment.md)
  Static export, generated output, hosting assumptions, and deployment workflow.

- [`operations/verification.md`](operations/verification.md)
  TypeScript, lint, formatting, build, route, metadata, sitemap, and asset verification.

## Historical documentation

- [`history/orbit-menu-failure.md`](history/orbit-menu-failure.md)
  Record of the retired Orbit mobile-navigation experiment and the reason it was removed.

Historical notes explain earlier decisions. They are not instructions to restore retired designs or features.

## Current protected truths

Until explicitly changed and documented:

- the site remains a static Next.js export;
- the active design is restrained, professional, and editorial;
- the old moon-heavy visual direction is retired;
- `/portal` remains unfinished, `noindex`, `nofollow`, and excluded from the sitemap;
- Journal subjects are planned and are not presented as published articles;
- Labonno remains pre-launch and in active development;
- Navid Hasan is the founder and developer of Labonno;
- Navid Hasan is the developer and system architect behind the Milestogo Business Operations Platform;
- the repository must not claim that Navid Hasan founded or owns the Milestogo business;
- SEO and structured-data relationships must remain factual;
- documentation must be updated when implementation truth changes.

## Documentation maintenance

When a change affects project truth, update the matching document in the same checkpoint.

Examples:

- update `project/status.md` when work is completed;
- update `project/roadmap.md` when priorities change;
- update `project/decisions.md` when an important decision is made;
- update architecture documentation when structure or behavior changes;
- update operations documentation when setup, build, or deployment changes;
- preserve useful retired-feature notes under `history/`.

Do not leave `Documentation pending.` in a document that is considered complete.

After saving it, the next file will be:

`docs/project/status.md`
