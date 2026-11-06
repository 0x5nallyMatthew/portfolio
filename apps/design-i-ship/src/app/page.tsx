import type { ReactNode } from "react";
import Hero from "@/components/Hero";
import ArrowDownRight from "@/components/ArrowDownRight";
import Choreo from "@/components/Choreo";
import PricingSection from "@/components/PricingSection";
import ScrollRuler from "@/components/ScrollRuler";
import StackMarquee from "@/components/StackMarquee";

const NAV = [
  { id: "competencies", label: "Competencies" },
  { id: "methodology", label: "Methodology" },
  { id: "impact", label: "Impact" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

const COMPETENCIES = [
  {
    n: "01",
    t: "Design Systems",
    d: "Token architecture, primitives and documented components that keep a hundred screens speaking one language.",
  },
  {
    n: "02",
    t: "Interface Engineering",
    d: "React and Next.js builds where the interaction model is designed with the markup, not bolted on after it.",
  },
  {
    n: "03",
    t: "Application Architecture",
    d: "Types, boundaries and data flow sketched before code, so the next feature plugs in without forks.",
  },
  {
    n: "04",
    t: "Performance",
    d: "Budgeted Core Web Vitals, streamed rendering and images handled like engineering, not decoration.",
  },
  {
    n: "05",
    t: "Motion & Interaction",
    d: "Scroll choreography and micro-feedback measured in milliseconds, never in vibes.",
  },
  {
    n: "06",
    t: "Delivery & DX",
    d: "CI, preview environments and typechecked pipelines that make shipping the boring default.",
  },
];

const METHODOLOGY = [
  {
    n: "01",
    t: "Brief & constraints",
    d: "The brief becomes a numbered spec: scope, budget, risks. Anything not on the list is out of scope until it is re-numbered.",
  },
  {
    n: "02",
    t: "System map",
    d: "Pages, components and data contracts mapped on paper first — the cheapest place in the process to delete a feature.",
  },
  {
    n: "03",
    t: "Design language",
    d: "Type scale, palette and grid locked as tokens before screens. The system is a product; screens are instances.",
  },
  {
    n: "04",
    t: "Build the skeleton",
    d: "Routes, layout and empty states first. The shell runs against mocked data in the first week.",
  },
  {
    n: "05",
    t: "Wire real data",
    d: "Contracts go live one endpoint at a time, each verified against the map from step 02.",
  },
  {
    n: "06",
    t: "Verify the evidence",
    d: "Types, tests and performance checks measured with numbers. If it is not measurable, it is not done.",
  },
  {
    n: "07",
    t: "Ship & observe",
    d: "Deploy behind flags, watch the dashboards, and fold what was learned back into the system.",
  },
];

const IMPACT = [
  {
    n: "P/01",
    t: "Commerce replatform",
    d: "Headless storefront for a 40k-SKU retailer: ISR everywhere, edge caching and a checkout with zero flicker.",
    m: ["LCP 0.8S", "+38% CVR", "0 P1 SEV/90D"],
  },
  {
    n: "P/02",
    t: "Ops console",
    d: "A 40-screen internal tool rebuilt on one token set and six primitives; engineer onboarding dropped to a single afternoon.",
    m: ["40+ SCREENS", "1 TOKEN SET", "-64% BUNDLE"],
  },
  {
    n: "P/03",
    t: "Live telemetry",
    d: "Realtime fleet dashboard streaming 12k concurrent sockets into a canvas renderer with keyboard-first navigation.",
    m: ["12K WS CONNS", "99.98% UPTIME", "<50MS P95"],
  },
];

const FOOTER_INDEX = [
  { label: "Overview", href: "#overview" },
  { label: "Competencies", href: "#competencies" },
  { label: "Methodology", href: "#methodology" },
  { label: "Impact", href: "#impact" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_STACK = [
  { label: "Next.js", href: "https://nextjs.org" },
  { label: "React", href: "https://react.dev" },
  { label: "TypeScript", href: "https://www.typescriptlang.org" },
  { label: "Node", href: "https://nodejs.org" },
  { label: "Postgres", href: "https://www.postgresql.org" },
  { label: "Tailwind", href: "https://tailwindcss.com" },
];

const FOOTER_CONTACT = [
  { label: "hello@urdis.studio", href: "mailto:hello@urdis.studio" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

/** Drawn top hairline + corner crosshair ticks (populated by Choreo). */
function SectionRule() {
  return (
    <>
      <span
        aria-hidden
        data-draw-rule
        className="absolute inset-x-0 top-0 h-px origin-left bg-line"
      />
      <span aria-hidden data-draw-tick className="tick -top-[6px] -left-[6px]" />
      <span aria-hidden data-draw-tick className="tick -top-[6px] -right-[6px]" />
    </>
  );
}

/** Sticky HUD eyebrow bar — reveals with blur + rise on section entry. */
function Eyebrow({ index, name, meta }: { index: string; name: string; meta: string }) {
  return (
    <div
      data-draw-eyebrow
      className="sticky top-[74px] z-30 mt-px border-b border-line bg-onyx/70 backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-4 px-6 py-3 md:px-12">
        <p className="mono-label text-mute">
          <span className="text-ship">{index}</span> / {name}
        </p>
        <p className="mono-label hidden text-hull sm:block">{meta}</p>
      </div>
    </div>
  );
}

function SectionHead({
  title,
  lead,
}: {
  title: ReactNode;
  lead?: string;
}) {
  return (
    <div className="px-6 pt-16 md:px-12 md:pt-24">
      <h2
        data-reveal
        className="max-w-3xl font-display text-4xl font-extrabold leading-[0.94] tracking-[-0.035em] sm:text-5xl md:text-6xl"
      >
        {title}
      </h2>
      {lead ? (
        <p
          data-reveal
          className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-mute"
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[74px] border-b border-line bg-onyx">
      <div className="flex h-full items-center justify-between pl-6 pr-[84px] md:pl-12 lg:pr-[176px]">
        <a href="#overview" className="flex items-baseline gap-3">
          <span className="font-display text-lg font-extrabold tracking-[-0.03em] whitespace-nowrap">
            URD<span className="text-ship">I</span>S
          </span>
          <span className="mono-label hidden text-mute sm:inline">Your design / I ship</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a key={item.id} className="link-technical" href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="bg-ink px-5 py-3 font-mono text-[11px] font-bold tracking-[0.16em] text-onyx uppercase transition-colors duration-200 hover:bg-ship"
        >
          Start a project
        </a>
      </div>
    </header>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div data-reveal className="bg-onyx">
      <div className="p-8 md:p-12">
        <p className="mono-label text-mute">{title}</p>
        <ul className="mt-8 space-y-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className="link-technical"
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen pr-[60px] lg:pr-[152px]">
      {/* 72px blueprint grid behind everything */}
      <div aria-hidden className="grid-field" />
      <ScrollRuler />
      <Header />
      <Choreo />

      <div className="relative z-10">
        {/* 01 — Overview */}
        <Hero />

        {/* Need to fix this */}
        
        {/* <StackMarquee /> */} 

        {/* 02 — Competencies */}
        <section id="competencies" data-choreo className="relative pb-28 md:pb-36">
          <SectionRule />
          <Eyebrow index="02" name="Competencies" meta="06 disciplines · grid 3×2" />
          <SectionHead
            title={
              <>
                Full-stack, end to end — <span className="text-ship">one accountable line</span>.
              </>
            }
            lead="Six disciplines, one partner. Every engagement starts at the system level and ends in production."
          />
          <div
            data-reveal-group
            className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          >
            {COMPETENCIES.map((c) => (
              <article key={c.n} data-reveal className="card flex h-full flex-col bg-onyx p-8">
                <span className="badge self-start">{c.n}</span>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">{c.t}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-mute">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 03 — Methodology */}
        <section id="methodology" data-choreo className="relative pb-28 md:pb-36">
          <SectionRule />
          <Eyebrow index="03" name="Methodology" meta="07 steps · numbered" />
          <SectionHead
            title={
              <>
                Seven steps. <span className="text-ship">No alchemy.</span>
              </>
            }
            lead="Process in numbered rows — each one prefixed, time-boxed and verifiable before the next unlocks."
          />
          <div className="mt-16 border-b border-line">
            {METHODOLOGY.map((m) => (
              <div
                key={m.n}
                data-reveal
                className="border-t border-line px-6 py-7 transition-colors duration-300 hover:bg-ship/[0.04] md:px-12"
              >
                <div className="grid items-baseline gap-x-8 gap-y-2 sm:grid-cols-[90px_minmax(180px,280px)_1fr]">
                  <span className="mono-label text-ship">M/{m.n}</span>
                  <h3 className="mt-2 text-lg font-semibold sm:mt-0">{m.t}</h3>
                  <p className="text-base font-medium leading-relaxed text-mute">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 — Impact */}
        <section id="impact" data-choreo className="relative pb-28 md:pb-36">
   <SectionRule />
          <Eyebrow index="04" name="Impact" meta="03 builds · shipped" />
          <SectionHead
            title={
              <>
                Shipped, measured, <span className="text-ship">in production</span>.
              </>
            }
            lead="Selected builds that survived contact with real users, with the numbers to back it up."
          />
          <div
            data-reveal-group
            className="mt-16 grid gap-px border-y border-line bg-line md:grid-cols-3"
          >
            {IMPACT.map((p) => (
              <article key={p.n} data-reveal className="card flex h-full flex-col bg-onyx p-8">
                <span className="badge self-start">{p.n}</span>
                <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">{p.t}</h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-mute">{p.d}</p>
                <div className="mono-label mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-ship">
                  {p.m.map((metric) => (
                    <span key={metric}>{metric}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 05 — Pricing */}
        <section id="pricing" data-choreo className="relative pb-28 md:pb-36">
          <SectionRule />
          <Eyebrow index="05" name="Pricing" meta="01 fee · 00 surprises" />
          <div className="px-6 pt-16 md:px-12 md:pt-24">
            <PricingSection />
          </div>
        </section>

        {/* 06 — Contact */}
        <section
          id="contact"
          data-choreo
          className="relative px-6 pb-32 text-center md:px-12 md:pb-44"
        >
          <SectionRule />
          <Eyebrow index="06" name="Contact" meta="UTC+07:00" />
          <div data-reveal-group data-reveal-stagger className="pt-16 md:pt-24">
            <h2
              data-reveal
              className="mx-auto max-w-4xl font-display text-[clamp(2.75rem,7.5vw,6.25rem)] font-black leading-[0.94] tracking-[-0.05em]"
            >
              Have a build that needs to <span className="text-ship">ship</span>?
            </h2>
            <p
              data-reveal
              className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-mute"
            >
              Design systems, product engineering and fullstack architecture — scoped in numbers,
              delivered on a date.
            </p>
            <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a className="btn-primary" href="mailto:hello@urdis.studio">
                hello@urdis.studio <ArrowDownRight />
              </a>
              <a className="btn-ghost" href="#overview">
                Back to top
              </a>
            </div>
            <p data-reveal className="mono-label mt-16 text-mute">
              Availability: Q3 2026 · Two seats open · UTC+07:00
            </p>
          </div>
        </section>

        {/* Mega footer */}
        <footer data-choreo className="relative">
          <SectionRule />
          <div data-reveal-group className="mt-px grid gap-px bg-line md:grid-cols-4">
            <div data-reveal className="bg-onyx">
              <div className="p-8 md:p-12">
                <div className="font-display text-[clamp(3.5rem,6vw,5.5rem)] font-black leading-none tracking-[-0.06em]">
                  URD<span className="text-ship">I</span>S
                </div>
                <p className="mono-label mt-8 text-mute">Your design I ship</p>
                <p className="mt-4 max-w-xs text-base font-medium leading-relaxed text-mute">
                  Your design, shipped to production. Fullstack architecture &amp; interface
                  engineering — one accountable pair of hands from spec to deploy.
                </p>
              </div>
            </div>
            <FooterCol title="Index" links={FOOTER_INDEX} />
            <FooterCol title="Stack" links={FOOTER_STACK} />
            <FooterCol title="Contact" links={FOOTER_CONTACT} />
          </div>
          <div data-reveal data-reveal-soft>
            <div className="flex flex-col gap-3 border-t border-line px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12">
              <span className="mono-label text-mute">
                © 2026 URDIS — your design / I ship — all systems nominal
              </span>
              <span className="mono-label text-mute">Ho Chi Minh City, D1 · 10.78°N 106.70°E</span>
              <span className="mono-label text-mute">
                Ship blue <span className="text-ship">#6B9EFF</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
