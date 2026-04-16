import { LensFlare } from "@andersonmancini/lens-flare";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { lazy, Suspense, useEffect, useState } from "react";

// Lazy imports for code splitting
import useLensFlareDebugControls from "@/canvases/hooks/useLensFlareDebugControls";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { useScrollContext } from "@/contexts/ScrollContext";
const CameraControls = lazy(
  () => import("@/canvases/space/components/CameraControls")
);
const Lighting = lazy(() => import("@/canvases/space/components/Lighting"));
const SpaceContextProvider = lazy(() =>
  import("@/canvases/space/contexts/SpaceContext").then((module) => ({
    default: module.SpaceContextProvider,
  }))
);
const StarsModel = lazy(
  () => import("@/canvases/space/stars/components/StarsModel")
);
const HeroSection = lazy(
  () => import("@/canvases/space/sections/heroSection/components/HeroSection")
);
const JobExperienceSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/jobExperienceSection/components/JobExperienceSection"
    )
);
const CertificatesSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/certificatesSection/components/CertificatesSection"
    )
);
const ProjectsSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/projectsSection/components/ProjectsSection"
    )
);
const ContactSection = lazy(
  () =>
    import("@/canvases/space/sections/contactSection/components/ContactSection")
);

function LazySection({
  component: Component,
  shouldLoad,
}: {
  component: React.LazyExoticComponent<() => React.JSX.Element>;
  shouldLoad: boolean;
}) {
  const [hasLoaded, setHasLoaded] = useState(shouldLoad);

  useEffect(() => {
    if (shouldLoad) {
      setHasLoaded(true);
    }
  }, [shouldLoad]);

  if (!hasLoaded) return null;

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}

function SpaceCanvas() {
  const { toneMapping, depth, antialias, multisampling } = useSettingsContext();
  const { scrollProgress } = useScrollContext();
  const lensFlareControls = useLensFlareDebugControls();
  const isDebugMode = window.location.hash === "#debug";

  return (
    <Canvas
      gl={{
        toneMapping,
        antialias,
        depth,
      }}
      camera={{
        fov: 45,
        far: 3000,
        position: [0.51, 0.6, -19.85],
        rotation: [0.0, 2.78, 0.0],
      }}
      className="h-screen! w-screen!"
    >
      {/* Camera controls */}
      <CameraControls />

      {/* Lighting */}
      <Lighting />

      {/* Performance monitor */}
      {isDebugMode && <Perf position="top-left" />}

      {/* Post processing */}
      <EffectComposer multisampling={multisampling}>
        <>
          {/* Lens flare */}
          <LensFlare
            {...lensFlareControls}
            userData={{ lensflare: "no-occlusion" }}
            dirtTextureFile="/assets/textures/sun/lens_dirt_texture.jpg"
          />
        </>
      </EffectComposer>

      <Suspense fallback={null}>
        <SpaceContextProvider>
          {/* Models */}
          <StarsModel />

          {/* Sections */}
          <LazySection component={HeroSection} shouldLoad={scrollProgress >= 0} />
          <LazySection
            component={JobExperienceSection}
            shouldLoad={scrollProgress >= 2}
          />
          <LazySection
            component={CertificatesSection}
            shouldLoad={scrollProgress >= 5}
          />
          <LazySection
            component={ProjectsSection}
            shouldLoad={scrollProgress >= 8}
          />
          <LazySection component={ContactSection} shouldLoad={scrollProgress >= 10} />
        </SpaceContextProvider>
      </Suspense>
    </Canvas>
  );
}

export default SpaceCanvas;
