'use client';
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function AdminContentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">Pages Content Manager</h1>
        <p className="text-xs text-charcoal/60">Edit homepage hero headline, about story text, and trust stats.</p>
      </div>

      <div className="bg-ivory border border-sand p-6 space-y-4 max-w-2xl">
        <Input label="Hero Headline" defaultValue="Pure Indian Rice. Delivered Globally." />
        <Input label="Hero Subtext" defaultValue="TAXVI GLOBAL processes and exports authentic 1121 Basmati, 1509 Basmati, IR64 Parboiled..." />
        <Button variant="gold" onClick={() => alert('Hero text updated successfully!')}>
          Save Content Changes
        </Button>
      </div>
    </div>
  );
}
