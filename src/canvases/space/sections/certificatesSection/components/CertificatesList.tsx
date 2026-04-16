import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { certificatesListScrollProgress } from "@/canvases/space/components/CameraControls";
import CertificatesItemCard from "@/canvases/space/sections/certificatesSection/components/CertificatesItemCard";
import useCertificatesScroll, {
  htmlContainerElScrollToY,
} from "@/canvases/space/sections/certificatesSection/hooks/useCertificatesScroll";
import { Button } from "@/components/ui/button";
import { useScrollContext } from "@/contexts/ScrollContext";
import { CERTIFICATES_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";

function CertificatesList() {
  const { t } = useLingui();
  const { scrollProgress } = useScrollContext();
  const htmlContainerRef = useRef<HTMLDivElement>(null);
  const [hasExpandedLessRelevant, setHasExpandedLessRelevant] = useState(false);

  function handleToggleExpandRelevant() {
    if (hasExpandedLessRelevant) {
      // Avoid immediately incrementing the scrollProgress on hiding less relevant certificates
      htmlContainerEl.scrollTo(0, htmlContainerElScrollToY);
      return setHasExpandedLessRelevant(false);
    } else setHasExpandedLessRelevant(true);
  }

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(
    materialsToHideRefs,
    [certificatesListScrollProgress, certificatesListScrollProgress],
    undefined,
    {
      delay: 1,
    }
  );

  const htmlContainerEl = htmlContainerRef.current as HTMLDivElement;

  useCertificatesScroll(htmlContainerEl);

  return (
    <Html
      position={[-150, 43.5, -510]}
      fullscreen
      wrapperClass="transform-[unset]! left-0! top-0!"
      className={cn(
        "left-0! top-0! overflow-y-scroll scrollbar-hidden overflow-x-hidden relative",
        scrollProgress !== certificatesListScrollProgress
          ? "select-none pointer-events-none"
          : "pointer-events-auto"
      )}
      ref={htmlContainerRef}
    >
      <div
        tabIndex={-1}
        ref={(el) => {
          materialsToHideRefs.current.push(el as HTMLDivElement);
        }}
        className="flex flex-col absolute left-1/2 -translate-x-1/2 sm:left-[60%] sm:translate-x-0 py-[22rem] sm:py-[27.5rem] gap-3 sm:gap-4 opacity-0 items-center sm:items-stretch w-[min(100vw-1rem,26rem)] sm:w-auto px-2 sm:px-0"
        // Adding event listener for it to bubble up
        onScroll={() => {}}
      >
        {CERTIFICATES_LIST.map((certificate, i) =>
          hasExpandedLessRelevant ? (
            // Show every certificate
            <CertificatesItemCard certificateData={certificate} key={i} />
          ) : (
            certificate.isRelevant && (
              // Show only relevant certificates
              <CertificatesItemCard certificateData={certificate} key={i} />
            )
          )
        )}
        <Button
          className="text-muted-foreground w-full sm:w-auto"
          size="sm"
          onClick={handleToggleExpandRelevant}
          variant="ghost"
          tabIndex={
            scrollProgress !== certificatesListScrollProgress ? -1 : undefined
          }
        >
          {hasExpandedLessRelevant
            ? t`Show less`
            : t`Show more, less relevant certificates`}
        </Button>
      </div>
    </Html>
  );
}

export default CertificatesList;
