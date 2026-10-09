'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminTopbar } from '@/components/admin/AdminTopbar';
import { DataProvider } from '@/context/DataContext';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Skip sidebar & topbar for login page
  if (pathname === '/admin/login') {
    return <DataProvider>{children}</DataProvider>;
  }

  return (
    <DataProvider>
      <div className="min-h-screen bg-sand/30 flex text-charcoal">
        <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col lg:pl-64">
          <AdminTopbar onToggleSidebar={() => setSidebarOpen(true)} />
          <main className="flex-1 p-6 max-w-7xl w-full mx-auto space-y-6">{children}</main>
        </div>
      </div>
    </DataProvider>
  );
}
