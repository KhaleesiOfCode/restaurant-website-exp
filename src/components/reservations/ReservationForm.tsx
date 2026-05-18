"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import PhoneInput from "@/components/ui/PhoneInput";
import { useTranslations } from "@/hooks/useTranslations";
import { useToast } from "@/components/ui/Toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
}

interface Slot {
  time: string;
  available: boolean;
  remainingSeats: number;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "+39 ",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function ReservationForm() {
  const { t } = useTranslations();
  const { addToast } = useToast();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [slots, setSlots] = useState<Slot[] | null>(null);
  const [checking, setChecking] = useState(false);

  const handleDateChange = async (date: string) => {
    setForm({ ...form, date, time: "" });
    setSlots(null);
    if (!date) return;

    setChecking(true);
    try {
      const res = await fetch(`/api/reservations/availability?date=${date}`);
      if (res.ok) {
        const data = await res.json();
        setSlots(data.slots);
      }
    } catch {
      // silent
    } finally {
      setChecking(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        addToast("Reservation submitted successfully!", "success");
      } else {
        addToast(data.error || "Something went wrong. Please try again.", "error");
      }
    } catch {
      addToast("Network error. Please try again.", "error");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-stone-900 mb-2">{t("reservations.successTitle")}</h3>
        <p className="text-stone-500 text-sm mb-8">{t("reservations.successBody")}</p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setForm(initialForm);
            setSlots(null);
          }}
          size="sm"
        >
          {t("reservations.successReset")}
        </Button>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-7">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
            {t("reservations.formName")}
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm placeholder:text-stone-300 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
            {t("reservations.formEmail")}
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm placeholder:text-stone-300 transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
            {t("reservations.formPhone")}
          </label>
          <PhoneInput
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
              {t("reservations.formGuests")}
            </label>
            <select
              value={form.guests}
              onChange={(e) => setForm({ ...form, guests: e.target.value })}
              className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm transition-colors"
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
            <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
              {t("reservations.formDate")}
            </label>
            <input
              type="date"
              required
              min={today}
              value={form.date}
              onChange={(e) => handleDateChange(e.target.value)}
              className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm transition-colors [color-scheme:light]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
            {t("reservations.formTime")}
          </label>
          <select
            value={form.time}
            required
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm transition-colors"
          >
            <option value="">
              {checking ? "Checking availability..." : t("reservations.formSelectTime")}
            </option>
            {slots?.map((slot) => (
              <option key={slot.time} value={slot.time} disabled={!slot.available}>
                {slot.time}
                {slot.available && slot.remainingSeats <= 5
                  ? ` — only ${slot.remainingSeats} seat${slot.remainingSeats === 1 ? "" : "s"} left`
                  : !slot.available
                  ? " — fully booked"
                  : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-stone-400 mb-1.5">
            {t("reservations.formNotes")}
          </label>
          <textarea
            rows={2}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Allergies, special occasions, seating preferences..."
            className="w-full px-0 py-3 border-b border-stone-200 focus:border-brand-500 outline-none bg-transparent text-stone-900 text-sm placeholder:text-stone-300 transition-colors resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-brand-700 text-white py-3.5 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors disabled:opacity-50 font-medium"
          >
            {sending ? "Submitting..." : t("reservations.formSubmit")}
          </button>
          <p className="text-[10px] text-stone-400 text-center mt-3">
            You will receive a confirmation email after booking.
          </p>
        </div>
      </div>
    </form>
  );
}
