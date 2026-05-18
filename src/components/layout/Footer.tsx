"use client";

import { siteInfo } from "@/data/site";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl text-white mb-4">{t("site.name")}</h3>
            <p className="text-sm leading-relaxed text-stone-400">{t("site.description")}</p>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm">
              <p>{siteInfo.location.address}</p>
              <p>
                {siteInfo.location.city}, {siteInfo.location.region}
              </p>
              <p className="pt-2">{siteInfo.contact.phone}</p>
              <p>{siteInfo.contact.email}</p>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">{t("footer.hours")}</h4>
            <div className="space-y-2 text-sm">
              {siteInfo.hours.map((h) => (
                <p key={h.day}>
                  <span className="text-stone-400">{h.day}</span>
                  <br />
                  {h.open} – {h.close}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {t("site.name")}. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <Link href={"/"} className="hover:text-brand-400 transition-colors">
              Instagram
            </Link>
            <Link href={"/"} className="hover:text-brand-400 transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
