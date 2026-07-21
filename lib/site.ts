export type SiteNavigationItem = Readonly<{
  href: string;
  label: string;
}>;

export const site = {
  name: "Navid Hasan",
  legalName: "MD NAVID HASAN",
  shortName: "Navid",

  domain: "navidhasan.com",
  url: "https://navidhasan.com",
  email: "hello@navidhasan.com",

  locale: "en_US",
  language: "en",
  country: "Bangladesh",

  title: "Navid Hasan — Independent Full-Stack Developer",

  description:
    "Official website of Navid Hasan, an independent full-stack developer in Bangladesh and founder of Labonno. He builds business websites, custom web systems, internal portals, backend applications, databases, and production infrastructure.",

  identity: {
    role: "Independent Full-Stack Developer",

    shortDescription:
      "Navid Hasan is an independent full-stack developer based in Bangladesh and the founder of Labonno.",

    description:
      "Navid Hasan is an independent full-stack developer based in Bangladesh. He designs and develops business websites, custom web systems, internal portals, backend applications, databases, permissions, deployment infrastructure, and long-term digital products.",

    knowsAbout: [
      "Full-stack web development",
      "Business websites",
      "Custom web applications",
      "Internal tools and portals",
      "Frontend engineering",
      "Backend engineering",
      "Application programming interfaces",
      "Authentication and authorization",
      "PostgreSQL databases",
      "Business workflow design",
      "Production deployment",
      "Linux server administration",
      "Nginx",
      "Next.js",
      "React",
      "TypeScript",
      "Django",
      "Flask",
      "Python",
    ],

    ids: {
      person: "https://navidhasan.com/#navid-hasan",
      website: "https://navidhasan.com/#website",
      profilePage: "https://navidhasan.com/#profile-page",
      labonno:
        "https://labonno.online/#organization",
      milestogoPlatform:
        "https://milestogo.online/#business-operations-platform",
    },
  },

  projects: {
    labonno: {
      name: "Labonno",
      url: "https://labonno.online",
      status: "Pre-launch and in active development",
      type: "Beauty and cosmetics commerce platform",

      description:
        "Labonno is a pre-launch beauty and cosmetics commerce platform founded and developed by Navid Hasan. It is being built around structured products, variants, brands, categories, imagery, publication governance, founder administration, and production infrastructure.",
    },

    milestogo: {
      name: "Milestogo Business Operations Platform",
      shortName: "Milestogo",
      url: "https://milestogo.online",
      status: "In active development",
      type: "Business operations and ERP platform",

      description:
        "The Milestogo Business Operations Platform is a web-based ERP and operational system for an aquafeed business. Navid Hasan designs and develops its product governance, roles, permissions, formulation, production, pricing, dealer workflows, portals, APIs, databases, and production infrastructure.",
    },
  },

  services: [
    "Business websites",
    "Custom web systems",
    "Internal tools and portals",
    "Backend and API development",
    "Database-backed applications",
    "Production deployment",
    "Ongoing product engineering",
  ],

  nav: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/work",
      label: "Work",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/journal",
      label: "Journal",
    },
    {
      href: "/about",
      label: "About",
    },
  ] satisfies SiteNavigationItem[],

  mobileNav: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/work",
      label: "Work",
    },
    {
      href: "/services",
      label: "Services",
    },
    {
      href: "/contact",
      label: "Contact",
    },
    {
      href: "/about",
      label: "About",
    },
  ] satisfies SiteNavigationItem[],

  contact: {
    href: "/contact",
    label: "Contact",
  },
} as const;
