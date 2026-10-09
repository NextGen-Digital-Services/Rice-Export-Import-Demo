import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  className?: string;
}

export const Table: React.FC<TableProps> = ({ headers, children, className }) => {
  return (
    <div className="w-full overflow-x-auto border border-sand bg-ivory">
      <table className={cn('w-full text-left border-collapse text-xs', className)}>
        <thead>
          <tr className="bg-cream border-b border-sand text-basil font-semibold uppercase tracking-wider text-[11px]">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-sand/60">{children}</tbody>
      </table>
    </div>
  );
};
