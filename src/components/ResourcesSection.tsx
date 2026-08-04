"use client";

import { BookOpen } from "lucide-react";

export default function ResourcesSection() {
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

                    {/* LINKEDIN EMBED CARD */}
                    <article className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group">
                        <div>
                            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                <span className="px-2.5 py-0.5 rounded-full bg-[#0a66c2]/20 text-[#3b82f6] border border-[#0a66c2]/30 font-mono">
                                    Social Feed
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4 fill-[#0a66c2]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white leading-snug mb-3">
                                Latest from LinkedIn
                            </h3>
                        </div>

                        {/* Iframe Container */}
                        <div className="grow w-full rounded-xl overflow-hidden bg-white mt-2">
                            <iframe
                                /* Replace this SRC with your specific LinkedIn embed URL */
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6715282003010437120"
                                height="350"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen
                                title="Embedded LinkedIn Post"
                                className="w-full h-full min-h-87.5"
                            ></iframe>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
