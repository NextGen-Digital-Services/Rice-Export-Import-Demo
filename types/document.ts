export type DocumentCategory =
  | 'Company Registration'
  | 'Export Licences'
  | 'Quality & Food Safety'
  | 'Financial & Banking'
  | 'Product Catalogues'
  | 'Lab Test Reports';

export interface TrustDocument {
  id: string;
  title: string;
  category: DocumentCategory;
  description: string;
  fileType: 'PDF' | 'IMAGE' | 'DOCX';
  fileSize: string;
  fileUrl: string; // Blob URL, base64 data, or remote path
  issuedBy: string; // e.g., "APEDA", "FSSAI", "ISO 22000"
  issueDate: string;
  expiryDate?: string;
  isPublic: boolean; // Show on public Trust Center page
  uploadedAt: string;
}
