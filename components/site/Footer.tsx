'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, ShieldCheck, Award } from 'lucide-react';
import { CustomLogo } from './CustomLogo';
import { Button } from '@/components/ui/Button';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-basil-dark text-ivory border-t border-gold/30 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ivory/10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <CustomLogo variant="light" />
          <p className="text-xs text-ivory/70 leading-relaxed max-w-sm">
            Taxvi Global is a premier international rice export-import company headquartered in India. Specializing in geographically authentic Basmati & Non-Basmati rice processing, sortex cleaning, and container shipping.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-basil border border-gold/30 text-[10px] text-gold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> APEDA RCMC Verified
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-basil border border-gold/30 text-[10px] text-gold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> ISO 22000:2018
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-widest">Products</h4>
          <ul className="space-y-2 text-xs text-ivory/80">
            <li><Link href="/products/1121-steam-basmati-rice" className="hover:text-gold transition-colors">1121 Steam Basmati</Link></li>
            <li><Link href="/products/1121-golden-sella-basmati-rice" className="hover:text-gold transition-colors">1121 Golden Sella</Link></li>
            <li><Link href="/products/1509-steam-basmati-rice" className="hover:text-gold transition-colors">1509 Steam Basmati</Link></li>
            <li><Link href="/products/ir64-parboiled-rice-5-percent" className="hover:text-gold transition-colors">IR64 Parboiled Rice</Link></li>
            <li><Link href="/products/sona-masoori-raw-rice" className="hover:text-gold transition-colors">Sona Masoori Raw</Link></li>
            <li><Link href="/products" className="hover:text-gold transition-colors text-gold underline">View All Products →</Link></li>
          </ul>
        </div>

        {/* Navigation & Trust */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-widest">Company</h4>
          <ul className="space-y-2 text-xs text-ivory/80">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/quality" className="hover:text-gold transition-colors">Quality & Lab Testing</Link></li>
            <li><Link href="/export-markets" className="hover:text-gold transition-colors">Export Markets</Link></li>
            <li><Link href="/infrastructure" className="hover:text-gold transition-colors">Infrastructure</Link></li>
            <li><Link href="/trust-center" className="hover:text-gold transition-colors">Trust Center Documents</Link></li>
            <li><Link href="/insights" className="hover:text-gold transition-colors">Trade Insights & News</Link></li>
            <li><Link href="/faq" className="hover:text-gold transition-colors">Export FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-widest">Global Desk</h4>
          <div className="space-y-2 text-xs text-ivory/80">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>Gurugram, Haryana, India • Mundra Port Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+91 11 4988 7700</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <span>trade@taxviglobal.com</span>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="pt-2 space-y-2">
            <span className="text-[10px] text-ivory/60 uppercase tracking-wider block">Subscribe to Trade Reports</span>
            <div className="flex items-center">
              <input
                type="email"
                required
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-basil border border-gold/40 text-xs text-ivory focus:outline-none focus:border-gold placeholder:text-ivory/40"
              />
              <button type="submit" className="px-3 py-2 bg-gold text-basil hover:bg-gold-light transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            {subscribed && <p className="text-[11px] text-gold font-medium">Subscribed successfully!</p>}
          </form>
        </div>
      </div>

      {/* Bottom Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-ivory/50 space-y-3 sm:space-y-0">
        <div>© 2026 TAXVI GLOBAL PRIVATE LIMITED. All rights reserved.</div>
        <div className="flex items-center space-x-6">
          <Link href="/legal/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms" className="hover:text-gold transition-colors">Terms of Export</Link>
          <Link href="/admin/login" className="hover:text-gold transition-colors">Admin Login</Link>
        </div>
      </div>
    </footer>
  );
};
