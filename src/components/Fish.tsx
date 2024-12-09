import React from 'react';
import { Fish as FishIcon } from 'lucide-react';

interface FishProps {
  delay: number;
  position: { top: string; left: string };
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
}

const Fish: React.FC<FishProps> = ({ 
  delay, 
  position, 
  size = 'md',
  speed = 'normal'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const speedClasses = {
    slow: 'animate-swim-slow',
    normal: 'animate-swim',
    fast: 'animate-swim-fast'
  };

  return (
    <div 
      className={`fish absolute transform ${speedClasses[speed]} transition-opacity hover:opacity-75`}
      style={{
        ...position,
        animationDelay: `${delay}s`,
      }}
    >
      <FishIcon className={`text-white/50 ${sizeClasses[size]} transition-transform`} />
    </div>
  );
};

export default Fish;