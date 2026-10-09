import { MetadataRoute } from 'next';
import { INITIAL_PRODUCTS } from '@/data/products';
import { INITIAL_BLOG_POSTS } from '@/data/insights';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxviglobal.com';

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/quality',
    '/export-markets',
    '/infrastructure',
    '/trust-center',
    '/insights',
    '/gallery',
    '/faq',
    '/quote',
    '/contact',
    '/legal/privacy',
    '/legal/terms'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  const productRoutes = INITIAL_PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9
  }));

  const blogRoutes = INITIAL_BLOG_POSTS.map((b) => ({
    url: `${baseUrl}/insights/${b.slug}`,
    lastModified: b.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
