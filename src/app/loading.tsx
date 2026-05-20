export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-brand-200 border-t-brand-700 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-stone-400 text-sm tracking-wider uppercase">Loading...</p>
      </div>
    </div>
  );
}
