"use client";

import { useEffect, useState } from "react";
import MenuCategory from "@/components/menu/MenuCategory";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useTranslations } from "@/hooks/useTranslations";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary: string;
  allergens: string;
  origin: string;
  pairing: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export default function MenuPage() {
  const { t } = useTranslations();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.ok && res.json())
      .then((data) => data && setCategories(data))
      .catch(() => {});
  }, []);

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
              {t("menu.label")}
            </p>
            <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("menu.title")}</h1>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto">
              {t("menu.subtitle")}
            </p>
            <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
          </AnimatedSection>

          {categories.map((category, i) => (
            <AnimatedSection key={category.id} delay={0.05 * i}>
              <MenuCategory
                category={{
                  id: category.id,
                  name: category.name,
                  description: category.description,
                  items: category.items.map((item) => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    price: item.price,
                    dietary: item.dietary ? item.dietary.split(", ").filter(Boolean) : undefined,
                    allergens: item.allergens || undefined,
                    origin: item.origin || undefined,
                    pairing: item.pairing || undefined,
                  })),
                }}
              />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
