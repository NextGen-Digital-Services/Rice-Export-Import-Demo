'use client';
import React from 'react';
import { CERTIFICATIONS } from '@/data/certifications';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function AdminCertificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Certifications Manager</h1>
          <p className="text-xs text-charcoal/60">Manage trade accreditations (APEDA, FSSAI, ISO, HACCP, IEC).</p>
        </div>
        <Button variant="gold" className="gap-2" onClick={() => alert('Add Certification Modal')}>
          <Plus className="w-4 h-4" /> Add Accreditation
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6">
        <Table headers={['Certification Name', 'Code / Ref Number', 'Issuing Body', 'Status']}>
          {CERTIFICATIONS.map((cert) => (
            <tr key={cert.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">{cert.name}</td>
              <td className="px-4 py-3 font-mono">{cert.code}</td>
              <td className="px-4 py-3">{cert.issuedBy}</td>
              <td className="px-4 py-3"><Badge variant="gold">Active</Badge></td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
