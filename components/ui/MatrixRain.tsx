'use client';

import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame: number | null = null;
    let lastFrame = 0;
    let drops: number[] = [];

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      const columns = Math.ceil(canvas.width / 14);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
    };

    resizeCanvas();

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;

    const draw = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const containerStyles = getComputedStyle(container);
      const canvasColor = rootStyles.getPropertyValue('--ds-bg-canvas').trim() || rootStyles.backgroundColor;
      const accentColor = rootStyles.getPropertyValue('--ds-brand-accent').trim() || containerStyles.color;
      const monoFont = rootStyles.getPropertyValue('--ds-font-mono').trim() || containerStyles.fontFamily;

      ctx.globalAlpha = 0.1;
      ctx.fillStyle = canvasColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = 1;
      ctx.fillStyle = accentColor;
      ctx.font = `${fontSize}px ${monoFont}`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const render = (timestamp: number) => {
      if (timestamp - lastFrame >= 33) {
        draw();
        lastFrame = timestamp;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const stop = () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      animationFrame = null;
    };

    const syncAnimation = () => {
      stop();
      if (reducedMotion.matches || document.hidden) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      animationFrame = requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    reducedMotion.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    syncAnimation();

    return () => {
      stop();
      observer.disconnect();
      reducedMotion.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
    };
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-primary opacity-[0.15]">
      <canvas ref={canvasRef} className="block" />
    </div>
  );
};
