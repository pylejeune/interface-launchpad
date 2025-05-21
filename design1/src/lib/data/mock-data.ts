import { TokenProject } from './types';

// Date helpers
const now = new Date();
const dayInMs = 24 * 60 * 60 * 1000;

const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const mockProjects: TokenProject[] = [
  {
    id: 'cosmic-dao',
    name: 'CosmicDAO',
    symbol: 'COSMIC',
    logo: '/api/placeholder',
    description: 'CosmicDAO est une plateforme décentralisée révolutionnaire pour l\'exploration et la gestion de l\'espace numérique.',
    websiteUrl: 'https://cosmicdao.io',
    twitterUrl: 'https://twitter.com/cosmicdao',
    telegramUrl: 'https://t.me/cosmicdao',
    discordUrl: 'https://discord.gg/cosmicdao',
    tokenomics: {
      totalSupply: 1000000000,
      initialMarketCap: 2500000,
      fullyDilutedValuation: 100000000,
      circulatingSupply: 250000000
    },
    phases: {
      seed: {
        name: 'Seed Round',
        startDate: addDays(now, -30),
        endDate: addDays(now, -15),
        price: 0.02,
        allocation: 50000000,
        totalRaise: 1000000,
        soldAmount: 50000000,
        status: 'completed',
      },
      private: {
        name: 'Private Sale',
        startDate: addDays(now, -10),
        endDate: addDays(now, -2),
        price: 0.04,
        allocation: 75000000,
        totalRaise: 3000000,
        soldAmount: 65000000,
        status: 'completed',
      },
      public: {
        name: 'Public Sale',
        startDate: addDays(now, 0),
        endDate: addDays(now, 7),
        price: 0.08,
        allocation: 100000000,
        totalRaise: 8000000,
        soldAmount: 35000000,
        status: 'active',
      },
      listing: {
        name: 'DEX Listing',
        startDate: addDays(now, 10),
        endDate: addDays(now, 10),
        price: 0.10,
        allocation: 0,
        totalRaise: 0,
        soldAmount: 0,
        status: 'upcoming',
      },
    },
    tags: ['DeFi', 'DAO', 'Governance'],
    launchDate: addDays(now, 10),
    chain: 'Solana',
    featured: true,
  },
  {
    id: 'quantum-finance',
    name: 'Quantum Finance',
    symbol: 'QFIN',
    logo: '/api/placeholder',
    description: 'Quantum Finance utilise les algorithmes quantiques pour optimiser les stratégies DeFi et maximiser les rendements.',
    websiteUrl: 'https://quantumfinance.xyz',
    twitterUrl: 'https://twitter.com/quantumfin',
    telegramUrl: 'https://t.me/quantumfinance',
    discordUrl: 'https://discord.gg/quantumfin',
    tokenomics: {
      totalSupply: 500000000,
      initialMarketCap: 5000000,
      fullyDilutedValuation: 50000000,
      circulatingSupply: 100000000
    },
    phases: {
      seed: {
        name: 'Seed Round',
        startDate: addDays(now, -60),
        endDate: addDays(now, -45),
        price: 0.05,
        allocation: 30000000,
        totalRaise: 1500000,
        soldAmount: 30000000,
        status: 'completed',
      },
      private: {
        name: 'Private Sale',
        startDate: addDays(now, -30),
        endDate: addDays(now, -15),
        price: 0.08,
        allocation: 40000000,
        totalRaise: 3200000,
        soldAmount: 40000000,
        status: 'completed',
      },
      public: {
        name: 'Public Sale',
        startDate: addDays(now, 5),
        endDate: addDays(now, 15),
        price: 0.12,
        allocation: 60000000,
        totalRaise: 7200000,
        soldAmount: 0,
        status: 'upcoming',
      },
      listing: {
        name: 'DEX Listing',
        startDate: addDays(now, 20),
        endDate: addDays(now, 20),
        price: 0.15,
        allocation: 0,
        totalRaise: 0,
        soldAmount: 0,
        status: 'upcoming',
      },
    },
    tags: ['DeFi', 'Algorithmic', 'Trading'],
    launchDate: addDays(now, 20),
    chain: 'Ethereum',
    featured: true,
  },
  {
    id: 'metaverse-pioneers',
    name: 'Metaverse Pioneers',
    symbol: 'META',
    logo: '/api/placeholder',
    description: 'Metaverse Pioneers construit le futur des expériences virtuelles immersives avec des actifs numériques uniques.',
    websiteUrl: 'https://metaversepioneers.world',
    twitterUrl: 'https://twitter.com/metapioneers',
    telegramUrl: 'https://t.me/metapioneers',
    discordUrl: 'https://discord.gg/metapioneers',
    tokenomics: {
      totalSupply: 2000000000,
      initialMarketCap: 3000000,
      fullyDilutedValuation: 200000000,
      circulatingSupply: 150000000
    },
    phases: {
      seed: {
        name: 'Seed Round',
        startDate: addDays(now, -45),
        endDate: addDays(now, -30),
        price: 0.01,
        allocation: 100000000,
        totalRaise: 1000000,
        soldAmount: 100000000,
        status: 'completed',
      },
      private: {
        name: 'Private Sale',
        startDate: addDays(now, -25),
        endDate: addDays(now, -10),
        price: 0.02,
        allocation: 150000000,
        totalRaise: 3000000,
        soldAmount: 120000000,
        status: 'completed',
      },
      public: {
        name: 'Public Sale',
        startDate: addDays(now, -5),
        endDate: addDays(now, 5),
        price: 0.03,
        allocation: 200000000,
        totalRaise: 6000000,
        soldAmount: 80000000,
        status: 'active',
      },
      listing: {
        name: 'DEX Listing',
        startDate: addDays(now, 10),
        endDate: addDays(now, 10),
        price: 0.04,
        allocation: 0,
        totalRaise: 0,
        soldAmount: 0,
        status: 'upcoming',
      },
    },
    tags: ['Metaverse', 'Gaming', 'NFT'],
    launchDate: addDays(now, 10),
    chain: 'Solana',
    featured: false,
  },
  {
    id: 'defi-yield',
    name: 'DeFi Yield Protocol',
    symbol: 'DYP',
    logo: '/api/placeholder',
    description: 'DeFi Yield Protocol permet aux utilisateurs de maximiser leurs rendements grâce à des stratégies de farming innovantes et sécurisées.',
    websiteUrl: 'https://defiyield.io',
    twitterUrl: 'https://twitter.com/defiyield',
    telegramUrl: 'https://t.me/defiyield',
    discordUrl: 'https://discord.gg/defiyield',
    tokenomics: {
      totalSupply: 800000000,
      initialMarketCap: 1800000,
      fullyDilutedValuation: 80000000,
      circulatingSupply: 180000000
    },
    phases: {
      seed: {
        name: 'Seed Round',
        startDate: addDays(now, -50),
        endDate: addDays(now, -35),
        price: 0.015,
        allocation: 40000000,
        totalRaise: 600000,
        soldAmount: 40000000,
        status: 'completed',
      },
      private: {
        name: 'Private Sale',
        startDate: addDays(now, -30),
        endDate: addDays(now, -20),
        price: 0.025,
        allocation: 60000000,
        totalRaise: 1500000,
        soldAmount: 60000000,
        status: 'completed',
      },
      public: {
        name: 'Public Sale',
        startDate: addDays(now, 3),
        endDate: addDays(now, 10),
        price: 0.035,
        allocation: 80000000,
        totalRaise: 2800000,
        soldAmount: 0,
        status: 'upcoming',
      },
      listing: {
        name: 'DEX Listing',
        startDate: addDays(now, 12),
        endDate: addDays(now, 12),
        price: 0.045,
        allocation: 0,
        totalRaise: 0,
        soldAmount: 0,
        status: 'upcoming',
      },
    },
    tags: ['DeFi', 'Yield Farming', 'Staking'],
    launchDate: addDays(now, 12),
    chain: 'BSC',
    featured: false,
  }
];

export const getProjectById = (id: string): TokenProject | undefined => {
  return mockProjects.find(project => project.id === id);
};

export const getFeaturedProjects = (): TokenProject[] => {
  return mockProjects.filter(project => project.featured);
};

export const getActiveProjects = (): TokenProject[] => {
  return mockProjects.filter(project => 
    project.phases.public.status === 'active' || 
    project.phases.private.status === 'active'
  );
};

export const getUpcomingProjects = (): TokenProject[] => {
  return mockProjects.filter(project => 
    project.phases.public.status === 'upcoming' && 
    project.phases.private.status !== 'active'
  );
};
