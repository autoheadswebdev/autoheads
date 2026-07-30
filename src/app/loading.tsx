export default function Loading() {
  return (
    <div className="flex-1 w-full min-h-[60vh] flex items-center justify-center bg-brand-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-brand-soft border-t-brand-graphite rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium text-brand-silver font-heading tracking-widest uppercase animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
