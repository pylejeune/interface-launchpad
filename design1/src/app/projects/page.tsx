import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/launchpad/ProjectCard";
import { mockProjects } from "@/lib/data/mock-data";

export const metadata = {
  title: 'Tous les Projets - CryptoPad',
  description: 'Découvrez tous les projets de tokens crypto disponibles sur notre plateforme de launchpad.',
};

export default function ProjectsPage() {
  const allProjects = mockProjects;
  const activeProjects = mockProjects.filter(p => 
    p.phases.public.status === 'active' || p.phases.private.status === 'active'
  );
  const upcomingProjects = mockProjects.filter(p => 
    p.phases.public.status === 'upcoming' && p.phases.private.status !== 'active'
  );
  const completedProjects = mockProjects.filter(p => 
    p.phases.public.status === 'completed' && p.phases.listing.status === 'completed'
  );

  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Explorer les Projets</h1>
        <p className="text-xl text-muted-foreground">
          Découvrez les derniers tokens crypto disponibles sur notre plateforme de launchpad
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="active">En cours</TabsTrigger>
          <TabsTrigger value="upcoming">À venir</TabsTrigger>
          <TabsTrigger value="completed">Terminés</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {allProjects.length === 0 && (
              <p className="col-span-3 text-center text-muted-foreground py-12">
                Aucun projet disponible pour le moment.
              </p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="active" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {activeProjects.length === 0 && (
              <p className="col-span-3 text-center text-muted-foreground py-12">
                Aucun projet actif pour le moment.
              </p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {upcomingProjects.length === 0 && (
              <p className="col-span-3 text-center text-muted-foreground py-12">
                Aucun projet à venir pour le moment.
              </p>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {completedProjects.length === 0 && (
              <p className="col-span-3 text-center text-muted-foreground py-12">
                Aucun projet terminé pour le moment.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
