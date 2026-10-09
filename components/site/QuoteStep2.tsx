'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';
import { Product } from '@/types/product';
import { IncotermOption } from '@/types/enquiry';

interface QuoteStep2Props {
  formData: {
    productName: string;
    quantityMT: number;
    packagingPreference: string;
    incoterm: IncotermOption;
    destinationPort: string;
    additionalMessage: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  products: Product[];
  onBack: () => void;
}

export const QuoteStep2: React.FC<QuoteStep2Props> = ({ formData, setFormData, products, onBack }) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Rice Variety / Product *"
          value={formData.productName}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, productName: e.target.value }))}
          options={products.map((p) => ({ label: `${p.name} (${p.category})`, value: p.name }))}
        />
        <Input
          label="Quantity (Metric Tonnes / MT) *"
          type="number"
          min="1"
          required
          value={formData.quantityMT}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, quantityMT: Number(e.target.value) }))}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Select
          label="Packaging Style"
          value={formData.packagingPreference}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, packagingPreference: e.target.value }))}
          options={[
            { label: '25kg PP Bag', value: '25kg PP Bag' },
            { label: '50kg PP Bag', value: '50kg PP Bag' },
            { label: '10kg Non-woven Bag', value: '10kg Non-woven Bag' },
            { label: '5kg Retail Pouch', value: '5kg Retail Pouch' },
            { label: 'Private Label OEM', value: 'Private Label OEM' }
          ]}
        />
        <Select
          label="Incoterm Preference"
          value={formData.incoterm}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, incoterm: e.target.value as IncotermOption }))}
          options={[
            { label: 'CIF (Cost, Insurance & Freight)', value: 'CIF' },
            { label: 'FOB (Free on Board - Mundra)', value: 'FOB' },
            { label: 'CFR (Cost & Freight)', value: 'CFR' },
            { label: 'EXW (Ex-Works Mill)', value: 'EXW' }
          ]}
        />
        <Input
          label="Destination Port *"
          required
          placeholder="e.g. Jebel Ali Port, Dubai"
          value={formData.destinationPort}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, destinationPort: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/80 mb-1.5">
          Additional Specifications / Notes
        </label>
        <textarea
          rows={3}
          placeholder="Specify grain length requirements, lab certificate needs, or delivery timeline..."
          value={formData.additionalMessage}
          onChange={(e) => setFormData((prev: any) => ({ ...prev, additionalMessage: e.target.value }))}
          className="w-full px-4 py-2.5 bg-ivory border border-sand text-charcoal text-sm focus:outline-none focus:border-gold rounded-none placeholder:text-charcoal/40"
        />
      </div>
      <div className="flex items-center justify-between pt-2">
        <Button type="button" variant="outline" onClick={onBack}>
          ← Back to Step 1
        </Button>
        <Button type="submit" variant="gold" className="gap-2">
          <Send className="w-4 h-4" /> Submit Export Enquiry
        </Button>
      </div>
    </div>
  );
};
