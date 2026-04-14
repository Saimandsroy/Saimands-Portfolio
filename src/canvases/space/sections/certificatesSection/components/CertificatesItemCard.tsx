import { certificatesListScrollProgress } from "@/canvases/space/components/CameraControls";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollContext } from "@/contexts/ScrollContext";
import type { CertificateData } from "@/lib/constants";

type CertificatesItemCardProps = {
  certificateData: CertificateData;
};

function CertificatesItemCard({
  certificateData: {
    Title,
    EndedDate,
    StartedDate,
    authorName,
    websiteLink,
    Icon,
  },
}: CertificatesItemCardProps) {
  const { scrollProgress } = useScrollContext();

  return (
    <Card className="w-[min(21rem,calc(100vw-2rem))] sm:w-[26rem] z-10 relative bg-card/50 gap-2 backdrop-blur-sm hover:[box-shadow:0_0_0.5rem_#FFFC54] transition-[box-shadow]">
      <CardHeader>
        <CardTitle className="text-lg sm:text-2xl max-w-[90%] pr-10">
          <Title />
        </CardTitle>

        <div className="absolute top-4 right-4 text-2xl size-8">
          <Icon />
        </div>
      </CardHeader>

      <CardFooter className="justify-between gap-2 flex-col items-start sm:flex-row sm:items-center text-muted-foreground">
        <a
          className="hover:text-[#FFFC54] transition-colors hover:underline focus-visible:underline focus-visible:text-[#FFFC54]"
          href={websiteLink}
          target="_blank"
          tabIndex={
            scrollProgress !== certificatesListScrollProgress ? -1 : undefined
          }
        >
          {authorName}
        </a>

        <span>
          <StartedDate />
          {" - "}
          <EndedDate />
        </span>
      </CardFooter>
    </Card>
  );
}

export default CertificatesItemCard;
