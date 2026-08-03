"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Sparkles,
    Cpu,
    Database,
    ShieldCheck,
    Binary,
    Activity,
    CheckCircle2,
    ArrowRight,
    Maximize2,
    X,
} from "lucide-react";

const techPills = [
    { label: "Data Logger", icon: Database },
    { label: "Quality Inspection Automation", icon: Activity },
    { label: "Distributed Quality Control", icon: Cpu },
    { label: "Artificial Intelligence", icon: Sparkles },
    { label: "Blockchain", icon: ShieldCheck },
    { label: "Machine Learning", icon: Binary },
];

export default function Hero() {
    const [imageModalOpen, setImageModalOpen] = useState(false);

    return (
        <section
            id="hero"
            className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-radial-gradient"
        >
            {/* Background Tech Mesh & Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute top-1/3 right-10 w-100 h-100 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Side: Headline & Quick Tech Stack */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                            <span>Next-Gen Quality 4.0 Ecosystem</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                            Welcome to the{" "}
                            <span className="text-gradient">
                                Data-Driven World
                            </span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
                            IVIEWSENSE PRIVATE LIMITED delivers enterprise
                            intelligence, automated quality engineering, and
                            industrial IoT solutions for global manufacturing
                            leaders.
                        </p>

                        {/* Interactive Tech Stack Tags */}
                        <div className="pt-2">
                            <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                                Powered by Core Technologies:
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {techPills.map((pill, idx) => {
                                    const Icon = pill.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-medium hover:border-cyan-500/50 hover:text-cyan-300 transition-all hover:scale-105 cursor-default shadow-sm"
                                        >
                                            <Icon className="w-3.5 h-3.5 text-cyan-400" />
                                            <span>{pill.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Hero Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4">
                            <a
                                href="#services"
                                className="px-6 py-3.5 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                            >
                                <span>Explore Core Services</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>

                            <a
                                href="#contact"
                                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 text-sm font-semibold transition-all hover:scale-105 flex items-center gap-2"
                            >
                                <span>Request Technical Consultation</span>
                            </a>
                        </div>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
                            <div>
                                <div className="text-2xl font-extrabold text-cyan-400 font-mono">
                                    99.9%
                                </div>
                                <div className="text-xs text-slate-400">
                                    Inspection Precision
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-extrabold text-indigo-400 font-mono">
                                    Quality 4.0
                                </div>
                                <div className="text-xs text-slate-400">
                                    Full Compliance
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-extrabold text-cyan-300 font-mono">
                                    Zero
                                </div>
                                <div className="text-xs text-slate-400">
                                    Defect Architecture
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Smart 7QC Tools Framework Highlight Card & MQ 4.0 Image */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Split-screen Framework Glass Card */}
                        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Cpu className="w-32 h-32 text-cyan-400" />
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                                        Framework Highlight
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Smart 7QC Tools Framework
                                    </h3>
                                </div>
                            </div>

                            {/* Exact Framework Description (RETAINED EXACTLY AS REQUIRED) */}
                            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                                &ldquo;A Smart 7QC Tools Framework empowered
                                with Data Logger, Quality Inspection Automation,
                                Distributed Quality Control, Artificial
                                Intelligence, Blockchain and Machine learning
                                technologies, supporting Quality 4.0&rdquo;
                            </p>

                            {/* Image Preview Container (MQ 4.0.png) */}
                            <div className="mt-6 relative rounded-2xl overflow-hidden border border-slate-700/80 group/img bg-slate-950">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src="/images/MQ_4.0.jpg"
                                        alt="MQ 4.0 Framework Visualization (MQ 4.0.png)"
                                        fill
                                        className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent flex items-end justify-between p-4">
                                        <span className="text-xs font-mono font-semibold text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-lg border border-cyan-500/30">
                                            MQ 4.0 Architecture Diagram
                                        </span>
                                        <button
                                            onClick={() =>
                                                setImageModalOpen(true)
                                            }
                                            className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 backdrop-blur-md border border-cyan-500/40 transition-all hover:scale-110"
                                            title="Expand MQ 4.0 Diagram"
                                        >
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox Modal for MQ 4.0.png */}
            {imageModalOpen && (
                <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl p-4 border border-cyan-500/40 overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setImageModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="mb-3 px-2">
                            <h3 className="text-lg font-bold text-white">
                                Quality 4.0 Smart 7QC Tools Framework
                            </h3>
                            <p className="text-xs text-slate-400">
                                High-resolution architecture diagram (Reference:
                                MQ 4.0.png)
                            </p>
                        </div>
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                            <Image
                                src="/images/MQ_4.0.jpg"
                                alt="MQ 4.0.png Full View"
                                fill
                                className="object-contain bg-slate-950"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
