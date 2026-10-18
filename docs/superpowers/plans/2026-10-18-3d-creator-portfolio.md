# 3D Creator Portfolio Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready, ultra-high-performance 3D Creator portfolio landing page for Minh using the exact visual language of motionsites.ai.

**Architecture:** A clean Next.js 16 (App Router) rebuild eliminating legacy providers and wrappers. The page is composed of 5 dedicated sections (Hero, Marquee, About, Services, Projects) powered by Motion for React (`motion/react` v12), Google Font Kanit, and Tailwind CSS v4, connecting 100% of motionsites visual assets with Minh's real product credentials.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion for React (`motion/react` v12), Lucide React.

**Spec:** [docs/superpowers/specs/2026-10-18-3d-creator-portfolio-design.md](file:///c:/MyProject/mob_portfolio/docs/superpowers/specs/2026-10-18-3d-creator-portfolio-design.md)

---

## Global Constraints

- **Canvas Background**: `#0C0C0C` applied to html, body, #root, and page wrapper.
- **Font Family**: `'Kanit', sans-serif` loaded via `next/font/google` (weights 300 to 900).
- **Global Reset**: `box-sizing: border-box; margin: 0; padding: 0`.
- **Hero Heading Class**: `.hero-heading` with `background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`, `-webkit-background-clip: text`, `-webkit-text-fill-color: transparent`.
- **Main Wrapper**: `overflowX: 'clip'`.
- **Zero Legacy Baggage**: Remove `SplashProvider` and `LanguageProvider` from root layout.

---

## Review Focus

1. **Remote Image Loading Failure**: When external asset domains are queried, Next.js or the browser must not block requests. *Addressed in Task 1 via `next.config.ts` remotePatterns.*
2. **Marquee Scroll Performance**: 63 GIF instances must not drop frames or freeze the main thread on mobile. *Addressed in Task 4 via passive scroll listener, `requestAnimationFrame`, `loading="lazy"`, and `will-change: transform`.*
3. **Touch Device Magnet Glitch**: Moving avatars on mobile touch screens must not interfere with native scrolling. *Addressed in Task 2 via `(hover: hover) and (pointer: fine)` media query guard in `Magnet`.*
4. **Card Stacking Layout Overflow on Mobile**: Fixed `85vh` containers must not clip or crush content on small mobile viewports. *Addressed in Task 7 via responsive flex layout.*
5. **Fluid Typography Scaling**: Text must scale without overflow between 360px and 2560px viewports. *Addressed across all sections using fluid `clamp()` values.*

---

## Task Decomposition

### Task 1: Foundational Setup & Global Design System

**Files:**
- Modify: `next.config.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

**Interfaces:**
- Produces: Global Kanit font variable `--font-kanit`, `.hero-heading` utility class, `#0C0C0C` canvas, and remote image domain whitelist.

- [ ] **Step 1: Configure remotePatterns in `next.config.ts`**
  Add domains: `motionsites.ai`, `shrug-person-78902957.figma.site`, `images.higgs.ai`, `d8j0ntlcm91z4.cloudfront.net`, and keep `picsum.photos`.
- [ ] **Step 2: Clean rebuild of `src/app/layout.tsx`**
  Import `Kanit` from `next/font/google` with weights `['300', '400', '500', '600', '700', '800', '900']` and `subsets: ['latin']`. Set page metadata to title "Minh -- Product Builder" (or "Jack -- 3D Creator"), description, and viewport settings. Remove `AppProviders` (`SplashProvider`, `LanguageProvider`) so `{children}` is rendered directly in `body`.
- [ ] **Step 3: Update `src/app/globals.css`**
  Define `.hero-heading` utility:
  ```css
  .hero-heading {
    background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ```
  Set default background to `#0C0C0C`, font family to `var(--font-kanit)`, and add standard scrollbar styling.
- [ ] **Step 4: Verify build baseline**
  Run: `npm run build`
  Expected: Compiled successfully with zero type or build errors.
- [ ] **Step 5: Commit**
  ```bash
  git add next.config.ts src/app/layout.tsx src/app/globals.css
  git commit -m "feat(setup): configure Kanit font, remotePatterns, and global dark theme"
  ```

---

### Task 2: Core Reusable UI Components & Modals

**Files:**
- Create: `src/components/jack/ui/fade-in.tsx`
- Create: `src/components/jack/ui/magnet.tsx`
- Create: `src/components/jack/ui/animated-text.tsx`
- Create: `src/components/jack/ui/contact-button.tsx`
- Create: `src/components/jack/ui/live-project-button.tsx`
- Create: `src/components/jack/ui/contact-modal.tsx`
- Create: `src/components/jack/ui/index.ts`

**Interfaces:**
- Produces:
  - `FadeIn`: `React.FC<{ children: React.ReactNode; delay?: number; duration?: number; x?: number; y?: number; className?: string }>`
  - `Magnet`: `React.FC<{ children: React.ReactNode; padding?: number; strength?: number; className?: string }>`
  - `AnimatedText`: `React.FC<{ text: string; className?: string }>`
  - `ContactButton`: `React.FC<{ onClick?: () => void; className?: string }>`
  - `LiveProjectButton`: `React.FC<{ href: string; className?: string }>`
  - `ContactModal`: `React.FC<{ isOpen: boolean; onClose: () => void }>`

- [ ] **Step 1: Implement `FadeIn` in `src/components/jack/ui/fade-in.tsx`**
  Uses `motion.div` with `whileInView`, `viewport={{ once: true, margin: "50px", amount: 0 }}`, initial `{ opacity: 0, x, y }`, animate `{ opacity: 1, x: 0, y: 0 }`, and easing `[0.25, 0.1, 0.25, 1]`.
- [ ] **Step 2: Implement `Magnet` in `src/components/jack/ui/magnet.tsx`**
  Tracks mouse coordinates relative to element center when cursor is within `padding` distance (default 150px). Calculates transform divided by `strength` (default 3). Uses `activeTransition: "transform 0.3s ease-out"` and `inactiveTransition: "transform 0.6s ease-in-out"`. Adds touch guard via `window.matchMedia('(hover: hover) and (pointer: fine)')`.
- [ ] **Step 3: Implement `AnimatedText` in `src/components/jack/ui/animated-text.tsx`**
  Character-by-character scroll-reveal text animation. Uses Framer Motion `useScroll` targeting paragraph element with offset `['start 0.8', 'end 0.2']`. Each character uses invisible placeholder span + absolute positioned animated span whose opacity maps from 0.2 to 1 based on its position in the string.
- [ ] **Step 4: Implement `ContactButton` & `LiveProjectButton`**
  - `ContactButton`: Gradient pill `linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)`, inner box shadow `0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset`, white 2px outline with -3px offset, uppercase tracking-widest, label "Contact Me".
  - `LiveProjectButton`: Ghost outline pill, border-2 `#D7E2EA`, text `#D7E2EA`, uppercase tracking-widest, hover `bg-[#D7E2EA]/10`, label "Live Project", links to `href` with target `_blank`.
- [ ] **Step 5: Implement `ContactModal` in `src/components/jack/ui/contact-modal.tsx`**
  Clean dark backdrop modal showing Minh's email (`tcongminh1604@gmail.com`) with quick copy button, GitHub link (`https://github.com/dexter826`), Facebook link (`https://www.facebook.com/ctrlkd1`), and Instagram link (`https://www.instagram.com/trcongminh04/`).
- [ ] **Step 6: Export all components in `src/components/jack/ui/index.ts`**
- [ ] **Step 7: Verify compilation**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 8: Commit**
  ```bash
  git add src/components/jack/ui/
  git commit -m "feat(ui): add core reusable components (FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton, ContactModal)"
  ```

---

### Task 3: Section 1 — HeroSection

**Files:**
- Create: `src/components/jack/sections/hero-section.tsx`

**Interfaces:**
- Consumes: `FadeIn`, `Magnet`, `ContactButton`
- Produces: `HeroSection: React.FC<{ onContactClick: () => void }>`

- [ ] **Step 1: Implement Navbar**
  - 4 items: `"About"`, `"Price"`, `"Projects"`, `"Contact"`.
  - Spacing: `justify-between px-6 md:px-10 pt-6 md:pt-8`.
  - Text color: `#D7E2EA`, `font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200`.
  - Links: `About` $\rightarrow$ `#about`, `Price` $\rightarrow$ `#services`, `Projects` $\rightarrow$ `#projects`, `Contact` $\rightarrow$ `onContactClick()`.
  - Wrapped in `FadeIn` (delay 0, y -20).
- [ ] **Step 2: Implement Massive Hero Heading**
  - Text: `"Hi, i'm minh"` with lowercase "i" and curly apostrophe.
  - Class: `.hero-heading`.
  - Styling: `font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5`.
  - Wrapped in overflow-hidden container with `FadeIn` (delay 0.15, y 40).
- [ ] **Step 3: Implement Hero Portrait with Magnet**
  - Centered: `absolute left-1/2 -translate-x-1/2 z-10`.
  - Width: `w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]`.
  - Positioning: `top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0`.
  - Image: `https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png`.
  - Wrapped in `Magnet` and `FadeIn` (delay 0.6, y 30).
- [ ] **Step 4: Implement Bottom Bar**
  - Flexbox `justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative`.
  - Left: Tagline `"a product builder driven by crafting striking and unforgettable projects"`, `#D7E2EA`, `font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]`, `FadeIn` (delay 0.35, y 20).
  - Right: `ContactButton` wrapped in `FadeIn` (delay 0.5, y 20).
- [ ] **Step 5: Verify build & layout**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 6: Commit**
  ```bash
  git add src/components/jack/sections/hero-section.tsx
  git commit -m "feat(hero): implement HeroSection with massive typography, 3D magnet portrait, and navbar"
  ```

---

### Task 4: Section 2 — MarqueeSection

**Files:**
- Create: `src/components/jack/sections/marquee-section.tsx`

**Interfaces:**
- Produces: `MarqueeSection: React.FC`

- [ ] **Step 1: Define the 21 GIF URL list**
  Store all 21 URLs from `motionsites.ai` in a typed constant array:
  - First 11 for Row 1: `hero-space-voyage`, `hero-codenest`, `hero-vex-ventures`, `hero-stellar-ai-v2`, `hero-asme`, `hero-transform-data`, `hero-vitara`, `hero-terra`, `hero-skyelite`, `hero-aethera`, `hero-designpro`.
  - Remaining 10 for Row 2: `hero-stellar-ai`, `hero-xportfolio`, `hero-orbit-web3`, `hero-nexora`, `hero-evr-ventures`, `hero-planet-orbit`, `hero-new-era`, `hero-wealth`, `hero-luminex`, `hero-celestia`.
- [ ] **Step 2: Implement Scroll-Driven Translate Logic**
  Calculate offset on passive window scroll:
  `offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3`
  Execute inside `requestAnimationFrame` for buttery 60fps performance.
  Row 1 style: `transform: translate3d(${offset - 200}px, 0, 0)`.
  Row 2 style: `transform: translate3d(${-(offset - 200)}px, 0, 0)`.
- [ ] **Step 3: Render Image Tiles**
  Each image tile: `w-[420px] h-[270px] min-w-[420px] rounded-2xl object-cover bg-[#181818]`.
  Add `loading="lazy"` and `decoding="async"`.
  Triplicate arrays for seamless endless flow. Add `willChange: 'transform'`.
- [ ] **Step 4: Verify build & scroll calculation**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/jack/sections/marquee-section.tsx
  git commit -m "feat(marquee): implement MarqueeSection with 21 GIFs in dual scroll-driven rows"
  ```

---

### Task 5: Section 3 — AboutSection

**Files:**
- Create: `src/components/jack/sections/about-section.tsx`

**Interfaces:**
- Consumes: `FadeIn`, `AnimatedText`, `ContactButton`
- Produces: `AboutSection: React.FC<{ onContactClick: () => void }>`

- [ ] **Step 1: Position 4 Decorative 3D Corner Icons**
  - Top-Left Moon: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png`, `w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] left-[1%] sm:left-[2%] md:left-[4%]`, `FadeIn` (delay 0.1, x -80).
  - Bottom-Left 3D Object: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png`, `w-[100px] sm:w-[140px] md:w-[180px]`, `bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]`, `FadeIn` (delay 0.25, x -80).
  - Top-Right Lego: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png`, `w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] right-[1%] sm:right-[2%] md:right-[4%]`, `FadeIn` (delay 0.15, x 80).
  - Bottom-Right 3D Group: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png`, `w-[130px] sm:w-[170px] md:w-[220px]`, `bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]`, `FadeIn` (delay 0.3, x 80).
- [ ] **Step 2: Heading & Animated Text Body**
  - Section ID: `#about`.
  - Heading: `"About me"` with `.hero-heading`, `font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center mb-10 sm:mb-14 md:mb-16`.
  - Body: `AnimatedText` using the Product Builder bio:
    `"With more than five years of experience in design and software engineering, i focus on system architecture, intuitive UI, and seamless user experiences. I truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"`
    Color `#D7E2EA`, `font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]`.
