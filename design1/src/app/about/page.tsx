import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'À propos - CryptoPad',
  description: 'Découvrez CryptoPad, la plateforme de lancement de tokens crypto avec plusieurs phases pour maximiser le succès de votre projet.',
};

export default function AboutPage() {
  return (
    <div className="container py-10 space-y-16">
      {/* Hero section */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold lg:text-5xl">
          À propos de <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">CryptoPad</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Une plateforme de lancement innovante pour les tokens crypto avec une approche multi-phases pour maximiser le succès de votre projet
        </p>
      </section>

      {/* Notre mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative h-[350px] w-full rounded-xl overflow-hidden order-2 md:order-1">
          <Image 
            src="/images/mission.jpg" 
            alt="Notre mission" 
            fill 
            className="object-cover" 
          />
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl font-bold">Notre Mission</h2>
          <p className="text-lg text-muted-foreground">
            CryptoPad a été fondé avec une vision claire : démocratiser l'accès au financement pour les projets blockchain innovants tout en offrant aux investisseurs une plateforme sécurisée et transparente.
          </p>
          <p className="text-lg text-muted-foreground">
            Notre modèle unique de lancement par phases permet aux projets de construire progressivement leur communauté et d'ajuster leur stratégie à chaque étape, maximisant ainsi leurs chances de succès à long terme.
          </p>
        </div>
      </section>

      {/* Nos avantages */}
      <section className="bg-muted/30 py-12 rounded-xl">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 text-center">Nos Avantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Structure Multi-Phases</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Notre approche par phases (seed, privée, publique) permet une distribution équitable des tokens et une valorisation progressive du projet.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sécurité Maximale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous les projets sont minutieusement vérifiés, les contrats audités et l'équipe soumise à un KYC complet pour garantir la sécurité des investisseurs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Support Complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous ne sommes pas qu'une plateforme technique - nous offrons un accompagnement marketing, stratégique et communautaire à chaque projet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* L'équipe */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Notre Équipe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
              <Image 
                src="/images/team1.jpg" 
                alt="Pierre Martin" 
                width={160}
                height={160}
                className="object-cover" 
              />
            </div>
            <h3 className="text-xl font-semibold">Pierre Martin</h3>
            <p className="text-muted-foreground">CEO & Co-fondateur</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
              <Image 
                src="/images/team2.jpg" 
                alt="Sophie Dubois" 
                width={160}
                height={160}
                className="object-cover" 
              />
            </div>
            <h3 className="text-xl font-semibold">Sophie Dubois</h3>
            <p className="text-muted-foreground">CTO</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
              <Image 
                src="/images/team3.jpg" 
                alt="Alexandre Chen" 
                width={160}
                height={160}
                className="object-cover" 
              />
            </div>
            <h3 className="text-xl font-semibold">Alexandre Chen</h3>
            <p className="text-muted-foreground">Lead Blockchain Engineer</p>
          </div>
          
          <div className="text-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-muted">
              <Image 
                src="/images/team4.jpg" 
                alt="Léa Moreau" 
                width={160}
                height={160}
                className="object-cover" 
              />
            </div>
            <h3 className="text-xl font-semibold">Léa Moreau</h3>
            <p className="text-muted-foreground">Marketing Director</p>
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Nos Partenaires</h2>
        
        <div className="flex flex-wrap justify-center gap-10 items-center">
          <div className="bg-muted rounded-lg p-4 w-40 h-20 flex items-center justify-center text-center">
            Partner 1
          </div>
          <div className="bg-muted rounded-lg p-4 w-40 h-20 flex items-center justify-center text-center">
            Partner 2
          </div>
          <div className="bg-muted rounded-lg p-4 w-40 h-20 flex items-center justify-center text-center">
            Partner 3
          </div>
          <div className="bg-muted rounded-lg p-4 w-40 h-20 flex items-center justify-center text-center">
            Partner 4
          </div>
          <div className="bg-muted rounded-lg p-4 w-40 h-20 flex items-center justify-center text-center">
            Partner 5
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-10 rounded-xl text-center space-y-6">
        <h2 className="text-3xl font-bold">Prêt à rejoindre l'aventure?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Que vous soyez un investisseur à la recherche des meilleurs projets ou un entrepreneur souhaitant lancer son token, CryptoPad est là pour vous.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" size="lg" asChild>
            <Link href="/projects">Explorer les projets</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/launch">Lancer votre token</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
