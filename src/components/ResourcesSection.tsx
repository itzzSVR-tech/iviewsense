"use client";

import React, { useState } from "react";
import {
    BookOpen,
    FileText,
    Sparkles,
    ArrowRight,
    Calendar,
    Clock,
    User,
    Download,
    Tag,
    X,
    Share2,
    CheckCircle,
} from "lucide-react";

export const blogArticles = [
    {
        id: 1,
        title: "Understanding Quality 4.0: Transforming Manufacturing Inspection with AI & Blockchain",
        date: "July 28, 2026",
        readTime: "6 min read",
        author: "IVIEWSENSE Technical Team",
        category: "Quality 4.0",
        excerpt:
            "How traditional 7QC tools are evolving into automated, machine-learning-driven frameworks connected directly to industrial data loggers.",
        content:
            "Quality 4.0 represents the alignment of Industry 4.0 technology with traditional quality management methods. By embedding IoT sensors, real-time data loggers, and distributed quality control algorithms directly onto shop floors, manufacturers eliminate batch inspection lag and achieve zero-defect production.",
    },
    {
        id: 2,
        title: "Automating Gauge Calibration with Calibmaster & ISO 17025 Compliance",
        date: "June 14, 2026",
        readTime: "8 min read",
        author: "Lead Metrology Engineer",
        category: "Metrology & Software",
        excerpt:
            "Eliminate manual gauge log errors and maintain digital audit readiness across multi-plant automotive supply chains.",
        content:
            "Industrial calibration requires strict adherence to NIST and ISO standards. Manual record-keeping leads to out-of-tolerance gauge usage. Calibmaster provides automated calibration scheduling, digital certificate generation, and seamless SAP QM synchronization.",
    },
    {
        id: 3,
        title: "Non-Contact Laser Scanning: High-Speed Straightness & Shaft Measurement",
        date: "May 02, 2026",
        readTime: "5 min read",
        author: "Automation Research Group",
        category: "Industrial Automation",
        excerpt:
            "A deep dive into optoelectronic laser triangulation for micrometer-level inline straightness inspection.",
        content:
            "Automotive steering columns, drive shafts, and precision spindles require micrometer straightness tolerances. Straight Scan Laser delivers high-speed non-contact measurement in under 2 seconds per component, triggering automated pass/fail sorting.",
    },
];

export const whitepapers = [
    {
        id: "paper-1",
        title: "Smart 7QC Tools Framework Whitepaper",
        subtitle:
            "Architectural Specification for Data-Logger Empowered Quality Inspection",
        pages: "18 Pages",
        format: "PDF Document",
        abstract:
            "This paper outlines the mathematical and technological foundation of IVIEWSENSE's Smart 7QC Tools Framework, combining Pareto analysis, Fishbone root cause mapping, SPC Control Charts, AI neural networks (ResNet Q50), and immutable Blockchain verification.",
    },
    {
        id: "paper-2",
        title: "Distributed Quality Control Systems (DQCS) in Automotive Manufacturing",
        subtitle: "Eliminating Inspection Bottlenecks via Edge-AI Nodes",
        pages: "24 Pages",
        format: "PDF Document",
        abstract:
            "A comprehensive study on deploying edge computing nodes across high-speed automotive assembly lines for instantaneous defect detection and automatic PLC signal feedback.",
    },
];

export default function ResourcesSection() {
    const [activeBlog, setActiveBlog] = useState<
        (typeof blogArticles)[0] | null
    >(null);
    const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

    const handleDownloadPaper = (title: string) => {
        setDownloadSuccess(title);
        setTimeout(() => setDownloadSuccess(null), 4000);
    };

    return (
        <section className="py-24 bg-[#070b14] relative overflow-hidden">
            {/* Background Subtle Gradient */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
                {/* BLOG SECTION */}
                <div id="blog" className="scroll-mt-28">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Industry Insights & Articles</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            IVIEWSENSE Blog
                        </h2>
                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            Latest insights on Quality 4.0, industrial
                            automation, metrology, and SAP ERP integration.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {blogArticles.map((article) => (
                            <article
                                key={article.id}
                                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono">
                                            {article.category}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                                        {article.title}
                                    </h3>

                                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                                        {article.excerpt}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                    <div className="text-[11px] text-slate-400 flex items-center gap-1">
                                        <User className="w-3 h-3 text-cyan-400" />
                                        <span>{article.author}</span>
                                    </div>

                                    <button
                                        onClick={() => setActiveBlog(article)}
                                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                                    >
                                        <span>Read Article</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* PAPERS SECTION */}
                <div id="papers" className="scroll-mt-28">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                            <FileText className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Research & Technical Publications</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Technical Papers & Whitepapers
                        </h2>
                        <p className="text-slate-400 mt-2 text-sm sm:text-base">
                            Peer-reviewed technical frameworks, Quality 4.0
                            architecture specifications, and metrology studies.
                        </p>
                    </div>

                    {downloadSuccess && (
                        <div className="max-w-xl mx-auto mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-in fade-in">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>
                                Technical Paper request registered for: &quot;
                                {downloadSuccess}&quot;. Download link prepared!
                            </span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {whitepapers.map((paper) => (
                            <div
                                key={paper.id}
                                className="glass-card rounded-2xl p-6 border border-cyan-500/30 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                        <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-slate-700 font-mono">
                                            {paper.format}
                                        </span>
                                        <span className="font-mono text-slate-400">
                                            {paper.pages}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                                        {paper.title}
                                    </h3>
                                    <div className="text-xs text-cyan-400 font-mono mb-4">
                                        {paper.subtitle}
                                    </div>

                                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-6">
                                        {paper.abstract}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                                    <span className="text-[11px] text-slate-400 font-mono">
                                        IVIEWSENSE Technical Library
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleDownloadPaper(paper.title)
                                        }
                                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all flex items-center gap-2"
                                    >
                                        <Download className="w-4 h-4" />
                                        <span>Download Whitepaper</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Article Reader Modal */}
            {activeBlog && (
                <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setActiveBlog(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                            <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono">
                                {activeBlog.category}
                            </span>
                            <span>{activeBlog.date}</span>
                            <span>•</span>
                            <span>{activeBlog.readTime}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                            {activeBlog.title}
                        </h3>

                        <div className="text-xs text-slate-400 mb-6 flex items-center gap-2 pb-4 border-b border-slate-800">
                            <User className="w-4 h-4 text-cyan-400" />
                            <span>By {activeBlog.author}</span>
                        </div>

                        <div className="prose prose-invert max-w-none text-slate-200 text-sm leading-relaxed space-y-4">
                            <p className="font-semibold text-cyan-300 text-base">
                                {activeBlog.excerpt}
                            </p>
                            <p>{activeBlog.content}</p>
                            <p>
                                As industrial processes become increasingly
                                automated, integration with high-speed sensor
                                hardware and distributed Quality 4.0 control
                                tools ensures zero-defect delivery across
                                enterprise supply chains.
                            </p>
                        </div>

                        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
                            <button
                                onClick={() => setActiveBlog(null)}
                                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
                            >
                                Close Article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
