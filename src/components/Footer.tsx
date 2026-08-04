"use client";

import Image from "next/image";
import Link from "next/link";
import {
    MapPin,
    Building,
    Phone,
    Mail,
    ArrowUp,
    ExternalLink,
    ChevronRight,
    ShieldCheck,
} from "lucide-react";

interface FooterProps {
    onOpenTerms: () => void;
    onOpenBookOnline: () => void;
}

export default function Footer({ onOpenTerms, onOpenBookOnline }: FooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#050810] text-slate-400 text-xs border-t border-slate-800/80 relative overflow-hidden">
            {/* Top Subtle Border Glow Line */}
            <div className="h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Column 1: Brand & Overview (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-cyan-500/40">
                                <Image
                                    src="/images/ivs_logo1.png"
                                    alt="IVIEWSENSE Logo (ivs logo1.png)"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <span className="font-extrabold text-base text-white tracking-wider">
                                    IVIEWSENSE
                                </span>
                                <span className="block text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
                                    PRIVATE LIMITED
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-relaxed text-xs">
                            A Smart 7QC Tools Framework empowered with Data
                            Logger, Quality Inspection Automation, Distributed
                            Quality Control, Artificial Intelligence, Blockchain
                            and Machine learning technologies, supporting
                            Quality 4.0.
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                            <a
                                href="https://www.linkedin.com/company/iviewsense"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 font-semibold text-xs"
                            >
                                <svg
                                    className="w-4 h-4 fill-[#0a66c2]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                                <span>Follow on LinkedIn</span>
                                <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>

                            <button
                                onClick={onOpenTerms}
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center gap-2 font-semibold text-xs"
                            >
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Terms of Use</span>
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Navigation & Products (2 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Navigation & Products
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#hero"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Core Services</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#products"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Calibmaster Software</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#products"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Straight Scan Laser</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#blog"
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Blog & Articles</span>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={onOpenBookOnline}
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-left"
                                >
                                    <ChevronRight className="w-3 h-3 text-cyan-500" />
                                    <span>Book Online</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Addresses (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                            Corporate Addresses & Support
                        </h4>

                        {/* GST Address (RETAINED EXACTLY) */}
                        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                            <div className="flex items-center gap-2 text-cyan-300 font-bold text-[11px]">
                                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                                <span>GST Registered Address:</span>
                            </div>
                            <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                                NO 246 B, FIRST FLOOR, OMR MAIN ROAD,
                                KELAMBAKKAM CHENGALPATTU, TAMILNADU, 603103.
                            </p>
                        </div>

                        {/* Support Office (RETAINED EXACTLY) */}
                        <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                            <div className="flex items-center gap-2 text-indigo-300 font-bold text-[11px]">
                                <Building className="w-3.5 h-3.5 text-indigo-400" />
                                <span>Support Office:</span>
                            </div>
                            <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                                Workspace Room No MR1, AltF - 5th Floor, Wing-A,
                                Statesman House, Barakhamba Road, New Delhi -
                                110001
                            </p>
                        </div>

                        {/* Phone & Email (RETAINED EXACTLY) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                                <div className="text-slate-400 font-mono flex items-center gap-1.5">
                                    <Phone className="w-3 h-3 text-cyan-400" />
                                    <span>Contact Numbers:</span>
                                </div>
                                <div className="text-slate-200 font-semibold">
                                    Phone: +91 44 4552 2332 | Mobile +91 99400
                                    34989
                                </div>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-0.5">
                                <div className="text-slate-400 font-mono flex items-center gap-1.5">
                                    <Mail className="w-3 h-3 text-cyan-400" />
                                    <span>Email:</span>
                                </div>
                                <a
                                    href="mailto:sales@iviewsense.com"
                                    className="text-cyan-400 font-semibold hover:underline"
                                >
                                    sales@iviewsense.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright & Scroll to Top Bar */}
                <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
                    {/* Copyright (RETAINED EXACTLY) */}
                    <div className="font-mono text-slate-400">
                        ©2019 by IVIEWSENSE PRIVATE LIMITED. All rights
                        reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={onOpenTerms}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            Terms of Use
                        </button>

                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-1 text-xs"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
