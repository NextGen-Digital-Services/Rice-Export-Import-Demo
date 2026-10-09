import React from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { label: string; value: string }[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/80 mb-1.5">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-2.5 bg-ivory border border-sand text-charcoal text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors duration-200 rounded-none cursor-pointer',
            error && 'border-terracotta focus:border-terracotta',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-[11px] text-terracotta font-medium">{error}</p>}
      </div>
    );
  }
);
Select.displayName = 'Select';
