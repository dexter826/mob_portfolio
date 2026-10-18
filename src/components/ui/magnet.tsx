'use client';

import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

function subscribeHover(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
  mql.addEventListener('change', callback);
  return () => mql.removeEventListener('change', callback);
}

function getHoverSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getServerHoverSnapshot() {
  return false;
}

export function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  className = '',
}: MagnetProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const canHover = useSyncExternalStore(
    subscribeHover,
    getHoverSnapshot,
    getServerHoverSnapshot
  );

  useEffect(() => {
    if (!canHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      const triggerZone = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < triggerZone) {
        setIsActive(true);
        const pullFactor = (1 - distance / triggerZone) * strength;
        setPosition({
          x: (distanceX / (rect.width / 2)) * pullFactor * 15,
          y: (distanceY / (rect.height / 2)) * pullFactor * 15,
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, canHover]);

  return (
    <div
      ref={elementRef}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
