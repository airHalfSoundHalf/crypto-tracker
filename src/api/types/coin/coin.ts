/**
 *
 * 코인 API 명세 타입
 */

export interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  isNew: boolean;
  isActive: boolean;
  type: string;
  logo: string;
  tags: object;
  team: object;
  description: string;
  message: string;
  openSource: boolean;
  startedAt: string;
  developmentStatus: string;
  hardwareWallet: boolean;
  proofType: string;
  orgStructure: string;
  hashAlgorithm: string;
  links: object;
  linksExtended: object;
  whitepaper: object;
  firstDataAt: string;
  lastDataAt: string;
}

export interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  betaValue: number;
  firstDataAt: string;
  lastUpdated: string;
  quotes: {
    USD: {
      athDate: string;
      athPrice: number;
      marketCap: number;
      marketCapChange24h: number;
      percentChange1h: number;
      percentChange1y: number;
      percentChange6h: number;
      percentChange7d: number;
      percentChange12h: number;
      percentChange15m: number;
      percentChange24h: number;
      percentChange30d: number;
      percentChange30m: number;
      percentCrompriceAth: number;
      price: number;
      volume24h: number;
      volume24hChange24h: number;
    };
  };
}
