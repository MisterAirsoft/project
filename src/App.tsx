import React from 'react';
import WaveAnimation from './components/WaveAnimation';
import Ocean from './components/Ocean';
import DeepOceanContent from './components/DeepOceanContent';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="ocean-app min-h-screen bg-gradient-to-b from-blue-300 via-blue-600 to-blue-950 relative">
      <WaveAnimation />
      <div className="container mx-auto px-4 pt-40 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          Les Profondeurs de l'Océan
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-16">
          <p className="text-white text-lg leading-relaxed">
          Cette page est le hub, la Rome de tout le contenu du site et chaque autre page lui sera rattachée.
          Nous avons essayé de produire quelque chose de “flashy” tout en restant limpide: 
          l'objectif est de donner envie à l'utilisateur de cliquer sur toutes les catégories mises en avant
          </p>
        </div>
        <DeepOceanContent />
        <FloatingButtons />
      </div>
      <Ocean />
    </div>
  );
}

export default App;