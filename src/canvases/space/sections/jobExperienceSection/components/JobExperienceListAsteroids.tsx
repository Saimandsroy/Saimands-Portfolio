import { Float } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import AsteroidsModel from "@/canvases/space/asteroids/components/AsteroidsModel";
import {
  jobExperienceDownloadResumeScrollProgress,
  jobExperienceListScrollProgress,
  jobExperienceTitleScrollProgress,
} from "@/canvases/space/components/CameraControls";
import JobExperienceItemDialog from "@/canvases/space/sections/jobExperienceSection/components/JobExperienceItemDialog";
import useJobExperienceListAsteroidsEntryAnimations from "@/canvases/space/sections/jobExperienceSection/hooks/useJobExperienceListAsteroidsEntryAnimations";
import useLoadJobExperienceListAsteroidsTextures from "@/canvases/space/sections/jobExperienceSection/hooks/useLoadJobExperienceListAsteroidsTextures";
import {
  JOB_EXPERIENCE_LIST,
  type JobExperienceItemDialogData,
} from "@/lib/constants";

function getContainedPlaneSize(
  texture: THREE.Texture,
  maxWidth: number,
  maxHeight: number
) {
  const image = texture.image as { width?: number; height?: number } | undefined;
  const imageWidth = image?.width ?? maxWidth;
  const imageHeight = image?.height ?? maxHeight;
  const aspectRatio = imageWidth / imageHeight;

  if (aspectRatio >= 1) {
    return [maxWidth, maxWidth / aspectRatio] as const;
  }

  return [maxHeight * aspectRatio, maxHeight] as const;
}

function JobExperienceListAsteroids() {
  const [beniaminekTexture, escTexture, ruigrokTexture] =
    useLoadJobExperienceListAsteroidsTextures();
  const beniaminekAsteroidRef = useRef<THREE.Group>(null);
  const escAsteroidRef = useRef<THREE.Group>(null);
  const ruigrokAsteroidRef = useRef<THREE.Group>(null);

  const [isOpenJobExperienceItemDialog, setIsOpenJobExperienceItemDialog] =
    useState(false);
  const [jobExperienceItemDialogData, setJobExperienceItemDialogData] =
    useState<JobExperienceItemDialogData>();

  function handlePointerEnterAsteroid() {
    document.body.style.cursor = "pointer";
  }

  function handlePointerLeaveAsteroid() {
    document.body.style.cursor = "default";
  }

  function handleClickAsteroid(jobExperienceData: JobExperienceItemDialogData) {
    document.body.style.cursor = "default";

    setIsOpenJobExperienceItemDialog(true);
    setJobExperienceItemDialogData({ ...jobExperienceData });
  }

  // Animate position in and out of the asteroids
  useJobExperienceListAsteroidsEntryAnimations({
    beniaminekAsteroidRef,
    escAsteroidRef,
    ruigrokAsteroidRef,
  });

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  const isRendered = useAnimateObjectVisibility(
    materialsToHideRefs,
    [jobExperienceListScrollProgress, jobExperienceListScrollProgress],
    [
      jobExperienceTitleScrollProgress,
      jobExperienceDownloadResumeScrollProgress,
    ],
  );
  if (!isRendered) return;

  const [beniaminekPlaneWidth, beniaminekPlaneHeight] = getContainedPlaneSize(
    beniaminekTexture,
    5.5,
    5.5
  );
  const [escPlaneWidth, escPlaneHeight] = getContainedPlaneSize(
    escTexture,
    14,
    5
  );
  const [ruigrokPlaneWidth, ruigrokPlaneHeight] = getContainedPlaneSize(
    ruigrokTexture,
    13,
    6
  );

  return (
    <>
      {/* Job experience item details dialog window */}
      <JobExperienceItemDialog
        isOpen={isOpenJobExperienceItemDialog}
        setIsOpen={setIsOpenJobExperienceItemDialog}
        jobExperienceData={jobExperienceItemDialogData}
      />

      {/* KS Beniaminek 03 */}
      <group
        ref={beniaminekAsteroidRef}
        onPointerEnter={handlePointerEnterAsteroid}
        onPointerLeave={handlePointerLeaveAsteroid}
        onClick={() => handleClickAsteroid(JOB_EXPERIENCE_LIST.beniaminek)}
        scale={0.14}
        position={[25, 0, -80]}
        rotation={[0.1, 2.1, 0]}
      >
        <AsteroidsModel animationSpeed={0.04} />

        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[0.1, 0.5]}
        >
          <mesh position={[10, -3, 5]} rotation-y={Math.PI / 2}>
            <meshBasicMaterial
              ref={(el) =>
                materialsToHideRefs.current.push(el as THREE.Material)
              }
              map={beniaminekTexture}
              transparent
              toneMapped={false}
            />
            <planeGeometry args={[beniaminekPlaneWidth, beniaminekPlaneHeight]} />
          </mesh>
        </Float>
      </group>

      {/* ESC */}
      <group
        ref={escAsteroidRef}
        onPointerEnter={handlePointerEnterAsteroid}
        onPointerLeave={handlePointerLeaveAsteroid}
        onClick={() => handleClickAsteroid(JOB_EXPERIENCE_LIST.esc)}
        scale={0.12}
        position={[9.95, 10, -80]}
        rotation={[1, 3.5, -0.3]}
      >
        <AsteroidsModel animationSpeed={0.06} />

        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[0.1, 0.5]}
        >
          <mesh position={[2, -13, 5]} rotation={[0.7, -0.1, 0.4]}>
            <meshBasicMaterial
              ref={(el) =>
                materialsToHideRefs.current.push(el as THREE.Material)
              }
              map={escTexture}
              transparent
              toneMapped={false}
            />
            <planeGeometry args={[escPlaneWidth, escPlaneHeight]} />
          </mesh>
        </Float>
      </group>

      {/* ruigrok */}
      <group
        ref={ruigrokAsteroidRef}
        onPointerEnter={handlePointerEnterAsteroid}
        onPointerLeave={handlePointerLeaveAsteroid}
        onClick={() => handleClickAsteroid(JOB_EXPERIENCE_LIST.ruigrok)}
        scale={0.13}
        position={[-15, 0, -80]}
        rotation={[0.3, 3, 0.1]}
      >
        <AsteroidsModel animationSpeed={0.05} />

        <Float
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[0.1, 0.5]}
        >
          <mesh position={[0, -3, 5]} rotation={[0.3, 0, 0]}>
            <meshBasicMaterial
              ref={(el) =>
                materialsToHideRefs.current.push(el as THREE.Material)
              }
              map={ruigrokTexture}
              transparent
              toneMapped={false}
            />
            <planeGeometry args={[ruigrokPlaneWidth, ruigrokPlaneHeight]} />
          </mesh>
        </Float>
      </group>
    </>
  );
}

export default JobExperienceListAsteroids;
