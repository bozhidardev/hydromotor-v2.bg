'use client';

import React from 'react';
import { ArrowRight, Award, Calendar, Package, Wrench } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';

const facts = [
  { icon: Award, value: '25+', label: 'години опит' },
  { icon: Calendar, value: '1998', label: 'Putzmeister партньор' },
  { icon: Package, value: '24 ч.', label: 'спешна доставка' },
  { icon: Wrench, value: '24/7', label: 'авариен сервиз' },
];

export function AboutPreview() {
  return (
    <section className="concrete-section section-padding overflow-hidden">
      <div className="mx-auto max-w-container container-padding">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <ScrollReveal direction="left">
            <div className="max-w-xl">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-gold" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">За Хидромотор</span>
              </div>
              <h2 className="font-heading text-[clamp(2.8rem,5vw,5.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em] text-ink">
                До машината. До клиента. <span className="text-gold">От 1996.</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-ink/70">
                От сервизна работилница до национален партньор за строителна техника — изградихме име с навременна реакция, техническа експертиза и отговорност към всеки обект.
              </p>
              <p className="mt-4 leading-relaxed text-ink/65">
                Като официален представител на Putzmeister предлагаме цялото решение: избор на машина, оригинални резервни части, профилактика и ремонт на място.
              </p>
              <div className="mt-9">
                <Button href="/za-nas" variant="dark">
                  Научете повече <ArrowRight size={17} />
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="border-t-4 border-gold bg-ink p-6 text-white md:p-10">
              <p className="mb-8 max-w-lg font-heading text-2xl font-bold uppercase leading-tight">
                Един екип за машината през целия ѝ работен живот.
              </p>
              <div className="grid grid-cols-2 border-l border-t border-white/12">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-b border-r border-white/12 p-5 md:p-7">
                    <fact.icon size={21} className="mb-5 text-gold" />
                    <div className="font-heading text-4xl font-extrabold leading-none">{fact.value}</div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.11em] text-text-secondary">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
