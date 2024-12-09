import React from 'react';
import { Anchor, Fish, Compass, Map } from 'lucide-react';

const FloatingButtons = () => {
  const buttons = [
    { icon: Compass, label: 'QRcode', onClick: () => window.location.href='./Qrcode.html' },
    { icon: Fish, label: 'Ergonomie', onClick: () => window.location.href='./ergonomie/' },
    { icon: Map, label: 'Météo', onClick: () => window.location.href='https://quakeur.github.io/index.html' },
    { icon: Anchor, label: 'Captcha', onClick: () => window.location.href='https://naflows.com/leanuitdelinfo/' },
  ];

  return (
    <div className="flex justify-center mb-16">
      <div className="flex gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-full shadow-lg">
        {buttons.map(({ icon: Icon, label, onClick }, index) => (
          <button
            key={index}
            onClick={onClick}
            className="flex flex-col items-center gap-1 text-white hover:text-blue-200 transition-colors duration-300"
          >
            <div className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FloatingButtons;