"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Exact port of the craft-anything scroll choreography (GSAP + ScrollTrigger):
 *
 * [data-choreo] sections — triggered once at "top 88%":
 *   [data-draw-rule]    top hairline draws scaleX 0→1 (0.7s power2.out), at t=0
 *   [data-draw-eyebrow] sticky HUD bar rises from y:28 + blur(8px) (0.9s power3.out), at t=0.15
 *   [data-draw-tick]    corner crosshairs pop scale 0→1 (0.35s power3.out, stagger 0.06), at t=0.35
 *
 * [data-reveal] singles — hidden {autoAlpha:0, y:28, blur(8px)}, triggered
 * once at "top 85%".
 *
 * [data-reveal-group] — children hidden, then each triggers at "top 88%" with
 * a left→right cascade delay (horizontal position / group width × 0.18).
 * With [data-reveal-stagger] (hero) the delay is index × 0.08 instead.
 *
 * Everything is disabled under prefers-reduced-motion, mirroring the source.
 */

const HIDDEN = { autoAlpha: 0, y: 28, filter: "blur(8px)" };
const REVEAL = {
  autoAlpha: 1,
  y: 0,
  filter: "blur(0px)",
  duration: 0.9,
  ease: "power3.out",
  overwrite: true,
  clearProps: "all",
};

export default function Choreo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // --- section choreography: draw rule, rise eyebrow, pop ticks ---------
      gsap.utils.toArray<HTMLElement>("[data-choreo]").forEach((section) => {
        const rule = section.querySelector<HTMLElement>("[data-draw-rule]");
        const ticks = section.querySelectorAll<HTMLElement>("[data-draw-tick]");
        const eyebrow = section.querySelector<HTMLElement>("[data-draw-eyebrow]");

        if (rule) gsap.set(rule, { scaleX: 0 });
        if (ticks.length) gsap.set(ticks, { scale: 0, opacity: 0 });
        if (eyebrow) gsap.set(eyebrow, HIDDEN);

        ScrollTrigger.create({
          trigger: section,
          start: "top 88%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            if (rule) {
              tl.to(
                rule,
                { scaleX: 1, duration: 0.7, ease: "power2.out", clearProps: "all" },
                0,
              );
            }
            if (eyebrow) {
              tl.to(eyebrow, { ...REVEAL }, 0.15);
            }
            if (ticks.length) {
              tl.to(
                ticks,
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.35,
                  ease: "power3.out",
                  stagger: 0.06,
                  clearProps: "all",
                },
                0.35,
              );
            }
          },
        });
      });

      // --- individual reveals (outside of groups) ----------------------------
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]:not([data-reveal-group] [data-reveal])")
        .forEach((el) => {
          gsap.set(el, HIDDEN);
          ScrollTrigger.create({
            trigger: el,
            // soft reveals (page-end strips that can never cross "top 85%")
            // fire as soon as their bottom edge fully enters the viewport
            start: el.hasAttribute("data-reveal-soft") ? "top 100%" : "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(el, REVEAL);
            },
          });
        });

      // --- reveal groups: left→right cascade (or index stagger for hero) -----
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = Array.from(group.querySelectorAll<HTMLElement>("[data-reveal]"));
        if (!items.length) return;
        gsap.set(items, HIDDEN);

        if (group.hasAttribute("data-reveal-stagger")) {
          items.forEach((item, i) => {
            ScrollTrigger.create({
              trigger: item,
              start: "top 88%",
              once: true,
              onEnter: () => gsap.to(item, { ...REVEAL, delay: i * 0.08 }),
            });
          });
          return;
        }

        const groupRect = group.getBoundingClientRect();
        items.forEach((item) => {
          const delay =
            groupRect.width > 0
              ? (item.getBoundingClientRect().left - groupRect.left) / groupRect.width * 0.18
              : 0;
          ScrollTrigger.create({
            trigger: item,
            start: "top 88%",
            once: true,
            onEnter: () => gsap.to(item, { ...REVEAL, delay }),
          });
        });
      });
    });

    // layout settles after webfonts load — recompute trigger positions
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    return () => {
      mm.revert();
    };
  }, []);

  return null;
}
