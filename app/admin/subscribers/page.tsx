'use client';
import React from 'react';
import { Table } from '@/components/ui/Table';

export default function AdminSubscribersPage() {
  const subs = [
    { email: 'purchasing@gulfspices.ae', date: '2026-02-14', status: 'Active' },
    { email: 'imports@saharatrade.ng', date: '2026-02-10', status: 'Active' },
    { email: 'procurement@eurofood.co.uk', date: '2026-01-28', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">Newsletter & Market Report Subscribers</h1>
        <p className="text-xs text-charcoal/60">Subscribed business email accounts receiving global trade market updates.</p>
      </div>
      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Business Email', 'Subscribed Date', 'Status']}>
          {subs.map((s, i) => (
            <tr key={i} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{s.email}</td>
              <td className="px-4 py-3">{s.date}</td>
              <td className="px-4 py-3 text-gold font-bold">{s.status}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
