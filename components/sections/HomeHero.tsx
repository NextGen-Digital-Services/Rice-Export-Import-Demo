import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { IMAGES } from '@/data/images';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-basil-dark text-ivory overflow-hidden pt-24 pb-16">
      {/* Background Image Overlay with Grain */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero.main}
          alt="Premium Raw Basmati Rice Grains"
          fill
          priority
          className="object-cover opacity-20 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-basil-dark via-basil-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-grain" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-basil border border-gold/40 text-gold text-xs uppercase font-bold tracking-[0.25em]">
            <ShieldCheck className="w-4 h-4" /> Global Rice Export House • APEDA & ISO 22000
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-ivory tracking-tight leading-[1.08]">
            Pure Indian Rice. <br />
            <span className="text-gold italic font-normal">Delivered Globally.</span>
          </h1>

          <p className="text-sm md:text-base text-ivory/80 max-w-xl font-sans leading-relaxed">
            TAXVI GLOBAL processes and exports authentic 1121 Basmati, 1509 Basmati, IR64 Parboiled, and Sona Masoori varieties from India to over 45 countries with uncompromised quality assurance.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link href="/quote">
              <Button variant="gold" size="lg" className="gap-2">
                Request Export Quote <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-ivory/40 text-ivory hover:bg-ivory hover:text-basil">
                Explore Products
              </Button>
            </Link>
          </div>

          <div className="pt-6 border-t border-ivory/10 flex items-center gap-8 text-xs text-ivory/70">
            <div>
              <span className="font-serif text-xl font-bold text-gold block">8.35 mm</span>
              <span>Max Grain Length</span>
            </div>
            <div className="h-8 w-px bg-ivory/20" />
            <div>
              <span className="font-serif text-xl font-bold text-gold block">250,000 MT</span>
              <span>Annual Volume</span>
            </div>
            <div className="h-8 w-px bg-ivory/20" />
            <div>
              <span className="font-serif text-xl font-bold text-gold block">45+ Countries</span>
              <span>Seaport Destinations</span>
            </div>
          </div>
        </div>

        {/* Hero Image Showcase Grid */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative h-[480px] w-full border border-gold/40 shadow-2xl overflow-hidden group">
            <Image
              src={IMAGES.hero.paddyField}
              alt="Golden Paddy Harvest India"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-basil-dark via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-basil-dark/90 backdrop-blur-md border border-gold/40 text-ivory">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-1">
                Zero Defect Export Quality
              </span>
              <p className="text-xs text-ivory/80 leading-snug">
                Optical Sortex Cleaned • Moisture Verified &lt;12.5% • SGS Pre-Shipment Tested
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
