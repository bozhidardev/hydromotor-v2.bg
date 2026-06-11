'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { withBasePath } from '@/lib/basePath';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={withBasePath('/images/hero-concrete-pump-sharp.jpg')}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 30%' }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/50 to-dark/90" />

      <div className="relative z-10 max-w-container mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-white/60 px-4 py-1.5 rounded-full text-overline font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Официален представител на Putzmeister за България
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-semibold text-white mb-6 text-balance text-display"
        >
          <span className="gold-gradient-text">ХИДРОМОТОР</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(1.25rem,2.5vw,1.75rem)] text-white font-semibold mb-3 leading-snug"
        >
          Вашият партньор в <span className="text-gold">строителството</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8"
        >
          <p>Бетонпомпи, тунелни машини и промишлени помпи.</p>
          <p className="mt-1">Резервни части и сервиз в цяла България.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/mashini" size="lg">
            Вижте машините
            <ArrowRight size={18} />
          </Button>
          <Button href="/kontakti" variant="secondary" size="lg">
            Запазете сервиз
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-text-secondary hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-2"
        >
          <span className="text-overline">Разберете повече</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
