import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import sonarSound from '../assets/sonarSoundEffect.mp3';

const SonarAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      } else {
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error al reproducir el audio:', error);
    }
  };

  const handleAudioEnded = () => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.currentTime = 0;
      audio.play().catch(console.error);
    }
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={toggleAudio}
        variant="outline"
        size="sm"
        className="bg-background/80 backdrop-blur-sm border-green-500/40 hover:border-green-500/60 hover:bg-green-500/10 px-3 sm:px-4"
        title={isPlaying ? 'Detener sonar' : 'Activar sonar'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm text-green-500">Sonar ON</span>
          </>
        ) : (
          <>
            <VolumeX className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm text-muted-foreground">Sonar OFF</span>
          </>
        )}
      </Button>
      
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={handleAudioEnded}
        style={{ display: 'none' }}
      >
        <source src={sonarSound} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default SonarAudio;