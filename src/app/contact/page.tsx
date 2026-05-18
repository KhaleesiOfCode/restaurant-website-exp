"use client";

import { siteInfo } from "@/data/site";
import { useTranslations } from "@/hooks/useTranslations";

export default function ContactPage() {
  const { t } = useTranslations();

  return (
    <section className="pt-32 pb-20 bg-warm bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">{t("contact.label")}</p>
          <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("contact.title")}</h1>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
          <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl text-stone-900 mb-6">{t("contact.formHeading")}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                      {t("contact.formName")} *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                      {t("contact.formEmail")} *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">
                    {t("contact.formSubject")}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                    {t("contact.formMessage")} *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-700 text-white py-3 px-6 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors"
                >
                  {t("contact.formSubmit")}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">{t("contact.visit")}</h3>
              <div className="aspect-[16/9] bg-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-400 text-sm">
                {t("contact.mapPlaceholder")}
              </div>
              <div className="mt-4 text-stone-600 text-sm space-y-1">
                <p className="font-medium text-stone-900">{t("site.name")}</p>
                <p>{siteInfo.location.address}</p>
                <p>
                  {siteInfo.location.city}, {siteInfo.location.region}
                </p>
                <p className="pt-2">{siteInfo.contact.phone}</p>
                <p>{siteInfo.contact.email}</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-stone-900 mb-4">{t("contact.hours")}</h3>
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
              <h3 className="font-display text-xl text-stone-900 mb-4">{t("contact.follow")}</h3>
              <div className="flex gap-4 text-sm">
                <a
                  href="#"
                  className="text-stone-600 hover:text-brand-700 transition-colors underline underline-offset-4"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-stone-600 hover:text-brand-700 transition-colors underline underline-offset-4"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
