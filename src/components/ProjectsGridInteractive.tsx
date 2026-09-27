"use client";

import { useState } from "react";
import {
  Building2,
  HeartPulse,
  Home,
  ShoppingBag,
  Route,
  Factory,
  LayoutGrid,
  ImageOff,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Project } from "@/lib/api";

const CATEGORIES = [
  { key: "all", label: "All Sectors", icon: LayoutGrid },
  { key: "commercial", label: "Commercial", icon: Building2 },
  { key: "healthcare", label: "Healthcare", icon: HeartPulse },
  { key: "residential", label: "Residential", icon: Home },
  { key: "retail", label: "Retail", icon: ShoppingBag },
  { key: "infrastructure", label: "Infrastructure", icon: Route },
  { key: "industrial", label: "Industrial", icon: Factory },
] as const;

// NOTE: `country` and `year` are optional here because the shared `Project`
// type (from @/lib/api) may not define them yet. If your API already
// returns these fields, just add them to that type and this component
// will pick them up automatically. If it doesn't, these lines simply
// won't render (see the `{project.country && ...}` / `{project.year && ...}`
// guards below).
type ListProject = Project & {
  country?: string;
  year?: string | number;
};

const PAGE_SIZE = 12;

const descriptionComponents = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="mb-4 last:mb-0">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="mb-4 list-disc space-y-2 pl-5 last:mb-0">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-5 last:mb-0">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-7">{children}</li>
  ),
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong
      style={{ color: "var(--color-navy-950)", fontWeight: 650 }}
    >
      {children}
    </strong>
  ),
};

export default function ProjectsGridInteractive({
  projects,
}: {
  projects: ListProject[];
}) {
  const [active, setActive] =
    useState<(typeof CATEGORIES)[number]["key"]>("all");

  const [page, setPage] = useState(1);

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = visible.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleCategoryChange = (key: (typeof CATEGORIES)[number]["key"]) => {
    setActive(key);
    setPage(1);
  };

  const goToPage = (p: number) => {
    setPage(p);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* FILTER TABS (unchanged, still hidden per original markup) */}
      <div
        className="mt-10 hidden flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects by sector"
      >
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.key;
          return (
            <button
              key={cat.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleCategoryChange(cat.key)}
              className="flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: isActive ? "var(--color-navy-900)" : "var(--color-paper)",
                color: isActive ? "var(--color-white)" : "var(--color-navy-950)",
                border: `1px solid ${isActive ? "var(--color-navy-900)" : "var(--color-paper-line)"}`,
              }}
            >
              <Icon size={15} style={{ color: isActive ? "var(--color-gold-500)" : "var(--color-navy-500)" }} />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {visible.length === 0 && (
        <p className="mt-10" style={{ color: "var(--color-slate-600)" }}>
          No projects to show for this sector yet.
        </p>
      )}

      {/* =========================================================
          PROJECTS LIST
      ========================================================= */}
      <div className="mt-10 flex flex-col">
        {paginated.map((project, index) => {
          return (
            <div key={project.id}>
              <div
                className="flex w-full flex-col gap-6 py-8 text-left sm:flex-row sm:gap-8"
              >
                {/* IMAGE */}
                <div
                  className="relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden rounded-md sm:h-40 sm:w-56"
                  style={{
                    background: "var(--color-white)",
                    border: "1px solid var(--color-paper-line)",
                  }}
                >
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${project.company} project`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center">
                      <ImageOff size={34} strokeWidth={1.5} style={{ color: "var(--color-navy-500)" }} />
                      <span
                        className="mt-2 text-center text-[10px] font-medium uppercase leading-tight"
                        style={{ color: "var(--color-slate-500)", letterSpacing: "var(--tracking-eyebrow)" }}
                      >
                        Photo
                        <br />
                        insert image here
                      </span>
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="min-w-0 flex-1">
                  {/* YEAR */}
                  {project.year && (
                    <p
                      className="text-xs font-medium uppercase"
                      style={{ color: "var(--color-slate-500)", letterSpacing: "var(--tracking-eyebrow)" }}
                    >
                      {project.year}
                    </p>
                  )}

                  {/* TITLE */}
                  <p
                    className="mt-1"
                    style={{
                      fontSize: "var(--fs-h4)",
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-950)",
                    }}
                  >
                    {project.company}
                  </p>

                  {/* COUNTRY */}
                  {project.country && (
                    <p
                      className="mt-1 text-xs font-semibold uppercase"
                      style={{ color: "var(--color-gold-500)", letterSpacing: "var(--tracking-eyebrow)" }}
                    >
                      {project.country}
                    </p>
                  )}

                  {/* DESCRIPTION — full markdown, no clamp */}
                  <div
                    className="mt-4"
                    style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)", lineHeight: "1.75" }}
                  >
                    <ReactMarkdown components={descriptionComponents}>
                      {project.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>

              {index < paginated.length - 1 && (
                <div style={{ borderTop: "1px solid var(--color-paper-line)" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* =========================================================
          PAGINATION
      ========================================================= */}
      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              border: "1px solid var(--color-paper-line)",
              color: "var(--color-navy-950)",
            }}
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const isActive = p === currentPage;
            return (
              <button
                key={p}
                type="button"
                onClick={() => goToPage(p)}
                aria-current={isActive ? "page" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors"
                style={{
                  background: isActive ? "var(--color-navy-900)" : "transparent",
                  color: isActive ? "var(--color-white)" : "var(--color-navy-950)",
                  border: `1px solid ${isActive ? "var(--color-navy-900)" : "var(--color-paper-line)"}`,
                }}
              >
                {p}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-40"
            style={{
              border: "1px solid var(--color-paper-line)",
              color: "var(--color-navy-950)",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

    </>
  );
}