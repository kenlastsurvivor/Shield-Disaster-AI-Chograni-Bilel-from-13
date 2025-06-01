export async function fetchEarthquakes() {
  const res = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=10');
  const data = await res.json();
  return data.features;
}