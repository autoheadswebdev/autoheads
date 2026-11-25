"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function ShowroomCarousel({ cars = [] }: { cars?: any[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!cars || cars.length === 0) {
    return (
      <div className="w-full relative pt-24 pb-8 overflow-hidden flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#111111] dark:text-white mb-4">
          Coming <span className="italic text-[#111111]/60 dark:text-white/60">Soon</span>
        </h2>
        <p className="text-[#111111]/60 dark:text-white/60">No vehicles are currently arriving soon. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="w-full relative pt-16 sm:pt-24 pb-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 border-b border-[#111111]/10 dark:border-white/10 pb-6 sm:pb-8 transition-colors duration-500">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium tracking-tight text-[#111111] dark:text-white transition-colors duration-500">
            Coming <span className="italic text-[#111111]/60 dark:text-white/60">Soon</span>
          </h2>
        </div>
        <Link href="/inventory" className="text-[#111111] dark:text-white text-xs sm:text-sm font-semibold uppercase tracking-widest hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors flex items-center gap-2 group py-1">
          <span>View All Inventory</span> <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="w-full relative px-2 sm:px-0">
        <Swiper
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={1.1}
          breakpoints={{
            480: { slidesPerView: 1.25 },
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.2 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1.4,
            slideShadows: false,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.1,
            releaseOnEdges: true,
          }}
          modules={[EffectCoverflow, Mousewheel]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full !pb-8 sm:!pb-12"
          grabCursor={true}
          speed={500}
        >
          {cars.map((car, index) => {
            const isActive = index === activeIndex;
            return (
              <SwiperSlide key={car.id} className="transition-all duration-500 ease-out">
                <div
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-500 bg-[#EAEAEA] dark:bg-[#1B1B1B] ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                  style={{
                    aspectRatio: "16/9",
                  }}
                >
                  {/* Car Image - Object Contain to show full car with padding */}
                  <div className="absolute inset-3 sm:inset-4 md:inset-8 flex items-center justify-center">
                    <Image
                      src={car.image}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 45vw"
                      className="object-contain mix-blend-darken dark:mix-blend-normal drop-shadow-2xl"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content below card (visible mainly on active or all with transition) */}
                <div
                  className={`mt-4 sm:mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end transition-opacity duration-500 px-2 gap-3 sm:gap-0 ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs tracking-widest text-[#111111]/60 dark:text-white/60 uppercase font-heading transition-colors duration-500">{car.brand}</span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-medium text-[#111111] dark:text-white uppercase mt-0.5 sm:mt-1 transition-colors duration-500">
                      {car.model}
                    </h3>
                  </div>
                  

                  <Link href={`/inventory/${car.id}`} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-2 text-xs font-semibold uppercase tracking-wider border-[#111111]/20 dark:border-white/20 text-[#111111] dark:text-white hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#111111] transition-colors duration-300 min-h-[40px] flex items-center justify-center">
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
