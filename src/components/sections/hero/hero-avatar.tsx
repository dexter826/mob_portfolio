'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Magnet } from '@/components/ui';
import { easeCustom } from '@/lib/motion';

export function HeroAvatar() {
  return (
    <>
      {/* 1. Mobile-only Cinematic Seamless Portrait with avatar.JPG */}
      <div className="block md:hidden z-10 pointer-events-auto relative w-full flex justify-center items-center mt-3 sm:mt-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: easeCustom }}
          className="relative w-[84vw] max-w-[340px] sm:max-w-[390px] h-[330px] sm:h-[400px] max-h-[46vh] sm:max-h-[50vh] flex items-center justify-center"
        >
          {/* Ambient soft backlight */}
          <div className="absolute inset-x-4 inset-y-6 rounded-full bg-slate-400/[0.05] blur-3xl pointer-events-none" />

          {/* Seamless Vignetted Portrait */}
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              maskImage: 'radial-gradient(ellipse 72% 70% at 50% 46%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 72% 70% at 50% 46%, black 50%, transparent 100%)',
            }}
          >
            <Image
              src="/avatar.JPG"
              alt="Trần Công Minh Portrait"
              fill
              priority
              sizes="(max-width: 768px) 85vw, 400px"
              className="object-cover object-[52%_18%] filter contrast-[1.08] brightness-[0.98] select-none pointer-events-none transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>

      {/* 2. Desktop-only 3D Avatar with Magnet Tilt */}
      <div className="hidden md:block z-10 pointer-events-auto md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: easeCustom }}
          className="flex justify-center items-center"
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
              className="w-[400px] lg:w-[460px] object-contain drop-shadow-2xl pointer-events-none select-none"
              loading="eager"
            />
          </Magnet>
        </motion.div>
      </div>
    </>
  );
}
