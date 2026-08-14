import { getStats } from "@/lib/api";

// Symbols frontend eke fix karala - backend eken yanne nehe
const SYMBOLS = ["+", "+", "%", "%"];

export default async function Stats() {
  const stats = await getStats();

  if (stats.length === 0) return null;

  return (
    <section style={{ background: "var(--color-navy-950)", borderBottom: "12px solid #0c6146" }}>
      <div className="container-page">
        <div
          className="grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4 lg:gap-y-0 lg:py-0"
          style={{ borderTop: "1px solid var(--color-navy-line)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-2 py-6 text-center lg:py-14"
              style={{
                borderLeft: i === 0 ? "none" : "1px solid var(--color-navy-line)",
              }}
            >
              <p
                className="tabular-nums"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--fs-h1)",
                  color: "var(--color-gold-500)",
                  lineHeight: "var(--lh-tight)",
                }}
              >
                {stat.value}
                {SYMBOLS[i] || ""}
              </p>
              <p
                className="mt-2"
                style={{
                  fontSize: "var(--fs-body-sm)",
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
