import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/hertssec-textonly.png.asset.json";
import heroImage from "@/assets/hero-security.jpg";
import { useEffect, useRef, useState } from "react";
import {
  Shield, ShieldCheck, HardHat, Beer, CalendarDays, Building2, Briefcase,
  KeyRound, UserSquare2, Car, Lock, Phone, Mail, MapPin, Menu, X, Check,
  Award, Clock, PoundSterling, Facebook, Instagram, Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HertsSec Security Services | Hertfordshire Security Company" },
      { name: "description", content: "Hertfordshire security company providing SIA-licensed manned guarding, event security, construction site security and mobile patrols across Hertfordshire." },
      { property: "og:title", content: "HertsSec Security Services | Hertfordshire Security Company" },
      { property: "og:description", content: "SIA-licensed manned guarding, event security and construction site security across Hertfordshire." },
      { name: "keywords", content: "Hertfordshire security company, manned guarding Hertfordshire, event security Hertfordshire, construction site security Hertfordshire, SIA licensed security" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: ShieldCheck, title: "Manned Guarding", desc: "Visible, professional SIA-licensed officers protecting your premises 24/7." },
  { icon: HardHat, title: "Construction Site Security", desc: "Site protection, access control and asset safeguarding across Hertfordshire builds." },
  { icon: Beer, title: "Pub, Bar & Club Security", desc: "Door supervision and crowd management trained for licensed venues." },
  { icon: CalendarDays, title: "Event Security", desc: "From private parties to large public events — fully managed event security." },
  { icon: Building2, title: "Corporate Security", desc: "Discreet, professional security tailored to corporate environments." },
  { icon: Briefcase, title: "Office Security", desc: "Daytime and out-of-hours protection for offices and business parks." },
  { icon: Shield, title: "Static Guarding", desc: "Dedicated officers stationed at fixed posts to deter and respond." },
  { icon: KeyRound, title: "Lock & Unlock Services", desc: "Reliable opening and closing of premises with full key-holding." },
  { icon: UserSquare2, title: "Reception & Concierge", desc: "Front-of-house security delivered with first-class customer service." },
  { icon: Car, title: "Mobile Patrols", desc: "Marked vehicle patrols and random checks for round-the-clock coverage." },
];

const reasons = [
  { icon: Award, title: "SIA Licensed Personnel" },
  { icon: ShieldCheck, title: "Professional and Reliable Service" },
  { icon: MapPin, title: "Local Hertfordshire-Based Company" },
  { icon: Lock, title: "Flexible Security Solutions" },
  { icon: PoundSterling, title: "Competitive Pricing" },
  { icon: Clock, title: "One-Off or Long-Term Contracts" },
];

