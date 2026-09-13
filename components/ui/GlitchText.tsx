'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className, 
  as: Tag = 'span'
}) => {
  const Component = Tag as any;

  return (
    <Component className={cn('ds-distortion-hover inline-block', className)} data-text={text}>
      {text}
    </Component>
  );
};
