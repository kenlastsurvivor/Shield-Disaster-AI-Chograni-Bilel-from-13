import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import VoiceCommand from './components/VoiceCommand';
import Globe3D from './components/Globe3D';
import OfflineStatus from './components/OfflineStatus';
import SurvivalAdvice from './components/SurvivalAdvice';

const mockAlerts = [
  { lat: 35.68, lng: 139.69, type: 'earthquake', label: 'Séisme Tokyo' },
  { lat: -23.55, lng: -46.63, type: 'flood', label: 'Inondation São Paulo' },
  { lat: 37.77, lng: -122.42, type: 'fire', label: 'Incendie Californie' }
];

const mockForecasts = [
  { lat: 15.87, lng: 100.99, risk: 'cyclone', label: 'Risque cyclone Thaïlande' }
];

function App() {
  const { t } = useTranslation();
  const [activeType, setActiveType] = useState<string>('generic');

  const handleVoiceCommand = useCallback((text: string) => {
    alert(`${t('voiceRecognized')}: ${text}`);
    // Détection simple pour afficher le conseil adapté
    if (/séisme|earthquake/i.test(text)) setActiveType('earthquake');
    else if (/inondation|flood/i.test(text)) setActiveType('flood');
    else if (/feu|fire/i.test(text)) setActiveType('fire');
    else if (/cyclone/i.test(text)) setActiveType('cyclone');
    else setActiveType('generic');
  }, [t]);

  return (
    <div>
      <header>
        <h1>{t('welcomeTitle')}</h1>
        <OfflineStatus />
      </header>
      <main>
        <Home />
        <VoiceCommand onCommand={handleVoiceCommand} />
        <Globe3D alerts={mockAlerts} forecasts={mockForecasts} />
        <SurvivalAdvice type={activeType} />
      </main>
    </div>
  );
}

export default App;
