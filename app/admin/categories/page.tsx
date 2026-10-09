'use client';

import React from 'react';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminCategoriesPage() {
  const categories = [
    { id: '1', name: 'Basmati Rice', hsnPrefix: '1006.30.20', itemsCount: 6, status: 'Active' },
    { id: '2', name: 'Non-Basmati Parboiled', hsnPrefix: '1006.30.90', itemsCount: 5, status: 'Active' },
    { id: '3', name: 'Non-Basmati Raw White', hsnPrefix: '1006.30.90', itemsCount: 4, status: 'Active' },
    { id: '4', name: 'Broken Rice Grades', hsnPrefix: '1006.40.00', itemsCount: 2, status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Categories & Variety Master</h1>
          <p className="text-xs text-charcoal/60">Configure export rice classifications & HS tariff codes.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('New category form')}>
          <Plus className="w-4 h-4" /> Add Category
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Category Name', 'HSN Code Prefix', 'Active Varieties', 'Status']}>
          {categories.map((c) => (
            <tr key={c.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{c.name}</td>
              <td className="px-4 py-3 font-mono">{c.hsnPrefix}</td>
              <td className="px-4 py-3 font-semibold">{c.itemsCount} Varieties</td>
              <td className="px-4 py-3"><Badge variant="basil">{c.status}</Badge></td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
