import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.admin.findUnique({ where: { email: "admin@bellavita.it" } });
  if (existing) {
    console.log("Seed data already exists, skipping.");
    return;
  }

  const password = await bcrypt.hash("admin123", 12);

  await prisma.admin.create({
    data: {
      email: "admin@bellavita.it",
      password,
      name: "Admin",
    },
  });

  const antipasti = await prisma.menuCategory.create({
    data: { name: "Antipasti", description: "To begin your culinary journey", order: 1 },
  });
  const primi = await prisma.menuCategory.create({
    data: { name: "Primi", description: "Handmade pasta and risotto", order: 2 },
  });
  const secondi = await prisma.menuCategory.create({
    data: { name: "Secondi", description: "Grilled and roasted specialties", order: 3 },
  });
  const dolci = await prisma.menuCategory.create({
    data: { name: "Dolci", description: "A sweet finish", order: 4 },
  });
  const vini = await prisma.menuCategory.create({
    data: { name: "Vini", description: "Selected Italian wines", order: 5 },
  });

  const items = [
    { c: antipasti, name: "Bruschetta al Pomodoro", desc: "Toasted sourdough with vine-ripened tomatoes, basil, and extra virgin olive oil", price: "€12", dietary: "V", allergens: "Gluten (bread)", origin: "Campania", pairing: "Prosecco Superiore DOCG" },
    { c: antipasti, name: "Insalata Caprese", desc: "Buffalo mozzarella, heirloom tomatoes, basil, and balsamic reduction", price: "€14", dietary: "V, GF", allergens: "Dairy (mozzarella)", origin: "Campania", pairing: "Vermentino di Sardegna" },
    { c: antipasti, name: "Calamari Fritti", desc: "Crispy fried calamari served with lemon and marinara sauce", price: "€16", dietary: "GF", allergens: "Molluscs (calamari)", origin: "Sicily", pairing: "Franciacorta Brut" },
    { c: antipasti, name: "Prosciutto e Melone", desc: "Aged Parma ham with sweet cantaloupe and arugula", price: "€18", dietary: "GF", allergens: "None", origin: "Emilia-Romagna", pairing: "Lambrusco Grasparossa" },
    { c: primi, name: "Spaghetti alla Carbonara", desc: "Guanciale, pecorino romano, egg yolk, and black pepper", price: "€20", dietary: "", allergens: "Gluten (pasta), Dairy (pecorino), Eggs", origin: "Lazio", pairing: "Frascati Superiore" },
    { c: primi, name: "Risotto al Tartufo", desc: "Arborio rice with wild mushrooms and shaved black truffle", price: "€26", dietary: "V, GF", allergens: "Dairy (butter, parmesan)", origin: "Piedmont", pairing: "Barbera d'Alba" },
    { c: primi, name: "Pappardelle al Ragù", desc: "Wide ribbon pasta with slow-cooked wild boar ragù", price: "€22", dietary: "", allergens: "Gluten (pasta)", origin: "Tuscany", pairing: "Chianti Classico" },
    { c: primi, name: "Gnocchi al Pesto", desc: "Potato gnocchi with basil pesto, pine nuts, and parmesan", price: "€20", dietary: "V", allergens: "Gluten (gnocchi), Dairy (parmesan), Tree Nuts (pine nuts)", origin: "Liguria", pairing: "Pigato" },
    { c: secondi, name: "Bistecca alla Fiorentina", desc: "28-day aged Chianina steak, grilled over charcoal and finished with rosemary", price: "€48", dietary: "GF", allergens: "None", origin: "Tuscany", pairing: "Brunello di Montalcino" },
    { c: secondi, name: "Branzino al Sale", desc: "Mediterranean sea bass baked in a salt crust", price: "€32", dietary: "GF", allergens: "Fish (sea bass)", origin: "Sardinia", pairing: "Verdicchio dei Castelli di Jesi" },
    { c: secondi, name: "Pollo alla Diavola", desc: "Free-range chicken marinated in lemon, garlic, and chili", price: "€24", dietary: "GF", allergens: "None", origin: "Marche", pairing: "Montepulciano d'Abruzzo" },
    { c: secondi, name: "Melanzane alla Parmigiana", desc: "Layers of fried eggplant, tomato sauce, mozzarella, and basil", price: "€20", dietary: "V", allergens: "Dairy (mozzarella, parmesan)", origin: "Sicily", pairing: "Nero d'Avola" },
    { c: dolci, name: "Tiramisù", desc: "Classic mascarpone dessert with espresso-soaked ladyfingers and cocoa", price: "€12", dietary: "V", allergens: "Gluten (ladyfingers), Dairy (mascarpone), Eggs", origin: "Veneto", pairing: "Vin Santo del Chianti" },
    { c: dolci, name: "Panna Cotta", desc: "Vanilla-scented cream with mixed berry compote", price: "€11", dietary: "V, GF", allergens: "Dairy (cream)", origin: "Piedmont", pairing: "Moscato d'Asti" },
    { c: dolci, name: "Cannoli Siciliani", desc: "Crispy pastry shells with sweet ricotta, pistachio, and chocolate chips", price: "€11", dietary: "V", allergens: "Gluten (pastry), Dairy (ricotta), Tree Nuts (pistachio)", origin: "Sicily", pairing: "Passito di Pantelleria" },
    { c: vini, name: "Chianti Classico Riserva 2019", desc: "Sangiovese — earthy, full-bodied, with notes of cherry and leather", price: "€38", dietary: "V, GF", allergens: "Contains sulfites", origin: "Tuscany", pairing: "Pairs with Bistecca alla Fiorentina" },
    { c: vini, name: "Brunello di Montalcino 2017", desc: "Sangiovese Grosso — elegant, complex, with a long finish", price: "€65", dietary: "V, GF", allergens: "Contains sulfites", origin: "Tuscany", pairing: "Pairs with aged pecorino" },
    { c: vini, name: "Prosecco Superiore DOCG", desc: "Glera — crisp, floral, with fine bubbles", price: "€28", dietary: "V, GF", allergens: "Contains sulfites", origin: "Veneto", pairing: "Pairs with antipasti" },
  ];

  for (const item of items) {
    await prisma.menuItem.create({
      data: {
        categoryId: item.c.id,
        name: item.name,
        description: item.desc,
        price: item.price,
        dietary: item.dietary,
        allergens: item.allergens,
        origin: item.origin,
        pairing: item.pairing,
      },
    });
  }

  console.log("Seed data inserted successfully.");
  console.log("Admin login: admin@bellavita.it / admin123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
