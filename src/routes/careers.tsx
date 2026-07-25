import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, Careers } from "@/components/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join the HertsShield Security Team" },
      { name: "description", content: "Join HertsShield Security Services. Send your CV to info@hertsshield.co.uk — SIA-licensed roles across Hertfordshire." },
      { property: "og:title", content: "Careers | Join the HertsShield Security Team" },
      { property: "og:description", content: "Join HertsShield Security Services — SIA-licensed roles across Hertfordshire." },
      { property: "og:url", content: "https://hertsshield.co.uk/careers" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/careers" }],
  }),
  component: () => (
    <SiteChrome>
      <div className="pt-56 sm:pt-64 lg:pt-72" />
      <Careers />
    </SiteChrome>
  ),
});