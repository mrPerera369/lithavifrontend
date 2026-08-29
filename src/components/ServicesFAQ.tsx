import { getServicesFAQ } from "@/lib/api";
import DimensionLine from "./DimensionLine";
import ServicesFAQAccordion from "./ServicesFAQAccordion";

export default async function ServicesFAQ() {
  const faqs = await getServicesFAQ();

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <DimensionLine tone="navy" label="Quantity Surveying FAQ" />
          <h2 className="mt-6 max-w-sm" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
            Quantity Surveying, Takeoff & BOQ FAQs
          </h2>
          <p className="mt-5 max-w-sm" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
            Find answers to common questions about quantity surveying, quantity takeoff, BOQ preparation, cost estimation and our construction measurement services.
          </p>
        </div>

        <ServicesFAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
