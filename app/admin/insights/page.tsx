'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import { formatDate } from '@/lib/utils';

export default function AdminInsightsPage() {
  const { blogs, deleteBlog } = useData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Insights & Blog Manager</h1>
          <p className="text-xs text-charcoal/60">Publish market news articles, ocean freight trends, and technical specs.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('New Blog Post Editor Modal')}>
          <Plus className="w-4 h-4" /> Create Article
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Article Title', 'Category', 'Author', 'Published Date', 'Status', 'Actions']}>
          {blogs.map((b) => (
            <tr key={b.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{b.title}</td>
              <td className="px-4 py-3"><Badge variant="gold">{b.category}</Badge></td>
              <td className="px-4 py-3">{b.author}</td>
              <td className="px-4 py-3">{formatDate(b.publishedAt)}</td>
              <td className="px-4 py-3"><Badge variant="basil">{b.isPublished ? 'Published' : 'Draft'}</Badge></td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button className="p-1 text-basil hover:text-gold"><Edit3 className="w-4 h-4" /></button>
                  <button onClick={() => deleteBlog(b.id)} className="p-1 text-charcoal/40 hover:text-terracotta"><Trash2 className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
