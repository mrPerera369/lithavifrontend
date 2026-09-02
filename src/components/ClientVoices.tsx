import { getExpectations, getTestimonials } from "@/lib/api";
import DimensionLine from "./DimensionLine";
import ClientVoicesInteractive from "./ClientVoicesInteractive";

export default async function ClientVoices() {
  const [expectations, testimonials] = await Promise.all([
    getExpectations(),
    getTestimonials(),
  ]);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <DimensionLine tone="navy" label="Client Voices" />

          <h2
            className="mt-6 max-w-lg"
            style={{
              fontSize: "var(--fs-h2)",
              lineHeight: "var(--lh-tight)",
            }}
          >
            What Clients Can Expect From Working With Us
          </h2>

          <p
            className="mt-5 max-w-lg"
            style={{
              color: "var(--color-slate-600)",
              fontSize: "var(--fs-h5)",
            }}
          >
            We deliver accurate quantity surveying and construction cost management solutions with a focus on quality, reliability, and clear communication.

          </p>

          {expectations.length > 0 && (
            <ClientVoicesInteractive expectations={expectations} testimonials={[]} section="expectations" />
          )}
        </div>

        {testimonials.length > 0 && (
          <ClientVoicesInteractive expectations={[]} testimonials={testimonials} section="testimonials" />
        )}
      </div>
    </section>
  );
}
