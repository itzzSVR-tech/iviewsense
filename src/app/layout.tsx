import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: "IVIEWSENSE PRIVATE LIMITED | Intelligence & Quality 4.0 Automation",
    description:
        "A Smart 7QC Tools Framework empowered with Data Logger, Quality Inspection Automation, Distributed Quality Control, Artificial Intelligence, Blockchain and Machine learning technologies, supporting Quality 4.0",
    keywords: [
        "IVIEWSENSE",
        "Quality 4.0",
        "Smart 7QC Tools",
        "Industrial Automation",
        "SAP Consulting",
        "Calibmaster",
        "Straight Scan Laser",
        "Manufacturing Quality Analytics",
        "AI Manufacturing",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${jakarta.variable} ${mono.variable} scroll-smooth dark`}
        >
            <body className="bg-[#070b14] text-slate-100 min-h-screen flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
                {children}
            </body>
        </html>
    );
}
