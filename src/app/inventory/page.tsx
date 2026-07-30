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
    <div className="bg-brand-soft min-h-screen pb-24">
      {/* Top Navigation / Filters Area */}
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <h1 className="text-3xl font-heading font-semibold text-brand-graphite">Browse Cars</h1>
            
            {/* Premium / Lite Toggle */}
            <div className="flex items-center bg-brand-white border border-brand-border rounded-full p-1 shadow-sm">
              <button
                onClick={() => setCategory("premium")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category === "premium" 
                    ? "bg-brand-graphite text-brand-white shadow-md" 
                    : "text-brand-silver hover:text-brand-graphite"
                }`}
              >
                <span className="text-lg">✨</span> Premium
              </button>
              <button
                onClick={() => setCategory("lite")}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  category === "lite" 
                    ? "bg-brand-graphite text-brand-white shadow-md" 
                    : "text-brand-silver hover:text-brand-graphite"
                }`}
              >
                <span className="text-lg">⚡</span> AH Lite
              </button>
            </div>
          </div>
          
          {/* Grid / List View Toggle */}
          <div className="flex items-center gap-2 bg-brand-white border border-brand-border rounded-lg p-1 self-end md:self-auto">
            {/* View Toggles */}
            <div className="flex items-center bg-brand-white rounded-lg border border-brand-border p-1">
              <button 
                onClick={() => setView("grid")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "grid" ? "bg-brand-graphite text-brand-white" : "text-brand-silver hover:text-brand-graphite"}`}
              >
                <LayoutGrid size={16} /> Grid
              </button>
              <button 
                onClick={() => setView("list")}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${view === "list" ? "bg-brand-graphite text-brand-white" : "text-brand-silver hover:text-brand-graphite"}`}
              >
                <List size={16} /> List
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-sm font-medium text-brand-graphite">Sort:</span>
              <div className="relative">
                <select className="appearance-none bg-brand-white border border-brand-border rounded-lg pl-4 pr-10 py-2 text-sm text-brand-graphite font-medium focus:outline-none focus:border-brand-silver cursor-pointer">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Mileage: Low to High</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-graphite pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <InventoryFilters />

        {/* Arriving Soon Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-graphite animate-pulse" />
            <h2 className="text-xl font-heading font-semibold text-brand-graphite">Arriving Soon</h2>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x hide-scrollbar">
            {ARRIVING_SOON.map((car) => (
              <div key={car.id} className="min-w-[280px] md:min-w-[350px] snap-start">
                <CarCard car={car} view="grid" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Inventory */}
        <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "flex flex-col gap-6"}>
          {(category === "premium" ? PREMIUM_INVENTORY : LITE_INVENTORY).map((car) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CarCard car={car} view={view} />
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-graphite text-brand-graphite font-semibold hover:bg-brand-graphite hover:text-brand-white transition-colors">
            Load More Cars <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
