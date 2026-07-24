import { createFileRoute } from "@tanstack/react-router";
import { Quote, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Free Security Quote | HertsShield" },
      { name: "description", content: "Request a free, tailored security quote from HertsShield Security Services in Hertfordshire — response within 24 hours." },
      { property: "og:title", content: "Request a Free Security Quote | HertsShield" },
      { property: "og:description", content: "Free, tailored security quotes across Hertfordshire — response within 24 hours." },
      { property: "og:url", content: "https://hertsshield.co.uk/quote" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/quote" }],
  }),
  component: () => (
    <SiteShell>
      <PageHeaderSpacer />
      <Quote />
    </SiteShell>
  ),
});