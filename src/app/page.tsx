"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronRight, ShieldCheck, MapPin, Gauge, Droplets, Zap, Activity, Clock, Car, IndianRupee, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ShowroomCarousel from "@/components/ShowroomCarousel";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) setActiveFaq(null);
    else setActiveFaq(index);
  };

  // Brands for marquee
  const brands = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Toyota", "Ford", "Suzuki", "Nissan", "Honda", "Volkswagen", "Jaguar", "Land Rover"];
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div ref={containerRef} className="flex flex-col w-full bg-[#FAF8F4] dark:bg-[#111111] text-[#111111] dark:text-white overflow-x-hidden selection:bg-[#C8A45D] selection:text-white transition-colors duration-500">
      
      {/* 1. CINEMATIC HERO (Matching Mockup 100%) */}
      <section className="relative w-full min-h-screen pt-16 md:pt-20 lg:pt-22 pb-6 px-6 lg:px-12 flex flex-col justify-between items-center overflow-hidden">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow">
          
          {/* Hero Left (Typography) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col space-y-5 md:space-y-6 z-20"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#111111] dark:bg-white" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-[#111111]/70 dark:text-white/70">
                PREMIUM PRE-OWNED AUTOMOBILES
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[4.2rem] xl:text-[4.8rem] leading-[0.95] font-heading font-extrabold tracking-tight uppercase text-[#111111] dark:text-white">
              DRIVEN <br />
              BY PASSION <br />
              <span className="text-[#111111]/30 dark:text-white/30 font-light">BACKED BY</span> <br />
              <span className="text-[#111111]/30 dark:text-white/30 font-light">TRUST</span>
            </h1>
            
            <p className="text-sm md:text-base text-[#111111]/70 dark:text-white/70 max-w-lg font-light leading-relaxed">
              India's premier destination for luxury pre-owned cars, handpicked for those who expect more from every drive.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/inventory">
                <Button className="rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 group flex items-center justify-center gap-3 shadow-xl">
                  EXPLORE INVENTORY
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
              <Link href="/sell">
                <Button variant="outline" className="rounded-full border border-[#111111]/30 dark:border-white/30 bg-transparent text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300">
                  SELL YOUR CAR
                </Button>
              </Link>
            </div>

            {/* Bottom Stat Badges with Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#111111]/10 dark:border-white/10"
            >
              {[
                { icon: Car, val: "200+", label: "Premium Cars" },
                { icon: ShieldCheck, val: "165+", label: "Quality Checks" },
                { icon: IndianRupee, val: "100%", label: "Transparent" },
                { icon: Users, val: "5000+", label: "Happy Clients" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#111111]/20 dark:border-white/20 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
                    <stat.icon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#111111] dark:text-white font-heading">{stat.val}</span>
                    <span className="text-[10px] text-[#111111]/60 dark:text-white/60 font-body leading-tight">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Right (Architectural Car Seamless Blended) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-7 relative h-[480px] md:h-[640px] w-full flex items-center justify-center -mr-6 lg:-mr-12"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <Image 
                src="/hero-bg.png" 
                alt="Luxury White BMW M5 in Architectural Arch" 
                fill 
                className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                priority
              />
              
              {/* Soft Seamless Gradient Blends */}
              <div className="absolute inset-y-0 left-0 w-32 md:w-56 bg-gradient-to-r from-[#FAF8F4] dark:from-[#111111] via-[#FAF8F4]/50 dark:via-[#111111]/50 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF8F4] dark:from-[#111111] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F4] dark:from-[#111111] to-transparent pointer-events-none z-10" />

              {/* Overlay Text Top-Right */}
              <div className="absolute top-10 right-12 text-right text-[#111111] dark:text-white pointer-events-none drop-shadow-md z-20">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase block leading-relaxed opacity-80 font-bold">
                  MORE THAN<br />A CAR.<br />A STANDARD.
                </span>
                <span className="w-8 h-[1px] bg-[#111111] dark:bg-white inline-block mt-2" />
              </div>

              {/* Slider Pagination on Far Right */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 text-[11px] font-mono text-[#111111] dark:text-white z-20">
                <span className="font-bold border-r-2 border-[#111111] dark:border-white pr-2 py-0.5">01 •</span>
                <span className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity">02</span>
                <span className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity">03</span>
                <span className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity">04</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* 2. BRAND MARQUEE BAR (Matching Dark Footer Bar in Mockup) */}
      <section className="py-6 px-6 md:px-12 bg-[#0A0A0A] text-white overflow-hidden relative flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
        <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/60 shrink-0 flex items-center gap-3">
          <span>TRUSTED BY ENTHUSIASTS</span>
          <span className="w-12 h-[1px] bg-white/30 hidden sm:inline-block" />
        </div>
        
        <motion.div 
          className="flex items-center gap-12 overflow-x-auto py-2 hide-scrollbar"
        >
          {duplicatedBrands.slice(0, 7).map((brand, idx) => (
            <span key={idx} className="text-sm font-heading font-semibold tracking-wider text-white/70 hover:text-white transition-colors whitespace-nowrap uppercase">
              {brand}
            </span>
          ))}
        </motion.div>

        <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 shrink-0 text-right hidden lg:block">
          QUALITY CARS. LASTING IMPRESSIONS.
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS (Swiping Carousel) */}
      <ShowroomCarousel />

      {/* 4. WHY AUTOHEADS (Timeline) */}
      <section className="py-32 bg-white dark:bg-[#111111] relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6 text-[#111111] dark:text-white transition-colors">
              The AutoHeads <span className="italic text-[#111111]/60 dark:text-white/60">Standard</span>
            </h2>
            <p className="text-lg text-[#111111]/60 dark:text-white/60 max-w-2xl mx-auto font-light transition-colors">
              We bring radical transparency, unparalleled structural integrity, and concierge-level service to the premium pre-owned automotive market.
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#111111]/10 dark:bg-white/10 hidden md:block" />

            {[
              { title: "150-Point Inspection", desc: "Absolute mechanical perfection guaranteed by certified experts.", icon: ShieldCheck, align: "left" },
              { title: "Transparent Pricing", desc: "No hidden fees. Just honest, market-driven valuation.", icon: Zap, align: "right" },
              { title: "Finance Assistance", desc: "Seamless loan approvals with competitive interest rates tailored to you.", icon: Activity, align: "left" },
              { title: "Documentation Support", desc: "100% transparent paperwork and seamless RTO transfer.", icon: CheckCircle, align: "right" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${feature.align === "right" ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`flex-1 flex ${feature.align === "right" ? "md:justify-start" : "md:justify-end"} text-center md:text-${feature.align === "right" ? "left" : "right"}`}>
                  <div className="max-w-sm px-6 bg-[#FAF8F4] dark:bg-[#1B1B1B] p-8 rounded-3xl border border-[#111111]/5 dark:border-white/5 shadow-sm transition-colors duration-500">
                    <h3 className="text-2xl font-heading font-medium mb-3 text-[#111111] dark:text-white transition-colors">{feature.title}</h3>
                    <p className="text-[#111111]/60 dark:text-white/60 text-sm leading-relaxed transition-colors">{feature.desc}</p>
                  </div>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#111111] border-4 border-[#FAF8F4] dark:border-[#1B1B1B] shadow-md flex items-center justify-center z-10 shrink-0 text-[#C8A45D] transition-colors duration-500">
                  <feature.icon size={24} />
                </div>
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. SELL YOUR CAR CTA (Dark Overlay) */}
      <section className="relative py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2000&auto=format&fit=crop"
            alt="Sell Your Car"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white">
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6">
            Upgrade Your <br/>
            <span className="italic text-white/70">Journey</span>
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-xl mx-auto">
            Get a premium valuation for your luxury vehicle. Experience a seamless, transparent selling process.
          </p>
          <Link href="/sell">
            <Button className="bg-[#C8A45D] text-white hover:bg-white hover:text-[#111111] rounded-full px-10 py-7 text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
              Connect Now
            </Button>
          </Link>
        </div>
      </section>



    </div>
  );
}
