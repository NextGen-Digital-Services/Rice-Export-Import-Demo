'use client';

import React, { useState } from 'react';
import { FAQ_LIST } from '@/data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  return (
    <div className="space-y-12 py-12 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Frequently Asked Questions</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">Export Desk FAQ</h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Got questions about Minimum Order Quantities (MOQ), sample dispatch, container ocean freight, or Letter of Credit payment terms?
        </p>
      </div>

      <div className="space-y-4">
        {FAQ_LIST.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div key={faq.id} className="border border-sand bg-cream transition-colors">
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full text-left p-5 flex items-center justify-between font-serif text-lg font-bold text-basil cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs text-charcoal/80 leading-relaxed border-t border-sand/40 font-sans">
                  <p className="pt-3">{faq.answer}</p>
                  <span className="text-[10px] text-gold uppercase font-bold tracking-wider block mt-3">Category: {faq.category}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
