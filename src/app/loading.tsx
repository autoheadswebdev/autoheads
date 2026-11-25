export default function Loading() {
  return (
    <div className="flex-1 w-full min-h-[60vh] flex items-center justify-center bg-[#FAF8F4] dark:bg-[#111111] transition-colors">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-3 border-[#111111]/10 dark:border-white/10 border-t-[#C8A45D] rounded-full animate-spin mb-4"></div>
        <p className="text-xs font-semibold text-[#111111]/50 dark:text-white/50 font-heading tracking-widest uppercase animate-pulse">Loading AutoHeads...</p>
      </div>
    </div>
  );
}
