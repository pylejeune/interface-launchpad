import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata = {
  title: 'Lancer un Token - CryptoPad',
  description: 'Créez et lancez votre propre token crypto avec différentes phases de vente sur notre plateforme de launchpad.',
};

export default function LaunchProjectPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold mb-4">
          Lancez votre <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Token Crypto</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Créez et lancez votre propre token avec une structure de vente en plusieurs phases
        </p>
      </div>

      <Tabs defaultValue="requirements" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="requirements">Prérequis</TabsTrigger>
          <TabsTrigger value="process">Processus</TabsTrigger>
          <TabsTrigger value="pricing">Tarification</TabsTrigger>
        </TabsList>
        
        <TabsContent value="requirements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prérequis pour lancer votre token</CardTitle>
              <CardDescription>Voici ce dont vous aurez besoin avant de soumettre votre projet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Documentation du projet</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Whitepaper détaillé</li>
                    <li>Roadmap claire avec jalons</li>
                    <li>Tokenomics bien définis</li>
                    <li>Plan d'utilisation des fonds</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Exigences techniques</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Contrat intelligent audité</li>
                    <li>Code source disponible</li>
                    <li>Test de sécurité validé</li>
                    <li>KYC complet de l'équipe</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Présence marketing</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Site web fonctionnel</li>
                    <li>Canaux sociaux actifs</li>
                    <li>Communauté établie</li>
                    <li>Stratégie marketing</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Équipe</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Profils vérifiables des fondateurs</li>
                    <li>Expérience blockchain documentée</li>
                    <li>Conseillers pertinents</li>
                    <li>Structure claire des rôles</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="process" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Processus de lancement</CardTitle>
              <CardDescription>Les étapes pour lancer votre token sur notre plateforme</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="relative pl-10 pb-8 border-l-2 border-muted">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    1
                  </div>
                  <h3 className="text-lg font-semibold">Soumission du projet</h3>
                  <p className="text-muted-foreground">
                    Soumettez votre projet avec tous les documents requis pour examen initial.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-8 border-l-2 border-muted">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    2
                  </div>
                  <h3 className="text-lg font-semibold">Vérification et audit</h3>
                  <p className="text-muted-foreground">
                    Notre équipe examine votre projet, vérifie le code et suggère des améliorations si nécessaire.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-8 border-l-2 border-muted">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    3
                  </div>
                  <h3 className="text-lg font-semibold">Configuration du launchpad</h3>
                  <p className="text-muted-foreground">
                    Configuration des phases de vente, allocation des tokens et paramètres du smart contract.
                  </p>
                </div>
                
                <div className="relative pl-10 pb-8 border-l-2 border-muted">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    4
                  </div>
                  <h3 className="text-lg font-semibold">Marketing pré-lancement</h3>
                  <p className="text-muted-foreground">
                    Promotion de votre projet auprès de notre communauté et mise en place des stratégies marketing.
                  </p>
                </div>
                
                <div className="relative pl-10 border-l-2 border-muted">
                  <div className="absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white">
                    5
                  </div>
                  <h3 className="text-lg font-semibold">Lancement et suivi</h3>
                  <p className="text-muted-foreground">
                    Démarrage des phases de vente selon le calendrier établi et suivi post-lancement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="pricing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tarification et frais</CardTitle>
              <CardDescription>Options tarifaires pour le lancement de votre token</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-purple-400 transition-all">
                  <CardHeader>
                    <CardTitle className="text-center">Package Standard</CardTitle>
                    <CardDescription className="text-center text-xl font-bold">
                      2% des fonds levés
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Listing sur le launchpad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Configuration de 2 phases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Support technique</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>Marketing avancé</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">✗</span>
                        <span>Placement prioritaire</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Choisir ce forfait</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-500 relative">
                  <div className="absolute top-0 right-0 bg-purple-500 text-white px-2 py-1 text-xs rounded-bl-lg">
                    Populaire
                  </div>
                  <CardHeader>
                    <CardTitle className="text-center">Package Premium</CardTitle>
                    <CardDescription className="text-center text-xl font-bold">
                      3% des fonds levés
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Listing sur le launchpad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Configuration de 3 phases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Support technique prioritaire</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Marketing de base</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Mise en avant dans la page d'accueil</span>
                      </li>
                    </ul>
                    <Button variant="gradient" className="w-full">Choisir ce forfait</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 hover:border-purple-400 transition-all">
                  <CardHeader>
                    <CardTitle className="text-center">Package Entreprise</CardTitle>
                    <CardDescription className="text-center text-xl font-bold">
                      5% des fonds levés
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Listing sur le launchpad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Configuration illimitée de phases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Support technique 24/7</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Marketing complet & influenceurs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Placement vedette prioritaire</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full">Contacter le service</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center mt-12 space-y-6 text-center">
        <h2 className="text-2xl font-bold">Prêt à lancer votre token ?</h2>
        <p className="text-muted-foreground max-w-2xl">
          Notre équipe d'experts vous accompagnera tout au long du processus pour assurer le succès de votre lancement.
        </p>
        <Button size="lg" variant="gradient" asChild>
          <Link href="/launch/apply">
            Soumettre votre projet
          </Link>
        </Button>
      </div>
    </div>
  );
}
