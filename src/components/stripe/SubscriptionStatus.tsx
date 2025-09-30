import React from 'react';
import { useSubscription } from '@/hooks/useSubscription';

const SubscriptionStatus: React.FC = () => {
  const { isPremium, isLoading } = useSubscription();

  if (isLoading) {
    return null;
  }

  if (!isPremium) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs sm:text-sm px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
        Premium
      </span>
    </div>
  );
};

export default SubscriptionStatus;
