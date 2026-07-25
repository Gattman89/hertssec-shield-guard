import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, Contact, Quote } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HertsShield Security | Call 01992 364110" },
      { name: "description", content: "Contact HertsShield Security Services — call 01992 364110 or email info@hertsshield.co.uk for a free security quote across Hertfordshire." },
      { property: "og:title", content: "Contact HertsShield Security | Call 01992 364110" },
      { property: "og:description", content: "Call 01992 364110 or email info@hertsshield.co.uk for a free security quote." },
      { property: "og:url", content: "https://hertsshield.co.uk/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hertsshield.co.uk/contact" }],
  }),
  component: () => (
    <SiteChrome>
      <div className="pt-56 sm:pt-64 lg:pt-72" />
      <Contact />
      <Quote />
    </SiteChrome>
  ),
});