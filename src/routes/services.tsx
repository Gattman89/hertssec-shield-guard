import { createFileRoute } from "@tanstack/react-router";
import { Services, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services | HertsShield Hertfordshire" },
      { name: "description", content: "Manned guarding, construction site security, event security, corporate security and more across Hertfordshire." },
      { property: "og:title", content: "Security Services | HertsShield Hertfordshire" },
      { property: "og:description", content: "Manned guarding, construction, event, corporate and film set security across Hertfordshire." },
      { property: "og:url", content: "https://hertsshield.co.uk/services" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/services" }],
  }),
  component: () => (
    <SiteShell>
      <PageHeaderSpacer />
      <Services />
    </SiteShell>
  ),
});