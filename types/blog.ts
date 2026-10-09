export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Market Trends' | 'Rice Agronomy' | 'Global Logistics' | 'Quality Insights';
  author: string;
  authorRole: string;
  publishedAt: string;
  imageUrl: string;
  readTime: string;
  isPublished: boolean;
  tags: string[];
}
