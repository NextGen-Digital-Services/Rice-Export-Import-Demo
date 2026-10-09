export type EnquiryStatus = 'New' | 'Contacted' | 'Quoted' | 'Won' | 'Lost';
export type IncotermOption = 'FOB' | 'CIF' | 'CFR' | 'EXW';

export interface QuoteEnquiry {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  productSlug?: string;
  productName: string;
  quantityMT: number;
  packagingPreference: string;
  incoterm: IncotermOption;
  destinationPort: string;
  additionalMessage: string;
  status: EnquiryStatus;
  createdAt: string;
  notes?: string;
}
