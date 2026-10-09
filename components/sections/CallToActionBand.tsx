import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const CallToActionBand: React.FC = () => {
  return (
    <section className="bg-basil-dark text-ivory py-20 px-6 border-t border-gold/40 relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <span className="text-xs uppercase tracking-[0.35em] font-bold text-gold block">
          Ready to Expand Your Rice Supply Chain?
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-ivory leading-tight">
          Partner with India’s Most Dependable Export House
        </h2>
        <p className="text-xs md:text-sm text-ivory/80 max-w-2xl mx-auto leading-relaxed">
          Request sample pouches, verify lab analysis reports, or receive a customized FOB/CIF ocean freight quotation within 4 hours.
        </p>
        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <Link href="/quote">
            <Button variant="gold" size="lg" className="gap-2">
              Request Quotation <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="border-ivory/40 text-ivory hover:bg-ivory hover:text-basil">
              Contact Export Desk
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
