'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  highlight?: boolean;
}

export function Card({ children, className, hover = true, highlight = false }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card p-6 md:p-8 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark',
        hover && 'hover:border-gold/30 hover:shadow-[0_0_30px_rgba(200,168,85,0.08)] transition-all duration-300',
        highlight && 'border-gold/40 shadow-gold',
        className
      )}
    >
      {children}
    </div>
  );
}