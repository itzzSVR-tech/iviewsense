"use client";

import { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Building,
    Send,
    CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "SAP Consulting Services",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 800);
    };

    return (
        <section
            id="contact"
            className="py-24 bg-[#090e1a] border-t border-slate-800 relative overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-cyan-500/5 blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Connect with IVIEWSENSE Experts</span>
                    </div>

                    {/* Heading (RETAINED EXACTLY) */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="text-slate-400 mt-4 text-base sm:text-lg">
                        Have questions about Quality 4.0, Calibmaster software,
                        or SAP consulting? Reach out to our technical team
                        today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Contact Details Cards (GST Address, Support Office, Phone, Email) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* GST Registered Address Card */}
                        <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                                        GST Registered Corporate Address
                                    </span>
                                    <h4 className="text-sm font-bold text-white">
                                        Kelambakkam Headquarters
                                    </h4>
                                </div>
                            </div>

                            {/* GST Address (RETAINED EXACTLY) */}
                            <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                                NO 246 B, FIRST FLOOR, OMR MAIN ROAD,
                                KELAMBAKKAM CHENGALPATTU, TAMILNADU, 603103.
                            </p>
                        </div>

                        {/* Support Office Card */}
                        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
                                    <Building className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider block">
                                        Regional Support Office
                                    </span>
                                    <h4 className="text-sm font-bold text-white">
                                        New Delhi Workspace
                                    </h4>
                                </div>
                            </div>

                            {/* Support Office (RETAINED EXACTLY) */}
                            <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950/70 p-3.5 rounded-xl border border-slate-800">
                                Workspace Room No MR1, AltF - 5th Floor, Wing-A,
                                Statesman House, Barakhamba Road, New Delhi -
                                110001
                            </p>
                        </div>

                        {/* Contact Numbers & Email Card */}
                        <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
                            <div className="flex items-center gap-3.5">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                                        Contact Numbers
                                    </span>
                                    {/* Phone & Mobile (RETAINED EXACTLY) */}
                                    <div className="text-xs font-bold text-white">
                                        Phone: +91 44 4552 2332 | Mobile +91
                                        99400 34989
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 pt-3 border-t border-slate-800">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                                        Sales & Inquiries
                                    </span>
                                    {/* Email (RETAINED EXACTLY) */}
                                    <a
                                        href="mailto:sales@iviewsense.com"
                                        className="text-xs font-bold text-cyan-400 hover:underline"
                                    >
                                        sales@iviewsense.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Modern Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white">
                                    Send Us a Message
                                </h3>
                                <p className="text-xs text-slate-400 mt-1">
                                    Fill in your requirements and our solution
                                    architect will get back to you within 24
                                    hours.
                                </p>
                            </div>

                            {submitted ? (
                                <div className="py-12 px-6 text-center bg-slate-950/80 rounded-2xl border border-cyan-500/40 animate-in zoom-in-95 duration-300">
                                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-10 h-10 animate-bounce" />
                                    </div>
                                    {/* Placeholder Success Message (RETAINED EXACTLY AS REQUIRED) */}
                                    <h4 className="text-2xl font-extrabold text-white mb-2">
                                        Thanks for submitting!
                                    </h4>
                                    <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                                        Our engineering team has received your
                                        message. We look forward to partnering
                                        with your organization.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormState({
                                                name: "",
                                                email: "",
                                                phone: "",
                                                company: "",
                                                service:
                                                    "SAP Consulting Services",
                                                message: "",
                                            });
                                        }}
                                        className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
                                    >
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                                Your Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        name: e.target.value,
                                                    })
                                                }
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                                Corporate Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="j.doe@company.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formState.phone}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        phone: e.target.value,
                                                    })
                                                }
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formState.company}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        company: e.target.value,
                                                    })
                                                }
                                                placeholder="Acme Industrial Corp"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                            Area of Interest
                                        </label>
                                        <select
                                            value={formState.service}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    service: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                                        >
                                            <option value="SAP Consulting Services">
                                                SAP Consulting Services
                                            </option>
                                            <option value="Software solutions">
                                                Software solutions
                                            </option>
                                            <option value="Calibmaster Software">
                                                Calibmaster Software Solution
                                            </option>
                                            <option value="Straight Scan Laser">
                                                Straight Scan Laser Inspection
                                            </option>
                                            <option value="Industrial Automation Services">
                                                Industrial Automation Services
                                            </option>
                                            <option value="Microsoft partnership services">
                                                Microsoft partnership services
                                            </option>
                                            <option value="Software training and placement">
                                                Software training & placement
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                            Project Details / Requirements *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formState.message}
                                            onChange={(e) =>
                                                setFormState({
                                                    ...formState,
                                                    message: e.target.value,
                                                })
                                            }
                                            placeholder="Please describe your manufacturing plant requirements..."
                                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Required Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <span className="flex items-center gap-2 font-mono">
                                                <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin"></span>
                                                Processing...
                                            </span>
                                        ) : (
                                            <>
                                                <span>Submit</span>
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
