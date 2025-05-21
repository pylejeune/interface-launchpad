import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background w-full">
      <div className="w-full px-6 py-4 max-w-full">
        <div className="flex flex-row justify-between items-start w-full">
          {/* Colonne 1: CryptoPad */}
          <div className="w-1/4 px-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-2">CryptoPad</h3>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CryptoPad
            </p>
          </div>
          
          {/* Colonne 2: Navigation */}
          <div className="w-1/4 px-4">
            <h4 className="font-medium mb-2 text-sm">Navigation</h4>
            <div className="flex flex-col text-xs space-y-1">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Accueil
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projets
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </Link>
            </div>
          </div>
          
          {/* Colonne 3: Ressources */}
          <div className="w-1/4 px-4">
            <h4 className="font-medium mb-2 text-sm">Ressources</h4>
            <div className="flex flex-col text-xs space-y-1">
              <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                Docs
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                Support
              </Link>
            </div>
          </div>
          
          {/* Colonne 4: Social */}
          <div className="w-1/4 px-4">
            <h4 className="font-medium mb-2 text-sm">Social</h4>
            <div className="flex flex-col text-xs space-y-1">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
