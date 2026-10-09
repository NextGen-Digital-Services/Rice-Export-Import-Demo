import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider text-xs rounded-none';
    
    const variants = {
      primary: 'bg-basil text-ivory hover:bg-basil-dark shadow-md border border-basil',
      gold: 'bg-gold text-basil-dark hover:bg-gold-light hover:text-basil font-semibold shadow-md border border-gold',
      secondary: 'bg-cream text-basil hover:bg-sand border border-sand',
      outline: 'bg-transparent text-basil border border-basil hover:bg-basil hover:text-ivory',
      ghost: 'bg-transparent text-charcoal hover:bg-cream/60 hover:text-basil',
      danger: 'bg-terracotta text-white hover:bg-red-700'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-[11px]',
      md: 'px-5 py-2.5 text-xs',
      lg: 'px-7 py-3.5 text-xs tracking-widest'
    };

    return (
      <button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
