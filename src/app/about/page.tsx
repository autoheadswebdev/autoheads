"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Handshake, 
  Car, 
  Star, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF8F4] dark:bg-[#0B0B0C] text-[#111111] dark:text-white min-h-screen selection:bg-[#C8A45D] selection:text-white transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matching Reference Mockup 100%) */}
      <section className="relative w-full min-h-[85vh] pt-16 md:pt-20 lg:pt-22 pb-12 px-6 lg:px-12 flex flex-col justify-between items-center overflow-hidden">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow">
          
          {/* Hero Left (Typography & Copy) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 z-20"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C8A45D] shadow-[0_0_10px_#C8A45D]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-[#111111]/60 dark:text-white/60">
                THE AUTOHEADS STORY
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-heading font-extrabold tracking-tight text-[#111111] dark:text-white">
              ABOUT <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#C8A45D] sm:ml-4 block sm:inline tracking-normal">
                US
              </span>
            </h1>
            
            <div className="w-16 h-[2px] bg-[#C8A45D]" />

            <p className="text-sm md:text-base text-[#111111]/70 dark:text-white/70 max-w-lg font-light leading-relaxed">
              AutoHeads was founded on a simple principle: radical transparency in the premium pre-owned automotive market. We believe that buying a luxury vehicle should be as refined an experience as driving one.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link href="/inventory">
                <Button className="rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 group flex items-center justify-center gap-3 shadow-xl">
                  EXPLORE INVENTORY
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </Link>
            </div>

          </motion.div>

          {/* Hero Right (Black Mercedes SUV in Dealership) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[420px] md:h-[580px] w-full flex items-center justify-center -mr-6 lg:-mr-12"
          >
            <div className="relative w-full h-full overflow-hidden group rounded-3xl lg:rounded-none">
              <Image 
                src="/about-hero.png" 
                alt="AutoHeads Luxury Showroom & Mercedes SUV" 
                fill 
                className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                priority
              />
              
              {/* Soft Edge Blends */}
              <div className="absolute inset-y-0 left-0 w-28 md:w-44 bg-gradient-to-r from-[#FAF8F4] dark:from-[#0B0B0C] via-[#FAF8F4]/50 dark:via-[#0B0B0C]/50 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF8F4] dark:from-[#0B0B0C] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF8F4] dark:from-[#0B0B0C] to-transparent pointer-events-none z-10" />

              {/* Lower Right AH Monogram */}
              <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white font-heading text-xs font-bold tracking-tighter opacity-80">
                AH
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. SPLIT MIDDLE CARDS (4 Pillars + Stacked Mission/Promise) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Dark Card - 4 Core Pillars */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white dark:bg-[#131315] text-[#111111] dark:text-white p-8 md:p-12 rounded-3xl border border-[#111111]/10 dark:border-white/10 shadow-2xl flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#111111]/10 dark:divide-white/10">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-start pt-4 md:pt-0 pr-0 md:pr-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F4] dark:bg-white/5 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-5 shadow-sm">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase font-heading text-[#111111] dark:text-white mb-2">
                  TRANSPARENCY
                </h4>
                <p className="text-[11px] text-[#111111]/60 dark:text-white/60 leading-relaxed font-light">
                  Clear pricing, detailed history, and complete peace of mind.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-start pt-4 md:pt-0 px-0 md:px-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F4] dark:bg-white/5 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-5 shadow-sm">
                  <Award size={22} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase font-heading text-[#111111] dark:text-white mb-2">
                  QUALITY
                </h4>
                <p className="text-[11px] text-[#111111]/60 dark:text-white/60 leading-relaxed font-light">
                  Handpicked vehicles that meet our rigorous quality standards.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-start pt-4 md:pt-0 px-0 md:px-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F4] dark:bg-white/5 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-5 shadow-sm">
                  <Users size={22} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase font-heading text-[#111111] dark:text-white mb-2">
                  EXPERTISE
                </h4>
                <p className="text-[11px] text-[#111111]/60 dark:text-white/60 leading-relaxed font-light">
                  A team of automotive experts dedicated to your satisfaction.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-start pt-4 md:pt-0 pl-0 md:pl-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F4] dark:bg-white/5 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-5 shadow-sm">
                  <Handshake size={22} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase font-heading text-[#111111] dark:text-white mb-2">
                  TRUST
                </h4>
                <p className="text-[11px] text-[#111111]/60 dark:text-white/60 leading-relaxed font-light">
                  Built relationships, not just transactions. Your trust drives us.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Stacked Cards - Mission & Promise */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 01 - OUR MISSION */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white dark:bg-[#131315] text-[#111111] dark:text-white p-8 rounded-3xl border border-[#111111]/10 dark:border-white/10 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center"
            >
              <span className="font-mono text-7xl text-[#111111]/5 dark:text-white/5 font-extrabold absolute right-6 top-3 pointer-events-none">
                01
              </span>
              
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-mono text-[#C8A45D] uppercase tracking-widest font-semibold">
                  OUR MISSION
                </span>
              </div>
              
              <p className="text-xs md:text-sm text-[#111111]/70 dark:text-white/70 font-light leading-relaxed pl-14">
                To elevate the standard of used car sales through uncompromising quality control, transparent processes, and exceptional customer experience.
              </p>
            </motion.div>

            {/* Card 02 - OUR PROMISE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white dark:bg-[#131315] text-[#111111] dark:text-white p-8 rounded-3xl border border-[#111111]/10 dark:border-white/10 shadow-xl relative overflow-hidden flex-1 flex flex-col justify-center"
            >
              <span className="font-mono text-7xl text-[#111111]/5 dark:text-white/5 font-extrabold absolute right-6 top-3 pointer-events-none">
                02
              </span>

              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] shrink-0">
                  <Award size={20} />
                </div>
                <span className="text-xs font-mono text-[#C8A45D] uppercase tracking-widest font-semibold">
                  OUR PROMISE
                </span>
              </div>
              
              <p className="text-xs md:text-sm text-[#111111]/70 dark:text-white/70 font-light leading-relaxed pl-14">
                Every vehicle meets our rigorous 150-point inspection criteria so you can drive with complete confidence.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. 5-COLUMN COUNTER & STATISTICS BAR (Matching Reference Mockup 100%) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            
            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Car size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] dark:text-white">150+</div>
                <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-widest">POINT INSPECTION</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] dark:text-white">100%</div>
                <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-widest">VERIFIED VEHICLES</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Users size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] dark:text-white">5000+</div>
                <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-widest">HAPPY CUSTOMERS</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Car size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] dark:text-white">2500+</div>
                <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-widest">CARS SOLD</div>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
                <Star size={22} />
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] dark:text-white">4.9/5</div>
                <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-widest">CUSTOMER RATING</div>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}
