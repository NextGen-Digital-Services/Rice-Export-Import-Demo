import React from 'react';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { WhatsAppButton } from '@/components/site/WhatsAppButton';
import { CookieNotice } from '@/components/site/CookieNotice';
import { DataProvider } from '@/context/DataContext';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-gold selection:text-basil">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieNotice />
      </div>
    </DataProvider>
  );
}
