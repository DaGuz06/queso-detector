import React from 'react';
import { stripeProducts } from '@/stripe-config';
import ProductCard from '@/components/stripe/ProductCard';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="text-center mb-6 sm:mb-8 max-w-md mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Elige tu plan</h1>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Por favor inicia sesión para continuar</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild>
              <Link to="/login">Iniciar sesión</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/signup">Registrarse</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Elige tu plan</h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Apoya a los creadores y obtén radares exclusivos
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {stripeProducts.map((product) => (
            <ProductCard key={product.priceId} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8">
          <Button variant="outline" asChild>
            <Link to="/">Volver al radar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;