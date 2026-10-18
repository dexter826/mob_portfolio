import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  variant?: 'dark' | 'contrast';
  as?: 'section' | 'div';
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  variant = 'dark',
  as: Component = 'section',
  children,
  className,
  ...props
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        'w-full relative select-none overflow-x-clip px-5 sm:px-8 md:px-10',
        variant === 'dark'
          ? 'bg-surface-base text-text-primary'
          : 'bg-surface-contrast text-text-dark',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
