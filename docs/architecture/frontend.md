# Frontend Architecture

This document describes the frontend structure and implementation conventions of `navidhasan.com`.

The frontend is built with the Next.js App Router, React, TypeScript, CSS Modules, and shared CSS foundation files.

## Frontend goals

The frontend should remain:

- clear;
- maintainable;
- responsive;
- accessible;
- compatible with static export;
- consistent with the active design system;
- easy to extend without unnecessary abstraction.

## Route structure

Application routes live under:

```text
app/

Current routes:

/
├── /work
├── /services
├── /about
├── /contact
├── /journal
└── /portal

Each route is represented by a page.tsx file.

Current route files:

app/page.tsx
app/work/page.tsx
app/services/page.tsx
app/about/page.tsx
app/contact/page.tsx
app/journal/page.tsx
app/portal/page.tsx
Root layout

The application shell is defined in:

app/layout.tsx

The root layout owns:

global metadata defaults;
the canonical site identity graph;
the site header;
the site footer;
mobile bottom navigation;
global CSS imports;
shared page structure;
document language;
application icons;
manifest linkage.

Page-specific content and metadata should remain inside the individual routes.

Home-page organization

The home page uses a dedicated route folder for its visual sections:

app/home/

Current home-page style modules include:

app/home/Hero.module.css
app/home/Introduction.module.css
app/home/CapabilityPanel.module.css
app/home/BodySections.module.css

The home route entry point remains:

app/page.tsx

The home-page modules separate visual responsibilities while keeping the page content assembled in one route.

Page-specific styles

Each major public route owns a CSS Module near its page file.

Examples:

app/about/AboutPage.module.css
app/contact/ContactPage.module.css
app/journal/JournalPage.module.css
app/services/ServicesPage.module.css
app/work/WorkPage.module.css

Page CSS Modules should contain:

route-specific layout;
route-specific spacing;
page-only responsive rules;
local visual treatments;
local motion where needed.

Page-specific behavior should not be added to global styles unless it is genuinely shared.

Shared component structure

Reusable frontend components live under:

components/

Current component groups:

components/navigation/
components/footer/
components/seo/
Navigation components

Navigation is organized under:

components/navigation/

Current files include:

components/navigation/SiteHeader.tsx
components/navigation/MobileBottomNav.tsx
components/navigation/MobileBottomNav.module.css
components/navigation/header/Brand.module.css
components/navigation/header/DesktopNavigation.module.css
components/navigation/header/HeaderShell.module.css
Site header responsibilities

The site header is responsible for:

brand presentation;
desktop navigation;
mobile-safe header behavior;
current-route state;
accessible route links;
consistent spacing and alignment.
Mobile navigation responsibilities

The mobile bottom navigation is responsible for:

compact route access;
current-route indication;
touch-friendly targets;
safe spacing from the viewport edge;
clear labels;
predictable behavior.

The previous root-level navigation components are retired:

components/SiteHeader.tsx
components/MobileBottomNav.tsx

Do not restore imports from those paths.

Footer component

The footer lives under:

components/footer/

Current files:

components/footer/SiteFooter.tsx
components/footer/SiteFooter.module.css

The footer is responsible for:

closing page structure;
contact or identity links;
project identity;
responsive layout;
consistent spacing across routes.
SEO component

Structured-data rendering is handled by:

components/seo/StructuredData.tsx

This component should remain small and focused.

Its responsibility is to serialize and render verified JSON-LD data supplied by the structured-data layer.

It should not independently invent entity relationships or page metadata.

Shared site data

Frontend-visible site data is centralized in:

lib/site.ts

This includes:

site name;
canonical URL;
navigation entries;
project descriptions;
service areas;
identity relationships;
contact information;
protected factual boundaries.

Visible page copy may remain inside route files when it is route-specific, but repeated identity data should come from the shared site source.

Metadata usage

Each page uses the shared metadata helper from:

lib/metadata.ts

A typical page provides:

title;
description;
path;
optional indexing policy.

The helper provides:

canonical URL;
Open Graph metadata;
Twitter metadata;
social preview assets;
robots directives;
consistent title formatting.

Avoid manually duplicating the complete metadata object in every page.

Structured-data usage

Page-specific structured data comes from:

lib/page-structured-data.ts

The root identity graph comes from:

lib/structured-data.ts

Each indexable page should render the graph matching its actual purpose.

The /portal route must not render a public page graph.

Server and client components

Prefer server components by default.

Use a client component only when the page or component genuinely needs:

browser state;
event handlers;
route-state hooks;
DOM measurement;
browser-only APIs;
interactive behavior unavailable in a server component.

Do not add "use client" merely for styling or static rendering.

Keeping components server-rendered where possible reduces client-side JavaScript and improves static output.

TypeScript conventions

The project uses strict TypeScript settings.

Frontend code should:

use explicit types where inference is unclear;
avoid any;
keep component props focused;
use Readonly where appropriate;
avoid unnecessary type assertions;
verify nullable values;
preserve Next.js framework types;
use the @/ path alias for project imports where practical.

TypeScript validation is performed with:

npx tsc --noEmit
Import conventions

Prefer imports grouped by source:

framework imports;
React types;
internal components;
internal libraries;
local styles.

Example:

import Link from "next/link";

import SiteFooter from "@/components/footer/SiteFooter";
import { site } from "@/lib/site";

import styles from "./Example.module.css";

Avoid:

deeply nested relative imports when the @/ alias is clearer;
importing from retired component paths;
circular imports;
barrel files that hide ownership without real benefit.
Component design principles

Components should be:

focused;
readable;
accessible;
reusable only when actual repetition exists;
colocated with their styles;
named by responsibility;
free from unrelated page logic.

Avoid creating abstractions for one small use case merely to make the code appear more modular.

A component extraction is useful when it:

removes meaningful duplication;
clarifies page structure;
isolates interaction;
improves testing;
creates a real shared UI primitive.
Content ownership

Route-specific content should stay near the route that presents it.

Shared factual identity should stay in:

lib/site.ts

Examples of shared facts:

professional role;
canonical URL;
Labonno relationship;
Milestogo relationship;
project status;
contact identity.

Examples of route-specific content:

section headings;
page introductions;
local calls to action;
explanatory paragraphs;
page-only lists.
Link behavior

Internal routes should use Next.js Link.

External links should:

use normal anchor behavior;
have clear link text;
use target="_blank" only when opening a new tab is genuinely useful;
include safe rel attributes when needed;
avoid generic labels such as “click here.”

Links should accurately describe their destination.

Heading structure

Each page should have one meaningful H1.

Subsections should follow a logical heading order.

Do not skip heading levels only for visual styling.

Use CSS to control appearance rather than choosing heading elements by size.

Accessibility expectations

Frontend work must preserve:

semantic landmarks;
keyboard navigation;
visible focus states;
readable contrast;
logical heading order;
meaningful link labels;
appropriate aria-current;
touch-friendly mobile controls;
reduced-motion consideration;
correct image alt behavior.

Decorative images should use empty alt text.

Informational images should use concise, accurate alt text.

Responsive behavior

The site should work across:

small mobile screens;
large mobile screens;
tablets;
laptops;
desktop monitors;
wide displays.

Responsive layouts should be driven by:

content needs;
readable line length;
layout stability;
navigation usability;
spacing consistency.

Do not design only around one fixed viewport.

Motion

Motion should remain limited and purposeful.

Appropriate uses include:

subtle entrance transitions;
hover feedback;
focus feedback;
small navigation state changes.

Avoid:

long decorative sequences;
movement that delays reading;
excessive parallax;
continuous ambient animation;
animation that causes layout shift;
motion that ignores reduced-motion preferences.
Performance

Frontend changes should minimize:

unnecessary client JavaScript;
large image payloads;
repeated CSS;
heavy third-party libraries;
unnecessary re-renders;
unused dependencies;
decorative media above the fold.

Prefer static rendering and CSS-driven behavior when possible.

Static-export compatibility

Frontend features must remain compatible with:

output: "export"

Avoid introducing:

runtime-only rendering;
server actions requiring a production Node.js server;
session-dependent pages;
request-time cookies;
request-time headers;
database-dependent route rendering;
unsupported dynamic APIs.

A feature that requires runtime behavior must be treated as a separate architectural change.

Portal frontend boundary

The /portal page is currently only a static placeholder.

It must not imply:

active authentication;
private project access;
working payment features;
live document exchange;
client messaging;
current user accounts.

A real portal will require a separate frontend and backend architecture.

Journal frontend boundary

The Journal currently renders planned writing subjects.

It does not yet include:

article detail pages;
Markdown or MDX rendering;
content collections;
publication dates;
reading time;
article filtering;
article structured data.

Do not build fake article cards that appear published before real content exists.

Global CSS responsibilities

app/globals.css should remain a controlled entry point for shared styling.

It should not become a large collection of page-specific rules.

Shared global rules should live under:

styles/foundation/
styles/shared/

The global file should primarily import and coordinate the shared styling layers.

Frontend change workflow

Before editing:

inspect the target route or component;
inspect its CSS Module;
inspect shared tokens before adding new values;
verify whether the behavior already exists elsewhere;
keep the change focused;
preserve static-export compatibility;
update documentation when architecture changes.

After editing, run:

npx tsc --noEmit
npm run lint
git diff --check

Also run:

npm run build

when the change affects:

routes;
metadata;
assets;
configuration;
static output;
layout structure;
navigation.
Related documentation
overview.md
design-system.md
seo-and-discovery.md
../project/status.md
../project/decisions.md
../operations/verification.md

Next file:

`docs/architecture/design-system.md`
