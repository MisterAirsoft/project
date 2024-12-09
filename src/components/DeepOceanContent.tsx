import React from 'react';
import { Anchor, Fish, Shell, Waves, Swords, Octagon } from 'lucide-react';
import OceanSection from './OceanSection';

const DeepOceanContent = () => {
  const sections = [
    {
      title: "Zone Épipélagique",
      depth: "0-200m - Le Cerveau",
      description: "Coordinateur, maître de l’information et principal organe du système nerveux, le cerveau est un élément essentiel pour notre survie en tant qu’être bilatérien. En effet, sans sa puissante capacité à réguler les organes de notre corps, il serait illusoire d'assurer notre survie. Mais quel lien avec la vaste étendue d'eau salée qui couvre la surface du globe? Pas de précipitation, nous y venons. D’une part, l’océan est un ensemble qui peut conserver des informations comme notre mémoire. Que ce soit la salinité ou la température de l’eau, l’océan est capable de stocker des quantités abyssales de chaleur et peut les redistribuer à travers des courants marins ou lors d’échanges avec l’atmosphère. Le tout dans le but de maintenir un équilibre, c’est en quelque sorte le thermostat de notre planète! De plus, l’océan présente des similarités avec nous qui sont moins pratiques, comme notamment un très long temps d’adaptation face à une nouvelle information. De par son immensité, un élément seul ne peut agir directement sur l’océan néanmoins son impact n’est pas négligeable : Le plus petit des courants peut, par effet cumulatif, avoir un impact drastique! De la même façon que le plus petit événement de notre vie peut nous changer à jamais!En savoir plus sur le réservoir de chaleur ",
      icon: Fish,
      className: "bg-blue-500/20"
    },
    {
      title: "Zone Mésopélagique",
      depth: "200-1000m - Coeur (/veines)",
      description: "En concert de notre corps, l’océan ne transfère pas ses précieuses ressources à travers des courants de taille équivalente. Effectivement, il existe une multitudes de différent types de courants dont nous évoquerons l’essentiel .Les courants majeurs,Les courants de densité,Les tourbillons océaniques,Courants de marée.Tel un chef d’orchestre qui ferait croire que l’océan tout entier n’est qu’un être vivant, les eaux se mélangent dans une symphonie d’effets cumulatifs à force d'échanges divers et variés.Les théories de l’AMOC : c’est un concept pour expliquer la partie de la circulation océanique qui transmet de la chaleur.Les rapports du GIEC qui font des modèles de prédiction (très proche des modèles météorologiques mais à l’échelle de la décennie)Le réchauffement climatique provoquera un ralentissement de l’AMOC dans le futur.",
      icon: Swords,
      className: "bg-blue-600/20"
    },
    {
      title: "Zone Bathypélagique",
      depth: "1000-4000m - Le poumon",
      description: "Les océans fournissent la majeur partie de l'oxygène Oxygène, planctons, zones mortes, acidification. L’océan est un puits de carbone. Le processus de la pompe biologique marine (fondamental pour la survie de la biodiversité océanique) Le réchauffement de la surface empêche les échanges entre surface et profondeur (ex : moins de gaz = moins de ressources pour les planctons et donc moins d’oxygène pour l’ensemble).La pompe biologique stock également le CO2 de la neige océanique pendant de très longues durée au fond de l’océan. Ce processus est similaire à la pompe physique qui en stock une très grande quantité mais moins longtemps.",
      icon: Waves,
      className: "bg-blue-700/20"
    },
    {
      title: "Zone Abyssopélagique",
      depth: "4000-6000m - L’estomac",
      description: "Métabolisme (microbiote) / Biodiversité, l’importance du plancton dans l’océan : une masse invisible à la base de la chaîne alimentaire marine.",
      icon: Octagon,
      className: "bg-blue-800/20"
    },
    {
      title: "Zone Hadopélagique",
      depth: "> 6000m - Le foie",
      description: "L’océan : un puit à carbonne. Ce qui est “mauvais” est stocké au fond de l’eau pendant très longtemps : le stockage du carbone.",
      icon: Shell,
      className: "bg-blue-900/20"
    },
    
  ];

  return (
    <div className="space-y-32 pb-32">
      {sections.map((section, index) => (
        <div key={index} className="scroll-mt-20" id={`section-${index}`}>
          <OceanSection {...section} />
        </div>
      ))}
      <div className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md p-3 rounded-full">
        <Anchor className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};

export default DeepOceanContent;