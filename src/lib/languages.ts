import { i18n } from "@lingui/core";

import { messages as enMessages } from "@/locales/en/messages";

/**
 * Types
 */
export type LanguageValue = "en";
type AvailableLanguage = {
  value: LanguageValue;
  label: string;
  Icon?: React.ReactNode;
};

// Available languages list
export const AVAILABLE_LANGUAGES: AvailableLanguage[] = [
  {
    value: "en",
    label: "English",
    Icon: "🇮🇳",
  },
];

// i18n lingui initialization
i18n.load({
  en: enMessages,
});

export { i18n };
