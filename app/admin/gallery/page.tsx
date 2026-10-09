'use client';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { Plus, Image as ImageIcon } from 'lucide-react';

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Facility Gallery Manager</h1>
          <p className="text-xs text-charcoal/60">Upload and categorize photos of paddy farms, sortex mills, and shipments.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Multi-image upload ready')}>
          <Plus className="w-4 h-4" /> Upload Facility Photos
        </Button>
      </div>
      <div className="bg-ivory border border-sand p-8 text-center space-y-3">
        <ImageIcon className="w-10 h-10 text-gold mx-auto" />
        <h3 className="font-serif text-xl font-bold text-basil">Media Asset Library</h3>
        <p className="text-xs text-charcoal/60">9 High Resolution Media Assets active on Public Gallery.</p>
      </div>
    </div>
  );
}
