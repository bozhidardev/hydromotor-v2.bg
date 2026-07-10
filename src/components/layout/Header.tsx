'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { CONTACT, NAV_LINKS } from '@/data/content';
import { withBasePath } from '@/lib/basePath';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const emergencyPhone = CONTACT.servicePhones[0];

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-all duration-200',
          isScrolled
            ? 'border-black/10 bg-concrete/95 shadow-[0_8px_24px_rgba(16,18,20,0.08)] backdrop-blur-md'
            : 'border-black/10 bg-concrete/95'
        )}
      >
        <div className="mx-auto flex h-[78px] max-w-container items-center justify-between container-padding">
          <Link
            href="/"
            className="group flex min-h-[44px] items-center gap-3 rounded-sm text-ink"
            aria-label="Хидромотор — начална страница"
          >
            <Image
              src={withBasePath('/images/logo_Hydromotor.png')}
              alt=""
              width={42}
              height={42}
              className="h-10 w-10 object-contain grayscale transition group-hover:grayscale-0"
            />
            <div className="leading-none">
              <span className="block font-heading text-[1.45rem] font-extrabold tracking-[-0.03em]">ХИДРОМОТОР</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-steel">
                Putzmeister България
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Основна навигация">
            {NAV_LINKS.slice(1).map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative py-2 text-sm font-semibold text-ink transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:bg-gold after:transition-transform',
                    active ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={`tel:${emergencyPhone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-gold"
            >
              <Phone size={16} className="text-gold" />
              <span><span className="text-gold">24/7</span> · {emergencyPhone}</span>
            </a>
            <Link
              href="/kontakti"
              className="inline-flex min-h-[44px] items-center bg-ink px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-gold"
            >
              Запитване
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen((open) => !open)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center text-ink lg:hidden"
            aria-label={isMobileOpen ? 'Затвори меню' : 'Отвори меню'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Мобилна навигация"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-concrete pt-[100px] text-ink lg:hidden"
          >
            <div className="flex min-h-full flex-col px-6 pb-[calc(2rem+env(safe-area-inset-bottom))]">
              <nav className="divide-y divide-black/10 border-y border-black/10">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      'flex min-h-[62px] items-center justify-between font-heading text-2xl font-bold',
                      pathname === link.href && 'text-gold'
                    )}
                  >
                    {link.label}
                    <span className="text-sm font-normal text-steel">↗</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-auto border-l-4 border-gold bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-steel">Авариен сервиз 24/7</p>
                <a href={`tel:${emergencyPhone.replace(/\s/g, '')}`} className="mt-2 flex items-center gap-3 font-heading text-3xl font-bold">
                  <Phone size={22} className="text-gold" />
                  {emergencyPhone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
