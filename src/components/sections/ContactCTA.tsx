'use client';

import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { CONTACT } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gold py-20 text-white md:py-24">
      <div className="absolute -right-16 -top-32 select-none font-heading text-[24rem] font-extrabold leading-none text-white/[0.06]" aria-hidden="true">H</div>
      <div className="relative z-10 mx-auto max-w-container container-padding">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">Машини · Части · Сервиз</span>
            <h2 className="mt-5 max-w-4xl font-heading text-[clamp(3.1rem,6vw,6.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
              Имате задача.<br />Ние имаме решение.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white">
              Кажете ни каква техника, част или сервизна намеса ви е необходима. Ще получите конкретна препоръка от технически специалист.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Button href="/kontakti" variant="dark" size="xl" className="w-full lg:w-auto">
              Изпратете запитване <ArrowRight size={20} />
            </Button>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid border-y border-white/25 md:grid-cols-2 md:divide-x md:divide-white/25">
          <a href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`} className="group flex items-center gap-5 py-6 md:px-7 first:md:pl-0">
            <Phone size={24} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">24/7 авариен сервиз</p>
              <p className="mt-1 font-heading text-3xl font-bold group-hover:underline">{CONTACT.servicePhones[0]}</p>
            </div>
          </a>
          <a href={`mailto:${CONTACT.emails[1]}`} className="group flex items-center gap-5 border-t border-white/25 py-6 md:border-t-0 md:px-7">
            <Mail size={24} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white">Имейл за запитвания</p>
              <p className="mt-1 break-all font-heading text-[clamp(1.35rem,6vw,1.875rem)] font-bold group-hover:underline">{CONTACT.emails[1]}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
