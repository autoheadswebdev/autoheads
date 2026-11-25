import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  // Fetch basic stats in parallel for fast dashboard rendering
  const [
    { count: totalVehicles },
    { count: availableVehicles },
    { count: arrivingSoon },
    { count: reservedVehicles },
    { count: soldVehicles },
    { count: totalBookings }
  ] = await Promise.all([
    supabase.from('vehicles').select('*', { count: 'exact', head: true }),
    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('status', 'Available'),
    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('status', 'Arriving Soon'),
    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('status', 'Reserved'),
    supabase.from('vehicles').select('*', { count: 'exact', head: true }).eq('status', 'Sold'),
    supabase.from('bookings').select('*', { count: 'exact', head: true })
  ]);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-heading font-bold text-[#111111] dark:text-white mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Stat Cards */}
        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <p className="text-sm font-medium text-[#111111]/60 dark:text-white/60 mb-2">Total Vehicles</p>
          <p className="text-3xl font-bold text-[#111111] dark:text-white">{totalVehicles || 0}</p>
        </div>

        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <p className="text-sm font-medium text-[#111111]/60 dark:text-white/60 mb-2">Available Now</p>
          <p className="text-3xl font-bold text-green-500">{availableVehicles || 0}</p>
        </div>

        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <p className="text-sm font-medium text-[#111111]/60 dark:text-white/60 mb-2">Arriving Soon</p>
          <p className="text-3xl font-bold text-blue-500">{arrivingSoon || 0}</p>
        </div>

        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <p className="text-sm font-medium text-[#111111]/60 dark:text-white/60 mb-2">Reserved</p>
          <p className="text-3xl font-bold text-[#C8A45D]">{reservedVehicles || 0}</p>
        </div>

        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <p className="text-sm font-medium text-[#111111]/60 dark:text-white/60 mb-2">Sold</p>
          <p className="text-3xl font-bold text-[#111111]/40 dark:text-white/40">{soldVehicles || 0}</p>
        </div>

        <div className="bg-[#111111] dark:bg-white p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-md">
          <p className="text-sm font-medium text-white/70 dark:text-[#111111]/70 mb-2">Total Bookings</p>
          <p className="text-3xl font-bold text-white dark:text-[#111111]">{totalBookings || 0}</p>
        </div>

      </div>
    </div>
  );
}
