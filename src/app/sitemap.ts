import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// ⚠️ ඔයාගේ actual production domain එකට වෙනස් කරන්න
const SITE_URL = "https://lithavi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/projects" temporarily removed — page eka hide karala thiyana nisa
  const routes = ["", "/about", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}