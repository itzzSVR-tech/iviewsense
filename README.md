# IVIEWSENSE - Next-Gen Industrial Quality & Smart Manufacturing Platform

Official web application for **IVIEWSENSE Private Limited** — leaders in high-precision hardware and software solutions for industrial quality management, gauge calibration automation, optoelectronic laser inspection, and MQ 4.0 (Manufacturing Quality 4.0) digital transformation.

---

## 🚀 Quickstart Guide

Follow these simple steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher (or `pnpm` / `yarn` / `bun`)
- **Git**

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itzzSVR-tech/iviewsense.git
   cd iviewsense
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live app.

---

## 🛠️ Project Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Next.js development server with Turbopack |
| `npm run build` | Builds the production bundle |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs ESLint code checks |

---

## 🌟 Key Features & Solutions

- **Core Service Offerings**:
  - **Gauge Calibration Services**: Comprehensive NIST & ISO/IEC 17025 traceable calibration management.
  - **Smart QC 7 Tools**: Automated quality toolsuite for defect root-cause analysis and Pareto monitoring.
  - **Optoelectronic Systems**: Custom laser triangulation sensors and optical high-speed component inspection.
  - **Manufacturing Quality 4.0 (MQ 4.0)**: In-line IoT data acquisition and automated Pass/Fail sorting.

- **Proprietary Products**:
  - **Calibmaster**: Enterprise industrial gauge and equipment calibration management system.
  - **Straight Scan Laser**: High-precision automated laser straightness, runout, and geometric inspection system.

- **Interactive User Experience**:
  - Mega Dropdown navigation for quick service & product exploration.
  - Interactive Specification Lightbox Modals for product hardware & software deep-dives.
  - Online Booking & Procurement Consultation modals.

---

## 🧰 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library & Language**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Directory Structure

```text
├── public/
│   └── images/              # Product diagrams, framework visuals & company logos
├── src/
│   ├── app/
│   │   ├── globals.css      # Core Design Tokens & Tailwind CSS Imports
│   │   ├── layout.tsx       # Root Layout & Metadata
│   │   └── page.tsx         # Main Landing Page
│   └── components/
│       ├── Navbar.tsx       # Header Nav with Mega Menu Dropdowns
│       ├── Hero.tsx         # Hero Section with MQ 4.0 Visuals
│       ├── ClientsMarquee.tsx# Trusted Industry Partners & Clients
│       ├── CoreServicesSection.tsx # Detailed Service Breakdown
│       ├── ProductsSection.tsx     # Calibmaster & Straight Scan Laser Specs
│       ├── ResourcesSection.tsx    # Technical Whitepapers & Articles
│       ├── ContactSection.tsx      # Corporate Addresses & Inquiries
│       ├── Footer.tsx              # Links & Copyright Information
│       ├── BookOnlineModal.tsx     # Online Service Consultation Modal
│       └── TermsModal.tsx          # Corporate Terms & Compliance
├── README.md
└── package.json
```

---

## 🌐 Deployment

This application can be deployed directly to [Vercel](https://vercel.com) or any Node.js compatible platform.

```bash
npm run build
```

---

© **IVIEWSENSE Private Limited**. All Rights Reserved.
