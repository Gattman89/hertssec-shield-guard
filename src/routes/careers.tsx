import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, ShieldCheck, Award, HeartPulse, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/hertsshield-logo-cropped.png.asset.json";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join HertsShield Security Services" },
      { name: "description", content: "Join our professional security team in Hertfordshire. Send your CV to info@hertsshield.co.uk to apply." },
      { property: "og:title", content: "Careers — Join HertsShield Security Services" },
      { property: "og:description", content: "Join our professional security team in Hertfordshire. Send your CV to info@hertsshield.co.uk." },
    ],
  }),
  ssr: false,
  component: CareersPage,
});

const perks = [
  { icon: Award, title: "SIA Licensed Roles" },
  { icon: HeartPulse, title: "Ongoing Training & Support" },
  { icon: Users, title: "Friendly, Professional Team" },
  { icon: ShieldCheck, title: "Competitive Pay & Flexible Hours" },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoAsset.url} alt="HertsShield Security Services" className="h-16 sm:h-20 w-auto" />
          </Link>
          <Link to="/" className="text-sm font-semibold uppercase tracking-wide text-foreground/85 hover:text-brand transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>
      <main>
        <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #B30000 0%, transparent 50%)" }} />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 mb-5">
              <ShieldCheck className="h-4 w-4 text-brand" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/90">We're Hiring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] text-white">
              Join Our <span className="text-brand">Professional Team</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              We're always looking for reliable, professional security personnel to join HertsShield across Hertfordshire. Send us your CV and a brief introduction — we'd love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-white h-12 px-7 text-base font-semibold uppercase tracking-wide">
                <a href="mailto:info@hertsshield.co.uk?subject=Career%20Application%20—%20CV%20Enclosed&body=Hi%20HertsShield%20team%2C%0A%0APlease%20find%20my%20CV%20attached.%0A%0AName%3A%0APhone%3A%0ASIA%20Licence%20(if%20any)%3A%0AAvailability%3A%0A%0AThanks">
                  <Mail className="h-5 w-5 mr-2" /> Send Your CV
                </a>
              </Button>
            </div>
            <div className="mt-4 text-sm text-white/70 break-all">info@hertsshield.co.uk</div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="section-divider" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Why HertsShield</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase leading-tight">Build a Career in Professional Security</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                HertsShield Security Services is a Hertfordshire-based company led by 20+ years of industry experience. We pride ourselves on professionalism, visibility and customer service — and we look for the same qualities in everyone who joins us.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "SIA Licence (or willingness to obtain one)",
                  "Smart, professional appearance",
                  "Reliable, punctual and trustworthy",
                  "Strong communication and customer service skills",
                  "Right to work in the UK",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {perks.map((p) => (
                <div key={p.title} className="bg-card border border-border rounded-lg p-6 hover:border-brand transition-colors">
                  <div className="h-10 w-10 rounded-md bg-brand/10 border border-brand/30 flex items-center justify-center mb-4">
                    <p.icon className="h-5 w-5 text-brand" />
                  </div>
                  <h3 className="text-base font-bold uppercase">{p.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 relative overflow-hidden bg-card">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold uppercase leading-tight">Ready to Apply?</h2>
            <p className="mt-4 text-muted-foreground">
              Send us your CV to <a href="mailto:info@hertsshield.co.uk" className="text-brand font-semibold hover:underline break-all">info@hertsshield.co.uk</a> and a member of our team will be in touch.
            </p>
            <Button asChild size="lg" className="mt-8 bg-brand hover:bg-brand/90 text-white h-12 px-7 text-base font-semibold uppercase tracking-wide">
              <a href="mailto:info@hertsshield.co.uk?subject=Career%20Application%20—%20CV%20Enclosed">
                <Mail className="h-5 w-5 mr-2" /> Email Your CV
              </a>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-background border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} HertsShield Security Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
}