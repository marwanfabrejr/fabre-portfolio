"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const defaultIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent() {
  useEffect(() => {
    L.Marker.prototype.options.icon = defaultIcon;
  }, []);

  return (
    <MapContainer
      center={[31.2150774, 29.92743]}
      zoom={16}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[31.2150774, 29.92743]} icon={defaultIcon}>
        <Popup>Marwan lives here, come over for a cup of coffee :)</Popup>
      </Marker>
    </MapContainer>
  );
}