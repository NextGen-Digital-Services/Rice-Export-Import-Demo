'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { EnquiryDrawer } from '@/components/admin/EnquiryDrawer';
import { Download, Search, Eye } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { QuoteEnquiry, EnquiryStatus } from '@/types/enquiry';

export default function AdminEnquiriesPage() {
  const { enquiries, updateEnquiryStatus } = useData();
  const [selectedEnquiry, setSelectedEnquiry] = useState<QuoteEnquiry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const filtered = enquiries.filter((e) => {
    const matchesStatus = filterStatus === 'All' ? true : e.status === filterStatus;
    const matchesSearch =
      e.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = 'ID,Date,Buyer,Company,Email,Phone,Country,Product,Quantity(MT),Incoterm,Port,Status\n';
    const rows = enquiries
      .map(
        (e) =>
          `"${e.id}","${e.createdAt}","${e.fullName}","${e.companyName}","${e.email}","${e.phone}","${e.country}","${e.productName}",${e.quantityMT},"${e.incoterm}","${e.destinationPort}","${e.status}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Taxvi_Global_Enquiries_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Quote Requests & Enquiries Inbox</h1>
          <p className="text-xs text-charcoal/60">Incoming export enquiries from public quote forms across global markets.</p>
        </div>
        <Button variant="outline" onClick={exportCSV} className="gap-2">
          <Download className="w-4 h-4" /> Export Inbox to CSV
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Input
              placeholder="Search company, buyer or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
          </div>
          <div className="flex gap-2 text-xs">
            {['All', 'New', 'Contacted', 'Quoted', 'Won', 'Lost'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 font-bold uppercase transition-colors cursor-pointer border ${
                  filterStatus === st ? 'bg-basil text-gold border-basil' : 'bg-cream text-charcoal border-sand'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        <Table headers={['Date', 'Buyer Name', 'Company Name', 'Country', 'Product Requested', 'Qty (MT)', 'Incoterm', 'Status', 'Action']}>
          {filtered.map((enq) => (
            <tr key={enq.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3">{formatDate(enq.createdAt)}</td>
              <td className="px-4 py-3 font-medium">{enq.fullName}</td>
              <td className="px-4 py-3 font-bold text-basil">{enq.companyName}</td>
              <td className="px-4 py-3">{enq.country}</td>
              <td className="px-4 py-3 font-medium">{enq.productName}</td>
              <td className="px-4 py-3 font-mono">{enq.quantityMT} MT</td>
              <td className="px-4 py-3">{enq.incoterm}</td>
              <td className="px-4 py-3">
                <Badge variant={enq.status === 'New' ? 'terracotta' : enq.status === 'Won' ? 'basil' : 'gold'}>
                  {enq.status}
                </Badge>
              </td>
              <td className="px-4 py-3">
                <Button variant="outline" size="sm" onClick={() => setSelectedEnquiry(enq)} className="gap-1">
                  <Eye className="w-3.5 h-3.5" /> Details
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      <EnquiryDrawer
        enquiry={selectedEnquiry}
        onClose={() => setSelectedEnquiry(null)}
        onStatusChange={(id, status, notes) => updateEnquiryStatus(id, status, notes)}
      />
    </div>
  );
}
