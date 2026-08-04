"use client";

import React, { useState } from "react";
import {
    Database,
    Cpu,
    GraduationCap,
    Factory,
    Award,
    FileSpreadsheet,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    ExternalLink,
    Layers,
    Sparkles,
    X,
} from "lucide-react";

export interface CoreServiceItem {
    id: string;
    title: string;
    icon: React.ElementType;
    badge: string;
    shortDesc: string;
    fullDesc: string;
    features: string[];
    deliverables: string;
    sampleType?: "location" | "analytics" | null;
}

export const coreServicesData: CoreServiceItem[] = [
    {
        id: "sap-consulting",
        title: "SAP Consulting Services",
        icon: Database,
        badge: "Enterprise ERP",
        shortDesc:
            "End-to-end SAP ERP implementation, module customization, and smart plant integration.",
        fullDesc:
            "We provide comprehensive SAP consulting services tailored for manufacturing and industrial enterprises. Our expertise spans SAP S/4HANA migration, SAP Quality Management (QM), SAP Plant Maintenance (PM), and custom SAP ABAP module integration with real-time shop-floor IoT sensors.",
        features: [
            "SAP S/4HANA & ECC 6.0 Integration",
            "SAP Quality Management (QM) Module Optimization",
            "Real-time Shop Floor to SAP ERP Data Synchronization",
            "Custom ABAP & Fiori App Development",
        ],
        deliverables:
            "Turnkey SAP ERP Architecture, QM Workflow Automation, and Live Plant Dashboards.",
    },
    {
        id: "software-solutions",
        title: "Software solutions",
        icon: Cpu,
        badge: "B2B Engineering",
        shortDesc:
            "Custom enterprise software development, IIoT platform architecture, and automation tools.",
        fullDesc:
            "IVIEWSENSE engineers high-reliability bespoke software applications for manufacturing, quality assurance, and industrial operations. From desktop-connected sensor software to cloud-native analytics platforms, we turn complex industrial data into actionable intelligence.",
        features: [
            "Industrial IoT (IIoT) Cloud & Edge Applications",
            "Automated Gauge & Sensor Data Collectors",
            "Cross-platform Web & Desktop Engineering Apps",
            "High-speed Time-series Data Ingestion Engines",
        ],
        deliverables:
            "Custom Proprietary Software, API Frameworks, and Dedicated Maintenance SLA.",
    },
    {
        id: "training-placement",
        title: "Software training and placement services",
        icon: GraduationCap,
        badge: "Talent Enablement",
        shortDesc:
            "Professional industrial software training programs and career placement solutions.",
        fullDesc:
            "Bridging the gap between engineering academia and industry requirements. We deliver specialized technical training in software engineering, Quality 4.0 methodologies, industrial automation, and SAP modules, followed by direct talent placement into top-tier industrial clients.",
        features: [
            "Hands-on Quality 4.0 & SPC Training Modules",
            "Industrial Software Development Bootcamp",
            "Corporate Upskilling & Certification Programs",
            "Direct Recruitment & Talent Placement Network",
        ],
        deliverables:
            "Certified Workforce Development, Placement Trackers, and Corporate Curriculums.",
    },
    {
        id: "industrial-automation",
        title: "Industrial Automation Services",
        icon: Factory,
        badge: "Smart Factory",
        shortDesc:
            "Comprehensive plant automation, PLC/SCADA programming, and automated quality inspection.",
        fullDesc:
            "We design and deploy robust industrial automation hardware and software systems. Our solutions integrate vision inspection cameras, laser measurement devices, PLC controllers, and robotics to eliminate manual quality control bottlenecks on high-speed production lines.",
        features: [
            "PLC & SCADA Control System Programming",
            "Machine Vision & Automated Optical Inspection (AOI)",
            "High-precision Laser Measurement Rig Integration",
            "Distributed Quality Control System (DQCS) Setup",
        ],
        deliverables:
            "Automated Inspection Lines, PLC/SCADA HMI Systems, and Zero-Defect Frameworks.",
    },
    {
        id: "microsoft-partnership",
        title: "Microsoft partnership services",
        icon: Award,
        badge: "Certified Cloud",
        shortDesc:
            "Enterprise Microsoft Azure, Power BI analytics, and cloud data intelligence partnerships.",
        fullDesc:
            "As a trusted Microsoft partner ecosystem contributor, IVIEWSENSE leverages Microsoft Azure Cloud, Power Platform, and Power BI embedded analytics to build scalable enterprise reporting, automated data pipelines, and machine learning models for industrial clients.",
        features: [
            "Microsoft Azure IoT Hub & Cloud Infrastructure",
            "Power BI Custom Embedded Analytics & SPC Dashboards",
            "Microsoft SQL Server & Data Lake Integrations",
            "Azure Machine Learning Defect Prediction Pipelines",
        ],
        deliverables:
            "Azure Cloud Deployment, Live Power BI Dashboards, and Enterprise Security Audits.",
    },
    {
        id: "location-report-sample",
        title: "Courses and Location Report Sample",
        icon: FileSpreadsheet,
        badge: "Sample Report & Courses",
        shortDesc:
            "Interactive educational course modules and geospatial analytical location report samples.",
        fullDesc:
            "Explore our specialized course outlines alongside interactive sample location reports. These reports demonstrate our geospatial data logging and multi-facility quality monitoring across geographically distributed manufacturing sites.",
        features: [
            "Multi-site Facility Geospatial Location Mapping",
            "Automated Regional Quality Performance Reports",
            "Structured Industrial Engineering Course Outlines",
            "Exportable PDF & Interactive Web Samples",
        ],
        deliverables:
            "Interactive Location Analytics Sample & Comprehensive Course Syllabus.",
        sampleType: "location",
    },
    {
        id: "quality-analytics-sample",
        title: "Manufacturing Quality Analytics Sample",
        icon: BarChart3,
        badge: "Live Analytics Sample",
        shortDesc:
            "Real-time SPC, defect pareto analysis, and Quality 4.0 inspection sample reports.",
        fullDesc:
            "Experience our signature Manufacturing Quality Analytics sample interface. Built around the Smart 7QC Tools Framework, it visualizes real-time X-bar & R control charts, histogram distribution, pareto defect breakdown, and AI machine learning root cause analysis.",
        features: [
            "Real-time X-Bar & R SPC Control Charts",
            "AI-driven Defect Pareto & Fishbone Root Cause Analysis",
            "Real-time Machine Learning Accuracy Tracker (ResNet Q50)",
            "Immutable Blockchain Inspection Audit Log Trail",
        ],
        deliverables:
            "Interactive Quality Analytics Sample Dashboard & Quality 4.0 Benchmark Report.",
        sampleType: "analytics",
    },
];

