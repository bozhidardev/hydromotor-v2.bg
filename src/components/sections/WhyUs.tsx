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
    <section className="concrete-section section-padding relative overflow-hidden">
      <div className="max-w-container mx-auto container-padding">
        <ScrollReveal>
          <div className="text-left mb-14 md:mb-16">
            <span className="block text-overline font-semibold uppercase text-gold mb-5 leading-none">
              Защо нас
            </span>
            <h2 className="font-heading text-h2 font-extrabold uppercase text-ink heading-underline">
              Подкрепа, която държи <span className="text-gold">обекта в движение.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SELLING_POINTS.map((point, i) => {
            const Icon = iconMap[point.icon] || Wrench;
            return (
              <ScrollReveal key={point.title} staggerIndex={i}>
                <div className="h-full border border-black/15 bg-white p-6 text-left transition duration-200 hover:-translate-y-1 hover:border-gold md:p-8">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center bg-gold">
                    <Icon size={25} className="text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase text-ink mb-3">{point.title}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed">{point.text}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
