import React from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface SizeControlsProps {
  isLargeSize: boolean;
  onToggleSize: () => void;
}

const SizeControls: React.FC<SizeControlsProps> = ({ isLargeSize, onToggleSize }) => {
  return (
    <div className="flex items-center">
      <Button
        onClick={onToggleSize}
        variant="outline"
        size="sm" 
        className="bg-background/80 backdrop-blur-sm border-green-500/40 hover:border-green-500/60 hover:bg-green-500/10 text-white text-xs sm:text-sm px-2 sm:px-3"
        title={isLargeSize ? 'Reducir tamaño de fotos' : 'Aumentar tamaño de fotos'}
      >
        {isLargeSize ? (
          <>
            <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Reducir</span>
            <span className="sm:hidden">-</span>
          </>
        ) : (
          <>
            <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Ampliar</span>
            <span className="sm:hidden">+</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default SizeControls;