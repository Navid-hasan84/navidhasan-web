import type { Metadata } from "next";

import { site } from "@/lib/site";

type PageMetadataOptions = Readonly<{
  title: string;
  description: string;
  path: `/${string}` | "/";
  noIndex?: boolean;
}>;

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, site.url).toString();

  return {
    title:
      path === "/"
        ? {
            absolute: site.title,
          }
        : title,

    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      type: "website",
      locale: site.locale,

      url: canonicalUrl,
      siteName: site.name,

      title:
        path === "/"
          ? site.title
          : `${title} — ${site.name}`,

      description,

      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt:
            "Navid Hasan — independent full-stack developer in Bangladesh, founder of Labonno, building business websites, custom web systems, backend applications, data systems, and production infrastructure.",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        path === "/"
          ? site.title
          : `${title} — ${site.name}`,

      description,

      images: [
        {
          url: "/twitter-image.png",
          width: 1200,
          height: 630,
          alt:
            "Navid Hasan — independent full-stack developer in Bangladesh, founder of Labonno, building business websites, custom web systems, backend applications, data systems, and production infrastructure.",
        },
      ],
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
          noarchive: true,
          nosnippet: true,
        }
      : {
          index: true,
          follow: true,

          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,

            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
