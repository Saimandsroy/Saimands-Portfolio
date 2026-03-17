import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadJobExperienceListAsteroidsTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture([
    "/assets/textures/asteroids/beniaminek_logo.png",
    "/assets/textures/asteroids/esc_logo.png",
    "/assets/textures/asteroids/ruigrok_logo.png",
  ]);

  const textures = useMemo(() => {
    const [beniaminekTexture, escTexture, ruigrokTexture] = loadedTextures;

    // Change colorSpace for diffuse textures
    beniaminekTexture.colorSpace = THREE.SRGBColorSpace;
    escTexture.colorSpace = THREE.SRGBColorSpace;
    ruigrokTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    beniaminekTexture.anisotropy = anisotropy;
    escTexture.anisotropy = anisotropy;
    ruigrokTexture.anisotropy = anisotropy;

    // Update the textures
    beniaminekTexture.needsUpdate = true;
    escTexture.needsUpdate = true;
    ruigrokTexture.needsUpdate = true;

    return [beniaminekTexture, escTexture, ruigrokTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadJobExperienceListAsteroidsTextures;
