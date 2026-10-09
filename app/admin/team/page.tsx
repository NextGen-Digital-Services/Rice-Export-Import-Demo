'use client';
import React from 'react';
import { Table } from '@/components/ui/Table';

export default function AdminTeamPage() {
  const team = [
    { name: 'Vikramjit Singh', role: 'Head of Global Trade Strategy', dept: 'International Sales' },
    { name: 'Dr. Ananya Sharma', role: 'Chief Quality Officer', dept: 'Quality Control Lab' },
    { name: 'Marcus Vance', role: 'Director of Freight Logistics', dept: 'Ocean Shipping Desk' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">Team Members</h1>
        <p className="text-xs text-charcoal/60">Manage leadership profiles displayed on About Us page.</p>
      </div>
      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Name', 'Role / Title', 'Department']}>
          {team.map((t, i) => (
            <tr key={i} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{t.name}</td>
              <td className="px-4 py-3 font-medium">{t.role}</td>
              <td className="px-4 py-3">{t.dept}</td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
