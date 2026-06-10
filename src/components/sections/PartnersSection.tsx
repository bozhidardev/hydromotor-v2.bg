'use client';

import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const partners = [
  {
    name: 'Putzmeister',
    description: 'Световен лидер в бетонните помпи. Официален представител за България от 1998 г.',
    icon: Award,
  },
  {
    name: 'SANY',
    description: 'Автобетонпомпи с модерен дизайн и отлична цена за изпълнението.',
    icon: ShieldCheck,
  },
];

export function PartnersSection() {
  return (
    <section className="section-surface py-20 md:py-28">
      <div className="max-w-container mx-auto container-padding">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="block text-overline font-semibold uppercase text-gold mb-5 leading-none">
              Партньори
            </span>
            <h2 className="font-heading text-h3 font-semibold text-white">
              Официален представител на световни марки
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} staggerIndex={i}>
              <div className="glass-card rounded-lg p-6 md:p-8 h-full border-l-2 border-gold/30 hover:border-gold/60 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center">
                    <partner.icon size={22} className="text-dark" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
