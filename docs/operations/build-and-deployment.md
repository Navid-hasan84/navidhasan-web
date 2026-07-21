# Build and Deployment

This document describes how `navidhasan.com` is built, exported, prepared for static hosting, and verified before deployment.

The current application is designed for static deployment.

## Deployment model

The project uses:

```ts
output: "export"

The build process generates a static deployment artifact under:

out/

The production host serves the files from that directory.

No Node.js application server is required for the current public site.

Current build architecture
Next.js source
     │
     ▼
TypeScript and framework validation
     │
     ▼
Static page generation
     │
     ▼
Metadata and asset export
     │
     ▼
out/
     │
     ▼
Static hosting platform
Production requirements

The current deployment target must support:

static HTML;
CSS;
client-side JavaScript;
static images;
custom domains;
HTTPS;
direct access to generated route files;
delivery of metadata files such as robots.txt and sitemap.xml.

The host does not need:

a persistent Node.js process;
a database;
Redis;
background workers;
runtime API routes;
server-side sessions;
application environment variables.
Install dependencies

From the repository root:

npm ci

Use the dependency versions locked in package-lock.json.

Do not use npm install during a normal deployment unless dependency files are intentionally being changed.

Validation before build

Run:

npx tsc --noEmit
npm run lint
git diff --check

These checks verify:

TypeScript correctness;
lint rules;
whitespace and conflict-marker issues in the Git diff.

A successful TypeScript and lint run does not replace the production build.

Production build

Run:

npm run build

This executes the Next.js production build and static export.

The build should:

compile successfully;
finish TypeScript validation;
collect route data;
generate static pages;
export metadata routes;
create the out/ directory.
Expected static routes

The current build should generate:

out/index.html
out/work.html
out/services.html
out/about.html
out/contact.html
out/journal.html
out/portal.html

Depending on host behavior, these may be served as clean routes:

/
/work
/services
/about
/contact
/journal
/portal

The hosting platform must correctly map route requests to the exported HTML files.

Expected discovery files

The build should generate:

out/robots.txt
out/sitemap.xml
out/manifest.webmanifest
out/llms.txt

These files should be reachable at:

https://navidhasan.com/robots.txt
https://navidhasan.com/sitemap.xml
https://navidhasan.com/manifest.webmanifest
https://navidhasan.com/llms.txt
Expected social assets

The build should generate:

out/opengraph-image.png
out/twitter-image.png

The source assets are:

app/opengraph-image.png
app/twitter-image.png

Current intended dimensions:

1200 × 630

Their alternative-text source files are:

app/opengraph-image.alt.txt
app/twitter-image.alt.txt
Expected application icons

The deployment should include:

favicon.ico
icon.png
apple-icon.png

The exact generated location should be verified in the final out/ directory.

The manifest must reference real exported icon files.

Static-export constraints

The production build must remain compatible with static export.

Do not introduce:

runtime-only route handlers;
server actions requiring a deployed Node.js runtime;
request-time cookies;
request-time headers;
database-dependent pages;
server-side sessions;
authentication logic for public routes;
dynamic rendering without static generation;
server-only image optimization;
metadata routes that require runtime execution.

A feature that requires runtime infrastructure must be treated as a separate architectural change.

Metadata-route requirements

The following files must remain statically exportable:

app/sitemap.ts
app/robots.ts
app/manifest.ts

Where required by the installed Next.js version, they should explicitly use static behavior.

Do not fetch live runtime data from these routes.

Generated-directory policy

The following directories are generated or installed:

.next/
out/
node_modules/

They must not be edited as source.

They should remain ignored by Git.

Do not commit out/ unless a future hosting workflow explicitly requires tracked build artifacts and that decision is documented.

Clean build expectations

A clean production build should not depend on an old .next/ or out/ directory.

When diagnosing build problems, generated directories may be removed only after verifying the path and confirming that no source files are affected.

Do not use broad or unsafe deletion commands.

Hosting target

The architecture supports static hosting providers such as:

Cloudflare Pages;
GitHub Pages with appropriate route handling;
Netlify;
static object storage plus CDN;
a traditional web server serving exported files.

The active production provider must be documented only after it is confirmed.

Do not claim that a specific provider is in use merely because it was considered during an earlier phase.

Build configuration

The current Next.js configuration includes:

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
Static export

output: "export" instructs Next.js to generate static files.

Unoptimized images

images.unoptimized: true prevents dependency on the Next.js runtime image-optimization service.

Images must therefore be appropriately sized and optimized before deployment.

Asset optimization

Before adding large assets:

confirm the file is necessary;
verify dimensions;
verify format;
compress where appropriate;
inspect visual quality;
check deployment size;
avoid duplicate files.

Do not add large decorative images without a clear purpose.

The previous moon asset was removed because it no longer belonged to the active design.

Route handling

The hosting platform must serve exported pages correctly.

Verify direct access to:

/work
/services
/about
/contact
/journal
/portal

A route must work when:

reached through site navigation;
opened directly in the browser;
refreshed;
visited from an external link.

A deployment that works only through client-side navigation is incomplete.

Canonical domain

The canonical production domain is:

https://navidhasan.com

Production hosting should enforce one canonical host.

Possible alternate hosts may include:

www.navidhasan.com;
provider-generated preview domains;
legacy deployment domains.

These should redirect to the canonical domain where appropriate.

The exact redirect policy must match the actual DNS and hosting configuration.

HTTPS

Production must use HTTPS.

Verify:

a valid certificate;
no mixed content;
canonical URLs use https;
social metadata uses https;
sitemap URLs use https;
manifest and icon URLs resolve over https.
DNS

Before deployment changes, confirm:

the active DNS provider;
the current authoritative nameservers;
the apex record;
the www record;
any provider verification records;
whether proxying is enabled;
whether redirects are configured at DNS, edge, or host level.

Do not modify DNS records without recording the existing state first.

Deployment branch

The active deployment branch must be confirmed.

Do not assume it is main unless the hosting configuration verifies that.

The deployment workflow should document:

source repository;
deployment branch;
build command;
output directory;
Node.js version;
automatic deployment behavior;
preview deployment behavior.
Build command

Expected build command:

npm run build
Output directory

Expected deployment output:

out

Do not configure the host to serve .next/ for this static-export architecture.

Node.js version

The project should use a Node.js version compatible with the installed Next.js version.

The exact production Node.js version should be pinned or documented when the hosting target is finalized.

Do not rely indefinitely on an unspecified provider default.

Environment variables

The current public application does not require application environment variables.

No production secrets are needed for the static build.

If a future feature introduces environment variables:

document every required key;
classify public versus private values;
add .env.example only for non-secret key names;
configure secrets in the hosting platform;
never commit secret values.
Pre-deployment checklist

Before deployment:

confirm the working tree contains only intended changes;
review modified files;
review untracked files;
review deleted files;
confirm documentation is current;
confirm no secrets exist;
run TypeScript;
run lint;
run git diff --check;
run the production build;
verify the exported files;
inspect rendered metadata;
inspect sitemap and robots output;
confirm /portal remains noindex;
confirm Journal has no fabricated article metadata.
Export verification

After the build, confirm these files exist:

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

A missing expected file should stop deployment.

Rendered metadata verification

Inspect generated HTML for:

title;
description;
canonical link;
Open Graph URL;
Open Graph image;
Open Graph image alt text;
Twitter card;
Twitter image;
Twitter image alt text;
robots directives;
JSON-LD.

Do this for every public route and /portal.

Portal deployment verification

For /portal, confirm:

the page is reachable;
it remains clearly unfinished;
metadata contains noindex;
metadata contains nofollow;
it is absent from the sitemap;
it has no public page-specific structured data;
it does not imply active authentication or client functionality.
Journal deployment verification

For /journal, confirm:

planned topics are clearly described as planned;
no publication dates exist;
no reading-time claims exist;
no fake article routes exist;
no Article or BlogPosting schema exists.
Sitemap deployment verification

Check:

https://navidhasan.com/sitemap.xml

Verify:

canonical domain;
all six indexable routes;
no /portal;
no duplicate URLs;
no fabricated modification dates.
Robots deployment verification

Check:

https://navidhasan.com/robots.txt

Verify:

public pages are crawlable;
sitemap location is correct;
/portal is not blocked;
no accidental global disallow exists.
Manifest deployment verification

Check:

https://navidhasan.com/manifest.webmanifest

Verify:

valid JSON;
correct name;
correct short name;
correct start URL;
correct background and theme colors;
valid icon paths.
llms.txt deployment verification

Check:

https://navidhasan.com/llms.txt

Verify that it still states:

Navid Hasan’s public identity;
Labonno’s pre-launch status;
the correct Labonno founder relationship;
the correct Milestogo developer and architect relationship;
no Milestogo founder or ownership claim;
Journal status;
portal status.
Social-preview verification

Verify the public files:

https://navidhasan.com/opengraph-image.png
https://navidhasan.com/twitter-image.png

Test representative page URLs in social-preview debugging tools after deployment.

Do not mark social preview verification complete based only on local source files.

Post-deployment route checklist

Open:

https://navidhasan.com/
https://navidhasan.com/work
https://navidhasan.com/services
https://navidhasan.com/about
https://navidhasan.com/contact
https://navidhasan.com/journal
https://navidhasan.com/portal

For every route, review:

direct loading;
page title;
navigation;
footer;
mobile layout;
desktop layout;
external links;
visual assets;
console errors;
missing resources.
Redirect verification

Verify the behavior of:

http://navidhasan.com
http://www.navidhasan.com
https://www.navidhasan.com

They should resolve safely to the canonical HTTPS host according to the approved redirect policy.

Do not create redirect loops.

Cache behavior

Static hosting may cache HTML, CSS, JavaScript, and images.

After deployment:

verify new assets are available;
verify old HTML is not unexpectedly cached;
purge provider cache only when necessary;
use versioned framework assets;
avoid setting permanent cache rules for HTML without understanding update behavior.
Rollback preparation

Before a production deployment, record:

current Git commit;
current successful deployment;
current DNS state when DNS changes are involved;
provider deployment identifier where available.

A rollback should restore the previous known-good static deployment.

Do not perform a risky deployment without knowing how to return to the previous version.

Deployment failure handling

When deployment fails:

stop further changes;
capture the exact build or provider error;
distinguish source failure from hosting configuration failure;
verify the same commit locally;
inspect build logs;
inspect output-directory settings;
inspect Node.js version;
correct only the relevant issue;
redeploy;
verify all critical routes.

Do not make unrelated source changes while diagnosing a hosting configuration problem.

Search Console

After stable deployment, the sitemap may be submitted to Google Search Console.

This requires:

domain verification;
sitemap submission;
indexing review;
crawl-error review;
structured-data inspection;
mobile-usability inspection.

Do not record Search Console setup as complete until it has actually been performed.

Security considerations

Even a static site should protect:

DNS account access;
hosting account access;
repository access;
deployment tokens;
domain registrar access;
CI credentials.

Use:

strong unique passwords;
multi-factor authentication;
least-privilege access;
protected deployment credentials;
secure recovery methods.

Never place provider credentials in the repository.

Future runtime architecture

The following features may require a runtime system:

contact form processing;
authentication;
client portal;
private files;
database-backed content;
user accounts;
payments;
project messaging.

Before adding them, document:

backend architecture;
hosting model;
security;
data storage;
authentication;
authorization;
privacy;
deployment;
rollback.

The public static site and a future private application may be deployed separately.

Deployment completion criteria

A deployment is complete only when:

the build passed;
the host deployed the intended commit;
the canonical domain resolves;
HTTPS works;
all routes load directly;
metadata is correct;
discovery files are available;
social images load;
/portal remains noindex;
sitemap excludes /portal;
Journal remains truthful;
no console-breaking errors appear;
rollback information is known.
Related documentation
local-development.md
verification.md
../architecture/overview.md
../architecture/seo-and-discovery.md
../project/status.md
../project/roadmap.md
../../README.md

Next file:

`docs/operations/verification.md`
