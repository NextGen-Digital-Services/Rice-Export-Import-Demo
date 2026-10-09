import React from 'react';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { IMAGES } from '@/data/images';
import { CallToActionBand } from '@/components/sections/CallToActionBand';

export const metadata = constructMetadata({
  title: 'Infrastructure & Milling Process | Taxvi Global',
  description: 'State-of-the-art Bühler sortex machines, climate-monitored storage silos, and automated packaging lines.'
});

export default function InfrastructurePage() {
  return (
    <div className="space-y-20 py-12">
      <section className="bg-basil-dark text-ivory py-16 px-6 text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Industrial Milling Power</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory">Infrastructure & Processing</h1>
        <p className="text-xs md:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Combining 500 MT per day milling capacity with high-precision optical sorters and container packing facilities.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-cream border border-sand p-6 space-y-4">
          <div className="relative h-48 w-full border border-sand">
            <Image src={IMAGES.infrastructure.silo} alt="Storage Silos" fill className="object-cover" sizes="350px" />
          </div>
          <h3 className="font-serif text-xl font-bold text-basil">Temperature Silo Storage</h3>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Capacity for storing 40,000 MT of raw paddy under controlled humidity and aeration, enabling natural 12-18 month Basmati aging.
          </p>
        </div>

        <div className="bg-cream border border-sand p-6 space-y-4">
          <div className="relative h-48 w-full border border-sand">
            <Image src={IMAGES.infrastructure.sortex} alt="Bühler Sortex" fill className="object-cover" sizes="350px" />
          </div>
          <h3 className="font-serif text-xl font-bold text-basil">Bühler Optical Sorting</h3>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            Full HD camera-driven optical sorters scan 100,000 grains per second to eject discolored, chalky, or damaged grains.
          </p>
        </div>

        <div className="bg-cream border border-sand p-6 space-y-4">
          <div className="relative h-48 w-full border border-sand">
            <Image src={IMAGES.infrastructure.warehouse} alt="Packaging Warehouse" fill className="object-cover" sizes="350px" />
          </div>
          <h3 className="font-serif text-xl font-bold text-basil">Automated OEM Packaging</h3>
          <p className="text-xs text-charcoal/70 leading-relaxed">
            High-speed bag sealing lines supporting non-woven, jute, poly, and jumbo bulk container loading under strict hygienic protocol.
          </p>
        </div>
      </section>

      <CallToActionBand />
    </div>
  );
}
