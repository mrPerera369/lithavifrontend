"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoPlaceholder from "./LogoPlaceholder";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors"
      style={{
        background: scrolled ? "var(--color-navy-900)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.08)" : "none",
        transitionDuration: "var(--duration-med)",
      }}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="Lithavi International — home">
          <LogoPlaceholder tone="light" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "var(--color-white)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--color-gold-500)",
              color: "var(--color-navy-950)",
            }}
          >
            Request a Free Quotation
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X color="white" size={26} />
          ) : (
            <Menu color="white" size={26} />
          )}
        </button>
      </div>

      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "var(--color-navy-900)",
            borderColor: "var(--color-navy-line)",
          }}
        >
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-base font-medium"
                style={{ color: "var(--color-white)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-semibold"
              style={{ background: "var(--color-gold-500)", color: "var(--color-navy-950)" }}
              onClick={() => setOpen(false)}
            >
              Request a Free Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
