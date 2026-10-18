import React from 'react';
import { cn } from '@/lib/utils';

export interface SurfaceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'contrast' | 'interactive' | 'outline';
  rounded?: 'default' | 'card' | 'container' | 'full';
  children: React.ReactNode;
  className?: string;
}

export function SurfaceCard({
  variant = 'dark',
  rounded = 'card',
  children,
  className,
  ...props
}: SurfaceCardProps) {
  const variantStyles = {
    dark: 'bg-surface-card border border-border-subtle text-text-primary',
    contrast: 'bg-surface-base/[0.03] border border-surface-base/10 text-text-dark',
    interactive:
      'bg-surface-card border border-border-subtle text-text-primary hover:border-border-strong hover:bg-surface-card-hover transition-colors duration-200',
    outline: 'bg-transparent border border-border-subtle text-text-primary',
  };

  const roundedStyles = {
    default: 'rounded-xl',
    card: 'rounded-2xl sm:rounded-3xl',
    container: 'rounded-[32px] sm:rounded-[48px] md:rounded-[56px]',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        variantStyles[variant],
        roundedStyles[rounded],
        'relative overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
