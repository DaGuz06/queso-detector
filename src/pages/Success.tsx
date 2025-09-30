import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleCheck as CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-sm sm:max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500" />
          </div>
          <CardTitle className="text-xl sm:text-2xl">¡Pago exitoso!</CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Gracias por tu compra. Tu pago ha sido procesado exitosamente.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Deberías recibir un correo de confirmación pronto.
          </p>
          <div className="flex flex-col gap-2 sm:gap-3">
            <Button asChild className="w-full">
              <Link to="/">Volver al radar</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link to="/pricing">Ver planes</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;