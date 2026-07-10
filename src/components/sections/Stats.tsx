'use client';

import React from 'react';
import { Calendar, Award, Phone } from 'lucide-react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const stats = [
  {
    icon: Calendar,
    value: 25,
    suffix: '+',
    label: 'Години опит',
  },
  {
    icon: Award,
    value: 1998,
    suffix: '',
    label: 'Putzmeister представител',
  },
  {
    icon: Phone,
    value: 24,
    suffix: '/7',
    label: 'Авариен сервиз',
  },
];

export function Stats() {
  return (
    <section id="stats" className="relative bg-ink text-white">
      <GoldDivider className="absolute top-0" />
      <div className="mx-auto max-w-container container-padding">
        <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} staggerIndex={i} className="py-8 md:px-9 md:py-11 first:md:pl-0 last:md:pr-0">
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-gold/50 text-gold">
                  <stat.icon size={22} />
                </div>
                <div>
                  <div className="font-heading text-4xl font-extrabold leading-none text-white">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-text-secondary">{stat.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
