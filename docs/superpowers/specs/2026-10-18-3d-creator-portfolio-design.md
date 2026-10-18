# Specification: 3D Creator Portfolio Landing Page ("Jack / Minh")

- **Date**: 2026-10-18
- **Branch**: `feat/3d-creator-portfolio`
- **Author**: Trần Công Minh & Antigravity
- **Status**: Draft / Pending Approval

---

## 1. Intent & Background

### 1.1 Overview
Build a high-performance, visually striking 3D Creator Portfolio landing page for **Minh** based on the curated visual design language from **motionsites.ai**. The landing page combines 100% of the visual fidelity, fluid typography, and dynamic animations of the motion template with Minh's real product credentials, projects, and contact channels.

### 1.2 Architectural Decision: Clean Rebuild ("Đập đi xây lại")
Rather than maintaining legacy wrappers (`SplashProvider`, `LanguageProvider`) or carrying deprecated `@mob-signal` styling baggage, this branch executes a **clean rebuild**:
- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 with custom dark aesthetic (`#0C0C0C`) and Google Font **Kanit**.
- **Animations**: Framer Motion / Motion for React (`motion/react` v12).
- **Icons**: Lucide React.
- **Zero Legacy Cruft**: The landing page directly controls root hydration and styling without artificial splash screens or conflicting multi-language contexts.

---

## 2. Goals, Non-Goals & Anti-Goals

### 2.1 Goals
1. **Visual Fidelity**: Pixel-perfect implementation of the 5 sections defined in the motionsites.ai specification:
   - `HeroSection` (Massive typography, 3D magnetic avatar, minimal bottom bar).
   - `MarqueeSection` (Two scroll-driven horizontal rows with 21 GIFs from motionsites.ai).
   - `AboutSection` (4 corner 3D icons from Figma, character-by-character scroll opacity text reveal).
   - `ServicesSection` (Contrast white container with rounded top corners, huge numbering `01`-`05`).
   - `ProjectsSection` (Sticky card stacking with scroll-driven scale reduction, 2-column image layout).
2. **Real Product Integration**:
   - Showcase Minh's 3 real, production-ready applications:
     - **01 - CineMOB**: Smart Movie & Cinema Tracker (AI-Powered)
     - **02 - ShiftPay**: Automated Payroll & Smart Attendance System (VietQR Integration)
     - **03 - Smurfy**: Realtime Social & Multimedia Network (ZegoCloud / Cloud Functions)
   - "Live Project" buttons directly launch working live demos in a new tab.
3. **Flawless Performance**:
   - Passive scroll listener with `requestAnimationFrame` for buttery 60fps marquee scroll.
   - Native `loading="lazy"` and `decoding="async"` for GIF/WebP asset streams to prevent memory spikes on mobile devices.
   - Fluid typography using CSS `clamp()` ensuring seamless scaling from 360px mobile viewports to ultra-wide monitors.
4. **Clean Build**: `npm run build` completes with 0 errors and 0 lint warnings.

### 2.2 Non-Goals
- No backend database or server-side state needed (pure static/client hydration).
- No complex multi-language toggle (the site is designed English-first to respect Kanit font typography and international presentation).
- No matrix rain splash screen blocking initial page load.

### 2.3 Anti-Goals
- No half-hearted wrappers or messy compatibility patches.
- No layout overflow or broken sticky stacking on small mobile screens.
- No erratic magnetic tracking on touch devices (pointer coarse).

---

## 3. Global Design System & Tokens

### 3.1 Color Palette
- **Background**: `#0C0C0C` (Dark canvas across html, body, #root, and page container).
- **Surface Inverted (Services)**: `#FFFFFF` (Solid white background with `#0C0C0C` text).
- **Text Primary (Dark)**: `#D7E2EA` (Soft silver/white).
- **Text Heading Gradient (`.hero-heading`)**:
  ```css
  background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ```
- **Accent Gradient (ContactButton)**:
  `linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)`
  with inner shadow `0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset` and white outline `2px solid white` with offset `-3px`.

### 3.2 Typography: Google Font Kanit
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold), 900 (Black).
- Loaded via `next/font/google` in `src/app/layout.tsx`.
- Applied globally: `font-family: 'Kanit', sans-serif`.

