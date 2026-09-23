"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateVehicle, deleteVehicle } from "./actions";
import { ArrowLeft, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EditVehicleClient({ vehicle }: { vehicle: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const [formData, setFormData] = useState({
    make: vehicle.make || "",
    model: vehicle.model || "",
    variant: vehicle.variant || "",
    year: vehicle.year || new Date().getFullYear(),
    price: vehicle.price || "",
    fuel_type: vehicle.fuel_type || "Petrol",
    transmission: vehicle.transmission || "Automatic",
    mileage: vehicle.mileage || "",
    status: vehicle.status || "Available",
    body_type: vehicle.body_type || "Sedan",
    exterior_color: vehicle.exterior_color || "",
    interior_color: vehicle.interior_color || "",
    engine_specs: vehicle.engine_specs || "",
    drive_type: vehicle.drive_type || "RWD",
    registration_year: vehicle.registration_year || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('make', formData.make);
      data.append('model', formData.model);
      data.append('variant', formData.variant);
      data.append('year', String(formData.year));
      data.append('price', String(formData.price));
      data.append('mileage', String(formData.mileage));
      data.append('fuel_type', formData.fuel_type);
      data.append('transmission', formData.transmission);
      data.append('status', formData.status);
      data.append('body_type', formData.body_type);
      data.append('exterior_color', formData.exterior_color);
      data.append('interior_color', formData.interior_color);
      data.append('engine_specs', formData.engine_specs);
      data.append('drive_type', formData.drive_type);
      if (formData.registration_year) {
        data.append('registration_year', String(formData.registration_year));
      }

      const result = await updateVehicle(vehicle.id, data);

      if (result.error) {
        throw new Error(result.error);
      }

      alert("Vehicle successfully updated!");
      router.push("/admin/vehicles");
      router.refresh();
    } catch (error: any) {
      alert("Error updating vehicle: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to permanently delete this vehicle? This will also delete all associated gallery images.");
    if (!confirm) return;

    setDeleting(true);
    try {
      const result = await deleteVehicle(vehicle.id);
      if (result.error) throw new Error(result.error);
      
      alert("Vehicle deleted successfully.");
      router.push("/admin/vehicles");
      router.refresh();
    } catch (err: any) {
      alert("Error deleting vehicle: " + err.message);
      setDeleting(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/vehicles" className="p-2 hover:bg-[#111111]/5 dark:hover:bg-white/5 rounded-lg transition-colors">
            <ArrowLeft size={20} className="text-[#111111] dark:text-white" />
          </Link>
          <h1 className="text-2xl font-heading font-bold text-[#111111] dark:text-white">Edit Vehicle</h1>
        </div>
        <button 
          onClick={handleDelete}
          disabled={deleting}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-600 hover:bg-red-500 hover:text-white transition-colors rounded-xl font-medium text-sm disabled:opacity-50"
        >
          {deleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
          Delete
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Notice about images */}
        <div className="bg-[#111111]/5 dark:bg-white/5 p-4 rounded-xl border border-[#111111]/10 dark:border-white/10 text-sm text-[#111111]/70 dark:text-white/70">
          <strong>Note:</strong> Editing the image gallery for existing vehicles is currently locked. The existing gallery images are preserved.
          {vehicle.featured_image && (
            <div className="mt-4 flex gap-4">
              <div className="w-24 h-16 rounded-lg bg-black/10 relative overflow-hidden">
                <Image src={vehicle.featured_image} alt="Featured" fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Basic Details */}
        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[#111111] dark:text-white mb-4">Basic Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Make/Brand</label>
              <input required type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. BMW" value={formData.make} onChange={e => setFormData({...formData, make: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Model</label>
              <input required type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. 320d" value={formData.model} onChange={e => setFormData({...formData, model: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Variant</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. Luxury Line" value={formData.variant} onChange={e => setFormData({...formData, variant: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Year</label>
              <input required type="number" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.year} onChange={e => setFormData({...formData, year: Number(e.target.value)})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Price (₹)</label>
              <input required type="number" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. 4500000" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Mileage (KM)</label>
              <input required type="number" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. 25000" value={formData.mileage} onChange={e => setFormData({...formData, mileage: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Fuel Type</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.fuel_type} onChange={e => setFormData({...formData, fuel_type: e.target.value})}>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Transmission</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.transmission} onChange={e => setFormData({...formData, transmission: e.target.value})}>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Status</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})}>
                <option value="Available">Available</option>
                <option value="Arriving Soon">Arriving Soon</option>
                <option value="Booked">Booked</option>
                <option value="Sold">Sold</option>
              </select>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white dark:bg-[#131315] p-6 rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-[#111111] dark:text-white mb-4">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Body Type</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.body_type} onChange={e => setFormData({...formData, body_type: e.target.value})}>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Coupe">Coupe</option>
                <option value="Convertible">Convertible</option>
                <option value="Wagon">Wagon</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Exterior Color</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. Obsidian Black" value={formData.exterior_color} onChange={e => setFormData({...formData, exterior_color: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Interior Color</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. Ivory White" value={formData.interior_color} onChange={e => setFormData({...formData, interior_color: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Engine Specs</label>
              <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. 3.0L V6 Twin-Turbo" value={formData.engine_specs} onChange={e => setFormData({...formData, engine_specs: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Drive Type</label>
              <select className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" value={formData.drive_type} onChange={e => setFormData({...formData, drive_type: e.target.value})}>
                <option value="RWD">RWD</option>
                <option value="FWD">FWD</option>
                <option value="AWD">AWD</option>
                <option value="4WD">4WD</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1.5">Registration Year</label>
              <input type="number" className="w-full px-4 py-2.5 rounded-xl bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 text-sm focus:outline-none focus:border-[#C8A45D]" placeholder="e.g. 2026" value={formData.registration_year} onChange={e => setFormData({...formData, registration_year: e.target.value})} />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 bg-[#C8A45D] text-black px-8 py-3 rounded-xl font-semibold hover:bg-[#b8944d] transition-colors disabled:opacity-50"
          >
            {loading && <Loader2 size={18} className="animate-spin" />}
            {loading ? 'Saving Changes...' : 'Save Changes'}
          </button>
        </div>

      </form>
    </div>
  );
}
