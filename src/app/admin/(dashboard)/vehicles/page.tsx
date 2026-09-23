import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { Plus, Edit, Trash2 } from "lucide-react";

export default async function AdminVehiclesPage() {
  const supabase = await createClient();

  const { data: vehicles } = await supabase
    .from('vehicles')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-heading font-bold text-[#111111] dark:text-white">Vehicle Inventory</h1>
        <Link 
          href="/admin/vehicles/new"
          className="flex items-center gap-2 bg-[#C8A45D] text-black px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#b8944d] transition-colors shadow-sm"
        >
          <Plus size={16} />
          Add Vehicle
        </Link>
      </div>

      <div className="bg-white dark:bg-[#131315] rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#111111]/10 dark:border-white/10 text-xs tracking-widest text-[#111111]/50 dark:text-white/50 uppercase">
                <th className="p-4 font-semibold">Vehicle</th>
                <th className="p-4 font-semibold">Year</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {!vehicles || vehicles.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-[#111111]/50 dark:text-white/50 text-sm">
                    No vehicles found. Add your first vehicle to get started.
                  </td>
                </tr>
              ) : (
                vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-[#111111]/5 dark:border-white/5 hover:bg-[#111111]/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#111111]/5 dark:bg-white/5 relative overflow-hidden flex-shrink-0">
                          {vehicle.featured_image ? (
                            <Image src={vehicle.featured_image} alt={vehicle.model} fill className="object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#111111]/20 dark:text-white/20">
                              <Car size={20} />
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[#111111] dark:text-white text-sm">
                            {vehicle.make} {vehicle.model} {vehicle.variant}
                          </p>
                          <p className="text-xs text-[#111111]/60 dark:text-white/60 mt-0.5">
                            {vehicle.mileage.toLocaleString()} KM • {vehicle.fuel_type} • {vehicle.transmission}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-[#111111]/80 dark:text-white/80">{vehicle.year}</td>
                    <td className="p-4 text-sm font-semibold text-[#111111] dark:text-white">
                      ₹{vehicle.price.toLocaleString('en-IN')}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-widest uppercase ${
                        vehicle.status === 'Available' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                        vehicle.status === 'Arriving Soon' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                        vehicle.status === 'Reserved' || vehicle.status === 'Booked' ? 'bg-[#C8A45D]/10 text-[#C8A45D]' :
                        'bg-[#111111]/10 dark:bg-white/10 text-[#111111]/60 dark:text-white/60'
                      }`}>
                        {vehicle.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/admin/vehicles/${vehicle.id}`}
                          className="p-2 text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] hover:bg-[#C8A45D]/10 rounded-lg transition-colors"
                        >
                          <Edit size={16} />
                        </Link>
                        {/* Note: Delete logic will be handled via client component later */}
                        <button className="p-2 text-[#111111]/60 dark:text-white/60 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
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

// Temporary Car Icon import for empty state
import { Car } from "lucide-react";
