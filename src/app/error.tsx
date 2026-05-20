"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h2 className="font-display text-2xl text-stone-900 mb-2">Something went wrong</h2>
        <p className="text-stone-500 text-sm mb-8">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="bg-brand-700 text-white px-6 py-3 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
