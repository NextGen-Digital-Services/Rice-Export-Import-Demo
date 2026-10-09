'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, LogOut, ExternalLink, UserCheck } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';

interface AdminTopbarProps {
  onToggleSidebar: () => void;
}

export const AdminTopbar: React.FC<AdminTopbarProps> = ({ onToggleSidebar }) => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-md border-b border-sand px-6 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onToggleSidebar} className="p-1.5 text-basil hover:text-gold lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2 text-xs text-charcoal/70">
          <span className="font-bold text-basil">Taxvi Global</span>
          <span>/</span>
          <span className="text-gold font-medium">Admin Workspace</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/" target="_blank">
          <Button variant="outline" size="sm" className="gap-1.5 hidden sm:inline-flex">
            <ExternalLink className="w-3.5 h-3.5" /> View Public Site
          </Button>
        </Link>
        <div className="flex items-center gap-2 text-xs font-semibold text-basil bg-cream px-3 py-1.5 border border-sand">
          <UserCheck className="w-4 h-4 text-gold" />
          <span className="hidden sm:inline">Admin User</span>
        </div>
        <button
          onClick={handleLogout}
          className="p-2 text-charcoal/60 hover:text-terracotta transition-colors"
          title="Logout"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
