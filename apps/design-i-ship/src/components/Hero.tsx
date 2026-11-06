import ArrowDownRight from "@/components/ArrowDownRight";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Corner mono labels */}
      <div aria-hidden data-reveal className="pointer-events-none absolute inset-0">
        <span className="mono-label absolute top-[98px] left-6 text-mute">01 / Overview</span>
        <span className="mono-label absolute top-[98px] right-[84px] hidden text-mute sm:block lg:hidden">
          Fullstack Architect
        </span>
        <span className="mono-label absolute bottom-8 left-6 hidden text-mute md:block">
          EST. 2019 · UTC+07:00
        </span>
        <span className="mono-label absolute right-[84px] bottom-8 text-mute lg:right-[176px]">
          Scroll <span className="hint-bob inline-block text-ship">↓</span>
        </span>
      </div>

      {/* Centered content — blur-rise stagger intro driven by Choreo */}
      <div data-reveal-group data-reveal-stagger className="flex flex-col items-center">
        <span data-reveal className="badge">
          06+
        </span>

        <h1
          data-reveal
          className="font-display text-[clamp(3.25rem,8.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]"
        >
          Your design, <br />
          <span className="text-ship">I ship.</span>
        </h1>

        <p data-reveal className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-mute">
          You hand over the design. I turn it into systems, product interfaces and backend
          architecture — numbered, built and shipped by the same pair of hands.
        </p>

        <div data-reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#competencies" className="btn-primary">
            Explore the system <ArrowDownRight />
          </a>
          <a href="#contact" className="btn-ghost">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
