"use client";

import { useState, type FormEvent } from "react";
import { siteInfo } from "@/data/site";
import PageTransition from "@/components/ui/PageTransition";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useTranslations } from "@/hooks/useTranslations";
import { useToast } from "@/components/ui/Toast";

export default function ContactPage() {
  const { t } = useTranslations();
  const { addToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        addToast("Message sent successfully!", "success");
      } else {
        addToast("Something went wrong. Please try again.", "error");
      }
    } catch {
      addToast("Network error. Please try again.", "error");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <PageTransition>
        <section className="pt-36 pb-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 text-center py-16">
            <h3 className="font-display text-2xl text-brand-700 mb-4">Grazie!</h3>
            <p className="text-stone-600">Your message has been sent. We&apos;ll be in touch soon.</p>
          </div>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="pt-32 pb-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">{t("contact.label")}</p>
            <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("contact.title")}</h1>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto">{t("contact.subtitle")}</p>
            <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="bg-white p-8 shadow-sm">
                <h2 className="font-display text-2xl text-stone-900 mb-6">{t("contact.formHeading")}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                        {t("contact.formName")} *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
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
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-brand-700 text-white py-3 px-6 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors disabled:opacity-50"
                  >
                    {sending ? "Sending..." : t("contact.formSubmit")}
                  </button>
                </form>
              </div>
            </div>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-xl text-stone-900 mb-4">{t("contact.visit")}</h3>
                  <div className="aspect-[16/9] bg-stone-200 rounded-lg shadow-sm flex items-center justify-center text-stone-400 text-sm">
                    {t("contact.mapPlaceholder")}
                  </div>
                  <div className="mt-4 text-stone-600 text-sm space-y-1">
                    <p className="font-medium text-stone-900">{t("site.name")}</p>
                    <p>{siteInfo.location.address}</p>
                    <p>{siteInfo.location.city}, {siteInfo.location.region}</p>
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
                        <br />{h.open} – {h.close}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl text-stone-900 mb-4">{t("contact.follow")}</h3>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-stone-600 hover:text-brand-700 transition-colors underline underline-offset-4">Instagram</a>
                    <a href="#" className="text-stone-600 hover:text-brand-700 transition-colors underline underline-offset-4">Facebook</a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
