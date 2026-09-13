'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { motion } from 'motion/react';
import { dsMotion, easeExpo } from '@/lib/motion';

export default function Portfolio() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: dsMotion.reveal, ease: easeExpo }}
      className="min-h-screen w-full bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-background overflow-x-hidden"
    >
      <Navigation />

      <main className="flex-1 pt-24 relative scroll-smooth overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex flex-col">
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
    </motion.div>
  );
}
