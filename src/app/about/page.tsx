"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import PageTransition from "@/components/ui/PageTransition";
import { useTranslations } from "@/hooks/useTranslations";

export default function AboutPage() {
  const { t } = useTranslations();

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
              {t("about.label")}
            </p>
            <h1 className="text-5xl sm:text-6xl font-display text-stone-900">
              {t("about.title")}
            </h1>
            <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="left">
              <div
                className="aspect-[4/5] bg-cover bg-center rounded-lg shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')",
                }}
              />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="font-display text-3xl text-stone-900 mb-6">{t("about.subheading")}</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>{t("about.para1")}</p>
                <p>{t("about.para2")}</p>
                <p>{t("about.para3")}</p>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center">
            <AnimatedSection>
              <h2 className="font-display text-3xl text-stone-900 mb-12">{t("about.philosophy")}</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <AnimatedSection key={i} delay={0.1 * i}>
                  <div className="p-8">
                    <h3 className="font-display text-xl text-stone-900 mb-4">
                      {t(`about.value${i}Title`)}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      {t(`about.value${i}Desc`)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
