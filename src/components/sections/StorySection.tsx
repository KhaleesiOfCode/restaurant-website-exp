"use client";

import { useTranslations } from "@/hooks/useTranslations";

export default function StorySection() {
  const { t } = useTranslations();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
          </div>

          <div>
            <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
              {t("story.label")}
            </p>
            <h2 className="text-4xl sm:text-5xl font-display text-stone-900 mb-6 leading-tight">
              {t("story.heading")}
            </h2>
            <div className="w-16 h-0.5 bg-brand-600 mb-6" />
            <p className="text-stone-600 leading-relaxed mb-6">{t("story.body1")}</p>
            <p className="text-stone-600 leading-relaxed">{t("story.body2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
