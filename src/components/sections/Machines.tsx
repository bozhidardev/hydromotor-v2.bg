'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { MACHINES, MACHINE_CATEGORIES } from '@/data/machines';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

function MachineCard({ machine }: { machine: typeof MACHINES[0] }) {
  return (
    <Link
      href={`/mashini/${machine.slug}`}
      className="group block glass-card rounded-lg overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="aspect-[16/10] bg-surface-light relative overflow-hidden">
        <Image
          src={machine.image}
          alt={`${machine.brand} ${machine.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={`inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide ${
              machine.brand === 'Putzmeister'
                ? 'gold-gradient-bg text-dark'
                : 'bg-surface-elevated text-text-secondary border border-text-muted/30'
            }`}
          >
            {machine.brand}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-white group-hover:text-gold transition-colors duration-300 mb-2">
          {machine.name}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-2 mb-3">
          {machine.description}
        </p>
        <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300">
          <span>Детайли</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}

export function Machines() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMachines =
    activeCategory === 'all'
      ? MACHINES
      : MACHINES.filter((m) => m.category === activeCategory);

  return (
    <section className="section-surface section-padding">
      <div className="max-w-container mx-auto container-padding">
        <ScrollReveal>
          <SectionHeading
            overline="Машини"
            title="Автобетонпомпи и строителна техника"
            description="Официален представител на Putzmeister и SANY за България. Пълна гама машини за всяка строителна нужда."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={16} className="text-gold shrink-0" />
            {MACHINE_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`min-h-[44px] inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark ${
                  activeCategory === cat.value
                    ? 'bg-gold/15 text-gold border border-gold/30'
                    : 'bg-surface-light text-text-secondary hover:text-white hover:bg-surface-elevated border border-transparent'
                }`}
                aria-pressed={activeCategory === cat.value}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMachines.map((machine, i) => (
            <ScrollReveal key={machine.slug} delay={i * 0.08}>
              <MachineCard machine={machine} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile horizontal carousel */}
        <div className="md:hidden overflow-hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 scrollbar-hide">
          {filteredMachines.map((machine) => (
            <div key={machine.slug} className="w-[85vw] max-w-[340px] shrink-0 snap-start">
              <MachineCard machine={machine} />
            </div>
          ))}
        </div>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Не сте сигурни коя машина е подходяща за вашия проект? Нашите експерти ще ви консултират.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/mashini" variant="secondary">
                Вижте всички машини
                <ArrowRight size={16} />
              </Button>
              <Button href="/kontakti" variant="secondary">
                Заявете консултация
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
