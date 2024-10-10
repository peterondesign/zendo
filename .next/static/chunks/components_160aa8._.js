(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_160aa8._.js", {

"[project]/components/floatingbutton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-34VS2GW4.mjs [app-client] (ecmascript) <export button_group_default as ButtonGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-GBNLLUVD.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tooltip$2f$dist$2f$chunk$2d$3ZXLDIEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/tooltip/dist/chunk-3ZXLDIEA.mjs [app-client] (ecmascript) <export tooltip_default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleEllipsis$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-ellipsis.js [app-client] (ecmascript) <export default as CircleEllipsis>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
const quadrantDetails = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks'
};
const FloatingButton = ({ tasks, showArchivedTasks, isArchiveMode })=>{
    const formatTasksToMarkdown = ()=>{
        let markdown = '';
        Object.keys(quadrantDetails).forEach((quadrantKey)=>{
            const quadrantLabel = quadrantDetails[quadrantKey];
            markdown += `## ${quadrantLabel}\n\n`;
            if (tasks[quadrantKey].length > 0) {
                tasks[quadrantKey].forEach((task)=>{
                    markdown += `- [${task.completed ? 'x' : ' '}] ${task.text}\n`;
                    task.subtasks.forEach((subtask)=>{
                        markdown += `   - [${subtask.completed ? 'x' : ' '}] ${subtask.text}\n`;
                    });
                });
            } else {
                markdown += 'No tasks added yet.\n';
            }
            markdown += '\n';
        });
        return markdown;
    };
    const copyToClipboard = ()=>{
        const markdownContent = formatTasksToMarkdown();
        navigator.clipboard.writeText(markdownContent).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Tasks copied to clipboard')).catch((err)=>{
            console.error('Failed to copy to clipboard: ', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Failed to copy tasks');
        });
    };
    const saveAsPDF = ()=>{
        const pdf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const tableWidth = pageWidth - 20; // Leave some padding on both sides
        const lineHeight = 10;
        let startX = 10;
        let startY = 20; // Start slightly lower on the page for spacing
        // Loop through quadrants and render tasks in a table layout
        Object.keys(quadrantDetails).forEach((quadrantKey, idx)=>{
            const quadrantLabel = quadrantDetails[quadrantKey];
            // Add space between quadrants (tables)
            if (idx !== 0) {
                startY += 20;
            }
            // Draw the quadrant title
            pdf.setFontSize(14);
            pdf.text(quadrantLabel, startX, startY);
            startY += lineHeight;
            // Draw table for each quadrant
            pdf.setFontSize(12);
            // Add table header
            pdf.text('Tasks', startX, startY);
            pdf.text('Subtasks', startX + 80, startY); // Adjust the X position for subtasks
            startY += lineHeight;
            // Draw tasks and subtasks inside the table
            tasks[quadrantKey].forEach((task)=>{
                // Task text with checkbox
                const checkbox = task.completed ? '[x]' : '[ ]';
                pdf.text(`${checkbox} ${task.text}`, startX, startY);
                startY += lineHeight;
                // Subtasks indented with checkbox
                task.subtasks.forEach((subtask)=>{
                    const subCheckbox = subtask.completed ? '[x]' : '[ ]';
                    pdf.text(`${subCheckbox} ${subtask.text}`, startX + 80, startY); // Indent subtasks
                    startY += lineHeight;
                });
            });
            // If there are no tasks in the quadrant
            if (tasks[quadrantKey].length === 0) {
                pdf.text('No tasks added yet.', startX, startY);
                startY += lineHeight;
            }
            // Check if the current Y position exceeds the page length, and add a new page if necessary
            if (startY > pdf.internal.pageSize.getHeight() - 30) {
                pdf.addPage();
                startY = 20; // Reset the Y position for the new page
            }
        });
        // Save the generated PDF
        pdf.save('tasks.pdf');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('PDF exported');
    };
    const handleArchiveTasks = ()=>{
        showArchivedTasks();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(isArchiveMode ? 'Hiding archived tasks' : 'Showing archived tasks');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                    fileName: "[project]/components/floatingbutton.tsx",
                    lineNumber: 141,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__["ButtonGroup"], {
                className: "z-10 fixed bottom-10 right-10",
                variant: "flat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$tooltip$2f$dist$2f$chunk$2d$3ZXLDIEA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__tooltip_default__as__Tooltip$3e$__["Tooltip"], {
                        content: "Choose an action",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                            placement: "top-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        isIconOnly: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleEllipsis$3e$__["CircleEllipsis"], {}, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 147,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/floatingbutton.tsx",
                                    lineNumber: 145,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                    "aria-label": "Task options",
                                    disabledKeys: [
                                        "copy",
                                        "archive",
                                        "save"
                                    ],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                            description: "Premium feature",
                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/floatingbutton.tsx",
                                                lineNumber: 154,
                                                columnNumber: 43
                                            }, void 0),
                                            onClick: copyToClipboard,
                                            children: "Copy Tasks to Clipboard"
                                        }, "copy", false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 151,
                                            columnNumber: 30
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                            description: "Premium feature",
                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/floatingbutton.tsx",
                                                lineNumber: 161,
                                                columnNumber: 110
                                            }, void 0),
                                            onClick: handleArchiveTasks,
                                            children: isArchiveMode ? "Hide Archived" : "Show Archived"
                                        }, "archive", false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 159,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                            description: "Premium feature",
                                            startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/floatingbutton.tsx",
                                                lineNumber: 169,
                                                columnNumber: 47
                                            }, void 0),
                                            onClick: saveAsPDF,
                                            children: "Save as PDF"
                                        }, "save", false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 166,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/floatingbutton.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/floatingbutton.tsx",
                            lineNumber: 144,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/floatingbutton.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    "            "
                ]
            }, void 0, true, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_c = FloatingButton;
