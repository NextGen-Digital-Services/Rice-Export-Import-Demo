import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/80 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2.5 bg-ivory border border-sand text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200 rounded-none placeholder:text-charcoal/40',
            error && 'border-terracotta focus:border-terracotta focus:ring-terracotta',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-[11px] text-terracotta font-medium">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
