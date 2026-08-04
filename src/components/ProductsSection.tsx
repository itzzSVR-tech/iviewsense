"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Cpu, Maximize2, X, Zap } from "lucide-react";

export interface ProductItem {
    id: string;
    title: string;
    badge: string;
    subtitle: string;
    image: string;
    description: string;
    highlights: string[];
    specs: { label: string; value: string }[];
}

export const productsData: ProductItem[] = [
    {
        id: "calibmaster",
        title: "Calibmaster",
        badge: "Flagship Quality Software",
        subtitle:
            "Enterprise Industrial Gauge & Equipment Calibration Management System",
        image: "/images/calibmaster.jpg",
        description:
            "Calibmaster is IVIEWSENSE's flagship software solution built specifically for industrial quality laboratories and manufacturing plants. It automates calibration schedules, gauge tracking, uncertainty calculations, and digital NIST-traceable calibration certificate generation.",
        highlights: [
            "Automated Gauge & Instrument Calibration Scheduling",
            "NIST & ISO/IEC 17025 Traceable Digital Certificates",
            "Real-time Equipment Wear & Tolerance Drift Warnings",
            "Multi-facility Centralized Calibration Database",
        ],
        specs: [
            { label: "Deployment", value: "Cloud / On-Premise" },
            { label: "Compliance", value: "ISO 9001 / IATF 16949" },
            { label: "Database", value: "PostgreSQL / SQL Server" },
            { label: "Interface", value: "REST API & SAP QM Connector" },
        ],
    },
    {
        id: "straight-scan-laser",
        title: "Straight Scan Laser",
        badge: "Hardware & Software Integration",
        subtitle:
            "High-Precision Automated Laser Straightness Measurement & Inspection System",
        image: "/images/straight_scan_laser.jpg",
        description:
            "Straight Scan Laser combines high-speed optoelectronic laser sensor hardware with real-time analytics software. Designed for high-precision measurement of component straightness, shaft runout, and geometric tolerances directly on production lines.",
        highlights: [
            "Micrometer Precision Non-Contact Laser Scanning",
            "Real-time Shaft Straightness & Runout Deviation Analysis",
            "High-speed In-line Inspection Cycle (< 2 seconds)",
            "Direct PLC Triggering & Automated Pass/Fail Sorting",
        ],
        specs: [
            { label: "Sensor Tech", value: "Dual Triangulation Laser" },
            { label: "Resolution", value: "±0.1 µm" },
            { label: "Sampling Rate", value: "10 kHz Live Stream" },
            { label: "Output", value: "Digital I/O & Ethernet/IP" },
        ],
    },
];

interface Props {
    selectedProductTitle?: string | null;
}

export default function ProductsSection({ selectedProductTitle }: Props) {
    const [activeModalProduct, setActiveModalProduct] =
        useState<ProductItem | null>(null);

    React.useEffect(() => {
        if (selectedProductTitle) {
            const found = productsData.find(
                (p) =>
                    p.title.toLowerCase() ===
                    selectedProductTitle.toLowerCase(),
            );
            if (found) {
                setActiveModalProduct(found);
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [selectedProductTitle]);

    return (
        <section
            id="products"
            className="py-24 bg-[#090e1a] border-t border-slate-800/80 relative overflow-hidden"
        >
            {/* Glow Orbs */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Proprietary Innovations</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Products
                    </h2>
                    <p className="text-slate-400 mt-4 text-base sm:text-lg">
                        High-precision hardware and software solutions
                        engineered to elevate quality control and manufacturing
                        accuracy.
                    </p>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {productsData.map((product) => {
                        return (
                            <div
                                key={product.id}
                                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between group shadow-xl"
                            >
                                <div>
                                    {/* Badge & Image */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                                            {product.badge}
                                        </span>
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                    </div>

                                    {/* Image Container */}
                                    <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden mb-6 border border-slate-700/80 bg-slate-950">
                                        <Image
                                            src={product.image}
                                            alt={`${product.title} Product Visual`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-4">
                                            <span className="text-xs font-mono text-cyan-300 font-bold bg-slate-950/80 px-3 py-1 rounded-lg border border-cyan-500/30">
                                                {product.title}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    setActiveModalProduct(
                                                        product,
                                                    )
                                                }
                                                className="p-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 backdrop-blur-md border border-cyan-500/40 transition-all hover:scale-110"
                                                title="View Product Specs"
                                            >
                                                <Maximize2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Title & Subtitle */}
                                    <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-xs text-cyan-400 font-medium mt-1 mb-3">
                                        {product.subtitle}
                                    </p>

                                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
                                        {product.description}
                                    </p>

                                    {/* Key Highlights */}
                                    <div className="space-y-2 mb-6">
                                        {product.highlights.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-2 text-xs text-slate-300"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Buttons */}
                                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                                    <button
                                        onClick={() =>
                                            setActiveModalProduct(product)
                                        }
                                        className="text-xs font-bold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5"
                                    >
                                        <span>View Specifications</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>

                                    <a
                                        href="#contact"
                                        className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-md"
                                    >
                                        Request Demo
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Specifications Lightbox Modal */}
            {activeModalProduct && (
                <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
                    <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl p-6 border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setActiveModalProduct(null)}
                            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                                {activeModalProduct.badge}
                            </span>
                            <h3 className="text-2xl font-bold text-white">
                                {activeModalProduct.title}
                            </h3>
                        </div>

                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6">
                            <Image
                                src={activeModalProduct.image}
                                alt={activeModalProduct.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-slate-200 mb-6">
                            {activeModalProduct.description}
                        </p>

                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
                            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3">
                                Technical Specifications
                            </h4>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                                {activeModalProduct.specs.map((spec, idx) => (
                                    <div
                                        key={idx}
                                        className="p-2.5 rounded-xl bg-slate-900 border border-slate-800"
                                    >
                                        <span className="text-slate-400 block text-[10px] font-mono">
                                            {spec.label}
                                        </span>
                                        <span className="font-bold text-white">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <button
                                onClick={() => setActiveModalProduct(null)}
                                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                            >
                                Close Specs
                            </button>
                            <a
                                href="#contact"
                                onClick={() => setActiveModalProduct(null)}
                                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
                            >
                                Inquire For Procurement
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
