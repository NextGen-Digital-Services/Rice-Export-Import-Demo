export interface FAQItem {
  id: string;
  category: 'Ordering & Minimums' | 'Shipping & Incoterms' | 'Quality & Samples' | 'Payment & Documentation';
  question: string;
  answer: string;
}

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Ordering & Minimums',
    question: 'What is the Minimum Order Quantity (MOQ) for international shipments?',
    answer: 'Our standard Minimum Order Quantity is 1 FCL (Full Container Load) which holds approximately 24 Metric Tonnes (MT) of Basmati rice or 25-26 MT of Non-Basmati rice. For mixed container loads or trial orders, please contact our export desk.'
  },
  {
    id: 'faq-2',
    category: 'Quality & Samples',
    question: 'How do you guarantee grain length and purity before shipment?',
    answer: 'Every shipment undergoes multi-stage optical sortex cleaning, lab moisture analysis, and 100% grain length verification. We also provide third-party pre-shipment inspection certificates from SGS, Cotecna, or Intertek upon request.'
  },
  {
    id: 'faq-3',
    category: 'Quality & Samples',
    question: 'Can I request physical samples before issuing a purchase order?',
    answer: 'Yes! We dispatch 500g to 1kg sealed sample pouches via DHL/FedEx courier within 48 hours of enquiry. Courier charges are refundable upon final contract placement.'
  },
  {
    id: 'faq-4',
    category: 'Payment & Documentation',
    question: 'What are your accepted international payment terms?',
    answer: 'We accept 100% Irrevocable Letter of Credit (L/C at Sight) issued by top-tier global banks, or T/T (Telegraphic Transfer with 30% advance deposit and 70% against scan of Original Bill of Lading).'
  },
  {
    id: 'faq-5',
    category: 'Shipping & Incoterms',
    question: 'Which ports do you load from, and what Incoterms do you support?',
    answer: 'We load primarily from Mundra Port (Gujarat), Nhava Sheva / JNPT (Mumbai), and Kakinada / Vizag Ports (Andhra Pradesh). We regularly trade on FOB, CFR, and CIF terms.'
  },
  {
    id: 'faq-6',
    category: 'Ordering & Minimums',
    question: 'Do you offer Private Label branding and customized packaging?',
    answer: 'Absolutely. We specialize in OEM / Private Label packaging ranging from 1kg retail stand-up pouches to 5kg, 10kg non-woven bags, and 25kg/50kg heavy-duty PP sacks with full-color gravure printing.'
  }
];
