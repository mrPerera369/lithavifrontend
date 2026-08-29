import { ArrowRight } from "lucide-react";
import DimensionLine from "./DimensionLine";
import HeroSlider from "./HeroSlider";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-28"
      style={{ background: "var(--color-navy-950)", minHeight: "640px" }}
    >
      {/* Full-bleed auto-rotating photo slider behind the content, with a
          left-to-right dark navy gradient so the headline stays readable
          while photography shows through on the right. */}
      <HeroSlider />

      <div className="container-page relative">
        <div className="max-w-xl">
          <DimensionLine tone="gold" label="Quantity Surveying & Cost Consulting" />
          <h1
            className="mt-6 text-[3.25rem] sm:text-[3.75rem] lg:text-(--fs-display) font-semibold"
            style={{
             
              lineHeight: "var(--lh-tight)",
              color: "var(--color-white)",
            }}
          >
            Professional Quantity Surveying & Construction Cost Management
          </h1>
          <p
            className="mt-7 max-w-lg"
            style={{ color: "rgba(255,255,255,0.78)", fontSize: "var(--fs-h5)", lineHeight: "var(--lh-normal)" }}
          >
            Lithavi International delivers accurate construction quantity takeoffs, BOQ preparation, cost estimation and 5D BIM measurement services for contractors, developers, architects and engineers worldwide.
          </p>
{/* Core services */} <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium" style={{ color: "rgba(255,255,255,0.72)" }} > <span>Quantity Takeoff</span> <span aria-hidden="true">•</span> <span>BOQ Preparation</span> <span aria-hidden="true">•</span> <span>Cost Estimation</span> <span aria-hidden="true">•</span> <span>5D BIM</span> </div>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--color-gold-500)", color: "var(--color-navy-950)" }}
            >
              Request a Free Quotation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              View Our Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
