import React from 'react';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy | Taxvi Global',
  description: 'TAXVI GLOBAL privacy policy regarding trade data protection and commercial communications.'
});

export default function PrivacyPage() {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto space-y-6">
      <h1 className="font-serif text-3xl font-bold text-basil">Privacy Policy</h1>
      <div className="prose text-xs text-charcoal/80 space-y-4 font-sans leading-relaxed">
        <p>TAXVI GLOBAL PRIVATE LIMITED is committed to safeguarding corporate and individual trade information submitted through our online export portal.</p>
        <h2 className="font-serif text-lg font-bold text-basil">1. Information Collection</h2>
        <p>We collect commercial buyer details (company name, email, port of destination, phone number) exclusively for issuing formal price quotes and handling trade contracts.</p>
        <h2 className="font-serif text-lg font-bold text-basil">2. Data Confidentiality</h2>
        <p>Your commercial data will never be sold, leased, or disclosed to third parties except for official customs, phytosanitary clearance authorities, and shipping lines essential for container delivery.</p>
      </div>
    </div>
  );
}
