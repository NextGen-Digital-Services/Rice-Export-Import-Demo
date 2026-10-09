'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { StatsCard } from '@/components/admin/StatsCard';
import { AnalyticsCharts } from '@/components/admin/SVGCharts';
import { Inbox, Package, FileCheck2, Globe2, ArrowRight } from 'lucide-react';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

export default function AdminDashboardPage() {
  const { enquiries, products, documents, markets } = useData();

  const newEnquiriesCount = enquiries.filter((e) => e.status === 'New').length;
  const publicDocsCount = documents.filter((d) => d.isPublic).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Export Operations Dashboard</h1>
          <p className="text-xs text-charcoal/60">Real-time overview of global rice enquiries, trust center documents, and product catalog.</p>
        </div>
        <Link href="/admin/enquiries">
          <Button variant="gold" size="sm" className="gap-2">
            <Inbox className="w-4 h-4" /> View Enquiries Inbox ({newEnquiriesCount})
          </Button>
        </Link>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Enquiries" value={enquiries.length} subtitle={`${newEnquiriesCount} New unquoted`} icon={Inbox} trend="+18% this month" />
        <StatsCard title="Products Active" value={products.length} subtitle="Basmati & Non-Basmati" icon={Package} />
        <StatsCard title="Trust Documents" value={documents.length} subtitle={`${publicDocsCount} Public on Trust Center`} icon={FileCheck2} />
        <StatsCard title="Export Markets" value={markets.length} subtitle="Active shipping routes" icon={Globe2} />
      </div>

      {/* Analytics Charts */}
      <AnalyticsCharts />

      {/* Recent Enquiries Inbox Table */}
      <div className="bg-ivory border border-sand p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-basil">Recent Quote Requests</h3>
          <Link href="/admin/enquiries" className="text-xs text-gold-dark hover:underline font-bold flex items-center gap-1">
            View All Enquiries <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Table headers={['Date', 'Buyer Company', 'Country', 'Product', 'Quantity', 'Incoterm', 'Status']}>
          {enquiries.slice(0, 5).map((enq) => (
            <tr key={enq.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3">{formatDate(enq.createdAt)}</td>
              <td className="px-4 py-3 font-bold text-basil">{enq.companyName}<span className="block font-normal text-charcoal/60">{enq.fullName}</span></td>
              <td className="px-4 py-3">{enq.country}</td>
              <td className="px-4 py-3 font-medium">{enq.productName}</td>
              <td className="px-4 py-3 font-mono">{enq.quantityMT} MT</td>
              <td className="px-4 py-3">{enq.incoterm} ({enq.destinationPort})</td>
              <td className="px-4 py-3">
                <Badge variant={enq.status === 'New' ? 'terracotta' : enq.status === 'Won' ? 'basil' : 'gold'}>
                  {enq.status}
                </Badge>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
