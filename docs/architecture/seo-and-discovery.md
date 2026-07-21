# SEO and Discovery

This document describes the search, metadata, structured-data, social-preview, crawler, and AI-readable discovery architecture of `navidhasan.com`.

The system is designed to keep public identity factual, route metadata consistent, static-export compatible, and easy to verify.

## Goals

The SEO and discovery system should provide:

- accurate page titles and descriptions;
- canonical URLs;
- correct indexing boundaries;
- consistent Open Graph metadata;
- Twitter large-image previews;
- valid structured data;
- a clean sitemap;
- crawler-readable robots rules;
- a web app manifest;
- AI-readable public identity guidance;
- no unsupported claims.

## Canonical site identity

The primary site identity is centralized in:

```text
lib/site.ts

This file contains the canonical source for:

public name;
site URL;
professional role;
public descriptions;
navigation;
services;
project information;
Labonno relationship;
Milestogo relationship;
protected factual boundaries.

Repeated public identity should not be rewritten independently across pages.

When a verified fact changes, update the canonical source and all dependent documentation in the same checkpoint.

Canonical URL

The canonical website is:

https://navidhasan.com

Each indexable page should have one canonical URL derived from this domain.

Current canonical routes:

https://navidhasan.com
https://navidhasan.com/work
https://navidhasan.com/services
https://navidhasan.com/about
https://navidhasan.com/contact
https://navidhasan.com/journal

The homepage canonical may serialize with or without a trailing slash depending on framework normalization. Both forms refer to the same root URL.

Page metadata system

Reusable metadata generation is implemented in:

lib/metadata.ts

Each page supplies:

a title;
a description;
its route path;
an optional noindex policy.

The helper generates:

formatted title;
canonical URL;
Open Graph metadata;
Twitter metadata;
robots directives;
social preview references;
social image alternative text.

This prevents each route from defining a large duplicated metadata object.

Page metadata requirements

Each public indexable route must have:

a unique title;
a unique description;
one canonical URL;
one matching Open Graph URL;
Open Graph image metadata;
Twitter large-image metadata;
matching social-image alt text.

Titles and descriptions must describe the actual content of the page.

Do not reuse the same description across all routes.

Current indexable routes

The public route registry lives in:

lib/public-routes.ts

Current indexable routes:

/
/work
/services
/about
/contact
/journal

This registry is used to generate the sitemap.

Portal indexing boundary

The /portal route is intentionally unfinished.

It must remain:

noindex;
nofollow;
excluded from the sitemap;
excluded from the public route registry;
excluded from page-specific structured-data collections;
described as reserved or future functionality.

The portal page must not be presented as an active client system.

Why /portal is not blocked in robots

robots.txt does not disallow /portal.

This is intentional.

Search crawlers need access to the page in order to read the page-level noindex directive.

Blocking the route in robots.txt could prevent crawlers from seeing that directive.

Robots metadata

Crawler rules are generated through:

app/robots.ts

The route is statically generated and must remain compatible with:

output: "export"

The robots output should:

allow crawling of public pages;
expose the sitemap location;
avoid blocking /portal;
avoid inventing crawler-specific policies without need.
Sitemap

The sitemap is generated through:

app/sitemap.ts

It includes only the current indexable routes.

Current output should include:

/
/work
/services
/about
/contact
/journal

It must not include:

/portal
Sitemap date policy

The sitemap does not include fabricated lastModified values.

A build date is not automatically a meaningful content-modification date.

Dates may be added later only when they are derived from a real content source or an explicit source-control-based process.

Open Graph metadata

Open Graph metadata is used for link previews on platforms that support the protocol.

Each route should include:

title;
description;
canonical page URL;
site name;
image;
image width;
image height;
image alt text;
locale;
page type where appropriate.

The current shared Open Graph image is:

app/opengraph-image.png

Current size:

1200 × 630

Its alternative text is stored in:

app/opengraph-image.alt.txt
Twitter metadata

Twitter metadata uses a large-image card.

The current image is:

app/twitter-image.png

Current size:

1200 × 630

Its alternative text is stored in:

app/twitter-image.alt.txt

Each route should explicitly include the Twitter image reference.

Nested metadata objects may replace parent objects rather than deeply merge them, so social-image metadata must be verified in rendered output.

Social preview design

The social preview system uses a restrained editorial design consistent with the public website.

It should not contain:

unsupported customer claims;
fake project metrics;
false awards;
fabricated experience claims;
inaccurate ownership statements;
status language that makes pre-launch work appear fully operating.

The social image may identify:

Navid Hasan;
independent full-stack development;
Labonno founder relationship;
selected technical focus.
Structured-data architecture

Structured data is divided into:

a root identity graph;
page-specific graphs.

The root graph is defined in:

lib/structured-data.ts

Page graphs are defined in:

lib/page-structured-data.ts

The rendering component is:

components/seo/StructuredData.tsx
Root identity graph

The root graph currently represents:

Navid Hasan as a Person;
navidhasan.com as a WebSite;
the homepage as a ProfilePage;
Labonno;
the Milestogo Business Operations Platform.

Entity identifiers should remain stable and reuse canonical URLs.

Person identity

Navid Hasan is represented as:

an independent full-stack developer based in Bangladesh;
the founder and developer of Labonno;
the developer and system architect behind the Milestogo Business Operations Platform.

Do not add external profile links unless real authoritative profiles are confirmed.

Do not invent sameAs relationships.

Labonno entity

Labonno is represented as:

a pre-launch beauty and cosmetics commerce platform;
founded and developed by Navid Hasan;
in active development;
not yet an operating cosmetics shop with established customers or sales.

Official website:

https://labonno.online

Do not add unsupported:

ratings;
reviews;
customer counts;
product counts;
operating dates;
revenue;
transaction volume;
awards;
completed commercial status.
Milestogo entity

The Milestogo Business Operations Platform is represented as:

a web-based ERP and operational system for an aquafeed business;
designed and developed by Navid Hasan across product governance, roles, permissions, formulation, production, pricing, dealer workflows, portals, APIs, databases, and deployment infrastructure.

Official project website:

https://milestogo.online

The graph and visible content must not claim that Navid Hasan founded or owns the Milestogo business unless a separate authoritative source establishes that relationship.

Page-specific structured data

Current page-specific graphs correspond to:

home;
work;
services;
about;
contact;
journal.

Each graph should describe the actual purpose of its page.

Examples:

Home should describe the profile and public website.
Work should describe selected project work.
Services should describe service offerings.
About should describe the profile and background page.
Contact should describe contact access.
Journal should describe the journal index and editorial direction.

/portal must not have a public page-specific graph.

Journal structured-data boundary

The Journal currently contains planned subjects only.

Do not add:

Article;
BlogPosting;
datePublished;
dateModified;
reading-time fields;
article URLs;
publication history.

Article structured data should be added only after real article pages and real publication data exist.

JSON-LD rendering

JSON-LD is rendered through:

components/seo/StructuredData.tsx

The component should remain a simple serializer and script renderer.

It should not:

invent relationships;
fetch runtime data;
derive unsupported claims;
mutate canonical entity definitions.

Structured-data objects should be created in the library layer and passed into the renderer.

Structured-data quality rules

Maintain:

valid JSON serialization;
stable @id values;
canonical URL consistency;
accurate entity relationships;
factual project status;
no duplicate contradictory entities;
one root graph;
one matching page graph per indexable route;
no portal page graph.

Do not add schema properties merely because they are available.

Use only properties supported by real project facts.

Manifest

The web app manifest is generated through:

app/manifest.ts

It should include:

application name;
short name;
description;
start URL;
display mode;
background color;
theme color;
icons.

The manifest must remain statically exportable.

It should not imply that the site is an installed application with offline or authenticated capabilities that do not exist.

Icons

Current application icons include:

app/favicon.ico
app/icon.png
app/apple-icon.png

The manifest should reference real exported icon assets.

Icon dimensions and formats should be verified before changing manifest entries.

AI-readable discovery

The site publishes:

public/llms.txt

This file provides concise machine-readable guidance about:

Navid Hasan;
the public site;
available routes;
Labonno;
Milestogo;
Journal status;
portal status;
factual relationship boundaries;
prohibited inferences.
llms.txt protected statements

The file should continue to communicate that:

navidhasan.com is the canonical source for Navid Hasan’s public professional identity;
Labonno is pre-launch;
Navid Hasan founded and develops Labonno;
Navid Hasan develops and architects the Milestogo platform;
Navid Hasan should not be described as founder or owner of Milestogo without authoritative evidence;
Journal articles are not yet published;
/portal is unfinished and not a public product.
llms.txt maintenance

Update public/llms.txt when any of the following changes:

public role;
project status;
route structure;
publication status;
portal status;
official project URLs;
factual entity relationships;
service scope.

Do not allow the file to become stale while visible page content changes.

No invented external identity links

The current site does not have confirmed external sameAs profiles.

Do not add:

LinkedIn;
GitHub;
X;
Facebook;
Instagram;
Crunchbase;
other profile links;

unless the exact authoritative profile is confirmed.

A plausible-looking profile is not sufficient evidence.

Metadata route static behavior

The following routes must remain statically generated:

app/sitemap.ts
app/robots.ts
app/manifest.ts

They should use explicit static behavior where required by the installed Next.js version.

Do not introduce request-time data or runtime APIs into these routes while the project uses static export.

Rendered-output verification

Source inspection is not enough.

After SEO-related changes, verify the generated output under:

out/

Important files:

out/index.html
out/work.html
out/services.html
out/about.html
out/contact.html
out/journal.html
out/portal.html
out/robots.txt
out/sitemap.xml
out/manifest.webmanifest
out/llms.txt
out/opengraph-image.png
out/twitter-image.png
Metadata verification checklist

For every public route, verify:

one title;
one description;
one canonical URL;
one Open Graph URL;
one Open Graph image;
one Open Graph image alt value;
one Twitter card type;
one Twitter image;
one Twitter image alt value;
correct robots behavior;
no contradictory metadata.
Structured-data verification checklist

Verify:

JSON parses successfully;
root graph appears once;
page graph matches the route;
entity IDs are stable;
canonical URLs are correct;
Labonno remains pre-launch;
Milestogo ownership is not overstated;
Journal has no article schema;
portal has no page graph.
Sitemap verification checklist

Verify:

exactly the intended indexable routes appear;
/portal is absent;
URLs use the canonical domain;
no unsupported dates are present;
no duplicate URLs exist.
Robots verification checklist

Verify:

public crawling is allowed;
sitemap location is present;
/portal is not blocked;
no accidental site-wide disallow exists.
Manifest verification checklist

Verify:

valid JSON output;
correct application name;
correct short name;
correct start URL;
correct colors;
real icon references;
exported file exists.
Social image verification checklist

Verify:

both images exist;
both are 1200 × 630;
alt files exist;
rendered metadata references the images;
copy remains factual;
no accidental old moon imagery remains.
Commands

Run:

npx tsc --noEmit
npm run lint
git diff --check
npm run build

SEO and discovery changes should not be considered complete until the static output has been inspected.

Future Journal publishing

When real articles are introduced, update:

route structure;
page metadata;
article metadata;
structured data;
sitemap;
llms.txt;
project status;
roadmap;
verification documentation.

Use real dates and real article data only.

Future portal implementation

A real portal may require a separate authenticated runtime system.

Even after implementation, private portal routes should generally remain:

noindex;
excluded from public structured data;
excluded from the public sitemap.

A separate public portal landing page may be considered only through an explicit decision.

Search-engine registration

Search Console or other webmaster-tool registration is an operational task, not a source-code feature.

Do not mark it complete until:

domain ownership is verified;
sitemap is submitted;
indexing is inspected;
crawl errors are reviewed.
Related documentation
overview.md
frontend.md
design-system.md
../project/status.md
../project/decisions.md
../operations/build-and-deployment.md
../operations/verification.md

Next file:

`docs/operations/local-development.md`
