import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import ClientVoices from "@/components/ClientVoices";

export const metadata: Metadata = {
  title: "Lithavi International | Quantity Surveying & Cost Consulting",
  description:
    "Lithavi International provides professional quantity surveying, BOQ preparation, cost estimation and cost management for construction projects worldwide.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceAreas />
      <ClientVoices />
    </>
  );
}
