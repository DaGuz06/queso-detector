import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import SubscriptionStatus from '@/components/stripe/SubscriptionStatus';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between">
        <Link to="/" className="text-lg sm:text-xl font-bold truncate">
          🧀 Detector de Quesos
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4">
          {user ? (
            <>
              <SubscriptionStatus />
              <Button variant="outline" size="sm" className="text-xs sm:text-sm" asChild>
                <Link to="/pricing">Precios</Link>
              </Button>
              <Button variant="ghost" size="sm" onClick={signOut} className="text-xs sm:text-sm">
                Salir
              </Button>
            </>
          ) : (
            <div className="flex gap-1 sm:gap-2">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button size="sm" className="text-xs sm:text-sm" asChild>
                <Link to="/signup">Registro</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;