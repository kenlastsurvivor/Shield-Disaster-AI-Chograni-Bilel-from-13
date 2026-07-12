import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Globe3D from './components/Globe3D';
import SurvivalAdvice from './components/SurvivalAdvice';
import { Alert } from './types/Alert';

const mockAlerts: Alert[] = [
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

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [activeAlert, setActiveAlert] = useState<Alert | null>(null);

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={setUser} />
      ) : (
        <>
          <header style={{ padding: '16px 24px' }}>
            <h1>Shield Disaster AI</h1>
            <p>Bienvenue, {user}</p>
          </header>
          <main style={{ padding: '0 24px 24px' }}>
            <Globe3D alerts={mockAlerts} onSelectAlert={setActiveAlert} />
            {activeAlert && (
              <SurvivalAdvice
                type={activeAlert.type}
                onClose={() => setActiveAlert(null)}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
