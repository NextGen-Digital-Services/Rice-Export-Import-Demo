export type RiceCategory = 'Basmati' | 'Non-Basmati' | 'Specialty & Organic';

export type BasmatiVariety =
  | '1121 Steam'
  | '1121 Golden Sella'
  | '1121 White Sella'
  | '1509 Steam'
  | '1509 Sella'
  | '1718 Steam'
  | 'Pusa Basmati'
  | 'Traditional Raw Basmati';

export type NonBasmatiVariety =
  | 'IR64 Parboiled'
  | 'Sona Masoori Raw'
  | 'Swarna Parboiled'
  | 'PR11 / PR14 Raw'
  | 'Long Grain White Rice 5%'
  | 'Broken Rice (25% / 100%)'
  | 'Ponni Rice'
  | 'Idli Rice';

export interface ProductSpec {
  grainLength: string; // e.g. "8.35 mm"
  aroma: string; // e.g. "Exquisite & Intense"
  moisture: string; // e.g. "Max 12.5%"
  purity: string; // e.g. "95% Minimum"
  brokenPercentage: string; // e.g. "Max 1.0%"
  admixture: string; // e.g. "Max 5%"
  cropYear: string; // e.g. "Current Year / Aged 1-2 Yrs"
  hsCode: string; // e.g. "1006.30.20"
  origin: string; // e.g. "Punjab & Haryana, India"
  portOfLoading: string; // e.g. "Mundra Port / Nhava Sheva Port"
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: RiceCategory;
  variety: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  galleryImages?: string[];
  specs: ProductSpec;
  packagingOptions: string[]; // ["5kg Jute", "10kg Non-woven", "25kg PP Bag", "50kg PP Bag", "Private Label"]
  moq: string; // "24 MT (1x20ft Container)"
  isFeatured: boolean;
  status: 'Available' | 'Limited Stock' | 'Out of Stock';
  tags: string[];
}
