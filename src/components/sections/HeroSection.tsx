"use client";

import Button from "@/components/ui/Button";
import { useTranslations } from "@/hooks/useTranslations";

export default function HeroSection() {
  const { t } = useTranslations();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p className="text-brand-300 tracking-[0.2em] uppercase text-sm sm:text-base mb-4">
          {t("hero.welcome")}
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-display mb-6 leading-tight">
          {t("hero.titleLine1")}
          <br />
          {t("hero.titleLine2")}
        </h1>
        <p className="text-lg sm:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/reservations" size="lg">
            {t("hero.ctaReserve")}
          </Button>
          <Button href="/menu" variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
            {t("hero.ctaMenu")}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
