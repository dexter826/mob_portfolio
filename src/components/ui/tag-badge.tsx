import React from 'react';
import { cn } from '@/lib/utils';

export interface TagBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'contrast' | 'success' | 'outline' | 'amber';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}

export function TagBadge({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}: TagBadgeProps) {
  const variantStyles = {
    default: 'bg-surface-card border border-border-subtle text-text-primary/90',
    contrast: 'bg-surface-base/5 text-text-dark/80 font-medium',
    success: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold',
    amber: 'bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold',
    outline: 'border border-border-subtle text-text-muted hover:text-text-primary',
  };

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[10px] sm:text-xs rounded',
    md: 'px-2.5 sm:px-3 py-1 text-xs rounded-full',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-mono uppercase tracking-wider select-none shrink-0 transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
