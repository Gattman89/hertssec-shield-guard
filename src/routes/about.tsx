import { createFileRoute } from "@tanstack/react-router";
import { About, WhyUs, SiteShell, PageHeaderSpacer } from "@/components/site/shared";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HertsShield | Hertfordshire Security Company" },
      { name: "description", content: "Learn about HertsShield Security Services — a Hertfordshire-based, SIA-licensed security company led by 20+ years of industry experience." },
      { property: "og:title", content: "About HertsShield | Hertfordshire Security Company" },
      { property: "og:description", content: "Hertfordshire-based, SIA-licensed security company led by 20+ years of industry experience." },
      { property: "og:url", content: "https://hertsshield.co.uk/about" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <PageHeaderSpacer />
      <About />
      <WhyUs />
    </SiteShell>
  );
}