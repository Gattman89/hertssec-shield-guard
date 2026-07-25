import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, Areas } from "@/components/site";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas Covered | HertsShield Security Across Hertfordshire" },
      { name: "description", content: "SIA-licensed security across Hertford, Ware, St Albans, Stevenage, Bishop's Stortford, Welwyn Garden City, Hatfield, Harpenden, Hitchin and surrounding villages." },
      { property: "og:title", content: "Areas Covered | HertsShield Security Across Hertfordshire" },
      { property: "og:description", content: "Security coverage across Hertfordshire and surrounding villages." },
      { property: "og:url", content: "https://hertsshield.co.uk/areas" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/areas" }],
  }),
  component: () => (
    <SiteChrome>
      <div className="pt-56 sm:pt-64 lg:pt-72" />
      <Areas />
    </SiteChrome>
  ),
});