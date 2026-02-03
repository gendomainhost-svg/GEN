# Global Efficiency Network (GEN) Website

A modern, institutional-grade website built with Next.js 14, TypeScript, and Tailwind CSS for the Global Efficiency Network.

## Features

- **Institutional Modern Design System**: Clean typography with Inter and Playfair Display fonts
- **High-Impact Hero Section**: Animated hero with network visualization
- **Bento Grid Services Section**: Modern masonry-style grid showcasing 6 core services
- **About & Methodology Section**: Explains GEN's unique "Bridge" value proposition
- **Consulting Showcase**: Dedicated accordion-style section for advisory services
- **Responsive Navigation**: Sticky navbar with glassmorphism effects
- **Comprehensive Footer**: Contact information and positioning statement

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx           # Responsive navigation
│   ├── Hero.tsx             # Hero section with animations
│   ├── ServicesSection.tsx  # Bento grid services
│   ├── AboutSection.tsx     # About & methodology
│   ├── ConsultingShowcase.tsx # Consulting services accordion
│   ├── Footer.tsx           # Footer with contact info
│   └── Section.tsx          # Reusable section wrapper
└── tailwind.config.ts       # Tailwind configuration with custom colors
```

## Design System

### Colors
- **Primary**: Deep Navy Blue (#0F172A)
- **Secondary**: Slate Grey (#64748B)
- **Accent**: Muted Gold/Bronze (#B45309)
- **Background Light**: Off-white/Cream (#F8FAFC)

### Typography
- **Body**: Inter (clean, readable, modern)
- **Headings**: Playfair Display (institutional, world-class tone)

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Cloudflare Pages

The site is built as a **static export** so it runs on Cloudflare Pages without a Node server.

1. Connect your GitHub repo (e.g. `gendomainhost-svg/GEN`) to Cloudflare Pages.
2. Set **Build configuration**:
   - **Framework preset:** None (or "Next.js (Static HTML Export)" if available)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Set **Environment variables** (if any): none required.
4. Deploy. The site will be served from the `out` folder.

**Note:** The first load is optimized: the map loads lazily and images use unoptimized static assets for compatibility with static hosting.

## License

© 2024 Global Efficiency Network. All rights reserved.

