"use client";

import { useState } from "react";
import { Trash2, Phone, Mail, User, Car } from "lucide-react";
import { deleteSellRequest } from "./actions";

export default function SellRequestsClient({ initialRequests }: { initialRequests: any[] }) {
  const [requests, setRequests] = useState(initialRequests);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this request?")) return;

    setIsDeleting(id);
    const result = await deleteSellRequest(id);
    
    if (result.success) {
      setRequests(requests.filter(req => req.id !== id));
    } else {
      alert("Failed to delete request.");
    }
    setIsDeleting(null);
  };

  return (
    <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl border border-[#111111]/10 dark:border-white/10 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FAF8F4] dark:bg-[#222222] border-b border-[#111111]/10 dark:border-white/10">
              <th className="px-6 py-4 text-xs font-mono tracking-widest text-[#111111]/60 dark:text-white/60 uppercase">Date</th>
              <th className="px-6 py-4 text-xs font-mono tracking-widest text-[#111111]/60 dark:text-white/60 uppercase">Customer</th>
              <th className="px-6 py-4 text-xs font-mono tracking-widest text-[#111111]/60 dark:text-white/60 uppercase">Vehicle Details</th>
              <th className="px-6 py-4 text-xs font-mono tracking-widest text-[#111111]/60 dark:text-white/60 uppercase">Media</th>
              <th className="px-6 py-4 text-xs font-mono tracking-widest text-[#111111]/60 dark:text-white/60 uppercase text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#111111]/10 dark:divide-white/10">
            {requests.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-[#111111]/50 dark:text-white/50 text-sm">
                  No sell requests found.
                </td>
              </tr>
            ) : (
              requests.map((req) => (
                <tr key={req.id} className="hover:bg-[#FAF8F4]/50 dark:hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-[#111111] dark:text-white">
                      {new Date(req.created_at).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white">
                        <User size={14} className="text-[#C8A45D]" />
                        {req.full_name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#111111]/70 dark:text-white/70">
                        <Phone size={12} />
                        {req.phone}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#111111]/70 dark:text-white/70">
                        <Mail size={12} />
                        {req.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#111111] dark:text-white">
                        <Car size={14} className="text-[#C8A45D]" />
                        {req.brand} {req.model}
                      </div>
                      <div className="text-xs text-[#111111]/70 dark:text-white/70">
                        {req.vehicle_number} • {req.km_driven.toLocaleString()} km
                      </div>
                      <div className="text-[10px] text-[#C8A45D] uppercase tracking-wider">
                        {req.fuel_type} • {req.transmission} • {req.ownership === '1' ? '1st Owner' : req.ownership === '2' ? '2nd Owner' : '3rd+ Owner'}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {req.media_urls && req.media_urls.length > 0 ? (
                      <div className="flex -space-x-2 overflow-hidden">
                        {req.media_urls.slice(0, 3).map((url: string, idx: number) => (
                          <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-[#1a1a1a] overflow-hidden hover:z-10 transition-transform hover:scale-110">
                            <img src={url} alt="Vehicle media" className="h-full w-full object-cover" />
                          </a>
                        ))}
                        {req.media_urls.length > 3 && (
                          <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white dark:ring-[#1a1a1a] bg-[#FAF8F4] dark:bg-[#333] text-xs font-medium text-[#111111] dark:text-white">
                            +{req.media_urls.length - 3}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-xs text-[#111111]/40 dark:text-white/40 italic">No Media</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(req.id)}
                      disabled={isDeleting === req.id}
                      className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                      title="Delete Request"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
