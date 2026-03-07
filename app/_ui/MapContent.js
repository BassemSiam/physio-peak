"use client";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const clinicPos = [30.064479, 31.460654];

// Safety check for Server Side Rendering (SSR)
const isBrowser = typeof window !== "undefined";

const customIcon = isBrowser 
  ? new L.Icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    }) 
  : null;

function MapContent() {
  const handleDirections = () => {
    // FIXED: Correct Template Literal syntax ${variable}
    const url = `https://www.google.com/maps?q=${clinicPos[0]},${clinicPos[1]}`;
    window.open(url, "_blank");
  };

  return (
    <div className="h-[480px] w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg">
      <MapContainer
        center={clinicPos}
        zoom={18}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {customIcon && (
          <Marker position={clinicPos} icon={customIcon}>
            <Popup closeOnClick={false} autoClose={false}>
              <div className="p-1 text-center">
                <h3 className="text-lg font-bold text-blue-900">
                  Physiotherapy Clinic
                </h3>
                <p className="text-sm text-gray-600">Cairo, Egypt</p>
                <button
                  onClick={handleDirections}
                  className="mt-2 rounded bg-blue-600 px-4 py-2 text-xs text-white transition hover:bg-blue-700"
                >
                  Get Directions
                </button>
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default MapContent;