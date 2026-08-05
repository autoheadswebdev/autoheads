"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, Car, Droplets, Gauge, Sparkles } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function InventoryFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [yearRange, setYearRange] = useState([2016, 2026]);
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedFuel, setSelectedFuel] = useState("All Fuel Types");
  const [selectedTrans, setSelectedTrans] = useState("All Transmissions");

  return (
    <div className="w-full bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 rounded-2xl p-5 md:p-6 shadow-xl mb-12 relative z-20 transition-colors duration-500">
      
      {/* Mobile Filter Toggle */}
      <div className="flex justify-between items-center md:hidden">
        <button 
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="w-full flex justify-between items-center bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#111111] dark:text-white"
        >
          <span className="flex items-center gap-2 font-medium"><SlidersHorizontal size={16} className="text-[#C8A45D]" /> Filter Options</span>
          <ChevronDown size={16} className={`transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      <div className={`${filtersOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-5 lg:gap-6 items-center justify-between mt-4 md:mt-0`}>
        
        {/* Brand */}
        <div className="w-full md:w-1/4">
          <label className="block text-[10px] font-mono tracking-widest text-[#111111]/60 dark:text-white/50 uppercase mb-2">
            BRAND
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A45D] pointer-events-none">
              <Car size={16} />
            </div>
            <select 
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full appearance-none bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl pl-11 pr-10 py-3 text-xs md:text-sm font-medium text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] transition-colors cursor-pointer"
            >
              <option value="All Brands" className="bg-white dark:bg-[#1A1A1A]">All Brands</option>
              <option value="Skoda" className="bg-white dark:bg-[#1A1A1A]">Skoda</option>
              <option value="BMW" className="bg-white dark:bg-[#1A1A1A]">BMW</option>
              <option value="Porsche" className="bg-white dark:bg-[#1A1A1A]">Porsche</option>
              <option value="Mercedes-Benz" className="bg-white dark:bg-[#1A1A1A]">Mercedes-Benz</option>
              <option value="Audi" className="bg-white dark:bg-[#1A1A1A]">Audi</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
          </div>
        </div>

        {/* Fuel Type */}
        <div className="w-full md:w-1/4">
          <label className="block text-[10px] font-mono tracking-widest text-[#111111]/60 dark:text-white/50 uppercase mb-2">
            FUEL TYPE
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A45D] pointer-events-none">
              <Droplets size={16} />
            </div>
            <select 
              value={selectedFuel}
              onChange={(e) => setSelectedFuel(e.target.value)}
              className="w-full appearance-none bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl pl-11 pr-10 py-3 text-xs md:text-sm font-medium text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] transition-colors cursor-pointer"
            >
              <option value="All Fuel Types" className="bg-white dark:bg-[#1A1A1A]">All Fuel Types</option>
              <option value="Petrol" className="bg-white dark:bg-[#1A1A1A]">Petrol</option>
              <option value="Diesel" className="bg-white dark:bg-[#1A1A1A]">Diesel</option>
              <option value="Electric" className="bg-white dark:bg-[#1A1A1A]">Electric</option>
              <option value="Hybrid" className="bg-white dark:bg-[#1A1A1A]">Hybrid</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
          </div>
        </div>

        {/* Transmission */}
        <div className="w-full md:w-1/4">
          <label className="block text-[10px] font-mono tracking-widest text-[#111111]/60 dark:text-white/50 uppercase mb-2">
            TRANSMISSION
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8A45D] pointer-events-none">
              <Gauge size={16} />
            </div>
            <select 
              value={selectedTrans}
              onChange={(e) => setSelectedTrans(e.target.value)}
              className="w-full appearance-none bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl pl-11 pr-10 py-3 text-xs md:text-sm font-medium text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] transition-colors cursor-pointer"
            >
              <option value="All Transmissions" className="bg-white dark:bg-[#1A1A1A]">All Transmissions</option>
              <option value="Automatic" className="bg-white dark:bg-[#1A1A1A]">Automatic</option>
              <option value="Manual" className="bg-white dark:bg-[#1A1A1A]">Manual</option>
            </select>
            <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
          </div>
        </div>

        {/* Year Range (Dual Handle Slider with Gold Track) */}
        <div className="w-full md:w-1/4">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-[10px] font-mono tracking-widest text-[#111111]/60 dark:text-white/50 uppercase">
              YEAR RANGE
            </label>
            <span className="text-xs font-mono font-bold text-[#111111] dark:text-white">
              {yearRange[0]} - {yearRange[1]}
            </span>
          </div>
          <div className="w-full h-[46px] bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-5 flex items-center">
            <Slider
              range
              min={2016}
              max={2026}
              value={yearRange}
              onChange={(val) => setYearRange(val as number[])}
              trackStyle={{ backgroundColor: '#C8A45D', height: 4 }}
              railStyle={{ backgroundColor: 'rgba(200, 164, 93, 0.2)', height: 4 }}
              handleStyle={[
                { borderColor: '#C8A45D', backgroundColor: '#FAF8F4', opacity: 1, width: 16, height: 16, marginTop: -6, boxShadow: '0 0 10px rgba(200,164,93,0.4)' },
                { borderColor: '#C8A45D', backgroundColor: '#FAF8F4', opacity: 1, width: 16, height: 16, marginTop: -6, boxShadow: '0 0 10px rgba(200,164,93,0.4)' }
              ]}
              className="w-full"
            />
          </div>
        </div>

        {/* Square Filter Button Accent */}
        <div className="shrink-0 self-end">
          <button 
            className="w-[46px] h-[46px] rounded-xl bg-[#C8A45D] text-black hover:bg-[#b8944d] flex items-center justify-center transition-all shadow-md hover:scale-105"
            aria-label="Filter Options"
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}
