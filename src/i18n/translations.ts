export type Locale = "en" | "de";

type NestedTranslations = {
  [key: string]: string | NestedTranslations;
};

export const translations: Record<Locale, NestedTranslations> = {
  en: {
    site: {
      name: "Ristorante Bella Vita",
      tagline: "Autentica Cucina Italiana",
      description:
        "Experience the finest Italian cuisine in the heart of Tuscany. Traditional recipes reimagined with passion.",
    },
    nav: {
      home: "Home",
      story: "Our Story",
      menu: "Menu",
      reservations: "Reservations",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      welcome: "Benvenuti a",
      titleLine1: "Ristorante",
      titleLine2: "Bella Vita",
      subtitle: "Autentica Cucina Italiana nel Cuore della Toscana",
      ctaReserve: "Reserve a Table",
      ctaMenu: "Explore Menu",
    },
    story: {
      label: "La Nostra Storia",
      heading: "Where Tradition Meets Passion",
      body1:
        "Founded in 1985 by the Rossi family, Ristorante Bella Vita brings generations of culinary tradition to every plate. Nestled among the rolling hills of Tuscany, we source the freshest local ingredients to create dishes that honor our heritage while embracing modern elegance. Every meal tells a story of passion, family, and the enduring love of Italian food.",
      body2:
        "From our handmade pasta to our wood-fired specialties, every dish reflects our commitment to quality, tradition, and the vibrant flavors of Tuscany.",
    },
    about: {
      label: "La Nostra Storia",
      title: "Our Story",
      subheading: "The Rossi Family Legacy",
      para1:
        "Founded in 1985 by the Rossi family, Ristorante Bella Vita brings generations of culinary tradition to every plate. Nestled among the rolling hills of Tuscany, we source the freshest local ingredients to create dishes that honor our heritage while embracing modern elegance.",
      para2:
        "Chef Marco Rossi, grandson of the founder, trained in Michelin-starred kitchens across Europe before returning to his family's restaurant. His vision combines traditional Tuscan recipes with modern techniques, creating a dining experience that honors the past while looking boldly toward the future.",
      para3:
        "Every ingredient is thoughtfully sourced. Our olive oil comes from a family grove in the nearby Val d'Orcia. Our vegetables are harvested daily from local farms. Our meats are pasture-raised and butchered in-house. This commitment to quality is the foundation of everything we do.",
      philosophy: "Our Philosophy",
      value1Title: "Tradition",
      value1Desc:
        "We honor the culinary heritage of Tuscany, preserving time-honored recipes passed down through four generations of the Rossi family.",
      value2Title: "Quality",
      value2Desc:
        "Only the finest seasonal ingredients make it to your plate. We maintain relationships with local farmers, foragers, and artisans who share our standards.",
      value3Title: "Hospitality",
      value3Desc:
        "Dining with us is like being welcomed into an Italian home. Warmth, generosity, and attention to every detail define the Bella Vita experience.",
    },
    menu: {
      label: "Il Menu",
      title: "Our Menu",
      subtitle:
        "A carefully curated selection of traditional and contemporary Italian dishes, crafted with the finest seasonal ingredients.",
      categories: {
        antipasti: "Antipasti",
        antipastiDesc: "To begin your culinary journey",
        primi: "Primi",
        primiDesc: "Handmade pasta and risotto",
        secondi: "Secondi",
        secondiDesc: "Grilled and roasted specialties",
        dolci: "Dolci",
        dolciDesc: "A sweet finish",
        vini: "Vini",
        viniDesc: "Selected Italian wines",
      },
    },
    reservations: {
      label: "Prenotazioni",
      title: "Reserve a Table",
      subtitle: "Join us for an unforgettable evening. Book your table below and we'll take care of the rest.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone",
      formGuests: "Guests",
      formDate: "Date",
      formTime: "Time",
      formNotes: "Special Requests",
      formSelectTime: "Select a time",
      formLargerParty: "Larger Party",
      formSubmit: "Confirm Reservation",
      formGuest: "Guest",
      formGuestsLabel: "Guests",
      successTitle: "Grazie!",
      successBody: "Your reservation request has been received. We will confirm shortly.",
      successReset: "Make Another Reservation",
      hours: "Hours",
      contact: "Contact",
      location: "Location",
    },
    contact: {
      label: "Contattaci",
      title: "Get in Touch",
      subtitle:
        "We'd love to hear from you. Whether it's a question, a special event inquiry, or just to say hello.",
      formHeading: "Send Us a Message",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send Message",
      visit: "Visit Us",
      hours: "Opening Hours",
      follow: "Follow Us",
      mapPlaceholder: "Map Placeholder",
    },
    gallery: {
      label: "Galleria",
      title: "Our Gallery",
      subtitle:
        "A visual journey through the ambiance, cuisine, and moments that define the Bella Vita experience.",
    },
    home: {
      featureTitle: "Signature Experience",
      featureHeading: "Taste the Heart of Tuscany",
      featureDesc:
        "From our wood-fired oven to your table, every dish is crafted with locally sourced ingredients and generations of passion.",
      feature1Title: "Handmade Pasta",
      feature1Desc:
        "Every pasta shape is crafted by hand daily using traditional Italian techniques and the finest semolina flour.",
      feature2Title: "Curated Wine List",
      feature2Desc:
        "An extensive selection of Italian wines, featuring boutique vineyards from across Tuscany and beyond.",
      feature3Title: "Farm to Table",
      feature3Desc:
        "We partner with local farms and purveyors to bring you the freshest seasonal ingredients from the Tuscan region.",
      ctaTitle: "Reserve Your Experience",
      ctaDesc: "Join us for an unforgettable evening of authentic Italian cuisine and warm hospitality.",
      ctaBtn: "Book a Table",
    },
    footer: {
      contact: "Contact",
      hours: "Hours",
      rights: "All rights reserved.",
    },
  },

  de: {
    site: {
      name: "Ristorante Bella Vita",
      tagline: "Authentische Italienische Küche",
      description:
        "Erleben Sie die feinste italienische Küche im Herzen der Toskana. Traditionelle Rezepte, neu interpretiert mit Leidenschaft.",
    },
    nav: {
      home: "Startseite",
      story: "Unsere Geschichte",
      menu: "Speisekarte",
      reservations: "Reservierungen",
      gallery: "Galerie",
      contact: "Kontakt",
    },
    hero: {
      welcome: "Benvenuti a",
      titleLine1: "Ristorante",
      titleLine2: "Bella Vita",
      subtitle: "Authentische Italienische Küche im Herzen der Toskana",
      ctaReserve: "Tisch Reservieren",
      ctaMenu: "Speisekarte",
    },
    story: {
      label: "Unsere Geschichte",
      heading: "Wo Tradition auf Leidenschaft trifft",
      body1:
        "Das 1985 von der Familie Rossi gegründete Ristorante Bella Vita bringt Generationen kulinarischer Tradition auf jeden Teller. Eingebettet in die sanften Hügel der Toskana verwenden wir die frischesten lokalen Zutaten, um Gerichte zu kreieren, die unser Erbe ehren und gleichzeitig moderne Eleganz umarmen.",
      body2:
        "Von unserer hausgemachten Pasta bis zu unseren Holzofen-Spezialitäten – jedes Gericht spiegelt unser Engagement für Qualität, Tradition und die lebendigen Aromen der Toskana wider.",
    },
    about: {
      label: "Unsere Geschichte",
      title: "Unsere Geschichte",
      subheading: "Das Erbe der Familie Rossi",
      para1:
        "Das 1985 von der Familie Rossi gegründete Ristorante Bella Vita bringt Generationen kulinarischer Tradition auf jeden Teller. Eingebettet in die sanften Hügel der Toskana verwenden wir die frischesten lokalen Zutaten, um Gerichte zu kreieren, die unser Erbe ehren und gleichzeitig moderne Eleganz umarmen.",
      para2:
        "Chef Marco Rossi, der Enkel des Gründers, sammelte Erfahrungen in mit Michelin-Sternen ausgezeichneten Küchen in ganz Europa, bevor er in das Familienrestaurant zurückkehrte. Seine Vision vereint traditionelle toskanische Rezepte mit modernen Techniken.",
      para3:
        "Jede Zutat wird sorgfältig ausgewählt. Unser Olivenöl stammt von einem Familienhain im nahe gelegenen Val d'Orcia. Unser Gemüse wird täglich von lokalen Bauernhöfen geerntet. Unser Fleisch stammt von Weidetieren und wird hausgeschlachtet.",
      philosophy: "Unsere Philosophie",
      value1Title: "Tradition",
      value1Desc:
        "Wir ehren das kulinarische Erbe der Toskana und bewahren seit vier Generationen überlieferte Rezepte der Familie Rossi.",
      value2Title: "Qualität",
      value2Desc:
        "Nur die besten saisonalen Zutaten landen auf Ihrem Teller. Wir pflegen Beziehungen zu lokalen Bauern und Handwerkern, die unsere Standards teilen.",
      value3Title: "Gastfreundschaft",
      value3Desc:
        "Bei uns zu speisen ist wie ein Willkommen in einem italienischen Zuhause. Wärme, Großzügigkeit und Liebe zum Detail prägen das Bella Vita-Erlebnis.",
    },
    menu: {
      label: "Speisekarte",
      title: "Unsere Speisekarte",
      subtitle:
        "Eine sorgfältig kuratierte Auswahl traditioneller und zeitgenössischer italienischer Gerichte, zubereitet mit den besten saisonalen Zutaten.",
      categories: {
        antipasti: "Antipasti",
        antipastiDesc: "Zum Beginn Ihrer kulinarischen Reise",
        primi: "Primi",
        primiDesc: "Hausgemachte Pasta und Risotto",
        secondi: "Secondi",
        secondiDesc: "Gegrillte und gebratene Spezialitäten",
        dolci: "Dolci",
        dolciDesc: "Ein süßer Abschluss",
        vini: "Vini",
        viniDesc: "Ausgewählte italienische Weine",
      },
    },
    reservations: {
      label: "Reservierungen",
      title: "Tisch Reservieren",
      subtitle: "Verbringen Sie einen unvergesslichen Abend bei uns. Buchen Sie unten Ihren Tisch.",
      formName: "Name",
      formEmail: "E-Mail",
      formPhone: "Telefon",
      formGuests: "Gäste",
      formDate: "Datum",
      formTime: "Uhrzeit",
      formNotes: "Besondere Wünsche",
      formSelectTime: "Uhrzeit wählen",
      formLargerParty: "Größere Gruppe",
      formSubmit: "Reservierung Bestätigen",
      formGuest: "Gast",
      formGuestsLabel: "Gäste",
      successTitle: "Grazie!",
      successBody: "Ihre Reservierungsanfrage wurde empfangen. Wir werden Sie in Kürze bestätigen.",
      successReset: "Weitere Reservierung",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      location: "Standort",
    },
    contact: {
      label: "Kontakt",
      title: "Kontaktieren Sie Uns",
      subtitle:
        "Wir freuen uns auf Ihre Nachricht. Ob Frage, Event-Anfrage oder einfach nur ein Hallo.",
      formHeading: "Schreiben Sie Uns",
      formName: "Name",
      formEmail: "E-Mail",
      formSubject: "Betreff",
      formMessage: "Nachricht",
      formSubmit: "Nachricht Senden",
      visit: "Besuchen Sie Uns",
      hours: "Öffnungszeiten",
      follow: "Folgen Sie Uns",
      mapPlaceholder: "Karten-Platzhalter",
    },
    gallery: {
      label: "Galerie",
      title: "Unsere Galerie",
      subtitle:
        "Eine visuelle Reise durch die Atmosphäre, Küche und Momente, die das Bella Vita-Erlebnis ausmachen.",
    },
    home: {
      featureTitle: "Signature-Erlebnis",
      featureHeading: "Den Geschmack der Toskana erleben",
      featureDesc:
        "Vom Holzofen auf Ihren Teller – jedes Gericht wird aus lokalen Zutaten und mit generationenalter Leidenschaft zubereitet.",
      feature1Title: "Hausgemachte Pasta",
      feature1Desc:
        "Jede Pastasorte wird täglich von Hand nach traditionellen italienischen Techniken und mit feinstem Hartweizengrieß hergestellt.",
      feature2Title: "Kuratierte Weinkarte",
      feature2Desc:
        "Eine umfangreiche Auswahl italienischer Weine von Boutique-Weingütern aus der ganzen Toskana und darüber hinaus.",
      feature3Title: "Vom Bauernhof auf den Tisch",
      feature3Desc:
        "Wir arbeiten mit lokalen Bauern zusammen, um Ihnen die frischesten saisonalen Zutaten aus der Toskana zu bieten.",
      ctaTitle: "Reservieren Sie Ihr Erlebnis",
      ctaDesc: "Genießen Sie einen unvergesslichen Abend mit authentischer italienischer Küche und herzlicher Gastfreundschaft.",
      ctaBtn: "Tisch Buchen",
    },
    footer: {
      contact: "Kontakt",
      hours: "Öffnungszeiten",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};

export const defaultLocale: Locale = "en";
