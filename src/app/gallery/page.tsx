"use client";

import { useTranslations } from "@/hooks/useTranslations";

const images = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Elegant dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop",
    alt: "Handmade pasta preparation",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop",
    alt: "Plated dish",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Wine cellar",
  },
  {
    src: "https://images.unsplash.com/photo-1564758562117-6b6f63ef140c?q=80&w=1974&auto=format&fit=crop",
    alt: "Italian landscape view",
  },
  {
    src: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=1974&auto=format&fit=crop",
    alt: "Outdoor terrace seating",
  },
  {
    src: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop",
    alt: "Dessert plating",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    alt: "Kitchen interior",
  },
];

export default function GalleryPage() {
  const { t } = useTranslations();

  return (
    <section className="pt-32 pb-20 bg-warm bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">{t("gallery.label")}</p>
          <h1 className="text-5xl sm:text-6xl font-display text-stone-900">{t("gallery.title")}</h1>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto">
            {t("gallery.subtitle")}
          </p>
          <div className="w-16 h-0.5 bg-brand-600 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundImage: `url('${image.src}')` }}
              role="img"
              aria-label={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
