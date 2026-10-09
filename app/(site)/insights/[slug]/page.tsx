import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INITIAL_BLOG_POSTS } from '@/data/insights';
import { constructMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INITIAL_BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = INITIAL_BLOG_POSTS.find((b) => b.slug === resolvedParams.slug);
  if (!post) return constructMetadata({ title: 'Article Not Found' });
  return constructMetadata({
    title: `${post.title} | Taxvi Global Insights`,
    description: post.excerpt,
    image: post.imageUrl
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = INITIAL_BLOG_POSTS.find((b) => b.slug === resolvedParams.slug);
  if (!post) notFound();

  return (
    <article className="space-y-10 py-12 px-6 max-w-4xl mx-auto">
      <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-basil hover:text-gold transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Insights
      </Link>

      <div className="space-y-4">
        <Badge variant="gold">{post.category}</Badge>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal/70 border-y border-sand py-3">
          <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-gold" /> {post.author} ({post.authorRole})</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gold" /> {formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" /> {post.readTime}</span>
        </div>
      </div>

      <div className="relative h-96 w-full border border-gold/30 shadow-lg overflow-hidden">
        <Image src={post.imageUrl} alt={post.title} fill priority className="object-cover" sizes="800px" />
      </div>

      <div className="prose max-w-none text-charcoal/80 text-sm md:text-base leading-relaxed font-sans space-y-4">
        <p>{post.content}</p>
      </div>
    </article>
  );
}
