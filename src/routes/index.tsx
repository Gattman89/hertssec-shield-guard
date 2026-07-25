import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, Hero, WhyUs } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HertsShield Security Services | SIA Licensed Security in Hertfordshire" },
      { name: "description", content: "Hertfordshire security company providing SIA-licensed manned guarding, event security and construction site security across Hertfordshire." },
      { property: "og:title", content: "HertsShield Security Services | SIA Licensed Security in Hertfordshire" },
      { property: "og:description", content: "SIA-licensed manned guarding, event security and construction site security across Hertfordshire." },
      { property: "og:url", content: "https://hertsshield.co.uk" },
      { name: "keywords", content: "Hertfordshire security company, manned guarding Hertfordshire, event security Hertfordshire, construction site security Hertfordshire, SIA licensed security" },
      { property: "og:image", content: "https://hertsshield.co.uk/hertsshield-preview.png" },
      { name: "twitter:image", content: "https://hertsshield.co.uk/hertsshield-preview.png" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "HertsShield Security Services",
          telephone: "+44 1992 364110",
          email: "info@hertsshield.co.uk",
          url: "https://hertsshield.co.uk",
          address: {
            "@type": "PostalAddress",
            streetAddress: "The Townhouse, 114–116 Fore Street",
            addressLocality: "Hertford",
            addressRegion: "England",
            postalCode: "SG14 1AJ",
            addressCountry: "GB",
          },
          areaServed: [
            "Hertford", "Ware", "St Albans", "Stevenage", "Bishop's Stortford",
            "Welwyn Garden City", "Hatfield", "Harpenden", "Hitchin",
          ].map((name) => ({ "@type": "City", name })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteChrome>
      <Hero />
      <WhyUs />
    </SiteChrome>
  );
}
