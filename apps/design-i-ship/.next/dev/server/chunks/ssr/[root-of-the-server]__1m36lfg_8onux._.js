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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-rsc] (ecmascript)");
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
        label: "hello@designiship.studio",
        href: "mailto:hello@designiship.studio"
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
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                "data-draw-tick": true,
                className: "tick -top-[6px] -left-[6px]"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                "data-draw-tick": true,
                className: "tick -top-[6px] -right-[6px]"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 135,
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
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        " / ",
                        name
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mono-label hidden text-hull sm:block",
                    children: meta
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 150,
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
                lineNumber: 173,
                columnNumber: 7
            }, this),
            lead ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                "data-reveal": true,
                className: "mt-6 max-w-2xl text-lg font-medium leading-relaxed text-mute",
                children: lead
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 180,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 172,
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
                                "D",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-ship",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 14
                                }, this),
                                "S"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mono-label hidden text-mute sm:inline",
                            children: "Design I Ship"
                        }, void 0, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 195,
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
                            lineNumber: 203,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    className: "bg-ink px-5 py-3 font-mono text-[11px] font-bold tracking-[0.16em] text-onyx uppercase transition-colors duration-200 hover:bg-ship",
                    children: "Start a project"
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 194,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 193,
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
                    lineNumber: 223,
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
                                lineNumber: 227,
                                columnNumber: 15
                            }, this)
                        }, link.label, false, {
                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
            lineNumber: 222,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 221,
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
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ScrollRuler$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Choreo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "competencies",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "02",
                                name: "Competencies",
                                meta: "06 disciplines · grid 3×2"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 258,
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
                                            lineNumber: 262,
                                            columnNumber: 42
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                lead: "Six disciplines, one partner. Every engagement starts at the system level and ends in production."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 259,
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
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-8 text-lg font-semibold tracking-[-0.01em]",
                                                children: c.t
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-base font-medium leading-relaxed text-mute",
                                                children: c.d
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, c.n, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 267,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "methodology",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "03",
                                name: "Methodology",
                                meta: "07 steps · numbered"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 284,
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
                                            lineNumber: 288,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                lead: "Process in numbered rows — each one prefixed, time-boxed and verifiable before the next unlocks."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 285,
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
                                                    lineNumber: 301,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-2 text-lg font-semibold sm:mt-0",
                                                    children: m.t
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base font-medium leading-relaxed text-mute",
                                                    children: m.d
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 17
                                        }, this)
                                    }, m.n, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "impact",
                        "data-choreo": true,
                        className: "relative pb-28 md:pb-36",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 312,
                                columnNumber: 4
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "04",
                                name: "Impact",
                                meta: "03 builds · shipped"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 313,
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
                                            lineNumber: 317,
                                            columnNumber: 36
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this),
                                lead: "Selected builds that survived contact with real users, with the numbers to back it up."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 314,
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
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-8 text-lg font-semibold tracking-[-0.01em]",
                                                children: p.t
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-base font-medium leading-relaxed text-mute",
                                                children: p.d
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mono-label mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-ship",
                                                children: p.m.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: metric
                                                    }, metric, false, {
                                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 331,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.n, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        "data-choreo": true,
                        className: "relative px-6 pb-32 text-center md:px-12 md:pb-44",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                index: "05",
                                name: "Contact",
                                meta: "UTC+01:00"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 348,
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
                                                lineNumber: 354,
                                                columnNumber: 42
                                            }, this),
                                            "?"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-reveal": true,
                                        className: "mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-mute",
                                        children: "Design systems, product engineering and fullstack architecture — scoped in numbers, delivered on a date."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-reveal": true,
                                        className: "mt-12 flex flex-wrap items-center justify-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "btn-primary",
                                                href: "mailto:hello@designiship.studio",
                                                children: [
                                                    "hello@designiship.studio ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$design$2d$i$2d$ship$2f$src$2f$components$2f$ArrowDownRight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "btn-ghost",
                                                href: "#overview",
                                                children: "Back to top"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-reveal": true,
                                        className: "mono-label mt-16 text-mute",
                                        children: "Availability: Q3 2026 · Two seats open · UTC+01:00"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 342,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        "data-choreo": true,
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionRule, {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 379,
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
                                                        "D",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-ship",
                                                            children: "/"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 20
                                                        }, this),
                                                        "S"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mono-label mt-8 text-mute",
                                                    children: "Design I Ship"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 max-w-xs text-base font-medium leading-relaxed text-mute",
                                                    children: "Your design, shipped to production. Fullstack architecture & interface engineering — one accountable pair of hands from spec to deploy."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Index",
                                        links: FOOTER_INDEX
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Stack",
                                        links: FOOTER_STACK
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterCol, {
                                        title: "Contact",
                                        links: FOOTER_CONTACT
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-reveal": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 border-t border-line px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mono-label text-mute",
                                            children: "© 2026 Design I Ship — all systems nominal"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mono-label text-mute",
                                            children: "Rotterdam, NL · 51.92°N 4.48°E"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 402,
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
                                                    lineNumber: 404,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                    lineNumber: 398,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                        lineNumber: 378,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/app/page.tsx",
        lineNumber: 244,
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
const STACK = [
    "Next.js",
    "React",
    "TypeScript",
    "Node",
    "Postgres",
    "Tailwind",
    "Turborepo"
];
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
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute top-[98px] right-[84px] hidden text-mute sm:block lg:hidden",
                        children: "Fullstack Architect"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mono-label absolute bottom-8 left-6 hidden text-mute md:block",
                        children: "EST. 2019 · UTC+01:00"
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 17,
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
                                lineNumber: 21,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                lineNumber: 12,
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
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        "data-reveal": true,
                        className: "font-display text-[clamp(3.25rem,8.5vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em]",
                        children: [
                            "Your design, ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 35,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-ship",
                                children: "I ship."
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-reveal": true,
                        className: "mt-8 max-w-2xl text-lg font-medium leading-relaxed text-mute",
                        children: "You hand over the design. I turn it into systems, product interfaces and backend architecture — numbered, built and shipped by the same pair of hands."
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 39,
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
                                        lineNumber: 46,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-ghost",
                                children: "Book a call"
                            }, void 0, false, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "data-reveal": true,
                        className: "mono-label mt-16 text-mute",
                        children: STACK.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-ship",
                                        children: " — "
                                    }, void 0, false, {
                                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this),
                                    s
                                ]
                            }, s, true, {
                                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/Hero.tsx",
        lineNumber: 7,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1m36lfg_8onux._.js.map