"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
  if (view === "list") {
    return (
      <Link href={`/inventory/${car.id}`} className="block h-full group">
        <div className="flex flex-col md:flex-row bg-[#111] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/30 transition-all duration-500 h-full relative group shadow-lg hover:shadow-2xl">
          <div className="relative w-full md:w-[40%] h-56 md:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {car.isNew && (
              <div className="absolute top-6 left-6 bg-white text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full z-10 shadow-lg">
                New Arrival
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111] hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:hidden" />
          </div>

          <div className="p-6 md:p-8 flex flex-col justify-between w-full relative z-10">
            <div>
              <div className="text-brand-silver font-mono text-xs tracking-widest uppercase mb-2">{car.year} • {car.brand}</div>
              <h3 className="text-2xl font-heading font-medium text-white group-hover:text-brand-silver transition-colors duration-300">
                {car.model}
              </h3>
              
              <div className="flex gap-4 md:gap-6 mt-6 text-sm text-brand-silver bg-white/5 border border-white/5 rounded-2xl p-4 w-fit">
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{car.mileage}</span>
                  <span className="text-[10px] uppercase tracking-wider mt-0.5">km</span>
                </div>
                <div className="w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{car.fuel}</span>
                  <span className="text-[10px] uppercase tracking-wider mt-0.5">Fuel</span>
                </div>
                <div className="w-px bg-white/10" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">{car.transmission}</span>
                  <span className="text-[10px] uppercase tracking-wider mt-0.5">Trans</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-end mt-8">
              <span className="text-3xl font-mono text-white">
                {car.price}
              </span>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider group-hover:gap-4 transition-all duration-300">
                <span>Details</span>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View - Edge to Edge Dark Card
  return (
    <Link href={`/inventory/${car.id}`} className="block h-full group">
      <div className="relative w-full h-[400px] md:h-[450px] bg-[#111] rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl">
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Gradients to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
        
        {car.isNew && (
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full z-10 shadow-lg">
            New Arrival
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
          <div className="text-brand-silver font-mono text-xs tracking-widest uppercase mb-1 drop-shadow-md">
            {car.year} • {car.brand}
          </div>
          <h3 className="text-2xl font-heading font-medium text-white mb-4 drop-shadow-lg leading-tight">
            {car.model}
          </h3>
          
          <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-brand-silver bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-white">{car.mileage}</span>
              <span className="text-[10px] uppercase tracking-wider mt-0.5">km</span>
            </div>
            <div className="flex flex-col items-center border-x border-white/10">
              <span className="font-semibold text-white">{car.fuel}</span>
              <span className="text-[10px] uppercase tracking-wider mt-0.5">Fuel</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-white">{car.transmission}</span>
              <span className="text-[10px] uppercase tracking-wider mt-0.5">Trans</span>
            </div>
          </div>
          
          <div className="flex justify-between items-end">
            <span className="text-2xl font-mono text-white drop-shadow-md">
              {car.price}
            </span>
            <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
              Details
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
