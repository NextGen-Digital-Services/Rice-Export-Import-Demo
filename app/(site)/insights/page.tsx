'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useData } from '@/context/DataContext';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function InsightsPage() {
  const { blogs } = useData();
  const published = blogs.filter((b) => b.isPublished);

  return (
    <div className="space-y-12 py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Market Intelligence</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">Rice Export Insights</h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Stay informed on international rice commodity pricing, container freight rates, APEDA export policies, and quality agronomy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {published.map((post) => (
          <article key={post.id} className="bg-cream border border-sand hover:border-gold transition-colors flex flex-col justify-between">
            <div>
              <div className="relative h-48 w-full border-b border-sand overflow-hidden">
                <Image src={post.imageUrl} alt={post.title} fill className="object-cover" sizes="400px" />
                <div className="absolute top-3 left-3">
                  <Badge variant="gold">{post.category}</Badge>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-charcoal/60">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-gold" /> {post.readTime}</span>
                </div>
                <h2 className="font-serif text-xl font-bold text-basil hover:text-gold transition-colors line-clamp-2">
                  <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs text-charcoal/70 line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link href={`/insights/${post.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark hover:text-basil">
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
