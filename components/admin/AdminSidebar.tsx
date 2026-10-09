'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CustomLogo } from '@/components/site/CustomLogo';
import {
  LayoutDashboard,
  Package,
  Layers,
  Inbox,
  FileCheck2,
  Award,
  Globe2,
  Image as ImageIcon,
  Newspaper,
  MessageSquareQuote,
  HelpCircle,
  FileEdit,
  Users2,
  Mail,
  Search,
  Settings,
  ShieldAlert,
  User
} from 'lucide-react';

const ADMIN_NAV = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Enquiries Inbox', href: '/admin/enquiries', icon: Inbox },
  { label: 'Document Manager', href: '/admin/documents', icon: FileCheck2 },
  { label: 'Products Catalog', href: '/admin/products', icon: Package },
  { label: 'Categories & Varieties', href: '/admin/categories', icon: Layers },
  { label: 'Certifications', href: '/admin/certifications', icon: Award },
  { label: 'Export Destinations', href: '/admin/destinations', icon: Globe2 },
  { label: 'Gallery Manager', href: '/admin/gallery', icon: ImageIcon },
  { label: 'Insights / Blog', href: '/admin/insights', icon: Newspaper },
  { label: 'Testimonials', href: '/admin/testimonials', icon: MessageSquareQuote },
  { label: 'FAQ Manager', href: '/admin/faq', icon: HelpCircle },
  { label: 'Content Manager', href: '/admin/content', icon: FileEdit },
  { label: 'Team Members', href: '/admin/team', icon: Users2 },
  { label: 'Subscribers Inbox', href: '/admin/subscribers', icon: Mail },
  { label: 'SEO Settings', href: '/admin/seo', icon: Search },
  { label: 'Site Settings', href: '/admin/settings', icon: Settings },
  { label: 'Users & Roles', href: '/admin/users', icon: ShieldAlert },
  { label: 'My Profile', href: '/admin/profile', icon: User }
];

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-basil-dark text-ivory border-r border-gold/30 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-5 border-b border-gold/20 flex items-center justify-between">
        <CustomLogo variant="light" />
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-2 px-2">
          Management Desk
        </span>
        {ADMIN_NAV.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? 'bg-basil text-gold border-l-2 border-gold font-bold'
                  : 'text-ivory/70 hover:text-ivory hover:bg-basil/40'
              }`}
            >
              <Icon className="w-4 h-4 text-gold shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};
