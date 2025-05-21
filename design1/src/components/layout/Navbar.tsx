"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import WalletConnect from './WalletConnect';

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">CryptoPad</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={`text-sm font-medium transition-colors ${pathname === '/' ? 'text-foreground' : 'text-muted-foreground'}`}>
              Accueil
            </Link>
            <Link href="/projects" className={`text-sm font-medium transition-colors ${pathname === '/projects' || pathname.startsWith('/projects/') ? 'text-foreground' : 'text-muted-foreground'}`}>
              Projets
            </Link>
            <Link href="/about" className={`text-sm font-medium transition-colors ${pathname === '/about' ? 'text-foreground' : 'text-muted-foreground'}`}>
              À propos
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <WalletConnect />
          <Button variant="gradient" size="sm" asChild>
            <Link href="/launch">Lancer un projet</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
