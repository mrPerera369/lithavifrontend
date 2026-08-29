const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function safeFetchJson<T>(
  path: string,
  fallback: T,
  revalidateSeconds = 3600
): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      // ISR: re-fetch from Django at most once per revalidateSeconds,
      // rest of the time Next.js serves a cached, pre-rendered HTML page.
      next: { revalidate: revalidateSeconds },
    });
    if (!res.ok) return fallback;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) return fallback;
    return (await res.json()) as T;
  } catch (err) {
    console.error(`Failed to fetch ${path}:`, err);
    return fallback;
  }
}

export type Stat = { value: string; label: string };
export type Expectation = { id: number; question: string; answer: string };
export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
};
export type FAQ = { id: number; question: string; answer: string };
export type Project = {
  id: number;
  category: string;
  company: string;
  status: string;
  description: string;
  image: string | null;
};
export type SiteSettings = {
  email: string;
  phone_number: string;
  location_map_embed_url?: string;
};

export function getStats() {
  return safeFetchJson<Stat[]>("/api/stats/", []);
}

export function getServiceAreaStats() {
  return safeFetchJson<Stat[]>("/api/service-area-stats/", []);
}

export function getExpectations() {
  return safeFetchJson<Expectation[]>("/api/expectations/", []);
}

export function getTestimonials() {
  return safeFetchJson<Testimonial[]>("/api/testimonials/", []);
}

export function getServicesFAQ() {
  return safeFetchJson<FAQ[]>("/api/services-faq/", [], 300);
}

export function getProjects() {
  return safeFetchJson<Project[]>("/api/projects/", [], 300);
}

export function getSiteSettings() {
  return safeFetchJson<SiteSettings>("/api/site-settings/", {
    email: "",
    phone_number: "",
    location_map_embed_url: "",
  });
}
