"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Minus,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Expectation, Testimonial } from "@/lib/api";

type Props = {
  expectations: Expectation[];
  testimonials: Testimonial[];
  section: "expectations" | "testimonials";
};

export default function ClientVoicesInteractive({ expectations, testimonials, section }: Props) {
  const [openIndex, setOpenIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    if (section !== "testimonials" || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setTestimonialIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [section, testimonials.length]);

  if (section === "expectations") {
    return (
      <div
        className="mt-9 divide-y"
        style={{ borderColor: "var(--color-paper-line)" }}
      >
        {expectations.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.id}
              className="border-t"
              style={{ borderColor: "var(--color-paper-line)" }}
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span
                  style={{
                    fontSize: "var(--fs-h5)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "var(--color-paper)" }}
                >
                  {isOpen ? (
                    <Minus size={15} style={{ color: "var(--color-navy-900)" }} />
                  ) : (
                    <Plus size={15} style={{ color: "var(--color-navy-900)" }} />
                  )}
                </span>
              </button>
              {isOpen && (
                <p
                  className="pb-6"
                  style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body)" }}
                >
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // section === "testimonials"
  const goToPrevious = () => {
    setTestimonialIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setTestimonialIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full shrink-0">
                <div
                  className="rounded-lg p-8 sm:p-9"
                  style={{
                    background: "var(--color-paper)",
                    border: "1px solid var(--color-paper-line)",
                  }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "var(--color-white)" }}
                  >
                    <Quote size={24} style={{ color: "var(--color-gold-500)" }} />
                  </div>

                  <p
                    className="mt-6"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      fontFamily: "var(--font-display)",
                      color: "var(--color-navy-950)",
                    }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div
                    className="mt-8"
                    style={{ borderTop: "1px solid var(--color-paper-line)" }}
                  />

                  <div className="mt-5">
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-navy-950)",
                        fontSize: "var(--fs-body)",
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="mt-1"
                      style={{ color: "var(--color-slate-600)", fontSize: "var(--fs-body-sm)" }}
                    >
                      {testimonial.role}
                    </p>
                    <p
                      className="mt-1"
                      style={{ color: "var(--color-gold-500)", fontSize: "var(--fs-body-sm)" }}
                    >
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setTestimonialIndex(index)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: testimonialIndex === index ? "28px" : "8px",
                  background:
                    testimonialIndex === index
                      ? "var(--color-gold-500)"
                      : "var(--color-slate-300)",
                }}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goToPrevious}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-x-0.5"
              style={{
                borderColor: "var(--color-paper-line)",
                background: "var(--color-white)",
                color: "var(--color-navy-900)",
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goToNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 hover:translate-x-0.5"
              style={{
                borderColor: "var(--color-paper-line)",
                background: "var(--color-white)",
                color: "var(--color-navy-900)",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
