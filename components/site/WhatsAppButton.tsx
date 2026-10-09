'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { INITIAL_SITE_SETTINGS } from '@/data/site-settings';

export const WhatsAppButton: React.FC = () => {
  const cleanNumber = INITIAL_SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '');
  const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent('Hello Taxvi Global, I am interested in inquiring about rice export prices.')}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white font-medium text-xs rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current text-white" />
      <span className="hidden sm:inline font-bold uppercase tracking-wider">Export Desk</span>
    </a>
  );
};