### 3.3 Container & Borders
- Top curved sections: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`.
- Project cards: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px]`, `border-2 border-[#D7E2EA]`.
- Pull-up negative margin for ProjectsSection: `-mt-10 sm:-mt-12 md:-mt-14 z-10`.

---

## 4. Section Specifications

### 4.1 Hero Section
- **Height**: `h-screen`, `flex flex-col justify-between overflow-x-clip relative`.
- **Navbar**:
  - Horizontal bar with 4 items: `"About"`, `"Price"`, `"Projects"`, `"Contact"`.
  - Spacing: `justify-between px-6 md:px-10 pt-6 md:pt-8`.
  - Styling: Text `#D7E2EA`, `font-medium uppercase tracking-wider`, sizes `text-sm md:text-lg lg:text-[1.4rem]`, `hover:opacity-70 transition-opacity duration-200`.
  - Anchors: `About` $\rightarrow$ `#about`, `Price` $\rightarrow$ `#services`, `Projects` $\rightarrow$ `#projects`, `Contact` $\rightarrow$ triggers `ContactModal`.
- **Hero Heading**:
  - Massive `h1` with text `"Hi, i'm minh"` (lowercase "i", curly apostrophe `&apos;`).
  - Font styling: `font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none`.
  - Sizes: `text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]`.
  - Margin: `mt-6 sm:mt-4 md:-mt-5`.
  - Gradient class: `.hero-heading`.
- **Hero Portrait**:
  - Centered: `absolute left-1/2 -translate-x-1/2 z-10`.
  - Positioning: Mobile `top-1/2 -translate-y-1/2`, sm+ `sm:top-auto sm:translate-y-0 sm:bottom-0`.
  - Width: `w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]`.
  - Image: Figma 3D Portrait (`https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png`).
  - Wrapped in `Magnet` component (padding 150, strength 3, activeTransition `transform 0.3s ease-out`, inactiveTransition `transform 0.6s ease-in-out`). Touch devices fallback to stationary.
- **Bottom Bar**:
  - Flexbox `justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative`.
  - Left: Tagline `"a product builder driven by crafting striking and unforgettable projects"`, `#D7E2EA`, `font-light uppercase tracking-wide leading-snug`, size `clamp(0.75rem, 1.4vw, 1.5rem)`, `max-w-[160px] sm:max-w-[220px] md:max-w-[260px]`.
  - Right: `ContactButton` ("Contact Me").
- **Entrance Animation Delays**:
  - Navbar: delay 0s, y -20.
  - Heading: delay 0.15s, y 40.
  - Left text: delay 0.35s, y 20.
  - Contact button: delay 0.5s, y 20.
  - Portrait: delay 0.6s, y 30.

---

### 4.2 Marquee Section
- **Background**: `#0C0C0C`, padding `pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden`.
- **21 GIF Asset URLs from motionsites.ai**:
  1. `https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif`
  2. `https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif`
  3. `https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif`
  4. `https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif`
  5. `https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif`
  6. `https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif`
  7. `https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif`
  8. `https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif`
  9. `https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif`
  10. `https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif`
  11. `https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif`
  12. `https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif`
  13. `https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif`
  14. `https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif`
  15. `https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif`
  16. `https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif`
  17. `https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif`
  18. `https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif`
  19. `https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif`
  20. `https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif`
  21. `https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif`
- **Rows Configuration**:
  - Row 1 (first 11 images, tripled for seamless continuous loop): moves RIGHT on scroll with `translateX(${offset - 200}px)`.
  - Row 2 (remaining 10 images, tripled): moves LEFT on scroll with `translateX(${-(offset - 200)}px)`.
- **Formula**: `offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3`.
- **Tile Dimensions**: `w-[420px] h-[270px] min-w-[420px] rounded-2xl object-cover`, gap between tiles: `gap-3`, gap between rows: `gap-3`.
- **Optimization**: Passive scroll listener wrapped in `requestAnimationFrame`, `willChange: 'transform'`.

---

