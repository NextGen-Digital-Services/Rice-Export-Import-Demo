import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface CustomLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const CustomLogo: React.FC<CustomLogoProps> = ({ className, variant = 'dark' }) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={cn('inline-flex items-center gap-3 group focus:outline-none', className)}>
      <div className={cn(
        'w-10 h-10 flex items-center justify-center border transition-all duration-300',
        isLight ? 'border-gold/60 bg-basil-dark text-gold' : 'border-gold bg-basil text-gold shadow-sm group-hover:bg-basil-dark'
      )}>
        {/* Monogram Rice Grain + Globe SVG */}
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 stroke-gold">
          <ellipse cx="18" cy="18" rx="8" ry="14" strokeWidth="1.5" transform="rotate(-20 18 18)" />
          <path d="M18 4V32M6 18H30" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <circle cx="18" cy="18" r="16" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={cn(
          'font-serif text-lg font-bold tracking-[0.2em] uppercase leading-none transition-colors duration-300',
          isLight ? 'text-ivory group-hover:text-gold' : 'text-basil group-hover:text-gold-dark'
        )}>
          TAXVI GLOBAL
        </span>
        <span className="text-[8px] uppercase tracking-[0.35em] text-gold font-medium mt-1">
          EXPORTS & TRADING
        </span>
      </div>
    </Link>
  );
};
