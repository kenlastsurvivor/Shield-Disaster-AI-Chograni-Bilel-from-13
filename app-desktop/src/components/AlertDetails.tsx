import React from 'react';
import { Alert } from '../types/Alert';

type AlertDetailsProps = {
  alert: Alert | null;
  onClose?: () => void;
};

export default function AlertDetails({ alert, onClose }: AlertDetailsProps) {
  if (!alert) return null;

  return (
    <div style={{
      background: "#232b3e",
      color: "#fff",
      borderRadius: 10,
      padding: 20,
      position: "fixed",
      right: 30,
      top: 30,
      zIndex: 1000,
      minWidth: 320,
      boxShadow: "0 6px 32px #000a",
      border: "1px solid #394060"
    }}>
      <button
        style={{
          position: "absolute", top: 8, right: 12, background: "transparent",
          color: "#fff", border: "none", fontSize: 22, cursor: "pointer"
        }}
        onClick={onClose}
        aria-label="Fermer"
      >
        ×
      </button>
      <h2 style={{ marginTop: 0 }}>
        <span style={{ fontSize: 32, marginRight: 8 }}>{alert.icon ?? "⚠️"}</span>
        {alert.label}
      </h2>
      <div>
        <b>Type&nbsp;:</b> {alert.type}<br />
        <b>Gravité&nbsp;:</b> {alert.severity}<br />
        <b>Latitude&nbsp;:</b> {alert.lat} / <b>Longitude&nbsp;:</b> {alert.lng}<br />
        {alert.startTime && <><b>Début&nbsp;:</b> {alert.startTime}<br /></>}
        {alert.endTime && <><b>Fin&nbsp;:</b> {alert.endTime}<br /></>}
        {alert.source && <><b>Source&nbsp;:</b> {alert.source}<br /></>}
        {alert.details && <div style={{ marginTop: 10 }}>{alert.details}</div>}
      </div>
    </div>
  );
}
