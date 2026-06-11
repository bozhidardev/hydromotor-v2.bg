'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CONTACT } from '@/data/content';
import { withBasePath } from '@/lib/basePath';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-dark/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-container mx-auto container-padding flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-lg">
            <Image src={withBasePath('/images/logo_Hydromotor.png')} alt="Хидромотор ООД" width={40} height={40} className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="text-lg font-bold text-white tracking-wide font-heading">ХИДРОМОТОР</span>
              <span className="block text-xs text-gold text-overline">
                Putzmeister България
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-1",
                  isActive ? "text-white" : "text-text-secondary hover:text-white"
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] gold-gradient-bg transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            );
          })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-2"
            >
              <Phone size={16} />
              <span>{CONTACT.servicePhones[0]}</span>
            </a>
            <Button href="/kontakti" size="md">
              Контакти
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-white min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md"
            aria-label={isMobileOpen ? 'Затвори меню' : 'Отвори меню'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-lg lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Мобилна навигация"
            id="mobile-menu"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "text-2xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-4 py-2 min-h-[44px] inline-flex items-center",
                        pathname === link.href ? "text-gold" : "text-white hover:text-gold"
                      )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-4"
              >
                <Button href="/kontakti" size="lg" onClick={() => setIsMobileOpen(false)}>
                  Свържете се с нас
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (NAV_LINKS.length + 1) * 0.1 }}
                className="mt-8 text-center"
              >
                <a
                  href={`tel:${CONTACT.servicePhones[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-gold text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-4 py-2"
                >
                  <Phone size={20} />
                  {CONTACT.servicePhones[0]}
                </a>
                <p className="mt-2 text-text-muted text-sm">24/7 Авариен сервиз</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
