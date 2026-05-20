import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <p className="text-brand-600 tracking-[0.2em] uppercase text-sm mb-3">404</p>
        <h1 className="text-5xl font-display text-stone-900 mb-4">Page not found</h1>
        <p className="text-stone-500 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand-700 text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-brand-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
