(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_4a7f1e._.js", {

"[project]/components/primitives.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "subtitle": ()=>subtitle,
    "title": ()=>title
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "tracking-tight inline font-semibold",
    variants: {
        color: {
            violet: "from-[#FF1CF7] to-[#b249f8]",
            yellow: "from-[#FF705B] to-[#FFB457]",
            blue: "from-[#5EA2EF] to-[#0072F5]",
            cyan: "from-[#00b7fa] to-[#01cfea]",
            green: "from-[#6FEE8D] to-[#17c964]",
            pink: "from-[#FF72E1] to-[#F54C7A]",
            foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]"
        },
        size: {
            sm: "text-3xl lg:text-4xl",
            md: "text-[2.3rem] lg:text-5xl leading-9",
            lg: "text-4xl lg:text-6xl"
        },
        fullWidth: {
            true: "w-full block"
        }
    },
    defaultVariants: {
        size: "md"
    },
    compoundVariants: [
        {
            color: [
                "violet",
                "yellow",
                "blue",
                "cyan",
                "green",
                "pink",
                "foreground"
            ],
            class: "bg-clip-text text-transparent bg-gradient-to-b"
        }
    ]
});
const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
    variants: {
        fullWidth: {
            true: "!w-full"
        }
    },
    defaultVariants: {
        fullWidth: true
    }
});

})()),
"[project]/app/pricing/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PricingPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/primitives.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function PricingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$primitives$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["title"])(),
                children: "Pricing"
            }, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 flex flex-col md:flex-row items-stretch gap-8",
                style: {
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                        className: "p-2 w-full shadow-lg h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "text-center text-lg font-semibold",
                                children: "Free (without creating an account)"
                            }, void 0, false, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-none ml-0 mb-4 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Tasks stored only on a single device"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 16,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Delete tasks (no archive)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 17,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Limited tasks (24 max)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 18,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Break tasks into subtasks manually or automatically with AI."
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 19,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Access without creating an account"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 20,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                            color: "primary",
                                            variant: "bordered",
                                            children: "Get Started"
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/page.tsx",
                                            lineNumber: 23,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                        className: "p-2 w-full shadow-lg border-primary h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                                className: "text-center text-lg font-semibold",
                                children: [
                                    "Lifetime User (with account)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                        color: "success",
                                        variant: "flat",
                                        className: "ml-2",
                                        children: "Most Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "list-none ml-0 mb-4 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Sync on all your devices (mobile, desktop)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Archive tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Unlimited tasks"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 42,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Break tasks into subtasks manually or automatically with AI."
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Export as PDF"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "More device support (Mac app, iPhone app, Android app, Windows app, Chrome Extension)",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                        color: "warning",
                                                        variant: "flat",
                                                        children: "Coming Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Daily streak for completing one urgent and important task",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                        color: "warning",
                                                        variant: "flat",
                                                        children: "Coming Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 51,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Track when you start and complete tasks, with task analytics",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                        color: "warning",
                                                        variant: "flat",
                                                        children: "Coming Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: "Access to all upcoming features forever"
                                            }, void 0, false, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-cyan-600 underline",
                                            href: "https://buy.stripe.com/6oE4iHeaX4P85hK4gl",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                color: "primary",
                                                variant: "solid",
                                                children: [
                                                    "Buy for $20 ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "line-through ml-2",
                                                        children: "$40"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/pricing/page.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/pricing/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/pricing/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/pricing/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/pricing/page.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/pricing/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/pricing/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/pricing/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = PricingPage;
var _c;
__turbopack_refresh__.register(_c, "PricingPage");

})()),
"[project]/app/pricing/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CardProvider": ()=>CardProvider,
    "useCardContext": ()=>useCardContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
