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
    </div>
  );
}
