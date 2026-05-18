"use client";

import ReservationForm from "@/components/reservations/ReservationForm";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { siteInfo } from "@/data/site";
import { useTranslations } from "@/hooks/useTranslations";
import { OliveBranch, SectionDivider } from "@/components/ui/DecorativeAccents";

export default function ReservationsPage() {
  const { t } = useTranslations();

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-warm bg-texture min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
              {t("reservations.label")}
            </p>
            <h1 className="text-5xl sm:text-6xl font-display text-stone-900 leading-tight">
              {t("reservations.title")}
            </h1>
            <SectionDivider className="w-48 h-auto mx-auto mt-6 text-brand-600" />
          </AnimatedSection>

          <div className="bg-white shadow-xl border border-stone-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: form area */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <div className="max-w-xl">
                  <h2 className="font-display text-2xl text-stone-900 mb-2">Book Your Table</h2>
                  <p className="text-stone-400 text-sm mb-8">
                    Fill in the details below and we&apos;ll confirm your reservation.
                  </p>
                  <ReservationForm />
                </div>
              </div>

              {/* Right: info sidebar */}
              <div className="lg:col-span-2 bg-stone-50 p-8 md:p-12 border-l border-stone-100">
                <div className="text-brand-600 mb-8">
                  <OliveBranch className="w-32 h-auto opacity-60" />
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="font-display text-lg text-stone-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-px bg-brand-600 inline-block" />
                      {t("reservations.hours")}
                    </h3>
                    <div className="space-y-3 text-sm">
                      {siteInfo.hours.map((h) => (
                        <div key={h.day} className="flex justify-between">
                          <span className="text-stone-500">{h.day}</span>
                          <span className="text-stone-800 font-medium">
                            {h.open} – {h.close}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-px bg-stone-200" />

                  <div>
                    <h3 className="font-display text-lg text-stone-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-px bg-brand-600 inline-block" />
                      {t("reservations.contact")}
                    </h3>
                    <div className="text-sm text-stone-600 space-y-1">
                      <p className="text-stone-800 font-medium">{siteInfo.contact.phone}</p>
                      <p>{siteInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-stone-200" />

                  <div>
                    <h3 className="font-display text-lg text-stone-900 mb-4 flex items-center gap-2">
                      <span className="w-6 h-px bg-brand-600 inline-block" />
                      {t("reservations.location")}
                    </h3>
                    <div className="text-sm text-stone-600 space-y-1">
                      <p className="text-stone-800 font-medium">{siteInfo.name}</p>
                      <p>{siteInfo.location.address}</p>
                      <p>
                        {siteInfo.location.city}, {siteInfo.location.region}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-stone-200" />

                  <div className="text-xs text-stone-400 italic leading-relaxed">
                    &ldquo;We kindly ask that you inform us of any dietary requirements or allergies when booking.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
