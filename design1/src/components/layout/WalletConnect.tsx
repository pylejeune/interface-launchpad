"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { shortenAddress } from '@/lib/utils';
import { Wallet, LogOut } from 'lucide-react';

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);

  const mockWalletAddress = '0x1234567890abcdef1234567890abcdef12345678';

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Simulation d'une connexion de wallet
    setTimeout(() => {
      setWalletAddress(mockWalletAddress);
      setIsConnected(true);
      setIsConnecting(false);
    }, 1000);
  };

  const handleDisconnect = () => {
    setWalletAddress('');
    setIsConnected(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    // Ici, on pourrait ajouter un toast de confirmation
  };

  if (isConnected) {
    return (
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={copyToClipboard}
        >
          <Wallet className="h-4 w-4" />
          <span>{shortenAddress(walletAddress)}</span>
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center p-0 px-2"
          onClick={handleDisconnect}
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleConnect}
      disabled={isConnecting}
      className="flex items-center gap-2"
    >
      <Wallet className="h-4 w-4" />
      {isConnecting ? 'Connexion...' : 'Connecter Wallet'}
    </Button>
  );
}
