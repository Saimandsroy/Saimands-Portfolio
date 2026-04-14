import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";

type EarthLocation = {
  name: string;
  lat: number;
  lng: number;
};

const EARTH_LOCATIONS: EarthLocation[] = [
  { name: "Darbhanga, India 🏠", lat: 26.1542, lng: 85.8918 },
  { name: "Bilaspur, India", lat: 22.0797, lng: 82.1409 },
  { name: "Bengaluru, India", lat: 12.9716, lng: 77.5946 },
  { name: "Mumbai, India", lat: 19.076, lng: 72.8777 },
  { name: "New York, USA", lat: 40.7128, lng: -74.006 },
  { name: "Los Angeles, USA", lat: 34.0522, lng: -118.2437 },
  { name: "London, UK", lat: 51.5074, lng: -0.1278 },
  { name: "Toronto, Canada", lat: 43.6532, lng: -79.3832 },
  { name: "Sydney, Australia", lat: -33.8688, lng: 151.2093 },
  { name: "Dubai, UAE", lat: 25.2048, lng: 55.2708 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Berlin, Germany", lat: 52.52, lng: 13.405 },
];

function latLngToPosition(lat: number, lng: number, radius: number) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function EarthLocationMarker({
  location,
  index,
}: {
  location: EarthLocation;
  index: number;
}) {
  const markerRef = useRef<THREE.Mesh>(null);
  const haloRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  const position = useMemo(
    () => latLngToPosition(location.lat, location.lng, 2.045),
    [location.lat, location.lng]
  );

  useFrame(({ clock }) => {
    const pulse = 1 + Math.sin(clock.elapsedTime * 2.25 + index * 0.45) * 0.18;
    if (markerRef.current) {
      markerRef.current.scale.setScalar(pulse);
    }

    if (haloRef.current) {
      haloRef.current.scale.setScalar(
        1.2 + Math.sin(clock.elapsedTime * 2.25 + index * 0.45) * 0.22
      );
      (haloRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.28 + Math.sin(clock.elapsedTime * 2.25 + index * 0.45) * 0.08;
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={haloRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <sphereGeometry args={[0.0385, 16, 16]} />
        <meshBasicMaterial
          color="#ffde8c"
          transparent
          opacity={0.28}
          depthWrite={false}
        />
      </mesh>

      <mesh
        ref={markerRef}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <sphereGeometry args={[0.0182, 16, 16]} />
        <meshStandardMaterial
          color="#ffea80"
          emissive="#ffcf57"
          emissiveIntensity={1.85}
          toneMapped={false}
        />
      </mesh>

      {isHovered && (
        <Html
          center
          position={[0, 0.12, 0]}
          distanceFactor={10}
          wrapperClass="pointer-events-none"
        >
          <div className="rounded-md border border-[#ffea80]/50 bg-black/70 px-2 py-1 text-xs font-semibold text-[#ffea80] shadow-[0_0_0.75rem_rgba(255,234,128,0.35)] backdrop-blur-sm whitespace-nowrap">
            {location.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function EarthLocationMarkers() {
  return (
    <group>
      {EARTH_LOCATIONS.map((location, index) => (
        <EarthLocationMarker
          key={location.name}
          location={location}
          index={index}
        />
      ))}
    </group>
  );
}

export default EarthLocationMarkers;
