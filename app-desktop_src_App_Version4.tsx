import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import VoiceCommand from './components/VoiceCommand';
import MapDisaster from './components/MapDisaster';
import CommunityAlert from './components/CommunityAlert';
import OfflineStatus from './components/OfflineStatus';

function App() {
  const { t } = useTranslation();

  const handleVoiceCommand = useCallback((text: string) => {
    alert(`${t('voiceRecognized')}: ${text}`);
    // Ajoute ici la logique de commande vocale selon Shield Disaster
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
        <MapDisaster />
        <CommunityAlert />
      </main>
    </div>
  );
}

export default App;