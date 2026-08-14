import { getServiceAreaStats } from "@/lib/api";
import DimensionLine from "./DimensionLine";

// Symbols frontend eke fix karala - backend eken yanne nehe
const SYMBOLS = ["+", "+"];

export default async function ServiceAreas() {
  const stats = await getServiceAreaStats();

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "var(--color-navy-950)" }}
    >
      <div className="container-page relative grid gap-16 lg:grid-cols-[0.85fr_1.3fr] lg:items-center">
        <div>
          <DimensionLine tone="gold" label="Global Reach" />

          <h2
            className="mt-6"
            style={{
              fontSize: "var(--fs-h2)",
              lineHeight: "var(--lh-tight)",
              color: "var(--color-white)",
            }}
          >
            Based in Sri Lanka. Working on projects worldwide.
          </h2>

          <p
            className="mt-6"
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "var(--fs-body)",
            }}
          >
            Every service is delivered remotely, so distance from our office
            never means distance from your project. We currently support
            clients across multiple countries.
          </p>

          {stats.length > 0 && (
            <dl
              className="mt-6 flex gap-12"
              style={{
                fontSize: "var(--fs-h2)",
                lineHeight: "var(--lh-tight)",
                color: "var(--color-white)",
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <dt className="text-3xl font-bold">
                    {stat.value}
                    {SYMBOLS[i] || ""}
                  </dt>
                  <dd className="mt-1 text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* World map */}
        <div className="relative aspect-1488/808 w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/world.svg"
            alt="World map highlighting the countries Lithavi International serves"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
