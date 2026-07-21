import { site } from "@/lib/site";

type JsonLdPrimitive =
  | boolean
  | number
  | string
  | null;

export type JsonLdValue =
  | JsonLdPrimitive
  | readonly JsonLdValue[]
  | {
      readonly [key: string]: JsonLdValue;
    };

export const rootStructuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Person",
      "@id": site.identity.ids.person,

      name: site.name,
      alternateName: site.legalName,
      givenName: "Navid",
      familyName: "Hasan",

      url: site.url,
      email: `mailto:${site.email}`,

      jobTitle: site.identity.role,
      description: site.identity.description,

      homeLocation: {
        "@type": "Country",
        name: site.country,
      },

      knowsAbout: site.identity.knowsAbout,

      mainEntityOfPage: {
        "@id": site.identity.ids.profilePage,
      },
    },

    {
      "@type": "WebSite",
      "@id": site.identity.ids.website,

      url: site.url,
      name: site.name,
      alternateName: site.title,
      description: site.description,

      inLanguage: site.language,

      publisher: {
        "@id": site.identity.ids.person,
      },

      copyrightHolder: {
        "@id": site.identity.ids.person,
      },
    },

    {
      "@type": "ProfilePage",
      "@id": site.identity.ids.profilePage,

      url: site.url,
      name: site.title,
      description: site.description,
      inLanguage: site.language,

      isPartOf: {
        "@id": site.identity.ids.website,
      },

      mainEntity: {
        "@id": site.identity.ids.person,
      },

      about: {
        "@id": site.identity.ids.person,
      },
    },

    {
      "@type": [
        "Organization",
        "OnlineStore",
      ],

      "@id": site.identity.ids.labonno,

      name: site.projects.labonno.name,
      url: site.projects.labonno.url,

      description:
        site.projects.labonno.description,

      founder: {
        "@id": site.identity.ids.person,
      },

      owner: {
        "@id": site.identity.ids.person,
      },

      knowsAbout: [
        "Beauty products",
        "Cosmetics",
        "Skincare",
        "Product catalog management",
        "Online commerce",
      ],

      areaServed: {
        "@type": "Country",
        name: "Bangladesh",
      },
    },

    {
      "@type": "SoftwareApplication",
      "@id": site.identity.ids.milestogoPlatform,

      name: site.projects.milestogo.name,
      alternateName:
        site.projects.milestogo.shortName,

      url: site.projects.milestogo.url,

      description:
        site.projects.milestogo.description,

      applicationCategory:
        "BusinessApplication",

      applicationSubCategory:
        "Enterprise resource planning and business operations",

      operatingSystem: "Web",

      creator: {
        "@id": site.identity.ids.person,
      },

      author: {
        "@id": site.identity.ids.person,
      },
    },
  ],
} as const satisfies JsonLdValue;

export function serializeStructuredData(
  value: JsonLdValue,
): string {
  return JSON.stringify(value).replace(
    /</g,
    "\\u003c",
  );
}