const __TURBOPACK__default__export__ = FloatingButton;
var _c;
__turbopack_refresh__.register(_c, "FloatingButton");

})()),
"[project]/components/tasksyncoperations.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "deleteSubtask": ()=>deleteSubtask,
    "deleteTask": ()=>deleteTask,
    "fetchSubtasks": ()=>fetchSubtasks,
    "fetchTasks": ()=>fetchTasks,
    "syncTasks": ()=>syncTasks,
    "upsertSubtask": ()=>upsertSubtask,
    "upsertTask": ()=>upsertTask
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
// Initialize Supabase client
const supabaseUrl = ("TURBOPACK compile-time value", "https://cbfwjsdefulacpmkrwdi.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZndqc2RlZnVsYWNwbWtyd2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MjA5NjIsImV4cCI6MjA0Mzk5Njk2Mn0.pBKqb8qtiBbDs5_vkHTfoWNA8rmDnttbhN3DrvvNNUM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
const upsertTask = async (userId, task, quadrant)=>{
    const { data, error } = await supabase.from('tasks').upsert({
        id: task.id,
        user_id: userId,
        quadrant,
        text: task.text,
        completed: task.completed,
        archived: task.archived,
        updated_at: new Date().toISOString()
    }).select();
    if (error) {
        console.error('Error upserting task:', error);
        throw error;
    }
    console.log('Upserted task data:', data); // Log the data returned from Supabase
    return data;
};
const fetchTasks = async (userId)=>{
    const { data, error } = await supabase.from('tasks').select('*').eq('user_id', userId);
    if (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
    console.log('Fetched tasks:', data);
    return data;
};
const deleteTask = async (userId, taskId)=>{
    const { error } = await supabase.from('tasks').delete().match({
        id: taskId,
        user_id: userId
    });
    if (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
    console.log('Deleted task with ID:', taskId);
};
const syncTasks = async (userId, tasks)=>{
    const allTasks = Object.entries(tasks).flatMap(([quadrant, quadrantTasks])=>quadrantTasks.map((task)=>({
                id: task.id,
                user_id: userId,
                quadrant,
                text: task.text,
                completed: task.completed,
                archived: task.archived,
                updated_at: new Date().toISOString()
            })));
    const { data, error } = await supabase.from('tasks').upsert(allTasks).select();
    if (error) {
        console.error('Error syncing tasks:', error);
        throw error;
    }
    console.log('Synced tasks data:', data);
    return data;
};
const upsertSubtask = async (userId, taskId, subtask)=>{
    const { data, error } = await supabase.from('subtasks').upsert({
        id: subtask.id,
        task_id: taskId,
        user_id: userId,
        text: subtask.text,
        completed: subtask.completed,
        updated_at: new Date().toISOString()
    }).select();
    if (error) {
        console.error('Error upserting subtask:', error);
        throw error;
    }
    console.log('Upserted subtask data:', data);
    return data;
};
const deleteSubtask = async (userId, subtaskId)=>{
    const { error } = await supabase.from('subtasks').delete().match({
        id: subtaskId,
        user_id: userId
    });
    if (error) {
        console.error('Error deleting subtask:', error);
        throw error;
    }
    console.log('Deleted subtask with ID:', subtaskId);
};
const fetchSubtasks = async (userId)=>{
    const { data, error } = await supabase.from('subtasks').select('*').eq('user_id', userId);
    if (error) {
        console.error('Error fetching subtasks:', error);
        throw error;
    }
    console.log('Fetched subtasks:', data);
    return data;
};

})()),
"[project]/components/EisenhowerMatrix.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-34VS2GW4.mjs [app-client] (ecmascript) <export button_group_default as ButtonGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-GBNLLUVD.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-EEKZGUSR.mjs [app-client] (ecmascript) <export menu_section_base_default as DropdownSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/link/dist/chunk-FGDGYNYV.mjs [app-client] (ecmascript) <export link_default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-NYLTK4XO.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/use-disclosure/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/floatingbutton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth0/nextjs-auth0/dist/client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tasksyncoperations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/tasksyncoperations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
;
;
;
// Initialize Supabase client
const supabaseUrl = ("TURBOPACK compile-time value", "https://cbfwjsdefulacpmkrwdi.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZndqc2RlZnVsYWNwbWtyd2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MjA5NjIsImV4cCI6MjA0Mzk5Njk2Mn0.pBKqb8qtiBbDs5_vkHTfoWNA8rmDnttbhN3DrvvNNUM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
const quadrants = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks'
};
const EisenhowerMatrix = ()=>{
    _s();
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: []
    });
    const [archivedTasks, setArchivedTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        do: [],
        decide: [],
        delegate: [],
        delete: [],
        unsorted: []
    });
    const [isArchiveMode, setIsArchiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTask, setNewTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedQuadrant, setSelectedQuadrant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('unsorted');
    const [newSubtask, setNewSubtask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [expandedTaskIds, setExpandedTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAI, setLoadingAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track AI loading state
    const [taskToEdit, setTaskToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subtaskToEdit, setSubtaskToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isOpen: isTaskModalOpen, onOpen: onTaskModalOpen, onClose: onTaskModalClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { isOpen: isSubtaskModalOpen, onOpen: onSubtaskModalOpen, onClose: onSubtaskModalClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const [openDropdownId, setOpenDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedQuadrantForAdd, setSelectedQuadrantForAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Function to toggle dropdown based on task ID
    const handleOpenChange = (taskId, open)=>{
        setOpenDropdownId(open ? taskId : null); // Set or reset dropdown based on open state
    };
    const handleKeyDown = (e, task, quadrant)=>{
        switch(e.key){
            case 'e':
                setTaskToEdit({
                    task,
                    quadrant
                });
                onTaskModalOpen();
                break;
            case 'Delete':
            case 'Backspace':
                deleteTask(quadrant, task.id);
                break;
        }
        setOpenDropdownId(null); // Close dropdown manually after any action
    };
    const handleTaskInputChange = (e)=>{
        if (taskToEdit) {
            setTaskToEdit({
                ...taskToEdit,
                task: {
                    ...taskToEdit.task,
                    text: e.target.value
                }
            });
        }
    };
    const handleSubtaskInputChange = (e)=>{
        if (subtaskToEdit) {
            setSubtaskToEdit({
                ...subtaskToEdit,
                subtask: {
                    ...subtaskToEdit.subtask,
                    text: e.target.value
                }
            });
        }
    };
    // This useEffect runs after the component mounts and ensures that localStorage is accessible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []); // Empty dependency array ensures this only runs once after mounting
    // Update localStorage whenever tasks are changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify(tasks));
    }, [
        tasks
    ]);
    const toggleTaskExpansion = (taskId)=>{
        setExpandedTaskIds((prev)=>prev.includes(taskId) ? prev.filter((id)=>id !== taskId) : [
                ...prev,
                taskId
            ]);
    };
    const addSubtask = (quadrant, taskId)=>{
        if (newSubtask.trim()) {
            setTasks((prev)=>({
                    ...prev,
                    [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                            ...task,
                            subtasks: [
                                ...task.subtasks,
                                {
                                    id: Date.now(),
                                    text: newSubtask.trim(),
                                    completed: false
                                }
                            ]
                        } : task)
                }));
            setNewSubtask('');
        }
    };
    const toggleSubtaskCompletion = (quadrant, taskId, subtaskId)=>{
        setTasks((prev)=>({
                ...prev,
                [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                        ...task,
                        subtasks: task.subtasks.map((subtask)=>subtask.id === subtaskId ? {
                                ...subtask,
                                completed: !subtask.completed
                            } : subtask)
                    } : task)
            }));
    };
    const toggleTaskCompletion = (quadrant, taskId)=>{
        setTasks((prev)=>({
                ...prev,
                [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                        ...task,
                        completed: !task.completed
                    } : task)
            }));
    };
    const deleteTask = (quadrant, taskId)=>{
        setTasks((prev)=>({
                ...prev,
                [quadrant]: prev[quadrant].filter((task)=>task.id !== taskId)
            }));
    };
    const archiveTask = (quadrant, taskId)=>{
        setTasks((prevTasks)=>({
                ...prevTasks,
                [quadrant]: prevTasks[quadrant].map((task)=>task.id === taskId ? {
                        ...task,
                        archived: true
                    } : task)
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (event)=>{
            if (event.key === 'e' && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                // Trigger Edit Task if "E" is pressed
                if (taskToEdit) {
                    setTaskToEdit(taskToEdit);
                    onTaskModalOpen(); // Open the modal to edit the selected task
                }
            } else if (event.key === 'Backspace') {
                // Trigger Delete Task if "Del" key is pressed
                if (taskToEdit) {
                    deleteTask(taskToEdit.quadrant, taskToEdit.task.id);
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>{
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [
        taskToEdit,
        onTaskModalOpen,
        deleteTask
    ]);
    const deleteSubtask = (quadrant, taskId, subtaskId)=>{
        setTasks((prev)=>({
                ...prev,
                [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                        ...task,
                        subtasks: task.subtasks.filter((subtask)=>subtask.id !== subtaskId)
                    } : task)
            }));
    };
    // For saving tasks
    const saveEditedTask = ()=>{
        if (taskToEdit) {
            const { quadrant, task } = taskToEdit;
            setTasks((prev)=>({
                    ...prev,
                    [quadrant]: prev[quadrant].map((t)=>t.id === task.id ? {
                            ...t,
                            text: task.text
                        } : t)
                }));
            setTaskToEdit(null);
            onTaskModalClose(); // Close the modal after saving
        }
    };
    // For saving subtasks
    const saveEditedSubtask = ()=>{
        if (subtaskToEdit) {
            const { quadrant, taskId, subtask } = subtaskToEdit;
            setTasks((prev)=>({
                    ...prev,
                    [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                            ...task,
                            subtasks: task.subtasks.map((st)=>st.id === subtask.id ? {
                                    ...st,
                                    text: subtask.text
                                } : st)
                        } : task)
                }));
            setSubtaskToEdit(null);
            onSubtaskModalClose(); // Close the modal after saving
        }
    };
    const moveTaskToQuadrant = (sourceQuadrant, taskId, targetQuadrant)=>{
        const sourceTasks = Array.from(tasks[sourceQuadrant]);
        const taskIndex = sourceTasks.findIndex((task)=>task.id === taskId);
        if (taskIndex === -1) return;
        const [task] = sourceTasks.splice(taskIndex, 1);
        const updatedTargetTasks = [
            ...tasks[targetQuadrant],
            task
        ];
        setTasks((prev)=>({
                ...prev,
                [sourceQuadrant]: sourceTasks,
                [targetQuadrant]: updatedTargetTasks
            }));
    };
    // Handles drag-and-drop reordering of tasks, moving between quadrants, and subtasks
    const onDragEnd = (result)=>{
        const { source, destination } = result;
        // If there's no destination (i.e., task was dropped outside a valid area), do nothing
        if (!destination) return;
        const sourceQuadrant = source.droppableId;
        const destinationQuadrant = destination.droppableId;
        // Get source task and check if it's being dropped into a subtask or out of one
        const sourceTask = sourceQuadrant in tasks ? tasks[sourceQuadrant][source.index] : undefined;
        // Check if dropping into a subtask
        if (destinationQuadrant === sourceQuadrant && sourceTask) {
            const destinationTask = tasks[destinationQuadrant][destination.index];
            // If the destination is another task, move sourceTask to be a subtask of destinationTask
            if (sourceQuadrant === destinationQuadrant && destinationTask && sourceTask.id !== destinationTask.id) {
                // Move the task as a subtask
                setTasks((prev)=>({
                        ...prev,
                        [destinationQuadrant]: prev[destinationQuadrant].map((task)=>task.id === destinationTask.id ? {
                                ...task,
                                subtasks: [
                                    ...task.subtasks,
                                    sourceTask
                                ]
                            } : task),
                        [sourceQuadrant]: prev[sourceQuadrant].filter((task)=>task.id !== sourceTask.id)
                    }));
                return;
            }
        }
        // Move task between quadrants or reorder within same quadrant
        if (sourceQuadrant === destinationQuadrant) {
            const sourceTasks = tasks[sourceQuadrant] ?? [];
            const reorderedTasks = Array.from(sourceTasks);
            const [movedTask] = reorderedTasks.splice(source.index, 1); // Remove task from source
            reorderedTasks.splice(destination.index, 0, movedTask); // Insert at new position
            setTasks((prev)=>({
                    ...prev,
                    [sourceQuadrant]: reorderedTasks
                }));
        } else {
            const sourceTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = sourceTasks.splice(source.index, 1); // Remove from source
            const destinationTasks = Array.from(tasks[destinationQuadrant]);
            destinationTasks.splice(destination.index, 0, movedTask); // Insert in destination
            setTasks((prev)=>({
                    ...prev,
                    [sourceQuadrant]: sourceTasks,
                    [destinationQuadrant]: destinationTasks
                }));
        }
    };
    // Update the renderArchivedTasks function
    const renderArchivedTasks = (quadrant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "mt-4",
            children: archivedTasks[quadrant].length > 0 ? archivedTasks[quadrant].map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "line-through",
                            children: task.text
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 377,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            size: "sm",
                            variant: "light",
                            onClick: ()=>unarchiveTask(quadrant, task.id),
                            children: "Unarchive"
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 378,
                            columnNumber: 25
                        }, this)
                    ]
                }, task.id, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 376,
                    columnNumber: 21
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No archived tasks"
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 388,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 373,
            columnNumber: 9
        }, this);
    // Add a new function to unarchive tasks
    const unarchiveTask = (quadrant, taskId)=>{
        setArchivedTasks((prevArchived)=>{
            const updatedArchived = {
                ...prevArchived
            };
            const taskToUnarchive = updatedArchived[quadrant].find((task)=>task.id === taskId);
            if (taskToUnarchive) {
                setTasks((prevTasks)=>({
                        ...prevTasks,
                        [quadrant]: [
                            ...prevTasks[quadrant],
                            taskToUnarchive
                        ]
                    }));
                updatedArchived[quadrant] = updatedArchived[quadrant].filter((task)=>task.id !== taskId);
            }
            return updatedArchived;
        });
    };
    const [showArchived, setShowArchived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Add this line to manage the archived state.
    const showArchivedTasks = ()=>{
        setIsArchiveMode(!isArchiveMode);
        setShowArchived(!showArchived);
    };
    const renderSubtasks = (quadrant, task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
            droppableId: `subtasks-${task.id}`,
            type: "subtask",
            children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "pl-6 mt-2 w-full",
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                        task.subtasks.map((subtask, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
                                draggableId: `subtask-${subtask.id}`,
                                index: index,
                                children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        ref: provided.innerRef,
                                        ...provided.draggableProps,
                                        ...provided.dragHandleProps,
                                        className: `text-lg flex items-center justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-200' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mr-2 cursor-move",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                size: 16,
                                                                className: "mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: subtask.completed,
                                                            onChange: ()=>toggleSubtaskCompletion(quadrant, task.id, subtask.id),
                                                            className: "max-w-max mr-2",
                                                            title: "Toggle subtask completion"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                            lineNumber: 437,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `w-full ${subtask.completed ? 'line-through' : ''} ${task.archived ? 'opacity-50 italic' : 'opacity-100'}`,
                                                            style: {
                                                                overflowWrap: 'anywhere',
                                                                userSelect: 'auto'
                                                            },
                                                            children: subtask.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                lineNumber: 432,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                                    style: {
                                                                        minWidth: 'auto'
                                                                    },
                                                                    size: "sm",
                                                                    variant: "light",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                        size: 16,
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 459,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 458,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                lineNumber: 457,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>{
                                                                            setSubtaskToEdit({
                                                                                subtask,
                                                                                taskId: task.id,
                                                                                quadrant
                                                                            });
                                                                            onSubtaskModalOpen();
                                                                        },
                                                                        children: "Edit Subtask"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>deleteSubtask(quadrant, task.id, subtask.id),
                                                                        className: "text-red-500",
                                                                        children: "Delete Subtask"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 471,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                lineNumber: 454,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 425,
                                        columnNumber: 33
                                    }, this)
                            }, subtask.id, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 423,
                                columnNumber: 25
                            }, this)),
                        provided.placeholder,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                    value: newSubtask,
                                    onChange: (e)=>setNewSubtask(e.target.value.slice(0, 100)),
                                    placeholder: "New subtask",
                                    onKeyDown: (e)=>e.key === 'Enter' && addSubtask(quadrant, task.id),
                                    maxLength: 100
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 487,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    onClick: ()=>addSubtask(quadrant, task.id),
                                    className: "ml-2",
                                    style: {
                                        minWidth: 'auto'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 495,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 494,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 486,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 421,
                    columnNumber: 17
                }, this)
        }, void 0, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 419,
            columnNumber: 9
        }, this);
    const renderTask = (quadrant, task, index)=>{
        if (task.archived && !isArchiveMode) {
            return null; // Skip rendering archived tasks unless archive mode is active
        }
        const completedSubtasks = task.subtasks.filter((subtask)=>subtask.completed).length;
        const totalSubtasks = task.subtasks.length;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
            draggableId: task.id.toString(),
            index: index,
            children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    ref: provided.innerRef,
                    ...provided.draggableProps,
                    "data-task-id": task.id,
                    "data-quadrant": quadrant,
                    className: `flex flex-col items-start justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center m-auto flex-grow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ...provided.dragHandleProps,
                                                    className: "mr-2 cursor-move",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: task.completed,
                                                    onChange: ()=>toggleTaskCompletion(quadrant, task.id),
                                                    className: "mr-2",
                                                    title: "Toggle task completion"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 523,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            id: `task-text-${task.id}`,
                                            style: {
                                                overflowWrap: 'anywhere'
                                            },
                                            className: `w-full text-lg ${task.completed ? 'line-through' : ''} ${task.archived ? 'opacity-50 italic' : 'opacity-100'}`,
                                            children: [
                                                task.text,
                                                "  "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 535,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 522,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    children: [
                                        totalSubtasks > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-default-500 ml-2",
                                            children: [
                                                completedSubtasks,
                                                "/",
                                                totalSubtasks
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 549,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__["ButtonGroup"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                    style: {
                                                        minWidth: 'auto'
                                                    },
                                                    size: "sm",
                                                    variant: "light",
                                                    onClick: ()=>toggleTaskExpansion(task.id),
                                                    children: expandedTaskIds.includes(task.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                                                    shouldBlockScroll: false,
                                                    isOpen: openDropdownId === task.id,
                                                    onOpenChange: (open)=>handleOpenChange(task.id, open),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                                                style: {
                                                                    minWidth: 'auto'
                                                                },
                                                                size: "sm",
                                                                variant: "light",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                                    size: 16,
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                            lineNumber: 567,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                                            closeOnSelect: false,
                                                            disabledKeys: [
                                                                "archivepremium"
                                                            ],
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                    onClick: ()=>{
                                                                        setTaskToEdit({
                                                                            task,
                                                                            quadrant
                                                                        });
                                                                        onTaskModalOpen();
                                                                        setOpenDropdownId(null); // Close the dropdown manually
                                                                    },
                                                                    onKeyDown: (e)=>handleKeyDown(e, task, quadrant),
                                                                    shortcut: "e",
                                                                    children: "Edit Task"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 573,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                    title: "AI Tools",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>{
                                                                            if (loadingAI) return;
                                                                            setLoadingAI(true);
                                                                            setTimeout(()=>setLoadingAI(false), 10000);
                                                                            handleBreakdownTaskWithAI(quadrant, task.id, task.text);
                                                                        },
                                                                        children: loadingAI ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                                                                            size: "sm"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 57
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: "Breakdown with AI"
                                                                        }, void 0, false)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 585,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 584,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                    title: "Move",
                                                                    children: Object.keys(quadrants).filter((q)=>q !== quadrant).map((targetQuadrant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                            onClick: ()=>moveTaskToQuadrant(quadrant, task.id, targetQuadrant),
                                                                            children: [
                                                                                "Move to ",
                                                                                quadrants[targetQuadrant]
                                                                            ]
                                                                        }, targetQuadrant, true, {
                                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                            lineNumber: 604,
                                                                            columnNumber: 57
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 600,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                    title: "Archive",
                                                                    children: user?.premium ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>archiveTask(quadrant, task.id),
                                                                        children: "Archive Task"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 53
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        children: "Archive Task (Premium feature)"
                                                                    }, "archivepremium", false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 612,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                    title: "Danger zone",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>deleteTask(quadrant, task.id),
                                                                        className: "text-red-500",
                                                                        children: "Delete Task"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                        lineNumber: 628,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                                    lineNumber: 627,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                    lineNumber: 566,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 553,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 546,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 521,
                            columnNumber: 25
                        }, this),
                        expandedTaskIds.includes(task.id) && renderSubtasks(quadrant, task)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 513,
                    columnNumber: 21
                }, this)
        }, task.id, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 511,
            columnNumber: 13
        }, this);
    };
    const renderQuadrant = (quadrant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
            droppableId: quadrant,
            children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    className: `p-4 mb-4 ${theme === "dark" ? snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-900' : snapshot.isDraggingOver ? 'bg-white' : 'bg-background'}`,
                    children: [
                        "          ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-default-500 text-sm",
                                    children: quadrants[quadrant]
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 656,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    size: "sm",
                                    isIconOnly: true,
                                    variant: "light",
                                    onClick: ()=>{
                                        setSelectedQuadrantForAdd(quadrant);
                                        setIsAddTaskModalOpen(true);
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 666,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 657,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 655,
                            columnNumber: 28
                        }, this),
                        tasks[quadrant].length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-10 text-center text-default-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/emptystate.png",
                                    className: "w-10 h-10 mt-2 mx-auto",
                                    alt: "No tasks"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 671,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-default-400 text-sm",
                                    children: "No tasks added yet"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 672,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 670,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "text-default-90 text-lg",
                            children: tasks[quadrant].map((task, index)=>renderTask(quadrant, task, index))
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 675,
                            columnNumber: 25
                        }, this),
                        provided.placeholder
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 651,
                    columnNumber: 17
                }, this)
        }, quadrant, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 649,
            columnNumber: 9
        }, this);
    // Function to handle task breakdown with AI and update the task with subtasks
    const handleBreakdownTaskWithAI = async (quadrant, taskId, taskText)=>{
        setLoadingAI(true); // Show spinner
        const apiUrl = "https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409";
        const prompt = "Only respond with a numbered list of tasks and nothing else. Break down the following task into minimum of 4 to maximum of 8 subtasks, it must not be a repeat of the main task, each subtask must be a single line and less than 12 words. The subtasks should be manageable for an 18-year-old with focus issues and  ADHD and can be completed within 24 hours:";
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs: `${prompt}: ${taskText}`
                })
            });
            if (!response.ok) {
                console.error("Error fetching from Hugging Face:", response.statusText);
                setLoadingAI(false);
                return;
            }
            const data = await response.json(); // Parse the JSON response
            const generatedText = data[0]?.generated_text || "";
            // Split the generated text into lines, remove numbering, asterisks, and filter out empty lines
            const subtasks = generatedText.split("\n").map((line)=>line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').trim()) // Remove numbering and asterisks
            .filter((subtask)=>subtask.length > 0 && !subtask.includes(prompt)) // Remove empty lines and the prompt
            .slice(1); // Remove the empty line at the beginning
            if (subtasks.length > 0) {
                setTasks((prev)=>({
                        ...prev,
                        [quadrant]: prev[quadrant].map((task)=>task.id === taskId ? {
                                ...task,
                                subtasks: [
                                    ...task.subtasks,
                                    ...subtasks.map((subtaskText, index)=>({
                                            id: Date.now() + index,
                                            text: subtaskText,
                                            completed: false
                                        }))
                                ]
                            } : task)
                    }));
                // Automatically expand the task to show generated subtasks
                setExpandedTaskIds((prev)=>[
                        ...prev,
                        taskId
                    ]);
            }
            setLoadingAI(false); // Hide spinner
        } catch (error) {
            console.error("Error calling Hugging Face API:", error);
            setLoadingAI(false); // Hide spinner
        }
    };
    const syncAllTasks = async ()=>{
        if (user?.premium) {
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tasksyncoperations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncTasks"])(user.id, tasks);
            } catch (error) {
                console.error('Failed to sync tasks:', error);
            }
        }
    };
    const addTaskToQuadrant = ()=>{
        if (newTask.trim() && selectedQuadrantForAdd) {
            const newTaskObject = {
                id: Date.now(),
                text: newTask.trim(),
                completed: false,
                subtasks: [],
                archived: false,
                quadrant: selectedQuadrantForAdd
            };
            setTasks((prev)=>({
                    ...prev,
                    [selectedQuadrantForAdd]: [
                        ...prev[selectedQuadrantForAdd],
                        newTaskObject
                    ]
                }));
            setNewTask('');
            setIsAddTaskModalOpen(false);
        // Optionally, sync with backend if needed
        // if (user?.premium) {
        //   upsertTask(user.id as string, newTaskObject, selectedQuadrantForAdd);
        // }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-4",
                children: [
                    // Check if user is logged in
                    user ? // If user is premium, only show the h1
                    user.premium ? // If user is not premium, show both h1 and p
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "tracking-tight inline font-semibold text-base mb-4 leading-9",
                                children: (()=>{
                                    const hour = new Date().getHours();
                                    if (hour >= 5 && hour < 12) {
                                        return `Good morning, ${user.name}. Grab your coffee, and let's do this!`;
                                    } else if (hour >= 12 && hour < 17) {
                                        return `Good afternoon, ${user.name}. Ready to power through?`;
                                    } else if (hour >= 17 && hour < 22) {
                                        return `Good evening, ${user.name}! Ready to close out the day on a high note?`;
                                    } else {
                                        return `Let's get some late-night magic going, ${user.name}!`;
                                    }
                                })()
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 798,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-default-500 text-sm",
                                children: [
                                    "Sync across all devices with this account and unlock more features with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                        href: "/pricing",
                                        className: "text-cyan-600 underline",
                                        children: "lifetime deal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 814,
                                        columnNumber: 109
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 813,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "tracking-tight inline font-semibold text-base mb-4 leading-9",
                        children: (()=>{
                            const hour = new Date().getHours();
                            // Morning: 5am to 12pm
                            if (hour >= 5 && hour < 12) {
                                return `Good morning, ${user.name}. Grab your coffee, and let's do this!`;
                            } else if (hour >= 12 && hour < 17) {
                                return `Good afternoon, ${user.name}. Ready to power through?`;
                            } else if (hour >= 17 && hour < 22) {
                                return `Good evening, ${user.name}! Ready to close out the day on a high note?`;
                            } else {
                                return `Let's get some late-night magic going, ${user.name}!`;
                            }
                        })()
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 819,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "tracking-tight inline font-semibold text-base leading-9 mb-4",
                                children: "Prioritize your tasks with the Eisenhower Matrix, and break them down"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 844,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-default-500 text-sm",
                                children: [
                                    "No account needed, free forever (more features included with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                        href: "/pricing",
                                        className: "text-cyan-600 underline",
                                        children: "lifetime deal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 848,
                                        columnNumber: 94
                                    }, this),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 847,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                        isOpen: isAddTaskModalOpen,
                        onClose: ()=>setIsAddTaskModalOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                    children: [
                                        "Add Task to ",
                                        selectedQuadrantForAdd ? quadrants[selectedQuadrantForAdd] : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 857,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        value: newTask,
                                        onChange: (e)=>setNewTask(e.target.value.slice(0, 100)),
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                addTaskToQuadrant();
                                            } else if (e.key === 'Escape') {
                                                setIsAddTaskModalOpen(false);
                                            }
                                        },
                                        fullWidth: true,
                                        placeholder: "Enter new task name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 861,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 860,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        onClick: ()=>{
                                            // addTask();
                                            addTaskToQuadrant();
                                        },
                                        children: "Add Task"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 876,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 875,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 856,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 855,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                        isOpen: isTaskModalOpen,
                        onClose: onTaskModalClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                    children: "Edit Task"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 887,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        value: taskToEdit?.task.text || '',
                                        onChange: handleTaskInputChange,
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                saveEditedTask();
                                            } else if (e.key === 'Escape') {
                                                onTaskModalClose();
                                            }
                                        },
                                        fullWidth: true,
                                        placeholder: "Enter new task name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 889,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 888,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        onClick: saveEditedTask,
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 904,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 903,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 886,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 885,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                        isOpen: isSubtaskModalOpen,
                        onClose: onSubtaskModalClose,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                    children: "Edit Subtask"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 911,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                        value: subtaskToEdit?.subtask.text || '',
                                        onChange: handleSubtaskInputChange,
                                        onKeyDown: (e)=>{
                                            if (e.key === 'Enter') {
                                                saveEditedSubtask();
                                            } else if (e.key === 'Escape') {
                                                onSubtaskModalClose();
                                            }
                                        },
                                        fullWidth: true,
                                        placeholder: "Enter new subtask name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 913,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 912,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        onClick: saveEditedSubtask,
                                        children: "Save"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 928,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 927,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 910,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 909,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tasks: tasks,
                        showArchivedTasks: showArchivedTasks,
                        isArchiveMode: isArchiveMode
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 933,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 790,
                columnNumber: 13
            }, this),
            loadingAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                    size: "lg"
                }, void 0, false, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 942,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 941,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-auto sm:p-0 lg:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$beautiful$2d$dnd$2f$dist$2f$react$2d$beautiful$2d$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
                    onDragEnd: onDragEnd,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            'do',
                            'decide',
                            'delegate',
                            'delete',
                            'unsorted'
                        ].map(renderQuadrant)
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 947,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 946,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 945,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EisenhowerMatrix.tsx",
        lineNumber: 789,
        columnNumber: 9
    }, this);
};
_s(EisenhowerMatrix, "myqTrHM8RQHY4mdkBXKwVMvUwPM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = EisenhowerMatrix;
const __TURBOPACK__default__export__ = EisenhowerMatrix;
var _c;
__turbopack_refresh__.register(_c, "EisenhowerMatrix");

})()),
}]);

//# sourceMappingURL=components_160aa8._.js.map