interface Props {
    selectedServiceTitle?: string | null;
    onClearSelectedService?: () => void;
}

export default function CoreServicesSection({ selectedServiceTitle }: Props) {
    const [activeTab, setActiveTab] = useState<string>("sap-consulting");
    const [sampleModal, setSampleModal] = useState<
        "location" | "analytics" | null
    >(null);

    // If external service selected from navbar, update tab
    React.useEffect(() => {
        if (selectedServiceTitle) {
            const found = coreServicesData.find(
                (s) =>
                    s.title.toLowerCase() ===
                    selectedServiceTitle.toLowerCase(),
            );
            if (found) {
                setActiveTab(found.id);
                const el = document.getElementById("services");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [selectedServiceTitle]);

    const activeService =
        coreServicesData.find((s) => s.id === activeTab) || coreServicesData[0];

    return (
        <section
            id="services"
            className="py-24 bg-[#070b14] relative overflow-hidden"
        >
            {/* Background Accent Glow */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        <span>End-to-End Capabilities</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Core Services
                    </h2>
                    <p className="text-slate-400 mt-4 text-base sm:text-lg">
                        Empowering modern enterprises with specialized SAP
                        consulting, custom software solutions, Microsoft
                        partnership services, and Quality 4.0 analytics.
                    </p>
                </div>

                {/* Desktop & Mobile Interactive Service Selector Tabs */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left List of Core Services */}
                    <div className="lg:col-span-4 space-y-2.5">
                        {coreServicesData.map((service) => {
                            const Icon = service.icon;
                            const isSelected = activeTab === service.id;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 flex items-center justify-between group border ${
                                        isSelected
                                            ? "bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10 text-white"
                                            : "bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/60 text-slate-300 hover:border-slate-700"
                                    }`}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div
                                            className={`p-2.5 rounded-xl transition-colors ${
                                                isSelected
                                                    ? "bg-cyan-500 text-slate-950 font-bold"
                                                    : "bg-slate-800 text-cyan-400 group-hover:bg-slate-700"
                                            }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div
                                                className={`text-sm font-bold ${isSelected ? "text-cyan-300" : "text-slate-200"}`}
                                            >
                                                {service.title}
                                            </div>
                                            <div className="text-[11px] text-slate-400 font-mono">
                                                {service.badge}
                                            </div>
                                        </div>
                                    </div>

                                    <ArrowRight
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                            isSelected
                                                ? "translate-x-1 text-cyan-400"
                                                : "opacity-0 group-hover:opacity-100 text-slate-500"
                                        }`}
                                    />
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Active Service Showcase Card */}
                    <div className="lg:col-span-8">
                        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden shadow-2xl">
                            {/* Header Badge */}
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                                        <activeService.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                                            {activeService.badge}
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                                            {activeService.title}
                                        </h3>
                                    </div>
                                </div>

                                {activeService.sampleType && (
                                    <button
                                        onClick={() =>
                                            setSampleModal(
                                                activeService.sampleType!,
                                            )
                                        }
                                        className="px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/40 transition-all flex items-center gap-2 shadow-lg"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>
                                            View Interactive Sample Report
                                        </span>
                                    </button>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                                {activeService.fullDesc}
                            </p>

                            {/* Key Features Grid */}
                            <div className="mb-6">
                                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Key Capabilities & Features
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {activeService.features.map((feat, idx) => (
                                        <div
                                            key={idx}
                                            className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Deliverables Banner */}
                            <div className="p-4 rounded-2xl bg-linear-to-r from-slate-900 to-cyan-950/40 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                                <div>
                                    <div className="text-[11px] font-mono text-slate-400 uppercase">
                                        Primary Deliverables
                                    </div>
                                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                                        {activeService.deliverables}
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-md shrink-0"
                                >
                                    Inquire About Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Sample Report Modal (for Courses/Location & Quality Analytics) */}
            {sampleModal && (
                <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl p-6 border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setSampleModal(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {sampleModal === "location" ? (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        <FileSpreadsheet className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            Courses and Location Report Sample
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            IVIEWSENSE Geospatial Location &
                                            Educational Curriculum Sample
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                        <h4 className="text-sm font-bold text-cyan-300 mb-2">
                                            Registered Corporate Locations &
                                            Facilities
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                                <div className="font-bold text-white">
                                                    Registered GST Office
                                                </div>
                                                <div className="text-slate-400 mt-1">
                                                    Kelambakkam, Chengalpattu,
                                                    Tamil Nadu - 603103
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                                                <div className="font-bold text-white">
                                                    North India Support Office
                                                </div>
                                                <div className="text-slate-400 mt-1">
                                                    Statesman House, Barakhamba
                                                    Road, New Delhi - 110001
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                        <h4 className="text-sm font-bold text-cyan-300 mb-2">
                                            Available Technical Courses Syllabus
                                        </h4>
                                        <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside">
                                            <li>
                                                Quality 4.0 & Smart 7QC Tools
                                                Masterclass
                                            </li>
                                            <li>
                                                Industrial IIoT Sensor
                                                Interfacing & Data Logger Setup
                                            </li>
                                            <li>
                                                SAP Quality Management (QM)
                                                Enterprise Integration
                                            </li>
                                            <li>
                                                Automated Optical & Laser
                                                Straightness Scanning Protocol
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => setSampleModal(null)}
                                            className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                                        >
                                            Close Sample View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        <BarChart3 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            Manufacturing Quality Analytics
                                            Sample
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            Live SPC & Quality 4.0 Inspection
                                            Metrics Simulation
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30">
                                        <div className="text-[10px] text-slate-400 font-mono">
                                            GLOBAL QUALITY INDEX
                                        </div>
                                        <div className="text-xl font-bold text-cyan-400 font-mono">
                                            99.7%
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30">
                                        <div className="text-[10px] text-slate-400 font-mono font-normal">
                                            DEFECT RATE
                                        </div>
                                        <div className="text-xl font-bold text-emerald-400 font-mono">
                                            0.12%
                                        </div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-slate-950 border border-cyan-500/30">
                                        <div className="text-[10px] text-slate-400 font-mono font-normal">
                                            AI ML ACCURACY
                                        </div>
                                        <div className="text-xl font-bold text-indigo-400 font-mono">
                                            98.4% (ResNet Q50)
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-4">
                                    <div className="text-xs font-mono text-cyan-400 mb-2">
                                        LIVE CONTROL CHART (X-BAR & R)
                                    </div>
                                    <div className="h-28 bg-slate-900 rounded-xl p-3 flex items-end justify-between gap-1 border border-slate-800">
                                        {[
                                            45, 60, 52, 75, 48, 85, 92, 78, 65,
                                            88, 95, 70, 82, 90, 85,
                                        ].map((h, idx) => (
                                            <div
                                                key={idx}
                                                className="w-full bg-cyan-500/80 hover:bg-cyan-400 rounded-t transition-all"
                                                style={{ height: `${h}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setSampleModal(null)}
                                        className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                                    >
                                        Close Sample View
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
