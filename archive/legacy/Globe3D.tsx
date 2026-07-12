import React from "react";
import { Alert } from "../types/Alert";

interface Globe3DProps {
  onSelectAlert: (alert: Alert) => void;
}

const mockAlerts: Alert[] = [
  { id: 1, type: "Séisme", description: "Séisme détecté à Tokyo" },
  { id: 2, type: "Inondation", description: "Inondation majeure à Paris" },
  { id: 3, type: "Incendie", description: "Incendie de forêt en Californie" },
];

const Globe3D: React.FC<Globe3DProps> = ({ onSelectAlert }) => {
  return (
    <div>
      <h3>Alerte sur le Globe (simulation)</h3>
      <ul>
        {mockAlerts.map((alert) => (
          <li key={alert.id}>
            <button onClick={() => onSelectAlert(alert)}>
              {alert.type} - {alert.description}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Globe3D;
