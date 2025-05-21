import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/launchpad/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getActiveProjects, getFeaturedProjects, getUpcomingProjects } from "@/lib/data/mock-data";

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const activeProjects = getActiveProjects();
  const upcomingProjects = getUpcomingProjects();

  return (
    <div className="space-y-16 py-10">
      {/* Hero section */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold lg:text-5xl">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Lancez</span> votre prochain token crypto
            </h1>
            <p className="text-xl text-muted-foreground">
              Plateforme de lancement sécurisée avec plusieurs phases pour vos tokens. Découvrez les projets les plus prometteurs du marché crypto.  
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/projects">Explorer les projets</Link>
              </Button>
              <Button variant="outline" size="lg">
                Lancer votre token
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden hidden md:block">
            <Image 
              src="/images/hero-image.jpg" 
              alt="Launchpad Crypto" 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured projects section */}
      <section className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Projets en vedette</h2>
            <p className="text-muted-foreground">Les tokens les plus prometteurs sélectionnés par notre équipe</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/projects">Voir tous les projets</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Projects tabs section */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8">Explorer les projets</h2>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="active">En cours</TabsTrigger>
            <TabsTrigger value="upcoming">À venir</TabsTrigger>
          </TabsList>
          
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
        </Tabs>
      </section>

      {/* How it works section */}
      <section className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Comment ça marche</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-6 text-center space-y-4">
            <div className="bg-purple-100 text-purple-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold">Découvrez les projets</h3>
            <p className="text-muted-foreground">Explorez les tokens en phase de lancement et analysez leurs potentiels</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center space-y-4">
            <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold">Choisissez votre phase</h3>
            <p className="text-muted-foreground">Seed, privée, publique - participez à la phase qui vous convient le mieux</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center space-y-4">
            <div className="bg-indigo-100 text-indigo-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold">Investissez en toute sécurité</h3>
            <p className="text-muted-foreground">Complétez votre achat et suivez le lancement du token jusqu'au listing</p>
          </div>
        </div>
      </section>
    </div>
  );
}
