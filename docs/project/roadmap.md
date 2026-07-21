# Project Roadmap

This roadmap records the planned work following the current redesign and SEO foundation for `navidhasan.com`.

It should be updated when priorities change or a roadmap item is completed.

## Current baseline

The following foundation is complete:

- full public-site redesign;
- responsive desktop navigation;
- responsive mobile bottom navigation;
- dedicated footer;
- shared design tokens;
- page-specific CSS Modules;
- static export support;
- centralized metadata;
- canonical URLs;
- Open Graph metadata;
- Twitter large-image metadata;
- social preview assets;
- structured data;
- sitemap;
- robots metadata;
- web manifest;
- `llms.txt`;
- route-level indexing boundaries;
- local development helper;
- project documentation structure.

## Roadmap principles

Future work should preserve:

- static hosting compatibility unless a deliberate architecture change is approved;
- factual public identity;
- restrained professional visual direction;
- accessibility;
- clear documentation;
- small, coherent checkpoints;
- verification before commit;
- no unsupported claims;
- no unnecessary dependencies.

## Phase 1 — documentation closure

Status: in progress

### 1.1 Repository documentation

Complete:

- `README.md`;
- `AGENTS.md`;
- `docs/README.md`;
- `docs/project/status.md`.

Remaining:

- project roadmap;
- project decisions;
- architecture overview;
- frontend architecture;
- design-system documentation;
- SEO and discovery documentation;
- local development documentation;
- build and deployment documentation;
- verification documentation.

### 1.2 Final documentation audit

Before the redesign and SEO work is committed:

- remove every `Documentation pending.` placeholder;
- verify all referenced files exist;
- verify route names and paths;
- verify factual identity language;
- verify commands match `package.json`;
- verify static-export assumptions;
- verify no outdated moon-themed direction remains;
- verify no unsupported Milestogo founder or ownership claim exists.

### 1.3 Coherent commit

After documentation is complete:

- review the full diff;
- review deleted files;
- review untracked files;
- run TypeScript;
- run lint;
- run formatting checks;
- run the static build;
- create one coherent commit;
- push only after explicit approval.

## Phase 2 — deployment closure

Status: planned

### 2.1 Confirm production hosting target

Record the actual deployment target and ownership of:

- DNS;
- domain configuration;
- static hosting account;
- build command;
- output directory;
- deployment branch;
- cache behavior;
- redirect behavior.

Do not document Cloudflare Pages as the active target unless it is confirmed by the current deployment configuration.

### 2.2 Production deployment verification

Verify:

- `navidhasan.com`;
- canonical redirects;
- HTTPS;
- desktop navigation;
- mobile navigation;
- all public routes;
- `robots.txt`;
- `sitemap.xml`;
- `manifest.webmanifest`;
- `llms.txt`;
- Open Graph image;
- Twitter image;
- favicon;
- Apple icon;
- `/portal` noindex output;
- external project links;
- contact links.

### 2.3 Search-engine registration

After deployment:

- submit the sitemap to Google Search Console;
- verify domain ownership;
- inspect page indexing;
- inspect structured data;
- inspect mobile usability;
- review crawl errors;
- confirm `/portal` remains excluded from indexing.

Search-engine registration should not be represented as complete until it is actually performed.

## Phase 3 — content refinement

Status: planned

### 3.1 Final copy review

Review public copy for:

- clarity;
- tone;
- repetition;
- grammar;
- factual accuracy;
- service positioning;
- project-status wording;
- Bangladesh and global-work positioning.

### 3.2 Work-page evidence

Add stronger project evidence only when real materials are available.

Potential additions:

- verified interface screenshots;
- architecture diagrams;
- selected implementation details;
- real project milestones;
- verified production URLs;
- technical case-study summaries.

Do not add fake metrics, testimonials, or usage claims.

### 3.3 Service refinement

Review whether service categories should remain broad or become more specific.

Possible future service sections:

- business website delivery;
- internal business systems;
- ERP and operations software;
- backend and API engineering;
- deployment and infrastructure;
- long-term product development.

## Phase 4 — Journal publishing system

Status: planned

The Journal currently contains planned subjects only.

### 4.1 Content model

Decide whether Journal content will use:

- local Markdown;
- MDX;
- static TypeScript data;
- an external CMS;
- a future backend.

