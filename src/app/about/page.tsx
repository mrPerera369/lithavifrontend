import { Target, Compass } from "lucide-react";
import DimensionLine from "@/components/DimensionLine";
import SoftwareGrid from "@/components/SoftwareGrid";
import StandardsCards from "@/components/StandardsCards";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lithavi International, a remote quantity surveying firm providing accurate takeoffs, BOQs and cost management services worldwide.",
  alternates: { canonical: "/about" },
};

const APPROACH = [
  {
    title: "Quantity surveying expertise",
    body: "Every takeoff, BOQ and cost report is prepared by people who understand construction measurement — not just spreadsheets.",
  },
  {
    title: "Modern digital tools",
    body: "Digital takeoff software and BIM workflows sit alongside traditional QS discipline, so work is fast without losing accuracy.",
  },
  {
    title: "A global remote model",
    body: "Every service is delivered remotely, built from the ground up to work across time zones and international standards.",
  },
  {
    title: "Transparent, tailored output",
    body: "Deliverables are built around your project and your standards, with clear, marked-up documentation behind every figure.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section
        className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24"
        style={{ background: "var(--color-navy-900)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container-page relative max-w-2xl">
          <DimensionLine tone="gold" label="About Lithavi International" />
          <h1
            className="mt-6 font-semibold"
            style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-tight)", color: "var(--color-white)" }}
          >
            Quantity surveying, built for international construction.
          </h1>
          <p
            className="mt-6"
            style={{ color: "rgba(255,255,255,0.72)", fontSize: "var(--fs-h5)", lineHeight: "var(--lh-normal)" }}
          >
            Lithavi International is a Sri Lanka&ndash;based quantity
            surveying and cost consulting practice, working remotely with
            contractors, developers, architects and engineers worldwide.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <DimensionLine tone="navy" label="Our Story" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              Precise measurement, wherever the project is.
            </h2>
          </div>
          <div className="space-y-5" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
            <p>
              Lithavi International is a professional quantity surveying and
              cost consulting company specialising in Quantity Takeoff, BOQ
              Preparation, Cost Estimation, Cost Management and Value
              Engineering. We provide accurate, reliable and cost-effective
              estimating solutions for residential, commercial and
              industrial construction projects worldwide.
            </p>
            <p>
              Based in Sri Lanka, we work entirely on a remote-delivery
              model, serving contractors, developers, architects, engineers
              and consultants across the United Kingdom, Australia, the
              United States and the Middle East &mdash; including the UAE,
              Saudi Arabia, Qatar, Oman and Bahrain.
            </p>
            <p>
              Quantity Takeoff and BOQ Preparation are our core services and
              the foundation of most engagements &mdash; we then build
              outward into cost estimation, cost management and value
              engineering as a project develops.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Mission */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
        <div className="container-page">
          <div className="max-w-xl">
            <DimensionLine tone="navy" label="Vision & Mission" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              Why we do this work.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div
              className="rounded-lg p-9"
              style={{ background: "var(--color-navy-900)" }}
            >
              <Compass size={26} style={{ color: "var(--color-gold-500)" }} />
              <h3 className="mt-5" style={{ fontSize: "var(--fs-h4)", color: "var(--color-white)" }}>
                Our Vision
              </h3>
              <p className="mt-4" style={{ color: "rgba(255,255,255,0.72)", fontSize: "var(--fs-body)" }}>
                To be a trusted quantity surveying partner for construction
                professionals worldwide &mdash; known for accuracy,
                transparency and reliable cost information at every stage of
                a project.
              </p>
            </div>
            <div
              className="rounded-lg p-9"
              style={{ background: "#0c6146", boxShadow: "var(--shadow-card)" }}
            >
              <Target size={26} style={{ color: "var(--color-gold-600)" }} />
              <h3 className="mt-5" style={{ fontSize: "var(--fs-h4)", color: "#ffffff" }}>
                Our Mission
              </h3>
              <p className="mt-4" style={{ color: "#ffffff", fontSize: "var(--fs-body)" }}>
                To provide accurate, reliable and professional quantity
                surveying solutions with a strong focus on quality,
                efficiency and clear communication &mdash; helping
                construction professionals reduce cost risks, save time and
                make confident decisions throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
        <div className="container-page">
          <div className="max-w-xl">
            <DimensionLine tone="navy" label="Our Approach" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              What we bring to every engagement.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {APPROACH.map((item) => (
              <div
                key={item.title}
                className="rounded-md p-7"
                style={{ background: "var(--color-paper)", border: "1px solid var(--color-paper-line)" }}
              >
                <h3 style={{ fontSize: "var(--fs-h5)" }}>{item.title}</h3>
                <p className="mt-2.5" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Software & Programs */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
        <div className="container-page">
          <div className="max-w-xl">
            <DimensionLine tone="navy" label="Software & Programs" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              The tools behind every measurement.
            </h2>
            <p className="mt-4" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
              We work across the leading BIM, takeoff, cost management and
              project control platforms used in international construction.
            </p>
          </div>
          <div className="mt-12">
            <SoftwareGrid />
          </div>
        </div>
      </section>

      {/* 6. Standards We Measure To */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
        <div className="container-page">
          <div className="max-w-xl">
            <DimensionLine tone="navy" label="Standards We Measure To" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              Recognised internationally, applied consistently.
            </h2>
          </div>
          <div className="mt-14">
            <StandardsCards />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--color-gold-500)" }}>
        <div className="container-page flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h2 style={{ fontSize: "var(--fs-h3)", color: "var(--color-navy-950)", lineHeight: "var(--lh-snug)" }}>
            Have a project that needs measuring?
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center rounded-sm px-7 py-4 text-sm font-semibold"
            style={{ background: "var(--color-navy-950)", color: "var(--color-white)" }}
          >
            Request a Free Quotation
          </a>
        </div>
      </section>
    </>
  );
}
