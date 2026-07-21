import type { MetadataRoute } from "next";

import { publicRoutes } from "@/lib/public-routes";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
