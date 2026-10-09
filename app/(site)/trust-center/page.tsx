'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { DocumentCard } from '@/components/site/DocumentCard';
import { Tabs } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search, ShieldCheck } from 'lucide-react';
import { DocumentCategory } from '@/types/document';

export default function TrustCenterPage() {
  const { documents } = useData();
  const [activeTab, setActiveTab] = useState('All Documents');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter public documents
  const publicDocs = documents.filter((d) => d.isPublic);

  const categories = [
    'All Documents',
    'Company Registration',
    'Export Licences',
    'Quality & Food Safety',
    'Financial & Banking',
    'Product Catalogues',
    'Lab Test Reports'
  ];

  const filtered = publicDocs.filter((d) => {
    const matchesCat = activeTab === 'All Documents' ? true : d.category === activeTab;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.issuedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-basil/10 border border-basil/20 text-basil text-xs font-bold uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4 text-gold" /> Verified Corporate Governance
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">
          Trust Center & Official Documents
        </h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Verify Taxvi Global APEDA registration, FSSAI central licences, ISO 22000 quality certificates, SGS lab reports, and bank solvency credentials.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="bg-cream p-6 border border-sand space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <Tabs tabs={categories} activeTab={activeTab} onChange={setActiveTab} />
          <div className="relative w-full lg:w-72">
            <Input
              placeholder="Search document title or authority..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      ) : (
        <div className="bg-cream border border-sand p-12 text-center text-charcoal/60 space-y-2">
          <p className="font-serif text-xl font-bold text-basil">No public documents found.</p>
          <p className="text-xs">Adjust your search terms or select another category tab.</p>
        </div>
      )}
    </div>
  );
}
