"use client";

import ReservationForm from "@/components/reservations/ReservationForm";
import { siteInfo } from "@/data/site";
import { useTranslations } from "@/hooks/useTranslations";

export default function ReservationsPage() {
  const { t } = useTranslations();

  return (
    <section className="pt-32 pb-20 bg-warm bg-texture">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">
            {t("reservations.label")}
          </p>
          <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("reservations.title")}</h1>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            {t("reservations.subtitle")}
          </p>
          <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-sm">
              <ReservationForm />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-lg text-stone-900 mb-4">{t("reservations.hours")}</h3>
              <div className="space-y-2 text-sm text-stone-600">
                {siteInfo.hours.map((h) => (
                  <p key={h.day}>
                    <span className="text-stone-500">{h.day}</span>
                    <br />
                    {h.open} – {h.close}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-stone-900 mb-4">{t("reservations.contact")}</h3>
              <div className="text-sm text-stone-600 space-y-1">
                <p>{siteInfo.contact.phone}</p>
                <p>{siteInfo.contact.email}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-stone-900 mb-4">{t("reservations.location")}</h3>
              <div className="text-sm text-stone-600 space-y-1">
                <p>{siteInfo.location.address}</p>
                <p>
                  {siteInfo.location.city}, {siteInfo.location.region}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
