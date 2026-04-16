import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { heroMyOriginScrollProgress } from "@/canvases/space/components/CameraControls";
import { Github } from "@/components/icons";
import { useScrollContext } from "@/contexts/ScrollContext";
import { GITHUB_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

function HeroMyOrigin() {
  const { t } = useLingui();
  const { scrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    heroMyOriginScrollProgress,
    heroMyOriginScrollProgress,
  ]);

  return (
    <group>
      <Html
        className="select-none flex flex-col items-center pointer-events-none px-3 sm:px-4"
        center
        position={[0.2, -0.05, -16.26]}
      >
        {/* Title */}
        <h3
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="text-center text-gold-gradient opacity-0 text-2xl xs:text-3xl sm:text-4xl flex items-center gap-2 font-bold max-w-[min(100vw-1.5rem,22rem)]"
        >
          <span>{t`I originate from India`}</span>
          <span className="font-emoji text-foreground text-2xl">🇮🇳</span>
        </h3>

        {/* Other countries subtitle */}
        <h4
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="font-semibold text-gold-gradient text-base xs:text-lg sm:text-2xl opacity-0 leading-6 sm:leading-7 tracking-[-0.0125em] py-3 sm:py-4 text-center flex flex-col items-center max-w-[min(100vw-1.5rem,24rem)]"
        >
          <span>{t`But my code is already running across the globe 🌍`}</span>
        </h4>

        {/* Github subtitle */}
        <h4
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="font-semibold text-gold-gradient opacity-0 text-sm xs:text-base sm:text-2xl leading-6 sm:leading-7 tracking-[-0.0125em] w-[min(100vw-1.5rem,20rem)] xs:w-[min(100vw-1.5rem,24rem)] sm:w-[28rem] text-center"
        >
          <span>{t`Check out my `}</span>
          <span>
            <a
              target="_blank"
              href={GITHUB_LINK}
              className={cn(
                "font-bold inline-flex gap-1 hover:text-[#ffde8c] focus-visible:text-[#ffde8c] transition-colors translate-y-[0.185rem] items-center text-[#DEC27C] underline",
                scrollProgress !== heroMyOriginScrollProgress
                  ? "pointer-events-none opacity-0"
                  : "pointer-events-auto"
              )}
              tabIndex={
                scrollProgress !== heroMyOriginScrollProgress ? -1 : undefined
              }
            >
              <Github />
              {t`GitHub`}
            </a>
          </span>
          <span>{t` to see what I'm shipping 👨‍💻`}</span>
        </h4>
      </Html>
    </group>
  );
}

export default HeroMyOrigin;
