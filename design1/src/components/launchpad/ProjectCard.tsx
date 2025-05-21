import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatCurrency, calculateProgress, formatDate } from '@/lib/utils';
import { TokenProject } from '@/lib/data/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: TokenProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Determine the active phase or the next upcoming one
  const getActiveOrNextPhase = () => {
    const phases = ['public', 'private', 'seed', 'listing'] as const;
    
    // Check for active phase first
    for (const phase of phases) {
      if (project.phases[phase].status === 'active') {
        return { phase, details: project.phases[phase] };
      }
    }
    
    // If no active phase, get the next upcoming one
    for (const phase of phases) {
      if (project.phases[phase].status === 'upcoming') {
        return { phase, details: project.phases[phase] };
      }
    }
    
    // If all phases are completed, return the listing phase
    return { phase: 'listing' as const, details: project.phases.listing };
  };

  const { phase, details: currentPhase } = getActiveOrNextPhase();
  const progress = calculateProgress(
    currentPhase.soldAmount, 
    currentPhase.allocation
  );

  const isLive = currentPhase.status === 'active';
  const startDateFormatted = formatDate(currentPhase.startDate);

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg bg-background">
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
              <Image 
                src={project.logo || '/placeholder.svg'} 
                alt={project.name} 
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-lg font-bold">{project.name}</CardTitle>
              <CardDescription className="text-xs">${project.symbol}</CardDescription>
            </div>
          </div>
          <div className={`px-2 py-1 text-xs rounded-full ${
            isLive ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {isLive ? 'Live' : startDateFormatted}
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-0.5 bg-muted rounded-full"
            >
              {tag}
            </span>
          ))}
          <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-800 rounded-full">
            {project.chain}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground line-clamp-2 h-10 mb-3">
          {project.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm mb-1">
            <span>{currentPhase.name}</span>
            <span className="font-medium">
              {formatCurrency(currentPhase.soldAmount, '', 0)} / {formatCurrency(currentPhase.allocation, '', 0)}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="text-muted-foreground">Prix</p>
              <p className="font-medium">{formatCurrency(currentPhase.price, 'USD', 3)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Levée totale</p>
              <p className="font-medium">{formatCurrency(currentPhase.totalRaise, 'USD', 0)}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="gradient"
          className="w-full"
          asChild
        >
          <Link href={`/projects/${project.id}`}>
            {isLive ? 'Participer maintenant' : 'Voir le projet'}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
