export interface ExportDestination {
  id: string;
  region: 'Middle East' | 'Africa' | 'Europe' | 'North America' | 'Southeast Asia';
  country: string;
  flagEmoji: string;
  majorPorts: string[];
  annualVolumeMT: string;
  popularVarieties: string[];
  status: 'Active Shipment Route' | 'Expanding Market';
}
