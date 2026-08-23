import type { MetadataRoute } from "next";

export const dynamic = "force-static";


const SITE_URL = "https://www.lithavi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/projects" temporarily removed — page eka hide karala thiyana nisa
  const routes = ["", "/about", "/services", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    // lastModified: hadanne na (omit karanawa) — build/deploy karana hama
    // welavakama current date eka danawa nam, page eka nowenas unath
    // Google ekata "daily wenas wenawa" wage wrong signal ekak yanawa.
    // Real edit date ekak track karanna one unoth, e page eke actual
    // last-updated timestamp eka manual widiyata danna (CMS/DB ekakin
    // enawa nam).
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}