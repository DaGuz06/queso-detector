export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1SClNcC4tDKvytizaOvhew1W',
    name: 'Suscripcion +',
    description: 'Apoyas a los creadores y aparte te llevas radares exclusivos',
    mode: 'payment',
  },
];