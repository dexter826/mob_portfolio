'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export function GlitchText({ text, className, as: Tag = 'span' }: GlitchTextProps) {
  return (
    <Tag className={cn('ds-distortion-hover inline-block', className)} data-text={text}>
      {text}
    </Tag>
  );
}
