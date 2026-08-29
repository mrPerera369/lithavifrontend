
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/lib/api";

export default function ServicesFAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (faqs.length === 0) return null;

  return (
    <div>
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-answer-${item.id}`;
        const buttonId = `faq-question-${item.id}`;

        return (
          <div
            key={item.id}
            className="border-t"
            style={{ borderColor: "var(--color-paper-line)" }}
          >
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span
                  style={{
                    fontSize: "var(--fs-h5)",
                    fontFamily: "var(--font-display)",
                    color: "var(--color-navy-950)",
                  }}
                >
                  {item.question}
                </span>

                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--color-white)" }}
                  aria-hidden="true"
                >
                  {isOpen ? (
                    <Minus
                      size={15}
                      style={{ color: "var(--color-navy-900)" }}
                    />
                  ) : (
                    <Plus
                      size={15}
                      style={{ color: "var(--color-navy-900)" }}
                    />
                  )}
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-6"
              >
                <p
                  style={{
                    color: "var(--color-slate-600)",
                    fontSize: "var(--fs-body)",
                    lineHeight: "var(--lh-normal)",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
