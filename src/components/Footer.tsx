import { Mail, Phone, MapPin } from "lucide-react";
import LogoPlaceholder from "./LogoPlaceholder";
import DimensionLine from "./DimensionLine";
import Link from "next/link";
import { getSiteSettings } from "@/lib/api";

export default async function Footer() {
  const settings = await getSiteSettings();

  return (
    <footer style={{ background: "var(--color-navy-950)" }}>
      <div className="container-page py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <LogoPlaceholder tone="light" />

            <p
              className="mt-6 max-w-xs"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "var(--fs-body-sm)",
              }}
            >
              Quantity surveying and cost consulting for construction
              projects worldwide, delivered remotely from Sri Lanka.
            </p>
          </div>

          {/* SITE */}
          <div>
            <h3
              className="text-sm font-semibold uppercase"
              style={{ color: "var(--color-white)", letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Site
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-opacity hover:opacity-70"
                    style={{ color: "rgba(255,255,255,0.68)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CORE SERVICES */}
          <div>
            <h3
              className="text-sm font-semibold uppercase"
              style={{ color: "var(--color-white)", letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Core Services
            </h3>

            <ul className="mt-5 space-y-3">
              {[
                "Quantity Takeoff",
                "BOQ Preparation",
                "Cost Estimation",
                "Cost Management",
                "Value Engineering",
              ].map((label) => (
                <li key={label}>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="text-sm font-semibold uppercase"
              style={{ color: "var(--color-white)", letterSpacing: "var(--tracking-eyebrow)" }}
            >
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-500)" }} />
                <span className="text-sm italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {settings.email ? settings.email : "Add your email address"}
                </span>
              </li>

              {/* PHONE */}
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-500)" }} />
                <span className="text-sm italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {settings.phone_number ? settings.phone_number : "Add your phone / WhatsApp number"}
                </span>
              </li>

              {/* LOCATION */}
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-gold-500)" }} />
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.68)" }}>
                  Sri Lanka — serving clients worldwide
                </span>
              </li>

              {/* LINKEDIN */}
              <li className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/lithavi-international/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex transition-opacity hover:opacity-70"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/images/linkedin.svg" alt="LinkedIn" width={30} height={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <DimensionLine tone="white" className="mt-16" />

        {/* COPYRIGHT */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "var(--fs-body-sm)" }}>
            &copy; {new Date().getFullYear()} Lithavi International. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "var(--fs-body-sm)" }}>
            lithavi.com
          </p>
        </div>
      </div>
    </footer>
  );
}
