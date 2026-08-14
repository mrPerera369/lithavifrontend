import { getServicesFAQ } from "@/lib/api";
import DimensionLine from "./DimensionLine";
import ServicesFAQAccordion from "./ServicesFAQAccordion";

export default async function ServicesFAQ() {
  const faqs = await getServicesFAQ();

  return (
    <section className="py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
      <div className="container-page grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <DimensionLine tone="navy" label="FAQ" />
          <h2 className="mt-6 max-w-sm" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
            Questions we&rsquo;re asked before a project starts.
          </h2>
          <p className="mt-5 max-w-sm" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
            Don&rsquo;t see your question here? Get in touch and we&rsquo;ll
            answer it directly.
          </p>
        </div>

        <ServicesFAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
