'use client';
import React from 'react';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminTestimonialsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Client Testimonials Manager</h1>
          <p className="text-xs text-charcoal/60">Manage reviews and quotes from global rice importers.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Add Testimonial Modal')}>
          <Plus className="w-4 h-4" /> Add Testimonial
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6 text-xs space-y-2">
        <p className="font-bold text-basil">3 Verified Client Testimonials Published on Home Page.</p>
      </div>
    </div>
  );
}
