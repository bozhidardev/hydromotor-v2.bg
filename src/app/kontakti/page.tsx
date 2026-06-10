'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Facebook, Linkedin } from 'lucide-react';
import { CONTACT } from '@/data/content';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
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
            Контакти
          </span>
          <h1 className="font-heading text-h1 font-semibold text-white mb-6">
            Свържете се <span className="gold-gradient-text">с нас</span>
          </h1>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Нашият екип е готов да ви помогне с избора на правилната машина, резервни части или
            сервизно обслужване.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="space-y-6 mb-10">
              <ScrollReveal delay={0}>
                <div className="glass-card rounded-lg p-6 border-t-2 border-transparent hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-dark" />
                    </div>
                    <div>
                      <h2 className="font-heading font-semibold text-white mb-1">Адрес</h2>
                      <p className="text-text-secondary text-sm">{CONTACT.address}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="glass-card rounded-lg p-6 border-t-2 border-gold/30 shadow-gold">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-dark" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-heading font-semibold text-white mb-1">Телефони</h2>
                      <div className="space-y-0">
                        {CONTACT.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="block text-text-secondary text-sm hover:text-gold transition-colors font-mono whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-surface-border">
                        <p className="text-gold text-xs font-bold uppercase tracking-wider mb-0.5">
                          24/7 Авариен сервиз
                        </p>
                        {CONTACT.servicePhones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s/g, '')}`}
                            className="block text-white font-semibold hover:text-gold transition-colors font-mono whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-lg p-6 border-t-2 border-transparent hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-dark" />
                    </div>
                    <div>
                      <h2 className="font-heading font-semibold text-white mb-1">Имейл</h2>
                      {CONTACT.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="block text-text-secondary text-sm hover:text-gold transition-colors font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="glass-card rounded-lg p-6 border-t-2 border-transparent hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-dark" />
                    </div>
                    <div>
                      <h2 className="font-heading font-semibold text-white mb-1">Работно време</h2>
                      <p className="text-text-secondary text-sm">Понеделник — Петък: 08:00 — 17:00</p>
                      <p className="text-text-secondary text-sm">Събота: 09:00 — 13:00</p>
                      <p className="text-gold text-sm font-medium mt-1">Авариен сервиз: 24/7</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-surface-light flex items-center justify-center text-text-secondary hover:text-gold hover:bg-surface-elevated transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-surface-light flex items-center justify-center text-text-secondary hover:text-gold hover:bg-surface-elevated transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <ScrollReveal direction="right">
              <div className="glass-card rounded-lg p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-white mb-6">Изпратете запитване</h2>
                <form className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                        Име <span className="text-text-muted">(задължително)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-surface-light border border-surface-border rounded-md px-4 py-3 text-white text-sm placeholder:text-text-secondary focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_0_4px_rgba(200,168,85,0.15)] transition-all duration-200"
                        placeholder="Вашето име"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-text-secondary mb-1.5">
                        Телефон <span className="text-text-muted">(задължително)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        className="w-full bg-surface-light border border-surface-border rounded-md px-4 py-3 text-white text-sm placeholder:text-text-secondary focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_0_4px_rgba(200,168,85,0.15)] transition-all duration-200"
                        placeholder="Вашият телефон"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                      Имейл
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-surface-light border border-surface-border rounded-md px-4 py-3 text-white text-sm placeholder:text-text-secondary focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_0_4px_rgba(200,168,85,0.15)] transition-all duration-200"
                      placeholder="Вашият имейл"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-text-secondary mb-1.5">
                      Тема
                    </label>
                    <select
                      id="subject"
                      className="w-full bg-surface-light border border-surface-border rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_0_4px_rgba(200,168,85,0.15)] transition-all duration-200"
                    >
                      <option value="" disabled>Изберете тема</option>
                      <option value="machines">Машини</option>
                      <option value="service">Сервиз</option>
                      <option value="parts">Резервни части</option>
                      <option value="emergency">Авариен сервиз</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                      Съобщение
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-surface-light border border-surface-border rounded-md px-4 py-3 text-white text-sm placeholder:text-text-secondary focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/30 focus:shadow-[0_0_0_4px_rgba(200,168,85,0.15)] transition-all duration-200 resize-none"
                      placeholder="Опишете вашето запитване..."
                    />
                  </div>
                  <Button type="submit" className="w-full justify-center" size="lg">
                    Изпратете запитване
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="glass-card rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=42.67459,23.46723&z=15&output=embed"
              width="100%"
              className="aspect-video w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Хидромотор ООД — София, с. Кривина"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}