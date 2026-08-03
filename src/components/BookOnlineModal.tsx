"use client";

import React, { useState } from "react";
import {
    Calendar,
    Clock,
    CheckCircle2,
    X,
    Send,
    User,
    Mail,
    Phone,
    Video,
} from "lucide-react";

interface BookOnlineModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookOnlineModal({
    isOpen,
    onClose,
}: BookOnlineModalProps) {
    const [step, setStep] = useState<1 | 2>(1);
    const [selectedTopic, setSelectedTopic] = useState(
        "Quality 4.0 Consultation",
    );
    const [selectedDate, setSelectedDate] = useState("2026-08-10");
    const [selectedTime, setSelectedTime] = useState("10:00 AM IST");
    const [booked, setBooked] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        notes: "",
    });

    if (!isOpen) return null;

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        setBooked(true);
    };

    return (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="relative max-w-2xl w-full bg-slate-900 rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                Book Online Consultation
                            </h3>
                            <p className="text-xs text-slate-400 font-mono">
                                Schedule a live session with an IVIEWSENSE
                                specialist
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => {
                            setBooked(false);
                            onClose();
                        }}
                        className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="overflow-y-auto py-6 space-y-4">
                    {booked ? (
                        <div className="py-8 text-center bg-slate-950 rounded-2xl border border-cyan-500/30 p-6">
                            <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-3 animate-bounce" />
                            <h4 className="text-xl font-extrabold text-white mb-1">
                                Session Scheduled Successfully!
                            </h4>
                            <p className="text-xs text-slate-300 mb-4">
                                We have emailed your calendar invitation for{" "}
                                <span className="text-cyan-300 font-bold">
                                    {selectedTopic}
                                </span>{" "}
                                on{" "}
                                <span className="text-cyan-300 font-bold">
                                    {selectedDate} at {selectedTime}
                                </span>
                                .
                            </p>
                            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400 max-w-sm mx-auto mb-6">
                                Meeting Link:
                                https://meet.iviewsense.com/session-consulting
                            </div>
                            <button
                                onClick={() => {
                                    setBooked(false);
                                    onClose();
                                }}
                                className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400"
                            >
                                Done
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleBook} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                    Select Consultation Topic
                                </label>
                                <select
                                    value={selectedTopic}
                                    onChange={(e) =>
                                        setSelectedTopic(e.target.value)
                                    }
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                                >
                                    <option value="Quality 4.0 Consultation">
                                        Quality 4.0 & Smart 7QC Tools Framework
                                    </option>
                                    <option value="Calibmaster Demo">
                                        Calibmaster Software Demo & Procurement
                                    </option>
                                    <option value="Straight Scan Laser Demo">
                                        Straight Scan Laser Machine Demo
                                    </option>
                                    <option value="SAP Consulting">
                                        SAP ERP QM & Plant Integration
                                    </option>
                                    <option value="Microsoft Partnership Services">
                                        Microsoft Azure / Power BI Partnership
                                    </option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        value={selectedDate}
                                        onChange={(e) =>
                                            setSelectedDate(e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                        Preferred Time Slot
                                    </label>
                                    <select
                                        value={selectedTime}
                                        onChange={(e) =>
                                            setSelectedTime(e.target.value)
                                        }
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                                    >
                                        <option value="10:00 AM IST">
                                            10:00 AM IST
                                        </option>
                                        <option value="02:00 PM IST">
                                            02:00 PM IST
                                        </option>
                                        <option value="04:30 PM IST">
                                            04:30 PM IST
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value,
                                            })
                                        }
                                        placeholder="Full Name"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value,
                                            })
                                        }
                                        placeholder="name@company.com"
                                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                                    Discussion Notes
                                </label>
                                <textarea
                                    rows={3}
                                    value={form.notes}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            notes: e.target.value,
                                        })
                                    }
                                    placeholder="Briefly state your plant or software objectives..."
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-cyan-500 resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-2 flex justify-end">
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors shadow-lg"
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
