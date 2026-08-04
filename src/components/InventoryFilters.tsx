"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Button } from "./ui/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function InventoryFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [yearRange, setYearRange] = useState([2016, 2026]);

  return (
    <div className="w-full bg-black/40 backdrop-blur-md border border-brand-white/10 rounded-3xl p-6 md:p-8 shadow-2xl mb-8 relative z-20">
      <div className="flex justify-between items-center md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex justify-between items-center border-white/20 text-white hover:bg-white/10"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <span className="flex items-center gap-2"><SlidersHorizontal size={18} /> Filters</span>
          {filtersOpen ? <X size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>

      <div className={`${filtersOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 lg:gap-10 items-end`}>
        
        {/* Brand */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-mono tracking-widest text-brand-silver uppercase mb-3">Brand</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-silver transition-colors cursor-pointer">
              <option className="bg-[#1a1a1a]">All Brands</option>
              <option className="bg-[#1a1a1a]">Audi</option>
              <option className="bg-[#1a1a1a]">BMW</option>
              <option className="bg-[#1a1a1a]">Mercedes-Benz</option>
              <option className="bg-[#1a1a1a]">Porsche</option>
            </select>
            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Fuel Type */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-mono tracking-widest text-brand-silver uppercase mb-3">Fuel Type</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-silver transition-colors cursor-pointer">
              <option className="bg-[#1a1a1a]">All Fuel Types</option>
              <option className="bg-[#1a1a1a]">Petrol</option>
              <option className="bg-[#1a1a1a]">Diesel</option>
              <option className="bg-[#1a1a1a]">Electric</option>
              <option className="bg-[#1a1a1a]">Hybrid</option>
            </select>
            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Transmission */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-mono tracking-widest text-brand-silver uppercase mb-3">Transmission</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-brand-silver transition-colors cursor-pointer">
              <option className="bg-[#1a1a1a]">All Types</option>
              <option className="bg-[#1a1a1a]">Automatic</option>
              <option className="bg-[#1a1a1a]">Manual</option>
            </select>
            <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Year Range (Interactive Slider) */}
        <div className="w-full md:w-1/4">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-xs font-mono tracking-widest text-brand-silver uppercase">Year Range</label>
            <span className="text-sm font-medium text-white">{yearRange[0]} - {yearRange[1]}</span>
          </div>
          <div className="w-full h-[54px] bg-white/5 border border-white/10 rounded-2xl px-6 flex items-center">
             <Slider
               range
               min={2010}
               max={new Date().getFullYear()}
               value={yearRange}
               onChange={(val) => setYearRange(val as number[])}
               trackStyle={{ backgroundColor: '#fff', height: 4 }}
               railStyle={{ backgroundColor: 'rgba(255,255,255,0.15)', height: 4 }}
               handleStyle={[
                 { borderColor: '#000', backgroundColor: '#fff', opacity: 1, width: 20, height: 20, marginTop: -8, boxShadow: '0 2px 8px rgba(0,0,0,0.5)' },
                 { borderColor: '#000', backgroundColor: '#fff', opacity: 1, width: 20, height: 20, marginTop: -8, boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }
               ]}
               className="w-full"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
