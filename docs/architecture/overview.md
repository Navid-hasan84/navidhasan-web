# Architecture Overview

This document describes the high-level architecture of `navidhasan.com`.

The site is designed as a static, content-driven professional website with a strong emphasis on maintainability, factual identity, search visibility, performance, and simple deployment.

## Architectural goals

The current architecture is intended to provide:

- fast static delivery;
- simple deployment;
- low operational cost;
- clear route ownership;
- predictable metadata;
- factual structured data;
- maintainable styling;
- responsive navigation;
- minimal runtime complexity;
- safe future extension.

## Current architecture

The project uses:

- Next.js App Router;
- React;
- TypeScript;
- CSS Modules;
- shared CSS foundation files;
- static export;
- Next.js metadata conventions;
- JSON-LD structured data;
- static hosting.

The site does not currently require:

- a backend;
- a database;
- server-side sessions;
- runtime API routes;
- authentication;
- dynamic server rendering;
- persistent user data.

## Static export model

The Next.js configuration uses:

```ts
output: "export"

The build process is:

Source files
     │
     ▼
Next.js compilation
     │
     ▼
Static route generation
     │
     ▼
out/
     │
     ▼
Static hosting

The generated out/ directory is the deployable artifact.

Because the site is statically exported:

public pages are generated during build;
metadata routes are generated during build;
social images are copied into the output;
no Node.js server is required in production;
no runtime database connection exists;
no server-side session state exists.
Application layers

The repository is organized into the following main layers.

Route layer

Located under:

app/

Responsibilities:

route entry points;
page-level content;
route metadata declarations;
page-specific structured-data injection;
route-specific layout and presentation.

Current routes:

/
/work
/services
/about
/contact
/journal
/portal
Shared component layer

Located under:

components/

Responsibilities:

navigation;
footer;
reusable SEO rendering;
shared interactive behavior.

Current component groups:

components/navigation/
components/footer/
components/seo/
Site-data and metadata layer

Located under:

lib/

Responsibilities:

canonical site identity;
project descriptions;
navigation configuration;
metadata generation;
public route registry;
root structured data;
page-specific structured data;
JSON-LD serialization.

Important files:

lib/site.ts
lib/metadata.ts
lib/public-routes.ts
lib/structured-data.ts
lib/page-structured-data.ts
Styling layer

Located under:

styles/

and near individual routes and components.

Responsibilities:

global resets;
design tokens;
base typography;
shared page structure;
shared button behavior;
page-specific styling;
component-specific styling;
responsive behavior.

Current shared structure:

styles/foundation/
styles/shared/

Page and component styles use CSS Modules close to their implementation.

Discovery layer

Implemented through:

app/sitemap.ts
app/robots.ts
app/manifest.ts
app/opengraph-image.png
app/twitter-image.png
public/llms.txt

Responsibilities:

search-engine discovery;
crawler guidance;
social previews;
application metadata;
AI-readable identity guidance.
Operations layer

Implemented through:

scripts/navidhasan-web-local
docs/operations/

Responsibilities:

local server control;
process safety;
build instructions;
verification;
deployment guidance.
Route architecture

Each route owns:

its page component;
its page metadata declaration;
its page-specific styles;
its page-specific structured-data graph where applicable.

The root layout owns:

shared site metadata;
root structured data;
global header;
global footer;
mobile navigation;
global CSS;
language declaration;
application shell.
Root layout responsibilities

app/layout.tsx is responsible for:

global metadata;
application name;
canonical site defaults;
icon declarations;
manifest reference;
root JSON-LD graph;
global navigation;
footer;
mobile bottom navigation;
shared page shell.

The root layout should remain focused on truly global concerns.

Page-specific metadata and page-specific structured data should remain close to their routes.

Public route registry

Indexable routes are centralized in:

lib/public-routes.ts

Current registry:

/
/work
/services
/about
/contact
/journal

The registry is used by the sitemap.

/portal is intentionally excluded.

A new indexable route must be added to:

the route tree;
page metadata;
the public route registry;
structured data where appropriate;
documentation;
final rendered-output verification.
Metadata architecture

Page metadata is generated through:

lib/metadata.ts

Each page provides:

title;
description;
route path;
indexing policy where necessary.

The shared metadata generator adds:

canonical URL;
Open Graph metadata;
Twitter metadata;
social images;
robots settings;
title formatting.

This reduces duplication and keeps metadata behavior consistent.

Structured-data architecture

Structured data is separated into two layers.

Root graph

Defined in:

lib/structured-data.ts

The root graph represents:

Navid Hasan;
the website;
the profile page;
Labonno;
the Milestogo Business Operations Platform.

It is rendered once from the root layout.

Page graphs

Defined in:

lib/page-structured-data.ts

Each indexable page receives one matching graph.

Current page graphs:

home;
work;
services;
about;
contact;
journal.

/portal does not receive a page-specific graph.

The reusable renderer lives in:

components/seo/StructuredData.tsx
Identity architecture

Canonical public identity is centralized in:

lib/site.ts

This prevents conflicting descriptions across:

visible page copy;
metadata;
structured data;
sitemap descriptions;
social previews;
llms.txt;
documentation.

Protected relationships include:

Navid Hasan is founder and developer of Labonno;
Labonno is pre-launch;
Navid Hasan is developer and system architect behind the Milestogo platform;
no Milestogo founder or ownership claim is made.
Navigation architecture

Desktop and mobile navigation are separate components with shared route data.

Current navigation files:

components/navigation/SiteHeader.tsx
components/navigation/MobileBottomNav.tsx
components/navigation/header/Brand.module.css
components/navigation/header/DesktopNavigation.module.css
components/navigation/header/HeaderShell.module.css
components/navigation/MobileBottomNav.module.css

The route list is sourced from shared site configuration rather than duplicated in multiple components.

The navigation system is responsible for:

current-route indication;
responsive behavior;
keyboard accessibility;
mobile-safe spacing;
consistent branding;
clear route labels.
Styling architecture

Shared design rules are divided into:

Foundation
styles/foundation/tokens.css
styles/foundation/reset.css
styles/foundation/base.css

Responsibilities:

colors;
spacing;
typography;
global reset;
base element behavior.
Shared styles
styles/shared/buttons.css
styles/shared/page.css

Responsibilities:

common button patterns;
shared page shells;
repeated layout behavior.
Local styles

Page and component CSS Modules own:

page composition;
component spacing;
responsive layout;
route-specific visuals;
local animation.

This separation prevents global style leakage while keeping shared behavior reusable.

Image architecture

The project uses:

static images;
unoptimized Next.js image handling;
metadata images stored under app/;
public assets stored under public/.

Important active assets:

app/icon.png
app/apple-icon.png
app/favicon.ico
app/opengraph-image.png
app/twitter-image.png
public/icone/n49.svg

The retired moon asset is no longer part of the active design.

Large decorative assets should not be added without a clear purpose and performance review.

Manifest and metadata routes

The project uses static metadata routes:

app/manifest.ts
app/robots.ts
app/sitemap.ts

These routes explicitly support static generation.

They must not introduce runtime-only behavior while static export remains active.

Portal boundary

/portal is architecturally separate from the public discovery system.

It remains:

a static placeholder;
noindex;
nofollow;
outside the sitemap;
outside page-specific structured-data graphs;
outside public route collections.

A future active portal would likely require:

authentication;
authorization;
backend services;
database storage;
private files;
runtime deployment;
stronger security controls.

That would require a separate architectural phase.

Journal boundary

The Journal is currently an index page for planned writing subjects.

It does not yet include:

dynamic article routes;
content storage;
Markdown or MDX;
a CMS;
article metadata;
publication dates;
article structured data.

A future publishing system should remain static where possible.

Environment architecture

The current site does not use application environment variables.

No .env.example exists because there is no current environment-dependent application behavior.

Environment files should be introduced only when a real feature requires them.

Deployment architecture

The production deployment consumes:

out/

The hosting provider must support:

static HTML;
static CSS;
static JavaScript;
static images;
clean route delivery;
HTTPS;
custom domains.

No production application server is required for the current architecture.

Verification architecture

The minimum validation pipeline is:

npx tsc --noEmit
npm run lint
git diff --check
npm run build

Additional rendered-output checks should verify:

route files;
canonical URLs;
social metadata;
structured data;
sitemap;
robots;
manifest;
indexing boundaries;
local asset references.
Dependency philosophy

The project should avoid unnecessary dependencies.

A dependency should be added only when it provides clear value that cannot be achieved safely with the current stack.

Avoid adding:

large animation libraries;
overlapping styling systems;
client-side state libraries without need;
backend SDKs before backend architecture exists;
runtime libraries incompatible with static export.
Architecture change process

A major architectural change should include:

a clearly defined requirement;
an explicit decision;
impact analysis;
static-export compatibility review;
security review where relevant;
implementation checkpoint;
verification;
documentation updates;
deliberate commit.

Do not silently change the hosting or runtime model inside an unrelated feature.

Current architectural limitations

The current architecture does not provide:

authentication;
authorization;
private data;
server-side forms;
persistent content management;
runtime APIs;
user accounts;
payment processing;
private project workflows.

These are intentional boundaries, not hidden features.

Related documentation
frontend.md
design-system.md
seo-and-discovery.md
../operations/local-development.md
../operations/build-and-deployment.md
../operations/verification.md
../project/decisions.md

Next file:

`docs/architecture/frontend.md`
