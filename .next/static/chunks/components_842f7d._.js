(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_842f7d._.js", {

"[project]/components/taskchart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth0/nextjs-auth0/dist/client/index.js [app-client] (ecmascript)");
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
// Initialize Supabase client
const supabaseUrl = ("TURBOPACK compile-time value", "https://cbfwjsdefulacpmkrwdi.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZndqc2RlZnVsYWNwbWtyd2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MjA5NjIsImV4cCI6MjA0Mzk5Njk2Mn0.pBKqb8qtiBbDs5_vkHTfoWNA8rmDnttbhN3DrvvNNUM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
// Register Chart.js components for scatter/line charts
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
const HourlyTaskChart = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])(); // Get user details
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // const [scatterData, setScatterData] = useState<any[]>([]); // Array for task points
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Store fetched tasks here
    const [scatterData, setScatterData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Function to fetch tasks from the database or local storage
    const fetchTasks = async ()=>{
        let fetchedTasks = [];
        if (user) {
            // Fetch tasks for logged-in user from Supabase
            const { data, error } = await supabase.from("tasks").select("created_at, completed_at, user_id, id, text, completed, archived, subtasks, quadrant").eq("user_id", user.sub);
            if (error) {
                console.error("Error fetching tasks from the database", error);
            } else if (data) {
                fetchedTasks = data.map((task)=>({
                        created_at: new Date(task.created_at),
                        completed_at: task.completed_at ? new Date(task.completed_at) : null,
                        user_id: task.user_id,
                        id: task.id,
                        text: task.text,
                        completed: task.completed,
                        archived: task.archived,
                        subtasks: task.subtasks,
                        quadrant: task.quadrant,
                        updated_at: new Date(task.updated_at)
                    }));
            }
        } else {
            // No user is logged in, fetch from 'eisenhowerMatrixTasks' in local storage
            const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
            if (storedTasks) {
                try {
                    const parsedTasks = JSON.parse(storedTasks);
                    // Check if parsedTasks is an object and flatten task arrays from each quadrant
                    if (parsedTasks && typeof parsedTasks === 'object') {
                        // Flatten all tasks from each quadrant into a single array
                        fetchedTasks = Object.keys(parsedTasks).reduce((acc, quadrant)=>{
                            return acc.concat(parsedTasks[quadrant]);
                        }, []);
                        // Transform fetched tasks' date fields into Date objects
                        fetchedTasks = fetchedTasks.map((task)=>({
                                ...task,
                                created_at: new Date(task.created_at),
                                completed_at: task.completed_at ? new Date(task.completed_at) : null
                            }));
                    }
                } catch (error) {
                    console.error("Error parsing tasks from localStorage:", error);
                }
            }
        }
        setTasks(fetchedTasks); // Update the tasks state
    };
    // Save tasks to local storage if the user is not logged in
    const saveTasksToLocal = ()=>{
        if (!user) {
            localStorage.setItem("localTasks", JSON.stringify(tasks));
        }
    };
    // Call fetchTasks when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchTasks();
    }, [
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        saveTasksToLocal(); // Save tasks to local storage if there's no user
    }, [
        tasks
    ]);
    // Function to update chart data based on the selected day
    const updateChartData = (tasks, date)=>{
        const newScatterData = []; // Reset task data
        tasks.forEach((task)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.created_at, "yyyy-MM-dd") === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd")) {
                // Add creation time point
                newScatterData.push({
                    x: task.created_at.getHours() + task.created_at.getMinutes() / 60,
                    y: 1,
                    label: `Created: ${task.text}`,
                    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.created_at, "HH:mm")
                });
            }
            if (task.completed_at && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.completed_at, "yyyy-MM-dd") === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "yyyy-MM-dd")) {
                // Add completion time point
                newScatterData.push({
                    x: task.completed_at.getHours() + task.completed_at.getMinutes() / 60,
                    y: 2,
                    label: `Completed: ${task.text}`,
                    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(task.completed_at, "HH:mm")
                });
            }
        });
        console.log("Updated scatter data:", newScatterData); // Log chart data
        setScatterData(newScatterData); // Update the scatter data state
    };
    // Handle previous day navigation
    const handlePreviousDay = ()=>setSelectedDate((prevDate)=>new Date(prevDate.setDate(prevDate.getDate() - 1)));
    // Handle next day navigation (prevent future dates)
    const handleNextDay = ()=>{
        const nextDate = new Date(selectedDate);
        nextDate.setDate(nextDate.getDate() + 1);
        // Do not allow selecting a future date
        if (nextDate <= new Date()) {
            setSelectedDate(nextDate);
        }
    };
    // Handle resetting to today
    const handleToday = ()=>setSelectedDate(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Update chart data when the selected day changes
        updateChartData(tasks, selectedDate);
    }, [
        selectedDate,
        tasks
    ]);
    // Chart data configuration for Chart.js (Scatter)
    const data = {
        datasets: [
            {
                label: "Task Activity",
                data: scatterData,
                backgroundColor: scatterData.map((d)=>d.y === 1 ? "blue" : "green"),
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 2,
                showLine: false,
                pointRadius: 12,
                pointHoverRadius: 8
            }
        ]
    };
    // Update chart options to display task names in the tooltip
    const options = {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Time of Day (hours)"
                },
                min: 0,
                max: 24
            },
            y: {
                type: "linear",
                ticks: {
                    callback: (tickValue)=>{
                        if (typeof tickValue === 'number') {
                            return tickValue === 1 ? "Created" : tickValue === 2 ? "Completed" : "";
                        }
                        return ""; // Default for non-number tickValues
                    }
                },
                title: {
                    display: true,
                    text: "Task State"
                },
                min: 0,
                max: 3
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const { label, time } = tooltipItem.raw;
                        return `${label} at ${time}`;
                    }
                }
            },
            legend: {
                display: false
            }
        }
    };
    // const options = {
    //     scales: {
    //         x: {
    //             type: "linear",
    //             position: "bottom",
    //             title: { display: true, text: "Time of Day (hours)" },
    //             min: 0,
    //             max: 24,
    //         },
    //         y: {
    //             ticks: {
    //                 callback: (tickValue: number) => (tickValue === 1 ? "Created" : tickValue === 2 ? "Completed" : ""),
    //             },
    //             title: { display: true, text: "Task State" },
    //             min: 0,
    //             max: 3,
    //         },
    //     },
    //     plugins: {
    //         tooltip: {
    //             callbacks: {
    //                 label: function (context: { raw: { label: any; time: any; }; }) {
    //                     return `${context.raw.label} at ${context.raw.time}`;
    //                 },
    //             },
    //         },
    //         legend: { display: false },
    //     },
    // };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-top mb-4 sticky",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        onClick: handlePreviousDay,
                        variant: "flat",
                        children: "Previous Day"
                    }, void 0, false, {
                        fileName: "[project]/components/taskchart.tsx",
                        lineNumber: 262,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-xl",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd")
                            }, void 0, false, {
                                fileName: "[project]/components/taskchart.tsx",
                                lineNumber: 264,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                onClick: handleToday,
                                variant: "light",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/components/taskchart.tsx",
                                lineNumber: 265,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/taskchart.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        onClick: handleNextDay,
                        variant: "flat",
                        children: "Next Day"
                    }, void 0, false, {
                        fileName: "[project]/components/taskchart.tsx",
                        lineNumber: 267,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/taskchart.tsx",
                lineNumber: 261,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scatter"], {
                data: data,
                options: options,
                style: {
                    height: "400px",
                    width: '100%'
                }
            }, void 0, false, {
                fileName: "[project]/components/taskchart.tsx",
                lineNumber: 269,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/taskchart.tsx",
        lineNumber: 260,
        columnNumber: 9
    }, this);
};
_s(HourlyTaskChart, "I9Xv5EsRB0x16bmrYB+8z174Hyk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = HourlyTaskChart;
const __TURBOPACK__default__export__ = HourlyTaskChart;
var _c;
__turbopack_refresh__.register(_c, "HourlyTaskChart");

})()),
"[project]/components/floatingbutton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-34VS2GW4.mjs [app-client] (ecmascript) <export button_group_default as ButtonGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-GBNLLUVD.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-NYLTK4XO.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-client] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleEllipsis$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-ellipsis.js [app-client] (ecmascript) <export default as CircleEllipsis>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$taskchart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/taskchart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/premiumcontext.tsx [app-client] (ecmascript)");
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
const quadrantDetails = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks'
};
const FloatingButton = ({ tasks, showArchivedTasks, isArchiveMode, user, streakCount })=>{
    _s();
    const [isTaskHistoryOpen, setTaskHistoryOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [taskHistory, setTaskHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { isPremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"])(); // Get premium status from the context
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSuggestionModalOpen, setSuggestionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Fetch task history (both created and completed will be shown as one table)
        const allTasks = Object.values(tasks).flat();
        setTaskHistory(allTasks);
    }, [
        tasks
    ]);
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
        Object.keys(quadrantDetails).forEach((quadrantKey, idx)=>{
            const quadrantLabel = quadrantDetails[quadrantKey];
            if (idx !== 0) {
                startY += 20;
            }
            pdf.setFontSize(14);
            pdf.text(quadrantLabel, startX, startY);
            startY += lineHeight;
            pdf.setFontSize(12);
            pdf.text('Tasks', startX, startY);
            pdf.text('Subtasks', startX + 80, startY); // Adjust the X position for subtasks
            startY += lineHeight;
            tasks[quadrantKey].forEach((task)=>{
                const checkbox = task.completed ? '[x]' : '[ ]';
                pdf.text(`${checkbox} ${task.text}`, startX, startY);
                startY += lineHeight;
                task.subtasks.forEach((subtask)=>{
                    const subCheckbox = subtask.completed ? '[x]' : '[ ]';
                    pdf.text(`${subCheckbox} ${subtask.text}`, startX + 80, startY); // Indent subtasks
                    startY += lineHeight;
                });
            });
            if (tasks[quadrantKey].length === 0) {
                pdf.text('No tasks added yet.', startX, startY);
                startY += lineHeight;
            }
            if (startY > pdf.internal.pageSize.getHeight() - 30) {
                pdf.addPage();
                startY = 20;
            }
        });
        pdf.save('tasks.pdf');
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('PDF exported');
    };
    const handleArchiveTasks = ()=>{
        showArchivedTasks();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(isArchiveMode ? 'Hiding archived tasks' : 'Showing archived tasks');
    };
    // Function to validate and parse dates
    const isValidDate = (date)=>{
        const parsedDate = new Date(date);
        // Check if date is valid
        return !isNaN(parsedDate.getTime());
    };
    // Function to log invalid dates for debugging
    const handleInvalidDate = (taskId, fieldName, invalidValue)=>{
        console.warn(`Invalid date value for task ID ${taskId}, field ${fieldName}:`, invalidValue);
    };
    // Define which keys should be disabled if the user is not premium
    const disabledKeys = !isPremium ? [
        'archive',
        'copy',
        'save',
        'suggestions'
    ] : [];
    const handleAIDialogOpen = async ()=>{
        setLoading(true); // Show spinner while loading
        // Collect only the main tasks (excluding subtasks) and filter out archived, completed, or deleted tasks
        const allTasks = Object.keys(tasks).reduce((acc, quadrantKey)=>{
            const quadrantTasks = tasks[quadrantKey];
            quadrantTasks.forEach((task)=>{
                if (!task.archived && !task.completed && !task.deleted) {
                    acc.push({
                        task: task.text // Only push the main task
                    });
                }
            });
            return acc;
        }, []); // Adjust the type to exclude subtasks
        setSuggestionModalOpen(true);
        const suggestions = await getSuggestionsForAllTasks(allTasks); // Pass only the tasks
        setSuggestions(suggestions);
        setLoading(false); // Hide spinner after loading
    };
    // Modify the function to accept only tasks without subtasks
    const getSuggestionsForAllTasks = async (tasks)=>{
        const apiUrl = "https://api-inference.huggingface.co/models/mistralai/Mistral-Small-Instruct-2409";
        const prompt = `Categorize tasks based on urgency and importance. Provide a brief reason for each categorization. Include all tasks (not subtasks) in your response. Do (urgent and important), Decide (important but not urgent), Delegate (urgent but not important), or Delete (neither urgent nor important).
        
        Tasks: ${JSON.stringify(tasks.map((t)=>t.task))}  // Only include the main tasks
        
        Ensure that every task and every category (Do, Decide, Delegate, Delete) is included in your response, and maintain a concise explanation for each categorization.`;
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs: prompt
                })
            });
            if (!response.ok) {
                throw new Error("Failed to fetch AI suggestions.");
            }
            const data = await response.json();
            const responseText = data[0]?.generated_text || "";
            return responseText.substring(prompt.length).trim();
        } catch (error) {
            console.error(error);
            return "Sorry, there was an error generating suggestions.";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                    fileName: "[project]/components/floatingbutton.tsx",
                    lineNumber: 222,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 222,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__["ButtonGroup"], {
                className: "z-10 fixed bottom-10 right-10",
                variant: "flat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                        isIconOnly: true,
                        onClick: ()=>setTaskHistoryOpen(true),
                        fullWidth: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                color: "orange",
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    streakCount,
                                    "D"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/floatingbutton.tsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this),
                    user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                        placement: "top-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    isIconOnly: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleEllipsis$3e$__["CircleEllipsis"], {}, void 0, false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 235,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/floatingbutton.tsx",
                                    lineNumber: 234,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 233,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                "aria-label": "Task options",
                                disabledKeys: disabledKeys,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 242,
                                            columnNumber: 47
                                        }, void 0),
                                        onClick: handleArchiveTasks,
                                        description: !isPremium ? "Requires premium to unlock" : undefined,
                                        children: isArchiveMode ? "Hide Archived" : "Show Archived"
                                    }, "archive", false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 240,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 248,
                                            columnNumber: 68
                                        }, void 0),
                                        onClick: copyToClipboard,
                                        description: !isPremium ? "Requires premium to unlock" : undefined,
                                        children: "Copy Tasks to Clipboard"
                                    }, "copy", false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 248,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 252,
                                            columnNumber: 68
                                        }, void 0),
                                        onClick: saveAsPDF,
                                        description: !isPremium ? "Requires premium to unlock" : undefined,
                                        children: "Save as PDF"
                                    }, "save", false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 252,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 258,
                                            columnNumber: 47
                                        }, void 0),
                                        onClick: handleAIDialogOpen,
                                        description: !isPremium ? "Requires premium to unlock" : undefined,
                                        children: [
                                            "Get AI Suggestions",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                                variant: "dot",
                                                color: "warning",
                                                size: "sm",
                                                className: "ml-2",
                                                children: "Beta"
                                            }, void 0, false, {
                                                fileName: "[project]/components/floatingbutton.tsx",
                                                lineNumber: 262,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, "suggestions", true, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 256,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/floatingbutton.tsx",
                        lineNumber: 232,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isTaskHistoryOpen,
                onClose: ()=>setTaskHistoryOpen(false),
                size: "4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                                children: "Task History"
                            }, void 0, false, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                                className: "h-48 overflow-auto",
                                children: [
                                    !isPremium && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white font-bold text-lg",
                                            children: "🔐 Requires Premium to Unlock"
                                        }, void 0, false, {
                                            fileName: "[project]/components/floatingbutton.tsx",
                                            lineNumber: 278,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 277,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$taskchart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 281,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/floatingbutton.tsx",
                        lineNumber: 272,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            onClick: ()=>setTaskHistoryOpen(false),
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/floatingbutton.tsx",
                            lineNumber: 306,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/floatingbutton.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 271,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isSuggestionModalOpen,
                onClose: ()=>setSuggestionModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                            children: "AI Suggestions for All Tasks"
                        }, void 0, false, {
                            fileName: "[project]/components/floatingbutton.tsx",
                            lineNumber: 312,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                            style: {
                                maxHeight: "480px",
                                overflowY: "auto"
                            },
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/components/floatingbutton.tsx",
                                        lineNumber: 316,
                                        columnNumber: 33
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 315,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: suggestions
                            }, void 0, false, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 319,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/floatingbutton.tsx",
                            lineNumber: 313,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                onClick: ()=>setSuggestionModalOpen(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/floatingbutton.tsx",
                                lineNumber: 323,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/floatingbutton.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/floatingbutton.tsx",
                    lineNumber: 311,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/floatingbutton.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
_s(FloatingButton, "/b2WhIWliPxflLG++N2AInQzIFA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"]
    ];
});
_c = FloatingButton;
const __TURBOPACK__default__export__ = FloatingButton;
var _c;
__turbopack_refresh__.register(_c, "FloatingButton");

})()),
"[project]/components/subtaskitem.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// SubtaskItem.tsx
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-GBNLLUVD.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const SubtaskItem = ({ subtask, taskId, index, quadrant, toggleSubtaskCompletion, deleteSubtask, setSubtaskToEdit, onSubtaskModalOpen })=>{
    _s();
    const [openDropdownId, setOpenDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpenChange = (subtaskId, open)=>{
        setOpenDropdownId(open ? subtaskId : null);
    };
    const handleEditSubtask = ()=>{
        setSubtaskToEdit(); // Set the subtask to edit
        onSubtaskModalOpen(); // Open the modal
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
        draggableId: `subtask-${subtask.id}`,
        index: index,
        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                ref: provided.innerRef,
                ...provided.draggableProps,
                className: `flex items-start justify-between my-4 pl-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center flex-grow w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                ...provided.dragHandleProps,
                                className: "mr-2 cursor-move",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/subtaskitem.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/subtaskitem.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: subtask.completed,
                                onChange: toggleSubtaskCompletion,
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/subtaskitem.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex-grow ${subtask.completed ? 'line-through text-gray-500' : ''}`,
                                style: {
                                    overflowWrap: 'anywhere'
                                },
                                children: subtask.text
                            }, void 0, false, {
                                fileName: "[project]/components/subtaskitem.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/subtaskitem.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                            shouldBlockScroll: false,
                            isOpen: openDropdownId === subtask.id,
                            onOpenChange: (open)=>handleOpenChange(subtask.id, open),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__["DropdownTrigger"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                        size: "sm",
                                        variant: "light",
                                        style: {
                                            minWidth: 'auto'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/subtaskitem.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            "                "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/subtaskitem.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/subtaskitem.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                    closeOnSelect: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                            onClick: handleEditSubtask,
                                            children: "Edit Subtask"
                                        }, void 0, false, {
                                            fileName: "[project]/components/subtaskitem.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                            onClick: deleteSubtask,
                                            className: "text-red-500",
                                            children: "Delete Subtask"
                                        }, void 0, false, {
                                            fileName: "[project]/components/subtaskitem.tsx",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/subtaskitem.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/subtaskitem.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/subtaskitem.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/subtaskitem.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
    }, subtask.id, false, {
        fileName: "[project]/components/subtaskitem.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
_s(SubtaskItem, "Emfeb9uADXR+n7d0m/uB2ynsyeg=");
_c = SubtaskItem;
const __TURBOPACK__default__export__ = SubtaskItem;
var _c;
__turbopack_refresh__.register(_c, "SubtaskItem");

})()),
"[project]/components/taskitem.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$34VS2GW4$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_group_default__as__ButtonGroup$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-34VS2GW4.mjs [app-client] (ecmascript) <export button_group_default as ButtonGroup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-GBNLLUVD.mjs [app-client] (ecmascript) <export dropdown_default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-LRDIO3JU.mjs [app-client] (ecmascript) <export menu_item_base_default as DropdownItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs [app-client] (ecmascript) <export dropdown_menu_default as DropdownMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/menu/dist/chunk-EEKZGUSR.mjs [app-client] (ecmascript) <export menu_section_base_default as DropdownSection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$63RZRIL7$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_trigger_default__as__DropdownTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs [app-client] (ecmascript) <export dropdown_trigger_default as DropdownTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/premiumcontext.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
const TaskItem = ({ user, task, quadrant, index, expandedTaskIds, toggleTaskCompletion, toggleTaskExpansion, setTaskToEdit, deleteTask, archiveTask, moveTaskToQuadrant, renderSubtasks, onTaskModalOpen, onTaskModalClose, handleBreakdownTaskWithAI })=>{
    _s();
    const [openDropdownId, setOpenDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadingAI, setLoadingAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isPremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"])(); // Access premium status
    const isBlurred = !isPremium && user; // Use premium status in logic
    const quadrants = {
        do: 'Do (Urgent & Important)',
        decide: 'Decide (Not Urgent & Important)',
        delegate: 'Delegate (Urgent & Not Important)',
        delete: 'Delete (Not Urgent & Not Important)',
        unsorted: 'Unsorted Tasks'
    };
    const handleOpenChange = (taskId, open)=>{
        setOpenDropdownId(open ? taskId : null);
    };
    const handleAIBreakdown = async ()=>{
        if (loadingAI) return;
        setLoadingAI(true);
        try {
            await handleBreakdownTaskWithAI(quadrant, task.id, task.text);
        } catch (error) {
            console.error("Error in AI breakdown:", error);
        } finally{
            setLoadingAI(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Draggable"], {
        draggableId: task.id.toString(),
        index: index,
        children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                ref: provided.innerRef,
                ...provided.draggableProps,
                "data-task-id": task.id,
                "data-quadrant": quadrant,
                className: `flex flex-col items-start justify-between mb-2 p-2 rounded ${snapshot.isDragging ? 'bg-gray-700' : 'hover:bg-default-100'} ${isBlurred ? 'blur-none' : ''}`,
                children: [
                    isBlurred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white w-full  p-4 rounded bg-black bg-opacity-50",
                            children: "Requires Premium to unlock"
                        }, void 0, false, {
                            fileName: "[project]/components/taskitem.tsx",
                            lineNumber: 89,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/taskitem.tsx",
                        lineNumber: 88,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start flex-grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mt-2 flex-grow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ...provided.dragHandleProps,
                                                className: "mr-2 cursor-move",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/taskitem.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/taskitem.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: task.completed,
                                                onChange: ()=>toggleTaskCompletion(quadrant, task.id),
                                                className: "mr-2",
                                                title: "Toggle task completion"
                                            }, void 0, false, {
                                                fileName: "[project]/components/taskitem.tsx",
                                                lineNumber: 100,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/taskitem.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: `task-text-${task.id}`,
                                        style: {
                                            overflowWrap: 'anywhere'
                                        },
                                        className: `w-full text-lg ${task.completed ? 'line-through' : ''} ${task.archived ? 'opacity-50 italic' : 'opacity-100'}`,
                                        children: task.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/taskitem.tsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/taskitem.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    task.subtasks?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-default-500 ml-2",
                                        children: [
                                            task.subtasks?.filter((sub)=>sub.completed).length,
                                            "/",
                                            task.subtasks.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/taskitem.tsx",
                                        lineNumber: 119,
                                        columnNumber: 33
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
                                                    fileName: "[project]/components/taskitem.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 74
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/components/taskitem.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/taskitem.tsx",
                                                lineNumber: 124,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$GBNLLUVD$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_default__as__Dropdown$3e$__["Dropdown"], {
                                                shouldBlockScroll: false,
                                                backdrop: "opaque",
                                                // scrollRef={scrollRef}
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
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/taskitem.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/taskitem.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$dropdown$2f$dist$2f$chunk$2d$SXHEBZUY$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__dropdown_menu_default__as__DropdownMenu$3e$__["DropdownMenu"], {
                                                        style: {
                                                            maxHeight: '40vh',
                                                            overflowY: 'auto'
                                                        },
                                                        closeOnSelect: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                onClick: ()=>{
                                                                    setTaskToEdit(task, quadrant);
                                                                    onTaskModalOpen();
                                                                },
                                                                children: "Edit Task"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                title: "AI Tools",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                    onClick: handleAIBreakdown,
                                                                    isDisabled: loadingAI || !isPremium,
                                                                    children: loadingAI ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                                                                                size: "sm"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/taskitem.tsx",
                                                                                lineNumber: 161,
                                                                                columnNumber: 57
                                                                            }, this),
                                                                            "Breaking down..."
                                                                        ]
                                                                    }, void 0, true) : isPremium ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: "Breakdown with AI"
                                                                    }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: "Breakdown with AI (Requires Premium to unlock)"
                                                                    }, void 0, false)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/taskitem.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                title: "Move",
                                                                children: Object.keys(quadrants).map((targetQuadrant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                        onClick: ()=>moveTaskToQuadrant(quadrant, task.id, targetQuadrant),
                                                                        isDisabled: targetQuadrant === quadrant,
                                                                        children: [
                                                                            "Move to ",
                                                                            quadrants[targetQuadrant]
                                                                        ]
                                                                    }, targetQuadrant, true, {
                                                                        fileName: "[project]/components/taskitem.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 41
                                                            }, this),
                                                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                title: "Archive",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                    onClick: archiveTask,
                                                                    children: "Archive Task"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/taskitem.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$EEKZGUSR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_section_base_default__as__DropdownSection$3e$__["DropdownSection"], {
                                                                title: "Danger zone",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$menu$2f$dist$2f$chunk$2d$LRDIO3JU$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__menu_item_base_default__as__DropdownItem$3e$__["DropdownItem"], {
                                                                    onClick: ()=>deleteTask(quadrant, task.id),
                                                                    className: "text-red-500",
                                                                    children: "Delete Task"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/taskitem.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/taskitem.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/taskitem.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/taskitem.tsx",
                                                lineNumber: 132,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/taskitem.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/taskitem.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/taskitem.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    expandedTaskIds.includes(task.id) && renderSubtasks(task)
                ]
            }, void 0, true, {
                fileName: "[project]/components/taskitem.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, this)
    }, task.id, false, {
        fileName: "[project]/components/taskitem.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
};
_s(TaskItem, "YXITaGhu/3poBQnQxRcd/qChbl8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"]
    ];
});
_c = TaskItem;
const __TURBOPACK__default__export__ = TaskItem;
var _c;
__turbopack_refresh__.register(_c, "TaskItem");

})()),
"[project]/components/floatingwindow.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
const PiPWindow = ({ taskText, isVisible, onClose })=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pipActive, setPipActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openPictureInPicture = async (taskText)=>{
        if (!videoRef.current) return;
        try {
            // Create a canvas to render the task text
            const canvas = document.createElement('canvas');
            canvas.width = 400;
            canvas.height = 180;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const renderTask = ()=>{
                    // Clear the canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // Background
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Text content
                    ctx.fillStyle = '#333333';
                    ctx.font = '16px Inter';
                    ctx.fillText('Urgent Task:', 20, 40);
                    ctx.font = '20px Inter';
                    ctx.fillText(taskText, 20, 80);
                    ctx.font = '8px Inter';
                    ctx.fillText('powered by Zendo', 20, 160);
                };
                renderTask();
                // Stop any previous streams before assigning a new one
                if (videoRef.current.srcObject) {
                    videoRef.current.srcObject.getTracks().forEach((track)=>track.stop());
                }
                // Capture the canvas as a stream and set it to the video element
                const stream = canvas.captureStream();
                videoRef.current.srcObject = stream;
                // Ensure the video plays before requesting Picture-in-Picture
                await videoRef.current.play();
                await videoRef.current.requestPictureInPicture();
                setPipActive(true); // Set PiP as active
            }
        } catch (error) {
            console.error('Error entering PiP:', error);
        }
    };
    // Handle PiP close event
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePipClose = ()=>{
            setPipActive(false);
            onClose();
        };
        document.addEventListener('leavepictureinpicture', handlePipClose);
        return ()=>{
            document.removeEventListener('leavepictureinpicture', handlePipClose);
        };
    }, [
        onClose
    ]);
    // Watch for visibility change and toggle PiP
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible && taskText) {
            openPictureInPicture(taskText);
        }
    }, [
        isVisible,
        taskText
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        ref: videoRef,
        style: {
            display: 'none'
        },
        muted: true,
        playsInline: true
    }, void 0, false, {
        fileName: "[project]/components/floatingwindow.tsx",
        lineNumber: 83,
        columnNumber: 10
    }, this);
};
_s(PiPWindow, "wuyS226plSS/H5PRR6n+doTR/8A=");
_c = PiPWindow;
const __TURBOPACK__default__export__ = PiPWindow;
var _c;
__turbopack_refresh__.register(_c, "PiPWindow");

})()),
"[project]/components/EisenhowerMatrix.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// EisenhowerMatrix.tsx
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-IR2E3HZF.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hello-pangea/dnd/dist/dnd.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/link/dist/chunk-FGDGYNYV.mjs [app-client] (ecmascript) <export link_default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-NYLTK4XO.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@nextui-org/use-disclosure/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/floatingbutton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@auth0/nextjs-auth0/dist/client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/premiumcontext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$subtaskitem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/subtaskitem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$taskitem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/taskitem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingwindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/floatingwindow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$2QNX3BHZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_default__as__Popover$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/popover/dist/chunk-2QNX3BHZ.mjs [app-client] (ecmascript) <export popover_default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$HGSZQ3PO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_trigger_default__as__PopoverTrigger$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/popover/dist/chunk-HGSZQ3PO.mjs [app-client] (ecmascript) <export popover_trigger_default as PopoverTrigger>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$AL3RFZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_content_default__as__PopoverContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/popover/dist/chunk-AL3RFZCN.mjs [app-client] (ecmascript) <export popover_content_default as PopoverContent>");
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
;
;
// Initialize Supabase client
const supabaseUrl = ("TURBOPACK compile-time value", "https://cbfwjsdefulacpmkrwdi.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZndqc2RlZnVsYWNwbWtyd2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MjA5NjIsImV4cCI6MjA0Mzk5Njk2Mn0.pBKqb8qtiBbDs5_vkHTfoWNA8rmDnttbhN3DrvvNNUM");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
// Define Quadrants
const quadrants = {
    do: 'Do (Urgent & Important)',
    decide: 'Decide (Not Urgent & Important)',
    delegate: 'Delegate (Urgent & Not Important)',
    delete: 'Delete (Not Urgent & Not Important)',
    unsorted: 'Unsorted Tasks'
};
// Mental model explanations for each quadrant
const quadrantExplanations = {
    do: "Require immediate attention and have significant consequences if not completed.",
    decide: "Contribute to your long-term goals but don't require immediate action.",
    delegate: "Need to be done soon but can be handled by someone else.",
    delete: "Do not contribute to your goals and can be removed.",
    unsorted: "Tasks that need to be categorized."
};
const EisenhowerMatrix = ()=>{
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const { isPremium } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"])(); // Use the hook to access premium status
    const { isOpen: isTaskModalOpen, onOpen: onTaskModalOpen, onClose: onTaskModalClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { isOpen: isSubtaskModalOpen, onOpen: onSubtaskModalOpen, onClose: onSubtaskModalClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { isOpen: isAddTaskModalOpen, onOpen: onAddTaskModalOpen, onClose: onAddTaskModalClose } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [streakCount, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTutorialOpen, setIsTutorialOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    const [firstUrgentTask, setFirstUrgentTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pipVisible, setPipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const nonArchivedTasks = tasks.do.filter((task)=>!task.archived); // Only consider non-archived tasks
        if (nonArchivedTasks.length > 0) {
            setFirstUrgentTask(nonArchivedTasks[0].text); // Set the first non-archived task
            setPipVisible(true); // Show PiP when task exists
        } else {
            setFirstUrgentTask(null);
            setPipVisible(false); // Hide PiP when no task exists
        }
    }, [
        tasks
    ]);
    const [isArchiveMode, setIsArchiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTask, setNewTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newSubtask, setNewSubtask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedQuadrantForAdd, setSelectedQuadrantForAdd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [taskToEdit, setTaskToEditState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [subtaskToEdit, setSubtaskToEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openDropdownId, setOpenDropdownId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedTaskIds, setExpandedTaskIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loadingAI, setLoadingAI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track AI loading state
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Wrapper function to set task to edit
    const setTaskToEdit = (task, quadrant)=>{
        setTaskToEditState({
            task,
            quadrant
        });
    };
    // Handle Key Down Events for Accessibility
    const handleKeyDown = (e, task, quadrant)=>{
        switch(e.key){
            case 'e':
                setTaskToEdit(task, quadrant);
                onTaskModalOpen();
                break;
            case 'Delete':
            case 'Backspace':
                deleteTask(quadrant, task.id);
                break;
            default:
                break;
        }
        setOpenDropdownId(null); // Close dropdown manually after any action
    };
    // Handle Subtask Input Change
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
    // Handle Task Input Change
    const handleTaskInputChange = (e)=>{
        if (taskToEdit) {
            setTaskToEditState((prev)=>({
                    ...prev,
                    task: {
                        ...prev.task,
                        text: e.target.value
                    }
                }));
        }
    };
    // Function to validate and parse dates
    const isValidDate = (date)=>{
        const parsedDate = new Date(date);
        // Check if date is valid
        return !isNaN(parsedDate.getTime());
    };
    // Function to log invalid dates for debugging
    const handleInvalidDate = (taskId, fieldName, invalidValue)=>{
        console.warn(`Invalid date value for task ID ${taskId}, field ${fieldName}:`, invalidValue);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchAndMergeTasks = async ()=>{
            if (user) {
                try {
                    // Fetch both archived and non-deleted tasks when archive mode is enabled
                    let query = supabase.from('tasks').select('*').eq('user_id', user.sub).eq('deleted', false); // Ensure we only fetch tasks that are not deleted
                    if (!isArchiveMode) {
                        query = query.eq('archived', false); // Only fetch non-archived tasks if archive mode is off
                    }
                    const { data: supabaseTasks, error } = await query;
                    if (error) {
                        console.error('Error fetching tasks from Supabase:', error);
                        return;
                    }
                    const activeTasks = {
                        do: [],
                        decide: [],
                        delegate: [],
                        delete: [],
                        unsorted: []
                    };
                    const archivedTasksContainer = {
                        do: [],
                        decide: [],
                        delegate: [],
                        delete: [],
                        unsorted: []
                    };
                    supabaseTasks.forEach((supTask)=>{
                        const validCreatedAt = isValidDate(supTask.created_at) ? new Date(supTask.created_at) : new Date();
                        const validUpdatedAt = isValidDate(supTask.updated_at) ? new Date(supTask.updated_at) : new Date();
                        const task = {
                            id: supTask.id,
                            text: supTask.text,
                            completed: supTask.completed,
                            subtasks: supTask.subtasks || [],
                            archived: supTask.archived,
                            user_id: supTask.user_id,
                            quadrant: supTask.quadrant,
                            created_at: validCreatedAt,
                            updated_at: validUpdatedAt,
                            deleted: supTask.deleted,
                            completed_at: null
                        };
                        if (supTask.archived) {
                            archivedTasksContainer[supTask.quadrant].push(task);
                        } else {
                            activeTasks[supTask.quadrant].push(task);
                        }
                    });
                    setTasks(activeTasks);
                    setArchivedTasks(archivedTasksContainer);
                } catch (err) {
                    console.error('Error fetching and merging tasks:', err);
                }
            } else {
                const storedTasks = window.localStorage.getItem('eisenhowerMatrixTasks');
                if (storedTasks) {
                    const parsedTasks = JSON.parse(storedTasks);
                    // Filter out deleted tasks
                    const nonDeletedTasks = Object.fromEntries(Object.entries(parsedTasks).map(([quadrant, tasks])=>[
                            quadrant,
                            tasks.filter((task)=>!task.deleted)
                        ]));
                    setTasks(nonDeletedTasks); // Set state with correctly typed tasks
                }
            }
        };
        fetchAndMergeTasks();
    }, [
        user,
        isArchiveMode
    ]);
    // Update localStorage whenever tasks change (only when not logged in)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!user) {
            window.localStorage.setItem('eisenhowerMatrixTasks', JSON.stringify(tasks));
        }
    }, [
        tasks,
        user
    ]);
    // Function to toggle dropdown based on task ID
    const handleOpenChange = (taskId, open)=>{
        setOpenDropdownId(open ? taskId : null);
    };
    // Add Subtask
    const addSubtask = async (quadrant, taskId)=>{
        if (newSubtask.trim()) {
            const task = tasks[quadrant].find((task)=>task.id === taskId);
            if (task) {
                const newSubtaskObj = {
                    id: Date.now(),
                    text: newSubtask.trim(),
                    completed: false
                };
                const newSubtasks = [
                    ...task.subtasks,
                    newSubtaskObj
                ];
                if (user) {
                    try {
                        const { error } = await supabase.from('tasks').update({
                            subtasks: newSubtasks
                        }).eq('id', taskId);
                        if (error) {
                            console.error('Error updating subtasks in Supabase:', error);
                        } else {
                            // Update local state only after successful DB update
                            setTasks((prev)=>({
                                    ...prev,
                                    [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                            ...t,
                                            subtasks: newSubtasks
                                        } : t)
                                }));
                        }
                    } catch (err) {
                        console.error('Error during Supabase update:', err);
                    }
                } else {
                    // Update local state
                    setTasks((prev)=>({
                            ...prev,
                            [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                    ...t,
                                    subtasks: newSubtasks
                                } : t)
                        }));
                }
            }
            setNewSubtask('');
        }
    };
    // Toggle Subtask Completion
    const toggleSubtaskCompletion = async (quadrant, taskId, subtaskId)=>{
        const task = tasks[quadrant].find((task)=>task.id === taskId);
        if (task) {
            const newSubtasks = task.subtasks.map((subtask)=>subtask.id === subtaskId ? {
                    ...subtask,
                    completed: !subtask.completed
                } : subtask);
            if (user) {
                try {
                    const { error } = await supabase.from('tasks').update({
                        subtasks: newSubtasks
                    }).eq('id', taskId);
                    if (error) {
                        console.error('Error updating subtasks in Supabase:', error);
                    } else {
                        // Update local state
                        setTasks((prev)=>({
                                ...prev,
                                [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                        ...t,
                                        subtasks: newSubtasks
                                    } : t)
                            }));
                    }
                } catch (err) {
                    console.error('Error during Supabase update:', err);
                }
            } else {
                // Update local state
                setTasks((prev)=>({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                ...t,
                                subtasks: newSubtasks
                            } : t)
                    }));
            }
        }
    };
    // Toggle Task Completion
    const toggleTaskCompletion = async (quadrant, taskId)=>{
        const task = tasks[quadrant].find((task)=>task.id === taskId);
        if (!task) return;
        const isCompleted = !task.completed;
        const completedAt = isCompleted ? new Date().toISOString() : null; // Set completed_at to current time or null
        // Update local state
        setTasks((prev)=>({
                ...prev,
                [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                        ...t,
                        completed: isCompleted,
                        completed_at: completedAt
                    } : t)
            }));
        // If user is authenticated, update the task in the database
        if (user) {
            try {
                const { error } = await supabase.from('tasks').update({
                    completed: isCompleted,
                    completed_at: completedAt
                }) // Update both fields
                .eq('id', taskId);
                if (error) {
                    console.error('Error toggling task completion in Supabase:', error);
                }
            } catch (err) {
                console.error('Error during Supabase toggle:', err);
            }
        }
    };
    // Delete Task
    const deleteTask = async (quadrant, taskId)=>{
        // Check if the user is authenticated (assuming user object is available)
        if (user) {
            try {
                // If user is authenticated, update the task in Supabase
                const { error } = await supabase.from('tasks').update({
                    deleted: true
                }) // Update 'deleted' flag or similar
                .eq('id', taskId);
                if (error) {
                    console.error('Error deleting task in Supabase:', error);
                    return; // Exit if there’s an error
                }
                // After successful deletion in the database, update the local state
                setTasks((prev)=>({
                        ...prev,
                        [quadrant]: prev[quadrant].filter((task)=>task.id !== taskId)
                    }));
                console.log('Task successfully deleted from Supabase and local state updated');
            } catch (err) {
                console.error('Unexpected error while deleting task:', err);
            }
        } else {
            // If the user is not logged in, just update the local state
            setTasks((prev)=>({
                    ...prev,
                    [quadrant]: prev[quadrant].filter((task)=>task.id !== taskId)
                }));
            console.log('Task deleted locally since user is not logged in');
        }
    };
    // Archive Task
    const archiveTask = async (quadrant, taskId)=>{
        if (user) {
            try {
                const { error } = await supabase.from('tasks').update({
                    archived: true
                }).eq('id', taskId);
                if (error) {
                    console.error('Error archiving task in Supabase:', error);
                } else {
                    // Get the task to archive from the current tasks state
                    const taskToArchive = tasks[quadrant].find((task)=>task.id === taskId);
                    // Proceed only if the task exists
                    if (taskToArchive) {
                        // Update the local state to move the task to the archivedTasks list
                        setTasks((prevTasks)=>({
                                ...prevTasks,
                                [quadrant]: prevTasks[quadrant].filter((task)=>task.id !== taskId)
                            }));
                        setArchivedTasks((prevArchived)=>({
                                ...prevArchived,
                                [quadrant]: [
                                    ...prevArchived[quadrant],
                                    {
                                        ...taskToArchive,
                                        archived: true
                                    }
                                ]
                            }));
                    }
                }
            } catch (err) {
                console.error('Error during Supabase archive:', err);
            }
        }
    };
    // Delete Subtask
    const deleteSubtask = async (quadrant, taskId, subtaskId)=>{
        const task = tasks[quadrant].find((task)=>task.id === taskId);
        if (task) {
            const newSubtasks = task.subtasks.filter((subtask)=>subtask.id !== subtaskId);
            if (user) {
                try {
                    const { error } = await supabase.from('tasks').update({
                        subtasks: newSubtasks
                    }).eq('id', taskId);
                    if (error) {
                        console.error('Error updating subtasks in Supabase:', error);
                    } else {
                        // Update local state
                        setTasks((prev)=>({
                                ...prev,
                                [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                        ...t,
                                        subtasks: newSubtasks
                                    } : t)
                            }));
                    }
                } catch (err) {
                    console.error('Error during Supabase update:', err);
                }
            } else {
                // Update local state
                setTasks((prev)=>({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                ...t,
                                subtasks: newSubtasks
                            } : t)
                    }));
            }
        }
    };
    // Save Edited Task
    const saveEditedTask = async ()=>{
        if (taskToEdit && user) {
            const { quadrant, task } = taskToEdit;
            try {
                // Update the task in Supabase
                const { data, error } = await supabase.from('tasks').update({
                    text: task.text
                }).eq('id', task.id).select();
                if (error) {
                    console.error('Error updating task in Supabase:', error);
                    return;
                }
                if (data && data.length > 0) {
                    // Update local state only after successful DB update
                    setTasks((prev)=>({
                            ...prev,
                            [quadrant]: prev[quadrant].map((t)=>t.id === task.id ? {
                                    ...t,
                                    text: task.text
                                } : t)
                        }));
                    console.log('Task updated successfully in Supabase:', data[0]);
                }
            } catch (err) {
                console.error('Error updating task:', err);
            }
            // Clear the editing state and close the modal
            setTaskToEditState(null);
            onTaskModalClose();
        } else if (!user) {
            // If user is not logged in, just update local state
            if (taskToEdit) {
                const { quadrant, task } = taskToEdit;
                setTasks((prev)=>({
                        ...prev,
                        [quadrant]: prev[quadrant].map((t)=>t.id === task.id ? {
                                ...t,
                                text: task.text
                            } : t)
                    }));
            }
            setTaskToEditState(null);
            onTaskModalClose();
        }
    };
    // Save Edited Subtask
    const saveEditedSubtask = async ()=>{
        if (subtaskToEdit) {
            const { quadrant, taskId, subtask } = subtaskToEdit;
            const task = tasks[quadrant].find((task)=>task.id === taskId);
            if (task) {
                const newSubtasks = task.subtasks.map((st)=>st.id === subtask.id ? {
                        ...st,
                        text: subtask.text
                    } : st);
                if (user) {
                    try {
                        const { error } = await supabase.from('tasks').update({
                            subtasks: newSubtasks
                        }).eq('id', taskId);
                        if (error) {
                            console.error('Error updating subtasks in Supabase:', error);
                        } else {
                            // Update local state
                            setTasks((prev)=>({
                                    ...prev,
                                    [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                            ...t,
                                            subtasks: newSubtasks
                                        } : t)
                                }));
                        }
                    } catch (err) {
                        console.error('Error during Supabase update:', err);
                    }
                } else {
                    // Update local state
                    setTasks((prev)=>({
                            ...prev,
                            [quadrant]: prev[quadrant].map((t)=>t.id === taskId ? {
                                    ...t,
                                    subtasks: newSubtasks
                                } : t)
                        }));
                }
                setSubtaskToEdit(null);
                onSubtaskModalClose(); // Close the modal after saving
            }
        }
    };
    // Toggle Task Expansion
    const toggleTaskExpansion = (taskId)=>{
        setExpandedTaskIds((currentIds)=>{
            if (currentIds.includes(taskId)) {
                return currentIds.filter((id)=>id !== taskId);
            } else {
                return [
                    ...currentIds,
                    taskId
                ];
            }
        });
    };
    const moveTaskToQuadrant = (sourceQuadrant, taskId, targetQuadrant)=>{
        const sourceTasks = [
            ...tasks[sourceQuadrant]
        ];
        const taskIndex = sourceTasks.findIndex((task)=>task.id === taskId);
        if (taskIndex === -1) return;
        const [task] = sourceTasks.splice(taskIndex, 1);
        const updatedTargetTasks = [
            ...tasks[targetQuadrant],
            task
        ];
        setTasks((prevTasks)=>({
                ...prevTasks,
                [sourceQuadrant]: sourceTasks,
                [targetQuadrant]: updatedTargetTasks
            }));
    };
    // Drag and Drop Handler
    const onDragEnd = (result)=>{
        const { source, destination } = result;
        // If there's no destination (i.e., task was dropped outside a valid area), do nothing
        if (!destination) return;
        const sourceQuadrant = source.droppableId;
        const destinationQuadrant = destination.droppableId;
        // Get source task
        const sourceTask = sourceQuadrant in tasks && source.index in tasks[sourceQuadrant] ? tasks[sourceQuadrant][source.index] : null;
        // If dragging within the same quadrant
        if (sourceQuadrant === destinationQuadrant) {
            const reorderedTasks = sourceQuadrant in tasks ? Array.from(tasks[sourceQuadrant]) : [];
            const [movedTask] = source.index in reorderedTasks ? reorderedTasks.splice(source.index, 1) : [];
            reorderedTasks.splice(destination.index, 0, movedTask);
            setTasks((prev)=>({
                    ...prev,
                    [sourceQuadrant]: reorderedTasks
                }));
        } else {
            // Moving to a different quadrant
            const sourceTasks = Array.from(tasks[sourceQuadrant]);
            const [movedTask] = sourceTasks.splice(source.index, 1);
            const destinationTasks = Array.from(tasks[destinationQuadrant]);
            destinationTasks.splice(destination.index, 0, movedTask);
            setTasks((prev)=>({
                    ...prev,
                    [sourceQuadrant]: sourceTasks,
                    [destinationQuadrant]: destinationTasks
                }));
        }
    };
    // Render Archived Tasks
    // Function to render archived tasks
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
                            lineNumber: 659,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                            size: "sm",
                            variant: "light",
                            onClick: ()=>unarchiveTask(quadrant, task.id),
                            children: "Unarchive"
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 660,
                            columnNumber: 25
                        }, this)
                    ]
                }, task.id, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 658,
                    columnNumber: 21
                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No archived tasks"
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 670,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 655,
            columnNumber: 9
        }, this);
    // Unarchive Task
    const unarchiveTask = async (quadrant, taskId)=>{
        if (user) {
            try {
                const { error } = await supabase.from('tasks').update({
                    archived: false
                }) // Mark task as unarchived
                .eq('id', taskId);
                if (error) {
                    console.error('Error unarchiving task in Supabase:', error);
                } else {
                    // Update local state
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
                }
            } catch (err) {
                console.error('Error during Supabase unarchive:', err);
            }
        }
    };
    // Toggle Archive Mode
    const showArchivedTasks = ()=>{
        setIsArchiveMode(!isArchiveMode);
    };
    // Render Subtasks
    const renderSubtasks = (quadrant, task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
            droppableId: `subtasks-${task.id}`,
            type: "subtask",
            children: (provided)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "pl-2 mt-2 w-full",
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    children: [
                        task.subtasks?.map((subtask, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$subtaskitem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                subtask: subtask,
                                taskId: task.id,
                                index: index,
                                quadrant: quadrant,
                                toggleSubtaskCompletion: ()=>toggleSubtaskCompletion(quadrant, task.id, subtask.id),
                                deleteSubtask: ()=>deleteSubtask(quadrant, task.id, subtask.id),
                                setSubtaskToEdit: ()=>{
                                    setSubtaskToEdit({
                                        subtask,
                                        taskId: task.id,
                                        quadrant
                                    });
                                    onSubtaskModalOpen();
                                },
                                onSubtaskModalOpen: onSubtaskModalOpen
                            }, subtask.id, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 720,
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
                                    lineNumber: 737,
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
                                        lineNumber: 745,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 744,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 736,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 718,
                    columnNumber: 17
                }, this)
        }, void 0, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 716,
            columnNumber: 9
        }, this);
    // Render Individual Task
    const renderTask = (quadrant, task, index)=>{
        const isBlurred = !isPremium && user; // Blur the task if user is not premium
        const isArchived = task.archived;
        // Apply strikethrough and italic class if the task is archived
        const taskClassName = isArchived ? 'line-through italic text-default-400' : '';
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$taskitem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: taskClassName,
            user: user,
            task: task,
            quadrant: quadrant,
            index: index,
            handleBreakdownTaskWithAI: handleBreakdownTaskWithAI,
            expandedTaskIds: expandedTaskIds,
            toggleTaskCompletion: ()=>toggleTaskCompletion(quadrant, task.id),
            toggleTaskExpansion: ()=>toggleTaskExpansion(task.id),
            setTaskToEdit: setTaskToEdit,
            deleteTask: ()=>deleteTask(quadrant, task.id),
            archiveTask: ()=>archiveTask(quadrant, task.id),
            moveTaskToQuadrant: moveTaskToQuadrant,
            renderSubtasks: (task)=>renderSubtasks(quadrant, task),
            onTaskModalOpen: onTaskModalOpen,
            onTaskModalClose: onTaskModalClose,
            isArchived: isArchived,
            unarchiveTask: isArchived ? ()=>unarchiveTask(quadrant, task.id) : undefined
        }, task.id, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 763,
            columnNumber: 13
        }, this);
    };
    const [lastStreakUpdate, setLastStreakUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const calculateStreak = ()=>{
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set time to midnight for comparison
            const oneDayMs = 24 * 60 * 60 * 1000; // Milliseconds in a day
            // Get all completed tasks, including those with completed_at timestamps
            const completedTasks = Object.values(tasks).flat().filter((task)=>task.completed_at !== null) // Ensure completed_at is not null
            .map((task)=>{
                // Ensure task.completed_at is of a valid type before converting it to a Date
                return task.completed_at instanceof Date ? task.completed_at : new Date(task.completed_at);
            }).sort((a, b)=>b.getTime() - a.getTime()); // Sort by most recent first
            if (completedTasks.length > 0) {
                let streakCount = 0;
                let currentStreakDate = today;
                // Loop through completed tasks to count consecutive streaks
                for (const completedDate of completedTasks){
                    if (completedDate instanceof Date && !isNaN(completedDate.getTime())) {
                        // Ensure it's a valid date before processing
                        const completedDay = new Date(completedDate);
                        completedDay.setHours(0, 0, 0, 0); // Ensure only the date is compared
                        const diffDays = Math.floor((currentStreakDate.getTime() - completedDay.getTime()) / oneDayMs);
                        if (diffDays === 0) {
                            // Task completed today, increase streak
                            streakCount += 1;
                            currentStreakDate.setDate(currentStreakDate.getDate() - 1); // Move streak date to the previous day
                        } else if (diffDays === 1) {
                            // Task completed yesterday, increase streak
                            streakCount += 1;
                            currentStreakDate.setDate(currentStreakDate.getDate() - 1); // Move streak date to the previous day
                        } else {
                            break;
                        }
                    }
                }
                // Update state with the calculated streak
                setStreak(streakCount);
                setLastStreakUpdate(today); // Update the last streak update to today
            } else {
                setStreak(0); // Reset streak if no tasks are completed
            }
        };
        calculateStreak(); // Ensure this runs whenever tasks are updated, including previously completed tasks
    }, [
        tasks
    ]); // Depend on tasks, so it recalculates when they change
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
                                subtasks: subtasks.map((subtaskText, index)=>({
                                        id: Date.now() + index,
                                        text: subtaskText,
                                        completed: false
                                    }))
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
    const getSuggestionsForAllTasks = async (tasks)=>{
        const apiUrl = "https://api.openai.com/v1/completions"; // Example: using OpenAI
        const prompt = `Analyze the following tasks and their subtasks, then suggest improvements or breakdowns into smaller, actionable steps. Tasks: ${JSON.stringify(tasks)}`;
        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer YOUR_API_KEY`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt,
                    max_tokens: 1500
                })
            });
            if (!response.ok) {
                throw new Error("Failed to fetch AI suggestions.");
            }
            const data = await response.json();
            return data.choices[0].text.trim(); // Get the generated suggestions
        } catch (error) {
            console.error(error);
            return "Sorry, there was an error generating suggestions.";
        }
    };
    // Render Quadrant
    const renderQuadrant = (quadrant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Droppable"], {
            droppableId: quadrant,
            children: (provided, snapshot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
                    ref: provided.innerRef,
                    ...provided.droppableProps,
                    className: `p-4 mb-4 ${theme === "dark" ? snapshot.isDraggingOver ? 'bg-zinc-700' : 'bg-zinc-900' : snapshot.isDraggingOver ? 'bg-white' : 'bg-background'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                            className: "flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$2QNX3BHZ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_default__as__Popover$3e$__["Popover"], {
                                    shadow: "lg",
                                    containerPadding: 8,
                                    triggerType: "tree",
                                    size: "sm",
                                    backdrop: "opaque",
                                    placement: "top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$HGSZQ3PO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_trigger_default__as__PopoverTrigger$3e$__["PopoverTrigger"], {
                                            className: "cursor-pointer text-default-500 text-sm",
                                            children: quadrants[quadrant]
                                        }, void 0, false, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 956,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$popover$2f$dist$2f$chunk$2d$AL3RFZCN$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__popover_content_default__as__PopoverContent$3e$__["PopoverContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "p-2 text-xs max-w-[32rem]",
                                                children: quadrantExplanations[quadrant]
                                            }, void 0, false, {
                                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                                lineNumber: 960,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                                            lineNumber: 959,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 955,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    size: "sm",
                                    isIconOnly: true,
                                    variant: "light",
                                    onClick: ()=>{
                                        setSelectedQuadrantForAdd(quadrant);
                                        onAddTaskModalOpen();
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 974,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 965,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 954,
                            columnNumber: 21
                        }, this),
                        tasks[quadrant].length === 0 && archivedTasks[quadrant].length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center py-10 text-center text-default-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/emptystate.png",
                                    className: "w-10 h-10 mt-2 mx-auto",
                                    alt: "No tasks"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 981,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-default-400 text-sm",
                                    children: "No tasks added yet"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 982,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 980,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-default-90 text-lg",
                                children: [
                                    tasks[quadrant].map((task, index)=>renderTask(quadrant, task, index)),
                                    isArchiveMode && archivedTasks[quadrant].map((task, index)=>renderTask(quadrant, task, index))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 986,
                                columnNumber: 29
                            }, this)
                        }, void 0, false),
                        provided.placeholder
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 949,
                    columnNumber: 17
                }, this)
        }, quadrant, false, {
            fileName: "[project]/components/EisenhowerMatrix.tsx",
            lineNumber: 947,
            columnNumber: 9
        }, this);
    // Add Task to Quadrant
    const addTaskToQuadrant = async ()=>{
        if (newTask.trim() && selectedQuadrantForAdd) {
            // Define the new task object
            const newTaskObject = {
                text: newTask.trim(),
                completed: false,
                archived: false,
                quadrant: selectedQuadrantForAdd,
                user_id: user?.sub || 'anonymous'
            };
            if (user) {
                try {
                    // Insert the new task into Supabase, wrapped in an array
                    const { data, error } = await supabase.from('tasks').insert([
                        newTaskObject
                    ]) // Wrap `newTaskObject` in an array
                    .select(); // Ensure the inserted row is returned
                    if (error) {
                        console.error('Error adding task to Supabase:', error);
                    } else if (data && data.length > 0) {
                        console.log(`Task added successfully to Supabase by ${user.name}:`, data);
                        // Update the state only after the task is successfully added to the DB
                        setTasks((prev)=>({
                                ...prev,
                                [selectedQuadrantForAdd]: [
                                    ...prev[selectedQuadrantForAdd],
                                    {
                                        ...newTaskObject,
                                        id: data[0].id,
                                        subtasks: []
                                    }
                                ]
                            }));
                    }
                } catch (err) {
                    console.error('Error inserting task into Supabase:', err);
                }
            } else {
                // User is not logged in
                const localId = Date.now(); // Use a unique local ID as a number
                const localTask = {
                    ...newTaskObject,
                    id: localId,
                    subtasks: [],
                    created_at: new Date(),
                    updated_at: new Date(),
                    completed_at: null
                }; // Initialize subtasks if necessary
                setTasks((prev)=>({
                        ...prev,
                        [selectedQuadrantForAdd]: [
                            ...prev[selectedQuadrantForAdd],
                            localTask
                        ]
                    }));
            }
            // Clear the input and close the modal
            setNewTask('');
            onAddTaskModalClose();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-4",
                children: [
                    user ? isPremium !== null ? isPremium ? // For premium users
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "tracking-tight inline font-semibold text-base mb-16",
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
                            lineNumber: 1068,
                            columnNumber: 37
                        }, this)
                    }, void 0, false) : // For non-premium users
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "tracking-tight inline font-semibold text-base mb-16",
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
                                lineNumber: 1086,
                                columnNumber: 37
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
                                        lineNumber: 1101,
                                        columnNumber: 113
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1100,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {}, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 1106,
                        columnNumber: 29
                    }, this) // Loading state while premium status is being fetched
                     : // For non-logged-in users
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "tracking-tight inline font-semibold text-base",
                                children: "Prioritize your tasks with the Eisenhower Matrix, and break them down"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1111,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-default-500 text-sm mt-4 mb-8",
                                children: [
                                    "No account needed, free forever (more features included with ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$link$2f$dist$2f$chunk$2d$FGDGYNYV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__link_default__as__Link$3e$__["Link"], {
                                        href: "/pricing",
                                        className: "text-cyan-600 underline",
                                        children: "lifetime deal"
                                    }, void 0, false, {
                                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 94
                                    }, this),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1114,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end items-center space-x-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingbutton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            tasks: tasks,
                            showArchivedTasks: showArchivedTasks,
                            isArchiveMode: isArchiveMode,
                            user: user,
                            streakCount: streakCount
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1122,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 1120,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1061,
                columnNumber: 13
            }, this),
            loadingAI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                    size: "lg"
                }, void 0, false, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1134,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1133,
                columnNumber: 17
            }, this),
            firstUrgentTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$floatingwindow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                taskText: firstUrgentTask,
                isVisible: pipVisible,
                onClose: ()=>setPipVisible(false)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1140,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                className: "z-10 fixed bottom-20 mb-4 right-10",
                onClick: ()=>setIsTutorialOpen(true),
                size: "sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/EisenhowerMatrix.tsx",
                        lineNumber: 1152,
                        columnNumber: 17
                    }, this),
                    "Watch Tutorial"
                ]
            }, void 0, true, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1147,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isTutorialOpen,
                onClose: ()=>setIsTutorialOpen(false),
                size: "lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                            children: "Video Tutorial: Eisenhower Matrix"
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1158,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    width: "100%",
                                    height: "315",
                                    src: "https://www.youtube.com/embed/mKN_viAld7I",
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1160,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1159,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                onClick: ()=>setIsTutorialOpen(false),
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1173,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1172,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1157,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1156,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                isOpen: isAddTaskModalOpen,
                onClose: onAddTaskModalClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$NYLTK4XO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                            children: "Add Task"
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1182,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$IR2E3HZF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                value: newTask,
                                onChange: (e)=>setNewTask(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') {
                                        addTaskToQuadrant(); // Updated function call
                                    } else if (e.key === 'Escape') {
                                        onAddTaskModalClose();
                                    }
                                },
                                fullWidth: true,
                                placeholder: "Enter task name"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1184,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1183,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                    onClick: addTaskToQuadrant,
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                                    lineNumber: 1199,
                                    columnNumber: 25
                                }, this),
                                "  "
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1198,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1181,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1180,
                columnNumber: 13
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
                            lineNumber: 1207,
                            columnNumber: 21
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
                                lineNumber: 1209,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1208,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                onClick: saveEditedTask,
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1224,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1223,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1206,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1205,
                columnNumber: 13
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
                            lineNumber: 1231,
                            columnNumber: 21
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
                                lineNumber: 1233,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1232,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                onClick: saveEditedSubtask,
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/EisenhowerMatrix.tsx",
                                lineNumber: 1248,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/EisenhowerMatrix.tsx",
                            lineNumber: 1247,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1230,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow overflow-auto sm:p-0 lg:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hello$2d$pangea$2f$dnd$2f$dist$2f$dnd$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragDropContext"], {
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
                        lineNumber: 1255,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/EisenhowerMatrix.tsx",
                    lineNumber: 1254,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/EisenhowerMatrix.tsx",
                lineNumber: 1253,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/EisenhowerMatrix.tsx",
        lineNumber: 1060,
        columnNumber: 9
    }, this);
};
_s(EisenhowerMatrix, "AnNkhZjvyCbbN0OQ7T6VoXFkQX4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$premiumcontext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremium"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$use$2d$disclosure$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDisclosure"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = EisenhowerMatrix;
const __TURBOPACK__default__export__ = EisenhowerMatrix;
var _c;
__turbopack_refresh__.register(_c, "EisenhowerMatrix");

})()),
}]);

//# sourceMappingURL=components_842f7d._.js.map