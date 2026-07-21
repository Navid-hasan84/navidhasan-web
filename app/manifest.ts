import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: site.title,
    short_name: site.name,

    description: site.description,

    start_url: "/",
    scope: "/",

    display: "standalone",

    background_color: "#f2f0e9",
    theme_color: "#11110f",

    lang: site.language,

    categories: [
      "business",
      "productivity",
      "technology",
    ],

    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
