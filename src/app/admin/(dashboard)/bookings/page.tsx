import { createClient } from "@/lib/supabase/server";
import { CalendarCheck } from "lucide-react";

export default async function AdminBookingsPage() {
  const supabase = await createClient();

  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <div>
          <h1 className="text-xl sm:text-2xl font-heading font-bold text-[#111111] dark:text-white">Customer Bookings</h1>
          <p className="text-xs sm:text-sm text-[#111111]/60 dark:text-white/60 mt-1">Manage test drives and vehicle reservations.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#131315] rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#111111]/10 dark:border-white/10 text-xs tracking-widest text-[#111111]/50 dark:text-white/50 uppercase bg-[#FAF8F4] dark:bg-[#1A1A1A]">
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Customer</th>
                <th className="p-4 font-semibold">Vehicle</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {!bookings || bookings.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-[#111111]/50 dark:text-white/50 text-sm">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <CalendarCheck size={28} className="text-[#C8A45D]/60 mb-1" />
                      <span>No bookings received yet.</span>
                    </div>
                  </td>
                </tr>
              ) : (
                bookings.map((booking: any) => (
                  <tr key={booking.id} className="border-b border-[#111111]/5 dark:border-white/5">
                    <td className="p-4 text-sm">{new Date(booking.created_at).toLocaleDateString()}</td>
                    <td className="p-4 text-sm font-medium">{booking.name || booking.customer_name}</td>
                    <td className="p-4 text-sm">{booking.vehicle_id}</td>
                    <td className="p-4 text-sm">{booking.status || 'Pending'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

