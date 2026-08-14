import { Gauge, MessageCircle, ShieldCheck, Globe2 } from "lucide-react";
import DimensionLine from "./DimensionLine";

const REASONS = [
  {
    icon: Gauge,
    title: "Precision, standards-led",
    body: "Measurement carried out to POMI, NRM and CESMM standards, so your quantities and BOQs hold up under scrutiny.",
  },
  {
    icon: MessageCircle,
    title: "Clear, responsive communication",
    body: "A single point of contact and fast turnaround, so you always know where your project stands.",
  },
  {
    icon: Globe2,
    title: "Built for international projects",
    body: "Remote delivery for contractors, developers and consultants across the UK, Australia, the US and the Middle East.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable to our own work",
    body: "Free consultation and quotation up front, and any genuine error in a deliverable is corrected at no extra cost.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* Left: breakout statement card, overlaps into the section above via negative margin */}
        <div className="relative">
          <div
            className="relative z-10 rounded-lg p-9 lg:p-11 lg:-mt-20"
            style={{ background: "var(--color-navy-900)", boxShadow: "var(--shadow-panel)" }}
          >
            <DimensionLine tone="gold" label="Why Lithavi" />
            <p
              className="mt-6 font-semibold"
              style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-h3)", lineHeight: "var(--lh-snug)", color: "var(--color-white)" }}
            >
              Reducing cost risk, one measured quantity at a time.
            </p>
            <p className="mt-6" style={{ color: "rgba(255,255,255,0.68)", fontSize: "var(--fs-body)" }}>
              We combine professional quantity surveying expertise with
              modern digital tools and a global remote-service model —
              transparent takeoffs and cost solutions tailored to each
              project, with fast response times throughout.
            </p>
          </div>
        </div>

        {/* Right: reason cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-md p-6"
                style={{ background: "var(--color-white)", boxShadow: "var(--shadow-card)" }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-sm"
                  style={{ background: "var(--color-gold-100)" }}
                >
                  <Icon size={20} style={{ color: "var(--color-navy-900)" }} />
                </span>
                <h3 className="mt-5" style={{ fontSize: "var(--fs-h5)" }}>
                  {reason.title}
                </h3>
                <p className="mt-2.5" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}>
                  {reason.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
