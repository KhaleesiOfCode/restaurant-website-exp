"use client";

import type { MenuCategory as MenuCategoryType } from "@/data/menu";
import MenuItem from "./MenuItem";
import { useTranslations } from "@/hooks/useTranslations";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const categoryKeyMap: Record<string, string> = {
  antipasti: "antipasti",
  primi: "primi",
  secondi: "secondi",
  dolci: "dolci",
  vini: "vini",
};

export default function MenuCategory({ category }: MenuCategoryProps) {
  const { t } = useTranslations();
  const catKey = categoryKeyMap[category.id];
  const name = catKey ? t(`menu.categories.${catKey}`) : category.name;
  const desc = catKey ? t(`menu.categories.${catKey}Desc`) : category.description;

  return (
    <div className="mb-16 last:mb-0">
      <div className="text-center mb-10">
        <h3 className="font-display text-3xl text-stone-900 mb-2">{name}</h3>
        <p className="text-stone-500 text-sm">{desc}</p>
        <div className="w-12 h-0.5 bg-brand-600 mx-auto mt-4" />
      </div>

      <div className="max-w-3xl mx-auto">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
