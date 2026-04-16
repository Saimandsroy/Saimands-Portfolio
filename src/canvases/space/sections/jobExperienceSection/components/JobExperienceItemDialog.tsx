import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollContext } from "@/contexts/ScrollContext";
import type { JobExperienceItemDialogData } from "@/lib/constants";

type JobExperienceItemDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jobExperienceData?: JobExperienceItemDialogData;
};

function JobExperienceItemDialog({
  isOpen,
  setIsOpen,
  jobExperienceData,
}: JobExperienceItemDialogProps) {
  const { t } = useLingui();
  const { setIsScrollingPaused } = useScrollContext();

  function handleOpenDialog(newIsOpen: boolean) {
    setIsScrollingPaused(newIsOpen);
    setIsOpen(newIsOpen);
  }

  if (!jobExperienceData) return;
  const {
    logoImgSrc,
    learnMoreUrl,
    countryEmoji,
    Occupation,
    Description,
    Location,
    company,
    StartedDate,
    EndedDate,
    SkillsNeeded,
    Responsibilities,
  } = jobExperienceData;

  return (
    <Html wrapperClass="z-[500000001]">
      <Dialog open={isOpen} onOpenChange={handleOpenDialog}>
        <DialogContent className="z-[500000001] p-4 sm:p-6">
          <DialogHeader className="overflow-y-scroll max-h-[80vh]">
            <div className="flex gap-3 sm:gap-4 items-start sm:items-center flex-col xs:flex-row">
              {/* Logo */}
              <img src={logoImgSrc} className="size-16 sm:size-20 object-contain shrink-0" />

              <div className="flex-grow min-w-0">
                <DialogTitle className="text-lg xs:text-xl sm:text-2xl font-bold leading-tight">
                  {/* Occupation */}
                  {<Occupation />}
                </DialogTitle>

                <h4 className="text-xs xs:text-sm text-muted-foreground flex items-start sm:items-center justify-between flex-wrap gap-x-2">
                  {/* Company */}
                  <span>{company}</span>

                  {/* Dates */}
                  <span>
                    <StartedDate /> - <EndedDate />
                  </span>
                </h4>

                <h4 className="text-xs xs:text-sm text-muted-foreground">
                  {/* Location */}
                  <span>
                    <Location />{" "}
                    <span className="font-emoji">{countryEmoji}</span>{" "}
                  </span>
                </h4>
              </div>
            </div>

            <DialogDescription className="py-2 text-xs xs:text-sm sm:text-base">
              {/* Description */}
              <h3 className="text-base xs:text-lg font-medium text-foreground pb-1 leading-snug">
                <Description />
              </h3>

              {/* Responsibilities */}
              <div className="py-3">
                <h4 className="font-medium text-foreground">
                  Responsibilities:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {<Responsibilities />}
                </ul>
              </div>

              {/* Skills needed */}
              <div className="pt-3">
                <h4 className="font-medium text-foreground">Skills needed:</h4>
                <ul className="list-disc list-inside space-y-1">{<SkillsNeeded />}</ul>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="justify-end flex items-stretch sm:items-center">
            <a href={learnMoreUrl} target="_blank" tabIndex={-1}>
              <Button
                size="sm"
                className="w-full sm:w-auto"
                variant="secondary"
              >{t`Learn more`}</Button>
            </a>

            <DialogClose asChild>
              <Button size="sm" className="w-full sm:w-auto">{t`Close`}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Html>
  );
}

export default JobExperienceItemDialog;
