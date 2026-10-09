'use client';
import React from 'react';
import { FAQ_LIST } from '@/data/faqs';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminFAQPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">FAQ Manager</h1>
          <p className="text-xs text-charcoal/60">Manage questions regarding ordering, shipping, and payments.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Add FAQ Modal')}>
          <Plus className="w-4 h-4" /> Add FAQ Item
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Question', 'Category', 'Answer Snippet']}>
          {FAQ_LIST.map((faq) => (
            <tr key={faq.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{faq.question}</td>
              <td className="px-4 py-3"><Badge variant="gold">{faq.category}</Badge></td>
              <td className="px-4 py-3 text-charcoal/70 line-clamp-1">{faq.answer}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
