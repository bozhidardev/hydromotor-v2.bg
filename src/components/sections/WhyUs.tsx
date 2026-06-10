'use client';

import React from 'react';
import { Calendar, Award, Package, Wrench } from 'lucide-react';
import { SELLING_POINTS } from '@/data/content';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  calendar: Calendar,
  award: Award,
  package: Package,
  wrench: Wrench,
};

export function WhyUs() {
  return (
    <section className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
      <div className="max-w-container mx-auto container-padding">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="block text-overline font-semibold uppercase text-gold mb-5 leading-none">
              Защо нас
            </span>
            <h2 className="font-heading text-h2 font-semibold text-white heading-underline heading-underline-center">
              Защо да изберете Хидромотор?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SELLING_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon] || Wrench;
            return (
              <ScrollReveal key={point.title} staggerIndex={i}>
                <div className="glass-card p-6 md:p-8 h-full text-center group border-t-2 border-transparent hover:border-gold/30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl gold-gradient-bg flex items-center justify-center mx-auto mb-5 shadow-[0_4px_15px_rgba(200,168,85,0.3)] group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-dark" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{point.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}