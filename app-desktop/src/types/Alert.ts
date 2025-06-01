export type Alert = {
  id: string;
  lat: number;
  lng: number;
  type: 
    | 'earthquake'
    | 'flood'
    | 'fire'
    | 'cyclone'
    | 'asteroid'
    | 'solar_flare'
    | 'magnetic_anomaly'
    | 'volcano'
    | 'epidemic'
    | 'other';
  label: string;
  severity: 'low' | 'moderate' | 'high' | 'critical';
  startTime?: string;
  endTime?: string;
  source?: string;
  details?: string;
  icon?: string;
};
