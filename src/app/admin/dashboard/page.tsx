"use client";

import { useEffect, useState } from "react";

interface Stats {
  totalReservations: number;
  pendingReservations: number;
  confirmedReservations: number;
  totalMessages: number;
  unreadMessages: number;
  todayReservations: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const [reservationsRes, messagesRes] = await Promise.all([
        fetch("/api/admin/reservations"),
        fetch("/api/admin/messages"),
      ]);

      if (!reservationsRes.ok) return;

      const reservations = await reservationsRes.json();
      const messages = await messagesRes.json();
      const today = new Date().toISOString().split("T")[0];

      setStats({
        totalReservations: reservations.length,
        pendingReservations: reservations.filter((r: { status: string }) => r.status === "pending").length,
        confirmedReservations: reservations.filter((r: { status: string }) => r.status === "confirmed").length,
        todayReservations: reservations.filter((r: { date: string }) => r.date === today).length,
        totalMessages: messages.length,
        unreadMessages: messages.filter((m: { isRead: boolean }) => !m.isRead).length,
      });
    };

    fetchStats();
  }, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-stone-400 text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-3xl text-stone-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard label="Total Reservations" value={stats.totalReservations} />
        <StatCard label="Pending" value={stats.pendingReservations} color="amber" />
        <StatCard label="Confirmed" value={stats.confirmedReservations} color="green" />
        <StatCard label="Today" value={stats.todayReservations} color="blue" />
        <StatCard label="Messages" value={stats.totalMessages} />
        <StatCard label="Unread" value={stats.unreadMessages} color="rose" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color = "stone",
}: {
  label: string;
  value: number;
  color?: string;
}) {
  const colors: Record<string, string> = {
    stone: "bg-stone-50 text-stone-900",
    amber: "bg-amber-50 text-amber-800",
    green: "bg-green-50 text-green-800",
    blue: "bg-blue-50 text-blue-800",
    rose: "bg-rose-50 text-rose-800",
  };

  return (
    <div className="bg-white border border-stone-200 p-6">
      <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">{label}</p>
      <p className={`text-4xl font-display ${colors[color]?.split(" ")[1] || "text-stone-900"}`}>
        {value}
      </p>
    </div>
  );
}
