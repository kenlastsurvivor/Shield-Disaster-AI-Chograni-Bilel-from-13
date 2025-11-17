kenlastsurvivor-patch-3-1
import React, { useEffect, useRef } from 'react';
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
=======
import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Alert } from '../types/Alert';
import AlertDetails from './AlertDetails';

type Globe3DProps = {
  alerts: Alert[];
};

export default function Globe3D({ alerts }: Globe3DProps) {
  const globeEl = useRef<any>();
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);

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
main
    </div>
  );
}