### 4.3 About Section
- **Container**: `min-h-screen relative flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden`.
- **4 Decorative 3D Corner Assets (Exact Figma URLs)**:
  1. Top-Left: Moon icon
     - URL: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png`
     - Width: `w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] left-[1%] sm:left-[2%] md:left-[4%]`, FadeIn delay 0.1s, x -80.
  2. Bottom-Left: 3D object
     - URL: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png`
     - Width: `w-[100px] sm:w-[140px] md:w-[180px]`, `bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]`, FadeIn delay 0.25s, x -80.
  3. Top-Right: Lego icon
     - URL: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png`
     - Width: `w-[120px] sm:w-[160px] md:w-[210px]`, `top-[4%] right-[1%] sm:right-[2%] md:right-[4%]`, FadeIn delay 0.15s, x 80.
  4. Bottom-Right: 3D group
     - URL: `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png`
     - Width: `w-[130px] sm:w-[170px] md:w-[220px]`, `bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]`, FadeIn delay 0.3s, x 80.
- **Heading**: `"About me"` with `.hero-heading` gradient, `font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16`.
- **Animated Text**:
  - Text: `"With more than five years of experience in design and software engineering, i focus on system architecture, intuitive UI, and seamless user experiences. I truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"`
  - Color `#D7E2EA`, `font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]`.
  - Character-by-character scroll opacity reveal from 0.2 to 1 with `useScroll` target offset `['start 0.8', 'end 0.2']`.
- **Action**: `ContactButton` centered below with gap `gap-16 sm:gap-20 md:gap-24`.

---

### 4.4 Services Section
- **Background**: `#FFFFFF` (Solid White), `text-[#0C0C0C]`.
- **Borders**: `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`.
- **Padding**: `px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32`.
- **Heading**: `"Services"` in `#0C0C0C`, `font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28`.
- **5 Service Items** (max-w-5xl mx-auto, separated by `border-b border-[#0C0C0C]/15`):
  1. `01 - SYSTEM ARCHITECTURE`: Creation of scalable architectures, robust data pipelines, and serverless workflows tailored to high-demand applications.
  2. `02 - MOTION & INTERACTIVE UI`: Dynamic animations, 60fps micro-interactions, and motion design that add energy and storytelling to digital experiences.
  3. `03 - FULL-STACK ENGINEERING`: Building clean, conversion-focused web apps and PWAs using modern React, TypeScript, and cloud services with extreme attention to speed.
  4. `04 - AI SOLUTIONS INTEGRATION`: Crafting intelligent AI-powered features, smart recommendation engines, and automation workflows that solve real operational bottlenecks.
  5. `05 - MODERN PRODUCT DESIGN`: Designing clean, modern, and memorable digital products with meticulous attention to layout, typography, and cohesive visual identities.
- **Item Typography**:
  - Number: `font-black text-[clamp(3rem,10vw,140px)] text-[#0C0C0C] leading-none min-w-[120px] sm:min-w-[180px] md:min-w-[220px] select-none`.
  - Title: `font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]`.
  - Description: `font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60 mt-2`.
- **Animation**: Staggered `FadeIn` with delay `i * 0.1s`.

---

### 4.5 Projects Section
- **Background**: `#0C0C0C`, `rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`, `-mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-16 sm:pt-20 md:pt-24 pb-28 sm:pb-36 px-4 sm:px-6 md:px-10`.
- **Heading**: `"Project"` using `.hero-heading` gradient, `text-[clamp(3rem,12vw,160px)] font-black uppercase text-center leading-none mb-14 sm:mb-20`.
- **3 Sticky-Stacking Cards** (container height `h-[85vh]`, sticky `top-24 md:top-32`):
  - Scale transform: `targetScale = 1 - (totalCards - 1 - index) * 0.03`.
  - Top offset: `${index * 28}px`.
  - Card style: `rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between`.
  - **Top Row**:
    - Large project number `01` / `02` / `03` (`font-black text-[clamp(2.5rem,6vw,80px)] text-[#D7E2EA] leading-none`).
    - Category tag (e.g. `PRODUCT / SYSTEM`, `FINTECH / PAYROLL`, `SOCIAL / REALTIME`).
    - Project Title (e.g. `CINEMOB`, `SHIFTPAY`, `SMURFY`).
    - `LiveProjectButton` ("Live Project", links to external demo).
  - **Bottom Row (Image Grid)**:
    - Left Column (40% width): 2 stacked images:
      - Top image height: `clamp(130px, 16vw, 230px)`, `rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full`.
      - Bottom image height: `clamp(160px, 22vw, 340px)`, `rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full`.
    - Right Column (60% width): 1 tall image (`rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]`).
