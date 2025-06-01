import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ positions }) {
  return (
    <MapContainer center={[48.858, 2.294]} zoom={5} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((pos, idx) => (
        <Marker key={idx} position={[pos.lat, pos.lng]}>
          <Popup>
            Zone à risque détectée
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
export default MapComponent;