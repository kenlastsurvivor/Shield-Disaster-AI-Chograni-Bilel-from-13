import React from 'react';

export default function SurvivalAdvice({ type }: { type: string }) {
  const advices: Record<string, string> = {
    earthquake: "Éloignez-vous des fenêtres, abritez-vous sous une table solide.",
    flood: "Montez en hauteur, coupez l'électricité, préparez un kit d'urgence.",
    fire: "Évacuez si possible, couvrez-vous la bouche, restez près du sol.",
    cyclone: "Restez à l'abri au centre du bâtiment, préparez de l'eau et des vivres.",
    generic: "Restez calme et suivez les instructions officielles."
  };
  return (
    <div>
      <h3>Conseil de survie</h3>
      <p>{advices[type] ?? advices.generic}</p>
    </div>
  );
}
