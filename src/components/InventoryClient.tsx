"use client";

import { useState } from "react";
import { LayoutGrid, List, ArrowRight, Award, FileText, Lock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import InventoryFilters, { FilterState } from "@/components/InventoryFilters";
import CarCard, { CarProps } from "@/components/CarCard";

export default function InventoryClient({ allCars, arrivingSoonCars }: { allCars: CarProps[], arrivingSoonCars: CarProps[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  
  const [filters, setFilters] = useState<FilterState>({
    brand: "All Brands",
    fuel: "All Fuel Types",
    transmission: "All Transmissions",
    yearRange: [2016, 2026],
  });

  const filteredCars = allCars.filter(car => {
    if (filters.brand !== "All Brands" && car.brand.toLowerCase() !== filters.brand.toLowerCase()) return false;
    if (filters.fuel !== "All Fuel Types" && car.fuel.toLowerCase() !== filters.fuel.toLowerCase()) return false;
    if (filters.transmission !== "All Transmissions" && car.transmission.toLowerCase() !== filters.transmission.toLowerCase()) return false;
    if (car.year < filters.yearRange[0] || car.year > filters.yearRange[1]) return false;
    return true;
  });

  return (
    <div className="bg-[#FAF8F4] dark:bg-[#0B0B0C] min-h-screen pt-20 pb-24 text-[#111111] dark:text-white transition-colors duration-500 font-sans">
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* 1. FILTER CONSOLE HEADER (Matching Mockup 100%) */}
        <InventoryFilters filters={filters} setFilters={setFilters} />

        {/* 2. ARRIVING SOON SECTION */}
        {arrivingSoonCars.length > 0 && (
          <section className="mb-12 sm:mb-20">
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8A45D] shadow-[0_0_12px_#C8A45D]" />
                <h2 className="text-lg sm:text-xl font-heading font-semibold tracking-wider uppercase text-[#111111] dark:text-white">
                  ARRIVING SOON
                </h2>
              </div>
              
              <a href="#all" className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-[#C8A45D] hover:text-[#b8944d] transition-colors py-1">
                <span>VIEW ALL</span>
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Grid Cards Matching Mockup */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {arrivingSoonCars.map((car) => (
                <CarCard key={car.id} car={car} view="grid" />
              ))}
            </div>
          </section>
        )}

        {/* 3. VALUE PROPOSITION BAR (Matching Mockup 100%) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20 bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#111111]/10 dark:divide-white/10">
            
            {/* Value 1 */}
            <div className="flex items-center gap-3.5 sm:gap-4 px-2 pt-4 sm:pt-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-0.5 sm:mb-1">
                  100% VERIFIED
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Every car is thoroughly inspected & verified
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-3.5 sm:gap-4 px-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Award size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-0.5 sm:mb-1">
                  BEST PRICE
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Get the best market value for your car
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-3.5 sm:gap-4 px-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-0.5 sm:mb-1">
                  EASY PROCESS
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Hassle-free documentation & transfer
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-center gap-3.5 sm:gap-4 px-2 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-0.5 sm:mb-1">
                  SECURE PAYMENT
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Fast & secure payment guaranteed
                </p>
              </div>
            </div>

          </div>
        </motion.section>

        {/* 4. MAIN COLLECTION GRID */}
        <section id="all">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold tracking-tight text-[#111111] dark:text-white">
                ALL VEHICLES
              </h2>
              <span className="text-xs text-[#111111]/50 dark:text-white/50 font-mono">
                ({filteredCars.length} {filteredCars.length === 1 ? 'vehicle' : 'vehicles'})
              </span>
            </div>
            
            {/* View Switcher Toggle */}
            <div className="flex items-center gap-1.5 bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-1 rounded-xl shadow-md">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-lg transition-all min-w-[36px] min-h-[36px] flex items-center justify-center ${
                  view === "grid" 
                    ? "bg-[#C8A45D] text-black shadow-sm" 
                    : "text-[#111111]/60 dark:text-white/60 hover:text-[#111111] dark:hover:text-white"
                }`}
                aria-label="Grid View"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setView("list")}
                className={`p-2 rounded-lg transition-all min-w-[36px] min-h-[36px] flex items-center justify-center ${
                  view === "list" 
                    ? "bg-[#C8A45D] text-black shadow-sm" 
                    : "text-[#111111]/60 dark:text-white/60 hover:text-[#111111] dark:hover:text-white"
                }`}
                aria-label="List View"
              >
                <List size={18} />
              </button>
            </div>
          </div>

          <div className={`grid gap-6 sm:gap-8 ${
            view === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <CarCard key={car.id} car={car} view={view} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-[#111111]/60 dark:text-white/60 bg-white dark:bg-[#131315] rounded-2xl border border-[#111111]/10 dark:border-white/10 p-8">
                <p className="text-base font-medium mb-1">No vehicles found matching your criteria.</p>
                <p className="text-xs text-[#111111]/40 dark:text-white/40">Try resetting filters to view all available cars.</p>
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
