'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient-pill' | 'outline-pill' | 'tab' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  active?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'gradient-pill',
  size = 'md',
  href,
  target,
  rel,
  active = false,
  icon,
  iconPosition = 'right',
  children,
  className,
  onClick,
  disabled,
  type = 'button',
  ...props
}: ButtonProps) {
  // If href is provided, render as <a>
  if (href) {
    const isExternal = href.startsWith('http') || target === '_blank';
    const computedRel = rel ?? (isExternal ? 'noopener noreferrer' : undefined);

    if (variant === 'outline-pill') {
      return (
        <a
          href={href}
          target={target ?? (isExternal ? '_blank' : undefined)}
          rel={computedRel}
          className={cn(
            'inline-flex items-center gap-2 px-5 py-2 rounded-full border border-text-primary text-text-primary font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-text-primary hover:text-surface-base transition-colors duration-200 shrink-0 cursor-pointer',
            className
          )}
        >
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }

    return (
      <a
        href={href}
        target={target}
        rel={computedRel}
        className={cn(
          'inline-flex items-center justify-center font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer',
          className
        )}
      >
        {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
      </a>
    );
  }

  // Variant: gradient-pill (Hero & About contact CTA)
  if (variant === 'gradient-pill') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'group relative inline-flex items-center justify-center p-[2px] rounded-full transition-transform active:scale-95 duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {/* Outer dual-gradient border */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-text-primary via-slate-400 to-text-primary p-[1.5px] transition-all group-hover:opacity-90" />
        {/* Inner surface */}
        <span className="relative flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-surface-card text-text-primary font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base transition-colors duration-200 group-hover:bg-surface-card-hover">
          {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
        </span>
      </button>
    );
  }

  // Variant: tab (Language Switcher)
  if (variant === 'tab') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'px-2.5 py-1 rounded-full text-xs font-mono transition-colors cursor-pointer select-none',
          active
            ? 'bg-text-primary text-surface-base font-bold shadow-sm'
            : 'text-text-muted hover:text-white',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Variant: ghost
  if (variant === 'ghost') {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          'text-text-primary font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer select-none',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }

  // Default button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center px-4 py-2 rounded-full font-medium transition-colors cursor-pointer',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
    </button>
  );
}
