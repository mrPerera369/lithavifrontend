type DimensionLineProps = {
  label?: string;
  tone?: "navy" | "gold" | "white";
  className?: string;
};

const toneColor: Record<NonNullable<DimensionLineProps["tone"]>, string> = {
  navy: "var(--color-navy-900)",
  gold: "var(--color-gold-500)",
  white: "rgba(255,255,255,0.55)",
};

/**
 * The site's signature device: a surveyor's dimension line — the notation
 * used on measured drawings to call out a distance between two points.
 * Used sparingly as a divider beneath eyebrows/headings to tie the visual
 * language back to the business (quantity measurement).
 */
export default function DimensionLine({
  label,
  tone = "navy",
  className = "",
}: DimensionLineProps) {
  const color = toneColor[tone];
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
        <path d="M7.5 0V10M1 5H14" stroke={color} strokeWidth="1.2" />
      </svg>
      <span
        style={{
          height: "1px",
          width: "42px",
          background: color,
          display: "inline-block",
        }}
      />
      {label ? (
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--fs-eyebrow)",
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
            color,
          }}
        >
          {label}
        </span>
      ) : null}
      <span
        style={{
          height: "1px",
          flex: label ? 0 : 1,
          minWidth: label ? "0" : "16px",
          background: color,
          display: "inline-block",
        }}
      />
    </div>
  );
}
