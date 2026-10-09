'use client';

import React, { useState } from 'react';
import { INITIAL_MARKETS } from '@/data/markets';
import { Globe, Anchor, Package, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const WorldMap: React.FC = () => {
  const regions = ['All Regions', 'Middle East', 'Africa', 'Europe', 'North America', 'Southeast Asia'];
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredMarkets = selectedRegion === 'All Regions'
    ? INITIAL_MARKETS
    : INITIAL_MARKETS.filter((m) => m.region === selectedRegion);

  return (
    <div className="w-full bg-ivory py-20 px-6 border-y border-sand relative">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Global Presence</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-basil">
            Export Destinations & Trade Routes
          </h2>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Shipping over 250,000 Metric Tonnes of rice annually to 45+ countries across 5 continents via direct ocean freight routes.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 text-xs uppercase font-medium tracking-wider transition-all duration-300 cursor-pointer border ${
                selectedRegion === reg
                  ? 'bg-basil text-ivory border-basil shadow-md font-bold'
                  : 'bg-cream text-charcoal border-sand hover:border-gold'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMarkets.map((market) => (
            <div key={market.id} className="bg-cream p-6 border border-sand hover:border-gold/60 transition-all duration-300 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{market.flagEmoji}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-basil">{market.country}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{market.region}</span>
                  </div>
                </div>
                <Badge variant="basil">{market.annualVolumeMT}</Badge>
              </div>

              <div className="space-y-2 text-xs border-t border-sand/60 pt-3">
                <div className="flex items-start gap-2 text-charcoal/80">
                  <Anchor className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Ports:</strong> {market.majorPorts.join(', ')}</span>
                </div>
                <div className="flex items-start gap-2 text-charcoal/80">
                  <Package className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span><strong>Popular Rice:</strong> {market.popularVarieties.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-basil font-medium pt-1 border-t border-sand/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{market.status} • Direct Container Service</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
