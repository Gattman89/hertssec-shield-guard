import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, About } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HertsShield | Hertfordshire's Trusted Security Partner" },
      { name: "description", content: "Learn about HertsShield Security Services — SIA-licensed, Hertfordshire-based security experts led by 20+ years of industry experience." },
      { property: "og:title", content: "About HertsShield | Hertfordshire's Trusted Security Partner" },
      { property: "og:description", content: "SIA-licensed, Hertfordshire-based security experts led by 20+ years of industry experience." },
      { property: "og:url", content: "https://hertsshield.co.uk/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/about" }],
  }),
  component: () => (
    <SiteChrome>
      <div className="pt-56 sm:pt-64 lg:pt-72" />
      <About />
    </SiteChrome>
  ),
});