import type { MetadataRoute } from "next";

export const dynamic = "force-static";

//  actual production domain 
const SITE_URL = "https://www.lithavi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}