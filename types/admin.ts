export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  avatarUrl: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  whatsappNumber: string;
  contactEmail: string;
  contactPhone: string;
  headquartersAddress: string;
  exportPorts: string[];
  certificationsList: string[];
  socialLinks: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
}
