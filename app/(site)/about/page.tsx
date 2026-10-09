import React from 'react';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { IMAGES } from '@/data/images';
import { Eye, Target } from 'lucide-react';
import { CallToActionBand } from '@/components/sections/CallToActionBand';

export const metadata = constructMetadata({
  title: 'About Us | Taxvi Global Rice Exporters',
  description: 'Learn about Taxvi Global, our heritage in Indian Basmati & Non-Basmati rice processing, vision, leadership, and uncompromised quality standards.'
});

export default function AboutPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header Banner */}
      <section className="bg-basil-dark text-ivory py-16 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Heritage & Trade Integrity</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory">About Taxvi Global</h1>
          <p className="text-xs md:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Connecting Himalayan rice fields to global seaports through Italian editorial precision, modern optical sortex milling, and zero-defect logistics.
          </p>
        </div>
      </section>

      {/* Story Grid */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Our Foundation</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-basil">
            A Legacy Built on Agronomy Excellence
          </h2>
          <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed">
            Founded with a singular commitment to elevating Indian agricultural exports, Taxvi Global operates state-of-the-art rice processing mills equipped with Bühler optical sortex sorters, de-stoners, and automated packaging lines.
          </p>
          <p className="text-xs md:text-sm text-charcoal/80 leading-relaxed">
            We partner directly with over 3,500 contract farmers across the GI-tagged Basmati belt of Punjab and Haryana, alongside trusted parboiled rice mills in Andhra Pradesh and Telangana.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
            <div className="p-4 bg-cream border border-sand">
              <span className="font-serif text-2xl font-bold text-gold block">18+ Years</span>
              <span className="text-charcoal/70">Trade Experience</span>
            </div>
            <div className="p-4 bg-cream border border-sand">
              <span className="font-serif text-2xl font-bold text-gold block">100% Compliance</span>
              <span className="text-charcoal/70">Zero Cargo Rejection</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-96 w-full border border-gold/40 shadow-xl overflow-hidden">
          <Image
            src={IMAGES.about.story}
            alt="Taxvi Global International Trade Meeting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-cream border-y border-sand py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-ivory p-8 border border-sand space-y-3">
            <Eye className="w-8 h-8 text-gold" />
            <h3 className="font-serif text-2xl font-bold text-basil">Our Vision</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              To be recognized as the world’s most transparent, reliable, and premium rice export house, setting international benchmarks for grain purity, custom packaging, and freight accuracy.
            </p>
          </div>
          <div className="bg-ivory p-8 border border-sand space-y-3">
            <Target className="w-8 h-8 text-gold" />
            <h3 className="font-serif text-2xl font-bold text-basil">Our Mission</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              To empower global food distributors and retail brands with direct access to authentic Indian rice varieties, supported by ISO 22000 audited quality control and prompt shipping schedules.
            </p>
          </div>
        </div>
      </section>

      <CallToActionBand />
    </div>
  );
}
