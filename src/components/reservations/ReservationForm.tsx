"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { useTranslations } from "@/hooks/useTranslations";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function ReservationForm() {
  const { t } = useTranslations();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <h3 className="font-display text-2xl text-brand-700 mb-4">{t("reservations.successTitle")}</h3>
        <p className="text-stone-600">{t("reservations.successBody")}</p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
          }}
          className="mt-6"
        >
          {t("reservations.successReset")}
        </Button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formName")} *
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
            {t("reservations.formEmail")} *
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

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formPhone")} *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formGuests")} *
          </label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
          >
            {[...Array(8)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? t("reservations.formGuest") : t("reservations.formGuestsLabel")}
              </option>
            ))}
            <option value="9">{t("reservations.formLargerParty")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formDate")} *
          </label>
          <input
            id="date"
            type="date"
            required
            min={today}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formTime")} *
          </label>
          <select
            id="time"
            value={form.time}
            required
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white"
          >
            <option value="">{t("reservations.formSelectTime")}</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="notes" className="block text-sm font-medium text-stone-700 mb-1">
            {t("reservations.formNotes")}
          </label>
          <textarea
            id="notes"
            rows={3}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-colors bg-white resize-none"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <Button type="submit" size="lg">
          {t("reservations.formSubmit")}
        </Button>
      </div>
    </form>
  );
}
