'use client';
import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function AdminSettingsPage() {
  const { settings, updateSettings } = useData();
  const [form, setForm] = useState(settings);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(form);
    alert('Site settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">Site & Company Settings</h1>
        <p className="text-xs text-charcoal/60">Configure company contact numbers, export ports, and WhatsApp desk.</p>
      </div>

      <form onSubmit={handleSave} className="bg-ivory border border-sand p-6 space-y-4 max-w-2xl">
        <Input label="Company Name" value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} />
        <Input label="Contact Email" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} />
        <Input label="Contact Phone" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} />
        <Input label="WhatsApp Number" value={form.whatsappNumber} onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })} />
        <Input label="Headquarters Address" value={form.headquartersAddress} onChange={(e) => setForm({ ...form, headquartersAddress: e.target.value })} />
        <Button type="submit" variant="gold">
          Save Settings
        </Button>
      </form>
    </div>
  );
}
