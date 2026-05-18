"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/hooks/useTranslations";
import { OliveBranch, SectionDivider } from "@/components/ui/DecorativeAccents";

function ParallaxSection({
  children,
  speed = 0.3,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.top < window.innerHeight) {
        setOffsetY(scrolled * speed);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslations();

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 parallax-layer"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')",
            transform: "translateZ(0)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center px-4">
          <p className="text-brand-300 tracking-[0.2em] uppercase text-sm mb-4">
            {t("about.label")}
          </p>
          <h1 className="text-5xl sm:text-7xl font-display text-white mb-4">{t("about.title")}</h1>
          <SectionDivider className="w-48 h-auto mx-auto text-brand-500" />
        </div>
      </section>

      <section className="py-24 bg-warm bg-texture relative overflow-hidden">
        <div className="absolute top-12 left-8 text-brand-600 opacity-20 hidden lg:block">
          <OliveBranch className="w-60 h-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ParallaxSection speed={0.2}>
              <div
                className="aspect-[4/5] bg-cover bg-center rounded-lg shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop')",
                }}
              />
            </ParallaxSection>

            <div>
              <h2 className="font-display text-3xl text-stone-900 mb-6">{t("about.subheading")}</h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>{t("about.para1")}</p>
                <p>{t("about.para2")}</p>
                <p>{t("about.para3")}</p>
              </div>
              <SectionDivider className="w-32 h-auto mt-8 text-brand-600" />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-stone-900 mb-12">{t("about.philosophy")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="interactive-card bg-white p-8 shadow-sm text-left">
                  <div className="w-10 h-0.5 bg-brand-600 mb-6" />
                  <h3 className="font-display text-xl text-stone-900 mb-4">
                    {t(`about.value${i}Title`)}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {t(`about.value${i}Desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
