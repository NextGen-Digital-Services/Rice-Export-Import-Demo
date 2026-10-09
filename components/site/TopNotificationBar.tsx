import React from 'react';
import Link from 'next/link';
import { ShieldCheck, UserCheck } from 'lucide-react';

export const TopNotificationBar: React.FC = () => {
  return (
    <div className="bg-basil-dark text-ivory/80 text-[10px] uppercase tracking-widest py-1.5 px-6 border-b border-gold/20 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-gold">
            <ShieldCheck className="w-3 h-3" /> APEDA & ISO 22000 CERTIFIED EXPORTER
          </span>
          <span className="hidden md:inline">• Mundra & Nhava Sheva Direct Shipments</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/trust-center" className="hover:text-gold transition-colors">
            Trust Documents
          </Link>
          <Link href="/admin/login" className="hover:text-gold transition-colors flex items-center gap-1">
            <UserCheck className="w-3 h-3" /> Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
};
