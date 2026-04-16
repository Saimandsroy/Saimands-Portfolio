import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import {
  heroMyOriginScrollProgress,
  jobExperienceTitleScrollProgress,
} from "@/canvases/space/components/CameraControls";
import { useScrollContext } from "@/contexts/ScrollContext";

function JobExperienceTitle() {
  const { t } = useLingui();
  const { previousScrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(
    materialsToHideRefs,
    [jobExperienceTitleScrollProgress, jobExperienceTitleScrollProgress],
    undefined,
    {
      duration: previousScrollProgress === heroMyOriginScrollProgress ? 0.5 : 1,
    }
  );

  return (
    <Html
      className="select-none pointer-events-none"
      center
      position={[9.85, 2.25, -90]}
    >
      {/* Title */}
      <h3
        ref={(el) => {
          materialsToHideRefs.current.push(el as HTMLHeadingElement);
        }}
        className="w-max max-w-[min(100vw-1.5rem,24rem)] text-red-gradient text-center opacity-0 text-2xl xs:text-3xl sm:text-6xl flex items-center gap-2 font-bold"
      >
        <span>{t`Where I've Shipped 🚀`}</span>
      </h3>
    </Html>
  );
}

export default JobExperienceTitle;
