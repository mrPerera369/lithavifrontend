"use client";

import { useEffect, useRef, useState } from "react";
import { HardHat, Ruler, Building2 } from "lucide-react";

const SLIDES = [
  {
    key: "slide-1",
    src: "/assets/images/hero/slide-1.png",
    alt: "Lithavi International — site and project work",
    icon: HardHat,
    placeholderLabel: "hero/slide-1.png",
  },
  {
    key: "slide-2",
    src: "/assets/images/hero/slide-2.png",
    alt: "Lithavi International — measurement and takeoff",
    icon: Ruler,
    placeholderLabel: "hero/slide-2.png",
  },
  {
    key: "slide-3",
    src: "/assets/images/hero/slide-3.png",
    alt: "Lithavi International — construction projects",
    icon: Building2,
    placeholderLabel: "hero/slide-3.png",
  },
];

const AUTO_ADVANCE_MS = 5500;

/**
 * Single slide: tries to load the real photo from /public/assets/images/hero/.
 * Until that file exists, it falls back to a styled placeholder so the
 * slider still looks intentional rather than showing a broken image icon.
 * Drop a JPG/PNG at the path above and it swaps in automatically — no
 * code changes needed.
 */
function Slide({
  src,
  alt,
  isActive,
  Icon,
  placeholderLabel,
}: {
  src: string;
  alt: string;
  isActive: boolean;
  Icon: typeof HardHat;
  placeholderLabel: string;
}) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700 ease-in-out"
      style={{ opacity: isActive ? 1 : 0 }}
      aria-hidden={!isActive}
    >
      {!errored && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-4"
          style={{
            background:
              "linear-gradient(135deg, var(--color-navy-700) 0%, var(--color-navy-950) 100%)",
          }}
        >
          <Icon size={44} style={{ color: "rgba(255,255,255,0.22)" }} />
          <span
            className="rounded-sm px-3 py-1.5 text-xs"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
          >
            Add photo — {placeholderLabel}
          </span>
        </div>
      )}
    </div>
  );
}

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (paused || prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <Slide
          key={slide.key}
          src={slide.src}
          alt={slide.alt}
          isActive={i === active}
          Icon={slide.icon}
          placeholderLabel={slide.placeholderLabel}
        />
      ))}

      {/* Dark navy gradient — fades from solid on the left (text legibility)
          to transparent on the right (photo shows through), plus a bottom
          fade so the dot navigation and page content below stay readable. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--color-navy-950) 0%, rgba(7,26,48,0.86) 32%, rgba(7,26,48,0.35) 62%, rgba(7,26,48,0.08) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(180deg, rgba(7,26,48,0) 0%, var(--color-navy-950) 100%)" }}
      />

      {/* Dot navigation */}
      <div
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-2 sm:flex"
        role="tablist"
        aria-label="Hero photo slides"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className="h-1.5 rounded-full transition-all"
            style={{
              width: i === active ? "26px" : "8px",
              background: i === active ? "var(--color-gold-500)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
