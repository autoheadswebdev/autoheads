"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Gauge, Droplets, Sliders } from "lucide-react";

export type CarProps = {
  id: string;
  year: number;
  brand: string;
  model: string;
  mileage: string;
  fuel: string;
  transmission: string;
  price: string;
  image: string;
  isNew?: boolean;
};

export default function CarCard({
  car,
  view = "grid",
}: {
  car: CarProps;
  view?: "grid" | "list";
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (view === "list") {
    return (
      <Link href={`/inventory/${car.id}`} className="block h-full group">
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#121214] border border-[#111111]/10 dark:border-white/10 rounded-3xl overflow-hidden hover:border-[#C8A45D] transition-all duration-500 h-full relative group shadow-xl hover:shadow-2xl">
          <div className="relative w-full md:w-[40%] h-60 md:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {car.isNew && (
              <div className="absolute top-5 left-5 bg-[#C8A45D] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-md z-10 shadow-lg">
                NEW ARRIVAL
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-[#121214] hidden md:block" />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between w-full relative z-10">
            <div>
              <div className="text-[#C8A45D] font-mono text-xs tracking-widest uppercase mb-1 font-semibold">
                {car.year} • {car.brand}
              </div>
              <h3 className="text-2xl font-heading font-medium text-[#111111] dark:text-white group-hover:text-[#C8A45D] transition-colors duration-300">
                {car.model}
              </h3>
              
              <div className="grid grid-cols-3 gap-3 mt-6 text-xs text-[#111111]/70 dark:text-white/70 bg-[#111111]/5 dark:bg-black/60 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 rounded-2xl p-4 w-fit">
                <div className="flex flex-col items-center px-3">
                  <span className="font-bold text-[#111111] dark:text-white">{car.mileage}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">KM</span>
                </div>
                <div className="flex flex-col items-center px-3 border-x border-[#111111]/10 dark:border-white/10">
                  <span className="font-bold text-[#111111] dark:text-white">{car.fuel}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">FUEL</span>
                </div>
                <div className="flex flex-col items-center px-3">
                  <span className="font-bold text-[#111111] dark:text-white">{car.transmission}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">TRANS</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-end mt-8">
              <span className="text-3xl font-mono font-bold text-[#111111] dark:text-white">
                {car.price}
              </span>
              <div className="flex items-center gap-2 bg-[#C8A45D] text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-[#b8944d] transition-all">
                <span>VIEW DETAILS</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View - Matching Reference Mockup 100%
  return (
    <Link href={`/inventory/${car.id}`} className="block h-full group">
      <div className="relative w-full h-[480px] md:h-[510px] bg-white dark:bg-[#121214] rounded-3xl overflow-hidden border border-[#111111]/10 dark:border-white/10 hover:border-[#C8A45D] transition-all duration-500 shadow-2xl flex flex-col justify-between">
        
        {/* Car Image Fill */}
        <div className="absolute inset-0 z-0">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Crisp Bottom Gradient for Text Legibility (No white shade washing out photos) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent pointer-events-none" />
        </div>
        
        {/* Top Floating Badge Bar */}
        <div className="relative z-10 p-6 flex justify-between items-center">
          {car.isNew ? (
            <div className="bg-[#C8A45D]/20 backdrop-blur-md border border-[#C8A45D]/40 text-[#C8A45D] dark:text-[#E0BC75] text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-md shadow-lg">
              NEW ARRIVAL
            </div>
          ) : (
            <div />
          )}

          {/* Favorite Heart Control */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className={`w-9 h-9 rounded-full backdrop-blur-md border flex items-center justify-center transition-all ${
              isFavorite 
                ? "bg-[#C8A45D] border-[#C8A45D] text-black" 
                : "bg-black/30 border-white/20 text-white hover:bg-white hover:text-black"
            }`}
            aria-label="Add to favorites"
          >
            <Heart size={16} className={isFavorite ? "fill-current" : ""} />
          </button>
        </div>        {/* Bottom Card Content */}
        <div className="relative z-10 p-6 flex flex-col justify-end">
          <div className="text-[#C8A45D] font-mono text-xs tracking-widest uppercase mb-1 font-bold">
            {car.year} • {car.brand}
          </div>
          <h3 className="text-2xl font-heading font-medium text-white mb-4 drop-shadow-md leading-snug">
            {car.model}
          </h3>
          
          {/* Specification Badge Bar (Matching Mockup 100%) */}
          <div className="grid grid-cols-3 gap-2 mb-5 text-xs text-white bg-black/60 backdrop-blur-md border border-white/15 p-3 rounded-2xl">
            <div className="flex items-center justify-center gap-2">
              <Gauge size={16} className="text-[#C8A45D]" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white">{car.mileage}</span>
                <span className="text-[9px] text-white/60 uppercase font-mono">KM</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 border-x border-white/15">
              <Droplets size={16} className="text-[#C8A45D]" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white">{car.fuel}</span>
                <span className="text-[9px] text-white/60 uppercase font-mono">FUEL</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Sliders size={16} className="text-[#C8A45D]" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white">{car.transmission}</span>
                <span className="text-[9px] text-white/60 uppercase font-mono">TRANS</span>
              </div>
            </div>
          </div>
          
          {/* Price & CTA Button */}
          <div className="flex justify-between items-center pt-1">
            <span className="text-2xl md:text-3xl font-mono font-bold text-white drop-shadow-sm">
              {car.price}
            </span>
            <div className="flex items-center gap-2 bg-[#C8A45D] text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-xl group-hover:bg-[#b8944d] transition-all shadow-md">
              <span>VIEW DETAILS</span>
              <ArrowRight size={15} />
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}
