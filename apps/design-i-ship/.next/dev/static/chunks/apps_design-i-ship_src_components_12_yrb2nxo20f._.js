(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/design-i-ship/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawRule",
    ()=>DrawRule,
    "EASE_OUT",
    ()=>EASE_OUT,
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$14$2e$9$2e$1_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@14.9.1_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$9$2e$1_react$2d$_132700914964da54b8351e3485d9e4fc$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@14.9.1_react-_132700914964da54b8351e3485d9e4fc/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const EASE_OUT = [
    0.22,
    1,
    0.36,
    1
];
function Reveal({ children, className, delay = 0, y = 24, amount = 0.25 }) {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$9$2e$1_react$2d$_132700914964da54b8351e3485d9e4fc$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (reduced) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/design-i-ship/src/components/Reveal.tsx",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$14$2e$9$2e$1_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount
        },
        transition: {
            duration: 0.7,
            ease: EASE_OUT,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/components/Reveal.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(Reveal, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$9$2e$1_react$2d$_132700914964da54b8351e3485d9e4fc$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
function DrawRule({ className = "" }) {
    _s1();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$9$2e$1_react$2d$_132700914964da54b8351e3485d9e4fc$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (reduced) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: className
        }, void 0, false, {
            fileName: "[project]/apps/design-i-ship/src/components/Reveal.tsx",
            lineNumber: 50,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$14$2e$9$2e$1_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        "aria-hidden": true,
        className: className,
        initial: {
            scaleX: 0
        },
        whileInView: {
            scaleX: 1
        },
        viewport: {
            once: true,
            amount: 1
        },
        transition: {
            duration: 0.9,
            ease: EASE_OUT,
            delay: 0.15
        },
        style: {
            transformOrigin: "left center"
        }
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/components/Reveal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s1(DrawRule, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$14$2e$9$2e$1_react$2d$_132700914964da54b8351e3485d9e4fc$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = DrawRule;
var _c, _c1;
__turbopack_context__.k.register(_c, "Reveal");
__turbopack_context__.k.register(_c1, "DrawRule");
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
        label: "Design I Ship"
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
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const menuRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollRuler.useEffect": ()=>{
            const marker = markerRef.current;
            const pctEl = pctRef.current;
            const current = currentRef.current;
            const next = nextRef.current;
            if (!marker || !pctEl || !current || !next) return;
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
                    swap(current, SECTIONS[active].label);
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
                "aria-hidden": true,
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
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, tickPct, false, {
                            fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ruler-tick minor",
                            style: {
                                top: `${tickPct}%`
                            }
                        }, tickPct, false, {
                            fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: markerRef,
                        className: "ruler-marker"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: pctRef,
                        className: "ruler-pct",
                        children: "000 %"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: currentRef,
                        className: "ruler-title"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: nextRef,
                        className: "ruler-next is-hidden"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 105,
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
                        lineNumber: 124,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s(ScrollRuler, "3zg4h8319cJ8xMmMopbYLTHVxQU=");
_c = ScrollRuler;
var _c;
__turbopack_context__.k.register(_c, "ScrollRuler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_design-i-ship_src_components_12_yrb2nxo20f._.js.map