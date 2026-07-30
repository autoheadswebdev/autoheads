"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "./ui/Button";

// Dummy data for the showroom
const showroomCars = [
  {
    id: 1,
    brand: "PORSCHE",
    model: "MACAN S",
    priceText: "7.147 kr. pr. md.",
    location: "København",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop", 
    certification: "PORSCHE APPROVED",
  },
  {
    id: 2,
    brand: "PORSCHE",
    model: "TAYCAN 4",
    priceText: "10.494 kr. pr. md.",
    location: "Aarhus",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop", 
    certification: "PORSCHE APPROVED",
  },
  {
    id: 3,
    brand: "PORSCHE",
    model: "CAYENNE",
    priceText: "16.962 kr. pr. md.",
    location: "Aalborg",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop", 
    certification: "PORSCHE APPROVED",
  },
  {
    id: 4,
    brand: "PORSCHE",
    model: "911 GT3",
    priceText: "53.422 kr. pr. md.",
    location: "København",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop", 
    certification: "PORSCHE APPROVED",
  }
];

export default function ShowroomCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full relative py-12 overflow-hidden bg-brand-white">
      <div className="container mx-auto px-4 md:px-8 mb-8 flex justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-heading font-medium text-brand-graphite uppercase tracking-wide">
          SHOWROOM
        </h2>
        <Button variant="outline" className="hidden md:flex gap-2 rounded-full uppercase tracking-widest text-xs font-semibold px-6">
          BESØG SHOWROOM <ArrowRight size={16} />
        </Button>
      </div>

      <div className="w-full relative">
        <Swiper
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            1024: { slidesPerView: 2.2, spaceBetween: 50 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full !pb-12"
          grabCursor={true}
          speed={600}
        >
          {showroomCars.map((car, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={car.id} className="transition-all duration-700 ease-out">
                <div
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-700 ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.85] opacity-60"
                  }`}
                  style={{
                    backgroundColor: "var(--color-brand-light-grey)",
                    aspectRatio: "16/9",
                  }}
                >
                  {/* Certification Badge */}
                  {isActive && (
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 text-brand-graphite font-heading text-xs tracking-widest uppercase z-10">
                      {car.certification}
                    </div>
                  )}

                  {/* Car Image - Object Contain to show full car with padding */}
                  <div className="absolute inset-4 md:inset-8 flex items-center justify-center">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain mix-blend-darken drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content below card (visible mainly on active or all with transition) */}
                <div
                  className={`mt-6 flex flex-col md:flex-row justify-between items-start md:items-end transition-opacity duration-500 px-2 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs tracking-widest text-brand-silver uppercase font-heading">{car.brand}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-medium text-brand-graphite uppercase mt-1">
                      {car.model}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <span className="text-xl md:text-2xl font-body font-medium text-brand-graphite">
                      {car.priceText.split(" kr.")[0]} kr.
                    </span>
                    <span className="text-xs text-brand-silver">
                      pr. md.
                    </span>
                  </div>
                  
                  <Link href={`/inventory/${car.id}`} className="mt-4 md:mt-0">
                    <Button variant="outline" className="rounded-full px-8 py-2 text-xs font-semibold uppercase tracking-wider">
                      DETAILS
                    </Button>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
