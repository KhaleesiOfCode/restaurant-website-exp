"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

let toastId = 0;

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: number) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onRemove(toast.id), 4500);
    return () => clearTimeout(timer);
  }, [toast.id, onRemove]);

  return (
    <div
      className={cn(
        "px-5 py-3.5 pr-10 text-sm shadow-lg relative transition-opacity duration-300",
        toast.type === "success" && "bg-green-50 border border-green-200 text-green-800",
        toast.type === "error" && "bg-red-50 border border-red-200 text-red-800",
        toast.type === "info" && "bg-white border border-stone-200 text-stone-800"
      )}
    >
      <span className="font-medium">
        {toast.type === "success" && "✓ "}
        {toast.type === "error" && "✕ "}
        {toast.type === "info" && "ℹ "}
      </span>
      {toast.message}
      <button
        onClick={() => onRemove(toast.id)}
        className="absolute top-3 right-3 text-current opacity-40 hover:opacity-100 text-xs"
      >
        ✕
      </button>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType = "info") => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} onRemove={removeToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
