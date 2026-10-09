import React from 'react';
import { TRUST_STATS } from '@/lib/constants';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-cream border-y border-sand py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {TRUST_STATS.map((stat, i) => (
          <div key={i} className="text-center space-y-1">
            <span className="font-serif text-3xl md:text-4xl font-bold text-basil">
              {stat.value}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold block">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
