"use client";

import { menuCategories } from "@/data/menu";
import MenuCategory from "@/components/menu/MenuCategory";
import { useTranslations } from "@/hooks/useTranslations";

export default function MenuPage() {
  const { t } = useTranslations();

  return (
    <section className="pt-32 pb-20 bg-warm bg-texture">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
            {t("menu.label")}
          </p>
          <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("menu.title")}</h1>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            {t("menu.subtitle")}
          </p>
          <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
        </div>

        {menuCategories.map((category) => (
          <MenuCategory key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
