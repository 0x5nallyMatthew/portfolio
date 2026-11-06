(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/design-i-ship/src/components/Choreo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Choreo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.15.1/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/gsap@3.15.1/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
 */ const HIDDEN = {
    autoAlpha: 0,
    y: 28,
    filter: "blur(8px)"
};
const REVEAL = {
    autoAlpha: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "power3.out",
    overwrite: true,
    clearProps: "all"
};
function Choreo() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Choreo.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].matchMedia();
            mm.add("(prefers-reduced-motion: no-preference)", {
                "Choreo.useEffect": ()=>{
                    // --- section choreography: draw rule, rise eyebrow, pop ticks ---------
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray("[data-choreo]").forEach({
                        "Choreo.useEffect": (section)=>{
                            const rule = section.querySelector("[data-draw-rule]");
                            const ticks = section.querySelectorAll("[data-draw-tick]");
                            const eyebrow = section.querySelector("[data-draw-eyebrow]");
                            if (rule) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(rule, {
                                scaleX: 0
                            });
                            if (ticks.length) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(ticks, {
                                scale: 0,
                                opacity: 0
                            });
                            if (eyebrow) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(eyebrow, HIDDEN);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: section,
                                start: "top 88%",
                                once: true,
                                onEnter: {
                                    "Choreo.useEffect": ()=>{
                                        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
                                        if (rule) {
                                            tl.to(rule, {
                                                scaleX: 1,
                                                duration: 0.7,
                                                ease: "power2.out",
                                                clearProps: "all"
                                            }, 0);
                                        }
                                        if (eyebrow) {
                                            tl.to(eyebrow, {
                                                ...REVEAL
                                            }, 0.15);
                                        }
                                        if (ticks.length) {
                                            tl.to(ticks, {
                                                scale: 1,
                                                opacity: 1,
                                                duration: 0.35,
                                                ease: "power3.out",
                                                stagger: 0.06,
                                                clearProps: "all"
                                            }, 0.35);
                                        }
                                    }
                                }["Choreo.useEffect"]
                            });
                        }
                    }["Choreo.useEffect"]);
                    // --- individual reveals (outside of groups) ----------------------------
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray("[data-reveal]:not([data-reveal-group] [data-reveal])").forEach({
                        "Choreo.useEffect": (el)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, HIDDEN);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                trigger: el,
                                // soft reveals (page-end strips that can never cross "top 85%")
                                // fire as soon as their bottom edge fully enters the viewport
                                start: el.hasAttribute("data-reveal-soft") ? "top 100%" : "top 85%",
                                once: true,
                                onEnter: {
                                    "Choreo.useEffect": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, REVEAL);
                                    }
                                }["Choreo.useEffect"]
                            });
                        }
                    }["Choreo.useEffect"]);
                    // --- reveal groups: left→right cascade (or index stagger for hero) -----
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.toArray("[data-reveal-group]").forEach({
                        "Choreo.useEffect": (group)=>{
                            const items = Array.from(group.querySelectorAll("[data-reveal]"));
                            if (!items.length) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(items, HIDDEN);
                            if (group.hasAttribute("data-reveal-stagger")) {
                                items.forEach({
                                    "Choreo.useEffect": (item, i)=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                            trigger: item,
                                            start: "top 88%",
                                            once: true,
                                            onEnter: {
                                                "Choreo.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(item, {
                                                        ...REVEAL,
                                                        delay: i * 0.08
                                                    })
                                            }["Choreo.useEffect"]
                                        });
                                    }
                                }["Choreo.useEffect"]);
                                return;
                            }
                            const groupRect = group.getBoundingClientRect();
                            items.forEach({
                                "Choreo.useEffect": (item)=>{
                                    const delay = groupRect.width > 0 ? (item.getBoundingClientRect().left - groupRect.left) / groupRect.width * 0.18 : 0;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                                        trigger: item,
                                        start: "top 88%",
                                        once: true,
                                        onEnter: {
                                            "Choreo.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(item, {
                                                    ...REVEAL,
                                                    delay
                                                })
                                        }["Choreo.useEffect"]
                                    });
                                }
                            }["Choreo.useEffect"]);
                        }
                    }["Choreo.useEffect"]);
                }
            }["Choreo.useEffect"]);
            // layout settles after webfonts load — recompute trigger positions
            if (typeof document !== "undefined" && "fonts" in document) {
                document.fonts.ready.then({
                    "Choreo.useEffect": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$gsap$40$3$2e$15$2e$1$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                }["Choreo.useEffect"]);
            }
            return ({
                "Choreo.useEffect": ()=>{
                    mm.revert();
                }
            })["Choreo.useEffect"];
        }
    }["Choreo.useEffect"], []);
    return null;
}
_s(Choreo, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Choreo;
var _c;
__turbopack_context__.k.register(_c, "Choreo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollRuler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SECTIONS = [
    {
        id: "overview",
        label: "URDIS"
    },
    {
        id: "competencies",
        label: "Competencies"
    },
    {
        id: "methodology",
        label: "Methodology"
    },
    {
        id: "impact",
        label: "Impact"
    },
    {
        id: "pricing",
        label: "Pricing"
    },
    {
        id: "contact",
        label: "Contact"
    }
];
/* Ticks every 5% of ruler height; every 10% is major (28px) vs minor (14px) */ const TICKS = Array.from({
    length: 21
}, (_, i)=>i * 5);
function ScrollRuler() {
    _s();
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pctRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollRuler.useEffect": ()=>{
            const marker = markerRef.current;
            const pctEl = pctRef.current;
            const stack = stackRef.current;
            const next = nextRef.current;
            if (!marker || !pctEl || !stack || !next) return;
            let raf = 0;
            let queued = false;
            const swap = {
                "ScrollRuler.useEffect.swap": (el, text)=>{
                    if (text === null) {
                        el.classList.add("is-hidden");
                        return;
                    }
                    if (el.textContent === text) {
                        el.classList.remove("is-hidden");
                        return;
                    }
                    el.classList.add("changing");
                    window.setTimeout({
                        "ScrollRuler.useEffect.swap": ()=>{
                            el.textContent = text;
                            el.classList.remove("changing");
                            el.classList.remove("is-hidden");
                        }
                    }["ScrollRuler.useEffect.swap"], 170);
                }
            }["ScrollRuler.useEffect.swap"];
            /** Append a newly-passed section title (clickable) to the stack tail. */ const stackTitle = {
                "ScrollRuler.useEffect.stackTitle": (index)=>{
                    const link = document.createElement("a");
                    link.href = `#${SECTIONS[index].id}`;
                    link.textContent = SECTIONS[index].label;
                    link.classList.add("changing");
                    stack.append(link);
                    window.setTimeout({
                        "ScrollRuler.useEffect.stackTitle": ()=>link.classList.remove("changing")
                    }["ScrollRuler.useEffect.stackTitle"], 170);
                }
            }["ScrollRuler.useEffect.stackTitle"];
            const update = {
                "ScrollRuler.useEffect.update": ()=>{
                    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
                    const pctValue = Math.max(0, Math.min(100, Math.round(progress * 100)));
                    marker.style.top = `${(progress * 100).toFixed(2)}%`;
                    pctEl.style.top = `min(calc(${(progress * 100).toFixed(2)}% + 14px), calc(100% - 28px))`;
                    pctEl.textContent = `${String(pctValue).padStart(3, "0")} %`;
                    const mid = window.scrollY + window.innerHeight * 0.5;
                    let active = 0;
                    for(let i = 0; i < SECTIONS.length; i += 1){
                        const section = document.getElementById(SECTIONS[i].id);
                        if (section && section.offsetTop <= mid) active = i;
                    }
                    // title stack: sections passed while scrolling down accumulate on top;
                    // scrolling back up pops them, so the stack mirrors the scroll depth
                    const last = lastActiveRef.current;
                    if (active !== last) {
                        if (active > last) {
                            for(let i = last + 1; i <= active; i += 1)stackTitle(i);
                        } else {
                            const remove = Math.min(stack.children.length, last - active);
                            for(let i = 0; i < remove; i += 1)stack.lastElementChild?.remove();
                        }
                        lastActiveRef.current = active;
                    }
                    if (active > 0 && active + 1 < SECTIONS.length) {
                        swap(next, SECTIONS[active + 1].label);
                    } else {
                        swap(next, null);
                    }
                    menuRefs.current.forEach({
                        "ScrollRuler.useEffect.update": (el, i)=>{
                            if (!el) return;
                            const sectionIndex = i + 1;
                            const visible = active === 0 || sectionIndex > active + 1;
                            el.classList.toggle("is-hidden", !visible);
                        }
                    }["ScrollRuler.useEffect.update"]);
                }
            }["ScrollRuler.useEffect.update"];
            const onScroll = {
                "ScrollRuler.useEffect.onScroll": ()=>{
                    if (queued) return;
                    queued = true;
                    raf = window.requestAnimationFrame({
                        "ScrollRuler.useEffect.onScroll": ()=>{
                            queued = false;
                            raf = 0;
                            update();
                        }
                    }["ScrollRuler.useEffect.onScroll"]);
                }
            }["ScrollRuler.useEffect.onScroll"];
            update();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            window.addEventListener("resize", onScroll);
            return ({
                "ScrollRuler.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    window.removeEventListener("resize", onScroll);
                    if (raf) window.cancelAnimationFrame(raf);
                }
            })["ScrollRuler.useEffect"];
        }
    }["ScrollRuler.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "ruler",
                children: [
                    TICKS.map((tickPct)=>tickPct % 10 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ruler-tick major",
                            style: {
                                top: `${tickPct}%`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ruler-num",
                                children: String(tickPct).padStart(2, "0")
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        }, tickPct, false, {
                            fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ruler-tick minor",
                            style: {
                                top: `${tickPct}%`
                            }
                        }, tickPct, false, {
                            fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: markerRef,
                        className: "ruler-marker"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: pctRef,
                        className: "ruler-pct",
                        children: "000 %"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: stackRef,
                        className: "ruler-title-stack"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: nextRef,
                        className: "ruler-next is-hidden"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Sections",
                className: "ruler-menu",
                children: SECTIONS.slice(1).map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `#${s.id}`,
                        ref: (el)=>{
                            menuRefs.current[i] = el;
                        },
                        children: s.label
                    }, s.id, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(ScrollRuler, "cgaLIKHOHOwuBi7zid4DyTi3k7M=");
_c = ScrollRuler;
var _c;
__turbopack_context__.k.register(_c, "ScrollRuler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_design-i-ship_src_components_1jxqr2nzfxnla._.js.map