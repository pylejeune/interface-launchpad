import React from 'react';
import { formatCurrency, formatDate, calculateProgress } from '@/lib/utils';
import { PhaseDetails, TokenPhase } from '@/lib/data/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, Check, AlertCircle } from 'lucide-react';

interface PhaseCardProps {
  phase: TokenPhase;
  details: PhaseDetails;
  isActive: boolean;
}

export default function PhaseCard({ phase, details, isActive }: PhaseCardProps) {
  const progress = calculateProgress(details.soldAmount, details.allocation);
  
  const getStatusColor = () => {
    switch (details.status) {
      case 'active':
        return 'text-green-500';
      case 'upcoming':
        return 'text-blue-500';
      case 'completed':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = () => {
    switch (details.status) {
      case 'active':
        return <Clock className="h-4 w-4 text-green-500" />;
      case 'upcoming':
        return <AlertCircle className="h-4 w-4 text-blue-500" />;
      case 'completed':
        return <Check className="h-4 w-4 text-gray-500" />;
      default:
        return null;
    }
  };
  
  return (
    <Card className={`overflow-hidden ${isActive ? 'border-2 border-purple-500' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">{details.name}</CardTitle>
          <div className={`flex items-center gap-1 text-sm ${getStatusColor()}`}>
            {getStatusIcon()}
            <span>
              {details.status === 'active' ? 'En cours' : 
               details.status === 'upcoming' ? 'À venir' : 'Terminé'}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Date de début</p>
            <p className="font-medium">{formatDate(details.startDate)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date de fin</p>
            <p className="font-medium">{formatDate(details.endDate)}</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Progression</span>
            <span>
              {formatCurrency(details.soldAmount, '', 0)} / {formatCurrency(details.allocation, '', 0)}
            </span>
          </div>
          <Progress value={progress} variant={details.status === 'completed' ? 'success' : 'default'} />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Prix</p>
            <p className="font-medium">{formatCurrency(details.price, 'USD', 4)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Levée Totale</p>
            <p className="font-medium">{formatCurrency(details.totalRaise, 'USD', 0)}</p>
          </div>
        </div>
        
        {details.status === 'active' && (
          <Button 
            variant="gradient" 
            className="w-full mt-4"
          >
            Participer au {details.name}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
