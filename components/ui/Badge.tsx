import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'basil' | 'gold' | 'terracotta' | 'outline' | 'sand';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'basil', className }) => {
  const styles = {
    basil: 'bg-basil/10 text-basil border border-basil/20',
    gold: 'bg-gold/15 text-gold-dark border border-gold/30 font-semibold',
    terracotta: 'bg-terracotta/10 text-terracotta border border-terracotta/20',
    outline: 'border border-charcoal/20 text-charcoal',
    sand: 'bg-sand text-charcoal border border-sand'
  };

  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-widest rounded-none', styles[variant], className)}>
      {children}
    </span>
  );
};
