'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onChange: (tab: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, className }) => {
  return (
    <div className={cn('flex flex-wrap gap-2 border-b border-sand pb-1', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={cn(
              'px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 border-b-2 cursor-pointer',
              isActive
                ? 'border-gold text-basil font-bold'
                : 'border-transparent text-charcoal-muted hover:text-basil hover:border-gold/40'
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
