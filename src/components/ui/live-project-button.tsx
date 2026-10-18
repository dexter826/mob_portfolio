'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './button';

export interface LiveProjectButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export function LiveProjectButton({
  href,
  className = '',
  label = 'Live Project',
}: LiveProjectButtonProps) {
  return (
    <Button
      variant="outline-pill"
      href={href}
      icon={<ArrowUpRight className="w-4 h-4" />}
      className={className}
    >
      {label}
    </Button>
  );
}
