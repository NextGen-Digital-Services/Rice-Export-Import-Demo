import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Terms of Export | Taxvi Global',
  description: 'Standard international trade terms, Incoterm definitions, and quality tolerance standards.'
});

export default function TermsPage() {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto space-y-6">
      <h1 className="font-serif text-3xl font-bold text-basil">Terms of Export & Trade</h1>
      <div className="prose text-xs text-charcoal/80 space-y-4 font-sans leading-relaxed">
        <p>All contracts executed by TAXVI GLOBAL PRIVATE LIMITED are governed by international commercial trade law and standard Incoterms 2020 rules.</p>
        <h2 className="font-serif text-lg font-bold text-basil">1. Quality Inspection</h2>
        <p>Product specifications (grain length, moisture, broken percentage) are verified prior to container loading at Mundra/JNPT port by accredited independent inspection agencies (SGS / Cotecna).</p>
        <h2 className="font-serif text-lg font-bold text-basil">2. Payment Terms</h2>
        <p>Accepted payment terms include 100% Irrevocable Letter of Credit at sight issued by prime international banks or 30% T/T advance deposit.</p>
      </div>
    </div>
  );
}
