import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Alert } from '../types/Alert';
import AlertDetails from './AlertDetails';

type Globe3DProps = {
  alerts: Alert[];
  onSelectAlert?: (alert: Alert | null) => void;
};

export default function Globe3D({ alerts, onSelectAlert }: Globe3DProps) {
  const globeEl = useRef<any>();
  const [selectedAlert, setSelectedAlertState] = useState<Alert | null>(null);

  const setSelectedAlert = (alert: Alert | null) => {
    setSelectedAlertState(alert);
    onSelectAlert?.(alert);
  };

  // Calculate points for the alerts
  const alertPoints = alerts.map(alert => ({
    ...alert,
    lat: alert.lat,
    lng: alert.lng,
    size: 1.2 + (alert.severity === 'critical' ? 2 : alert.severity === 'high' ? 1 : 0.7),
    color: alert.severity === 'critical' ? '#e53935' : alert.severity === 'high' ? '#ffb300' : '#43a047'
  }));

  // Auto-focus on selected alert
  useEffect(() => {
    if (selectedAlert && globeEl.current) {
      globeEl.current.pointOfView(
        { lat: selectedAlert.lat, lng: selectedAlert.lng, altitude: 2.2 },
        1000
      );
    }
  }, [selectedAlert]);

  return (
    <div style={{ position: 'relative', height: 600, width: '100%' }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={alertPoints}
        pointLat="lat"
        pointLng="lng"
        pointAltitude={() => 0.03}
        pointRadius="size"
        pointColor="color"
        onPointClick={setSelectedAlert}
        pointLabel={d => `<b>${d.label}</b><br/>${d.details || ''}`}
        width={window.innerWidth > 900 ? 900 : window.innerWidth - 30}
        height={550}
      />
      <div style={{
        position: 'absolute', top: 25, left: 25, color: '#fff', background: '#232b3edd',
        padding: 10, borderRadius: 8, zIndex: 2, fontSize: 18
      }}>
        🌐 Globe 3D interactif — cliquez sur un point pour voir le détail d'une alerte !
      </div>
      <AlertDetails alert={selectedAlert} onClose={() => setSelectedAlert(null)} />
    </div>
  );
}
