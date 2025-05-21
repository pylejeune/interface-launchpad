import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-20 min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p className="text-xl text-muted-foreground mb-8 text-center max-w-md">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button variant="gradient" asChild>
        <Link href="/">
          Retour à l'accueil
        </Link>
      </Button>
    </div>
  );
}
