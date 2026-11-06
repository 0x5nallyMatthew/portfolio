module.exports = [
"[project]/apps/design-i-ship/src/components/ScrollRuler.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollRuler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SECTIONS = [
    {
        id: "overview",
        label: "Overview"
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
/* Ticks every 5% of viewport height; every 10% is major (28px) vs minor (14px) */ const TICKS = Array.from({
    length: 21
}, (_, i)=>i * 5);
function ScrollRuler() {
    const fillRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fill = fillRef.current;
        const current = currentRef.current;
        const next = nextRef.current;
        if (!fill || !current || !next) return;
        let raf = 0;
        let queued = false;
        const labelAt = (index)=>`${String(index + 1).padStart(2, "0")} / ${SECTIONS[index].label}`;
        const swap = (el, text)=>{
            if (el.textContent === text) return;
            el.classList.add("changing");
            window.setTimeout(()=>{
                el.textContent = text;
                el.classList.remove("changing");
            }, 160);
        };
        const update = ()=>{
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
            fill.style.height = `${(progress * 100).toFixed(2)}%`;
            const mid = window.scrollY + window.innerHeight * 0.5;
            let active = 0;
            for(let i = 0; i < SECTIONS.length; i += 1){
                const section = document.getElementById(SECTIONS[i].id);
                if (section && section.offsetTop <= mid) active = i;
            }
            swap(current, labelAt(active));
            swap(next, active + 1 < SECTIONS.length ? labelAt(active + 1) : "EOF");
        };
        const onScroll = ()=>{
            if (queued) return;
            queued = true;
            raf = window.requestAnimationFrame(()=>{
                queued = false;
                raf = 0;
                update();
            });
        };
        update();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        window.addEventListener("resize", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) window.cancelAnimationFrame(raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-hidden": true,
        className: "ruler",
        children: [
            TICKS.map((pct)=>pct % 10 === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ruler-tick major",
                    style: {
                        top: `${pct}%`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ruler-num",
                        children: String(pct).padStart(2, "0")
                    }, void 0, false, {
                        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this)
                }, pct, false, {
                    fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ruler-tick minor",
                    style: {
                        top: `${pct}%`
                    }
                }, pct, false, {
                    fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: fillRef,
                className: "ruler-fill"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: currentRef,
                className: "ruler-label is-current"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$5_$40$babel$2b$core$40$8$2e$1_fbe5b393a60b7adc31bfae72e45983f4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                ref: nextRef,
                className: "ruler-label is-next"
            }, void 0, false, {
                fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/design-i-ship/src/components/ScrollRuler.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.4.5_@babel+core@8.1_fbe5b393a60b7adc31bfae72e45983f4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0033qfk0j71iw._.js.map