'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { INITIAL_PRODUCTS } from '@/data/products';

interface MegaMenuProps {
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ onClose }) => {
  const basmatiList = INITIAL_PRODUCTS.filter((p) => p.category === 'Basmati').slice(0, 4);
  const nonBasmatiList = INITIAL_PRODUCTS.filter((p) => p.category === 'Non-Basmati').slice(0, 4);

  return (
    <div className="w-full bg-ivory/95 backdrop-blur-md border-b border-gold/30 shadow-2xl z-50 py-8 px-6 lg:px-16 animate-fadeIn">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 border-r border-sand pr-6">
          <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Basmati Varieties</span>
          </div>
          <p className="text-xs text-charcoal/70 mb-4 leading-relaxed">
            Geographically protected long-grain basmati naturally aged for intense fragrance and fluffiness.
          </p>
          <ul className="space-y-2">
            {basmatiList.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/products/${item.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between py-1.5 text-xs text-basil hover:text-gold transition-colors font-medium"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 border-r border-sand pr-6">
          <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Non-Basmati Varieties</span>
          </div>
          <p className="text-xs text-charcoal/70 mb-4 leading-relaxed">
            High-volume parboiled and raw varieties engineered for commercial kitchens & international staple food import.
          </p>
          <ul className="space-y-2">
            {nonBasmatiList.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/products/${item.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between py-1.5 text-xs text-basil hover:text-gold transition-colors font-medium"
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between bg-cream p-5 border border-sand">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gold">Featured Export</span>
            <h4 className="font-serif text-lg font-bold text-basil mt-1">1121 Steam Basmati</h4>
            <p className="text-xs text-charcoal/70 mt-2 leading-relaxed">
              8.35mm average grain length with zero chalky grains. Available in private label packaging.
            </p>
          </div>
          <div className="relative h-28 w-full my-3 border border-gold/30 overflow-hidden">
            <Image
              src={INITIAL_PRODUCTS[0].imageUrl}
              alt="1121 Steam Basmati"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
          <Link
            href="/products"
            onClick={onClose}
            className="inline-flex items-center justify-between text-xs uppercase tracking-widest text-gold-dark hover:text-basil font-bold"
          >
            <span>View Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
