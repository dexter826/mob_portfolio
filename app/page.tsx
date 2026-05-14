'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-background overflow-x-hidden">
      <Navigation />

      <main className="flex-1 pt-8 relative scroll-smooth overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col space-y-20">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
