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

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch("/api/admin/messages");
    if (res.ok) setMessages(await res.json());
  };

  const toggleRead = async (id: string, isRead: boolean) => {
    await fetch(`/api/admin/messages/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead: !isRead }),
    });
    fetchMessages();
  };

  return (
    <div>
      <h1 className="font-display text-3xl text-stone-900 mb-8">Messages</h1>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-stone-400 text-sm">No messages yet.</p>
        ) : (
          messages.map((m) => (
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
    </div>
  );
}