- **Project Data & Exact CloudFront Image URLs Mapping**:
  1. **Card 01 - CineMOB**:
     - Category: `PRODUCT / SYSTEM`
     - Live demo: `https://cinematrics-e0231.firebaseapp.com/`
     - Left Col Image 1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85`
     - Left Col Image 2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85`
     - Right Col Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85`
  2. **Card 02 - ShiftPay**:
     - Category: `FINTECH / PAYROLL`
     - Live demo: `https://at-shiftpay.web.app/`
     - Left Col Image 1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85`
     - Left Col Image 2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85`
     - Right Col Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85`
  3. **Card 03 - Smurfy**:
     - Category: `SOCIAL / REALTIME`
     - Live demo: `https://smurfy-138c1.web.app/`
     - Left Col Image 1: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85`
     - Left Col Image 2: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85`
     - Right Col Image: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85`

---

### 4.6 Reusable Components
1. **`ContactButton`**:
   - Gradient pill with inset glow, white 2px outline (-3px offset).
   - Label: `"Contact Me"`.
   - On click: triggers contact modal (or mailto).
2. **`LiveProjectButton`**:
   - Ghost pill with `#D7E2EA` 2px border, uppercase tracking-widest.
   - Label: `"Live Project"`.
   - Props: `href: string`.
3. **`FadeIn`**:
   - Wrapper using `motion.div` with `whileInView`, `viewport={{ once: true, margin: "50px", amount: 0 }}`.
   - Props: `delay`, `duration` (0.7), `x` (0), `y` (30).
4. **`Magnet`**:
   - Cursor-following transform using `requestAnimationFrame`, padding 150, strength 3.
   - Media query guard `(hover: hover) and (pointer: fine)`.
5. **`AnimatedText`**:
   - Scroll-driven character opacity reveal.
   - Character mapping: invisible placeholder + absolute animated span.
6. **`ContactModal`**:
   - Dark modal dialog with backdrop blur.
   - Shows email `tcongminh1604@gmail.com` with quick copy, GitHub `dexter826`, Facebook, Instagram links.

---

## 5. Implementation & Verification Plan

```
1. [Configure next.config.ts remotePatterns & Google Font Kanit in layout.tsx] → verify: [next build font and image remote checks pass]
2. [Reset globals.css: #0C0C0C background, .hero-heading gradient, box-sizing reset] → verify: [Styles render cleanly without legacy CSS conflicts]
3. [Implement reusable UI components: FadeIn, Magnet, AnimatedText, ContactButton, LiveProjectButton, ContactModal] → verify: [Components compile and render without runtime errors]
4. [Build Section 1: HeroSection (Navbar, massive H1, Magnet avatar, bottom bar)] → verify: [Responsive viewport test at 375px, 768px, 1440px]
5. [Build Section 2: MarqueeSection (2 rows, 21 GIFs, passive rAF scroll translation)] → verify: [Smooth 60fps horizontal translate on page scroll]
6. [Build Section 3: AboutSection (4 corner 3D icons, AnimatedText paragraph, ContactButton)] → verify: [Character-by-character opacity reveal on scroll]
7. [Build Section 4: ServicesSection (White rounded container, 5 numbered services, staggered FadeIn)] → verify: [Contrast aesthetic and hover states verify cleanly]
8. [Build Section 5: ProjectsSection (Sticky stacking cards, scale transform, CloudFront image grid, live demo links)] → verify: [Cards stack smoothly without layout jumps]
9. [Assemble in src/app/page.tsx, run production build & lint checks] → verify: [npm run build completes with exit code 0]
```
