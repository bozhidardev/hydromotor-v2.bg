import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { COMPANY, NAV_LINKS, CONTACT, SERVICES } from '@/data/content';
import { withBasePath } from '@/lib/basePath';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-base border-t border-gold/20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div className="max-w-container mx-auto container-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src={withBasePath('/images/logo_Hydromotor.png')} alt="Хидромотор ООД" width={40} height={40} className="h-10 w-auto" />
              <div>
                <span className="text-lg font-bold text-white tracking-wide font-heading">ХИДРОМОТОР</span>
                <span className="block text-xs text-gold text-overline">
                  Putzmeister България
                </span>
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
              {COMPANY.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-overline text-white mb-5">
              Навигация
            </h3>
            <ul className="space-y-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center text-text-secondary text-sm hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-overline text-white mb-5">
              Услуги
            </h3>
            <ul className="space-y-0">
              {SERVICES.map((service) => (
                <li key={service.title}>
                  <Link
                    href="/serviz"
                    className="inline-flex items-center text-text-secondary text-sm hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-1.5"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-overline text-white mb-5">
              Контакти
            </h3>
            <ul className="space-y-0.5">
              <li className="flex items-start gap-2.5 py-1">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-text-secondary text-sm">{CONTACT.address}</span>
              </li>
              {CONTACT.phones.slice(0, 2).map((phone) => (
                <li key={phone} className="flex items-center gap-2.5 py-1">
                  <Phone size={16} className="text-gold shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-text-secondary text-sm hover:text-gold transition-colors font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {CONTACT.emails.slice(0, 1).map((email) => (
                <li key={email} className="flex items-center gap-2.5 py-1">
                  <Mail size={16} className="text-gold shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-text-secondary text-sm hover:text-gold transition-colors font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
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
        </div>

        <div className="mt-12 pt-6 border-t border-surface-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold text-white">Putzmeister</span>
              <span className="text-dark-50">|</span>
              <span className="font-semibold text-white">SANY</span>
              <span className="text-dark-50">|</span>
              <span className="text-text-muted">Официален представител за България</span>
            </div>
            <p className="text-text-muted text-sm">
              &copy; {currentYear} {COMPANY.fullName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
