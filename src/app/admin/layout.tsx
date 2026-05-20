"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "◈" },
  { href: "/admin/reservations", label: "Reservations", icon: "☰" },
  { href: "/admin/menu", label: "Menu", icon: "☷" },
  { href: "/admin/messages", label: "Messages", icon: "✉" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    if (!confirm("Sign out of the admin panel?")) return;
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-stone-50">
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="p-6 border-b border-stone-100">
          <Link href="/admin/dashboard" className="font-display text-xl text-brand-800">
            Bella Vita
          </Link>
          <p className="text-[10px] uppercase tracking-wider text-stone-400 mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 text-sm rounded transition-colors",
                pathname === item.href
                  ? "bg-brand-50 text-brand-800 font-medium"
                  : "text-stone-500 hover:text-stone-800 hover:bg-stone-50"
              )}
            >
              <span className="text-xs">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-stone-100">
          <Link
            href="/"
            className="block text-xs text-stone-400 hover:text-brand-700 transition-colors mb-3"
          >
            ← Back to site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left text-xs text-stone-400 hover:text-red-600 transition-colors"
          >
            Sign out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8">{children}</div>
      </main>
    </div>
  );
}
