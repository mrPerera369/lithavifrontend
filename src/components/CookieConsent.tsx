"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "lithavi-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (e.g. private browsing) — show the banner
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore write failures, still dismiss for this session
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div
        className="mx-auto flex max-w-3xl flex-col gap-4 rounded-lg p-6 sm:flex-row sm:items-center sm:justify-between"
        style={{ background: "var(--color-navy-950)", boxShadow: "var(--shadow-panel)" }}
      >
        <div className="flex items-start gap-3 sm:items-center">
          <Cookie size={20} className="mt-0.5 shrink-0 sm:mt-0" style={{ color: "var(--color-gold-500)" }} />
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "var(--fs-body-sm)" }}>
            We use cookies to improve your experience on this site and
            understand how it&rsquo;s used. You can accept or decline
            non-essential cookies at any time.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            className="rounded-sm px-5 py-2.5 text-sm font-semibold"
            style={{ background: "transparent", color: "var(--color-white)", border: "1px solid rgba(255,255,255,0.28)" }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-sm px-5 py-2.5 text-sm font-semibold"
            style={{ background: "var(--color-gold-500)", color: "var(--color-navy-950)" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
