import React from 'react';
import { CERTIFICATIONS } from '@/data/certifications';
import { ShieldCheck } from 'lucide-react';

export const CertificationsMarquee: React.FC = () => {
  return (
    <section className="bg-basil text-ivory py-12 px-6 border-y border-gold/30">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Accreditations</span>
          <h3 className="font-serif text-xl font-bold text-ivory">Certified for International Trade</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-basil-dark p-4 border border-gold/30 text-center space-y-1">
              <ShieldCheck className="w-5 h-5 text-gold mx-auto mb-1" />
              <span className="font-serif text-sm font-bold text-ivory block">{cert.name}</span>
              <span className="text-[10px] text-ivory/60 block">{cert.code}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
