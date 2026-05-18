"use client";

import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
  status: string;
  createdAt: string;
}

export default function AdminReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filter, setFilter] = useState("all");

  const fetchReservations = useCallback(async () => {
    const res = await fetch(`/api/admin/reservations?status=${filter}`);
    if (res.ok) setReservations(await res.json());
  }, [filter]);

  useEffect(() => {
    fetchReservations();
  }, [fetchReservations]);

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/admin/reservations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    fetchReservations();
  };

  const deleteReservation = async (id: string) => {
    if (!confirm("Delete this reservation?")) return;
    await fetch(`/api/admin/reservations/${id}`, { method: "DELETE" });
    fetchReservations();
  };

  const filters = ["all", "pending", "confirmed", "cancelled"];

  return (
    <div>
      <h1 className="font-display text-3xl text-stone-900 mb-8">Reservations</h1>

      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2 text-xs uppercase tracking-wider transition-colors",
              filter === f
                ? "bg-brand-700 text-white"
                : "bg-white border border-stone-200 text-stone-500 hover:border-stone-300"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="bg-white border border-stone-200 overflow-hidden">
        {reservations.length === 0 ? (
          <p className="p-8 text-stone-400 text-sm text-center">No reservations found.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone-100 text-left text-xs uppercase tracking-wider text-stone-400">
                <th className="p-4 font-medium">Guest</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium">Guests</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r.id} className="border-b border-stone-50 hover:bg-stone-50">
                  <td className="p-4">
                    <p className="text-stone-900 font-medium">{r.name}</p>
                    <p className="text-stone-400 text-xs">{r.email}</p>
                    <p className="text-stone-400 text-xs">{r.phone}</p>
                    {r.notes && <p className="text-stone-400 text-xs italic mt-1">{r.notes}</p>}
                  </td>
                  <td className="p-4 text-stone-600">{r.date}</td>
                  <td className="p-4 text-stone-600">{r.time}</td>
                  <td className="p-4 text-stone-600">{r.guests}</td>
                  <td className="p-4">
                    <span
                      className={cn(
                        "text-[10px] uppercase tracking-wider px-2 py-1 rounded",
                        r.status === "confirmed" && "bg-green-50 text-green-700",
                        r.status === "pending" && "bg-amber-50 text-amber-700",
                        r.status === "cancelled" && "bg-red-50 text-red-700"
                      )}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      {r.status === "pending" && (
                        <button
                          onClick={() => updateStatus(r.id, "confirmed")}
                          className="text-xs text-green-600 hover:text-green-800 uppercase tracking-wider"
                        >
                          Confirm
                        </button>
                      )}
                      <button
                        onClick={() => updateStatus(r.id, "cancelled")}
                        className="text-xs text-red-500 hover:text-red-700 uppercase tracking-wider"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => deleteReservation(r.id)}
                        className="text-xs text-stone-400 hover:text-red-600 uppercase tracking-wider"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
