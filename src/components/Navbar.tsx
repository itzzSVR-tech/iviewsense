"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronDown,
    Menu,
    X,
    Cpu,
    Database,
    GraduationCap,
    Factory,
    Award,
    FileSpreadsheet,
    BarChart3,
    Crosshair,
    Sliders,
    ExternalLink,
    BookOpen,
    FileText,
    ShieldCheck,
    Calendar,
} from "lucide-react";

interface NavbarProps {
    onOpenBookOnline: () => void;
    onOpenTerms: () => void;
    onSelectService: (serviceName: string) => void;
    onSelectProduct: (productName: string) => void;
}

export const coreServicesList = [
    {
        title: "SAP Consulting Services",
        icon: Database,
        description:
            "Enterprise SAP ERP integration, module customization, and smart enterprise workflows.",
    },
    {
        title: "Software solutions",
        icon: Cpu,
        description:
            "Tailored enterprise software development, IIoT architecture, and analytics platforms.",
    },
    {
        title: "Software training and placement services",
        icon: GraduationCap,
        description:
            "Upskilling industry engineers and placing tech talent in automation and data roles.",
    },
    {
        title: "Industrial Automation Services",
        icon: Factory,
        description:
            "End-to-end Smart Factory automation, PLC integration, and robotics connectivity.",
    },
    {
        title: "Microsoft partnership services",
        icon: Award,
        description:
            "Certified Cloud, Azure AI, and Power BI enterprise data intelligence integrations.",
    },
    {
        title: "Courses and Location Report Sample",
        icon: FileSpreadsheet,
        description:
            "Interactive training curriculum & automated geo-location analytical reporting.",
    },
    {
        title: "Manufacturing Quality Analytics Sample",
        icon: BarChart3,
        description:
            "Real-time SPC, defect pareto, and automated Quality 4.0 inspection samples.",
    },
];

export const productsList = [
    {
        title: "Calibmaster",
        icon: Sliders,
        badge: "Flagship Software",
        description:
            "Comprehensive industrial gauge & equipment calibration management platform.",
        image: "/images/calibmaster.jpg",
    },
    {
        title: "Straight Scan Laser",
        icon: Crosshair,
        badge: "Hardware & Software",
        description:
            "High-precision automated laser straightness measurement & shaft inspection system.",
        image: "/images/straight_scan_laser.jpg",
    },
];

