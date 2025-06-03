import React, { useCallback, useState } from 'react';
import Globe3D from './components/Globe3D';
import SurvivalAdvice from './components/SurvivalAdvice';

const mockAlerts = [
  {
    id: 'tokyo2024',
    lat: 35.68,
    lng: 139.69,
    type: 'earthquake',
    label: 'Séisme Tokyo',
    severity: 'high',
    icon: '🌏',
    details: 'Secousse détectée à Tokyo, magnitude 6.2',
    startTime: '2025-06-01T22:32:00Z'
  },
  {
    id: 'saopaulo-flood',
    lat: -23.55,
    lng: -46.63,
    type: 'flood',
    label: 'Inondation São Paulo',
    severity: 'moderate',
    icon: '🌊',
    details: 'Rivière Tietê sortie de son lit.',
    startTime: '2025-06-01T22:00:00Z'
  },
  {
    id: 'california-fire',
    lat: 37.77,
    lng: -122.42,
    type: 'fire',
    label: 'Incendie Californie',
    severity: 'critical',
    icon: '🔥',
    details: 'Feu de forêt en progression rapide.',
    startTime: '2025-06-01T21:30:00Z'
  }
];

function App() {
  const [activeType, setActiveType] = useState<string>('generic');

  const handleVoiceCommand = useCallback((text: string) => {
    // Optionnel: gestion commande vocale
  }, []);

  return (
    <div>
      <header>
        <h1>Shield Disaster AI</h1>
      </header>
      <main>
        <Globe3D alerts={mockAlerts} />
        <SurvivalAdvice type={activeType} />
      </main>
    </div>
  );
}

export default App;import React, { useState } from 'react';
import { Alert } from '../types/Alert';
import AlertDetails from './AlertDetails';

type Globe3DProps = {
  alerts: Alert[];
};

export default function Globe3D({ alerts }: Globe3DProps) {
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

  return (
    <div className="globe-3d-container" style={{ height: 600, width: "100%", background: "#101a2a" }}>
      <div style={{ color: "#fff", padding: 12 }}>
        <b>Globe interactif 3D (prototype)</b> : 
        Navigation libre, zoom, et affichage des alertes multi-désastres (y compris spatiales) à venir ici.
      </div>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} style={{ color: "#ffe082", cursor: "pointer" }}
              onClick={() => setSelectedAlert(alert)}>
            <span role="img" aria-label={alert.type}>
              {alert.icon ?? "⚠️"}
            </span>{" "}
            [{alert.severity.toUpperCase()}] {alert.label}
          </li>
        ))}
      </ul>
      <AlertDetails alert={selectedAlert} onClose={() => setSelectedAlert(null)} />
    </div>
  );
}import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

type Alert = {
  lat: number;
  lng: number;
  type: string;
  label: string;
};

type Forecast = {
  lat: number;
  lng: number;
  risk: string;
  label: string;
};

export default function Globe3D({
  alerts,
  forecasts
}: {
  alerts: Alert[];
  forecasts: Forecast[];
}) {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.8;
    }
  }, []);

  return (
    <div style={{ height: 600 }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={alerts}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "red"}
        pointAltitude={() => 0.06}
        pointLabel="label"
        arcsData={forecasts}
        arcStartLat="lat"
        arcStartLng="lng"
        arcEndLat="lat"
        arcEndLng="lng"
        arcColor={() => ["orange", "yellow"]}
        arcDashLength={0.4}
        arcDashGap={0.8}
        arcDashAnimateTime={5000}
      />
    </div>
  );
}
