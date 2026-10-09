'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { TrustDocument } from '@/types/document';
import { QuoteEnquiry } from '@/types/enquiry';
import { BlogPost } from '@/types/blog';
import { ExportDestination } from '@/types/market';
import { SiteSettings } from '@/types/admin';
import { DataStore } from '@/lib/services/dataStore';
import { FAQItem } from '@/data/faqs';
import { DataContextType } from './types';

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [documents, setDocuments] = useState<TrustDocument[]>([]);
  const [enquiries, setEnquiries] = useState<QuoteEnquiry[]>([]);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [markets, setMarkets] = useState<ExportDestination[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [settings, setSettings] = useState<SiteSettings>(DataStore.getSettings());

  useEffect(() => {
    setProducts(DataStore.getProducts());
    setDocuments(DataStore.getDocuments());
    setEnquiries(DataStore.getEnquiries());
    setBlogs(DataStore.getBlogs());
    setMarkets(DataStore.getMarkets());
    setFaqs(DataStore.getFaqs());
    setSettings(DataStore.getSettings());
  }, []);

  const addProduct = (p: Product) => {
    const updated = [p, ...products]; setProducts(updated); DataStore.saveProducts(updated);
  };
  const updateProduct = (p: Product) => {
    const updated = products.map((item) => (item.id === p.id ? p : item)); setProducts(updated); DataStore.saveProducts(updated);
  };
  const deleteProduct = (id: string) => {
    const updated = products.filter((p) => p.id !== id); setProducts(updated); DataStore.saveProducts(updated);
  };
  const addDocument = (d: TrustDocument) => {
    const updated = [d, ...documents]; setDocuments(updated); DataStore.saveDocuments(updated);
  };
  const toggleDocumentPublic = (id: string) => {
    const updated = documents.map((d) => (d.id === id ? { ...d, isPublic: !d.isPublic } : d)); setDocuments(updated); DataStore.saveDocuments(updated);
  };
  const deleteDocument = (id: string) => {
    const updated = documents.filter((d) => d.id !== id); setDocuments(updated); DataStore.saveDocuments(updated);
  };
  const addEnquiry = (raw: Omit<QuoteEnquiry, 'id' | 'createdAt' | 'status'>) => {
    const newEnquiry: QuoteEnquiry = { ...raw, id: 'enq-' + Date.now(), status: 'New', createdAt: new Date().toISOString() };
    const updated = [newEnquiry, ...enquiries]; setEnquiries(updated); DataStore.saveEnquiries(updated);
  };
  const updateEnquiryStatus = (id: string, status: QuoteEnquiry['status'], notes?: string) => {
    const updated = enquiries.map((e) => (e.id === id ? { ...e, status, notes: notes ?? e.notes } : e)); setEnquiries(updated); DataStore.saveEnquiries(updated);
  };
  const addBlog = (b: BlogPost) => {
    const updated = [b, ...blogs]; setBlogs(updated); DataStore.saveBlogs(updated);
  };
  const updateBlog = (b: BlogPost) => {
    const updated = blogs.map((item) => (item.id === b.id ? b : item)); setBlogs(updated); DataStore.saveBlogs(updated);
  };
  const deleteBlog = (id: string) => {
    const updated = blogs.filter((b) => b.id !== id); setBlogs(updated); DataStore.saveBlogs(updated);
  };
  const updateSettings = (s: SiteSettings) => {
    setSettings(s); DataStore.saveSettings(s);
  };

  return (
    <DataContext.Provider
      value={{
        products, documents, enquiries, blogs, markets, faqs, settings,
        addProduct, updateProduct, deleteProduct, addDocument, toggleDocumentPublic, deleteDocument,
        addEnquiry, updateEnquiryStatus, addBlog, updateBlog, deleteBlog, updateSettings
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
