'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminDestinationsPage() {
  const { markets } = useData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Export Markets & Destinations</h1>
          <p className="text-xs text-charcoal/60">Manage global seaport routes, countries, and annual trade volume.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Add Destination Modal')}>
          <Plus className="w-4 h-4" /> Add New Country Route
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Flag & Country', 'Region', 'Major Ports', 'Annual Volume', 'Popular Rice', 'Status']}>
          {markets.map((m) => (
            <tr key={m.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{m.flagEmoji} {m.country}</td>
              <td className="px-4 py-3"><Badge variant="gold">{m.region}</Badge></td>
              <td className="px-4 py-3">{m.majorPorts.join(', ')}</td>
              <td className="px-4 py-3 font-mono">{m.annualVolumeMT}</td>
              <td className="px-4 py-3">{m.popularVarieties.join(', ')}</td>
              <td className="px-4 py-3"><Badge variant="basil">{m.status}</Badge></td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