- [ ] **Step 3: Action Button**
  Place `ContactButton` below with responsive gap `gap-16 sm:gap-20 md:gap-24`.
- [ ] **Step 4: Verify build**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/jack/sections/about-section.tsx
  git commit -m "feat(about): implement AboutSection with 4 corner 3D icons and scroll-driven animated text"
  ```

---

### Task 6: Section 4 — ServicesSection

**Files:**
- Create: `src/components/jack/sections/services-section.tsx`

**Interfaces:**
- Consumes: `FadeIn`
- Produces: `ServicesSection: React.FC`

- [ ] **Step 1: Container Structure & Inverted Surface**
  - Section ID: `#services`.
  - Background: `#FFFFFF` (Solid White), `text-[#0C0C0C]`.
  - Top corners: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`.
  - Padding: `px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32`.
  - Heading: `"Services"` in `#0C0C0C`, `font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28`.
- [ ] **Step 2: 5 Numbered Service Items**
  Define array of 5 services:
  1. `01` - `SYSTEM ARCHITECTURE`: Creation of scalable architectures, robust data pipelines, and serverless workflows tailored to high-demand applications.
  2. `02` - `MOTION & INTERACTIVE UI`: Dynamic animations, 60fps micro-interactions, and motion design that add energy and storytelling to digital experiences.
  3. `03` - `FULL-STACK ENGINEERING`: Building clean, conversion-focused web apps and PWAs using modern React, TypeScript, and cloud services with extreme attention to speed.
  4. `04` - `AI SOLUTIONS INTEGRATION`: Crafting intelligent AI-powered features, smart recommendation engines, and automation workflows that solve real operational bottlenecks.
  5. `05` - `MODERN PRODUCT DESIGN`: Designing clean, modern, and memorable digital products with meticulous attention to layout, typography, and cohesive visual identities.
