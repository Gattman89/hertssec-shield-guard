import { createFileRoute } from "@tanstack/react-router";
import { Careers, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Join HertsShield Security" },
      { name: "description", content: "Join HertsShield Security — send your CV to info@hertsshield.co.uk. We're always looking for professional security personnel across Hertfordshire." },
      { property: "og:title", content: "Careers | Join HertsShield Security" },
      { property: "og:description", content: "We're hiring professional security personnel across Hertfordshire." },
      { property: "og:url", content: "https://hertsshield.co.uk/careers" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/careers" }],
  }),
  component: () => (
    <SiteShell>
      <PageHeaderSpacer />
      <Careers />
    </SiteShell>
  ),
});