export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary?: string[];
  origin?: string;
  pairing?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    name: "Antipasti",
    description: "To begin your culinary journey",
    items: [
      {
        id: "bruschetta",
        name: "Bruschetta al Pomodoro",
        description: "Toasted sourdough with vine-ripened tomatoes, basil, and extra virgin olive oil",
        price: "€12",
        dietary: ["V"],
        origin: "Campania",
        pairing: "Prosecco Superiore DOCG",
      },
      {
        id: "caprese",
        name: "Insalata Caprese",
        description: "Buffalo mozzarella, heirloom tomatoes, basil, and balsamic reduction",
        price: "€14",
        dietary: ["V", "GF"],
        origin: "Campania",
        pairing: "Vermentino di Sardegna",
      },
      {
        id: "calamari",
        name: "Calamari Fritti",
        description: "Crispy fried calamari served with lemon and marinara sauce",
        price: "€16",
        dietary: ["GF"],
        origin: "Sicily",
        pairing: "Franciacorta Brut",
      },
      {
        id: "prosciutto",
        name: "Prosciutto e Melone",
        description: "Aged Parma ham with sweet cantaloupe and arugula",
        price: "€18",
        dietary: ["GF"],
        origin: "Emilia-Romagna",
        pairing: "Lambrusco Grasparossa",
      },
    ],
  },
  {
    id: "primi",
    name: "Primi",
    description: "Handmade pasta and risotto",
    items: [
      {
        id: "carbonara",
        name: "Spaghetti alla Carbonara",
        description: "Guanciale, pecorino romano, egg yolk, and black pepper",
        price: "€20",
        origin: "Lazio",
        pairing: "Frascati Superiore",
      },
      {
        id: "truffle-risotto",
        name: "Risotto al Tartufo",
        description: "Arborio rice with wild mushrooms and shaved black truffle",
        price: "€26",
        dietary: ["V", "GF"],
        origin: "Piedmont",
        pairing: "Barbera d'Alba",
      },
      {
        id: "pappardelle",
        name: "Pappardelle al Ragù",
        description: "Wide ribbon pasta with slow-cooked wild boar ragù",
        price: "€22",
        origin: "Tuscany",
        pairing: "Chianti Classico",
      },
      {
        id: "gnocchi",
        name: "Gnocchi al Pesto",
        description: "Potato gnocchi with basil pesto, pine nuts, and parmesan",
        price: "€20",
        dietary: ["V"],
        origin: "Liguria",
        pairing: "Pigato",
      },
    ],
  },
  {
    id: "secondi",
    name: "Secondi",
    description: "Grilled and roasted specialties",
    items: [
      {
        id: "bistecca",
        name: "Bistecca alla Fiorentina",
        description: "28-day aged Chianina steak, grilled over charcoal and finished with rosemary",
        price: "€48",
        dietary: ["GF"],
        origin: "Tuscany",
        pairing: "Brunello di Montalcino",
      },
      {
        id: "branzino",
        name: "Branzino al Sale",
        description: "Mediterranean sea bass baked in a salt crust, served with seasonal vegetables",
        price: "€32",
        dietary: ["GF"],
        origin: "Sardinia",
        pairing: "Verdicchio dei Castelli di Jesi",
      },
      {
        id: "pollo",
        name: "Pollo alla Diavola",
        description: "Free-range chicken marinated in lemon, garlic, and chili, grilled to perfection",
        price: "€24",
        dietary: ["GF"],
        origin: "Marche",
        pairing: "Montepulciano d'Abruzzo",
      },
      {
        id: "melanzane",
        name: "Melanzane alla Parmigiana",
        description: "Layers of fried eggplant, tomato sauce, mozzarella, and basil",
        price: "€20",
        dietary: ["V"],
        origin: "Sicily",
        pairing: "Nero d'Avola",
      },
    ],
  },
  {
    id: "dolci",
    name: "Dolci",
    description: "A sweet finish",
    items: [
      {
        id: "tiramisu",
        name: "Tiramisù",
        description: "Classic mascarpone dessert with espresso-soaked ladyfingers and cocoa",
        price: "€12",
        dietary: ["V"],
        origin: "Veneto",
        pairing: "Vin Santo del Chianti",
      },
      {
        id: "panna-cotta",
        name: "Panna Cotta",
        description: "Vanilla-scented cream with mixed berry compote",
        price: "€11",
        dietary: ["V", "GF"],
        origin: "Piedmont",
        pairing: "Moscato d'Asti",
      },
      {
        id: "cannoli",
        name: "Cannoli Siciliani",
        description: "Crispy pastry shells filled with sweet ricotta, pistachio, and chocolate chips",
        price: "€11",
        dietary: ["V"],
        origin: "Sicily",
        pairing: "Passito di Pantelleria",
      },
    ],
  },
  {
    id: "vini",
    name: "Vini",
    description: "Selected Italian wines",
    items: [
      {
        id: "chianti",
        name: "Chianti Classico Riserva 2019",
        description: "Sangiovese — earthy, full-bodied, with notes of cherry and leather",
        price: "€38",
        dietary: ["V", "GF"],
        origin: "Tuscany",
        pairing: "Pairs with Bistecca alla Fiorentina",
      },
      {
        id: "brunello",
        name: "Brunello di Montalcino 2017",
        description: "Sangiovese Grosso — elegant, complex, with a long finish",
        price: "€65",
        dietary: ["V", "GF"],
        origin: "Tuscany",
        pairing: "Pairs with aged pecorino",
      },
      {
        id: "prosecco",
        name: "Prosecco Superiore DOCG",
        description: "Glera — crisp, floral, with fine bubbles",
        price: "€28",
        dietary: ["V", "GF"],
        origin: "Veneto",
        pairing: "Pairs with antipasti",
      },
    ],
  },
];