const areas = [
  "Hertford", "Ware", "St Albans", "Stevenage", "Bishop's Stortford",
  "Welwyn Garden City", "Hatfield", "Harpenden", "Hitchin",
  "All surrounding villages",
];

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Areas Covered" },
  { href: "#contact", label: "Contact Us" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background/85 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      {/* Full-width logo banner */}
      <a href="#home" className="block w-full bg-background border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-center">
          <img
            src={logoAsset.url}
            alt="HertsSec Security Services"
            className={`w-auto transition-all duration-300 ${scrolled ? "h-14 sm:h-16" : "h-20 sm:h-28 lg:h-32"}`}
          />
        </div>
      </a>
      {/* Nav row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <nav className="hidden lg:flex items-center gap-8 mx-auto">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-foreground/85 hover:text-brand transition-colors uppercase tracking-wide">
              {l.label}
            </a>
          ))}
          <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-white font-semibold uppercase tracking-wide ml-4">
            <a href="#quote">Request a Quote</a>
          </Button>
        </nav>
        <div className="lg:hidden ml-auto" />
        <button className="lg:hidden text-foreground p-2 ml-auto" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase tracking-wide text-foreground/85">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-brand hover:bg-brand/90 text-white font-semibold uppercase">
              <a href="#quote" onClick={() => setOpen(false)}>Request a Quote</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img src={heroImage} alt="Professional security officer outside modern office" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-56 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 mb-6">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/90">SIA Licensed · Hertfordshire</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] uppercase">
            Professional Security Services Across <span className="text-brand">Hertfordshire</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
            Reliable, professional and SIA-licensed security personnel protecting businesses, events and private clients across Hertfordshire.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-white h-14 px-8 text-base font-semibold uppercase tracking-wide shadow-[0_20px_50px_-15px_rgba(179,0,0,0.6)]">
              <a href="#quote">Get a Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-semibold uppercase tracking-wide bg-white/5 border-white/30 text-white hover:bg-white hover:text-background">
              <a href="#services">Our Services</a>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> 24/7 Coverage</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Locally Based</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Fully Insured</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl" data-reveal>
      <div className="flex items-center gap-3 mb-4">
        <div className="section-divider" />
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">{eyebrow}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold uppercase leading-tight">{title}</h2>
      {desc && <p className="mt-5 text-lg text-muted-foreground">{desc}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader eyebrow="About Us" title="Hertfordshire's Trusted Security Partner" />
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed" data-reveal>
            HertsSec Security Services is a Hertfordshire-based security company providing professional manned security solutions across Hertfordshire and surrounding areas. We deliver reliable security services for businesses, events and private clients, focusing on professionalism, visibility and customer service.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6" data-reveal>
            {[
              { n: "10+", l: "Service Lines" },
              { n: "24/7", l: "Availability" },
              { n: "100%", l: "SIA Licensed" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-brand pl-4">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative" data-reveal>
          <div className="absolute -inset-4 bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <img src={heroImage} alt="HertsSec security officer on duty" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 text-white">
                <ShieldCheck className="h-8 w-8 text-brand" />
                <div>
                  <div className="font-bold uppercase tracking-wide">SIA Approved</div>
                  <div className="text-xs text-white/70">Trained · Licensed · Vetted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-card relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Security Solutions"
          desc="From manned guarding to mobile patrols, we deliver end-to-end security services tailored to Hertfordshire businesses, sites and events."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              data-reveal
              style={{ animationDelay: `${i * 50}ms` }}
              className="group relative bg-background border border-border rounded-lg p-6 hover:border-brand transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-brand group-hover:w-full transition-all duration-500" />
              <div className="h-12 w-12 rounded-md bg-brand/10 border border-brand/30 flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors">
                <s.icon className="h-6 w-6 text-brand group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The HertsSec Standard"
          desc="Built on professionalism, local knowledge and genuine accountability."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {reasons.map((r) => (
            <div key={r.title} data-reveal className="bg-background p-8 flex items-start gap-5 hover:bg-card transition-colors">
              <div className="shrink-0 h-12 w-12 rounded-md bg-brand flex items-center justify-center">
                <r.icon className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="h-4 w-4 text-brand" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Standard</span>
                </div>
                <h3 className="text-lg font-bold uppercase">{r.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeader
            eyebrow="Areas Covered"
            title="Across Hertfordshire"
            desc="We provide security services throughout Hertfordshire and surrounding villages. If you don't see your town listed, get in touch — we likely cover it."
          />
          <ul className="mt-10 grid grid-cols-2 gap-3" data-reveal>
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-3 text-sm font-medium text-foreground/90">
                <MapPin className="h-4 w-4 text-brand shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal className="relative aspect-square rounded-lg border border-border bg-background overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
          <iframe
            title="Hertfordshire Coverage Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.65%2C51.65%2C0.20%2C52.10&layer=mapnik&marker=51.8055%2C-0.2008"
            className="w-full h-full grayscale contrast-125 brightness-75"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-brand/10 pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur border border-border rounded-md p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-brand flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-bold uppercase">Hertfordshire-wide coverage</div>
              <div className="text-xs text-muted-foreground">Hertford · St Albans · Stevenage · and beyond</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within 24 hours.");
    formRef.current?.reset();
  };
  return (
    <section id="quote" className="py-24 sm:py-32 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, #B30000 0%, transparent 50%)" }} />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-reveal>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="section-divider" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Request a Quote</span>
            <div className="section-divider" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold uppercase leading-tight">Get Your Free Security Quote</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Tell us about your requirements and we'll respond within 24 hours with a tailored, competitive quote.
          </p>
        </div>
        <form ref={formRef} onSubmit={onSubmit} data-reveal className="mt-12 bg-card border border-border rounded-lg p-6 sm:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" required><Input required name="name" /></Field>
            <Field label="Company Name"><Input name="company" /></Field>
            <Field label="Email" required><Input required type="email" name="email" /></Field>
            <Field label="Phone Number" required><Input required type="tel" name="phone" /></Field>
            <Field label="Type of Security Required" required><Input required name="type" placeholder="e.g. Construction Site Security" /></Field>
            <Field label="Location" required><Input required name="location" placeholder="e.g. St Albans" /></Field>
            <Field label="Date Required"><Input type="date" name="date" /></Field>
            <Field label="Duration"><Input name="duration" placeholder="e.g. 3 months / one-off" /></Field>
            <div className="sm:col-span-2">
              <Field label="Message"><Textarea name="message" rows={5} placeholder="Tell us more about your security needs..." /></Field>
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-8 w-full bg-brand hover:bg-brand/90 text-white h-14 text-base font-semibold uppercase tracking-wide">
            Request Quote
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
        {label}{required && <span className="text-brand"> *</span>}
      </Label>
      {children}
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        <a href="tel:07000000000" data-reveal className="group bg-card border border-border rounded-lg p-10 hover:border-brand transition-colors flex items-start gap-5">
          <div className="h-14 w-14 rounded-md bg-brand flex items-center justify-center shrink-0">
            <Phone className="h-7 w-7 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Call Us</div>
            <div className="text-2xl sm:text-3xl font-bold group-hover:text-brand transition-colors">07XXX XXX XXX</div>
            <div className="text-sm text-muted-foreground mt-2">24/7 enquiries — speak to a real person</div>
          </div>
        </a>
        <a href="mailto:info@hertssec.co.uk" data-reveal className="group bg-card border border-border rounded-lg p-10 hover:border-brand transition-colors flex items-start gap-5">
          <div className="h-14 w-14 rounded-md bg-brand flex items-center justify-center shrink-0">
            <Mail className="h-7 w-7 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email Us</div>
            <div className="text-2xl sm:text-3xl font-bold group-hover:text-brand transition-colors break-all">info@hertssec.co.uk</div>
            <div className="text-sm text-muted-foreground mt-2">We respond within 24 hours</div>
          </div>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="HertsSec Security Services" className="h-14 w-auto mb-5" />
          <p className="text-sm text-muted-foreground max-w-sm">
            HertsSec Security Services — Professional security across Hertfordshire. SIA-licensed manned guarding, event security and mobile patrols.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-10 w-10 rounded-md border border-border flex items-center justify-center hover:bg-brand hover:border-brand hover:text-white transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-brand transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 text-brand mt-0.5 shrink-0" /> 07XXX XXX XXX</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 text-brand mt-0.5 shrink-0" /> info@hertssec.co.uk</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-brand mt-0.5 shrink-0" /> Hertfordshire, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} HertsSec Security Services. All rights reserved.</div>
          <div>SIA Licensed · Fully Insured · Hertfordshire</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Areas />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
