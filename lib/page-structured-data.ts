import { site } from "@/lib/site";
import type { JsonLdValue } from "@/lib/structured-data";

type BreadcrumbItem = Readonly<{
  name: string;
  path: `/${string}` | "/";
}>;

function absoluteUrl(
  path: `/${string}` | "/",
): string {
  return new URL(path, site.url).toString();
}

function createBreadcrumbList(
  id: string,
  items: readonly BreadcrumbItem[],
): JsonLdValue {
  return {
    "@type": "BreadcrumbList",
    "@id": `${site.url}${id}`,

    itemListElement: items.map(
      (item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      }),
    ),
  };
}

const homeReference = {
  "@id": site.identity.ids.website,
} as const;

const personReference = {
  "@id": site.identity.ids.person,
} as const;

const labonnoReference = {
  "@id": site.identity.ids.labonno,
} as const;

const milestogoReference = {
  "@id": site.identity.ids.milestogoPlatform,
} as const;

export const homePageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#home-page`,

      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: site.language,

      isPartOf: homeReference,
      mainEntity: personReference,
      about: personReference,

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}/icon.png`,
      },

      significantLink: [
        `${site.url}/work`,
        `${site.url}/services`,
        `${site.url}/about`,
        site.projects.labonno.url,
        site.projects.milestogo.url,
      ],
    },

    {
      "@type": "ItemList",
      "@id": `${site.url}/#featured-projects`,

      name: "Featured projects by Navid Hasan",
      numberOfItems: 2,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: site.projects.labonno.name,
          item: labonnoReference,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: site.projects.milestogo.name,
          item: milestogoReference,
        },
      ],
    },
  ],
} as const satisfies JsonLdValue;

export const workPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/work/#page`,

      url: `${site.url}/work`,
      name: `Selected Work — ${site.name}`,

      description:
        "Selected web platforms and business systems designed and developed by Navid Hasan, including Labonno and the Milestogo Business Operations Platform.",

      inLanguage: site.language,

      isPartOf: homeReference,
      author: personReference,
      creator: personReference,

      about: [
        labonnoReference,
        milestogoReference,
      ],

      mainEntity: {
        "@id": `${site.url}/work/#project-list`,
      },

      breadcrumb: {
        "@id": `${site.url}/work/#breadcrumb`,
      },
    },

    {
      "@type": "ItemList",
      "@id": `${site.url}/work/#project-list`,

      name: "Selected projects by Navid Hasan",
      numberOfItems: 2,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: site.projects.labonno.name,
          url: `${site.url}/work#labonno`,
          item: labonnoReference,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: site.projects.milestogo.name,
          url: `${site.url}/work#milestogo`,
          item: milestogoReference,
        },
      ],
    },

    createBreadcrumbList(
      "/work/#breadcrumb",
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Work",
          path: "/work",
        },
      ],
    ),
  ],
} as const satisfies JsonLdValue;

export const servicesPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/services/#page`,

      url: `${site.url}/services`,
      name: `Full-Stack Development Services — ${site.name}`,

      description:
        "Business websites, custom web systems, internal portals, backend engineering, databases, deployment, and ongoing product development services by Navid Hasan.",

      inLanguage: site.language,

      isPartOf: homeReference,
      about: personReference,

      mainEntity: {
        "@id": `${site.url}/services/#service-catalog`,
      },

      breadcrumb: {
        "@id": `${site.url}/services/#breadcrumb`,
      },
    },

    {
      "@type": "OfferCatalog",
      "@id": `${site.url}/services/#service-catalog`,

      name: "Full-stack development services",

      provider: personReference,

      itemListElement: site.services.map(
        (serviceName, index) => ({
          "@type": "Offer",

          position: index + 1,

          itemOffered: {
            "@type": "Service",
            name: serviceName,

            provider: personReference,

            areaServed: {
              "@type": "Place",
              name: "Bangladesh and remote international projects",
            },
          },
        }),
      ),
    },

    createBreadcrumbList(
      "/services/#breadcrumb",
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Services",
          path: "/services",
        },
      ],
    ),
  ],
} as const satisfies JsonLdValue;

export const aboutPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/about/#page`,

      url: `${site.url}/about`,
      name: `About ${site.name}`,

      description:
        "About Navid Hasan, an independent full-stack developer in Bangladesh, founder of Labonno, and developer of business websites, web systems, backend applications, databases, and production infrastructure.",

      inLanguage: site.language,

      isPartOf: homeReference,
      mainEntity: personReference,
      about: personReference,

      breadcrumb: {
        "@id": `${site.url}/about/#breadcrumb`,
      },
    },

    createBreadcrumbList(
      "/about/#breadcrumb",
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
      ],
    ),
  ],
} as const satisfies JsonLdValue;

export const contactPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${site.url}/contact/#page`,

      url: `${site.url}/contact`,
      name: `Contact ${site.name}`,

      description:
        "Contact Navid Hasan about business websites, custom web applications, internal portals, backend systems, deployment, and ongoing product engineering.",

      inLanguage: site.language,

      isPartOf: homeReference,
      about: personReference,

      mainEntity: {
        "@type": "ContactPoint",
        contactType: "project inquiries",
        email: site.email,
        url: `${site.url}/contact`,

        availableLanguage: [
          "English",
          "Bengali",
        ],

        areaServed: [
          {
            "@type": "Country",
            name: "Bangladesh",
          },
          {
            "@type": "Place",
            name: "Remote international projects",
          },
        ],
      },

      breadcrumb: {
        "@id": `${site.url}/contact/#breadcrumb`,
      },
    },

    createBreadcrumbList(
      "/contact/#breadcrumb",
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    ),
  ],
} as const satisfies JsonLdValue;

export const journalPageStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/journal/#page`,

      url: `${site.url}/journal`,
      name: `Engineering Journal — ${site.name}`,

      description:
        "Engineering notes, project reflections, production lessons, system design ideas, and development writing by Navid Hasan.",

      inLanguage: site.language,

      isPartOf: homeReference,
      author: personReference,
      about: [
        personReference,
        labonnoReference,
        milestogoReference,
      ],

      breadcrumb: {
        "@id": `${site.url}/journal/#breadcrumb`,
      },
    },

    {
      "@type": "ItemList",
      "@id": `${site.url}/journal/#subject-list`,

      name: "Journal subject areas",
      numberOfItems: 4,

      itemListElement: [
        "Building systems",
        "Production",
        "Learning in public",
        "Project records",
      ].map((name, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name,
      })),
    },

    createBreadcrumbList(
      "/journal/#breadcrumb",
      [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Journal",
          path: "/journal",
        },
      ],
    ),
  ],
} as const satisfies JsonLdValue;
