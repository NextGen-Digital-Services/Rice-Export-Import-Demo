import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-ivory border border-sand hover:border-gold/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-xl">
      <div className="relative h-60 w-full overflow-hidden bg-cream">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant={product.category === 'Basmati' ? 'gold' : 'basil'}>
            {product.category}
          </Badge>
          {product.isFeatured && <Badge variant="terracotta">Featured</Badge>}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">
            {product.variety} • HS {product.specs.hsCode}
          </span>
          <h3 className="font-serif text-xl font-bold text-basil group-hover:text-gold-dark transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-charcoal/70 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="border-t border-sand/60 pt-3 space-y-2 text-xs">
          <div className="flex justify-between text-charcoal/80">
            <span className="text-charcoal/50">Grain Length:</span>
            <span className="font-semibold">{product.specs.grainLength}</span>
          </div>
          <div className="flex justify-between text-charcoal/80">
            <span className="text-charcoal/50">Min MOQ:</span>
            <span className="font-semibold">{product.moq}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-basil font-medium pt-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
            <span>Sortex Cleaned • {product.specs.moisture} Moisture</span>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-3">
          <Link href={`/products/${product.slug}`} className="flex-1">
            <Button variant="outline" className="w-full py-2">
              View Specs
            </Button>
          </Link>
          <Link href={`/quote?product=${encodeURIComponent(product.name)}`}>
            <Button variant="gold" className="px-3 py-2">
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
