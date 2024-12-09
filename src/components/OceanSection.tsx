import React from 'react';
import { Component } from 'lucide-react';

interface OceanSectionProps {
  title: string;
  depth: string;
  description: string;
  icon: typeof Component;
  className?: string;
}

const OceanSection: React.FC<OceanSectionProps> = ({
  title,
  depth,
  description,
  icon: Icon,
  className = "",
}) => {
  return (
    <div className={`p-8 backdrop-blur-sm rounded-lg ${className}`}>
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-white/80" />
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="text-blue-200 text-sm">{depth}</span>
        </div>
      </div>
      <p className="text-white/90 leading-relaxed">{description}</p>
    </div>
  );
};

export default OceanSection;