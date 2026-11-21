
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function RouteMap({ data }) {
  // Don't render until coordinates are available
  if (!data?.sourceLocation || !data?.destinationLocation) {
    return (
      <div className="rounded-2xl border border-[#232323] bg-[#111111] p-5">
        <h2 className="mb-4 text-xl font-bold">Route Map</h2>

        <div className="flex h-[420px] items-center justify-center rounded-xl bg-[#181818] text-neutral-400">
          Route map is not available.
        </div>
      </div>
    );
  }

  const source = [
    data.sourceLocation.latitude,
    data.sourceLocation.longitude,
  ];

  const destination = [
    data.destinationLocation.latitude,
    data.destinationLocation.longitude,
  ];

  return (
    <div className="rounded-2xl border border-[#232323] bg-[#111111] p-5">
      <h2 className="mb-5 text-xl font-bold">Route Map</h2>

      <MapContainer
        center={source}
        zoom={14}
        style={{
          height: "420px",
          width: "100%",
          borderRadius: "18px",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={source} />
        <Marker position={destination} />

        <Polyline
          positions={[source, destination]}
          color="#E8B44B"
          weight={5}
        />
      </MapContainer>
    </div>
  );
}