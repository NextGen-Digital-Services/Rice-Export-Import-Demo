'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { ProductCard } from '@/components/site/ProductCard';
import { Tabs } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';
import { RiceCategory } from '@/types/product';

export default function ProductsPage() {
  const { products } = useData();
  const [activeTab, setActiveTab] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      activeTab === 'All Products' ? true : p.category === activeTab;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.variety.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-12 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Export Catalog</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">
          Rice Product Varieties
        </h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Filter through our geographically protected Basmati and high-volume Non-Basmati product range.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-cream p-6 border border-sand space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs
            tabs={['All Products', 'Basmati', 'Non-Basmati']}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
          <div className="relative w-full md:w-72">
            <Input
              placeholder="Search by variety or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-cream border border-sand p-12 text-center text-charcoal/60 space-y-2">
          <p className="font-serif text-xl font-bold text-basil">No rice varieties match your query.</p>
          <p className="text-xs">Try adjusting your category filter or search keywords.</p>
        </div>
      )}
    </div>
  );
}
