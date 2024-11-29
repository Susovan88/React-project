import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useEffect } from "react";

function UpdateMapView({ coord }) {
  const map = useMap();

  useEffect(() => {
    const { lat, lon } = coord;
    map.setView([lat, lon], map.getZoom()); // Update the map view dynamically
  }, [coord, map]);

  return null;
}

export default function Map({ coord }) {
  const { lat, lon } = coord;
  console.log(lat, lon);

  return (
    <>
      <div style={{ height: "50vh", width: "90%",borderRadius:"10px", border:"2px solid #033b7b" }}>
        <MapContainer
          center={[lat, lon]} // Initial center
          zoom={10} // Default zoom level
          style={{ height: "100%", width: "100%",borderRadius:"10px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lon]}>
            <Popup>
              Coordinates: {lat}, {lon}
            </Popup>
          </Marker>
          <UpdateMapView coord={coord} />
        </MapContainer>
      </div>
    </>
  );
}

  