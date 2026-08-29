
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title:
    "Quantity Surveying Projects",

  description:
    "Explore construction projects supported by Lithavi International through quantity takeoffs, BOQs, BIM 5D measurement and cost management.",

  

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title:
      "Quantity Surveying Projects",
    description:
      "Explore selected construction projects supported by Lithavi International through quantity takeoff, BOQ preparation, BIM 5D measurement and cost management.",
    url: "/projects",
    siteName: "Lithavi International",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Projects"
        title="Quantity surveying expertise across construction projects."
        intro="Explore selected projects supported through detailed quantity takeoff, BOQ preparation, BIM 5D measurement, tender pricing, MTO, MEP quantity surveying and commercial management."
      />

      {/* SEO Content */}
      <section
        className=" py-16 lg:py-20"
        style={{
          background: "var(--color-white)",
          borderColor: "var(--color-paper-line)",
        }}
      >
        <div className="container-page">
          <div className="max-w-4xl">
            <h2
              className="font-semibold"
              style={{
                fontSize: "var(--fs-h3)",
                lineHeight: "var(--lh-tight)",
              }}
            >
              Quantity surveying and construction cost support
            </h2>

            <div
              className="mt-6 space-y-5"
              style={{
                color: "var(--color-slate-600)",
                fontSize: "var(--fs-body)",
                lineHeight: "var(--lh-normal)",
              }}
            >
              <p>
                Lithavi International provides professional quantity surveying support for residential, commercial and industrial construction projects. We deliver accurate quantity takeoffs, BOQs, cost estimates and commercial support from tender to project completion.
              </p>

              <p>
                Our services cover Architectural, Structural, Civil and MEP works using 2D drawings, 3D BIM models and BIM 5D workflows. We also support tender pricing, material takeoffs, MEP costing, interim payments, variations and final accounts.
              </p>

              <p>
                Our focus is simple: accurate measurements, clear documentation and reliable cost information to help construction professionals make confident decisions.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsGrid />
    </>
  );
}

