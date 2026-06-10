'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 rounded-md whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark';

  const variants = {
    primary:
      'gold-gradient-bg text-dark border border-gold/50 hover:-translate-y-0.5 active:scale-[0.98] shadow-[0_0_15px_rgba(200,168,85,0.25),0_4px_6px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(200,168,85,0.4),0_8px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]',
    secondary:
      'bg-gold/5 border-2 border-gold text-gold hover:bg-gold hover:text-dark active:scale-[0.98]',
    dark:
      'bg-dark-100 text-white border border-white/10 shadow-lg hover:bg-dark-50 hover:border-gold/30 active:scale-[0.98]',
    ghost:
      'text-gold hover:bg-gold/8 active:scale-[0.98]',
    cta:
      'gold-gradient-bg text-dark rounded-full px-10 py-5 text-lg font-bold tracking-wide uppercase shadow-[0_0_20px_rgba(200,168,85,0.3)] hover:shadow-[0_0_30px_rgba(200,168,85,0.5)] hover:-translate-y-0.5 active:scale-[0.98] animate-cta-pulse',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
    xl: 'px-10 py-5 text-lg gap-3',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}