Static content should be preferred while the site remains a static export.

### 4.2 Article routes

Potential route structure:

```text
/journal/[slug]

Before implementation, define:

slug rules;
publication dates;
update dates;
author identity;
article descriptions;
social preview behavior;
related-article behavior;
sitemap inclusion;
structured data.
4.3 Article structured data

Only after real articles exist, add:

Article or BlogPosting;
datePublished;
dateModified;
headline;
description;
author;
canonical URL;
article image.

Do not manufacture dates, reading time, or publication history.

4.4 Journal index update

Once articles are published:

separate published articles from planned topics;
add clear article cards;
include dates only when factual;
include reading time only when calculated;
update llms.txt;
update sitemap generation;
update project status documentation.
Phase 5 — contact workflow

Status: planned

The current Contact page provides contact direction but no backend form workflow.

5.1 Decide contact method

Possible approaches:

direct email only;
static third-party form service;
serverless form endpoint;
dedicated backend endpoint;
authenticated project inquiry system.
5.2 Security and privacy

Before adding a form, define:

spam protection;
rate limiting;
validation;
email delivery;
privacy notice;
data retention;
failure handling;
abuse reporting.

Do not collect personal information without a clear handling policy.

Phase 6 — client portal

Status: deferred

The /portal route is currently a reserved placeholder.

6.1 Product definition

Before implementation, define:

intended users;
authentication model;
project access rules;
document access;
message or update workflow;
payment visibility;
project status model;
security requirements;
audit requirements;
hosting architecture.
6.2 Architecture decision

An active portal may require:

backend services;
database;
authentication;
authorization;
private file storage;
transactional email;
runtime deployment.

This would be a deliberate architecture change away from a purely static public site.

6.3 Indexing policy

The portal should remain:

noindex;
nofollow;
excluded from the sitemap;
excluded from public structured-data collections.

This should continue even after real functionality is added unless a specific public landing page is created separately.

Phase 7 — accessibility and quality audit

Status: planned

7.1 Accessibility review

Audit:

keyboard navigation;
focus order;
focus visibility;
contrast;
heading structure;
landmark usage;
mobile navigation labels;
screen-reader behavior;
reduced-motion behavior;
image alt text;
link purpose.
7.2 Browser review

Test current versions of:

Chrome;
Firefox;
Edge;
Safari;
mobile Chrome;
mobile Safari.
7.3 Responsive review

Review representative widths:

small mobile;
large mobile;
tablet portrait;
tablet landscape;
small laptop;
desktop;
wide desktop.
7.4 Performance review

Measure:

JavaScript payload;
CSS payload;
image sizes;
font behavior;
Largest Contentful Paint;
Cumulative Layout Shift;
Interaction to Next Paint.

Avoid performance claims until measurements exist.

Phase 8 — automated testing

Status: planned

Current verification relies on:

TypeScript;
ESLint;
git diff --check;
production build;
targeted rendered-output audits.

Potential future tests:

component tests;
navigation behavior tests;
metadata tests;
sitemap tests;
structured-data tests;
accessibility tests;
end-to-end route tests;
visual-regression tests.

Testing should be introduced where it provides clear protection, not as unnecessary ceremony.

Phase 9 — ownership and licensing

Status: planned

The repository currently has no project-specific license file.

Future documentation should define:

copyright ownership;
code licensing;
content licensing;
asset licensing;
third-party attribution;
permitted reuse;
prohibited commercial reuse;
AI-assistance disclosure if desired.

Do not add a permissive open-source license without explicit approval from Navid Hasan.

Phase 10 — maintenance

Status: ongoing

Regular maintenance should include:

dependency review;
Next.js release review;
security advisory review;
broken-link checks;
metadata review;
sitemap review;
content accuracy review;
project-status updates;
documentation updates;
production availability checks.
Deferred ideas

The following ideas are not currently approved work:

active authentication;
public user accounts;
database integration;
runtime API routes;
live chat;
customer dashboard;
payment processing;
client file uploads;
analytics claims;
testimonials;
automated portfolio metrics;
reintroduction of the Orbit menu;
reintroduction of the moon-heavy visual direction.

They should be evaluated separately before implementation.

Next immediate step

Complete:

docs/project/decisions.md

Then continue through the architecture and operations documents one at a time.
