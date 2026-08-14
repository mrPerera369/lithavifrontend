import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// ⚠️ ඔයාගේ actual production domain එකට වෙනස් කරන්න
const SITE_URL = "https://lithavi.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}