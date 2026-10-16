import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: Coords;
  mapType: string;
  onMapClick: (lat: number, lon: number) => void;
};

export default function Map({ coords, mapType, onMapClick }: Props) {
  const { lat, lon } = coords;
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MapTileLayer />
      <TileLayer
        opacity={0.7}
        noWrap
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  );
}

type MapClickProps = {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
};

function MapClick({ onMapClick, coords }: MapClickProps) {
  const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      onMapClick(lat, lng);
    },
  });

  useEffect(() => {
    map.panTo([coords.lat, coords.lon]);
  }, [coords.lat, coords.lon, map]);

  return null;
}

function MapTileLayer() {
  const map = useMap();

  useEffect(() => {
    // Keep this in a variable so the extra MapLibre option is forwarded by
    // MaptilerLayer without triggering excess-property checking in TypeScript.
    const layerOptions = {
      style: "basic-dark",
      apiKey: "8z8Nt5mIC1vWYnkapG9X",
      // MapLibre otherwise renders repeated copies of the world when zoomed out.
      renderWorldCopies: false,
    };
    const tileLayer = new MaptilerLayer(layerOptions);
    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
}
