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
    'inline-flex items-center justify-center font-bold tracking-[0.08em] uppercase transition-all duration-200 rounded-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-gold text-white border border-gold hover:bg-gold-light hover:border-gold-light hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_24px_rgba(227,66,36,0.18)]',
    secondary:
      'bg-white text-ink border border-ink/25 hover:border-gold hover:text-gold hover:-translate-y-0.5 active:translate-y-0',
    dark:
      'bg-ink text-white border border-ink hover:bg-gold hover:border-gold hover:-translate-y-0.5 active:translate-y-0',
    ghost:
      'text-gold border border-transparent hover:border-gold/40 hover:bg-gold/5',
    cta:
      'bg-gold text-white border border-gold px-10 py-5 text-base font-bold hover:bg-white hover:text-ink hover:border-white hover:-translate-y-0.5',
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
