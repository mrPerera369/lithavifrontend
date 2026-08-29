"use client";

import { useEffect, useState } from "react";
import {
  Building2,
  HeartPulse,
  Home,
  ShoppingBag,
  Route,
  Factory,
  LayoutGrid,
  ImageOff,
  X,
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

export default function ProjectsGridInteractive({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] =
    useState<(typeof CATEGORIES)[number]["key"]>("all");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const visible =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Close popup with Escape key
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      {/* =========================================================
          FILTER TABS
      ========================================================= */}
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
              onClick={() => setActive(cat.key)}
              className="flex items-center gap-2 rounded-pill px-4 py-2.5 text-sm font-medium transition-colors"
              style={{
                background: isActive
                  ? "var(--color-navy-900)"
                  : "var(--color-paper)",
                color: isActive
                  ? "var(--color-white)"
                  : "var(--color-navy-950)",
                border: `1px solid ${
                  isActive
                    ? "var(--color-navy-900)"
                    : "var(--color-paper-line)"
                }`,
              }}
            >
              <Icon
                size={15}
                style={{
                  color: isActive
                    ? "var(--color-gold-500)"
                    : "var(--color-navy-500)",
                }}
              />

              {cat.label}
            </button>
          );
        })}
      </div>

      {/* =========================================================
          EMPTY STATE
      ========================================================= */}
      {visible.length === 0 && (
        <p
          className="mt-10"
          style={{
            color: "var(--color-slate-600)",
          }}
        >
          No projects to show for this sector yet.
        </p>
      )}

      {/* =========================================================
          PROJECTS GRID
      ========================================================= */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => {
          return (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group w-full overflow-hidden rounded-lg text-left transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1.5px solid var(--color-paper-line)",
                background: "var(--color-paper)",
              }}
            >
              {/* IMAGE */}
              <div
                className="relative flex h-52 w-full items-center justify-center overflow-hidden"
                style={{
                  background: "var(--color-white)",
                }}
              >
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`${project.company} project`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <ImageOff
                      size={42}
                      strokeWidth={1.5}
                      style={{
                        color: "var(--color-navy-500)",
                      }}
                    />

                    <span
                      className="mt-3 text-xs font-medium uppercase"
                      style={{
                        color: "var(--color-slate-500)",
                        letterSpacing: "var(--tracking-eyebrow)",
                      }}
                    >
                      No Photo
                    </span>
                  </div>
                )}
              </div>

              {/* CARD CONTENT */}
              <div className="p-7">
                {/* COMPANY */}
                <p
                  style={{
                    fontSize: "var(--fs-h5)",
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-950)",
                  }}
                >
                  {project.company}
                </p>

                {/* DESCRIPTION — 2 LINES ONLY */}
                <div
                  className="project-card-description mt-3 line-clamp-2 overflow-hidden"
                  style={{
                    color: "var(--color-slate-600)",
                    fontSize: "var(--fs-body-sm)",
                    lineHeight: "1.7",
                  }}
                >
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <span>{children}</span>
                      ),
                      ul: ({ children }) => (
                        <span>{children}</span>
                      ),
                      li: ({ children }) => (
                        <span className="mr-1">
                          • {children}
                        </span>
                      ),
                      strong: ({ children }) => (
                        <strong
                          style={{
                            color: "var(--color-navy-950)",
                            fontWeight: 600,
                          }}
                        >
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {project.description}
                  </ReactMarkdown>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================
          PROJECT POPUP / MODAL
      ========================================================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center p-4 sm:p-6"
          style={{
            background: "rgba(10, 20, 35, 0.72)",
            backdropFilter: "blur(6px)",
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          {/* MODAL */}
          <div
            className="relative flex max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-xl"
            style={{
              background: "var(--color-paper)",
              border: "1px solid var(--color-paper-line)",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.25)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.company}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{
                background: "rgba(255, 255, 255, 0.92)",
                color: "var(--color-navy-950)",
                border: "1px solid var(--color-paper-line)",
              }}
            >
              <X size={19} />
            </button>

            {/* =================================================
                LEFT — IMAGE
            ================================================= */}
            <div
              className="hidden w-1/2 shrink-0 lg:block"
              style={{
                background: "var(--color-white)",
              }}
            >
              {selectedProject.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.company} project`}
                  className="h-full min-h-130 w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-130 items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <ImageOff
                      size={52}
                      strokeWidth={1.3}
                      style={{
                        color: "var(--color-navy-500)",
                      }}
                    />

                    <span
                      className="mt-4 text-xs font-medium uppercase"
                      style={{
                        color: "var(--color-slate-500)",
                        letterSpacing: "var(--tracking-eyebrow)",
                      }}
                    >
                      No Photo
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                RIGHT — CONTENT
            ================================================= */}
            <div className="flex min-w-0 flex-1 flex-col">
              {/* MOBILE IMAGE */}
              <div
                className="block h-56 w-full shrink-0 overflow-hidden lg:hidden"
                style={{
                  background: "var(--color-white)",
                }}
              >
                {selectedProject.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedProject.image}
                    alt={`${selectedProject.company} project`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageOff
                      size={42}
                      strokeWidth={1.5}
                      style={{
                        color: "var(--color-navy-500)",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* =================================================
                  SCROLLABLE CONTENT
              ================================================= */}
              <div className="min-h-0 flex-1 overflow-y-auto">
                <div className="p-7 sm:p-10 lg:p-12">
                  {/* COMPANY */}
                  <h2
                    style={{
                      fontSize: "var(--fs-h3)",
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-950)",
                      lineHeight: "1.15",
                    }}
                  >
                    {selectedProject.company}
                  </h2>

                  {/* FULL DESCRIPTION */}
                  <div
                    className="project-modal-description mt-7"
                    style={{
                      color: "var(--color-slate-600)",
                      fontSize: "var(--fs-body)",
                      lineHeight: "1.8",
                    }}
                  >
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-6">
                            {children}
                          </p>
                        ),

                        ul: ({ children }) => (
                          <ul className="mb-7 list-disc space-y-3 pl-6">
                            {children}
                          </ul>
                        ),

                        ol: ({ children }) => (
                          <ol className="mb-7 list-decimal space-y-3 pl-6">
                            {children}
                          </ol>
                        ),

                        li: ({ children }) => (
                          <li className="leading-7">
                            {children}
                          </li>
                        ),

                        strong: ({ children }) => (
                          <strong
                            style={{
                              color: "var(--color-navy-950)",
                              fontWeight: 650,
                            }}
                          >
                            {children}
                          </strong>
                        ),

                        h1: ({ children }) => (
                          <h1
                            className="mb-5 mt-2"
                            style={{
                              color: "var(--color-navy-950)",
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--fs-h4)",
                            }}
                          >
                            {children}
                          </h1>
                        ),

                        h2: ({ children }) => (
                          <h2
                            className="mb-5 mt-8"
                            style={{
                              color: "var(--color-navy-950)",
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--fs-h4)",
                            }}
                          >
                            {children}
                          </h2>
                        ),

                        h3: ({ children }) => (
                          <h3
                            className="mb-4 mt-7"
                            style={{
                              color: "var(--color-navy-950)",
                              fontFamily: "var(--font-display)",
                              fontSize: "var(--fs-h5)",
                            }}
                          >
                            {children}
                          </h3>
                        ),
                      }}
                    >
                      {selectedProject.description}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}