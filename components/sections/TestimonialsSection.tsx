import React from 'react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Taxvi Global has been our sole supplier for 1121 Basmati in Dubai for 3 years. Zero container rejection, consistent 8.35mm length, and prompt CIF quotes.",
    author: "Hamdan Al-Maktoum",
    role: "Procurement Manager",
    company: "Gulf Rice Trading LLC, UAE"
  },
  {
    quote: "Exceptional IR64 Parboiled rice quality. Ships out of Kakinada Port smoothly with accurate phytosanitary documents and clean 50kg PP bags.",
    author: "Kwame Mensah",
    role: "Supply Chain Director",
    company: "Gold Coast Commodity Imports, Ghana"
  },
  {
    quote: "Their private label packaging service for Sona Masoori in 10kg non-woven bags increased our retail sales in London by 40%. Extremely reliable export house.",
    author: "Rajesh Patel",
    role: "Managing Director",
    company: "Indo-Euro Spice House, UK"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-ivory border-b border-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Client Trust</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-basil">
            What Global Importers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-cream p-8 border border-sand space-y-4 flex flex-col justify-between hover:border-gold transition-colors">
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-gold/60" />
                <div className="flex gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-sand/60">
                <h4 className="font-serif text-sm font-bold text-basil">{t.author}</h4>
                <span className="text-[11px] text-gold-dark font-medium block">{t.role}</span>
                <span className="text-[10px] text-charcoal/60 uppercase">{t.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
