import AudioSettingButton from "@/components/AudioSettingButton";
import CreditsDialogButton from "@/components/CreditsDialogButton";
import GraphicsSettingButton from "@/components/GraphicsSettingButton";
import LanguageSettingButton from "@/components/LanguageSettingButton";
import ResetSettingsDialogButton from "@/components/ResetSettingsDialogButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSettingsContext } from "@/contexts/SettingsContext";
import {
  CONTACT_EMAIL,
  GITHUB_AVATAR_LINK,
  GITHUB_LINK,
} from "@/lib/constants";

function TopBar() {
  const { hasStartedExperience } = useSettingsContext();

  return (
    <nav className="fixed top-0 left-0 w-screen py-2 px-3 sm:px-8 z-50 justify-between flex items-center gap-2">
      <div className="flex items-center gap-2 min-w-0">
        {/* GitHub avatar link */}
        <a
          tabIndex={!hasStartedExperience ? -1 : undefined}
          target="_blank"
          className="opacity-75 hover:opacity-100 focus-visible:opacity-100 hover:scale-110 focus-visible:scale-110 transition-[opacity,scale] will-change-transform"
          href={GITHUB_LINK}
        >
          <Avatar className="size-6">
            <AvatarImage width={24} height={24} src={GITHUB_AVATAR_LINK} />
            <AvatarFallback>MM</AvatarFallback>
          </Avatar>
        </a>

        {/* Contact email link */}
        <a
          tabIndex={!hasStartedExperience ? -1 : undefined}
          className="text-muted-foreground text-sm hover:text-foreground transition-colors focus-visible:text-foreground hover:underline focus-visible:underline"
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
        >
          <span className="block max-w-[42vw] truncate sm:max-w-none">
            {CONTACT_EMAIL}
          </span>
        </a>
      </div>

      <div className="hidden sm:flex items-center gap-1 sm:gap-1.5 shrink-0">
        {/* Settings buttons */}
        <LanguageSettingButton
          buttonClassName="size-7 p-1.5 text-[0.65rem] sm:size-8 sm:p-2 sm:text-xs"
          buttonVariant="outline"
          tabIndex={!hasStartedExperience ? -1 : undefined}
        />
        <GraphicsSettingButton
          buttonClassName="size-7 p-1.5 focus:outline-red-500! text-[0.65rem] sm:size-8 sm:p-2 sm:text-xs"
          buttonVariant="outline"
          tabIndex={!hasStartedExperience ? -1 : undefined}
        />
        <AudioSettingButton
          buttonClassName="size-7 p-1.5 text-[0.65rem] sm:size-8 sm:p-2 sm:text-xs"
          buttonVariant="outline"
          tabIndex={!hasStartedExperience ? -1 : undefined}
        />
        <CreditsDialogButton />
        <ResetSettingsDialogButton />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            tabIndex={!hasStartedExperience ? -1 : undefined}
            variant="outline"
            size="icon"
            className="sm:hidden size-8 shrink-0"
          >
            ☰
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:hidden z-[500000001] max-w-[calc(100%-1rem)] p-4">
          <DialogHeader>
            <DialogTitle className="sr-only">Menu</DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-2">
            <LanguageSettingButton
              buttonClassName="w-full h-10 text-xs"
              buttonVariant="outline"
              tabIndex={!hasStartedExperience ? -1 : undefined}
            />
            <GraphicsSettingButton
              buttonClassName="w-full h-10 text-xs"
              buttonVariant="outline"
              tabIndex={!hasStartedExperience ? -1 : undefined}
            />
            <AudioSettingButton
              buttonClassName="w-full h-10 text-xs"
              buttonVariant="outline"
              tabIndex={!hasStartedExperience ? -1 : undefined}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <CreditsDialogButton />
            <ResetSettingsDialogButton />
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export default TopBar;
