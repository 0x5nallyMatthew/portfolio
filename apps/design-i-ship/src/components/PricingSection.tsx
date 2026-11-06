import type { ReactNode } from "react";

/**
 * Flat-pricing split card (adapted from the AngelList SPV pricing aesthetic
 * to the Technical Brutalism system): value pitch + CTA on the left,
 * fee + feature list on the right. Sharp onyx cells with a gap-px divider,
 * ship-blue check marks, choreo reveals handled by the wrapping section.
 */

interface PricingFeature {
  label: string;
  isAddOn?: boolean;
}

function Check({ addOn }: { addOn?: boolean }) {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-1 shrink-0 text-ship"
    >
      {addOn ? <path d="M5 12h14" /> : <path d="M20 6 9 17l-5-5" />}
    </svg>
  );
}

export default function PricingSection({
  heading,
  subheading,
  price,
  feeLabel,
  features = [
    { label: "Design system & token architecture" },
    { label: "Interface build — Next.js & TypeScript" },
    { label: "Backend wiring & data contracts" },
    { label: "Performance budget & verification" },
    { label: "Ongoing React maintenance", isAddOn: true },
  ],
}: {
  heading?: ReactNode;
  subheading?: string;
  price?: string;
  feeLabel?: string;
  features?: PricingFeature[];
}) {
  return (
    <div data-reveal-group className="grid gap-px border-y border-line bg-line lg:grid-cols-2">
      {/* Left — pitch & CTA */}
      <div data-reveal className="flex flex-col justify-between gap-12 bg-onyx p-8 md:p-12 lg:p-16">
        <div>
          <h3 className="max-w-xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.035em] md:text-5xl">
            {heading ?? (
              <>
                Flat pricing for <span className="text-ship">every build size</span>.
              </>
            )}
          </h3>
          <p className="mt-6 max-w-md text-lg font-medium leading-relaxed text-mute">
            {subheading ??
              "Start with a working system for $100 — then scale the same codebase to production. No hourly meters, no scope fog."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a className="btn-primary" href="mailto:hello@urdis.studio">
            Start a build <span aria-hidden>→</span>
          </a>
          <a className="link-technical" href="#methodology">
            See how it works
          </a>
        </div>
      </div>

      {/* Right — fee & features */}
      <div data-reveal className="flex flex-col bg-onyx p-8 md:p-12 lg:p-16">
        <p className="mono-label text-mute">{feeLabel ?? "One-time build fee · starts at"}</p>
        <div className="font-display text-[clamp(3rem,5vw,4.75rem)] font-black leading-none tracking-[-0.03em]">
          {price ?? "$100"}
        </div>
        <p className="mono-label mt-4 text-mute">
          Prototype scope · <span className="text-ship">scales with the build</span>
        </p>

        <div className="my-10 border-t border-line" />

        <p className="mono-label text-mute">Included</p>
        <ul className="mt-6 space-y-4">
          {features.map((feature) => (
            <li key={feature.label} className="flex items-start gap-3">
              <Check addOn={feature.isAddOn} />
              <span
                className={
                  feature.isAddOn
                    ? "text-base font-medium leading-relaxed text-hull"
                    : "text-base font-medium leading-relaxed"
                }
              >
                {feature.label}
                {feature.isAddOn ? <span className="text-ship"> (+)</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
