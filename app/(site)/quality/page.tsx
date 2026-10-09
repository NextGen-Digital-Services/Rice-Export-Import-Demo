import React from 'react';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { CERTIFICATIONS } from '@/data/certifications';
import { IMAGES } from '@/data/images';
import { ShieldCheck, CheckCircle2, Award, Microchip } from 'lucide-react';
import { CallToActionBand } from '@/components/sections/CallToActionBand';

export const metadata = constructMetadata({
  title: 'Quality & Certifications | Taxvi Global',
  description: 'Explore Taxvi Global ISO 22000, HACCP, FSSAI, APEDA certifications and rigorous lab inspection processes.'
});

export default function QualityPage() {
  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <section className="bg-basil-dark text-ivory py-16 px-6 text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Zero Defect Commitment</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory">Quality & Certifications</h1>
        <p className="text-xs md:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Every container load undergoes 6-stage lab inspection verifying grain length, moisture content, pesticide absence, and non-GMO purity.
        </p>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Official Accreditations</span>
          <h2 className="font-serif text-3xl font-bold text-basil">Global Food Safety Standards</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-cream p-6 border border-sand space-y-3 hover:border-gold transition-colors">
              <div className="flex items-center justify-between">
                <ShieldCheck className="w-8 h-8 text-gold" />
                <span className="text-[10px] font-mono uppercase bg-basil text-ivory px-2 py-0.5">{cert.code}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-basil">{cert.name}</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">{cert.description}</p>
              <div className="pt-2 text-[11px] text-gold-dark font-medium">Issued by: {cert.issuedBy}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Policy */}
      <section className="bg-cream border-y border-sand py-16 px-6">
        <div className="max-w-4xl mx-auto bg-ivory p-8 border border-sand space-y-4 text-center">
          <Award className="w-10 h-10 text-gold mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-basil">Physical Sample Dispatch Policy</h3>
          <p className="text-xs text-charcoal/70 leading-relaxed max-w-xl mx-auto">
            We understand the importance of physical grain testing. We dispatch 500g sealed courier sample pouches via DHL/FedEx within 48 hours for laboratory evaluation.
          </p>
        </div>
      </section>

      <CallToActionBand />
    </div>
  );
}
