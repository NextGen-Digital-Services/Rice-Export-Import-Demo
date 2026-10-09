import { Product } from '@/types/product';
import { TrustDocument } from '@/types/document';
import { QuoteEnquiry } from '@/types/enquiry';
import { BlogPost } from '@/types/blog';
import { ExportDestination } from '@/types/market';
import { SiteSettings } from '@/types/admin';
import { FAQItem } from '@/data/faqs';

export interface DataContextType {
  products: Product[];
  documents: TrustDocument[];
  enquiries: QuoteEnquiry[];
  blogs: BlogPost[];
  markets: ExportDestination[];
  faqs: FAQItem[];
  settings: SiteSettings;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  addDocument: (doc: TrustDocument) => void;
  toggleDocumentPublic: (id: string) => void;
  deleteDocument: (id: string) => void;
  addEnquiry: (enquiry: Omit<QuoteEnquiry, 'id' | 'createdAt' | 'status'>) => void;
  updateEnquiryStatus: (id: string, status: QuoteEnquiry['status'], notes?: string) => void;
  addBlog: (blog: BlogPost) => void;
  updateBlog: (blog: BlogPost) => void;
  deleteBlog: (id: string) => void;
  updateSettings: (settings: SiteSettings) => void;
}
