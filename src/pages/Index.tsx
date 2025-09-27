import React from 'react';
import CategoryButtons from '../components/CategoryButtons';
import RadarDisplay from '../components/RadarDisplay';
import SonarAudio from '../components/SonarAudio';

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col p-4 sm:p-6 lg:p-8">
      <SonarAudio />
      <div className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
        {/* Header - Responsive */}
        <div className="mb-6 sm:mb-8 lg:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            🧀 Detector de Quesos 🧀
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Detectando los mejores quesitos en tu área
          </p>
        </div>
        
        {/* Status bar - Responsive positioning (moved up) */}
        <div className="mb-1 sm:mb-1">
          <div className="flex items-center gap-2 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 bg-card/80 backdrop-blur-sm rounded-full border border-border">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Radar activo - Buscando quesitos...
            </span>
          </div>
        </div>

        {/* Category buttons (commented out) */}
        {/*
        <div className="mb-8 sm:mb-12">
          <CategoryButtons />
        </div>
        */}
        
        {/* Main radar display */}
        <div className="flex-1 flex items-center justify-center w-full">
          <RadarDisplay />
        </div>
      </div>
    </div>
  );
};

export default Index;
