import { createFileRoute } from "@tanstack/react-router";
import { Contact, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HertsShield Security | Hertfordshire" },
      { name: "description", content: "Call 01992 364110 or email info@hertsshield.co.uk to speak with HertsShield Security Services." },
      { property: "og:title", content: "Contact HertsShield Security | Hertfordshire" },
      { property: "og:description", content: "Call 01992 364110 or email info@hertsshield.co.uk." },
      { property: "og:url", content: "https://hertsshield.co.uk/contact" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/contact" }],
  }),
  component: () => (
    <SiteShell>
      <PageHeaderSpacer />
      <Contact />
    </SiteShell>
  ),
});