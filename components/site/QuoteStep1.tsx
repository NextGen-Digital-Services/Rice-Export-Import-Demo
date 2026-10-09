'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface QuoteStep1Props {
  formData: {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    country: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}

export const QuoteStep1: React.FC<QuoteStep1Props> = ({ formData, setFormData, onNext }) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name *"
          required
          placeholder="e.g. Tariq Al-Mansoor"
          value={formData.fullName}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, fullName: e.target.value }))}
        />
        <Input
          label="Company Name *"
          required
          placeholder="e.g. Al-Mansoor Trading LLC"
          value={formData.companyName}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, companyName: e.target.value }))}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Business Email *"
          type="email"
          required
          placeholder="trade@company.com"
          value={formData.email}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, email: e.target.value }))}
        />
        <Input
          label="Phone / WhatsApp *"
          required
          placeholder="+971 50 123 4567"
          value={formData.phone}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, phone: e.target.value }))}
        />
      </div>
      <Input
        label="Destination Country *"
        required
        placeholder="e.g. United Arab Emirates"
        value={formData.country}
        onChange={(e) => setFormData((prev: any) => ({ ...prev, country: e.target.value }))}
      />
      <div className="flex justify-end pt-2">
        <Button type="button" variant="gold" onClick={onNext} className="gap-2">
          Next: Product Specifications <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
