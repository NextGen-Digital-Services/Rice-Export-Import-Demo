import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle, icon: Icon, trend }) => {
  return (
    <Card className="flex items-center justify-between p-6">
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-widest font-bold text-gold-dark">{title}</span>
        <h3 className="font-serif text-3xl font-bold text-basil">{value}</h3>
        {subtitle && <p className="text-xs text-charcoal/60">{subtitle}</p>}
        {trend && <span className="text-[10px] text-basil font-semibold bg-basil/10 px-2 py-0.5 inline-block mt-1">{trend}</span>}
      </div>
      <div className="p-3 bg-cream border border-sand text-basil">
        <Icon className="w-6 h-6 text-gold-dark" />
      </div>
    </Card>
  );
};
