"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

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
      <div className="flex flex-col md:flex-row bg-brand-white border border-brand-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto bg-brand-light-grey flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover"
          />
          {car.isNew && (
            <div className="absolute top-4 left-4 bg-brand-graphite text-brand-white text-xs px-2 py-1 rounded">
              NEW ARRIVAL
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <h3 className="text-xl font-heading font-semibold text-brand-graphite">
              {car.year} {car.brand} {car.model}
            </h3>
            <div className="flex gap-4 mt-4 text-sm text-brand-silver">
              <div className="flex flex-col">
                <span className="font-semibold text-brand-graphite">{car.mileage}</span>
                <span>km</span>
              </div>
              <div className="w-px bg-brand-border" />
              <div className="flex flex-col">
                <span className="font-semibold text-brand-graphite">{car.fuel}</span>
                <span>Fuel</span>
              </div>
              <div className="w-px bg-brand-border" />
              <div className="flex flex-col">
                <span className="font-semibold text-brand-graphite">{car.transmission}</span>
                <span>Trans</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-6">
            <span className="text-2xl font-mono font-medium text-brand-graphite">
              {car.price}
            </span>
            <Button size="sm">View Details</Button>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="flex flex-col bg-brand-white border border-brand-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative w-full h-56 bg-brand-light-grey overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {car.isNew && (
          <div className="absolute top-4 left-4 bg-brand-graphite text-brand-white text-xs px-2 py-1 rounded">
            NEW ARRIVAL
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-heading font-semibold text-brand-graphite mb-4">
          {car.year} {car.brand} {car.model}
        </h3>
        <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-brand-silver bg-brand-soft p-3 rounded-lg">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-brand-graphite">{car.mileage}</span>
            <span>km</span>
          </div>
          <div className="flex flex-col items-center border-x border-brand-border">
            <span className="font-semibold text-brand-graphite">{car.fuel}</span>
            <span>Fuel</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-brand-graphite">{car.transmission}</span>
            <span>Trans</span>
          </div>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-xl font-mono font-medium text-brand-graphite">
            {car.price}
          </span>
          <Button variant="outline" size="sm" className="text-xs px-4">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
