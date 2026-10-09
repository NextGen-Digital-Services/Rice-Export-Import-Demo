import { BlogPost } from '@/types/blog';
import { IMAGES } from './images';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'global-basmati-rice-export-trends-2026',
    title: 'Global Basmati Rice Export Outlook: Navigating Freight & Demand Shifts in 2026',
    excerpt: 'An in-depth analysis of international Basmati consumption patterns, container ocean freight rates, and key trade policy updates across GCC and EU markets.',
    content: 'As international buyers seek reliable supply chains in 2026, Indian Basmati exports continue to demonstrate resilient growth. With advanced Sortex processing and strict pesticide residue testing, Taxvi Global maintains zero-rejection standards across high-compliance destinations like the UK and EU. In this market report, we examine paddy procurement pricing, freight route stability, and private label packaging strategies for international importers.',
    category: 'Market Trends',
    author: 'Vikramjit Singh',
    authorRole: 'Head of Global Trade Strategy',
    publishedAt: '2026-02-15',
    imageUrl: IMAGES.blog.marketTrends,
    readTime: '6 min read',
    isPublished: true,
    tags: ['Basmati Export', 'Ocean Freight', 'Global Trade', 'GCC Rice Market']
  },
  {
    id: 'blog-2',
    slug: 'science-of-steam-vs-parboiled-basmati',
    title: 'Steam vs. Parboiled (Sella) Basmati: A Technical Specification Guide for Buyers',
    excerpt: 'Understanding starch gelation, grain elongation ratios, and post-cooking holding capacity for commercial food chains.',
    content: 'Choosing between 1121 Steam and 1121 Golden Sella requires analyzing the end-use culinary application. Steam processing hydrates paddy under high-pressure steam before milling, retaining pristine white color while hardening the outer starch layer. Parboiling (Sella), on the other hand, forces natural vitamins from the husk into the endosperm, creating unbreakable golden grains perfect for large-scale catering.',
    category: 'Quality Insights',
    author: 'Dr. Ananya Sharma',
    authorRole: 'Chief Quality Officer & Food Technologist',
    publishedAt: '2026-01-28',
    imageUrl: IMAGES.blog.agronomy,
    readTime: '8 min read',
    isPublished: true,
    tags: ['Rice Processing', 'Quality Lab', 'Technical Specs', 'Sella Rice']
  },
  {
    id: 'blog-3',
    slug: 'optimizing-incoterms-fob-vs-cif-rice-shipping',
    title: 'FOB vs. CIF vs. CFR: How to Choose the Right Incoterm for Containerized Rice Shipments',
    excerpt: 'Risk transfer points, marine insurance coverages, and demurrage avoidance strategies for international importers.',
    content: 'When finalizing an export contract for 100+ Metric Tonnes of non-basmati rice, selecting the optimal Incoterm directly impacts your landed cost and supply chain security. CIF (Cost, Insurance, and Freight) provides peace of mind for buyers desiring door-to-port coverage, whereas FOB (Free on Board) allows larger trading houses to leverage their existing ocean freight carrier agreements.',
    category: 'Global Logistics',
    author: 'Marcus Vance',
    authorRole: 'Director of International Freight Logistics',
    publishedAt: '2026-01-10',
    imageUrl: IMAGES.blog.logistics,
    readTime: '5 min read',
    isPublished: true,
    tags: ['Incoterms', 'Shipping Containers', 'CIF vs FOB', 'Logistics']
  }
];
