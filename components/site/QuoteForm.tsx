'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useData } from '@/context/DataContext';
import { Button } from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import { IncotermOption } from '@/types/enquiry';
import { QuoteStep1 } from './QuoteStep1';
import { QuoteStep2 } from './QuoteStep2';

export const QuoteForm: React.FC = () => {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';

  const { products, addEnquiry } = useData();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    productName: prefilledProduct || (products[0]?.name || '1121 Steam Basmati Rice'),
    quantityMT: 24,
    packagingPreference: '25kg PP Bag',
    incoterm: 'CIF' as IncotermOption,
    destinationPort: '',
    additionalMessage: ''
  });

  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, productName: prefilledProduct }));
    }
  }, [prefilledProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(formData);
    setSubmitted(true);
  };

  const handleNext = () => {
    if (formData.fullName && formData.companyName && formData.email && formData.country) {
      setStep(2);
    } else {
      alert('Please fill out all required fields in Step 1.');
    }
  };

  if (submitted) {
    return (
      <div className="bg-ivory border border-gold/40 p-10 text-center space-y-4 max-w-2xl mx-auto shadow-lg animate-fadeIn">
        <div className="w-16 h-16 bg-basil text-gold mx-auto flex items-center justify-center rounded-full border border-gold">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-basil">Quote Request Submitted</h3>
        <p className="text-xs text-charcoal/70 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Your export enquiry for <strong>{formData.quantityMT} MT of {formData.productName}</strong> has been logged in our global desk. Our international trade manager will contact you within 4 business hours with FOB/CIF pricing.
        </p>
        <div className="pt-4">
          <Button variant="gold" onClick={() => { setSubmitted(false); setStep(1); }}>
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-ivory border border-sand p-8 max-w-3xl mx-auto shadow-md space-y-6">
      <div className="flex items-center justify-between border-b border-sand pb-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Official Enquiry Desk</span>
          <h3 className="font-serif text-2xl font-bold text-basil">Request Commercial Export Quote</h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-basil">
          <span className={`px-2.5 py-1 ${step === 1 ? 'bg-gold text-basil' : 'bg-sand text-charcoal'}`}>1. Buyer Info</span>
          <span className={`px-2.5 py-1 ${step === 2 ? 'bg-gold text-basil' : 'bg-sand text-charcoal'}`}>2. Rice Specs</span>
        </div>
      </div>

      {step === 1 ? (
        <QuoteStep1 formData={formData} setFormData={setFormData} onNext={handleNext} />
      ) : (
        <QuoteStep2 formData={formData} setFormData={setFormData} products={products} onBack={() => setStep(1)} />
      )}
    </form>
  );
};
