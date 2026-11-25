"use client";

import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, Car, CalendarCheck, LogOut, 
  ArrowLeft, FileText, Menu, X 
} from "lucide-react";
import { createBrowserClient } from "@supabase/ssr";

export default function AdminLayoutClient({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Vehicles", href: "/admin/vehicles", icon: Car },
    { name: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
    { name: "Sell Requests", href: "/admin/sell-requests", icon: FileText },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F4F4F5] dark:bg-[#0B0B0C] font-sans overflow-hidden">
      
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-[#131315] border-b border-[#111111]/10 dark:border-white/10 z-30 shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -ml-1 text-[#111111] dark:text-white rounded-lg hover:bg-black/5 dark:hover:bg-white/10 min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle admin menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="font-heading font-bold text-base text-[#111111] dark:text-white">
            Auto<span className="text-[#C8A45D]">Heads</span> CMS
          </span>
        </div>
        <Link 
          href="/" 
          className="text-xs font-semibold text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] flex items-center gap-1 min-h-[40px]"
        >
          <ArrowLeft size={14} /> Site
        </Link>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Navigation (Desktop persistent, Mobile slide-in drawer) */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#131315] border-r border-[#111111]/10 dark:border-white/10 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-[#111111]/10 dark:border-white/10 flex justify-between items-start">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity">
              <ArrowLeft size={16} className="text-[#C8A45D]" />
              <span className="text-xs font-semibold text-[#111111]/60 dark:text-white/60">Back to Website</span>
            </Link>
            <h1 className="text-xl font-heading font-bold text-[#111111] dark:text-white mt-4">
              Auto<span className="text-[#C8A45D]">Heads</span> CMS
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden p-1.5 text-[#111111]/60 dark:text-white/60 hover:text-[#111111] dark:hover:text-white"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] ${
                  isActive
                    ? "bg-[#C8A45D]/15 text-[#C8A45D] font-semibold"
                    : "text-[#111111]/70 dark:text-white/70 hover:bg-[#111111]/5 dark:hover:bg-white/5 hover:text-[#111111] dark:hover:text-white"
                }`}
              >
                <item.icon size={18} className={isActive ? "text-[#C8A45D]" : "opacity-70"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#111111]/10 dark:border-white/10">
          <button 
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors min-h-[44px]"
          >
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