export default function Navbar({
    onOpenBookOnline,
    onOpenTerms,
    onSelectService,
    onSelectProduct,
}: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<
        "services" | "products" | null
    >(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "glass-header py-3"
                    : "bg-[#070b14]/80 backdrop-blur-md py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo & Company Name */}
                    <Link
                        href="#hero"
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-cyan-500/30 group-hover:border-cyan-400 transition-all shadow-lg shadow-cyan-500/10">
                            <Image
                                src="/images/ivs_logo1.png"
                                alt="IVIEWSENSE Logo (ivs logo1.png)"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div>
                            <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                                IVIEWSENSE
                            </span>
                            <span className="block text-[10px] text-slate-400 tracking-widest font-mono uppercase">
                                PRIVATE LIMITED
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                        <Link
                            href="#hero"
                            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all"
                        >
                            Home
                        </Link>

                        {/* Core Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("services")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                onClick={() => {
                                    const el =
                                        document.getElementById("services");
                                    if (el)
                                        el.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
                            >
                                <span>Core Services</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        activeDropdown === "services"
                                            ? "rotate-180 text-cyan-400"
                                            : ""
                                    }`}
                                />
                            </button>

                            {/* Mega Dropdown for Core Services */}
                            {activeDropdown === "services" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-130 glass-card rounded-2xl p-4 shadow-2xl border border-cyan-500/20 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3 px-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                        Core Service Offerings
                                    </div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {coreServicesList.map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setActiveDropdown(null);
                                                        onSelectService(
                                                            item.title,
                                                        );
                                                    }}
                                                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3 group border border-transparent"
                                                >
                                                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors mt-0.5">
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs font-semibold text-slate-100 group-hover:text-cyan-300">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-[11px] text-slate-400 line-clamp-1">
                                                            {item.description}
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown("products")}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                onClick={() => {
                                    const el =
                                        document.getElementById("products");
                                    if (el)
                                        el.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                }}
                                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
                            >
                                <span>Products</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        activeDropdown === "products"
                                            ? "rotate-180 text-cyan-400"
                                            : ""
                                    }`}
                                />
                            </button>

                            {/* Mega Dropdown for Products */}
                            {activeDropdown === "products" && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-110 glass-card rounded-2xl p-4 shadow-2xl border border-cyan-500/20 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3 px-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                                        Industrial Products & Solutions
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {productsList.map((product, idx) => {
                                            const Icon = product.icon;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        setActiveDropdown(null);
                                                        onSelectProduct(
                                                            product.title,
                                                        );
                                                    }}
                                                    className="w-full text-left p-3 rounded-xl hover:bg-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-3.5 group border border-transparent"
                                                >
                                                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                                                        <Icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                                                                {product.title}
                                                            </span>
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                                                                {product.badge}
                                                            </span>
                                                        </div>
                                                        <div className="text-xs text-slate-400 mt-0.5">
                                                            {
                                                                product.description
                                                            }
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="#blog"
                            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
                        >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Blog</span>
                        </Link>

                        <button
                            onClick={onOpenBookOnline}
                            className="px-3 py-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 rounded-lg hover:bg-cyan-950/50 transition-all flex items-center gap-1.5 border border-cyan-500/30 bg-cyan-500/10"
                        >
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Book Online</span>
                        </button>

                        <Link
                            href="#papers"
                            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
                        >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Papers</span>
                        </Link>

                        <button
                            onClick={onOpenTerms}
                            className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-slate-800/50 transition-all flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Terms of Use</span>
                        </button>
                    </nav>

                    {/* Social LinkedIn & Action */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/company/iviewsense/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80 rounded-xl transition-all border border-slate-800 hover:border-cyan-500/30 flex items-center gap-2 text-xs font-semibold"
                            title="Visit IVIEWSENSE LinkedIn Page"
                        >
                            <svg
                                className="w-4 h-4 fill-[#0a66c2]"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                            <span>LinkedIn</span>
                            <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>

                        <a
                            href="#contact"
                            className="px-4 py-2 text-xs font-bold rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Navigation */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col gap-2">
                        <Link
                            href="#hero"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
                        >
                            Home
                        </Link>

                        {/* Core Services Mobile Section */}
                        <div className="space-y-1">
                            <div className="px-3 py-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                Core Services
                            </div>
                            {coreServicesList.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onSelectService(item.title);
                                    }}
                                    className="w-full text-left px-4 py-1.5 text-xs text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                    {item.title}
                                </button>
                            ))}
                        </div>

                        {/* Products Mobile Section */}
                        <div className="space-y-1 pt-2 border-t border-slate-800/60">
                            <div className="px-3 py-1 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                Products
                            </div>
                            {productsList.map((prod, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        onSelectProduct(prod.title);
                                    }}
                                    className="w-full text-left px-4 py-1.5 text-xs text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg flex items-center justify-between"
                                >
                                    <span>{prod.title}</span>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                                        {prod.badge}
                                    </span>
                                </button>
                            ))}
                        </div>

                        <div className="pt-2 border-t border-slate-800/60 space-y-1">
                            <Link
                                href="#blog"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
                            >
                                Blog
                            </Link>
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onOpenBookOnline();
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-cyan-400 hover:bg-slate-800"
                            >
                                Book Online
                            </button>
                            <Link
                                href="#papers"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
                            >
                                Papers
                            </Link>
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onOpenTerms();
                                }}
                                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
                            >
                                Terms of Use
                            </button>
                        </div>

                        <div className="pt-3 flex items-center justify-between border-t border-slate-800">
                            <a
                                href="https://www.linkedin.com/company/iviewsense-private-limited"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-400"
                            >
                                <svg
                                    className="w-4 h-4 fill-[#0a66c2]"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-4 py-2 text-xs font-bold rounded-xl bg-cyan-500 text-slate-950"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
