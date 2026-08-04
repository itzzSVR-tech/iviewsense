"use client";

import { Award, ShieldCheck, CheckCircle, TrendingUp } from "lucide-react";

export const clientList = [
    {
        name: "Hero Motors Limited",
        sector: "Automotive Powertrain & Gear Manufacturing",
        badge: "Enterprise Automotive",
        icon: "/images/hero.png",
        description:
            "Deployed automated Quality inspection & distributed Quality control systems across key transmission lines.",
    },
    {
        name: "Hanon",
        sector: "Automotive Climate & Thermal Energy Systems",
        badge: "Global OEM",
        icon: "/images/hanon.png",
        description:
            "Integrated real-time data logger and manufacturing quality analytics for thermal management components.",
    },
    {
        name: "Fujitec",
        sector: "Elevator & Vertical Transportation Engineering",
        badge: "Precision Machinery",
        icon: "/images/fujitec.png",
        description:
            "Implemented high-accuracy straightness laser scanning & Calibmaster gauge calibration modules.",
    },
    {
        name: "Rane TRW",
        sector: "Occupant Safety & Steering System Technology",
        badge: "Tier-1 Auto System",
        icon: "/images/trw.png",
        description:
            "Smart 7QC tools framework integration with automated SPC defect tracking and live reporting.",
    },
    {
        name: "TNPL",
        sector: "Tamil Nadu Newsprint and Papers Limited (Process Industry)",
        badge: "Process & Paper Manufacturing",
        icon: "/images/tnpl.png",
        description:
            "Enterprise software solutions and Microsoft partnership data intelligence dashboards.",
    },
];

export default function ClientsMarquee() {
    return (
        <section
            id="clients"
            className="py-20 bg-[#090e1a] border-y border-slate-800/80 relative overflow-hidden"
        >
            {/* Background Accent Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-75 bg-cyan-500/5 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
                        <Award className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Trusted Industry Partnerships</span>
                    </div>

                    {/* Heading (RETAINED EXACTLY) */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        Our Happy Clients
                    </h2>
                    <p className="text-slate-400 mt-3 text-sm sm:text-base">
                        Powering Quality 4.0, industrial automation, and data
                        intelligence for leading enterprise manufacturers.
                    </p>
                </div>

                {/* Infinitely Scrolling Animated Logo Marquee */}
                <div className="relative w-full overflow-hidden py-4 mb-16 rounded-2xl bg-slate-950/60 border border-slate-800/80 backdrop-blur-md">
                    {/* Gradient Edge Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0a0f1c] to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-marquee flex items-center gap-8 sm:gap-12">
                        {[...clientList, ...clientList, ...clientList].map(
                            (client, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all cursor-pointer group shrink-0"
                                >
                                    <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                                        <img
                                            src={client.icon}
                                            className="w-7 h-7"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                                            {client.name}
                                        </div>
                                        <div className="text-[10px] text-slate-400 font-mono tracking-wide">
                                            {client.badge}
                                        </div>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>

                {/* Polished Grid of Clients */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clientList.map((client, idx) => (
                        <div
                            key={idx}
                            className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-all"></div>

                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-950 text-cyan-400 border border-cyan-500/30">
                                        {client.badge}
                                    </span>
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                                    {client.name}
                                </h3>
                                <div className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                    {client.sector}
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
                                    {client.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                                <span className="flex items-center gap-1 text-emerald-400 font-mono">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                    Verified Solution Deployment
                                </span>
                                <TrendingUp className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    ))}

                    {/* Bonus Enterprise Trust Card */}
                    <div className="glass-card rounded-2xl p-6 border-dashed border-cyan-500/40 bg-cyan-950/20 flex flex-col justify-center items-center text-center">
                        <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 mb-3">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">
                            Partner with IVIEWSENSE
                        </h3>
                        <p className="text-xs text-slate-300 mb-4 max-w-xs">
                            Transform your plant quality control with AI, IoT
                            sensors, and automated 7QC tools.
                        </p>
                        <a
                            href="#contact"
                            className="px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 rounded-xl hover:bg-cyan-300 transition-colors"
                        >
                            Get In Touch With Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
