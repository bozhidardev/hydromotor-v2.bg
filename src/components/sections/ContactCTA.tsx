'use client';

import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { CONTACT } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function ContactCTA() {
  return (
    <section className="relative section-padding overflow-hidden border-t-4 border-gold">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-gold/15 rounded-full blur-[100px]" />
        <div className="absolute -right-32 bottom-1/4 w-80 h-80 bg-gold/8 rounded-full blur-[80px]" />
      </div>

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-bl from-gold/[0.03] to-transparent" />
      </div>

      <div className="relative z-10 max-w-container mx-auto container-padding text-center">
        <ScrollReveal>
          <span className="inline-block text-overline font-semibold uppercase text-gold mb-6">
            24/7 Авариен сервиз
          </span>
          <h2 className="font-heading text-h1 md:text-display font-semibold text-white mb-6">
            Нуждаете се от{' '}
            <span className="gold-gradient-text">сервиз</span>
            <br className="hidden md:block" />
            {' '}или консултация?
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-12">
            Нашият екип е готов да ви помогне — било то за избор на машина,
            резервни части или спешен ремонт.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 mb-12 max-w-2xl mx-auto">
            {/* Phone card */}
            <a
              href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
              className="cta-contact-card group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-xl"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(200,168,85,0.3)]">
                <Phone size={24} className="text-dark" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-overline text-gold/70 mb-1">
                  Авариен сервиз 24/7
                </div>
                <div className="font-mono text-xl md:text-2xl font-semibold text-white group-hover:text-gold transition-colors whitespace-nowrap">
                  {CONTACT.servicePhones[0]}
                </div>
              </div>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${CONTACT.emails[1]}`}
              className="cta-contact-card group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-xl"
            >
              <div className="w-14 h-14 rounded-xl gold-gradient-bg flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(200,168,85,0.3)]">
                <Mail size={24} className="text-dark" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-overline text-gold/70 mb-1">
                  Имейл
                </div>
                <div className="font-mono text-xl md:text-2xl font-semibold text-white group-hover:text-gold transition-colors">
                  {CONTACT.emails[1]}
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Button href="/kontakti" variant="cta" size="xl">
            Към контактите
            <ArrowRight size={20} />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}