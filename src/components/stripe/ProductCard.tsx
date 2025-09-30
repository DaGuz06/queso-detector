import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { StripeProduct } from '@/stripe-config';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface ProductCardProps {
  product: StripeProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        toast.error('Por favor inicia sesión para continuar');
        return;
      }

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: product.priceId,
          mode: product.mode,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al procesar el pago');
      }

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al procesar el pago. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {product.mode === 'subscription' ? 'Suscripción mensual' : 'Pago único'}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? 'Procesando...' : 'Seleccionar'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
