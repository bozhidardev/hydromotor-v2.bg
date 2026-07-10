import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { MACHINES } from '@/data/machines';
import { Button } from '@/components/ui/Button';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return MACHINES.map((machine) => ({ slug: machine.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MachineDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const machine = MACHINES.find((m) => m.slug === slug);

  if (!machine) {
    notFound();
  }

  const nextMachine = MACHINES[MACHINES.indexOf(machine) + 1];
  const prevMachine = MACHINES[MACHINES.indexOf(machine) - 1];

  return (
    <div className="technical-grid pt-32 pb-20 md:pb-28">
      <div className="max-w-container mx-auto container-padding">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm list-none flex-wrap">
            <li>
              <Link href="/" className="inline-flex items-center min-h-[44px] text-text-muted hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5">
                Начало
              </Link>
            </li>
            <li className="text-text-muted">/</li>
            <li>
              <Link href="/mashini" className="inline-flex items-center min-h-[44px] text-text-muted hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-1 py-0.5">
                Машини
              </Link>
            </li>
            <li className="text-text-muted">/</li>
            <li className="text-gold">{machine.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[4/3] glass-card rounded-lg overflow-hidden relative">
              <Image
                src={machine.image}
                alt={`${machine.brand} ${machine.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span
                  className={`inline-block px-3 py-1.5 rounded text-sm font-bold uppercase tracking-wide ${
                    machine.brand === 'Putzmeister'
                      ? 'gold-gradient-bg text-dark'
                      : 'bg-surface-elevated text-text-secondary border border-text-muted/30'
                  }`}
                >
                  {machine.brand}
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-overline font-semibold uppercase text-gold mb-3">
              {machine.category}
            </span>
            <h1 className="font-heading text-h2 font-extrabold uppercase text-white mb-6">
              {machine.brand}{' '}
              <span className="gold-gradient-text">{machine.name}</span>
            </h1>
            <p className="text-text-secondary text-body-lg leading-relaxed mb-8">
              {machine.description}
            </p>

            <div className="mb-8">
              <h2 className="font-heading text-lg font-semibold text-white mb-4">Характеристики</h2>
              <ul className="space-y-2">
                {machine.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full gold-gradient-bg mt-2 shrink-0" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/kontakti" size="lg">
              Запазете консултация
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="font-heading text-h3 font-semibold text-white mb-6">Технически спецификации</h2>
          <div className="glass-card rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {Object.entries(machine.specs).map(([key, value], i) => (
                    <tr
                      key={key}
                      className={i % 2 === 0 ? 'bg-surface-light/50' : 'bg-transparent'}
                    >
                      <th scope="row" className="px-3 md:px-6 py-3 text-text-secondary text-sm font-medium text-left">{key}</th>
                      <td className="px-3 md:px-6 py-3 text-white text-sm font-mono">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Имате въпроси относно {machine.name}? Нашите специалисти са на разположение.
          </p>
          <Button href="/kontakti" size="lg">
            Запазете консултация
            <ArrowRight size={18} />
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-surface-border pt-8">
          {prevMachine ? (
              <Link
                href={`/mashini/${prevMachine.slug}`}
                className="inline-flex items-center min-h-[44px] gap-2 text-text-secondary hover:text-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-1"
              >
              <ArrowLeft size={16} />
              {prevMachine.name}
            </Link>
          ) : (
            <div />
          )}
          {nextMachine ? (
              <Link
                href={`/mashini/${nextMachine.slug}`}
                className="inline-flex items-center min-h-[44px] gap-2 text-text-secondary hover:text-gold transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark rounded-md px-2 py-1"
              >
              {nextMachine.name}
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
