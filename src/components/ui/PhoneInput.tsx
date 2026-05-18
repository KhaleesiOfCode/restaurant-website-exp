"use client";

import { useState } from "react";

interface CountryCode {
  code: string;
  label: string;
}

const countryCodes: CountryCode[] = [
  { code: "+39", label: "IT +39" },
  { code: "+49", label: "DE +49" },
  { code: "+44", label: "UK +44" },
  { code: "+33", label: "FR +33" },
  { code: "+34", label: "ES +34" },
  { code: "+41", label: "CH +41" },
  { code: "+43", label: "AT +43" },
  { code: "+31", label: "NL +31" },
  { code: "+32", label: "BE +32" },
  { code: "+1", label: "US +1" },
  { code: "+61", label: "AU +61" },
  { code: "+81", label: "JP +81" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export default function PhoneInput({ value, onChange, required }: PhoneInputProps) {
  const [selectedCode, setSelectedCode] = useState("+39");
  const [isOpen, setIsOpen] = useState(false);

  const displayValue = value.startsWith(selectedCode)
    ? value.slice(selectedCode.length)
    : value;

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const num = raw.slice(0, 12);
    onChange(`${selectedCode} ${num}`);
  };

  const handleCodeSelect = (code: string) => {
    setSelectedCode(code);
    setIsOpen(false);
    const num = value.replace(/^\+\d+\s?/, "");
    onChange(`${code} ${num}`);
  };

  return (
    <div className="relative flex border-b border-stone-200 focus-within:border-brand-500 transition-colors">
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 px-0 py-3 text-sm text-stone-600 hover:text-stone-900 transition-colors whitespace-nowrap"
        >
          {selectedCode}
          <svg className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 shadow-lg z-20 max-h-48 overflow-y-auto min-w-[120px]">
              {countryCodes.map((cc) => (
                <button
                  key={cc.code}
                  type="button"
                  onClick={() => handleCodeSelect(cc.code)}
                  className={`w-full text-left px-3 py-2 text-sm hover:bg-stone-50 transition-colors ${
                    selectedCode === cc.code ? "bg-brand-50 text-brand-700 font-medium" : "text-stone-600"
                  }`}
                >
                  {cc.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <input
        type="text"
        inputMode="numeric"
        required={required}
        value={displayValue}
        onChange={handleNumberChange}
        placeholder="123 456 789"
        className="flex-1 px-3 py-3 text-sm text-stone-900 bg-transparent outline-none placeholder:text-stone-300"
      />
    </div>
  );
}
