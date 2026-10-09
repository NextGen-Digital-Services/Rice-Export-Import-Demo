import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_PRODUCTS } from '@/data/products';
import { constructMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { QuoteForm } from '@/components/site/QuoteForm';
import { CheckCircle2, ShieldCheck, Anchor, ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_PRODUCTS.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  if (!product) return constructMetadata({ title: 'Product Not Found' });
  return constructMetadata({
    title: `${product.name} | Taxvi Global`,
    description: product.shortDescription,
    image: product.imageUrl
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = INITIAL_PRODUCTS.find((p) => p.slug === resolvedParams.slug);
  if (!product) notFound();

  return (
    <div className="space-y-16 py-12 px-6 max-w-7xl mx-auto">
      <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-basil hover:text-gold transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Catalog
      </Link>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Gallery Image */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative h-96 md:h-[480px] w-full border border-gold/40 shadow-xl overflow-hidden bg-cream">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="gold">{product.category}</Badge>
              <Badge variant="basil">{product.variety}</Badge>
            </div>
          </div>
        </div>

        {/* Specs Column */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-gold block mb-1">
              HS Code: {product.specs.hsCode} • {product.specs.origin}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">
              {product.name}
            </h1>
            <p className="text-xs md:text-sm text-charcoal/80 mt-3 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Specifications Table */}
          <div className="bg-cream border border-sand p-6 space-y-3">
            <h3 className="font-serif text-lg font-bold text-basil border-b border-sand pb-2">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-2 text-xs text-charcoal/80">
              <div><span className="text-charcoal/50">Average Length:</span> <strong>{product.specs.grainLength}</strong></div>
              <div><span className="text-charcoal/50">Moisture Content:</span> <strong>{product.specs.moisture}</strong></div>
              <div><span className="text-charcoal/50">Aroma:</span> <strong>{product.specs.aroma}</strong></div>
              <div><span className="text-charcoal/50">Purity Level:</span> <strong>{product.specs.purity}</strong></div>
              <div><span className="text-charcoal/50">Broken Ratio:</span> <strong>{product.specs.brokenPercentage}</strong></div>
              <div><span className="text-charcoal/50">Admixture Max:</span> <strong>{product.specs.admixture}</strong></div>
              <div><span className="text-charcoal/50">Loading Port:</span> <strong>{product.specs.portOfLoading}</strong></div>
              <div><span className="text-charcoal/50">Min MOQ:</span> <strong>{product.moq}</strong></div>
            </div>
          </div>

          {/* Packaging Styles */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-bold text-gold block">Available Packaging Options</span>
            <div className="flex flex-wrap gap-2">
              {product.packagingOptions.map((pkg) => (
                <span key={pkg} className="px-3 py-1 bg-ivory border border-sand text-xs text-basil font-medium">
                  {pkg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Quote Form prefilled with product */}
      <div id="enquire-section" className="pt-8 border-t border-sand">
        <React.Suspense fallback={<div className="text-center py-6 text-xs text-charcoal/60">Loading Quote Form...</div>}>
          <QuoteForm />
        </React.Suspense>
      </div>
    </div>
  );
}
