"use client";

import { useEffect, useState, type FormEvent } from "react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary: string;
  allergens: string;
  origin: string;
  pairing: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

export default function AdminMenu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showCatForm, setShowCatForm] = useState(false);
  const [catName, setCatName] = useState("");
  const [catDesc, setCatDesc] = useState("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    dietary: "",
    allergens: "",
    origin: "",
    pairing: "",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const res = await fetch("/api/admin/menu/categories");
    if (res.ok) setCategories(await res.json());
  };

  const addCategory = async (e: FormEvent) => {
    e.preventDefault();
    if (!catName.trim()) return;

    await fetch("/api/admin/menu/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: catName, description: catDesc }),
    });

    setCatName("");
    setCatDesc("");
    setShowCatForm(false);
    fetchCategories();
  };

  const addItem = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedCat) return;

    await fetch("/api/admin/menu/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, categoryId: selectedCat }),
    });

    setForm({ name: "", description: "", price: "", dietary: "", allergens: "", origin: "", pairing: "" });
    setShowForm(false);
    fetchCategories();
  };

  const deleteItem = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`/api/admin/menu/items/${id}`, { method: "DELETE" });
    fetchCategories();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl text-stone-900">Menu</h1>
        <button
          onClick={() => setShowCatForm(true)}
          className="text-xs uppercase tracking-wider text-brand-700 hover:text-brand-800"
        >
          + Add Category
        </button>
      </div>

      {showCatForm && (
        <form onSubmit={addCategory} className="bg-white border border-stone-200 p-4 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Category name *"
              required
              value={catName}
              onChange={(e) => setCatName(e.target.value)}
              className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
            />
            <input
              placeholder="Description (optional)"
              value={catDesc}
              onChange={(e) => setCatDesc(e.target.value)}
              className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-brand-700 text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-brand-800 transition-colors"
            >
              Add Category
            </button>
            <button
              type="button"
              onClick={() => { setShowCatForm(false); setCatName(""); setCatDesc(""); }}
              className="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-wider"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-8">
        {categories.map((cat) => (
          <div key={cat.id} className="bg-white border border-stone-200">
            <div className="p-4 border-b border-stone-100 flex items-center justify-between">
              <div>
                <h2 className="font-display text-lg text-stone-900">{cat.name}</h2>
                {cat.description && (
                  <p className="text-stone-400 text-xs">{cat.description}</p>
                )}
              </div>
              {!showForm && (
                <button
                  onClick={() => {
                    setSelectedCat(cat.id);
                    setShowForm(true);
                  }}
                  className="text-xs uppercase tracking-wider text-brand-700 hover:text-brand-800"
                >
                  + Add Item
                </button>
              )}
            </div>

            {cat.items.length === 0 ? (
              <p className="p-4 text-stone-400 text-sm">No items yet.</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-stone-400 border-b border-stone-50">
                    <th className="p-3 font-medium">Name</th>
                    <th className="p-3 font-medium">Price</th>
                    <th className="p-3 font-medium">Origin</th>
                    <th className="p-3 font-medium hidden md:table-cell">Allergens</th>
                    <th className="p-3 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item) => (
                    <tr key={item.id} className="border-b border-stone-50 hover:bg-stone-50">
                      <td className="p-3">
                        <p className="text-stone-900">{item.name}</p>
                        <p className="text-stone-400 text-xs">{item.description}</p>
                      </td>
                      <td className="p-3 text-stone-600">{item.price}</td>
                      <td className="p-3 text-stone-500 text-xs">{item.origin}</td>
                      <td className="p-3 text-stone-500 text-xs hidden md:table-cell">{item.allergens || "—"}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="text-xs text-stone-400 hover:text-red-600 uppercase tracking-wider"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {showForm && selectedCat === cat.id && (
              <form onSubmit={addItem} className="p-4 border-t border-stone-100 bg-stone-50 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Name *"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
                  />
                  <input
                    placeholder="Price * (e.g. €24)"
                    required
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
                  />
                  <input
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500 md:col-span-2"
                  />
                  <input
                    placeholder="Dietary (e.g. V, GF)"
                    value={form.dietary}
                    onChange={(e) => setForm({ ...form, dietary: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
                  />
                  <input
                    placeholder="Allergens (e.g. Gluten, Dairy)"
                    value={form.allergens}
                    onChange={(e) => setForm({ ...form, allergens: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
                  />
                  <input
                    placeholder="Origin region"
                    value={form.origin}
                    onChange={(e) => setForm({ ...form, origin: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500"
                  />
                  <input
                    placeholder="Wine pairing"
                    value={form.pairing}
                    onChange={(e) => setForm({ ...form, pairing: e.target.value })}
                    className="px-3 py-2 border border-stone-200 bg-white text-sm outline-none focus:border-brand-500 md:col-span-2"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-brand-700 text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-brand-800 transition-colors"
                  >
                    Add Item
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs text-stone-400 hover:text-stone-600 uppercase tracking-wider"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
