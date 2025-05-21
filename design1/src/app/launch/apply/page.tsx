import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const metadata = {
  title: 'Soumettre un Projet - CryptoPad',
  description: 'Formulaire de soumission pour lancer votre propre token crypto sur notre plateforme de launchpad.',
};

export default function ApplyPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="max-w-3xl mx-auto">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/launch">
            ← Retour
          </Link>
        </Button>
        
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold">
            Soumettre votre <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">Projet</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Complétez le formulaire ci-dessous pour soumettre votre projet de token crypto à notre plateforme
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Informations du projet</CardTitle>
            <CardDescription>Fournissez les détails essentiels concernant votre projet</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-8">
              {/* Informations de base */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informations de base</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="project-name" className="text-sm font-medium">
                      Nom du projet *
                    </label>
                    <Input 
                      id="project-name" 
                      placeholder="Nom de votre projet" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="token-symbol" className="text-sm font-medium">
                      Symbole du token *
                    </label>
                    <Input 
                      id="token-symbol" 
                      placeholder="Par ex. BTC, ETH" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description du projet *
                  </label>
                  <Textarea 
                    id="description" 
                    placeholder="Décrivez votre projet en détail (200-500 mots)" 
                    required 
                    rows={5}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">
                      Catégorie *
                    </label>
                    <select 
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="" disabled selected>Sélectionner une catégorie</option>
                      <option value="defi">DeFi</option>
                      <option value="nft">NFT</option>
                      <option value="gaming">Gaming</option>
                      <option value="metaverse">Metaverse</option>
                      <option value="dao">DAO</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="blockchain" className="text-sm font-medium">
                      Blockchain *
                    </label>
                    <select 
                      id="blockchain"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="" disabled selected>Sélectionner une blockchain</option>
                      <option value="ethereum">Ethereum</option>
                      <option value="solana">Solana</option>
                      <option value="bsc">BSC</option>
                      <option value="avalanche">Avalanche</option>
                      <option value="polygon">Polygon</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Tokenomics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tokenomics</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="total-supply" className="text-sm font-medium">
                      Supply Total *
                    </label>
                    <Input 
                      id="total-supply" 
                      type="number" 
                      placeholder="Ex: 1000000000" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="initial-price" className="text-sm font-medium">
                      Prix Initial (USD) *
                    </label>
                    <Input 
                      id="initial-price" 
                      type="number" 
                      step="0.0000001"
                      placeholder="Ex: 0.01" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="seed-allocation" className="text-sm font-medium">
                      Allocation Seed (%)
                    </label>
                    <Input 
                      id="seed-allocation" 
                      type="number" 
                      placeholder="Ex: 10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="private-allocation" className="text-sm font-medium">
                      Allocation Privée (%)
                    </label>
                    <Input 
                      id="private-allocation" 
                      type="number" 
                      placeholder="Ex: 15" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="public-allocation" className="text-sm font-medium">
                      Allocation Publique (%)
                    </label>
                    <Input 
                      id="public-allocation" 
                      type="number" 
                      placeholder="Ex: 20" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="tokenomics-details" className="text-sm font-medium">
                    Détails des Tokenomics
                  </label>
                  <Textarea 
                    id="tokenomics-details" 
                    placeholder="Décrivez en détail la distribution des tokens, vesting, etc." 
                    rows={4}
                  />
                </div>
              </div>
              
              {/* Liens et contacts */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Liens et contacts</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Site web *
                    </label>
                    <Input 
                      id="website" 
                      type="url" 
                      placeholder="https://votre-site.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="whitepaper" className="text-sm font-medium">
                      Lien vers le Whitepaper *
                    </label>
                    <Input 
                      id="whitepaper" 
                      type="url" 
                      placeholder="https://lien-vers-votre-whitepaper.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="twitter" className="text-sm font-medium">
                      Twitter
                    </label>
                    <Input 
                      id="twitter" 
                      placeholder="@votre_compte" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telegram" className="text-sm font-medium">
                      Telegram
                    </label>
                    <Input 
                      id="telegram" 
                      placeholder="t.me/votre_groupe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="discord" className="text-sm font-medium">
                      Discord
                    </label>
                    <Input 
                      id="discord" 
                      placeholder="discord.gg/votre-serveur" 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-medium">
                      Nom du contact principal *
                    </label>
                    <Input 
                      id="contact-name" 
                      placeholder="Prénom Nom" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-medium">
                      Email de contact *
                    </label>
                    <Input 
                      id="contact-email" 
                      type="email"
                      placeholder="vous@exemple.com" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              {/* Roadmap */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Roadmap & Planning</h3>
                
                <div className="space-y-2">
                  <label htmlFor="roadmap" className="text-sm font-medium">
                    Roadmap du projet *
                  </label>
                  <Textarea 
                    id="roadmap" 
                    placeholder="Détaillez les étapes clés de votre projet et le calendrier prévu" 
                    required 
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="launch-date" className="text-sm font-medium">
                      Date de lancement souhaitée
                    </label>
                    <Input 
                      id="launch-date" 
                      type="date"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="funding-target" className="text-sm font-medium">
                      Objectif de financement (USD) *
                    </label>
                    <Input 
                      id="funding-target" 
                      type="number"
                      placeholder="Ex: 500000" 
                      required 
                    />
                  </div>
                </div>
              </div>
              
              {/* Informations supplémentaires */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informations supplémentaires</h3>
                
                <div className="space-y-2">
                  <label htmlFor="additional-info" className="text-sm font-medium">
                    Informations supplémentaires
                  </label>
                  <Textarea 
                    id="additional-info" 
                    placeholder="Partagez toute information supplémentaire qui pourrait être pertinente pour l'évaluation de votre projet" 
                    rows={3}
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm">
                    Je confirme que toutes les informations fournies sont exactes et j'accepte les <a href="/terms" className="text-primary hover:underline">termes et conditions</a> de la plateforme.
                  </label>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <Button type="button" variant="outline" className="mr-2">
                  Enregistrer comme brouillon
                </Button>
                <Button type="submit" variant="gradient">
                  Soumettre le projet
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
