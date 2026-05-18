"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.story" },
  { href: "/menu", key: "nav.menu" },
  { href: "/reservations", key: "nav.reservations" },
  { href: "/gallery", key: "nav.gallery" },
  { href: "/contact", key: "nav.contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-display text-2xl text-brand-800 tracking-wide">
            Bella Vita
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider uppercase text-stone-600 hover:text-brand-700 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block w-6 h-0.5 bg-stone-800 transition-all duration-300",
                  isOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-stone-800 transition-all duration-300",
                  isOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-stone-800 transition-all duration-300",
                  isOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 pb-6 gap-4 bg-stone-50">
          {navKeys.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wider uppercase text-stone-600 hover:text-brand-700 transition-colors"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
