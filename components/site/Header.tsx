'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { CustomLogo } from './CustomLogo';
import { MegaMenu } from './MegaMenu';
import { MobileDrawer } from './MobileDrawer';
import { TopNotificationBar } from './TopNotificationBar';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMegaOpen(false);
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMegaOpen(false); };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMegaOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsMegaOpen(false), 200);
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <TopNotificationBar />

      <div
        className={`w-full transition-all duration-300 relative ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand py-3 shadow-md'
            : 'bg-ivory/80 backdrop-blur-sm py-5 border-b border-sand/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <CustomLogo />

          <nav className="hidden lg:flex items-center space-x-7">
            <Link href="/" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              About
            </Link>

            <div className="relative py-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button
                type="button"
                onClick={() => setIsMegaOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isMegaOpen}
                className="flex items-center gap-1 text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors cursor-pointer py-1"
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 text-gold transition-transform duration-200 ${isMegaOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link href="/quality" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              Quality
            </Link>
            <Link href="/export-markets" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              Global Markets
            </Link>
            <Link href="/trust-center" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              Trust Center
            </Link>
            <Link href="/contact" className="text-xs uppercase font-medium tracking-wider text-charcoal hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/quote">
              <Button variant="gold" size="sm">
                Request Quote
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 text-basil hover:text-gold transition-colors lg:hidden"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isMegaOpen && (
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="absolute top-full left-0 w-full z-50">
            <MegaMenu onClose={() => setIsMegaOpen(false)} />
          </div>
        )}
      </div>

      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  );
};
