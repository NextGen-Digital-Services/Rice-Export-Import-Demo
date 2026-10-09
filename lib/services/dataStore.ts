import { Product } from '@/types/product';
import { TrustDocument } from '@/types/document';
import { QuoteEnquiry } from '@/types/enquiry';
import { BlogPost } from '@/types/blog';
import { ExportDestination } from '@/types/market';
import { SiteSettings } from '@/types/admin';
import { FAQItem } from '@/data/faqs';
import { DataStoreGetters, STORAGE_KEYS } from './dataStoreGetters';

export class DataStore extends DataStoreGetters {
  static saveProducts(products: Product[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
  }
  static saveDocuments(documents: TrustDocument[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.DOCUMENTS, JSON.stringify(documents));
  }
  static saveEnquiries(enquiries: QuoteEnquiry[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }
  static saveBlogs(blogs: BlogPost[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
  }
  static saveMarkets(markets: ExportDestination[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.MARKETS, JSON.stringify(markets));
  }
  static saveFaqs(faqs: FAQItem[]): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
  }
  static saveSettings(settings: SiteSettings): void {
    if (this.isBrowser()) localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  }
}
