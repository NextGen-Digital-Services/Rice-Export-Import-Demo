'use client';

import React, { useState } from 'react';
import { QuoteEnquiry, EnquiryStatus } from '@/types/enquiry';
import { X, Mail, Phone, MapPin, Package, Calendar, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { formatDate } from '@/lib/utils';

interface EnquiryDrawerProps {
  enquiry: QuoteEnquiry | null;
  onClose: () => void;
  onStatusChange: (id: string, status: EnquiryStatus, notes?: string) => void;
}

export const EnquiryDrawer: React.FC<EnquiryDrawerProps> = ({ enquiry, onClose, onStatusChange }) => {
  if (!enquiry) return null;

  const [status, setStatus] = useState<EnquiryStatus>(enquiry.status);
  const [notes, setNotes] = useState(enquiry.notes || '');

  const handleSave = () => {
    onStatusChange(enquiry.id, status, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-charcoal/50 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-lg bg-ivory h-full shadow-2xl border-l border-gold/40 flex flex-col justify-between overflow-y-auto p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between border-b border-sand pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-gold">Enquiry ID: {enquiry.id}</span>
              <h3 className="font-serif text-2xl font-bold text-basil">{enquiry.fullName}</h3>
              <p className="text-xs text-charcoal/60">{enquiry.companyName} • {enquiry.country}</p>
            </div>
            <button onClick={onClose} className="p-1 text-charcoal/60 hover:text-basil">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4 text-xs">
            <div className="bg-cream p-4 border border-sand space-y-2">
              <div className="flex items-center gap-2 text-basil font-bold">
                <Package className="w-4 h-4 text-gold" />
                <span>{enquiry.productName} ({enquiry.quantityMT} MT)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-charcoal/80 pt-1">
                <div><span>Incoterm:</span> <strong>{enquiry.incoterm}</strong></div>
                <div><span>Packaging:</span> <strong>{enquiry.packagingPreference}</strong></div>
                <div><span>Destination Port:</span> <strong>{enquiry.destinationPort}</strong></div>
                <div><span>Submitted:</span> <strong>{formatDate(enquiry.createdAt)}</strong></div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-charcoal/60 uppercase text-[10px]">Contact Details</span>
              <div className="p-3 bg-ivory border border-sand space-y-1 text-charcoal/80">
                <div className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold" /> {enquiry.email}</div>
                <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-gold" /> {enquiry.phone}</div>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-charcoal/60 uppercase text-[10px]">Buyer Message</span>
              <p className="p-3 bg-cream border border-sand italic text-charcoal/80 leading-relaxed">
                "{enquiry.additionalMessage || 'No extra message provided.'}"
              </p>
            </div>

            {/* Status & Internal Notes Form */}
            <div className="space-y-3 pt-2 border-t border-sand">
              <Select
                label="Update Status"
                value={status}
                onChange={(e) => setStatus(e.target.value as EnquiryStatus)}
                options={[
                  { label: 'New', value: 'New' },
                  { label: 'Contacted', value: 'Contacted' },
                  { label: 'Quoted', value: 'Quoted' },
                  { label: 'Won', value: 'Won' },
                  { label: 'Lost', value: 'Lost' }
                ]}
              />
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
                  Internal Trade Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Record quote pricing sent, L/C conditions, or follow-up notes..."
                  className="w-full px-3 py-2 bg-ivory border border-sand text-xs focus:border-gold rounded-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-sand">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="gold" onClick={handleSave}>
            Save Enquiry Updates
          </Button>
        </div>
      </div>
    </div>
  );
};
