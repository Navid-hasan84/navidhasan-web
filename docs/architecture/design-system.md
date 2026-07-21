# Design System

This document describes the active visual and interaction system for `navidhasan.com`.

The design system is intentionally restrained. It should communicate technical seriousness, clarity, confidence, and long-term professionalism without relying on novelty effects.

## Design direction

The active visual direction is:

- professional;
- editorial;
- minimal;
- structured;
- calm;
- high-contrast;
- responsive;
- accessible.

The site should feel deliberate rather than decorative.

## Retired visual direction

The previous moon-heavy design direction is retired.

Do not reintroduce:

- large moon artwork;
- space-scene backgrounds;
- glowing orbital controls;
- novelty navigation;
- decorative cosmic animation;
- excessive glassmorphism;
- strong neon effects;
- visual elements that distract from content.

The historical Orbit navigation experiment is preserved at:

```text
docs/history/orbit-menu-failure.md

That document explains why the idea was removed and must not be treated as an active design requirement.

Color system

The current palette uses:

near-black primary text;
black and charcoal surfaces;
white backgrounds;
warm off-white backgrounds;
muted gray supporting text;
restrained brown accents;
subtle border colors.

The palette should remain neutral and professional.

Color usage principles

Use strong contrast for:

primary headings;
important calls to action;
active navigation;
key information;
interactive states.

Use muted colors for:

supporting descriptions;
secondary metadata;
labels;
decorative lines;
less important content.

Accent colors should be used sparingly.

Do not use the accent color as a substitute for hierarchy.

Design tokens

Shared design values live under:

styles/foundation/tokens.css

Tokens should define reusable values such as:

colors;
spacing;
radii;
borders;
shadows;
typography;
layout widths;
transition timing.

Before adding a new hardcoded value, check whether an appropriate token already exists.

Add a new token only when the value is genuinely reusable.

Avoid creating multiple tokens that represent nearly identical values.

Typography

Typography should support clear reading and strong hierarchy.

The system should distinguish:

display headings;
page titles;
section headings;
body text;
labels;
metadata;
navigation;
buttons.
Typography principles

Use:

concise headings;
readable body size;
controlled line length;
clear weight differences;
generous line height;
consistent vertical rhythm.

Avoid:

excessively small text;
long lines;
decorative typefaces that reduce clarity;
too many font weights;
unnecessary uppercase text;
weak contrast between heading levels.

Typography should remain stable across routes.

Heading hierarchy

Each page should contain one meaningful H1.

Subsequent headings should follow a logical order.

The visual size of a heading must be controlled through CSS rather than by choosing an incorrect semantic heading level.

A typical hierarchy is:

H1 — page identity
H2 — primary page sections
H3 — subsections or grouped items

Do not skip levels only for appearance.

Spacing system

Spacing should create calm, clarity, and clear grouping.

Use shared spacing tokens for:

section gaps;
card padding;
navigation spacing;
page margins;
content rhythm;
mobile spacing.
Spacing principles

Related elements should appear visually grouped.

Unrelated sections should have stronger separation.

Avoid:

inconsistent one-off margins;
cramped content;
excessive empty space without purpose;
different spacing logic on each page.

Responsive spacing may become smaller on narrow screens while preserving hierarchy.

Layout

The site uses a controlled content width and generous outer margins.

Layouts should prioritize:

readable line length;
predictable alignment;
clear section boundaries;
stable responsive behavior;
visual balance.

Common layout patterns include:

centered page shells;
editorial text columns;
split content sections;
structured card groups;
responsive grids;
full-width dark sections;
narrow supporting text blocks.

Do not create overly complex grid systems when a simpler layout is sufficient.

Page shell

Shared page structure is defined under:

styles/shared/page.css

The page shell should provide:

consistent horizontal padding;
maximum content width;
section rhythm;
responsive spacing;
predictable top and bottom offsets.

Page-specific modules may extend this structure but should not replace it without a clear reason.

Surfaces

The design uses a small number of surface types:

white;
warm off-white;
near-black;
subtle bordered panels;
transparent sections.

Surface changes should communicate meaningful section separation.

Avoid adding many card styles, shadows, gradients, or background effects.

Borders

Borders should be subtle and functional.

Use them for:

separating sections;
defining panels;
navigation state;
form controls;
button outlines;
visual grouping.

Avoid heavy borders unless a strong structural boundary is required.

Shadows

Shadows should remain minimal.

Use shadows only when they improve depth, focus, or separation.

Avoid:

large soft shadows;
repeated card shadows;
glowing shadows;
shadows used as decoration;
multiple shadow styles across the site.
Radius

Border radius should remain restrained and consistent.

Do not introduce highly rounded interfaces that make the site resemble a generic dashboard or consumer mobile application.

Use shared radius tokens when available.

Buttons

Shared button behavior lives under:

styles/shared/buttons.css

The system may include:

primary buttons;
secondary buttons;
text links;
dark-surface buttons;
outline buttons.
Button principles

Buttons should have:

clear labels;
visible hover states;
visible focus states;
sufficient touch size;
strong contrast;
consistent padding;
predictable behavior.

Avoid vague labels such as:

Click here
Learn more
Go

Prefer labels that describe the destination or action.

Links

Links should look interactive without overwhelming the page.

Use:

underline or border cues where needed;
clear hover feedback;
visible keyboard focus;
meaningful labels;
consistent external-link behavior.

Do not rely only on color to communicate interactivity.

Navigation

The site has separate desktop and mobile navigation systems.

Desktop navigation

Desktop navigation should provide:

visible route labels;
clear current-page state;
stable alignment;
strong keyboard behavior;
consistent spacing;
restrained hover feedback.
Mobile navigation

Mobile navigation should provide:

touch-friendly targets;
concise labels;
current-route indication;
viewport-safe spacing;
predictable route behavior;
no gesture dependency.

The retired Orbit interaction must not return without a new explicit design decision.

Brand presentation

The active header mark is:

public/icone/n49.svg

Brand presentation should remain:

simple;
recognizable;
readable;
proportional;
aligned with the editorial interface.

Do not combine the mark with large decorative visual effects.

Footer

The footer should provide a clear visual close to each page.

It may include:

site identity;
contact direction;
project links;
navigation;
copyright or ownership information.

The footer should remain visually secondary to the page content.

Cards and panels

Cards should be used only when grouping improves understanding.

A card should communicate:

one project;
one service;
one capability;
one decision;
one related content group.

Avoid turning every section into a card.

Do not add cards merely because they are common in modern interfaces.

Forms

The current public site does not include a functional backend contact form.

Future form styling should provide:

clear labels;
visible validation;
readable errors;
keyboard usability;
sufficient field spacing;
accessible focus states;
clear submission status.

Placeholder text must not replace visible labels.

Imagery

The site currently relies primarily on typography, layout, and restrained brand assets.

Images should be added only when they provide real value.

Appropriate future imagery may include:

verified project screenshots;
system diagrams;
architecture diagrams;
interface details;
real development evidence.

Avoid:

generic stock photography;
fake dashboards;
AI-generated project screenshots presented as real;
oversized decorative imagery;
unsupported client or customer imagery.
Social preview imagery

The current social images are:

app/opengraph-image.png
app/twitter-image.png

They use a restrained editorial design and should remain visually consistent with the site.

Current size:

1200 × 630

Alternative text is stored in:

app/opengraph-image.alt.txt
app/twitter-image.alt.txt

Social images should not include unsupported claims.

Motion

Motion should be subtle and purposeful.

Acceptable motion includes:

small entrance transitions;
hover feedback;
navigation-state changes;
restrained content reveal;
subtle button response.

Avoid:

continuous background animation;
large parallax effects;
complex timeline animation;
motion that delays reading;
excessive element movement;
animation introduced only for novelty.
Reduced motion

Where animation exists, respect reduced-motion preferences.

Users who request reduced motion should receive:

minimal transitions;
no unnecessary movement;
immediate state changes;
no auto-running decorative animation.
Responsive design

The system should adapt across:

small mobile screens;
large mobile screens;
tablets;
laptops;
desktop monitors;
wide displays.

Responsive behavior should preserve:

readable text;
usable navigation;
clear hierarchy;
sufficient spacing;
stable layouts;
touch-friendly controls.

Do not solve mobile layout issues by hiding important content without a clear reason.

Mobile-first considerations

On mobile:

prioritize essential content;
keep labels concise;
preserve safe bottom spacing;
avoid narrow multi-column layouts;
avoid tiny controls;
maintain readable line length;
keep navigation predictable.

The mobile experience should feel intentional, not like a compressed desktop layout.

Accessibility

The design system must preserve:

sufficient contrast;
visible focus states;
keyboard navigation;
logical heading structure;
semantic landmarks;
touch target size;
descriptive labels;
readable text size;
reduced-motion support;
meaningful alt text.

Do not remove focus outlines without replacing them with an equally visible focus treatment.

Content density

The interface should balance detail with readability.

Use:

clear section introductions;
short supporting paragraphs;
grouped lists;
structured project summaries;
meaningful whitespace.

Avoid:

long uninterrupted walls of text;
repeated marketing phrases;
too many simultaneous calls to action;
dense metadata blocks without hierarchy.
Voice and tone

The visual and written tone should feel:

direct;
serious;
confident;
honest;
technically grounded;
calm.

Avoid:

exaggerated marketing language;
fake urgency;
vague startup slogans;
unsupported claims;
excessive self-praise;
informal gimmicks.
CSS ownership

Shared system styles live under:

styles/foundation/
styles/shared/

Component-specific styles live beside their components.

Page-specific styles live beside their route.

Examples:

components/navigation/MobileBottomNav.module.css
components/footer/SiteFooter.module.css
app/work/WorkPage.module.css
app/about/AboutPage.module.css

Do not place page-specific rules inside global foundation files.

Adding a new visual pattern

Before adding a new pattern:

check whether an existing pattern already solves the problem;
inspect available design tokens;
decide whether the pattern is page-specific or reusable;
verify accessibility;
verify responsive behavior;
confirm that the pattern matches the active visual direction;
avoid adding a dependency for a simple CSS solution;
document major new system patterns.
Changing the visual direction

A major visual change requires:

a clear reason;
explicit approval;
impact review across all routes;
design-token review;
responsive review;
accessibility review;
performance review;
documentation updates.

Do not silently reintroduce a retired design inside one page.

Current limitations

The design system does not yet document:

a formal type scale table;
a complete token reference;
a reusable form library;
a reusable icon library;
a formal component gallery;
a Storybook environment;
visual-regression testing.

These may be introduced later when they provide real value.

Verification

Visual changes should be reviewed at representative screen widths and should also pass:

npx tsc --noEmit
npm run lint
git diff --check
npm run build

The build alone does not verify visual quality.

Manual responsive review remains necessary.

Related documentation
overview.md
frontend.md
seo-and-discovery.md
../project/decisions.md
../project/status.md
../operations/verification.md

Next file:

`docs/architecture/seo-and-discovery.md`
