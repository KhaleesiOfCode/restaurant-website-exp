"use client";

import Button from "@/components/ui/Button";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import { OliveBranch, SectionDivider } from "@/components/ui/DecorativeAccents";
import { useTranslations } from "@/hooks/useTranslations";

export default function Home() {
  const { t } = useTranslations();

  return (
    <>
      <HeroSection />
      <StorySection />

      <section className="py-24 bg-warm bg-texture relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-brand-600">
          <OliveBranch className="w-40 h-auto opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
            {t("home.featureTitle")}
          </p>
          <h2 className="text-4xl sm:text-5xl font-display text-stone-900 mb-6">
            {t("home.featureHeading")}
          </h2>
          <SectionDivider className="w-48 h-auto mx-auto mb-6 text-brand-600" />
          <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed mb-12">
            {t("home.featureDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="interactive-card bg-white p-8 shadow-sm"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl text-stone-900 mb-3">
                  {t(`home.feature${i + 1}Title`)}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {t(`home.feature${i + 1}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-center bg-no-repeat bg-fixed relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-6">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-stone-300 text-lg mb-8 font-light">
            {t("home.ctaDesc")}
          </p>
          <Button href="/reservations" size="lg" className="bg-brand-700 hover:bg-brand-800">
            {t("home.ctaBtn")}
          </Button>
        </div>
      </section>
    </>
  );
}

const features = [
  { icon: "🍝" },
  { icon: "🍷" },
  { icon: "🌿" },
];
