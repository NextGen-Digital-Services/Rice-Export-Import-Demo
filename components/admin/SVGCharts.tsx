import React from 'react';
import { Card } from '@/components/ui/Card';

export const AnalyticsCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Monthly Export Enquiries Chart */}
      <Card className="space-y-4">
        <div className="flex justify-between items-center border-b border-sand pb-3">
          <h3 className="font-serif text-lg font-bold text-basil">Monthly Export Enquiries (2026)</h3>
          <span className="text-[10px] font-mono text-gold font-bold">TOTAL: 142 ENQUIRIES</span>
        </div>
        <div className="h-48 flex items-end justify-between gap-2 pt-4 px-2">
          {[
            { month: 'Oct', val: 40 },
            { month: 'Nov', val: 55 },
            { month: 'Dec', val: 70 },
            { month: 'Jan', val: 62 },
            { month: 'Feb', val: 85 },
            { month: 'Mar', val: 98 }
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div
                style={{ height: `${bar.val}%` }}
                className="w-full bg-basil hover:bg-gold transition-colors duration-300 relative group"
              >
                <span className="opacity-0 group-hover:opacity-100 absolute -top-6 left-1/2 -translate-x-1/2 bg-charcoal text-ivory text-[10px] px-1.5 py-0.5 transition-opacity">
                  {bar.val}
                </span>
              </div>
              <span className="text-[10px] text-charcoal/60 uppercase font-bold">{bar.month}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Demand Breakdown By Rice Variety */}
      <Card className="space-y-4">
        <div className="flex justify-between items-center border-b border-sand pb-3">
          <h3 className="font-serif text-lg font-bold text-basil">Export Demand by Variety</h3>
          <span className="text-[10px] font-mono text-gold font-bold">VOLUME SHARE %</span>
        </div>
        <div className="space-y-3 pt-2 text-xs">
          {[
            { name: '1121 Steam Basmati', pct: 42, color: 'bg-basil' },
            { name: '1121 Golden Sella', pct: 28, color: 'bg-gold' },
            { name: 'IR64 Parboiled', pct: 18, color: 'bg-terracotta' },
            { name: 'Sona Masoori Raw', pct: 12, color: 'bg-basil-light' }
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between font-semibold text-charcoal">
                <span>{item.name}</span>
                <span>{item.pct}%</span>
              </div>
              <div className="w-full h-2.5 bg-sand/60 overflow-hidden">
                <div style={{ width: `${item.pct}%` }} className={`h-full ${item.color}`} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
