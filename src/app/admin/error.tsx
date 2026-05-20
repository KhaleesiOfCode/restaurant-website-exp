"use client";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-20">
      <h2 className="font-display text-xl text-stone-900 mb-2">Something went wrong</h2>
      <p className="text-stone-500 text-sm mb-6">{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={reset}
        className="bg-brand-700 text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-brand-800 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
