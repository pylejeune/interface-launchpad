import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import PhaseCard from '@/components/launchpad/PhaseCard';
import { getProjectById } from '@/lib/data/mock-data';
import { formatCurrency, formatDate } from '@/lib/utils';
import { TokenPhase } from '@/lib/data/types';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    return {
      title: 'Projet non trouvé - CryptoPad',
      description: 'Ce projet n\'existe pas sur notre plateforme.',
    };
  }
  
  return {
    title: `${project.name} (${project.symbol}) - CryptoPad`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    notFound();
  }
  
  // Déterminer la phase active
  const getActivePhase = (): TokenPhase | null => {
    if (project.phases.public.status === 'active') return 'public';
    if (project.phases.private.status === 'active') return 'private';
    if (project.phases.seed.status === 'active') return 'seed';
    return null;
  };
  
  const activePhase = getActivePhase();
  
  const phaseOrder: TokenPhase[] = ['seed', 'private', 'public', 'listing'];
  
  return (
    <div className="container py-10">
      {/* Bouton de retour */}
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/projects">
            ← Retour aux projets
          </Link>
        </Button>
      </div>
      
      {/* En-tête du projet */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted">
              <Image 
                src={project.logo || '/placeholder.svg'} 
                alt={project.name} 
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <p className="text-xl text-muted-foreground">${project.symbol}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-muted rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
              {project.chain}
            </span>
          </div>
          
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-lg">{project.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <Button asChild variant="outline" size="sm">
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                Site web
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={project.twitterUrl} target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={project.telegramUrl} target="_blank" rel="noopener noreferrer">
                Telegram
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={project.discordUrl} target="_blank" rel="noopener noreferrer">
                Discord
              </a>
            </Button>
          </div>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Supply Total</p>
                  <p className="font-medium">{formatCurrency(project.tokenomics.totalSupply, '', 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Circulating Supply</p>
                  <p className="font-medium">{formatCurrency(project.tokenomics.circulatingSupply || 0, '', 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Market Cap Initial</p>
                  <p className="font-medium">{formatCurrency(project.tokenomics.initialMarketCap, 'USD', 0)}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">FDV</p>
                  <p className="font-medium">{formatCurrency(project.tokenomics.fullyDilutedValuation, 'USD', 0)}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Date de listing</p>
                <p className="font-medium">{formatDate(project.launchDate)}</p>
              </div>
              
              {activePhase && (
                <Button variant="gradient" className="w-full mt-4">
                  Participer à la vente {project.phases[activePhase].name}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Phases du projet */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Phases de lancement</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phaseOrder.map((phase) => (
            <PhaseCard 
              key={phase} 
              phase={phase} 
              details={project.phases[phase]} 
              isActive={phase === activePhase}
            />
          ))}
        </div>
      </div>
      
      {/* Roadmap ou informations supplémentaires */}
      <div>
        <h2 className="text-2xl font-bold mb-6">À propos du projet</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Vision & Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {project.name} vise à révolutionner le secteur {project.tags[0].toLowerCase()} en offrant une solution innovante basée sur la blockchain {project.chain}. 
                Notre équipe d'experts travaille pour créer un écosystème durable et compétitif.
              </p>
              
              <div className="space-y-6">
                <div className="relative pl-6 pb-6 border-l-2 border-purple-500">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                  <h3 className="font-bold">Phase 1: Développement initial</h3>
                  <p className="text-muted-foreground">Conception de la plateforme et développement des contrats intelligents</p>
                </div>
                
                <div className="relative pl-6 pb-6 border-l-2 border-blue-500">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <h3 className="font-bold">Phase 2: Lancement et adoption</h3>
                  <p className="text-muted-foreground">Lancement de la plateforme et premières intégrations partenaires</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-indigo-500">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                  <h3 className="font-bold">Phase 3: Expansion</h3>
                  <p className="text-muted-foreground">Expansion vers de nouveaux marchés et lancement de fonctionnalités avancées</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Équipe & Partenaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Équipe fondatrice</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-muted rounded-full"></div>
                      <div>
                        <p className="font-medium">Jean Dupont</p>
                        <p className="text-xs text-muted-foreground">CEO & Fondateur</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-muted rounded-full"></div>
                      <div>
                        <p className="font-medium">Marie Martin</p>
                        <p className="text-xs text-muted-foreground">CTO</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Partenaires stratégiques</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-muted rounded-lg p-2 w-32 h-12 flex items-center justify-center">
                      Partner 1
                    </div>
                    <div className="bg-muted rounded-lg p-2 w-32 h-12 flex items-center justify-center">
                      Partner 2
                    </div>
                    <div className="bg-muted rounded-lg p-2 w-32 h-12 flex items-center justify-center">
                      Partner 3
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
