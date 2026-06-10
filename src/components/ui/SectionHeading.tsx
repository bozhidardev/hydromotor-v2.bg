import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'default' | 'minor' | 'left';
  spacing?: 'default' | 'tight' | 'loose';
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = 'center',
  variant = 'default',
  spacing = 'default',
  className,
}: SectionHeadingProps) {
  const effectiveAlign = variant === 'left' ? 'left' : align;
  const showUnderline = variant === 'default';

  const spacingClasses = {
    default: 'mb-12 md:mb-16',
    tight: 'mb-8 md:mb-10',
    loose: 'mb-16 md:mb-20',
  };

  return (
    <div
      className={cn(
        spacingClasses[spacing],
        effectiveAlign === 'center' && 'text-center',
        effectiveAlign === 'left' && 'text-left',
        className
      )}
    >
      {overline && (
        <span
          className={cn(
            'block text-overline font-semibold uppercase text-gold mb-5 leading-none',
          )}
        >
          {overline}
        </span>
      )}
      <h2
        className={cn(
          'font-heading text-balance',
          variant === 'minor' ? 'text-h3 font-semibold text-text-primary' : 'text-h2 font-semibold text-text-primary',
          showUnderline && 'heading-underline',
          showUnderline && effectiveAlign === 'center' && 'heading-underline-center',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 text-body-lg text-text-secondary max-w-2xl',
            effectiveAlign === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}