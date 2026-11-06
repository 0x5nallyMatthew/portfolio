/**
 * Full-width stack marquee: a seamless 28s linear loop of discipline words,
 * every alternate word in ship-blue, the rest paper-white. Content is
 * duplicated into two identical groups so the -50% keyframe is seamless.
 */

const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Node",
  "Postgres",
  "Tailwind",
  "Turborepo",
  "Docker",
  "Microservices",
  "Redis",
  "SQL",
  "NoSQL",
  "Nest",
  "Blockchain",
];

// repeated so one group alone is wide enough to cover the viewport
const RUN = [...TECH, ...TECH];

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-10 py-3.5 pr-10"
    >
      {RUN.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={`mono-label whitespace-nowrap ${i % 2 === 1 ? "text-ship" : "text-ink"}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

export default function StackMarquee() {
  return (
    <section aria-label="Engineering stack" className="border-y border-ink/25 bg-onyx">
      <div className="marquee-track whitespace-nowrap">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </section>
  );
}
