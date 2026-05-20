"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "de", label: "DE" },
  ];

  return (
    <div className="flex items-center gap-1 border-l border-stone-300 pl-4 ml-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={cn(
            "text-xs tracking-wider font-medium px-2 py-1 transition-all",
            locale === lang.code
              ? "text-brand-700 border-b-2 border-brand-700"
              : "text-stone-400 hover:text-stone-600 border-b-2 border-transparent"
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
