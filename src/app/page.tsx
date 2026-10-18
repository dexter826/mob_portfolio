'use client';

import React, { useState } from 'react';
import {
  HeroSection,
  MarqueeSection,
  AboutSection,
  CapabilitiesSection,
  ProjectsSection,
} from '@/components/sections';
import { ContactModal } from '@/components/ui';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main
      style={{ overflowX: 'clip' }}
      className="min-h-screen w-full bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip selection:bg-white selection:text-black relative"
    >
      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Capabilities Section (White Contrast) */}
      <CapabilitiesSection />

      {/* 5. Projects Section (Sticky Stacking) */}
      <ProjectsSection />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
