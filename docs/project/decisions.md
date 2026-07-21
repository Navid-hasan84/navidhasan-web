# Project Decisions

This document records important product, visual, architectural, SEO, operational, and documentation decisions for `navidhasan.com`.

It exists to prevent future work from accidentally reversing settled choices or reintroducing retired ideas.

## Decision 1 — static public architecture

### Decision

The public website remains a static Next.js application.

### Current implementation

The project uses:

```ts
output: "export"

The production build generates deployable files under:

out/
Reason

The public site currently does not require:

a backend;
a database;
authentication;
runtime API routes;
server-side sessions;
dynamic rendering.

Static export keeps deployment simple, inexpensive, portable, and easy to verify.

Consequence

New features must remain compatible with static export unless a separate approved checkpoint intentionally changes the architecture.

An active client portal, authenticated workflow, database-backed contact system, or private document system would require a separate architecture decision.

Decision 2 — professional editorial visual direction
Decision

The active design direction is restrained, professional, and editorial.

Visual characteristics

The current system uses:

near-black text and surfaces;
white and warm off-white backgrounds;
muted gray secondary text;
restrained brown accents;
generous whitespace;
strong hierarchy;
purposeful typography;
limited motion;
responsive desktop and mobile layouts.
Reason

The website should communicate technical seriousness, clarity, confidence, and long-term professional value.

Rejected direction

The old moon-heavy visual direction is retired.

Large moon imagery, ornamental space scenes, excessive glow, novelty navigation, and decorative effects should not return without a new explicit decision.

Decision 3 — retire the Orbit mobile menu
Decision

The Orbit mobile-navigation experiment was removed.

Replacement

The current mobile navigation uses a stable bottom-navigation system with clear route destinations.

Reason

The Orbit concept introduced unnecessary interaction complexity, fragile touch behavior, and poor cost-to-value for the public website.

Historical record

The full failure note is preserved at:

docs/history/orbit-menu-failure.md

Historical preservation does not imply future restoration.

Decision 4 — organized navigation components
Decision

Navigation components live under:

components/navigation/

The footer lives under:

components/footer/
Replaced files

The old root-level files were retired:

components/SiteHeader.tsx
components/MobileBottomNav.tsx
Reason

The new structure separates navigation behavior, brand presentation, layout shell, and responsive styling into focused files.

Consequence

Future changes must use the organized component paths and must not restore imports from the retired root-level components.

Decision 5 — CSS Modules and shared foundation styles
Decision

The styling system uses:

CSS Modules for page and component styles;
shared tokens under styles/foundation/;
shared reusable rules under styles/shared/.
Reason

This provides local ownership of page styles while preserving consistency across typography, color, spacing, surfaces, and buttons.

Consequence

Do not introduce a second styling system for isolated changes.

Tailwind packages may exist in project dependencies, but the active design implementation is based on standard CSS and CSS Modules.

Decision 6 — centralized site identity
Decision

Canonical public identity data is centralized in:

lib/site.ts
Includes

This file contains:

site name;
canonical URL;
public descriptions;
navigation;
services;
project identities;
entity identifiers;
contact information;
factual relationship boundaries.
Reason

Public identity should not be duplicated inconsistently across pages, metadata, structured data, and AI-readable discovery files.

Consequence

When a verified public fact changes, update the canonical identity source and all dependent documentation in the same checkpoint.

Decision 7 — factual entity boundaries
Navid Hasan

Navid Hasan is represented as:

an independent full-stack developer based in Bangladesh;
the founder and developer of Labonno;
the developer and system architect behind the Milestogo Business Operations Platform.
Labonno

Labonno is represented as:

a pre-launch beauty and cosmetics commerce platform;
founded and developed by Navid Hasan;
in active development;
not yet represented as an operating cosmetics shop with established customers or sales.
Milestogo

The Milestogo Business Operations Platform is represented as:

a web-based ERP and operational system for an aquafeed business;
designed and developed by Navid Hasan across product governance, permissions, formulation, production, pricing, dealer workflows, portals, APIs, databases, and deployment infrastructure.
Prohibited inference

The site must not claim that Navid Hasan founded or owns the Milestogo business unless a separate authoritative source establishes that relationship.

Reason

Professional identity must remain accurate and must not overstate ownership, commercial status, customers, scale, or project maturity.

Decision 8 — no unsupported professional claims
Decision

The public website must not invent or imply:

years of experience;
client counts;
customer counts;
revenue;
traffic;
conversion rates;
awards;
certifications;
qualifications;
testimonials;
reviews;
ratings;
employment history;
social profiles;
launch dates;
production usage;
operating scale.
Reason

The site should build trust through real scope, clear capability, and verified work rather than unsupported marketing claims.

Decision 9 — centralized page metadata
Decision

Reusable page metadata is generated through:

lib/metadata.ts
Metadata includes
page title;
description;
canonical URL;
robots policy;
Open Graph metadata;
Twitter metadata;
social images;
social-image alt text.
Reason

Central generation prevents inconsistent metadata and ensures every route follows the same SEO rules.

Consequence

Do not manually duplicate large metadata objects in individual pages unless a page has a verified special requirement.

Decision 10 — unique metadata per route
Decision

Each route must have:

a unique title;
a unique description;
one canonical URL;
matching Open Graph URL;
matching social preview metadata.
Reason

Unique metadata improves search clarity, link previews, maintainability, and entity consistency.

Consequence

New public routes must be added to the metadata system and verified in rendered output.

Decision 11 — one shared social-preview system
Decision

The site uses shared 1200 × 630 preview images for Open Graph and Twitter.

Current assets:

app/opengraph-image.png
app/opengraph-image.alt.txt
app/twitter-image.png
app/twitter-image.alt.txt
Reason

A shared system gives every route a professional preview without inventing page-specific screenshots or imagery.

Consequence

Page metadata must explicitly reference the shared assets because nested metadata objects may replace root metadata rather than merge deeply.

Decision 12 — structured-data architecture
Decision

Structured data is divided into:

one root identity graph;
one matching page graph for each indexable page.
Files
lib/structured-data.ts
lib/page-structured-data.ts
components/seo/StructuredData.tsx
Root graph

The root graph represents:

Navid Hasan;
the website;
the profile page;
Labonno;
the Milestogo Business Operations Platform.
Page graphs

Page-specific graphs represent the purpose of:

home;
work;
services;
about;
contact;
journal.
Portal boundary

/portal has no page-specific structured-data graph.

Reason

This keeps identity data centralized while allowing each public route to describe its own page purpose.

Decision 13 — no fabricated Journal articles
Decision

The Journal currently represents planned topics and editorial direction only.

Not allowed yet

Do not add:

Article;
BlogPosting;
datePublished;
dateModified;
reading time;
article URLs;
fake excerpts presented as published work.
Reason

Structured data and metadata must reflect real published content, not future intentions.

Consequence

Article metadata will be introduced only after a real publishing system and real articles exist.

Decision 14 — centralized public route registry
Decision

Indexable routes are centralized in:

lib/public-routes.ts
Current indexable routes
/
/work
/services
/about
/contact
/journal
Reason

The sitemap and public route documentation should derive from one controlled list.

Consequence

New indexable routes must be added to this registry and verified against rendered canonical URLs.

Decision 15 — portal remains noindex
Decision

/portal remains:

unfinished;
noindex;
nofollow;
excluded from the sitemap;
excluded from public route collections;
excluded from page-specific structured data.
Reason

The page is a reserved future entry point, not an active public product.

Robots decision

robots.txt does not block /portal.

This allows crawlers to access the page and read its page-level noindex directive.

Decision 16 — no fabricated sitemap dates
Decision

The sitemap does not include unsupported lastModified values.

Reason

A modification date should not be generated merely because a build occurred.

Consequence

Dates may be added later only when they are backed by real content or source-control data through a deliberate process.

Decision 17 — static metadata routes
Decision

The following metadata routes explicitly use static behavior:

app/sitemap.ts
app/robots.ts
app/manifest.ts
Reason

Next.js static export requires these routes to be resolvable during build.

Consequence

Do not introduce runtime behavior into these metadata routes while output: "export" remains active.

Decision 18 — AI-readable discovery
Decision

The site publishes:

public/llms.txt
Purpose

The file provides:

canonical identity guidance;
route summaries;
Labonno status;
Milestogo relationship boundaries;
Journal publication status;
portal status;
explicit instructions against invented claims.
Reason

AI systems and automated tools benefit from a concise, factual, machine-readable summary of the site.

Consequence

llms.txt must be updated when identity, project status, routes, or publication status changes.

Decision 19 — local development helper
Decision

The repository includes:

scripts/navidhasan-web-local
Behavior

The helper:

runs the development server on port 3001;
stores PID and logs outside the repository;
verifies process identity;
checks port occupancy;
supports run, status, and stop command names;
refuses to stop unrelated processes.
Reason

The helper provides a repeatable WSL-friendly local workflow without weakening process safety.

Consequence

Future edits must preserve process verification and must not hardcode private machine identifiers or secrets.

Decision 20 — no environment file without need
Decision

The project does not include .env.example.

Reason

The current public site does not require application environment variables.

Consequence

An example environment file should be introduced only when a real environment-dependent feature exists.

Decision 21 — documentation before final commit
Decision

The redesign and SEO foundation must not be committed until the documentation set is complete.

Required documentation
project overview;
agent rules;
documentation index;
project status;
roadmap;
decisions;
architecture;
design system;
SEO and discovery;
local development;
build and deployment;
verification.
Reason

The implementation is broad enough that future work would be unsafe without an accurate handoff layer.

Decision 22 — preserve useful failure history
Decision

Retired experiments and important failures should be preserved under:

docs/history/
Reason

Failure records prevent repeated mistakes and explain why an apparently interesting feature was rejected.

Consequence

Historical documents must not be treated as active requirements.

Decision 23 — verification before completion
Decision

Normal source changes require:

npx tsc --noEmit
npm run lint
git diff --check

Changes affecting routes, metadata, configuration, assets, or deployment also require:

npm run build
Reason

Static-export behavior and generated metadata cannot be verified through TypeScript alone.

Consequence

A checkpoint must not be described as complete when required checks have not passed.

Decision 24 — coherent commit discipline
Decision

The redesign, navigation replacement, SEO foundation, social assets, and documentation should be committed as one coherent completed checkpoint.

Before commit

Review:

modified files;
untracked files;
deleted files;
documentation completeness;
secrets;
temporary files;
TypeScript;
lint;
formatting;
production build;
final diff.
Reason

The work forms one connected transformation of the public site and should not be split into misleading partial commits at the closure stage.

Updating this document

Add a new decision when a future change affects:

architecture;
public identity;
routes;
indexing;
design direction;
data ownership;
deployment;
security;
content publishing;
major workflow behavior.

Do not rewrite historical decisions to make earlier work appear cleaner. Record the new decision and explain what changed.


Next file:

`docs/architecture/overview.md`
