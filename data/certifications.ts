export interface CertificationItem {
  id: string;
  name: string;
  code: string;
  issuedBy: string;
  badgeColor: string;
  description: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'APEDA Registration',
    code: 'RCMC / APEDA / 2022',
    issuedBy: 'Ministry of Commerce & Industry, Govt of India',
    badgeColor: 'gold',
    description: 'Mandatory export accreditation confirming official authorization for processed agricultural food trade.'
  },
  {
    id: 'cert-2',
    name: 'FSSAI Central Licence',
    code: 'FSSAI-1002100054321',
    issuedBy: 'Food Safety Standards Authority of India',
    badgeColor: 'basil',
    description: 'Comprehensive food safety compliance covering hygienic grain handling, milling, and container packing.'
  },
  {
    id: 'cert-3',
    name: 'ISO 22000:2018',
    code: 'ISO-22000-FSMS',
    issuedBy: 'TÜV SÜD South Asia',
    badgeColor: 'gold',
    description: 'International benchmark certification for food safety management system excellence across all export workflows.'
  },
  {
    id: 'cert-4',
    name: 'HACCP Standard',
    code: 'HACCP-COMPLIANT-2026',
    issuedBy: 'Bureau Veritas',
    badgeColor: 'basil',
    description: 'Rigorous hazard analysis and critical control point execution preventing chemical, biological, or physical impurities.'
  },
  {
    id: 'cert-5',
    name: 'DGFT Importer Exporter Code',
    code: 'IEC-0321098765',
    issuedBy: 'Directorate General of Foreign Trade',
    badgeColor: 'terracotta',
    description: 'Official customs and trade license enabling global shipment clearances across all international seaports.'
  }
];
