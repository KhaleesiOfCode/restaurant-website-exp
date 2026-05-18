"use client";

import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageTransition from "@/components/ui/PageTransition";
import { useTranslations } from "@/hooks/useTranslations";

export default function Home() {
  const { t } = useTranslations();

  return (
    <PageTransition>
      <HeroSection />
      <StorySection />

      <section className="py-24 bg-warm bg-texture relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3 block">
              {t("home.featureTitle")}
            </span>
            <h2 className="text-4xl sm:text-5xl font-display text-stone-900 mb-6">
              {t("home.featureHeading")}
            </h2>
          </AnimatedSection>
          <div className="w-16 h-0.5 bg-brand-600 mx-auto mb-6" />
          <AnimatedSection delay={0.1}>
            <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed mb-12">
              {t("home.featureDesc")}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} delay={0.1 * i} direction="up">
                <div className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="text-5xl mb-4">{["🍝", "🍷", "🌿"][i - 1]}</div>
                  <h3 className="font-display text-xl text-stone-900 mb-3">
                    {t(`home.feature${i}Title`)}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {t(`home.feature${i}Desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cover bg-center bg-no-repeat bg-fixed relative">
        <div className="absolute inset-0 bg-black/70" />
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-6">
            {t("home.ctaTitle")}
          </h2>
          <p className="text-stone-300 text-lg mb-8 font-light">
            {t("home.ctaDesc")}
          </p>
          <Link
            href="/reservations"
            className="inline-block bg-brand-700 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors"
          >
            {t("home.ctaBtn")}
          </Link>
        </AnimatedSection>
      </section>
    </PageTransition>
  );
}
