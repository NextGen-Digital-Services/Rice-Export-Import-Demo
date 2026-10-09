import React, { Suspense } from 'react';
import { constructMetadata } from '@/lib/seo';
import { QuoteForm } from '@/components/site/QuoteForm';

export const metadata = constructMetadata({
  title: 'Request a Quote | Taxvi Global Export Desk',
  description: 'Submit your Basmati or Non-Basmati rice import query to receive FOB or CIF ocean freight quotations.'
});

export default function QuotePage() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Direct Export Pricing</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">Request Commercial Quotation</h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Fill out the multi-step enquiry form below to receive official FOB / CIF pricing, grain length specifications, and container loading schedules.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-12">Loading Quote Form...</div>}>
        <QuoteForm />
      </Suspense>
    </div>
  );
}
