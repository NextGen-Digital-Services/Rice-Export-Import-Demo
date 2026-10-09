'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useData } from '@/context/DataContext';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, Trash2, Edit3, Search } from 'lucide-react';
import { Product } from '@/types/product';

export default function AdminProductsPage() {
  const { products, deleteProduct } = useData();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.variety.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Products Catalog Manager</h1>
          <p className="text-xs text-charcoal/60">Manage Basmati and Non-Basmati export rice varieties, specs & MOQs.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Product Add/Edit Form Modal ready')}>
          <Plus className="w-4 h-4" /> Add New Rice Variety
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6 space-y-4">
        <div className="relative w-full sm:w-72">
          <Input
            placeholder="Search rice product..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
        </div>

        <Table headers={['Image', 'Product Name', 'Category', 'Variety', 'HS Code', 'Grain Length', 'MOQ', 'Status', 'Actions']}>
          {filtered.map((p) => (
            <tr key={p.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3">
                <div className="relative h-12 w-16 border border-sand bg-cream">
                  <Image src={p.imageUrl} alt={p.name} fill className="object-cover" sizes="64px" />
                </div>
              </td>
              <td className="px-4 py-3 font-bold text-basil">{p.name}</td>
              <td className="px-4 py-3"><Badge variant={p.category === 'Basmati' ? 'gold' : 'basil'}>{p.category}</Badge></td>
              <td className="px-4 py-3">{p.variety}</td>
              <td className="px-4 py-3 font-mono">{p.specs.hsCode}</td>
              <td className="px-4 py-3">{p.specs.grainLength}</td>
              <td className="px-4 py-3">{p.moq}</td>
              <td className="px-4 py-3"><Badge variant="basil">{p.status}</Badge></td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button className="p-1 text-basil hover:text-gold"><Edit3 className="w-4 h-4" /></button>
                  <button onClick={() => deleteProduct(p.id)} className="p-1 text-charcoal/40 hover:text-terracotta"><Trash2 className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
