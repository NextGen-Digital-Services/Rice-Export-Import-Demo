'use client';

import React from 'react';
import Link from 'next/link';
import { useData } from '@/context/DataContext';
import { ProductCard } from '@/components/site/ProductCard';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProductsSection: React.FC = () => {
  const { products } = useData();
  const featured = products.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 px-6 bg-ivory border-b border-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-sand pb-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Our Product Portfolio</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-basil mt-1">
              Featured Export Rice Varieties
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="gap-2">
              View Complete Catalog <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
