'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Filter } from 'lucide-react';
import { MACHINES, MACHINE_CATEGORIES } from '@/data/machines';

export default function MachinesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredMachines =
    activeCategory === 'all'
      ? MACHINES
      : MACHINES.filter((m) => m.category === activeCategory);

  return (
    <div className="concrete-section pt-32 pb-20 md:pb-28">
      <div className="max-w-container mx-auto container-padding">
        <Link
          href="/"
          className="inline-flex items-center min-h-[44px] gap-2 text-gold hover:text-gold-light transition-colors mb-8 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-1"
        >
          <ArrowLeft size={16} />
          Начало
        </Link>

        <div className="mb-14 border-l-4 border-gold pl-6 md:mb-16">
          <span className="inline-block text-overline font-semibold uppercase text-gold mb-5 leading-none">
            Машини
          </span>
          <h1 className="font-heading text-h1 font-extrabold uppercase text-ink mb-6">
            Автобетонпомпи и <span className="gold-gradient-text">строителна техника</span>
          </h1>
          <p className="text-ink/65 text-body-lg max-w-2xl">
            Официален представител на Putzmeister и SANY за България. Пълна гама машини за всяка
            строителна нужда.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          <Filter size={16} className="text-gold shrink-0" />
          {MACHINE_CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              aria-pressed={activeCategory === cat.value}
              className={`min-h-[44px] inline-flex items-center px-4 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                activeCategory === cat.value
                  ? 'bg-ink text-white'
                  : 'bg-white border border-black/15 text-ink/65 hover:text-gold hover:border-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMachines.map((machine) => (
            <Link
              key={machine.slug}
              href={`/mashini/${machine.slug}`}
              className="group block overflow-hidden border border-black/15 bg-white transition duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_42px_rgba(16,18,20,0.12)]"
            >
              <div className="aspect-[16/10] bg-[#d8d5ce] relative overflow-hidden">
                <Image
                  src={machine.image}
                  alt={`${machine.brand} ${machine.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                      machine.brand === 'Putzmeister'
                        ? 'gold-gradient-bg text-dark'
                        : 'bg-ink text-white border border-white/20'
                    }`}
                  >
                    {machine.brand}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading text-xl font-bold uppercase text-ink group-hover:text-gold transition-colors duration-200 mb-2">
                  {machine.name}
                </h3>
                <p className="text-ink/65 text-sm line-clamp-2 mb-3">
                  {machine.description}
                </p>
                <div className="flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  <span>Детайли</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <p className="text-ink/65 mb-6 max-w-xl mx-auto">
            Не сте сигурни коя машина е подходяща за вашия проект? Свържете се с нас за безплатна консултация.
          </p>
          <Link
            href="/kontakti"
            className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 font-bold uppercase tracking-[0.08em] hover:bg-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Заявете консултация
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
