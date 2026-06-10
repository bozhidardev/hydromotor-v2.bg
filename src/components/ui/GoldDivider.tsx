'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRef } from 'react';

export function GoldDivider({ className, flipped = false }: { className?: string; flipped?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className={cn('relative h-px w-full', className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  );
}