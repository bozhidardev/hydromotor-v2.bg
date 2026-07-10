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
      <div className="absolute left-0 top-0 h-px w-full bg-surface-border" />
      <motion.div
        className="absolute left-0 top-0 h-[3px] w-20 bg-gold"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: flipped ? 'right' : 'left' }}
      />
    </div>
  );
}
