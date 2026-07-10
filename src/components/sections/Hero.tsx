'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTACT } from '@/data/content';
import { withBasePath } from '@/lib/basePath';

export function Hero() {
  const servicePhone = CONTACT.servicePhones[0];
  const reveal = { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-concrete pt-[78px] lg:min-h-[820px]">
      <div className="absolute inset-x-0 bottom-0 top-[78px] lg:grid lg:grid-cols-[48%_52%]">
        <div className="concrete-section hidden lg:block" />
        <div className="relative h-full">
          <Image
            src={withBasePath('/images/hero-concrete-pump-sharp.jpg')}
            alt="Автобетонпомпа Putzmeister на строителен обект"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: '57% center' }}
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/95 via-[#101214]/60 to-[#101214]/5 lg:hidden" />
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-concrete to-transparent lg:block" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[682px] max-w-container items-center container-padding lg:min-h-[742px]">
        <div className="w-full max-w-[720px] py-16 lg:w-[47%] lg:max-w-[630px] lg:pr-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={reveal}>
            <span className="mb-7 inline-flex items-center gap-3 border-l-[3px] border-gold bg-white/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-ink shadow-sm lg:bg-white/70">
              Официален представител на Putzmeister за България
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.08 }}
            className="max-w-[650px] font-heading text-[clamp(3rem,7vw,6.8rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.045em] text-white lg:text-ink"
          >
            Техника, която движи <span className="text-gold">строителството.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.16 }}
            className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/80 lg:text-steel"
          >
            Бетонпомпи, тунелни машини и промишлени помпи. Оригинални резервни части и сервиз в цяла България.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...reveal, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/mashini" size="lg">
              Разгледайте машините <ArrowRight size={18} />
            </Button>
            <Button href="/serviz" variant="secondary" size="lg">
              Заявете сервиз
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-9 grid max-w-xl gap-4 border-t border-white/20 pt-6 text-sm font-semibold text-white/80 sm:grid-cols-2 lg:border-black/15 lg:text-ink/70"
          >
            <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-gold" /> Над 25 години опит</span>
            <a href={`tel:${servicePhone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition hover:text-gold">
              <Phone size={17} className="text-gold" /> 24/7 сервиз · {servicePhone}
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-20 hidden bg-gold px-8 py-5 text-white lg:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">Национално покритие</p>
        <p className="mt-1 font-heading text-xl font-bold uppercase">Сервиз на място в цяла България</p>
      </div>
    </section>
  );
}
