import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <div
      className={cn(
        'bg-ivory border border-sand p-6 shadow-sm transition-all duration-300 relative overflow-hidden rounded-none',
        hoverEffect && 'hover:border-gold/50 hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};
