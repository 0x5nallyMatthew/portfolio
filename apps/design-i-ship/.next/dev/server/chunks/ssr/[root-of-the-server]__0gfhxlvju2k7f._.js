module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/apps/design-i-ship/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ArrowDownRight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Choreo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/Choreo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$PricingSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/PricingSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const NAV = [
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
const COMPETENCIES = [
    {
        n: "01",
        t: "Design Systems",
        d: "Token architecture, primitives and documented components that keep a hundred screens speaking one language."
    },
    {
        n: "02",
        t: "Interface Engineering",
        d: "React and Next.js builds where the interaction model is designed with the markup, not bolted on after it."
    },
    {
        n: "03",
        t: "Application Architecture",
        d: "Types, boundaries and data flow sketched before code, so the next feature plugs in without forks."
    },
    {
        n: "04",
        t: "Performance",
        d: "Budgeted Core Web Vitals, streamed rendering and images handled like engineering, not decoration."
    },
    {
        n: "05",
        t: "Motion & Interaction",
        d: "Scroll choreography and micro-feedback measured in milliseconds, never in vibes."
    },
    {
        n: "06",
        t: "Delivery & DX",
        d: "CI, preview environments and typechecked pipelines that make shipping the boring default."
    }
];
const METHODOLOGY = [
    {
        n: "01",
        t: "Brief & constraints",
        d: "The brief becomes a numbered spec: scope, budget, risks. Anything not on the list is out of scope until it is re-numbered."
    },
    {
        n: "02",
        t: "System map",
        d: "Pages, components and data contracts mapped on paper first — the cheapest place in the process to delete a feature."
    },
    {
        n: "03",
        t: "Design language",
        d: "Type scale, palette and grid locked as tokens before screens. The system is a product; screens are instances."
    },
    {
        n: "04",
        t: "Build the skeleton",
        d: "Routes, layout and empty states first. The shell runs against mocked data in the first week."
    },
    {
        n: "05",
        t: "Wire real data",
        d: "Contracts go live one endpoint at a time, each verified against the map from step 02."
    },
    {
        n: "06",
        t: "Verify the evidence",
        d: "Types, tests and performance checks measured with numbers. If it is not measurable, it is not done."
    },
    {
        n: "07",
        t: "Ship & observe",
        d: "Deploy behind flags, watch the dashboards, and fold what was learned back into the system."
    }
];
const IMPACT = [
    {
        n: "P/01",
        t: "Commerce replatform",
        d: "Headless storefront for a 40k-SKU retailer: ISR everywhere, edge caching and a checkout with zero flicker.",
        m: [
            "LCP 0.8S",
            "+38% CVR",
            "0 P1 SEV/90D"
        ]
    },
    {
        n: "P/02",
        t: "Ops console",
        d: "A 40-screen internal tool rebuilt on one token set and six primitives; engineer onboarding dropped to a single afternoon.",
        m: [
            "40+ SCREENS",
            "1 TOKEN SET",
            "-64% BUNDLE"
        ]
    },
    {
        n: "P/03",
        t: "Live telemetry",
        d: "Realtime fleet dashboard streaming 12k concurrent sockets into a canvas renderer with keyboard-first navigation.",
        m: [
            "12K WS CONNS",
            "99.98% UPTIME",
            "<50MS P95"
        ]
    }
];
const FOOTER_INDEX = [
    {
        label: "Overview",
        href: "#overview"
    },
    {
        label: "Competencies",
        href: "#competencies"
    },
    {
        label: "Methodology",
        href: "#methodology"
    },
    {
        label: "Impact",
        href: "#impact"
    },
    {
        label: "Pricing",
        href: "#pricing"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
const FOOTER_STACK = [
    {
        label: "Next.js",
        href: "https://nextjs.org"
    },
    {
        label: "React",
        href: "https://react.dev"
    },
    {
        label: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        label: "Node",
        href: "https://nodejs.org"
    },
    {
        label: "Postgres",
        href: "https://www.postgresql.org"
    },
    {
        label: "Tailwind",
        href: "https://tailwindcss.com"
    }
];
const FOOTER_CONTACT = [
    {
        label: "hello@urdis.studio",
        href: "mailto:hello@urdis.studio"
    },
    {
        label: "GitHub",
        href: "https://github.com"
    },
    {
        label: "X / Twitter",
        href: "https://x.com"
    }
];
/** Drawn top hairline + corner crosshair ticks (populated by Choreo). */ function SectionRule() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                "data-draw-rule": true,
                className: "absolute inset-x-0 top-0 h-px origin-left bg-line"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                "data-draw-tick": true,
                className: "tick -top-[6px] -left-[6px]"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                "data-draw-tick": true,
                className: "tick -top-[6px] -right-[6px]"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
/** Sticky HUD eyebrow bar — reveals with blur + rise on section entry. */ function Eyebrow({ index, name, meta }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-draw-eyebrow": true,
        className: "sticky top-[74px] z-30 mt-px border-b border-line bg-onyx/70 backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-4 px-6 py-3 md:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono-label text-mute",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-ship",
                            children: index
                        }, void 0, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        " / ",
                        name
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono-label hidden text-hull sm:block",
                    children: meta
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
function SectionHead({ title, lead }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-6 pt-16 md:px-12 md:pt-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                "data-reveal": true,
                className: "max-w-3xl font-display text-4xl font-extrabold leading-[0.94] tracking-[-0.035em] sm:text-5xl md:text-6xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            lead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "data-reveal": true,
                className: "mt-6 max-w-2xl text-lg font-medium leading-relaxed text-mute",
                children: lead
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-40 h-[74px] border-b border-line bg-onyx",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full items-center justify-between pl-6 pr-[84px] md:pl-12 lg:pr-[176px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#overview",
                    className: "flex items-baseline gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-lg font-extrabold tracking-[-0.03em] whitespace-nowrap",
                            children: [
                                "URD",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ship",
                                    children: "I"
                                }, void 0, false, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 16
                                }, this),
                                "S"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mono-label hidden text-mute sm:inline",
                            children: "Your design / I ship"
                        }, void 0, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "aria-label": "Primary",
                    className: "hidden items-center gap-8 lg:flex",
                    children: NAV.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "link-technical",
                            href: `#${item.id}`,
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    className: "bg-ink px-5 py-3 font-mono text-[11px] font-bold tracking-[0.16em] text-onyx uppercase transition-colors duration-200 hover:bg-ship",
                    children: "Start a project"
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
function FooterCol({ title, links }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-reveal": true,
        className: "bg-onyx",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 md:p-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono-label text-mute",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-8 space-y-4",
                    children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "link-technical",
                                href: link.href,
                                ...link.href.startsWith("http") ? {
                                    target: "_blank",
                                    rel: "noreferrer"
                                } : {},
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this)
                        }, link.label, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 223,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 222,
        columnNumber: 5
    }, this);
}
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen pr-[60px] lg:pr-[152px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "grid-field"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Choreo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "competencies",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "02",
                                name: "Competencies",
                                meta: "06 disciplines · grid 3×2"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Full-stack, end to end — ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ship",
                                            children: "one accountable line"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 42
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this),
                                lead: "Six disciplines, one partner. Every engagement starts at the system level and ends in production."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal-group": true,
                                className: "mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-3",
                                children: COMPETENCIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        "data-reveal": true,
                                        className: "card flex h-full flex-col bg-onyx p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge self-start",
                                                children: c.n
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-8 text-lg font-semibold tracking-[-0.01em]",
                                                children: c.t
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-base font-medium leading-relaxed text-mute",
                                                children: c.d
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, c.n, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "methodology",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "03",
                                name: "Methodology",
                                meta: "07 steps · numbered"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Seven steps. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ship",
                                            children: "No alchemy."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this),
                                lead: "Process in numbered rows — each one prefixed, time-boxed and verifiable before the next unlocks."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 border-b border-line",
                                children: METHODOLOGY.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-reveal": true,
                                        className: "border-t border-line px-6 py-7 transition-colors duration-300 hover:bg-ship/[0.04] md:px-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid items-baseline gap-x-8 gap-y-2 sm:grid-cols-[90px_minmax(180px,280px)_1fr]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mono-label text-ship",
                                                    children: [
                                                        "M/",
                                                        m.n
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-2 text-lg font-semibold sm:mt-0",
                                                    children: m.t
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-medium leading-relaxed text-mute",
                                                    children: m.d
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this)
                                    }, m.n, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "impact",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 317,
                                columnNumber: 4
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "04",
                                name: "Impact",
                                meta: "03 builds · shipped"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHead, {
                                title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Shipped, measured, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ship",
                                            children: "in production"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 36
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 15
                                }, this),
                                lead: "Selected builds that survived contact with real users, with the numbers to back it up."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal-group": true,
                                className: "mt-16 grid gap-px border-y border-line bg-line md:grid-cols-3",
                                children: IMPACT.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        "data-reveal": true,
                                        className: "card flex h-full flex-col bg-onyx p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge self-start",
                                                children: p.n
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-8 text-lg font-semibold tracking-[-0.01em]",
                                                children: p.t
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-base font-medium leading-relaxed text-mute",
                                                children: p.d
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mono-label mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-ship",
                                                children: p.m.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: metric
                                                    }, metric, false, {
                                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                        lineNumber: 338,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.n, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pricing",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "05",
                                name: "Pricing",
                                meta: "01 fee · 00 surprises"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 pt-16 md:px-12 md:pt-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$PricingSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        "data-choreo": true,
                        className: "relative px-6 pb-32 text-center md:px-12 md:pb-44",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "06",
                                name: "Contact",
                                meta: "UTC+07:00"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal-group": true,
                                "data-reveal-stagger": true,
                                className: "pt-16 md:pt-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-reveal": true,
                                        className: "mx-auto max-w-4xl font-display text-[clamp(2.75rem,7.5vw,6.25rem)] font-black leading-[0.94] tracking-[-0.05em]",
                                        children: [
                                            "Have a build that needs to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ship",
                                                children: "ship"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 368,
                                                columnNumber: 42
                                            }, this),
                                            "?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-reveal": true,
                                        className: "mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-mute",
                                        children: "Design systems, product engineering and fullstack architecture — scoped in numbers, delivered on a date."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-reveal": true,
                                        className: "mt-12 flex flex-wrap items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "btn-primary",
                                                href: "mailto:hello@urdis.studio",
                                                children: [
                                                    "hello@urdis.studio ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ArrowDownRight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 36
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "btn-ghost",
                                                href: "#overview",
                                                children: "Back to top"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-reveal": true,
                                        className: "mono-label mt-16 text-mute",
                                        children: "Availability: Q3 2026 · Two seats open · UTC+07:00"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 385,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 363,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        "data-choreo": true,
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal-group": true,
                                className: "mt-px grid gap-px bg-line md:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-reveal": true,
                                        className: "bg-onyx",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 md:p-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-display text-[clamp(3.5rem,6vw,5.5rem)] font-black leading-none tracking-[-0.06em]",
                                                    children: [
                                                        "URD",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-ship",
                                                            children: "I"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                            lineNumber: 398,
                                                            columnNumber: 22
                                                        }, this),
                                                        "S"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mono-label mt-8 text-mute",
                                                    children: "Your design I ship"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 max-w-xs text-base font-medium leading-relaxed text-mute",
                                                    children: "Your design, shipped to production. Fullstack architecture & interface engineering — one accountable pair of hands from spec to deploy."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Index",
                                        links: FOOTER_INDEX
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Stack",
                                        links: FOOTER_STACK
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Contact",
                                        links: FOOTER_CONTACT
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 409,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 394,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal": true,
                                "data-reveal-soft": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 border-t border-line px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mono-label text-mute",
                                            children: "© 2026 URDIS — your design / I ship — all systems nominal"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mono-label text-mute",
                                            children: "Ho Chi Minh City, D1 · 10.78°N 106.70°E"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 416,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mono-label text-mute",
                                            children: [
                                                "Ship blue ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-ship",
                                                    children: "#6B9EFF"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 411,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/design-i-ship/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/design-i-ship/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowDownRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ArrowDownRight({ className = "h-4 w-4" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2.4,
        strokeLinecap: "square",
        className: className,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 7 17 17"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 7v10H7"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/design-i-ship/src/components/Choreo.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/design-i-ship/src/components/Choreo.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/design-i-ship/src/components/Choreo.tsx", "default");
}),
"[project]/apps/design-i-ship/src/components/Choreo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Choreo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/Choreo.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Choreo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/design-i-ship/src/components/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ArrowDownRight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/ArrowDownRight.tsx [app-rsc] (ecmascript)");
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "overview",
        className: "relative flex min-h-screen flex-col items-center justify-center px-6 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                "data-reveal": true,
                className: "pointer-events-none absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute top-[98px] left-6 text-mute",
                        children: "01 / Overview"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute top-[98px] right-[84px] hidden text-mute sm:block lg:hidden",
                        children: "Fullstack Architect"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute bottom-8 left-6 hidden text-mute md:block",
                        children: "EST. 2019 · UTC+07:00"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute right-[84px] bottom-8 text-mute lg:right-[176px]",
                        children: [
                            "Scroll ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hint-bob inline-block text-ship",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 19,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-reveal-group": true,
                "data-reveal-stagger": true,
                className: "flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "data-reveal": true,
                        className: "badge",
                        children: "06+"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "data-reveal": true,
                        className: "font-display text-[clamp(3.25rem,8.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]",
                        children: [
                            "Your design, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 33,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ship",
                                children: "I ship."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-reveal": true,
                        className: "mt-8 max-w-2xl text-lg font-medium leading-relaxed text-mute",
                        children: "You hand over the design. I turn it into systems, product interfaces and backend architecture — numbered, built and shipped by the same pair of hands."
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-reveal": true,
                        className: "mt-12 flex flex-wrap items-center justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#competencies",
                                className: "btn-primary",
                                children: [
                                    "Explore the system ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ArrowDownRight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                        lineNumber: 44,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-ghost",
                                children: "Book a call"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/design-i-ship/src/components/PricingSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Check({ addOn }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": true,
        width: "18",
        height: "18",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "mt-1 shrink-0 text-ship",
        children: addOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M5 12h14"
        }, void 0, false, {
            fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
            lineNumber: 29,
            columnNumber: 16
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20 6 9 17l-5-5"
        }, void 0, false, {
            fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
            lineNumber: 29,
            columnNumber: 40
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function PricingSection({ heading, subheading, price, feeLabel, features = [
    {
        label: "Design system & token architecture"
    },
    {
        label: "Interface build — Next.js & TypeScript"
    },
    {
        label: "Backend wiring & data contracts"
    },
    {
        label: "Performance budget & verification"
    },
    {
        label: "Ongoing React maintenance",
        isAddOn: true
    }
] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-reveal-group": true,
        className: "grid gap-px border-y border-line bg-line lg:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-reveal": true,
                className: "flex flex-col justify-between gap-12 bg-onyx p-8 md:p-12 lg:p-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "max-w-xl font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.035em] md:text-5xl",
                                children: heading ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Flat pricing for ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ship",
                                            children: "every build size"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                            lineNumber: 61,
                                            columnNumber: 34
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-6 max-w-md text-lg font-medium leading-relaxed text-mute",
                                children: subheading ?? "Start with a working system for $100 — then scale the same codebase to production. No hourly meters, no scope fog."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn-primary",
                                href: "mailto:hello@urdis.studio",
                                children: [
                                    "Start a build ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                        lineNumber: 73,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "link-technical",
                                href: "#methodology",
                                children: "See how it works"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-reveal": true,
                className: "flex flex-col bg-onyx p-8 md:p-12 lg:p-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono-label text-mute",
                        children: feeLabel ?? "One-time build fee · starts at"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-display text-[clamp(3rem,5vw,4.75rem)] font-black leading-none tracking-[-0.03em]",
                        children: price ?? "$100"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono-label mt-4 text-mute",
                        children: [
                            "Prototype scope · ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ship",
                                children: "scales with the build"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 88,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-10 border-t border-line"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mono-label text-mute",
                        children: "Included"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-6 space-y-4",
                        children: features.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Check, {
                                        addOn: feature.isAddOn
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: feature.isAddOn ? "text-base font-medium leading-relaxed text-hull" : "text-base font-medium leading-relaxed",
                                        children: [
                                            feature.label,
                                            feature.isAddOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ship",
                                                children: " (+)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                                lineNumber: 106,
                                                columnNumber: 36
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, feature.label, true, {
                                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/PricingSection.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/apps/design-i-ship/src/components/ScrollRuler.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx", "default");
}),
"[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gfhxlvju2k7f._.js.map