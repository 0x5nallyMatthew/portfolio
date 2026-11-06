"use client";

import { useEffect, useRef } from "react";

const SECTIONS = [
  { id: "overview", label: "URDIS" },
  { id: "competencies", label: "Competencies" },
  { id: "methodology", label: "Methodology" },
  { id: "impact", label: "Impact" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

/* Ticks every 5% of ruler height; every 10% is major (28px) vs minor (14px) */
const TICKS = Array.from({ length: 21 }, (_, i) => i * 5);

export default function ScrollRuler() {
  const markerRef = useRef<HTMLDivElement | null>(null);
  const pctRef = useRef<HTMLSpanElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLSpanElement | null>(null);
  const menuRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const lastActiveRef = useRef(-1);

  useEffect(() => {
    const marker = markerRef.current;
    const pctEl = pctRef.current;
    const stack = stackRef.current;
    const next = nextRef.current;
    if (!marker || !pctEl || !stack || !next) return;

    let raf = 0;
    let queued = false;

    const swap = (el: HTMLElement, text: string | null) => {
      if (text === null) {
        el.classList.add("is-hidden");
        return;
      }
      if (el.textContent === text) {
        el.classList.remove("is-hidden");
        return;
      }
      el.classList.add("changing");
      window.setTimeout(() => {
        el.textContent = text;
        el.classList.remove("changing");
        el.classList.remove("is-hidden");
      }, 170);
    };

    /** Append a newly-passed section title (clickable) to the stack tail. */
    const stackTitle = (index: number) => {
      const link = document.createElement("a");
      link.href = `#${SECTIONS[index].id}`;
      link.textContent = SECTIONS[index].label;
      link.classList.add("changing");
      stack.append(link);
      window.setTimeout(() => link.classList.remove("changing"), 170);
    };

    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      const pctValue = Math.max(0, Math.min(100, Math.round(progress * 100)));

      marker.style.top = `${(progress * 100).toFixed(2)}%`;
      pctEl.style.top = `min(calc(${(progress * 100).toFixed(2)}% + 14px), calc(100% - 28px))`;
      pctEl.textContent = `${String(pctValue).padStart(3, "0")} %`;

      const mid = window.scrollY + window.innerHeight * 0.5;
      let active = 0;
      for (let i = 0; i < SECTIONS.length; i += 1) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= mid) active = i;
      }

      // title stack: sections passed while scrolling down accumulate on top;
      // scrolling back up pops them, so the stack mirrors the scroll depth
      const last = lastActiveRef.current;
      if (active !== last) {
        if (active > last) {
          for (let i = last + 1; i <= active; i += 1) stackTitle(i);
        } else {
          const remove = Math.min(stack.children.length, last - active);
          for (let i = 0; i < remove; i += 1) stack.lastElementChild?.remove();
        }
        lastActiveRef.current = active;
      }
      if (active > 0 && active + 1 < SECTIONS.length) {
        swap(next, SECTIONS[active + 1].label);
      } else {
        swap(next, null);
      }

      menuRefs.current.forEach((el, i) => {
        if (!el) return;
        const sectionIndex = i + 1;
        const visible = active === 0 || sectionIndex > active + 1;
        el.classList.toggle("is-hidden", !visible);
      });
    };

    const onScroll = () => {
      if (queued) return;
      queued = true;
      raf = window.requestAnimationFrame(() => {
        queued = false;
        raf = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <aside className="ruler">
        {TICKS.map((tickPct) =>
          tickPct % 10 === 0 ? (
            <span key={tickPct} className="ruler-tick major" style={{ top: `${tickPct}%` }}>
              <span className="ruler-num">{String(tickPct).padStart(2, "0")}</span>
            </span>
          ) : (
            
            <span key={tickPct} className="ruler-tick minor" style={{ top: `${tickPct}%` }} />
          ),
        )}
        <div ref={markerRef} className="ruler-marker" />
        <span ref={pctRef} className="ruler-pct">
          000 %
        </span>
        <div ref={stackRef} className="ruler-title-stack" />
        <span ref={nextRef} className="ruler-next is-hidden" />
        
      </aside>
      <nav aria-label="Sections" className="ruler-menu">
        {SECTIONS.slice(1).map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            ref={(el) => {
              menuRefs.current[i] = el;
            }}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </>
  );
}
