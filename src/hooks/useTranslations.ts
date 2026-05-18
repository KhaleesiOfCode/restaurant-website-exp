"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { translations, type Locale } from "@/i18n/translations";

type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

function deepGet(obj: NestedTranslations, path: string): string {
  const keys = path.split(".");
  let current: string | NestedTranslations = obj;
  for (const key of keys) {
    if (typeof current === "object" && current !== null && key in current) {
      current = current[key] as string | NestedTranslations;
    } else {
      return path;
    }
  }
  return typeof current === "string" ? current : path;
}

export function useTranslations() {
  const { locale } = useLocale();
  const t = (path: string): string => {
    return deepGet(translations[locale] as NestedTranslations, path);
  };
  return { t, locale };
}
