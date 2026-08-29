import PageHero from "@/components/PageHero";
import ServicesFAQ from "@/components/ServicesFAQ";
import {
  Layers,
  FileSpreadsheet,
  Gavel,
  PackageSearch,
  Wrench,
  Receipt,
  ShieldCheck,
  Scale,
} from "lucide-react";
import DimensionLine from "@/components/DimensionLine";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional quantity surveying, BOQ preparation, cost estimation and construction cost management services for projects worldwide.",
  alternates: { canonical: "/services" },
};

const SERVICES = [
  {
    icon: Layers,
    title: "Detailed Quantity Take-off Services (2D & 3D BIM 5D)",
    body: "High-precision digital quantity measurement for Architectural, Structural, Civil, and MEP works using 2D/3D drawings and BIM models. Measurements are carried out using the client's preferred software, delivered with colour-coded marked-up PDF drawings for complete visibility into every measurement.",
  },
  {
    icon: FileSpreadsheet,
    title: "BOQ Preparation & Compilation",
    body: "Drafting and compiling standard-compliant Bill of Quantities to any recognised measurement standard including POMI, NRM1/NRM2, CESMM4, SMM7, and CSI MasterFormat based on the client's specific requirements.",
  },
  {
    icon: Gavel,
    title: "Tender Bidding & Rate Analysis Support",
    body: "Comprehensive bidding support for main contractors and sub-contractors, including rate build-ups, material/labor cost estimates, and competitive tender pricing.",
  },
  {
    icon: PackageSearch,
    title: "Material Take-off (MTO) & BOM Preparation",
    body: "Precise material extraction schedules and Bill of Materials (BOM) preparation for procurement teams to optimize material purchasing, minimize site waste, and effectively control project costs.",
  },
  {
    icon: Wrench,
    title: "MEP Quantity Surveying & Costing",
    body: "Specialized quantity take-offs and cost evaluations for Mechanical, Electrical, Plumbing, HVAC, Firefighting, and Low Voltage (LV) systems for commercial and residential projects.",
  },
  {
    icon: Receipt,
    title: "Interim Payment Application (IPA) Preparation",
    body: "Accurate monthly IPA compilation for contractors, featuring completed work measurements, stored material (MOS) tracking, and backup documentation to maintain healthy cash flow.",
  },
  {
    icon: ShieldCheck,
    title: "Interim Payment Certificate (IPC) Verification",
    body: "Independent technical audit and review of contractor progress billings and IPCs against actual site progress to prevent over-payments and commercial disputes.",
  },
  {
    icon: Scale,
    title: "Variation & Final Account Management",
    body: "Detailed valuation and negotiation support for project variations, claims, and final account preparation to ensure total commercial protection.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Quantity surveying and cost consulting, end to end."
        intro="From the first digital takeoff to final account, Lithavi International supports contractors, developers, architects and engineers through every commercial stage of a construction project."
      />

      <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
        <div className="container-page">
          <div className="max-w-2xl">
            <DimensionLine tone="navy" label="What We Deliver" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              Eight core services, one consistent standard of accuracy.
            </h2>
          </div>

          <div className="mt-16 flex flex-col">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              const reversed = i % 2 === 1;
              return (
                <div
                  key={service.title}
                  className={`flex flex-col items-start gap-6 py-10 lg:flex-row lg:items-center lg:gap-10 ${
                    reversed ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-paper-line)" }}
                >
                  <div className="flex shrink-0 lg:w-32 lg:justify-center">
                    <span
                      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-paper)" }}
                    >
                      <Icon size={30} style={{ color: "var(--color-navy-900)" }} />
                    </span>
                  </div>
                  <div>
                    <span
                      className="tabular-nums"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--fs-eyebrow)",
                        letterSpacing: "var(--tracking-eyebrow)",
                        color: "var(--color-gold-600)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2" style={{ fontSize: "var(--fs-h4)", lineHeight: "var(--lh-snug)" }}>
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
                      {service.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesFAQ />
    </>
  );
}
