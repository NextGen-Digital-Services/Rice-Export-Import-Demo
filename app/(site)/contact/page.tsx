import React from 'react';
import { constructMetadata } from '@/lib/seo';
import { INITIAL_SITE_SETTINGS } from '@/data/site-settings';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = constructMetadata({
  title: 'Contact Us | Taxvi Global Rice Exporters',
  description: 'Get in touch with Taxvi Global commercial export desk, headquarters in Gurugram, India, and Mundra port office.'
});

export default function ContactPage() {
  return (
    <div className="space-y-12 py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Get in Touch</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">Contact Export Headquarters</h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Our global trade desk is available to assist international buyers across all time zones.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-cream p-6 border border-sand space-y-4">
            <h3 className="font-serif text-xl font-bold text-basil border-b border-sand pb-3">Corporate Headquarters</h3>
            <div className="space-y-3 text-xs text-charcoal/80 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{INITIAL_SITE_SETTINGS.headquartersAddress}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>{INITIAL_SITE_SETTINGS.contactPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{INITIAL_SITE_SETTINGS.contactEmail}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Mon - Sat: 09:00 - 19:00 IST (UTC +5:30)</span>
              </div>
            </div>
          </div>

          <div className="bg-basil text-ivory p-6 border border-gold/40 space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Instant WhatsApp Support</span>
            <h4 className="font-serif text-lg font-bold">Direct WhatsApp Export Desk</h4>
            <p className="text-xs text-ivory/80 leading-relaxed">
              Connect directly with our senior trade manager on WhatsApp for fast sample requests and container pricing.
            </p>
            <a
              href={`https://wa.me/${INITIAL_SITE_SETTINGS.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-1"
            >
              <Button variant="gold" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" /> Start WhatsApp Chat
              </Button>
            </a>
          </div>
        </div>

        {/* Embedded Map Representation Block */}
        <div className="lg:col-span-7 bg-cream border border-sand p-6 flex flex-col justify-between space-y-4 min-h-[380px]">
          <div className="space-y-2">
            <span className="text-[10px] uppercase font-bold text-gold tracking-widest">Global Logistics Port Desk</span>
            <h3 className="font-serif text-2xl font-bold text-basil">Mundra Port & Nhava Sheva Clearance</h3>
            <p className="text-xs text-charcoal/70 leading-relaxed">
              Our port office in Mundra (Gujarat) ensures rapid container stuffing, custom clearance, phytosanitary inspection, and Bill of Lading issuance.
            </p>
          </div>
          <div className="bg-ivory border border-sand p-6 text-center space-y-2">
            <MapPin className="w-8 h-8 text-gold mx-auto" />
            <h4 className="font-serif text-lg font-bold text-basil">Mundra Port Container Terminal</h4>
            <span className="text-xs text-charcoal/60 block">INMUN Seaport Zone • Gujarat 370421, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
