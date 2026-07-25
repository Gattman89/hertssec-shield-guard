import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, Services } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services | HertsShield Hertfordshire" },
      { name: "description", content: "Manned guarding, construction site security, event security, corporate & retail security across Hertfordshire — delivered by SIA-licensed personnel." },
      { property: "og:title", content: "Security Services | HertsShield Hertfordshire" },
      { property: "og:description", content: "Complete security solutions delivered by SIA-licensed personnel across Hertfordshire." },
      { property: "og:url", content: "https://hertsshield.co.uk/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/services" }],
  }),
  component: () => (
    <SiteChrome>
      <div className="pt-56 sm:pt-64 lg:pt-72" />
      <Services />
    </SiteChrome>
  ),
});