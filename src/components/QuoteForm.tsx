"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const SERVICES = [
  "Quantity Takeoff",
  "BOQ Preparation",
  "Cost Estimation",
  "Cost Management",
  "Value Engineering",
  "Contract Advisory",
  "Other",
  "Not sure yet",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company") || "",
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(`${API_BASE}/api/quotes/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        const message =
          res.status === 429
            ? errData?.detail ||
              "You've already submitted a request recently. Please wait 15 minutes before submitting again."
            : errData?.detail || `Request failed (${res.status})`;
        setError(message);
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit quote request:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col items-start gap-4 rounded-lg p-9"
        style={{ background: "var(--color-paper)", border: "1px solid var(--color-paper-line)" }}
      >
        <CheckCircle2 size={28} style={{ color: "var(--color-gold-600)" }} />
        <h3 style={{ fontSize: "var(--fs-h5)" }}>Request received</h3>
        <p style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}>
          Thank you — we&rsquo;ll review your project details and get back
          to you with a free, customised quotation.
        </p>
      </div>
    );
  }

  const fieldStyle: React.CSSProperties = {
    background: "var(--color-white)",
    border: "1px solid var(--color-paper-line)",
    borderRadius: "var(--radius-sm)",
    padding: "0.75rem 1rem",
    fontSize: "var(--fs-body-sm)",
    color: "var(--color-navy-950)",
    width: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "var(--fs-body-sm)",
    fontWeight: 500,
    color: "var(--color-navy-950)",
    display: "block",
    marginBottom: "0.5rem",
  };

  const optionalStyle: React.CSSProperties = {
    fontWeight: 400,
    color: "var(--color-slate-300)",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-8 lg:p-9"
      style={{ background: "var(--color-paper)", border: "1px solid var(--color-paper-line)" }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Cooper"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="company" style={labelStyle}>
            Company <span style={optionalStyle}>(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Developments"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            style={fieldStyle}
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>
            Phone <span style={optionalStyle}>(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+44 ..."
            style={fieldStyle}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="service" style={labelStyle}>
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          style={{ ...fieldStyle, appearance: "auto" }}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" style={labelStyle}>
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about the project, its stage, and any drawings you can share."
          style={{ ...fieldStyle, resize: "vertical" }}
        />
      </div>

      {error && (
        <div
          className="mt-5 flex items-start gap-2 rounded-sm p-3"
          style={{ background: "#fee2e2", color: "#dc2626" }}
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <p style={{ fontSize: "var(--fs-body-sm)" }}>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
        style={{ background: "var(--color-gold-500)", color: "var(--color-navy-950)" }}
      >
        {submitting ? "Sending..." : "Request My Free Quotation"}
        <Send size={16} />
      </button>
    </form>
  );
}