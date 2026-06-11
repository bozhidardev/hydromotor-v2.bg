import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/shared/ScrollToTop';
import { withBasePath } from '@/lib/basePath';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Хидромотор ООД — Официален представител на Putzmeister за България',
  description:
    'Бетонпомпи, тунелни машини, промишлени помпи, резервни части и сервиз в цяла България. Официален представител на Putzmeister от 1998 г.',
  keywords: [
    'бетонпомпи',
    'сервиз бетон помпи',
    'резервни части Putzmeister',
    'тунелни машини',
    'промишлени помпи',
    'строителна техника',
    'Putzmeister България',
    'хидромотор',
  ],
  openGraph: {
    title: 'Хидромотор ООД — Официален представител на Putzmeister за България',
    description:
      'Бетонпомпи, тунелни машини, промишлени помпи, резервни части и сервиз в цяла България.',
    type: 'website',
    locale: 'bg_BG',
  },
  icons: {
    icon: withBasePath('/images/favicon-32.png'),
    apple: withBasePath('/images/favicon-180.png'),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-dark text-text-primary font-body antialiased">
        <a href="#main-content" className="skip-link">
          Към основното съдържание
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
