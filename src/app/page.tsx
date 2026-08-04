"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, ChevronRight, ShieldCheck, MapPin, Gauge, Droplets, Zap, Activity, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
    <div ref={containerRef} className="flex flex-col w-full bg-[#FAF8F4] text-[#111111] overflow-x-hidden selection:bg-[#C8A45D] selection:text-white">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative w-full min-h-screen pt-32 pb-16 px-6 lg:px-12 flex flex-col justify-center items-center">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full relative z-10">
          
          {/* Hero Left (Typography) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col space-y-6 md:space-y-8 z-20"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
              <span className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase font-semibold text-[#111111]/60">
                Premium Pre-Owned Automobiles
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[6.5rem] leading-[1] font-heading font-medium tracking-tight text-[#111111]">
              Find Your Next <br />
              <span className="italic text-[#111111]/80 pr-4">Dream Machine</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#111111]/70 max-w-xl font-light leading-relaxed">
              AutoHeads curates India's finest collection of premium pre-owned vehicles, each rigorously inspected to ensure uncompromised quality, performance, and peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/inventory" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-[#111111] text-white hover:bg-[#C8A45D] px-8 py-7 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 group flex items-center justify-center gap-3 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-[#C8A45D]/20 hover:-translate-y-1">
                  Explore Inventory
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
              <Link href="/sell" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto rounded-full border border-[#111111]/10 bg-white/50 backdrop-blur-md text-[#111111] hover:border-[#111111] px-8 py-7 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  Sell Your Car
                </Button>
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 mt-8 border-t border-[#111111]/10"
            >
              {[
                { val: "500+", label: "Premium Cars" },
                { val: "98%", label: "Satisfaction" },
                { val: "150", label: "Point Inspection" },
                { val: "Available", label: "Finance Assist" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl md:text-3xl font-heading font-medium text-[#111111] mb-1">{stat.val}</div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#111111]/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Right (Floating Image) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative h-[50vh] lg:h-[85vh] min-h-[400px] w-full z-10"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border border-white/50"
            >
              <Image 
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop" 
                alt="Premium Porsche" 
                fill 
                className="object-cover scale-105"
                priority
              />
              {/* Soft Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/40 via-transparent to-transparent mix-blend-multiply" />
            </motion.div>
          </motion.div>
          
        </div>
      </section>

      {/* 2. BRAND MARQUEE */}
      <section className="py-12 border-y border-[#111111]/5 bg-white overflow-hidden relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div 
          className="flex w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {duplicatedBrands.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-12 px-12">
              <span className="text-2xl md:text-3xl font-heading font-medium text-[#111111]/30 hover:text-[#111111] transition-colors whitespace-nowrap">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]/10" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* 3. FEATURED COLLECTIONS (Horizontal Panels) */}
      <section className="py-32 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#111111]/10 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight">
              Featured <span className="italic text-[#111111]/60">Collections</span>
            </h2>
          </div>
          <Link href="/inventory" className="text-sm font-semibold uppercase tracking-widest hover:text-[#C8A45D] transition-colors flex items-center gap-2 group">
            View All Categories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[550px] w-full">
          {[
            { title: "Luxury SUVs", count: "42 Vehicles", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop" },
            { title: "Executive Sedans", count: "38 Vehicles", img: "https://images.unsplash.com/photo-1622244243685-645bd03fde62?q=80&w=800&auto=format&fit=crop" },
            { title: "Performance", count: "15 Vehicles", img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=800&auto=format&fit=crop" },
            { title: "Electric", count: "24 Vehicles", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop" },
          ].map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative flex-1 h-[250px] lg:h-full lg:hover:flex-[3] rounded-3xl overflow-hidden group cursor-pointer transition-all duration-700 ease-out"
            >
              <Image 
                src={cat.img}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 lg:opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-[#C8A45D] text-[10px] lg:text-xs font-mono font-semibold tracking-widest uppercase mb-2 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {cat.count}
                </span>
                <h3 className="text-2xl lg:text-3xl font-heading font-medium text-white mb-2 transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-all duration-500 whitespace-nowrap">
                  {cat.title}
                </h3>
                <div className="w-12 h-1 bg-white/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY AUTOHEADS (Timeline) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight mb-6">
              The AutoHeads <span className="italic text-[#111111]/60">Standard</span>
            </h2>
            <p className="text-lg text-[#111111]/60 max-w-2xl mx-auto font-light">
              We bring radical transparency, unparalleled structural integrity, and concierge-level service to the premium pre-owned automotive market.
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#111111]/10 hidden md:block" />

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
                  <div className="max-w-sm px-6 bg-[#FAF8F4] p-8 rounded-3xl border border-[#111111]/5 shadow-sm">
                    <h3 className="text-2xl font-heading font-medium mb-3">{feature.title}</h3>
                    <p className="text-[#111111]/60 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[#FAF8F4] shadow-md flex items-center justify-center z-10 shrink-0 text-[#C8A45D]">
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
              Free Evaluation
            </Button>
          </Link>
        </div>
      </section>



    </div>
  );
}
