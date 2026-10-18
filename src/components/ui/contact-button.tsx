'use client';

import React from 'react';
import { Button } from './button';

export interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export function ContactButton({
  onClick,
  className = '',
  label = 'Contact me',
}: ContactButtonProps) {
  return (
    <Button variant="gradient-pill" onClick={onClick} className={className}>
      {label}
    </Button>
  );
}
