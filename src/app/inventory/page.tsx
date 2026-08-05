"use client";

import { useState } from "react";
import { LayoutGrid, List, ChevronDown, ArrowRight, ShieldCheck, Award, FileText, Lock, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import InventoryFilters from "@/components/InventoryFilters";
import CarCard, { CarProps } from "@/components/CarCard";

// Mockup Exact Cars
const ARRIVING_SOON: CarProps[] = [
  {
    id: "a1",
    year: 2025,
    brand: "SKODA",
    model: "Kushaq Style 1.0 TSI",
    mileage: "0",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,25,000",
    image: "/skoda-kushaq.png", 
    isNew: true,
  },
  {
    id: "a2",
    year: 2024,
    brand: "SKODA",
    model: "Slavia Style 1.0 TSI",
    mileage: "17,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,40,000",
    image: "/skoda-slavia.png", 
    isNew: true,
  },
  {
    id: "a3",
    year: 2022,
    brand: "BMW",
    model: "320d Luxury Line",
    mileage: "24,500",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹17,80,000",
    image: "/bmw-320d.png", 
    isNew: true,
  },
];

const PREMIUM_INVENTORY: CarProps[] = [
  {
    id: "1",
    year: 2023,
    brand: "PORSCHE",
    model: "Macan GTS",
    mileage: "12,000",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹85,00,000",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    year: 2022,
    brand: "VOLKSWAGEN",
    model: "Tiguan Elegance",
    mileage: "16,100",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹22,95,000",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: "3",
    year: 2021,
    brand: "CITROEN",
    model: "C5 Aircross Feel",
    mileage: "45,000",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹18,50,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
  }
];

export default function InventoryPage() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <div className="bg-[#FAF8F4] dark:bg-[#0B0B0C] min-h-screen pt-20 pb-24 text-[#111111] dark:text-white transition-colors duration-500 font-sans">
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. FILTER CONSOLE HEADER (Matching Mockup 100%) */}
        <InventoryFilters />

        {/* 2. ARRIVING SOON SECTION */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8A45D] shadow-[0_0_12px_#C8A45D]" />
              <h2 className="text-xl font-heading font-semibold tracking-wider uppercase text-[#111111] dark:text-white">
                ARRIVING SOON
              </h2>
            </div>
            
            <a href="#all" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C8A45D] hover:text-[#b8944d] transition-colors">
              <span>VIEW ALL</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* 3 Grid Cards Matching Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARRIVING_SOON.map((car) => (
              <CarCard key={car.id} car={car} view="grid" />
            ))}
          </div>
        </section>

        {/* 3. VALUE PROPOSITION BAR (Matching Mockup 100%) */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#111111]/10 dark:divide-white/10">
            
            {/* Value 1 */}
            <div className="flex items-center gap-4 px-2 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-1">
                  100% VERIFIED
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Every car is thoroughly inspected & verified
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-4 px-2 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-1">
                  BEST PRICE
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Get the best market value for your car
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-4 px-2 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <FileText size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-1">
                  EASY PROCESS
                </h4>
                <p className="text-xs text-[#111111]/70 dark:text-white/60 font-light leading-snug">
                  Hassle-free documentation & ownership transfer
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-center gap-4 px-2 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Lock size={22} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#C8A45D] mb-1">
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
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-heading font-semibold tracking-tight text-[#111111] dark:text-white">
              ALL VEHICLES
            </h2>
            
            {/* View Switcher Toggle */}
            <div className="flex items-center gap-2 bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-1.5 rounded-xl shadow-md">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-lg transition-all ${
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
                className={`p-2 rounded-lg transition-all ${
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

          <div className={`grid gap-8 ${
            view === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {[...PREMIUM_INVENTORY, ...ARRIVING_SOON].map((car) => (
              <CarCard key={car.id} car={car} view={view} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
