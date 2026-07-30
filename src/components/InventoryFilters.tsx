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
    <div className="w-full bg-brand-white border border-brand-border rounded-xl p-4 shadow-sm mb-8">
      <div className="flex justify-between items-center md:hidden mb-4">
        <Button 
          variant="outline" 
          className="w-full flex justify-between items-center"
          onClick={() => setFiltersOpen(!filtersOpen)}
        >
          <span className="flex items-center gap-2"><SlidersHorizontal size={18} /> Filters</span>
          {filtersOpen ? <X size={18} /> : <ChevronDown size={18} />}
        </Button>
      </div>

      <div className={`${filtersOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 items-end`}>
        
        {/* Brand */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-semibold text-brand-graphite uppercase mb-2">Brand</label>
          <div className="relative">
            <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-graphite focus:outline-none focus:border-brand-silver transition-colors">
              <option>All Brands</option>
              <option>Audi</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Porsche</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Fuel Type */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-semibold text-brand-graphite uppercase mb-2">Fuel Type</label>
          <div className="relative">
            <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-graphite focus:outline-none focus:border-brand-silver transition-colors">
              <option>All Fuel Types</option>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Transmission */}
        <div className="w-full md:w-1/4">
          <label className="block text-xs font-semibold text-brand-graphite uppercase mb-2">Transmission</label>
          <div className="relative">
            <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-sm text-brand-graphite focus:outline-none focus:border-brand-silver transition-colors">
              <option>All Types</option>
              <option>Automatic</option>
              <option>Manual</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
          </div>
        </div>

        {/* Year Range (Interactive Slider) */}
        <div className="w-full md:w-1/4">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-xs font-semibold text-brand-graphite uppercase">Year Range</label>
            <span className="text-sm font-medium text-brand-graphite">{yearRange[0]} - {yearRange[1]}</span>
          </div>
          <div className="w-full h-12 bg-brand-soft border border-brand-border rounded-lg px-6 flex items-center">
             <Slider
               range
               min={2010}
               max={new Date().getFullYear()}
               value={yearRange}
               onChange={(val) => setYearRange(val as number[])}
               trackStyle={{ backgroundColor: 'var(--color-brand-graphite)', height: 6 }}
               railStyle={{ backgroundColor: 'var(--color-brand-border)', height: 6 }}
               handleStyle={[
                 { borderColor: '#fff', backgroundColor: 'var(--color-brand-graphite)', opacity: 1, width: 20, height: 20, marginTop: -7, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
                 { borderColor: '#fff', backgroundColor: 'var(--color-brand-graphite)', opacity: 1, width: 20, height: 20, marginTop: -7, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
               ]}
               className="w-full"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
