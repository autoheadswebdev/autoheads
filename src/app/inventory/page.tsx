"use client";

import { useState } from "react";
import { LayoutGrid, List, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import InventoryFilters from "@/components/InventoryFilters";
import CarCard, { CarProps } from "@/components/CarCard";

// Dummy data
const ARRIVING_SOON: CarProps[] = [
  {
    id: "a1",
    year: 2025,
    brand: "Skoda",
    model: "Kushaq Style 1.0 TSI",
    mileage: "0",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,25,000",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop", 
    isNew: true,
  },
  {
    id: "a2",
    year: 2024,
    brand: "Skoda",
    model: "Slavia Style 1.0 TSI",
    mileage: "17,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,40,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop", 
    isNew: true,
  },
];

const PREMIUM_INVENTORY: CarProps[] = [
  {
    id: "1",
    year: 2022,
    brand: "Volkswagen",
    model: "Tiguan",
    mileage: "16,100",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹22,95,000",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=600&auto=format&fit=crop", 
  },
  {
    id: "6",
    year: 2021,
    brand: "Citroen",
    model: "C5 Aircross Feel",
    mileage: "45,000",
    fuel: "Diesel",
    transmission: "Automatic",
    price: "₹18,50,000",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=600&auto=format&fit=crop",
  },
  // Adding one more for a better grid look
  {
    id: "7",
    year: 2023,
    brand: "Porsche",
    model: "Macan GTS",
    mileage: "12,000",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹85,00,000",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop",
  }
];

const LITE_INVENTORY: CarProps[] = [
  {
    id: "2",
    year: 2025,
    brand: "Skoda",
    model: "Kushaq Style 1.0 TSI",
    mileage: "19,900",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,25,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    year: 2016,
    brand: "Maruti Suzuki",
    model: "S Cross Zeta",
    mileage: "96,450",
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹4,95,000",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    year: 2024,
    brand: "Skoda",
    model: "Slavia Style 1.0 TSI",
    mileage: "17,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹10,40,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    year: 2022,
    brand: "MG",
    model: "Astor VTI-Tech",
    mileage: "32,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹9,95,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop",
  },
];

export default function InventoryPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [category, setCategory] = useState<"premium" | "lite">("premium");

  return (
    <div className="bg-[#050505] min-h-screen pb-24 text-white">
      {/* Top Header Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-brand-graphite/40 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 pt-12 relative z-10">
        
        {/* Header & View Controls */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-10 gap-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white tracking-tight">Collection</h1>
            
            {/* Segmented Control for Premium/Lite */}
            <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-xl">
              <button
                onClick={() => setCategory("premium")}
                className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category === "premium" 
                    ? "bg-white text-black shadow-lg" 
                    : "text-brand-silver hover:text-white"
                }`}
              >
                Premium
              </button>
              <button
                onClick={() => setCategory("lite")}
                className={`flex items-center gap-2 px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category === "lite" 
                    ? "bg-white text-black shadow-lg" 
                    : "text-brand-silver hover:text-white"
                }`}
              >
                AH Lite
              </button>
            </div>
          </div>
          
          {/* Controls Right */}
          <div className="flex items-center gap-4 self-end xl:self-auto">
            {/* View Toggles */}
            <div className="flex items-center bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-1.5 shadow-xl">
              <button 
                onClick={() => setView("grid")}
                className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${view === "grid" ? "bg-white text-black" : "text-brand-silver hover:text-white"}`}
                aria-label="Grid View"
              >
                <LayoutGrid size={18} />
              </button>
              <button 
                onClick={() => setView("list")}
                className={`flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${view === "list" ? "bg-white text-black" : "text-brand-silver hover:text-white"}`}
                aria-label="List View"
              >
                <List size={18} />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative shadow-xl">
              <select className="appearance-none bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl pl-5 pr-12 py-3.5 text-sm text-white font-medium focus:outline-none focus:border-white/30 cursor-pointer">
                <option className="bg-[#111]">Newest First</option>
                <option className="bg-[#111]">Price: Low to High</option>
                <option className="bg-[#111]">Price: High to Low</option>
                <option className="bg-[#111]">Mileage: Low to High</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <InventoryFilters />

        {/* Arriving Soon Section */}
        <div className="mb-16 mt-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <h2 className="text-xl font-mono tracking-widest uppercase text-white font-semibold">Arriving Soon</h2>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {ARRIVING_SOON.map((car) => (
              <div key={car.id} className="min-w-[320px] md:min-w-[400px] snap-start">
                <CarCard car={car} view="grid" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Inventory */}
        <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
          {(category === "premium" ? PREMIUM_INVENTORY : LITE_INVENTORY).map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <CarCard car={car} view={view} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">
            Load More <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
