"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Droplets, Sliders } from "lucide-react";

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
  status?: string;
};

export default function CarCard({
  car,
  view = "grid",
}: {
  car: CarProps;
  view?: "grid" | "list";
}) {


  if (view === "list") {
    return (
      <Link href={`/inventory/${car.id}`} className="block h-full group">
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#121214] border border-[#111111]/10 dark:border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#C8A45D] transition-all duration-500 h-full relative group shadow-xl hover:shadow-2xl">
          <div className="relative w-full md:w-[40%] h-52 sm:h-60 md:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {car.isNew && car.status !== 'Booked' && (
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-[#C8A45D] text-black text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-md z-10 shadow-lg">
                NEW ARRIVAL
              </div>
            )}
            {car.status === 'Booked' && (
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-red-500 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-md z-10 shadow-lg">
                BOOKED
              </div>
            )}
            {car.status === 'Sold' && (
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-[#111111] text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-md z-10 shadow-lg">
                SOLD
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-[#121214] hidden md:block" />
          </div>

          <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between w-full relative z-10">
            <div>
              <div className="text-[#C8A45D] font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-1 font-semibold">
                {car.year} • {car.brand}
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-medium text-[#111111] dark:text-white group-hover:text-[#C8A45D] transition-colors duration-300">
                {car.model}
              </h3>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6 text-xs text-[#111111]/70 dark:text-white/70 bg-[#111111]/5 dark:bg-black/60 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 rounded-2xl p-2.5 sm:p-4 w-full sm:w-fit">
                <div className="flex flex-col items-center px-1.5 sm:px-3">
                  <span className="font-bold text-xs sm:text-sm text-[#111111] dark:text-white">{car.mileage}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">KM</span>
                </div>
                <div className="flex flex-col items-center px-1.5 sm:px-3 border-x border-[#111111]/10 dark:border-white/10">
                  <span className="font-bold text-xs sm:text-sm text-[#111111] dark:text-white">{car.fuel}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">FUEL</span>
                </div>
                <div className="flex flex-col items-center px-1.5 sm:px-3">
                  <span className="font-bold text-xs sm:text-sm text-[#111111] dark:text-white">{car.transmission}</span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#C8A45D] mt-0.5">TRANS</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-3 mt-6 sm:mt-8 pt-3 border-t sm:border-0 border-[#111111]/5 dark:border-white/5">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#111111] dark:text-white">
                {car.price}
              </span>
              <div className="flex items-center gap-2 bg-[#C8A45D] text-black font-semibold text-xs uppercase tracking-wider px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl hover:bg-[#b8944d] transition-all min-h-[40px]">
                <span>VIEW DETAILS</span>
                <ArrowRight size={15} />
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
      <div className="relative w-full h-[450px] sm:h-[480px] md:h-[510px] bg-white dark:bg-[#121214] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#111111]/10 dark:border-white/10 hover:border-[#C8A45D] transition-all duration-500 shadow-xl flex flex-col justify-between">
        
        {/* Car Image Fill */}
        <div className="absolute inset-0 z-0">
          <Image
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          
          {/* Crisp Bottom Gradient for Text Legibility (No white shade washing out photos) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent pointer-events-none" />
        </div>
        
        {/* Top Floating Badge Bar */}
        <div className="relative z-10 p-4 sm:p-6 flex justify-between items-start w-full">
          {car.isNew && car.status !== 'Booked' ? (
            <div className="bg-[#C8A45D]/20 backdrop-blur-md border border-[#C8A45D]/40 text-[#C8A45D] dark:text-[#E0BC75] text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md shadow-lg">
              NEW ARRIVAL
            </div>
          ) : (
            <div />
          )}

          {car.status === 'Booked' && (
            <div className="bg-red-500/90 backdrop-blur-md border border-red-500/40 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md shadow-lg">
              BOOKED
            </div>
          )}
          {car.status === 'Sold' && (
            <div className="bg-[#111111]/90 backdrop-blur-md border border-[#111111]/40 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-md shadow-lg">
              SOLD
            </div>
          )}
        </div>
        
        {/* Bottom Card Content */}
        <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end">
          <div className="text-[#C8A45D] font-mono text-[11px] sm:text-xs tracking-widest uppercase mb-1 font-bold">
            {car.year} • {car.brand}
          </div>
          <h3 className="text-xl sm:text-2xl font-heading font-medium text-white mb-3 sm:mb-4 drop-shadow-md leading-snug">
            {car.model}
          </h3>
          
          {/* Specification Badge Bar (Matching Mockup 100%) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-5 text-xs text-white bg-black/60 backdrop-blur-md border border-white/15 p-2 sm:p-3 rounded-xl sm:rounded-2xl">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Gauge size={14} className="text-[#C8A45D] shrink-0 sm:w-4 sm:h-4" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white text-[11px] sm:text-xs">{car.mileage}</span>
                <span className="text-[8px] sm:text-[9px] text-white/60 uppercase font-mono">KM</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2 border-x border-white/15">
              <Droplets size={14} className="text-[#C8A45D] shrink-0 sm:w-4 sm:h-4" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white text-[11px] sm:text-xs">{car.fuel}</span>
                <span className="text-[8px] sm:text-[9px] text-white/60 uppercase font-mono">FUEL</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Sliders size={14} className="text-[#C8A45D] shrink-0 sm:w-4 sm:h-4" />
              <div className="flex flex-col text-left">
                <span className="font-bold leading-tight text-white text-[11px] sm:text-xs">{car.transmission}</span>
                <span className="text-[8px] sm:text-[9px] text-white/60 uppercase font-mono">TRANS</span>
              </div>
            </div>
          </div>
          
          {/* Price & CTA Button */}
          <div className="flex justify-between items-center pt-1">
            <span className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white drop-shadow-sm">
              {car.price}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2 bg-[#C8A45D] text-black font-semibold text-[11px] sm:text-xs uppercase tracking-wider px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl group-hover:bg-[#b8944d] transition-all shadow-md min-h-[38px]">
              <span>DETAILS</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
}
