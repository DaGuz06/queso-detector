import React, { useEffect, useRef } from 'react';
import sonarSound from '../assets/sonarSoundEffect.mp3';

const SonarAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // Set volume to a reasonable level (50%)
      audio.volume = 0.5;
      
      // Play the audio when component mounts
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.log('Audio autoplay was prevented:', error);
          // Handle autoplay policy - audio will play on first user interaction
        }
      };

      playAudio();

      // Handle audio end event to restart loop
      const handleEnded = () => {
        audio.currentTime = 0;
        audio.play().catch(console.error);
      };

      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('ended', handleEnded);
        audio.pause();
      };
    }
  }, []);

  // Handle user interaction to enable audio (for browsers with autoplay restrictions)
  useEffect(() => {
    const enableAudio = () => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        audio.play().catch(console.error);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', enableAudio, { once: true });
    document.addEventListener('keydown', enableAudio, { once: true });
    document.addEventListener('touchstart', enableAudio, { once: true });

    return () => {
      document.removeEventListener('click', enableAudio);
      document.removeEventListener('keydown', enableAudio);
      document.removeEventListener('touchstart', enableAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src={sonarSound} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default SonarAudio;