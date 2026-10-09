import { ExportDestination } from '@/types/market';

export const INITIAL_MARKETS: ExportDestination[] = [
  {
    id: 'mkt-1',
    region: 'Middle East',
    country: 'United Arab Emirates (UAE)',
    flagEmoji: '🇦🇪',
    majorPorts: ['Jebel Ali Port, Dubai', 'Mina Khalifa, Abu Dhabi'],
    annualVolumeMT: '45,000 MT',
    popularVarieties: ['1121 Steam Basmati', '1121 Golden Sella', '1509 Steam'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-2',
    region: 'Middle East',
    country: 'Saudi Arabia',
    flagEmoji: '🇸🇦',
    majorPorts: ['Jeddah Islamic Port', 'King Abdulaziz Port, Dammam'],
    annualVolumeMT: '60,000 MT',
    popularVarieties: ['1121 Creamy Sella', '1121 Steam Basmati', 'Traditional Basmati'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-3',
    region: 'Africa',
    country: 'Nigeria',
    flagEmoji: '🇳🇬',
    majorPorts: ['Apapa Port, Lagos', 'Tincan Island Port'],
    annualVolumeMT: '38,000 MT',
    popularVarieties: ['IR64 Parboiled Rice', 'Swarna Parboiled', 'Broken Rice'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-4',
    region: 'Africa',
    country: 'Kenya',
    flagEmoji: '🇰🇪',
    majorPorts: ['Port of Mombasa'],
    annualVolumeMT: '22,000 MT',
    popularVarieties: ['IR64 Parboiled', 'PR11 White Rice', 'Long Grain 5%'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-5',
    region: 'Europe',
    country: 'United Kingdom',
    flagEmoji: '🇬🇧',
    majorPorts: ['Port of Felixstowe', 'London Gateway'],
    annualVolumeMT: '18,000 MT',
    popularVarieties: ['Pure Organic Basmati', '1121 Steam', 'Pusa Basmati'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-6',
    region: 'North America',
    country: 'United States',
    flagEmoji: '🇺🇸',
    majorPorts: ['Port of Newark, NJ', 'Port of Long Beach, CA'],
    annualVolumeMT: '25,000 MT',
    popularVarieties: ['Sona Masoori Raw', '1121 Extra Long Basmati', 'Organic Brown Rice'],
    status: 'Active Shipment Route'
  },
  {
    id: 'mkt-7',
    region: 'Southeast Asia',
    country: 'Malaysia',
    flagEmoji: '🇲🇾',
    majorPorts: ['Port Klang', 'Penang Port'],
    annualVolumeMT: '15,000 MT',
    popularVarieties: ['Ponni Rice', 'Idli Rice', 'Sona Masoori'],
    status: 'Active Shipment Route'
  }
];
