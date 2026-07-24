import { createFileRoute } from "@tanstack/react-router";
import { Areas, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Areas Covered | HertsShield Security Hertfordshire" },
      { name: "description", content: "HertsShield covers Hertford, Ware, St Albans, Stevenage, Bishop's Stortford, Welwyn Garden City, Hatfield, Harpenden, Hitchin and surrounding villages." },
      { property: "og:title", content: "Areas Covered | HertsShield Security Hertfordshire" },
      { property: "og:description", content: "Security coverage across Hertfordshire and surrounding villages." },
      { property: "og:url", content: "https://hertsshield.co.uk/areas" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/areas" }],
  }),
  component: () => (
    <SiteShell>
      <PageHeaderSpacer />
      <Areas />
    </SiteShell>
  ),
});