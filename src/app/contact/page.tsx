import type { Metadata } from "next";
import { Mail, Phone, MapPin, ShieldCheck, Gauge, MessageCircle, FileCheck2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import DimensionLine from "@/components/DimensionLine";
import { getSiteSettings } from "@/lib/api";

const DEFAULT_MAP_URL = "https://www.google.com/maps?q=Sri+Lanka&output=embed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Lithavi International for a free quotation on quantity takeoffs, BOQs and construction cost management services, delivered remotely worldwide.",
  alternates: { canonical: "/contact" },
};

const WHY_CONTACT = [
  {
    icon: FileCheck2,
    title: "Free consultation & quotation",
    body: "Every project starts with a no-obligation review of your drawings and a customised quotation.",
  },
  {
    icon: Gauge,
    title: "Standards-led measurement",
    body: "Quantities and BOQs prepared to POMI, NRM2, CESMM4 and CSI MasterFormat.",
  },
  {
    icon: MessageCircle,
    title: "A single point of contact",
    body: "Direct, responsive communication throughout your engagement — no chasing.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by an error-correction guarantee",
    body: "Any genuine error identified in our work is reviewed and corrected at no extra cost.",
  },
];

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const mapSrc = settings.location_map_embed_url || DEFAULT_MAP_URL;
  const usingCustomMap = Boolean(settings.location_map_embed_url);

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell us about your project."
        intro="Share your drawings and project details, and we'll come back with a free, customised quotation for accurate quantity surveying and cost consulting support."
      />

      {/* Quote form + contact info */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-white)" }}>
        <div className="container-page grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <DimensionLine tone="navy" label="Request a Quote" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              Get a free, customised quotation.
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}>
              Pricing depends on your project&rsquo;s size, complexity and
              scope, so we don&rsquo;t list fixed prices. Send us your
              details below and we&rsquo;ll respond with a tailored quote.
            </p>
            <div className="mt-9">
              <QuoteForm />
            </div>
          </div>

          <div>
            <DimensionLine tone="navy" label="Contact Information" />
            <div className="mt-6 rounded-lg p-8" style={{ background: "var(--color-navy-900)" }}>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail size={18} className="mt-0.5" style={{ color: "var(--color-gold-500)" }} />
                  <div>
                    <p className="text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "var(--tracking-eyebrow)" }}>
                      Email
                    </p>
                    <p className="mt-1 italic" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--fs-body-sm)" }}>
                      {settings.email ? settings.email : "[Add your business email]"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={18} className="mt-0.5" style={{ color: "var(--color-gold-500)" }} />
                  <div>
                    <p className="text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "var(--tracking-eyebrow)" }}>
                      Phone / WhatsApp
                    </p>
                    <p className="mt-1 italic" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--fs-body-sm)" }}>
                      {settings.phone_number ? settings.phone_number : "[Add your phone number]"}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="mt-0.5" style={{ color: "var(--color-gold-500)" }} />
                  <div>
                    <p className="text-xs uppercase" style={{ color: "rgba(255,255,255,0.5)", letterSpacing: "var(--tracking-eyebrow)" }}>
                      Location
                    </p>
                    <p className="mt-1" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--fs-body-sm)" }}>
                      Sri Lanka — serving clients worldwide, remotely
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div>
                    <p className="mt-6">
                      <a
                        href="https://www.linkedin.com/company/lithavi-international/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-opacity hover:opacity-70"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/assets/images/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-lg" style={{ border: "1px solid var(--color-paper-line)" }}>
              <iframe
                title="Lithavi International — location"
                src={mapSrc}
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {!usingCustomMap && (
              <p className="mt-3" style={{ color: "var(--color-slate-300)", fontSize: "var(--fs-body-sm)" }}>
                Map shown at country level — add your exact office location
                in the admin panel once available.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why contact Lithavi */}
      <section className="py-24 lg:py-32" style={{ background: "var(--color-paper)" }}>
        <div className="container-page">
          <div className="max-w-xl">
            <DimensionLine tone="navy" label="Why Contact Lithavi" />
            <h2 className="mt-6" style={{ fontSize: "var(--fs-h2)", lineHeight: "var(--lh-tight)" }}>
              What happens after you reach out.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CONTACT.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
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
                    {item.title}
                  </h3>
                  <p className="mt-2.5" style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}>
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
