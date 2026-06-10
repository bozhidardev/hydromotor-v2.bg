'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Phone, ArrowRight, ArrowLeft, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { SERVICE_TEXT, SERVICES } from '@/data/content';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GoldDivider } from '@/components/ui/GoldDivider';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/data/content';

const processSteps = [
  { icon: Search, title: 'Диагностика', description: 'Пълна проверка и анализ на проблема с модерна оборудивка.' },
  { icon: Clock, title: 'Бърза реакция', description: 'Мобилен екип на място в най-кратък срок.' },
  { icon: ShieldCheck, title: 'Качествен ремонт', description: 'Оригинални части и сертифицирани инженери.' },
  { icon: CheckCircle, title: 'Гаранция', description: 'Гаранция за извършените ремонти и инсталации.' },
];

export default function ServicesPage() {
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
          <span className="inline-block text-overline text-gold mb-5 leading-none">
            Сервиз
          </span>
          <h1 className="font-heading text-h1 font-semibold text-white mb-6">
            Професионален <span className="gold-gradient-text">сервиз</span> и поддръжка
          </h1>
          <p className="text-text-secondary text-body-lg max-w-3xl">
            {SERVICE_TEXT.intro}
          </p>
        </div>

        <GoldDivider className="mb-16 md:mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.title} staggerIndex={i}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-lg gold-gradient-bg flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-dark" />
                </div>
                <div className="text-gold text-sm font-semibold mb-1">Стъпка {i + 1}</div>
                <h2 className="font-heading text-lg font-semibold text-white mb-2">{step.title}</h2>
                <p className="text-text-secondary text-body-sm">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mb-20 md:mb-28">
          <SectionHeading
            overline="Нашият сервиз"
            title="Пълна гама сервизни услуги"
            align="left"
            variant="minor"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} staggerIndex={i}>
                <div
                  className={`glass-card rounded-lg p-6 md:p-8 h-full ${
                    service.highlight
                      ? 'border-gold/40 shadow-gold ring-1 ring-gold/20 border-t-2'
                      : 'border-t-2 border-transparent hover:border-gold/30 transition-all duration-300'
                  }`}
                >
                  <h2 className="font-heading text-xl font-semibold text-white mb-3">{service.title}</h2>
                  <p className="text-text-secondary text-body leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {service.highlight && (
                    <div className="mt-4 p-4 bg-gold/10 rounded-lg border border-gold/20">
                      <div className="flex items-center gap-3">
                        <Phone size={20} className="text-gold" />
                        <div>
                          <div className="text-sm text-gold uppercase tracking-wide">24/7 Авариен сервиз</div>
                          <a
                            href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
                            className="font-mono text-xl font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1"
                          >
                            {CONTACT.servicePhones[0]}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          <ScrollReveal direction="left">
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-white mb-4">Резервни части</h2>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                {SERVICE_TEXT.spareParts}
              </p>
              <p className="text-text-secondary text-body leading-relaxed">
                {SERVICE_TEXT.expressDelivery}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold text-white mb-4">Мобилен сервиз</h2>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                {SERVICE_TEXT.mobileService}
              </p>
              <p className="text-text-secondary text-body leading-relaxed">
                {SERVICE_TEXT.training}
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center">
            <div className="gold-gradient-bg rounded-2xl p-6 md:p-10 lg:p-12 text-center">
              <h2 className="font-heading text-h3 font-semibold text-dark mb-4">
                Нуждаете се от сервизна помощ?
              </h2>
              <p className="text-dark/80 mb-8 max-w-xl mx-auto">
                Свържете се с нас за консултация, диагностика или аварийна помощ.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontakti"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-dark text-white border border-dark/50 rounded-full font-semibold text-lg tracking-wide uppercase shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:bg-dark-100 hover:border-dark-100 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                >
                  Контакти
                  <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-4 border-2 border-dark text-dark font-semibold rounded-full hover:bg-dark/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
                >
                  <Phone size={18} />
                  {CONTACT.servicePhones[0]}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}