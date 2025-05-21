export type TokenPhase = 'seed' | 'private' | 'public' | 'listing';

export interface PhaseDetails {
  name: string;
  startDate: Date;
  endDate: Date;
  price: number;
  allocation: number;
  totalRaise: number;
  soldAmount: number;
  status: 'upcoming' | 'active' | 'completed';
}

export interface TokenProject {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  description: string;
  websiteUrl: string;
  twitterUrl: string;
  telegramUrl: string;
  discordUrl: string;
  tokenomics: {
    totalSupply: number;
    initialMarketCap: number;
    fullyDilutedValuation: number;
    circulatingSupply?: number;
  };
  phases: Record<TokenPhase, PhaseDetails>;
  tags: string[];
  launchDate: Date;
  chain: 'Solana' | 'Ethereum' | 'BSC';
  featured: boolean;
}
