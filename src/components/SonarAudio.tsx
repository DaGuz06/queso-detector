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
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={toggleAudio}
        variant="outline"
        size="icon"
        className="bg-background/80 backdrop-blur-sm border-green-500/40 hover:border-green-500/60 hover:bg-green-500/10"
        title={isPlaying ? 'Detener sonar' : 'Activar sonar'}
      >
        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-green-500" />
        ) : (
          <VolumeX className="h-4 w-4 text-muted-foreground" />
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