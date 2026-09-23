import { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard, Car, CalendarCheck, LogOut, ArrowLeft, FileText } from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#F4F4F5] dark:bg-[#0B0B0C] font-sans">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-[#131315] border-r border-[#111111]/10 dark:border-white/10 flex flex-col">
        <div className="p-6 border-b border-[#111111]/10 dark:border-white/10">
          <Link href="/" className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity">
            <ArrowLeft size={16} className="text-[#C8A45D]" />
            <span className="text-xs font-semibold text-[#111111]/60 dark:text-white/60">Back to Website</span>
          </Link>
          <h1 className="text-xl font-heading font-bold text-[#111111] dark:text-white mt-4">
            Auto<span className="text-[#C8A45D]">Heads</span> CMS
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#111111]/70 dark:text-white/70 hover:bg-[#111111]/5 dark:hover:bg-white/5 hover:text-[#C8A45D] transition-colors">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/admin/vehicles" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#111111]/70 dark:text-white/70 hover:bg-[#111111]/5 dark:hover:bg-white/5 hover:text-[#C8A45D] transition-colors">
            <Car size={18} />
            Vehicles
          </Link>
          <Link href="/admin/bookings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#111111]/70 dark:text-white/70 hover:bg-[#111111]/5 dark:hover:bg-white/5 hover:text-[#C8A45D] transition-colors">
            <CalendarCheck size={18} />
            Bookings
          </Link>
          <Link href="/admin/sell-requests" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-[#111111]/70 dark:text-white/70 hover:bg-[#111111]/5 dark:hover:bg-white/5 hover:text-[#C8A45D] transition-colors">
            <FileText size={18} />
            Sell Requests
          </Link>
        </nav>

        <div className="p-4 border-t border-[#111111]/10 dark:border-white/10">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

    </div>
  );
}
