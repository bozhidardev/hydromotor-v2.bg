'use client';

import React from 'react';
import { ArrowRight, Award, Calendar, Package, Wrench } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { GoldDivider } from '@/components/ui/GoldDivider';

export function AboutPreview() {
  return (
    <section className="section-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
        <div className="max-w-container mx-auto container-padding">
        <GoldDivider className="mb-16 md:mb-20" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <span className="block text-overline font-semibold uppercase text-gold mb-5 leading-none">
                За нас
              </span>
              <h2 className="font-heading text-h2 font-semibold text-white mb-6">
                Надежден партньор в строителната техника от{' '}
                <span className="gold-gradient-text">1996</span>
              </h2>
              <p className="text-text-secondary text-body leading-relaxed mb-4">
                От малка сервизна работилница през 1996 г. до днешен ден — изградихме репутация на надежден партньор, на когото строителите в България се доверяват.
              </p>
              <p className="text-text-secondary text-body leading-relaxed mb-8">
                Като официален представител за България на Putzmeister, ние предоставяме пълна гама машини, резервни части и сертифициран сервиз — всичко необходимо за безпроблемна експлоатация.
              </p>
              <Button href="/za-nas" variant="secondary">
                Научете повече
                <ArrowRight size={16} />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden glass relative border-t border-gold/30">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-surface-light/50 to-dark/80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(200,168,85,0.12),transparent_60%)]" />
                <div className="relative flex items-center justify-center h-full p-8">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg gold-gradient-bg flex items-center justify-center mx-auto mb-3 shadow-[0_4px_15px_rgba(200,168,85,0.3)]">
                        <Award size={22} className="text-dark" />
                      </div>
                      <div className="text-h2 font-semibold text-white font-mono mb-1">25+</div>
                      <div className="text-text-secondary text-sm">Години опит</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mx-auto mb-3">
                        <Calendar size={22} className="text-gold" />
                      </div>
                      <div className="text-h2 font-semibold text-white font-mono mb-1">1998</div>
                      <div className="text-text-secondary text-sm">Putzmeister представител</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mx-auto mb-3">
                        <Package size={22} className="text-gold" />
                      </div>
                      <div className="text-h2 font-semibold text-white font-mono mb-1">24/7</div>
                      <div className="text-text-secondary text-sm">Авариен сервиз</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center mx-auto mb-3">
                        <Wrench size={22} className="text-gold" />
                      </div>
                      <div className="text-h2 font-semibold text-white font-mono mb-1">100%</div>
                      <div className="text-text-secondary text-sm">Оригинални части</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient-bg rounded-lg opacity-20 blur-sm" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}