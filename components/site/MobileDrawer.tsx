'use client';

import React from 'react';
import Link from 'next/link';
import { X, Phone, Mail, Globe } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { CustomLogo } from './CustomLogo';
import { Button } from '@/components/ui/Button';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ivory/98 backdrop-blur-lg animate-fadeIn lg:hidden">
      <div className="flex items-center justify-between p-6 border-b border-sand bg-cream">
        <CustomLogo />
        <button onClick={onClose} className="p-2 text-basil hover:text-gold transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-4">
        <nav className="flex flex-col space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-serif text-xl font-medium text-basil hover:text-gold transition-colors py-2 border-b border-sand/40"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="pt-6 border-t border-sand space-y-3">
          <Link href="/quote" onClick={onClose} className="block w-full">
            <Button variant="gold" className="w-full py-3">
              Request Export Quote
            </Button>
          </Link>
          
          <div className="pt-4 space-y-2 text-xs text-charcoal/70">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 11 4988 7700</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>trade@taxviglobal.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-gold" />
              <span>Gurugram, India • Mundra Port</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
