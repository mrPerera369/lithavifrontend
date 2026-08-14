import BlueprintGrid from "./BlueprintGrid";
import DimensionLine from "./DimensionLine";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24"
      style={{ background: "var(--color-navy-900)" }}
    >
      <BlueprintGrid />
      <div className="container-page relative max-w-2xl">
        <DimensionLine tone="gold" label={eyebrow} />
        <h1
          className="mt-6 font-semibold"
          style={{ fontSize: "var(--fs-h1)", lineHeight: "var(--lh-tight)", color: "var(--color-white)" }}
        >
          {title}
        </h1>
        <p
          className="mt-6"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "var(--fs-h5)", lineHeight: "var(--lh-normal)" }}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}
