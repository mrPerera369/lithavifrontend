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
} from "lucide-react";
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

export default function ProjectsGridInteractive({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]["key"]>("all");

  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div
        className="mt-10 flex flex-wrap gap-2"
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
              onClick={() => setActive(cat.key)}
              className="flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: isActive ? "var(--color-navy-900)" : "var(--color-paper)",
                color: isActive ? "var(--color-white)" : "var(--color-navy-950)",
                border: `1px solid ${isActive ? "var(--color-navy-900)" : "var(--color-paper-line)"}`,
              }}
            >
              <Icon
                size={15}
                style={{ color: isActive ? "var(--color-gold-500)" : "var(--color-navy-500)" }}
              />
              {cat.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 && (
        <p className="mt-10" style={{ color: "var(--color-slate-600)" }}>
          No projects to show for this sector yet.
        </p>
      )}

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          const catMeta = CATEGORIES.find((c) => c.key === project.category);
          const Icon = catMeta ? catMeta.icon : LayoutGrid;

          return (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg"
              style={{
                border: "1.5px solid var(--color-paper-line)",
                background: "var(--color-paper)",
              }}
            >
              {/* IMAGE */}
              <div
                className="relative flex h-52 w-full items-center justify-center overflow-hidden"
                style={{ background: "var(--color-white)" }}
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
                    <ImageOff size={42} strokeWidth={1.5} style={{ color: "var(--color-navy-500)" }} />
                    <span
                      className="mt-3 text-xs font-medium uppercase"
                      style={{ color: "var(--color-slate-500)", letterSpacing: "var(--tracking-eyebrow)" }}
                    >
                      No Photo
                    </span>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ background: "var(--color-white)" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-navy-900)" }} />
                  </span>
                  <span
                    className="text-xs font-semibold uppercase"
                    style={{ color: "var(--color-gold-600)", letterSpacing: "var(--tracking-eyebrow)" }}
                  >
                    {catMeta ? catMeta.label : project.category}
                  </span>
                </div>

                <p
                  className="mt-5"
                  style={{
                    fontSize: "var(--fs-h5)",
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-950)",
                  }}
                >
                  {project.company}
                </p>

                <p className="mt-2 text-sm font-medium" style={{ color: "var(--color-gold-600)" }}>
                  {project.status}
                </p>

                <p
                  className="mt-3"
                  style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
