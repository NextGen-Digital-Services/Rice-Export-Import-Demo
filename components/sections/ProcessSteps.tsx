import React from 'react';
import { FileSearch, FileCheck, Ship, CheckCircle } from 'lucide-react';

const STEPS = [
  { step: '01', title: 'Requirement Enquiry', desc: 'Submit specifications, target port, and packaging preferences.' },
  { step: '02', title: 'Sample Verification', desc: 'Sealed 500g physical sample dispatch via courier for lab testing.' },
  { step: '03', title: 'Contract & LC Execution', desc: 'Finalizing FOB/CIF pricing, payment terms, and delivery timeline.' },
  { step: '04', title: 'Sortex Milling & Packing', desc: 'Fresh grain milling, optical sorting, and custom private labeling.' },
  { step: '05', title: 'Seaport Shipment', desc: 'Container loading, SGS inspection, phytosanitary clearance & dispatch.' }
];

export const ProcessSteps: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-ivory border-b border-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Seamless Execution</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-basil">
            How We Execute Export Orders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {STEPS.map((s, idx) => (
            <div key={s.step} className="bg-cream p-6 border border-sand hover:border-gold transition-all duration-300 relative space-y-3">
              <span className="font-mono text-xs font-bold text-gold">{s.step}</span>
              <h3 className="font-serif text-lg font-bold text-basil leading-snug">{s.title}</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
