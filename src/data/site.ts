export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  story: string;
  location: {
    address: string;
    city: string;
    region: string;
    mapUrl: string;
  };
  contact: {
    phone: string;
    email: string;
    social: {
      instagram: string;
      facebook: string;
    };
  };
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
}

export const siteInfo: SiteInfo = {
  name: "Ristorante Bella Vita",
  tagline: "Autentica Cucina Italiana",
  description:
    "Experience the finest Italian cuisine in the heart of Tuscany. Traditional recipes reimagined with passion.",
  story:
    "Founded in 1985 by the Rossi family, Ristorante Bella Vita brings generations of culinary tradition to every plate. Nestled among the rolling hills of Tuscany, we source the freshest local ingredients to create dishes that honor our heritage while embracing modern elegance. Every meal tells a story of passion, family, and the enduring love of Italian food.",
  location: {
    address: "Via della Rosa, 42",
    city: "Montepulciano",
    region: "Tuscany",
    mapUrl: "https://maps.google.com",
  },
  contact: {
    phone: "+39 0578 123456",
    email: "info@ristorantebellavita.it",
    social: {
      instagram: "@ristorantebellavita",
      facebook: "RistoranteBellaVita",
    },
  },
  hours: [
    { day: "Monday – Friday", open: "12:00", close: "22:00" },
    { day: "Saturday", open: "12:00", close: "23:00" },
    { day: "Sunday", open: "12:00", close: "21:00" },
  ],
};
