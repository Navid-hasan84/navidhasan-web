# Verification

This document defines the required verification process for `navidhasan.com`.

Verification is part of the implementation. A change is not complete merely because the code looks correct or the development server starts.

## Verification goals

The verification process should protect:

- TypeScript correctness;
- lint quality;
- formatting;
- static-export compatibility;
- route integrity;
- metadata accuracy;
- indexing boundaries;
- structured-data validity;
- asset availability;
- factual identity;
- documentation consistency;
- safe Git state.

## Verification levels

Use the level that matches the scope of the change.

### Level 1 — focused source change

Use for:

- copy correction;
- small CSS adjustment;
- local component change;
- minor documentation update.

Run:

```bash
npx tsc --noEmit
npm run lint
git diff --check
Level 2 — route or layout change

Use for:

page changes;
navigation changes;
layout changes;
shared component changes;
responsive behavior changes;
global-style changes.

Run:

npx tsc --noEmit
npm run lint
git diff --check
npm run build

Also inspect affected routes manually.

Level 3 — SEO, metadata, configuration, or deployment change

Use for:

metadata;
structured data;
sitemap;
robots;
manifest;
social images;
Next.js configuration;
static-export behavior;
deployment-related source changes.

Run the full verification process in this document.

Core commands
TypeScript

Run:

npx tsc --noEmit

This must complete without errors.

Lint

Run:

npm run lint

This must complete without errors.

Warnings should be reviewed rather than ignored automatically.

Git formatting

Run:

git diff --check

This checks for:

trailing whitespace;
whitespace errors;
malformed patch content.

It does not replace linting or build validation.

Production build

Run:

npm run build

The build must:

compile successfully;
complete TypeScript validation;
collect route data;
generate static pages;
finalize static output;
create out/.
Expected build routes

The build should report static generation for:

/
/about
/contact
/journal
/portal
/services
/work

It should also generate:

/manifest.webmanifest
/opengraph-image.png
/robots.txt
/sitemap.xml
/twitter-image.png

Application icon routes should also be present.

Required exported files

After a successful build, verify:

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

A missing required file must stop deployment or commit closure.

Git-state verification

Run:

git status --short

Review every entry.

Confirm:

modified files are expected;
untracked files are intentional;
deleted files are intentional;
generated directories are absent;
temporary files are absent;
no secret files are present.

Do not treat a large untracked directory as safe without inspecting its contents.

Deleted-file verification

Before accepting a deletion:

confirm the file was intentionally replaced or retired;
search for remaining references;
verify the replacement exists;
verify imports use the replacement;
verify the build passes.

Current intentional deletions from the redesign include:

components/MobileBottomNav.tsx
components/SiteHeader.tsx
public/icone/the-moon-one.png

The replacement navigation files live under:

components/navigation/

Do not approve additional deletions without review.

Temporary-file verification

Search for files such as:

*.bak
*.backup
*.orig
*.rej
*.tmp
*.swp
*~
.DS_Store
Thumbs.db

Do not commit editor, backup, or operating-system artifacts.

Secret verification

Review changed and untracked files for:

passwords;
tokens;
API keys;
private keys;
authorization headers;
production environment contents;
personal machine identifiers;
private infrastructure details.

The current public application should not need secrets.

A secret found in the working tree must be removed before commit.

Route verification

Review:

/
 /work
 /services
 /about
 /contact
 /journal
 /portal

For each route, verify:

direct loading;
navigation;
footer;
one meaningful H1;
no broken links;
no missing styles;
no visible layout failure;
correct mobile behavior;
correct desktop behavior.
Responsive verification

Review representative widths:

320px;
375px;
430px;
768px;
1024px;
1280px;
1440px or wider.

Check:

text wrapping;
navigation;
section spacing;
card stacking;
content overflow;
mobile bottom-navigation clearance;
button sizing;
readable line length.
Accessibility verification

Check:

one meaningful H1 per page;
logical heading order;
keyboard navigation;
visible focus states;
meaningful link text;
correct active-route indication;
sufficient contrast;
touch-friendly targets;
decorative image alt behavior;
informational image alt behavior;
reduced-motion behavior where animation exists.

A successful build does not prove accessibility.

Metadata verification

Inspect the generated HTML for every route.

Verify:

one <title>;
one meta description;
one canonical link;
one Open Graph URL;
one Open Graph image;
one Open Graph image alt value;
one Twitter card declaration;
one Twitter image;
one Twitter image alt value;
correct robots directives;
no contradictory metadata.
Canonical verification

Expected canonical URLs:

https://navidhasan.com
https://navidhasan.com/work
https://navidhasan.com/services
https://navidhasan.com/about
https://navidhasan.com/contact
https://navidhasan.com/journal
https://navidhasan.com/portal

The root canonical may serialize with a trailing slash depending on framework normalization.

The /portal canonical may exist even though the page is noindex.

Portal verification

For /portal, verify:

page is clearly unfinished;
metadata includes noindex;
metadata includes nofollow;
sitemap does not include it;
public route registry does not include it;
no public page-specific structured data exists;
no active authentication claim exists;
no live client-workflow claim exists.
Journal verification

For /journal, verify:

planned writing is clearly presented as planned;
no article routes are implied as live;
no publication dates exist;
no reading-time claims exist;
no Article structured data exists;
no BlogPosting structured data exists.
Sitemap verification

Inspect:

out/sitemap.xml

It should include exactly:

https://navidhasan.com
https://navidhasan.com/work
https://navidhasan.com/services
https://navidhasan.com/about
https://navidhasan.com/contact
https://navidhasan.com/journal

Verify:

/portal is absent;
no duplicates exist;
canonical domain is used;
no fabricated modification dates exist.
Robots verification

Inspect:

out/robots.txt

Verify:

public crawling is allowed;
sitemap location is correct;
/portal is not blocked;
no accidental site-wide disallow exists.

The page-level noindex directive must remain readable by crawlers.

Manifest verification

Inspect:

out/manifest.webmanifest

Verify:

valid JSON;
correct application name;
correct short name;
correct description;
correct start URL;
correct display mode;
correct background color;
correct theme color;
icon paths resolve to real exported files.
Social-image verification

Verify:

out/opengraph-image.png
out/twitter-image.png

Current intended dimensions:

1200 × 630

Also verify the source alt files exist:

app/opengraph-image.alt.txt
app/twitter-image.alt.txt

Check that rendered page metadata references the correct images and alt text.

Structured-data verification

Inspect all JSON-LD scripts in generated HTML.

Verify:

JSON parses;
root graph appears once;
the correct page graph appears;
stable @id values are used;
canonical URLs are correct;
entity relationships are factual;
/portal has no page-specific graph;
Journal has no article graph.
Root graph verification

The root graph should represent:

Navid Hasan;
the website;
the profile page;
Labonno;
the Milestogo Business Operations Platform.

Verify there are no duplicate contradictory entities.

Identity verification
Navid Hasan

Verify the site describes Navid Hasan as:

an independent full-stack developer based in Bangladesh;
founder and developer of Labonno;
developer and system architect behind the Milestogo Business Operations Platform.
Labonno

Verify Labonno remains:

pre-launch;
in active development;
founded and developed by Navid Hasan;
not represented as an established operating cosmetics shop.
Milestogo

Verify:

Navid Hasan is described as developer and system architect;
no positive founder claim exists;
no positive ownership claim exists;
no unsupported business relationship is implied.

A sentence denying ownership must not be incorrectly treated as a positive ownership claim.

Unsupported-claim verification

Search for unsupported claims involving:

years of experience;
customer counts;
client counts;
revenue;
traffic;
conversion rates;
awards;
certifications;
testimonials;
ratings;
launch dates;
employment history;
operating scale;
published articles;
active portal users.

Any public claim must be backed by verified repository evidence or explicit confirmation.

llms.txt verification

Inspect:

out/llms.txt

Verify it includes:

canonical site identity;
route summaries;
Labonno pre-launch status;
Labonno founder relationship;
Milestogo developer and architect relationship;
no Milestogo founder or ownership inference;
Journal publication boundary;
portal boundary.

The exported file should match the intended source in:

public/llms.txt
Navigation verification

Desktop navigation should provide:

correct route labels;
correct destinations;
current-route indication;
keyboard accessibility;
visible focus behavior;
no retired root-component imports.

Mobile navigation should provide:

touch-friendly targets;
correct route labels;
current-route indication;
safe bottom spacing;
predictable navigation;
no Orbit interaction.
Asset-reference verification

Verify:

public/icone/n49.svg exists;
the active header references it;
the deleted moon asset has no references;
social assets exist;
icon assets exist;
no broken public paths remain.
Documentation verification

Before the final redesign commit:

every required document must exist;
no completed document may contain Documentation pending.;
README must match the current architecture;
AGENTS must contain repository-specific rules;
project status must match source truth;
roadmap must distinguish complete, planned, and deferred work;
decisions must reflect settled choices;
architecture docs must match current file paths;
operations docs must match current scripts and commands.
Documentation link verification

Check relative links between:

README.md
AGENTS.md
docs/README.md
docs/project/
docs/architecture/
docs/operations/
docs/history/

A documentation link should resolve to an existing file.

Package-command verification

Confirm documentation matches package.json.

Current scripts:

npm run dev
npm run build
npm run start
npm run lint

TypeScript validation uses:

npx tsc --noEmit

Do not document a script that does not exist.

Local-helper verification

For:

scripts/navidhasan-web-local

Verify:

executable permission remains;
no secrets exist;
no hardcoded personal absolute project path exists;
run behavior works;
status behavior works;
stop behavior works;
process identity checks remain;
process-group checks remain;
port-occupancy protection remains.
Build-output verification

Do not rely only on the build command exit code.

Inspect:

out/

Confirm the expected files are actually present.

A build can succeed while a required file is missing due to an incorrect expectation or route change.

Browser-console verification

During manual route review, inspect the browser console for:

hydration errors;
missing resources;
invalid DOM nesting;
client-component errors;
navigation errors;
failed asset requests.

A visually correct page may still contain runtime problems.

External-link verification

Check external links for:

correct destination;
HTTPS;
no obvious typo;
correct project relationship;
safe new-tab behavior where used.

Current official project domains include:

https://labonno.online
https://milestogo.online

Do not add unverified profile links.

Pre-commit verification

Before creating a commit:

run TypeScript;
run lint;
run git diff --check;
run the production build;
inspect required exported files;
inspect Git status;
inspect deleted files;
inspect untracked files;
inspect documentation completeness;
inspect identity boundaries;
inspect the final diff;
confirm no generated directories are staged.
Staged-diff verification

After staging, run:

git diff --cached --check
git diff --cached --stat
git diff --cached --name-status

Review every staged path.

Do not commit until the staged set exactly matches the intended checkpoint.

Commit completion criteria

The redesign and SEO checkpoint may be committed only when:

implementation is complete;
documentation is complete;
required checks pass;
exported files are verified;
identity boundaries are correct;
no unsupported claims remain;
no temporary files remain;
no secrets remain;
deleted files are intentional;
the staged diff is coherent;
explicit commit approval exists.
Failure handling

When verification fails:

stop;
record the exact failure;
identify whether it is source, configuration, documentation, or environment related;
correct only the relevant issue;
rerun the failed check;
rerun dependent checks;
do not hide or bypass the failure.

Do not weaken tests or verification rules merely to obtain a passing result.

Final verification record

At checkpoint closure, record:

commands run;
successful build result;
exported files verified;
routes manually reviewed;
known limitations;
final Git status;
commit hash when created;
deployment status;
next checkpoint.
Related documentation
local-development.md
build-and-deployment.md
../architecture/overview.md
../architecture/frontend.md
../architecture/seo-and-discovery.md
../project/status.md
../project/roadmap.md
../../README.md
../../AGENTS.md

That completes the planned documentation files. The next step is a final documentation audit
