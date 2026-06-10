'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { COMPANY, PUTZMEISTER_DESCRIPTION, SANY_DESCRIPTION } from '@/data/content';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { Button } from '@/components/ui/Button';

const timeline = [
  { year: '1996', title: 'Основаване', description: 'Фирма "Хидромотор" ООД е създадена с предмет на дейност ремонт и поддръжка на строителна техника.' },
  { year: '1998', title: 'Putzmeister партньорство', description: 'Официален търговски представител за България на Putzmeister — световен лидер в бетонпомпите.' },
  { year: '2000+', title: 'Разширяване', description: 'Разширяване на сервизната база, увеличаване на складовите наличности и мобилния сервизен парк.' },
  { year: 'Днес', title: 'Надежден партньор', description: 'Продължаваме да предоставяме качествен сервиз, резервни части и консултации в цяла България.' },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 md:pb-28">
      <div className="max-w-container mx-auto container-padding">
        <Link
          href="/"
          className="inline-flex items-center min-h-[44px] gap-2 text-gold hover:text-gold-light transition-colors mb-8 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-1"
        >
          <ArrowLeft size={16} />
          Начало
        </Link>

        <div className="mb-16 md:mb-20">
          <span className="inline-block text-overline font-semibold uppercase text-gold mb-5 leading-none">
            За нас
          </span>
          <h1 className="font-heading text-h1 font-semibold text-white mb-6">
            <span className="gold-gradient-text">Хидромотор</span> ООД
          </h1>
          <p className="text-text-secondary text-body-lg max-w-3xl">
            {COMPANY.description}
          </p>
        </div>

        <GoldDivider className="mb-16 md:mb-20" />

        <div className="mb-20 md:mb-28">
          <SectionHeading
            overline="История"
            title="Нашият път"
            align="center"
            variant="default"
            spacing="default"
          />
          <ol className="relative list-none">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} staggerIndex={i}>
                <li className={`relative flex items-start gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gold/20 border-2 border-gold -translate-x-1/2 mt-0 flex items-center justify-center">
                    <span className="text-gold text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-gold font-semibold text-lg font-mono">{item.year}</span>
                    <h3 className="font-heading text-xl font-semibold text-white mb-2 mt-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm md:text-base">{item.description}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          <ScrollReveal direction="left">
            <div className="glass-card rounded-lg p-8 border-t-2 border-gold/30">
              <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center mb-4">
                <Award size={22} className="text-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">Putzmeister</h3>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                {PUTZMEISTER_DESCRIPTION.intro}
              </p>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                {PUTZMEISTER_DESCRIPTION.history}
              </p>
              <ul className="space-y-2">
                {PUTZMEISTER_DESCRIPTION.benefits.slice(0, 3).map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gold-gradient-bg mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass-card rounded-lg p-8 border-t-2 border-gold/30">
              <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mb-4">
                <ShieldCheck size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">SANY</h3>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                {SANY_DESCRIPTION.intro}
              </p>
              <ul className="space-y-2">
                {SANY_DESCRIPTION.commonFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gold-gradient-bg mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
             <Button href="/kontakti" variant="cta" size="xl">
               Свържете се с нас
               <ArrowRight size={18} />
             </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}