'use client';

import React, { useState } from 'react';
import {
  HeroSection,
  MarqueeSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
} from '@/components/sections';
import { ContactModal } from '@/components/ui';
import { LanguageProvider } from '@/context/language-context';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <main
        style={{ overflowX: 'clip' }}
        className="min-h-screen w-full bg-surface-base text-text-primary font-sans overflow-x-clip selection:bg-white selection:text-black relative"
      >
        {/* 1. Hero Section */}
        <HeroSection onContactClick={() => setIsContactOpen(true)} />

        {/* 2. Marquee Section */}
        <MarqueeSection />

        {/* 3. About Section */}
        <AboutSection onContactClick={() => setIsContactOpen(true)} />

        {/* 4. Experience Section (White Contrast) */}
        <ExperienceSection />

        {/* 5. Projects Section (Sticky Stacking) */}
        <ProjectsSection />

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>
    </LanguageProvider>
  );
}