- [ ] **Step 3: Item Layout & Typography**
  - Horizontal flex layout with `justify-between items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15` (first item includes top border).
  - Left: Number `font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none select-none min-w-[120px] sm:min-w-[180px] md:min-w-[220px]`.
  - Right: Stacked Name (`font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]`) + Description (`font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60 mt-2`).
  - Staggered `FadeIn` with delay `i * 0.1`.
- [ ] **Step 4: Verify build**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/jack/sections/services-section.tsx
  git commit -m "feat(services): implement ServicesSection with inverted white theme and 5 numbered services"
  ```

---

### Task 7: Section 5 — ProjectsSection & Card Stacking

**Files:**
- Create: `src/components/jack/sections/projects-section.tsx`

**Interfaces:**
- Consumes: `LiveProjectButton`, `FadeIn`
- Produces: `ProjectsSection: React.FC`

- [ ] **Step 1: Projects Container & Stacking Architecture**
  - Section ID: `#projects`.
  - Background: `#0C0C0C`, `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`, `-mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 px-4 sm:px-6 md:px-10`.
  - Heading: `"Project"` (singular) with `.hero-heading` gradient, `text-[clamp(3rem,12vw,160px)] font-black uppercase text-center leading-none mb-14 sm:mb-20`.
- [ ] **Step 2: Sticky Card Component with Scroll-driven Scale**
  - 3 Cards, each in an `h-[85vh]` sticky container (`sticky top-24 md:top-32`).
  - Stacking scale calculation: `targetScale = 1 - (3 - 1 - index) * 0.03`.
  - Offset: `top: ${index * 28}px`.
  - Styling: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between`.
- [ ] **Step 3: Card Content & Image Grid**
  - Top Row: Large number (`01`, `02`, `03`), category tag (`PRODUCT / SYSTEM`, `FINTECH / PAYROLL`, `SOCIAL / REALTIME`), project name (`CINEMOB`, `SHIFTPAY`, `SMURFY`), and `LiveProjectButton` linked to live URL.
  - Bottom Row:
    - Left Column (40% width): 2 stacked images (top height `clamp(130px, 16vw, 230px)`, bottom height `clamp(160px, 22vw, 340px)`).
    - Right Column (60% width): 1 tall image (`h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]`).
    - All images use `rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover`.
    - Exact CloudFront URLs from spec assigned to cards 01, 02, and 03.
- [ ] **Step 4: Verify build & responsive behavior**
  Run: `npm run build`
  Expected: Passes with zero errors.
- [ ] **Step 5: Commit**
  ```bash
  git add src/components/jack/sections/projects-section.tsx
  git commit -m "feat(projects): implement ProjectsSection with 3 sticky-stacking cards and CloudFront 3D images"
  ```

---

### Task 8: Page Assembly, Legacy Cleanup & Verification

**Files:**
- Create: `src/components/jack/sections/index.ts`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: All 5 sections (`HeroSection`, `MarqueeSection`, `AboutSection`, `ServicesSection`, `ProjectsSection`) and `ContactModal`.
- Produces: Complete 3D Creator landing page at root `/`.

- [ ] **Step 1: Export all sections from `src/components/jack/sections/index.ts`**
- [ ] **Step 2: Clean assemble `src/app/page.tsx`**
  Mount in exact sequence:
  ```tsx
  'use client';

  import { useState } from 'react';
  import {
    HeroSection,
    MarqueeSection,
    AboutSection,
    ServicesSection,
    ProjectsSection,
  } from '@/components/jack/sections';
  import { ContactModal } from '@/components/jack/ui';

  export default function Home() {
    const [isContactOpen, setIsContactOpen] = useState(false);

    return (
      <main className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip selection:bg-white selection:text-black">
        <HeroSection onContactClick={() => setIsContactOpen(true)} />
        <MarqueeSection />
        <AboutSection onContactClick={() => setIsContactOpen(true)} />
        <ServicesSection />
        <ProjectsSection />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </main>
    );
  }
  ```
- [ ] **Step 3: Run production build and linting checks**
  Run: `npm run build`
  Expected: Exit code 0, all static pages generated without warnings or type errors.
  Run: `npm run lint`
  Expected: Clean linting check.
- [ ] **Step 4: Commit final assembly**
  ```bash
  git add src/components/jack/sections/index.ts src/app/page.tsx
  git commit -m "feat(page): assemble complete 3D Creator landing page and verify production build"
  ```

---

## Plan Review & Handoff

Plan complete and saved to `docs/superpowers/plans/2026-10-18-3d-creator-portfolio.md`.
