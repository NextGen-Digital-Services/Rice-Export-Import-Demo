import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-basil-dark text-ivory flex items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <span className="font-mono text-6xl font-bold text-gold block">404</span>
        <h1 className="font-serif text-3xl font-bold text-ivory">Page Not Found</h1>
        <p className="text-xs text-ivory/80 leading-relaxed font-sans">
          The export document or page you are searching for does not exist or has been relocated.
        </p>
        <div className="pt-2">
          <Link href="/">
            <Button variant="gold">Return to Homepage</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
