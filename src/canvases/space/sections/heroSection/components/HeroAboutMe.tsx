import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { heroAboutMeScrollProgress } from "@/canvases/space/components/CameraControls";

function HeroAboutMe() {
  const { t } = useLingui();

  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    heroAboutMeScrollProgress,
    heroAboutMeScrollProgress,
  ]);

  return (
    <group>
      {/* Title */}
      <Html className="select-none pointer-events-none px-3 sm:px-4" position={[1, 3, -16]}>
        <h1
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="opacity-0 text-gold-gradient text-3xl xs:text-4xl sm:text-6xl font-bold pb-3 sm:pb-4 max-w-[min(100vw-1.5rem,24rem)]"
        >
          {t`About me `}
          <span className="font-emoji text-foreground">👋</span>
        </h1>

        {/* Description */}
        <p
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLParagraphElement);
          }}
          className="opacity-0 text-gold-gradient text-sm xs:text-base sm:text-xl font-semibold w-[min(100vw-1.5rem,18rem)] xs:w-[min(100vw-1.5rem,22rem)] sm:w-sm flex flex-col gap-3 sm:gap-4 leading-relaxed"
        >
          <span>
            {t`My name's Saimands Roy and I'm passionate about building real-world tech that actually matters. Currently, I'm a 3rd year Computer Science Engineering student at ITGGV Bilaspur, on a mission to blend software engineering with artificial intelligence.`}
            <span className="font-emoji text-foreground">🎓</span>
          </span>
          <span>
            {t`My primary focus lies in full-stack development and AI systems from crafting scalable backends with Spring Boot and microservices, to designing AI agents powered by Generative AI and Prompt Engineering. I also love sharpening my problem-solving edge through DSA and competitive programming.`}
            <span className="font-emoji text-foreground">🎨</span>
          </span>
          <span>
            {t`Beyond the screen, I believe in learning by doing turning curiosity into production-grade projects and real experiments. I'm open to internships, collaborations, and connecting with fellow builders, mentors, or recruiters. If you're working on something exciting, let's talk!`}
            <span className="font-emoji text-foreground">✨</span>
          </span>
        </p>
      </Html>
    </group>
  );
}

export default HeroAboutMe;
