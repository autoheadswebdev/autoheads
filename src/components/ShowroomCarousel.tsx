"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
    <div className="w-full relative py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#111111]/10 dark:border-white/10 pb-8 transition-colors duration-500">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#111111] dark:text-white transition-colors duration-500">
            Featured <span className="italic text-[#111111]/60 dark:text-white/60">Collections</span>
          </h2>
        </div>
        <Link href="/inventory" className="text-[#111111] dark:text-white text-sm font-semibold uppercase tracking-widest hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors flex items-center gap-2 group">
          View All Inventory <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="w-full relative">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.1,
            releaseOnEdges: true,
          }}
          modules={[EffectCoverflow, Mousewheel]}
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
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-700 bg-[#EAEAEA] dark:bg-[#1B1B1B] ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                  style={{
                    aspectRatio: "16/9",
                  }}
                >
                  {/* Certification Badge Removed */}

                  {/* Car Image - Object Contain to show full car with padding */}
                  <div className="absolute inset-4 md:inset-8 flex items-center justify-center">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain mix-blend-darken dark:mix-blend-normal drop-shadow-2xl"
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
                    <span className="text-xs tracking-widest text-[#111111]/60 dark:text-white/60 uppercase font-heading transition-colors duration-500">{car.brand}</span>
                    <h3 className="text-2xl md:text-3xl font-heading font-medium text-[#111111] dark:text-white uppercase mt-1 transition-colors duration-500">
                      {car.model}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <span className="text-xl md:text-2xl font-body font-medium text-[#111111] dark:text-white transition-colors duration-500">
                      {car.priceText.split(" kr.")[0]} kr.
                    </span>
                    <span className="text-xs text-[#111111]/60 dark:text-white/60 transition-colors duration-500">
                      pr. md.
                    </span>
                  </div>
                  
                  <Link href={`/inventory/${car.id}`} className="mt-4 md:mt-0">
                    <Button variant="outline" className="rounded-full px-8 py-2 text-xs font-semibold uppercase tracking-wider border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#111111] transition-colors duration-300">
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
