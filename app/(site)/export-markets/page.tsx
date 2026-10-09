import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { WorldMap } from '@/components/site/WorldMap';
import { CallToActionBand } from '@/components/sections/CallToActionBand';

export const metadata = constructMetadata({
  title: 'Export Markets & Global Presence | Taxvi Global',
  description: 'Explore Taxvi Global export footprint across UAE, Saudi Arabia, Europe, West Africa, USA, and Southeast Asia.'
});

export default function ExportMarketsPage() {
  return (
    <div className="space-y-12 py-12">
      <section className="bg-basil-dark text-ivory py-16 px-6 text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">International Footprint</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory">Export Markets</h1>
        <p className="text-xs md:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Serving major seaports worldwide with direct container loading out of Mundra, JNPT, and Kakinada.
        </p>
      </section>

      <WorldMap />

      <CallToActionBand />
    </div>
  );
}
