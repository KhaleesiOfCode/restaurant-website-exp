"use client";

import { useState, type FormEvent } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = async (e: FormEvent | null) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        window.location.href = "/admin/dashboard";
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="w-full max-w-sm p-8">
        <div className="text-center mb-10">
          <h1 className="font-display text-2xl text-brand-800 mb-2">Bella Vita</h1>
          <p className="text-stone-500 text-sm">Admin Login</p>
        </div>

        <form onSubmit={doLogin} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 outline-none transition-colors bg-white text-sm"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-500 mb-1.5">
              Password
            </label>
            <input
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-stone-200 focus:border-brand-500 outline-none transition-colors bg-white text-sm"
            />
            <p className="text-[10px] text-stone-400 mt-1">
              Text field used to avoid browser warnings on localhost.
              Set <code className="bg-stone-100 px-1">{`type="password"`}</code> in production.
            </p>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-700 text-white py-3 text-sm uppercase tracking-wider hover:bg-brand-800 transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-stone-200">
          <button
            type="button"
            onClick={async () => {
              setLoading(true);
              setError("");
              try {
                const res = await fetch("/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email: "admin@bellavita.it", password: "admin123" }),
                });
                if (res.ok) {
                  window.location.href = "/admin/dashboard";
                } else {
                  setError("Dev login failed — has the DB been seeded?");
                  setLoading(false);
                }
              } catch {
                setError("Network error");
                setLoading(false);
              }
            }}
            className="w-full text-center text-xs text-stone-400 hover:text-brand-700 transition-colors"
          >
            Quick Dev Login
          </button>
        </div>
      </div>
    </div>
  );
}
