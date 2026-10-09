'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/data/images';
import { ChevronRight, Shield, Award, Sparkles } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Sustainably Farmed Paddy',
    subtitle: 'Fertile Himalayan Valleys',
    desc: 'Contract farming in Punjab, Haryana, and Andhra Pradesh using non-GMO seeds and pristine river irrigation.',
    img: IMAGES.journey.farm
  },
  {
    num: '02',
    title: 'Advanced Sortex Milling',
    subtitle: 'Bühler Optical Sorting',
    desc: 'Precision de-husking, polishing, and multi-stage optical sortex cleaning to eliminate discolored or broken grains.',
    img: IMAGES.journey.milling
  },
  {
    num: '03',
    title: 'Quality & Moisture Lab',
    subtitle: '100% Parameter Verification',
    desc: 'In-house ISO lab moisture analysis, chemical residue screening, and grain length measurement under micrometer gauges.',
    img: IMAGES.journey.quality
  },
  {
    num: '04',
    title: 'Hygienic Export Packaging',
    subtitle: 'OEM & Private Labeling',
    desc: 'Vacuum sealing, non-woven bags, and heavy-duty PP bags printed with multi-lingual branding and barcode compliance.',
    img: IMAGES.journey.packaging
  },
  {
    num: '05',
    title: 'Seaport Container Logistics',
    subtitle: 'Mundra & JNPT Direct Loading',
    desc: 'Fumigated container sealing, customs shipping documentation, phytosanitary checks, and ocean vessel dispatch.',
    img: IMAGES.journey.logistics
  }
];

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];

  return (
    <div className="w-full bg-basil-dark text-ivory py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gold/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> From Harvest to Port
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 text-ivory">
              The Journey of Grain
            </h2>
          </div>
          <p className="text-xs text-ivory/70 max-w-md leading-relaxed">
            Every grain exported by Taxvi Global follows a strictly audited 5-stage quality chain ensuring uncompromised purity and zero container rejection.
          </p>
        </div>

        {/* Horizontal Navigation Pills */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`p-4 border text-left transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-basil border-gold text-gold shadow-lg translate-y-[-2px]'
                    : 'bg-basil-dark/60 border-ivory/10 text-ivory/60 hover:border-gold/40 hover:text-ivory'
                }`}
              >
                <span className="text-xs font-mono font-bold text-gold block">{step.num}</span>
                <span className="font-serif text-sm font-bold block mt-1 line-clamp-1">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-basil p-8 border border-gold/30">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-basil-dark text-gold border border-gold/30 text-xs uppercase font-bold tracking-widest">
              Stage {current.num} • {current.subtitle}
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-ivory">
              {current.title}
            </h3>
            <p className="text-sm text-ivory/80 leading-relaxed font-sans">
              {current.desc}
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs text-gold">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> ISO Audited</span>
              <span className="flex items-center gap-1.5"><Award className="w-4 h-4" /> APEDA Certified</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-72 md:h-80 w-full border border-gold/40 overflow-hidden">
            <Image
              src={current.img}
              alt={current.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