var [CardProvider, useCardContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$3XT5V4LF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    name: "CardContext",
    strict: true,
    errorMessage: "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"
});
;

})()),
"[project]/node_modules/@nextui-org/theme/dist/chunk-VLE2FQQR.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "card": ()=>card
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-N2KXC5ZE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$XHQUSKIE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
// src/components/card.ts
var card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "flex",
            "flex-col",
            "relative",
            "overflow-hidden",
            "h-auto",
            "outline-none",
            "text-foreground",
            "box-border",
            "bg-content1",
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$XHQUSKIE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataFocusVisibleClasses"]
        ],
        header: [
            "flex",
            "p-3",
            "z-10",
            "w-full",
            "justify-start",
            "items-center",
            "shrink-0",
            "overflow-inherit",
            "color-inherit",
            "subpixel-antialiased"
        ],
        body: [
            "relative",
            "flex",
            "flex-1",
            "w-full",
            "p-3",
            "flex-auto",
            "flex-col",
            "place-content-inherit",
            "align-items-inherit",
            "h-auto",
            "break-words",
            "text-left",
            "overflow-y-auto",
            "subpixel-antialiased"
        ],
        footer: [
            "p-3",
            "h-auto",
            "flex",
            "w-full",
            "items-center",
            "overflow-hidden",
            "color-inherit",
            "subpixel-antialiased"
        ]
    },
    variants: {
        shadow: {
            none: {
                base: "shadow-none"
            },
            sm: {
                base: "shadow-small"
            },
            md: {
                base: "shadow-medium"
            },
            lg: {
                base: "shadow-large"
            }
        },
        radius: {
            none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none"
            },
            sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small"
            },
            md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium"
            },
            lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large"
            }
        },
        fullWidth: {
            true: {
                base: "w-full"
            }
        },
        isHoverable: {
            true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"
            }
        },
        isPressable: {
            true: {
                base: "cursor-pointer"
            }
        },
        isBlurred: {
            true: {
                base: [
                    "bg-background/80",
                    "dark:bg-background/20",
                    "backdrop-blur-md",
                    "backdrop-saturate-150"
                ]
            }
        },
        isFooterBlurred: {
            true: {
                footer: [
                    "bg-background/10",
                    "backdrop-blur",
                    "backdrop-saturate-150"
                ]
            }
        },
        isDisabled: {
            true: {
                base: "opacity-disabled cursor-not-allowed"
            }
        },
        disableAnimation: {
            true: "",
            false: {
                base: "transition-transform-background motion-reduce:transition-none"
            }
        }
    },
    compoundVariants: [
        {
            isPressable: true,
            class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent"
        }
    ],
    defaultVariants: {
        radius: "lg",
        shadow: "md",
        fullWidth: false,
        isHoverable: false,
        isPressable: false,
        isDisabled: false,
        isFooterBlurred: false
    }
});
;

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-PA2HN3GN.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCard": ()=>useCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$VLE2FQQR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-VLE2FQQR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/interactions/dist/useHover.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/use-aria-button/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system/dist/chunk-Q66YAGZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-SOU6N57Y.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-rsc-utils/dist/chunk-RJKRL3AU.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$6NL67ZRH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/ripple/dist/chunk-6NL67ZRH.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
function useCard(originalProps) {
    var _a, _b, _c, _d;
    const globalContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2f$dist$2f$chunk$2d$Q66YAGZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProviderContext"])();
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$VLE2FQQR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"].variantKeys);
    const { ref, as, children, onClick, onPress, autoFocus, className, classNames, allowTextSelectionOnPress = true, ...otherProps } = props;
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const Component = as || (originalProps.isPressable ? "button" : "div");
    const shouldFilterDOMProps = typeof Component === "string";
    const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
    const disableRipple = (_d = (_c = originalProps.disableRipple) != null ? _c : globalContext == null ? void 0 : globalContext.disableRipple) != null ? _d : false;
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$6NL67ZRH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRipple"])();
    const handleClick = (e)=>{
        if (!disableAnimation && !disableRipple && domRef.current) {
            onRippleClickHandler(e);
        }
    };
    const { buttonProps, isPressed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$aria$2d$button$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAriaButton"])({
        onPress,
        elementType: as,
        isDisabled: !originalProps.isPressable,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(onClick, handleClick),
        allowTextSelectionOnPress,
        ...otherProps
    }, domRef);
    const { hoverProps, isHovered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$useHover$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHover"])({
        isDisabled: !originalProps.isHoverable,
        ...otherProps
    });
    const { isFocusVisible, isFocused, focusProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])({
        autoFocus
    });
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$VLE2FQQR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card"])({
            ...variantProps,
            disableAnimation
        }), [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        disableAnimation
    ]);
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            slots,
            classNames,
            disableAnimation,
            isDisabled: originalProps.isDisabled,
            isFooterBlurred: originalProps.isFooterBlurred,
            fullWidth: originalProps.fullWidth
        }), [
        slots,
        classNames,
        originalProps.isDisabled,
        originalProps.isFooterBlurred,
        disableAnimation,
        originalProps.fullWidth
    ]);
    const getCardProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((props2 = {})=>{
        return {
            ref: domRef,
            className: slots.base({
                class: baseStyles
            }),
            tabIndex: originalProps.isPressable ? 0 : -1,
            "data-hover": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isHovered),
            "data-pressed": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isPressed),
            "data-focus": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocused),
            "data-focus-visible": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(isFocusVisible),
            "data-disabled": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$MCFSCOSB$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataAttr"])(originalProps.isDisabled),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(originalProps.isPressable ? {
                ...buttonProps,
                ...focusProps,
                role: "button"
            } : {}, originalProps.isHoverable ? hoverProps : {}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(otherProps, {
                enabled: shouldFilterDOMProps
            }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$rsc$2d$utils$2f$dist$2f$chunk$2d$RJKRL3AU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterDOMProps"])(props2))
        };
    }, [
        domRef,
        slots,
        baseStyles,
        shouldFilterDOMProps,
        originalProps.isPressable,
        originalProps.isHoverable,
        originalProps.isDisabled,
        isHovered,
        isPressed,
        isFocusVisible,
        buttonProps,
        focusProps,
        hoverProps,
        otherProps
    ]);
    const getRippleProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>({
            ripples,
            onClear: onClearRipple
        }), [
        ripples,
        onClearRipple
    ]);
    return {
        context,
        domRef,
        Component,
        classNames,
        children,
        isHovered,
        isPressed,
        disableAnimation,
        isPressable: originalProps.isPressable,
        isHoverable: originalProps.isHoverable,
        disableRipple,
        handleClick,
        isFocusVisible,
        getCardProps,
        getRippleProps
    };
}
;

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "card_default": ()=>card_default
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$PA2HN3GN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-PA2HN3GN.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$SC6YC33A$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/ripple/dist/chunk-SC6YC33A.mjs [app-client] (ecmascript) <export ripple_default as Ripple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
var Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { children, context, Component, isPressable, disableAnimation, disableRipple, getCardProps, getRippleProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$PA2HN3GN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCard"])({
        ...props,
        ref
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getCardProps(),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardProvider"], {
                value: context,
                children
            }),
            isPressable && !disableAnimation && !disableRipple && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$ripple$2f$dist$2f$chunk$2d$SC6YC33A$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ripple_default__as__Ripple$3e$__["Ripple"], {
                ...getRippleProps()
            })
        ]
    });
});
Card.displayName = "NextUI.Card";
var card_default = Card;
;

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Card": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "card_header_default": ()=>card_header_default
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
var CardHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    const headerStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.header, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.header) == null ? void 0 : _a.call(slots, {
            class: headerStyles
        }),
        ...otherProps,
        children
    });
});
CardHeader.displayName = "NextUI.CardHeader";
var card_header_default = CardHeader;
;

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "CardHeader": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_header_default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "card_body_default": ()=>card_body_default
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-QVMTN7ZJ.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
var CardBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var _a;
    const { as, className, children, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const { slots, classNames } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$QVMTN7ZJ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardContext"])();
    const bodyStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.body, className);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
        ref: domRef,
        className: (_a = slots.body) == null ? void 0 : _a.call(slots, {
            class: bodyStyles
        }),
        ...otherProps,
        children
    });
});
CardBody.displayName = "NextUI.CardBody";
var card_body_default = CardBody;
;

})()),
"[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "CardBody": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["card_body_default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/@nextui-org/theme/dist/chunk-MP2JYSMR.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "chip": ()=>chip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-BZCSOIUI.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-N2KXC5ZE.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$XHQUSKIE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
// src/components/chip.ts
var chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$N2KXC5ZE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tv"])({
    slots: {
        base: [
            "relative",
            "max-w-fit",
            "min-w-min",
            "inline-flex",
            "items-center",
            "justify-between",
            "box-border",
            "whitespace-nowrap"
        ],
        content: "flex-1 text-inherit font-normal",
        dot: [
            "w-2",
            "h-2",
            "ml-1",
            "rounded-full"
        ],
        avatar: "flex-shrink-0",
        closeButton: [
            "z-10",
            "appearance-none",
            "outline-none",
            "select-none",
            "transition-opacity",
            "opacity-70",
            "hover:opacity-100",
            "cursor-pointer",
            "active:opacity-disabled",
            "tap-highlight-transparent"
        ]
    },
    variants: {
        variant: {
            solid: {},
            bordered: {
                base: "border-medium bg-transparent"
            },
            light: {
                base: "bg-transparent"
            },
            flat: {},
            faded: {
                base: "border-medium"
            },
            shadow: {},
            dot: {
                base: "border-medium border-default text-foreground bg-transparent"
            }
        },
        color: {
            default: {
                dot: "bg-default-400"
            },
            primary: {
                dot: "bg-primary"
            },
            secondary: {
                dot: "bg-secondary"
            },
            success: {
                dot: "bg-success"
            },
            warning: {
                dot: "bg-warning"
            },
            danger: {
                dot: "bg-danger"
            }
        },
        size: {
            sm: {
                base: "px-1 h-6 text-tiny",
                content: "px-1",
                closeButton: "text-medium",
                avatar: "w-4 h-4"
            },
            md: {
                base: "px-1 h-7 text-small",
                content: "px-2",
                closeButton: "text-large",
                avatar: "w-5 h-5"
            },
            lg: {
                base: "px-2 h-8 text-medium",
                content: "px-2",
                closeButton: "text-xl",
                avatar: "w-6 h-6"
            }
        },
        radius: {
            none: {
                base: "rounded-none"
            },
            sm: {
                base: "rounded-small"
            },
            md: {
                base: "rounded-medium"
            },
            lg: {
                base: "rounded-large"
            },
            full: {
                base: "rounded-full"
            }
        },
        isOneChar: {
            true: {},
            false: {}
        },
        isCloseable: {
            true: {},
            false: {}
        },
        hasStartContent: {
            true: {}
        },
        hasEndContent: {
            true: {}
        },
        isDisabled: {
            true: {
                base: "opacity-disabled pointer-events-none"
            }
        },
        isCloseButtonFocusVisible: {
            true: {
                closeButton: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$XHQUSKIE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ringClasses"],
                    "ring-1",
                    "rounded-full"
                ]
            }
        }
    },
    defaultVariants: {
        variant: "solid",
        color: "default",
        size: "md",
        radius: "full",
        isDisabled: false
    },
    compoundVariants: [
        {
            variant: "solid",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.default
            }
        },
        {
            variant: "solid",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.primary
            }
        },
        {
            variant: "solid",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.secondary
            }
        },
        {
            variant: "solid",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.success
            }
        },
        {
            variant: "solid",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.warning
            }
        },
        {
            variant: "solid",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].solid.danger
            }
        },
        {
            variant: "shadow",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.default
            }
        },
        {
            variant: "shadow",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.primary
            }
        },
        {
            variant: "shadow",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.secondary
            }
        },
        {
            variant: "shadow",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.success
            }
        },
        {
            variant: "shadow",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.warning
            }
        },
        {
            variant: "shadow",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].shadow.danger
            }
        },
        {
            variant: "bordered",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.default
            }
        },
        {
            variant: "bordered",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.primary
            }
        },
        {
            variant: "bordered",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.secondary
            }
        },
        {
            variant: "bordered",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.success
            }
        },
        {
            variant: "bordered",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.warning
            }
        },
        {
            variant: "bordered",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].bordered.danger
            }
        },
        {
            variant: "flat",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.default
            }
        },
        {
            variant: "flat",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.primary
            }
        },
        {
            variant: "flat",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.secondary
            }
        },
        {
            variant: "flat",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.success
            }
        },
        {
            variant: "flat",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.warning
            }
        },
        {
            variant: "flat",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].flat.danger
            }
        },
        {
            variant: "faded",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.default
            }
        },
        {
            variant: "faded",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.primary
            }
        },
        {
            variant: "faded",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.secondary
            }
        },
        {
            variant: "faded",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.success
            }
        },
        {
            variant: "faded",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.warning
            }
        },
        {
            variant: "faded",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].faded.danger
            }
        },
        {
            variant: "light",
            color: "default",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.default
            }
        },
        {
            variant: "light",
            color: "primary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.primary
            }
        },
        {
            variant: "light",
            color: "secondary",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.secondary
            }
        },
        {
            variant: "light",
            color: "success",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.success
            }
        },
        {
            variant: "light",
            color: "warning",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.warning
            }
        },
        {
            variant: "light",
            color: "danger",
            class: {
                base: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$BZCSOIUI$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorVariants"].light.danger
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "sm",
            class: {
                base: "w-5 h-5 min-w-5 min-h-5"
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "md",
            class: {
                base: "w-6 h-6 min-w-6 min-h-6"
            }
        },
        {
            isOneChar: true,
            hasStartContent: false,
            hasEndContent: false,
            size: "lg",
            class: {
                base: "w-7 h-7 min-w-7 min-h-7"
            }
        },
        {
            isOneChar: true,
            isCloseable: false,
            hasStartContent: false,
            hasEndContent: false,
            class: {
                base: "px-0 justify-center",
                content: "px-0 flex-none"
            }
        },
        {
            isOneChar: true,
            isCloseable: true,
            hasStartContent: false,
            hasEndContent: false,
            class: {
                base: "w-auto"
            }
        },
        {
            isOneChar: true,
            variant: "dot",
            class: {
                base: "w-auto h-7 px-1 items-center",
                content: "px-2"
            }
        },
        {
            hasStartContent: true,
            size: "sm",
            class: {
                content: "pl-0.5"
            }
        },
        {
            hasStartContent: true,
            size: [
                "md",
                "lg"
            ],
            class: {
                content: "pl-1"
            }
        },
        {
            hasEndContent: true,
            size: "sm",
            class: {
                content: "pr-0.5"
            }
        },
        {
            hasEndContent: true,
            size: [
                "md",
                "lg"
            ],
            class: {
                content: "pr-1"
            }
        }
    ]
});
;

})()),
"[project]/node_modules/@nextui-org/chip/dist/chunk-TWKIP7BA.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useChip": ()=>useChip
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/interactions/dist/usePress.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/focus/dist/useFocusRing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$MP2JYSMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/theme/dist/chunk-MP2JYSMR.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react-utils/dist/chunk-RQNQ5XFG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-utils/dist/chunk-SOU6N57Y.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
function useChip(originalProps) {
    const [props, variantProps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapPropsVariants"])(originalProps, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$MP2JYSMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip"].variantKeys);
    const { ref, as, children, avatar, startContent, endContent, onClose, classNames, className, ...otherProps } = props;
    const Component = as || "div";
    const domRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2d$utils$2f$dist$2f$chunk$2d$RQNQ5XFG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDOMRef"])(ref);
    const baseStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(classNames == null ? void 0 : classNames.base, className);
    const isCloseable = !!onClose;
    const isDotVariant = originalProps.variant === "dot";
    const { focusProps: closeFocusProps, isFocusVisible: isCloseButtonFocusVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$focus$2f$dist$2f$useFocusRing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFocusRing"])();
    const isOneChar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>typeof children === "string" && (children == null ? void 0 : children.length) === 1, [
        children
    ]);
    const hasStartContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>!!avatar || !!startContent, [
        avatar,
        startContent
    ]);
    const hasEndContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>!!endContent || isCloseable, [
        endContent,
        isCloseable
    ]);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$theme$2f$dist$2f$chunk$2d$MP2JYSMR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip"])({
            ...variantProps,
            hasStartContent,
            hasEndContent,
            isOneChar,
            isCloseable,
            isCloseButtonFocusVisible
        }), [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$SOU6N57Y$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectToDeps"])(variantProps),
        isCloseButtonFocusVisible,
        hasStartContent,
        hasEndContent,
        isOneChar,
        isCloseable
    ]);
    const { pressProps: closePressProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$interactions$2f$dist$2f$usePress$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePress"])({
        isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
        onPress: onClose
    });
    const getChipProps = ()=>{
        return {
            ref: domRef,
            className: slots.base({
                class: baseStyles
            }),
            ...otherProps
        };
    };
    const getCloseButtonProps = ()=>{
        return {
            role: "button",
            tabIndex: 0,
            className: slots.closeButton({
                class: classNames == null ? void 0 : classNames.closeButton
            }),
            "aria-label": "close chip",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])(closePressProps, closeFocusProps)
        };
    };
    const getAvatarClone = (avatar2)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(avatar2)) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(avatar2, {
            className: slots.avatar({
                class: classNames == null ? void 0 : classNames.avatar
            })
        });
    };
    const getContentClone = (content)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(content) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(content, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$6BQDBGF4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])("max-h-[80%]", content.props.className)
        }) : null;
    return {
        Component,
        children,
        slots,
        classNames,
        isDot: isDotVariant,
        isCloseable,
        startContent: getAvatarClone(avatar) || getContentClone(startContent),
        endContent: getContentClone(endContent),
        getCloseButtonProps,
        getChipProps
    };
}
;

})()),
"[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "chip_default": ()=>chip_default
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$TWKIP7BA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/chip/dist/chunk-TWKIP7BA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/shared-icons/dist/chunk-M3MASYO7.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/system-rsc/dist/chunk-DRE2DOBH.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
var Chip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$system$2d$rsc$2f$dist$2f$chunk$2d$DRE2DOBH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const { Component, children, slots, classNames, isDot, isCloseable, startContent, endContent, getCloseButtonProps, getChipProps } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$TWKIP7BA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChip"])({
        ...props,
        ref
    });
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isDot && !startContent) {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: slots.dot({
                    class: classNames == null ? void 0 : classNames.dot
                })
            });
        }
        return startContent;
    }, [
        slots,
        startContent,
        isDot
    ]);
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (isCloseable) {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                ...getCloseButtonProps(),
                children: endContent || /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$icons$2f$dist$2f$chunk$2d$M3MASYO7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseFilledIcon"], {})
            });
        }
        return endContent;
    }, [
        endContent,
        isCloseable,
        getCloseButtonProps
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(Component, {
        ...getChipProps(),
        children: [
            start,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: slots.content({
                    class: classNames == null ? void 0 : classNames.content
                }),
                children
            }),
            end
        ]
    });
});
Chip.displayName = "NextUI.Chip";
var chip_default = Chip;
;

})()),
"[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Chip": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chip_default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
}]);

//# sourceMappingURL=_4a7f1e._.js.map