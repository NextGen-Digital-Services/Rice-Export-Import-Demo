'use client';
import React from 'react';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminUsersPage() {
  const users = [
    { name: 'Admin User', email: 'admin@taxviglobal.com', role: 'Super Admin', status: 'Active' },
    { name: 'Trade Manager', email: 'trade@taxviglobal.com', role: 'Editor', status: 'Active' },
    { name: 'Lab Auditor', email: 'quality@taxviglobal.com', role: 'Viewer', status: 'Active' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Users & Role Management</h1>
          <p className="text-xs text-charcoal/60">Manage administrative portal access and user roles.</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Invite User Modal')}>
          <Plus className="w-4 h-4" /> Invite Admin User
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['User Name', 'Email Address', 'Assigned Role', 'Status']}>
          {users.map((u, i) => (
            <tr key={i} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{u.name}</td>
              <td className="px-4 py-3">{u.email}</td>
              <td className="px-4 py-3"><Badge variant="gold">{u.role}</Badge></td>
              <td className="px-4 py-3"><Badge variant="basil">{u.status}</Badge></td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
