'use client';
import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function AdminSEOPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">SEO & Meta Tags Settings</h1>
        <p className="text-xs text-charcoal/60">Configure global site title templates, default meta description, and OpenGraph images.</p>
      </div>

      <div className="bg-ivory border border-sand p-6 space-y-4 max-w-2xl">
        <Input label="Default Meta Title" defaultValue="TAXVI GLOBAL | Premier Basmati & Non-Basmati Rice Exporters" />
        <Input label="Default Meta Description" defaultValue="TAXVI GLOBAL is a leading global export house specializing in 1121 Basmati, 1509 Basmati, IR64 Parboiled rice with ISO & APEDA accreditation." />
        <Input label="Default OG Image URL" defaultValue="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=85&w=1200" />
        <Button variant="gold" onClick={() => alert('SEO settings updated!')}>
          Save SEO Settings
        </Button>
      </div>
    </div>
  );
}
