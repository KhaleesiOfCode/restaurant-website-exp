"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

const PAGE_SIZE = 10;

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const abort = new AbortController();
    fetch("/api/admin/messages", { signal: abort.signal })
      .then((res) => res.ok && res.json())
      .then((data) => data && setMessages(data))
      .catch(() => {});
    return () => abort.abort();
  }, []);

  const toggleRead = async (id: string, isRead: boolean) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: !isRead }),
    });
    const res = await fetch("/api/admin/messages");
    if (res.ok) setMessages(await res.json());
  };

  const totalPages = Math.ceil(messages.length / PAGE_SIZE);
  const paginated = messages.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div>
      <h1 className="font-display text-3xl text-stone-900 mb-8">Messages</h1>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-stone-400 text-sm">No messages yet.</p>
        ) : (
          paginated.map((m) => (
            <div
              key={m.id}
              className={cn(
                "bg-white border border-stone-200 p-5 transition-colors",
                !m.isRead && "border-l-4 border-l-brand-600"
              )}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium text-stone-900 text-sm">{m.name}</p>
                  <p className="text-stone-400 text-xs">{m.email}</p>
                </div>
                <button
                  onClick={() => toggleRead(m.id, m.isRead)}
                  className={cn(
                    "text-[10px] uppercase tracking-wider px-2 py-1 rounded transition-colors",
                    m.isRead
                      ? "text-stone-400 hover:text-stone-600"
                      : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                  )}
                >
                  {m.isRead ? "Mark unread" : "Mark read"}
                </button>
              </div>
              {m.subject && <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">{m.subject}</p>}
              <p className="text-sm text-stone-600 leading-relaxed">{m.message}</p>
              <p className="text-xs text-stone-300 mt-3">
                {new Date(m.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="text-xs uppercase tracking-wider text-stone-400 hover:text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <span className="text-xs text-stone-400">
            Page {page + 1} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages - 1}
            onClick={() => setPage(page + 1)}
            className="text-xs uppercase tracking-wider text-stone-400 hover:text-stone-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
