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
    <section id="stats" className="relative section-elevated">
      <GoldDivider className="absolute top-0" />
      <div className="max-w-container mx-auto container-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} staggerIndex={i} className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <stat.icon size={28} className="text-gold" />
                <div className="text-h2 font-semibold text-white font-mono">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-text-secondary text-base uppercase tracking-wide font-medium">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}