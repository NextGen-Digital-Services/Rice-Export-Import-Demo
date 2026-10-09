'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const CookieNotice: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const val = localStorage.getItem('taxvi_cookie_accepted');
    if (!val) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('taxvi_cookie_accepted', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-basil-dark text-ivory border-t border-gold/40 p-4 shadow-2xl animate-slideUp">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-ivory/80 leading-relaxed max-w-3xl">
          TAXVI GLOBAL uses essential cookies and local trade session storage to provide smooth quote processing and document browsing experience. By continuing to use our export portal, you accept our standard cookie policy.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Button variant="gold" size="sm" onClick={handleAccept}>
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
