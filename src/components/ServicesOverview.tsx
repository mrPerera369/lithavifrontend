"use client";

import { useState } from "react";
import { Ruler, Calculator, FileStack, Gavel, Check } from "lucide-react";
import DimensionLine from "./DimensionLine";
import Link from "next/link";

const CATEGORIES = [
  {
    key: "measurement",
    label: "Quantity Takeoff & Measurement",
    icon: Ruler,
    intro:
      "Our core discipline accurate quantities taken directly from drawings, to recognised international standards.",
    items: [
      "Quantity Takeoff",
      "BOQ (Bill of Quantities) Preparation",
      "Material Takeoff",
      "2D & 3D Quantity Takeoff",
      "POMI, NRM & CESMM Measurement Services",
      "Excel & CostX BOQ Preparation",
      
    ],
  },
  {
    key: "cost",
    label: "Cost & Value",
    icon: Calculator,
    intro:
      "Turning measured quantities into cost certainty, from early planning through to project delivery.",
    items: [
      "Cost Estimation",
      "Cost Planning",
      "Cost Management",
      "Value Engineering",
      "Project Budgeting",
      "Labor Cost Estimation",
      "Construction Cost Reports",
    ],
  },
  {
    key: "commercial",
    label: "Commercial & Contracts",
    icon: FileStack,
    intro:
      "Ongoing commercial support that keeps a live project under control, from valuation to final account.",
    items: [
      "Commercial Management",
      "Variations & Change Order Valuation",
      "Interim Payment Valuations",
      "Final Account Preparation",
      "Subcontractor Measurement & Valuation",
      "Procurement Support",
      "Construction Cost Consultancy",
    ],
  },
  {
    key: "tender",
    label: "Tender & Sector Expertise",
    icon: Gavel,
    intro:
      "Tender-ready documentation and estimation experience across residential, commercial and industrial sectors.",
    items: [
      "Tender Documentation",
      "Tender Cost Estimates",
      "Bid Support & Tender Submission Assistance",
      "Residential Construction Estimation",
      "Commercial Construction Estimation",
      "Industrial Construction Estimation",
      "Remote Quantity Surveying Services",
    ],
  },
];

export default function ServicesOverview() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const current = CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0];

  return (
    <section id="services" className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
      <div className="container-page">
        <div className="max-w-2xl">
          <DimensionLine tone="navy" label="Our Quantity Surveying Services" />
          <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
            Quantity Surveying, Quantity Takeoff & BOQ Services
          </h2>
          <p className="mt-5" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-h5)" }}>
            Professional quantity surveying services covering quantity takeoff, BOQ preparation, cost estimation, commercial management and tender support for construction projects worldwide.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.key === active;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  id={`tab-${cat.key}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.key}`}
                  onClick={() => setActive(cat.key)}
                  className="flex shrink-0 items-center gap-3 rounded-md px-4 py-3.5 text-left text-sm font-medium transition-colors lg:shrink"
                  style={{
                    background: isActive ? "var(--color-navy-900)" : "var(--color-paper)",
                    color: isActive ? "var(--color-white)" : "var(--color-navy-950)",
                    border: `1px solid ${isActive ? "var(--color-navy-900)" : "var(--color-paper-line)"}`,
                  }}
                >
                  <Icon size={17} style={{ color: isActive ? "var(--color-gold-500)" : "var(--color-navy-500)" }} />
                  <span className="whitespace-nowrap lg:whitespace-normal">{cat.label}</span>
                </button>
              );
            })}

            <Link
              href="/services"
              className="mt-3 hidden text-sm font-semibold lg:inline-flex lg:items-center"
              style={{ color: "var(--color-navy-500)" }}
            >
              View all services &rarr;
            </Link>
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`panel-${current.key}`}
            aria-labelledby={`tab-${current.key}`}
            className="rounded-lg p-8 lg:p-10"
            style={{ background: "var(--color-paper)", border: "1px solid var(--color-paper-line)" }}
          >
            <p style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>{current.intro}</p>
            <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {current.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                    style={{ background: "var(--color-gold-100)" }}
                  >
                    <Check size={10} strokeWidth={3} style={{ color: "var(--color-gold-600)" }} />
                  </span>
                  <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--color-navy-950)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
