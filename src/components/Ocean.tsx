import React from 'react';
import Fish from './Fish';

const Ocean = () => {
  const fishes = [
    { delay: 0, position: { top: '20%', left: '10%' }, size: 'lg' as const, speed: 'slow' as const },
    { delay: 2, position: { top: '40%', left: '20%' }, size: 'md' as const, speed: 'normal' as const },
    { delay: 4, position: { top: '60%', left: '15%' }, size: 'sm' as const, speed: 'fast' as const },
    { delay: 1, position: { top: '30%', left: '70%' }, size: 'lg' as const, speed: 'normal' as const },
    { delay: 3, position: { top: '50%', left: '80%' }, size: 'md' as const, speed: 'slow' as const },
    { delay: 5, position: { top: '25%', left: '40%' }, size: 'sm' as const, speed: 'fast' as const },
    { delay: 2.5, position: { top: '75%', left: '60%' }, size: 'lg' as const, speed: 'slow' as const },
    { delay: 1.5, position: { top: '85%', left: '30%' }, size: 'md' as const, speed: 'normal' as const },
  ];

  return (
    <div className="ocean-background fixed inset-0 pointer-events-none">
      {fishes.map((fish, index) => (
        <Fish key={index} {...fish} />
      ))}
    </div>
  );
};

export default Ocean;