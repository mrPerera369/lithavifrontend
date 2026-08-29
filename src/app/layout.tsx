import type { Metadata } from "next";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppButton from "@/components/WhatsAppButton";

// production domain
const SITE_URL = "https://www.lithavi.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
   alternates: {
    canonical: "/",
  },
  title: {
    default: "Lithavi International | Quantity Surveying & Cost Consulting",
    template: "%s | Lithavi International",
  },
  description:
    "Lithavi International provides professional quantity surveying, BOQ preparation, cost estimation and cost management for construction projects worldwide.",
  openGraph: {
    type: "website",
    siteName: "Lithavi International",
    title: "Lithavi International | Quantity Surveying & Cost Consulting",
    description:
      "Professional quantity surveying, BOQ preparation and cost management services for construction projects worldwide.",
    url: SITE_URL,
    
    images: ["/assets/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lithavi International | Quantity Surveying & Cost Consulting",
    description:
      "Professional quantity surveying, BOQ preparation and cost management services for construction projects worldwide.",
    images: ["/assets/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lithavi International",
  description:
    "Professional quantity surveying, BOQ preparation and cost management services for construction projects worldwide.",
  url: SITE_URL,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        style={
          {
            "--font-space-grotesk": "'Space Grotesk'",
            "--font-inter": "'Inter'",
          } as React.CSSProperties
        }
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
