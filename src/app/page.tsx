"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import CoreServicesSection from "@/components/CoreServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TermsModal from "@/components/TermsModal";
import BookOnlineModal from "@/components/BookOnlineModal";

export default function Home() {
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [isBookOnlineOpen, setIsBookOnlineOpen] = useState(false);
    const [selectedServiceTitle, setSelectedServiceTitle] = useState<
        string | null
    >(null);
    const [selectedProductTitle, setSelectedProductTitle] = useState<
        string | null
    >(null);

    const handleSelectService = (serviceName: string) => {
        setSelectedServiceTitle(serviceName);
        const el = document.getElementById("services");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    const handleSelectProduct = (productName: string) => {
        setSelectedProductTitle(productName);
        const el = document.getElementById("products");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
            {/* Sticky Header Navigation */}
            <Navbar
                onOpenBookOnline={() => setIsBookOnlineOpen(true)}
                onOpenTerms={() => setIsTermsOpen(true)}
                onSelectService={handleSelectService}
                onSelectProduct={handleSelectProduct}
            />

            {/* Hero Section */}
            <Hero />

            {/* Happy Clients Marquee & Grid */}
            <ClientsMarquee />

            {/* Core Services Section */}
            <CoreServicesSection
                selectedServiceTitle={selectedServiceTitle}
                onClearSelectedService={() => setSelectedServiceTitle(null)}
            />

            {/* Products Showcase (Calibmaster & Straight Scan Laser) */}
            <ProductsSection selectedProductTitle={selectedProductTitle} />

            {/* Blog & Whitepapers Section */}
            <ResourcesSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <Footer
                onOpenTerms={() => setIsTermsOpen(true)}
                onOpenBookOnline={() => setIsBookOnlineOpen(true)}
            />

            {/* Interactive Modals */}
            <TermsModal
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />

            <BookOnlineModal
                isOpen={isBookOnlineOpen}
                onClose={() => setIsBookOnlineOpen(false)}
            />
        </main>
    );
}
