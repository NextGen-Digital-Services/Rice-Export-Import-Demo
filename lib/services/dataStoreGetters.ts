import { Product } from '@/types/product';
import { TrustDocument } from '@/types/document';
import { QuoteEnquiry } from '@/types/enquiry';
import { BlogPost } from '@/types/blog';
import { ExportDestination } from '@/types/market';
import { SiteSettings } from '@/types/admin';

import { INITIAL_PRODUCTS } from '@/data/products';
import { INITIAL_DOCUMENTS } from '@/data/documents';
import { INITIAL_BLOG_POSTS } from '@/data/insights';
import { INITIAL_MARKETS } from '@/data/markets';
import { FAQ_LIST, FAQItem } from '@/data/faqs';
import { INITIAL_SITE_SETTINGS } from '@/data/site-settings';

export const STORAGE_KEYS = {
  PRODUCTS: 'taxvi_products_v1',
  DOCUMENTS: 'taxvi_documents_v1',
  ENQUIRIES: 'taxvi_enquiries_v1',
  BLOGS: 'taxvi_blogs_v1',
  MARKETS: 'taxvi_markets_v1',
  FAQS: 'taxvi_faqs_v1',
  SETTINGS: 'taxvi_settings_v1',
};

export class DataStoreGetters {
  protected static isBrowser(): boolean {
    return typeof window !== 'undefined';
  }

  static getProducts(): Product[] {
    if (!this.isBrowser()) return INITIAL_PRODUCTS;
    const stored = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
    return stored ? JSON.parse(stored) : INITIAL_PRODUCTS;
  }

  static getDocuments(): TrustDocument[] {
    if (!this.isBrowser()) return INITIAL_DOCUMENTS;
    const stored = localStorage.getItem(STORAGE_KEYS.DOCUMENTS);
    return stored ? JSON.parse(stored) : INITIAL_DOCUMENTS;
  }

  static getEnquiries(): QuoteEnquiry[] {
    if (!this.isBrowser()) return [];
    const stored = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (!stored) {
      const initial: QuoteEnquiry[] = [
        {
          id: 'enq-101',
          fullName: 'Tariq Al-Mansoor',
          companyName: 'Al-Mansoor Trading LLC',
          email: 'tariq@almansoor-trade.ae',
          phone: '+971 50 123 4567',
          country: 'United Arab Emirates',
          productSlug: '1121-steam-basmati-rice',
          productName: '1121 Steam Basmati Rice',
          quantityMT: 100,
          packagingPreference: '25kg PP Bag with Custom Logo',
          incoterm: 'CIF',
          destinationPort: 'Jebel Ali Port, Dubai',
          additionalMessage: 'Require urgent quotation for 4x20ft container shipment.',
          status: 'New',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
        }
      ];
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(stored);
  }

  static getBlogs(): BlogPost[] {
    if (!this.isBrowser()) return INITIAL_BLOG_POSTS;
    const stored = localStorage.getItem(STORAGE_KEYS.BLOGS);
    return stored ? JSON.parse(stored) : INITIAL_BLOG_POSTS;
  }

  static getMarkets(): ExportDestination[] {
    if (!this.isBrowser()) return INITIAL_MARKETS;
    const stored = localStorage.getItem(STORAGE_KEYS.MARKETS);
    return stored ? JSON.parse(stored) : INITIAL_MARKETS;
  }

  static getFaqs(): FAQItem[] {
    if (!this.isBrowser()) return FAQ_LIST;
    const stored = localStorage.getItem(STORAGE_KEYS.FAQS);
    return stored ? JSON.parse(stored) : FAQ_LIST;
  }

  static getSettings(): SiteSettings {
    if (!this.isBrowser()) return INITIAL_SITE_SETTINGS;
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return stored ? JSON.parse(stored) : INITIAL_SITE_SETTINGS;
  }
}
