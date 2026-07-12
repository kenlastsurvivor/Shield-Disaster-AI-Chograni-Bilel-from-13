import React from 'react';

type SurvivalAdviceProps = {
  type: string;
  onClose?: () => void;
};

const ADVICE: Record<string, string> = {
  earthquake: "Éloignez-vous des fenêtres, abritez-vous sous une table solide.",
  flood: "Montez en hauteur, coupez l'électricité, préparez un kit d'urgence.",
  fire: "Évacuez si possible, couvrez-vous la bouche, restez près du sol.",
  cyclone: "Restez à l'abri au centre du bâtiment, préparez de l'eau et des vivres.",
  generic: "Restez calme et suivez les instructions officielles."
};

export default function SurvivalAdvice({ type, onClose }: SurvivalAdviceProps) {
  return (
    <div style={{
      background: '#1b2233', color: '#fff', borderRadius: 10, padding: 18, marginTop: 16,
      border: '1px solid #394060'
    }}>
      <h3 style={{ marginTop: 0 }}>Conseil de survie</h3>
      <p>{ADVICE[type] ?? ADVICE.generic}</p>
      {onClose && (
        <button onClick={onClose} style={{ background: 'transparent', color: '#aaa', border: 'none', cursor: 'pointer' }}>
          Fermer
        </button>
      )}
    </div>
  );
}
