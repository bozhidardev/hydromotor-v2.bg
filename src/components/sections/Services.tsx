'use client';

import React from 'react';
import { Search, Truck, Package, Phone, ArrowRight } from 'lucide-react';
import { SERVICES, CONTACT } from '@/data/content';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, React.ElementType> = {
  search: Search,
  truck: Truck,
  package: Package,
  phone: Phone,
};

export function Services() {
  return (
    <section className="section-elevated section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      </div>
      <div className="max-w-container mx-auto container-padding relative">
        <GoldDivider className="mb-16 md:mb-20" />
        <ScrollReveal>
          <SectionHeading
            overline="Сервиз"
            title="Професионален сервиз и поддръжка"
            description="Съвременно оборудван сервиз за диагностика и ремонт. Сертифицирани инженери и 24/7 аварийна помощ."
            variant="minor"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.filter(s => !s.highlight).map((service, i) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <ScrollReveal key={service.title} staggerIndex={i}>
                <div className="glass-card rounded-lg p-6 md:p-8 h-full border-t-2 border-transparent hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center">
                      <Icon size={22} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {SERVICES.filter(s => s.highlight).map((service) => {
          const Icon = iconMap[service.icon] || Search;
          return (
            <ScrollReveal key={service.title} delay={0.3}>
              <div className="glass-card-featured rounded-lg p-6 md:p-8 mt-6 md:mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-lg gold-gradient-bg flex items-center justify-center shadow-[0_4px_15px_rgba(200,168,85,0.3)]">
                    <Icon size={24} className="text-dark" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Button href="tel:0878553273" size="sm">
                      <Phone size={14} />
                      Обадете се сега
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        <ScrollReveal delay={0.4}>
          <div className="mt-16 md:mt-20 text-center">
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Нуждаете се от спешна диагностика или аварийна помощ? Свържете се с нас незабавно.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/kontakti" variant="secondary">
                Свържете се с нас
                <ArrowRight size={16} />
              </Button>
              <a
                href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-2"
              >
                <Phone size={16} />
                {CONTACT.servicePhones[0]}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}