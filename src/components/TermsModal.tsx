"use client";

import React from "react";
import { ShieldCheck, X, FileText, CheckCircle2 } from "lucide-react";

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Terms of Use
                            </h3>
                            <p className="text-xs text-slate-400 font-mono">
                                IVIEWSENSE PRIVATE LIMITED Legal Framework
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto py-6 space-y-4 text-xs text-slate-300 leading-relaxed pr-2">
                    <p>
                        Welcome to IVIEWSENSE PRIVATE LIMITED. By accessing or
                        using our software applications, hardware calibration
                        tools (including Calibmaster and Straight Scan Laser),
                        website, or consulting services, you agree to comply
                        with and be bound by the following Terms of Use.
                    </p>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <h4 className="font-bold text-cyan-300 text-sm">
                            1. Intellectual Property & Quality Frameworks
                        </h4>
                        <p>
                            All software algorithms, Smart 7QC Tools Framework
                            architectures, metrology designs, patents, logos,
                            and digital documentation belong exclusively to
                            IVIEWSENSE PRIVATE LIMITED. Unauthorized duplication
                            or reverse engineering of sensor data loggers is
                            strictly prohibited.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <h4 className="font-bold text-cyan-300 text-sm">
                            2. Industrial SLA & Software Services
                        </h4>
                        <p>
                            Software solutions, SAP consulting deliverables, and
                            industrial automation services provided by
                            IVIEWSENSE PRIVATE LIMITED are subject to specific
                            Master Services Agreements (MSA) and Service Level
                            Agreements (SLA) executed between IVIEWSENSE and the
                            client.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <h4 className="font-bold text-cyan-300 text-sm">
                            3. Data Privacy & Confidentiality
                        </h4>
                        <p>
                            Shop floor telemetry, manufacturing quality metrics,
                            and inspection logs transmitted via IVIEWSENSE edge
                            nodes or cloud pipelines are encrypted with
                            enterprise-grade security protocols in compliance
                            with international data security standards.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <h4 className="font-bold text-cyan-300 text-sm">
                            4. Contact & Corporate Office
                        </h4>
                        <p className="font-mono">
                            Registered GST Address: NO 246 B, FIRST FLOOR, OMR
                            MAIN ROAD, KELAMBAKKAM CHENGALPATTU, TAMILNADU,
                            603103.
                            <br />
                            Email: sales@iviewsense.com | ©2019 by IVIEWSENSE
                            PRIVATE LIMITED.
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-800 flex justify-end shrink-0">
                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
                    >
                        I Accept & Agree
                    </button>
                </div>
            </div>
        </div>
    );
}
