'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Magnet } from '@/components/ui';
import { easeCustom } from '@/lib/motion';

export function HeroAvatar() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: easeCustom }}
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/minh-3d-avatar.png"
            alt="3D Portrait of Minh"
            className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[460px] object-contain drop-shadow-2xl pointer-events-none select-none"
            loading="eager"
          />
        </Magnet>
      </motion.div>
    </div>
  );
}
