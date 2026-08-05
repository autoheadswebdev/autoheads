"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  ClipboardCheck, 
  IndianRupee, 
  Car, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Star, 
  Shield, 
  TrendingUp, 
  ChevronDown, 
  ArrowRight,
  Gauge,
  Users,
  Handshake,
  Lock,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import PremiumUploader from "@/components/PremiumUploader";

export default function SellCarPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#FAF8F4] dark:bg-[#111111] text-[#111111] dark:text-white min-h-screen selection:bg-[#C8A45D] selection:text-white transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (100% Reference Mockup Match) */}
      <section className="relative w-full min-h-[90vh] pt-16 md:pt-20 lg:pt-22 pb-6 px-6 lg:px-12 flex flex-col justify-between items-center overflow-hidden">
        <div className="max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 flex-grow">
          
          {/* Hero Left (Typography) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 z-20"
          >
            <div className="inline-flex items-center gap-3">
              <span className="w-6 h-[1.5px] bg-[#C8A45D]" />
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-[#111111]/60 dark:text-white/60">
                YOUR CAR. OUR EXPERTISE.
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-heading font-extrabold tracking-tight text-[#111111] dark:text-white">
              Sell Your Car. <br />
              <span className="font-serif italic font-normal text-[#C8A45D] block mt-1 tracking-normal">
                With Confidence.
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-[#111111]/70 dark:text-white/70 max-w-lg font-light leading-relaxed">
              We help you get the best value for your car through expert evaluation, verified buyers, and a seamless selling experience.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#evaluate">
                <Button className="rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 group flex items-center justify-center gap-3 shadow-xl">
                  GET FREE VALUATION
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </a>
              <a href="#evaluate">
                <Button variant="outline" className="rounded-xl border border-[#111111]/20 dark:border-white/20 bg-transparent text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300">
                  BOOK INSPECTION
                </Button>
              </a>
            </div>

            {/* Trust Micro-Row */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-[#111111]/70 dark:text-white/70 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#C8A45D]" />
                <span>No Hidden Charges</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#111111]/20 dark:bg-white/20" />
              <div className="flex items-center gap-2">
                <Lock size={15} className="text-[#C8A45D]" />
                <span>100% Secure</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#111111]/20 dark:bg-white/20" />
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#C8A45D]" />
                <span>Hassle Free Process</span>
              </div>
            </div>

          </motion.div>

          {/* Hero Right (Dark Grey SUV in Neoclassical Estate + Blend) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[420px] md:h-[580px] w-full flex items-center justify-center -mr-6 lg:-mr-12"
          >
            <div className="relative w-full h-full overflow-hidden group rounded-3xl lg:rounded-none">
              <Image 
                src="/sell-hero.png" 
                alt="Luxury SUV in Neoclassical Estate" 
                fill 
                className="object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                priority
              />
              
              {/* Soft Edge Blends */}
              <div className="absolute inset-y-0 left-0 w-28 md:w-44 bg-gradient-to-r from-[#FAF8F4] dark:from-[#111111] via-[#FAF8F4]/50 dark:via-[#111111]/50 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FAF8F4] dark:from-[#111111] to-transparent pointer-events-none z-10" />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#FAF8F4] dark:from-[#111111] to-transparent pointer-events-none z-10" />

              {/* Lower Right AH Seal Stamp */}
              <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-white/40 bg-black/20 backdrop-blur-md text-white font-heading text-xs font-bold tracking-tighter opacity-80">
                AH
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. 6-KEY BENEFITS FLOATING CARD ROW (Matching Reference Image) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-[#111111]/5 dark:border-white/10 shadow-2xl shadow-black/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#111111]/10 dark:divide-white/10">
            {[
              { icon: Gauge, title: "TRUE MARKET VALUE", desc: "Get the best price for your car based on real market insights." },
              { icon: Handshake, title: "GENUINE BUYERS", desc: "We connect your car with serious and verified buyers." },
              { icon: ShieldCheck, title: "SAFE & SECURE", desc: "A transparent process with complete safety and peace of mind." },
              { icon: FileText, title: "HASSLE-FREE PAPERWORK", desc: "We handle documentation and ownership transfer for you." },
              { icon: Clock, title: "QUICK & CONVENIENT", desc: "From evaluation to payment – a smooth and quick process." },
              { icon: IndianRupee, title: "FAST PAYMENT", desc: "Receive secure and timely payment without delays." },
            ].map((benefit, idx) => (
              <div key={idx} className={`flex flex-col items-center text-center px-4 ${idx !== 0 ? "pt-6 md:pt-0" : ""}`}>
                <div className="w-12 h-12 rounded-full bg-[#FAF8F4] dark:bg-[#111111] border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] mb-4 shadow-sm">
                  <benefit.icon size={20} />
                </div>
                <h4 className="text-xs font-bold tracking-wider uppercase font-heading text-[#111111] dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[11px] text-[#111111]/60 dark:text-white/60 leading-relaxed font-light">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 3. PROMISE & TRUST STATISTICS BAR (Matching Reference Image) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#111111]/15 dark:border-white/15 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
              <IndianRupee size={16} />
            </div>
            <div>
              <div className="text-base font-bold font-heading text-[#111111] dark:text-white">₹500Cr+</div>
              <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-wider">Vehicle Value Processed</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#111111]/15 dark:border-white/15 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
              <Users size={16} />
            </div>
            <div>
              <div className="text-base font-bold font-heading text-[#111111] dark:text-white">5,000+</div>
              <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-wider">Successful Sales</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#111111]/15 dark:border-white/15 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
              <Clock size={16} />
            </div>
            <div>
              <div className="text-base font-bold font-heading text-[#111111] dark:text-white">48 Hours</div>
              <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-wider">Average Offer Time</div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#111111]/15 dark:border-white/15 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
              <ShieldCheck size={16} />
            </div>
            <div>
              <div className="text-base font-bold font-heading text-[#111111] dark:text-white">100%</div>
              <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-wider">Secure Documentation</div>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#111111]/15 dark:border-white/15 flex items-center justify-center shrink-0 text-[#111111] dark:text-white">
              <Star size={16} />
            </div>
            <div>
              <div className="text-base font-bold font-heading text-[#111111] dark:text-white">4.9 / 5</div>
              <div className="text-[10px] text-[#111111]/60 dark:text-white/60 uppercase tracking-wider">Customer Rating</div>
            </div>
          </div>

          {/* Promise Box */}
          <div className="col-span-2 md:col-span-1 border-l-0 lg:border-l border-[#111111]/10 dark:border-white/10 pl-0 lg:pl-6">
            <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-[#C8A45D] block mb-1">
              OUR PROMISE
            </span>
            <p className="text-xs text-[#111111]/70 dark:text-white/70 font-light leading-snug">
              Fair valuation. Transparent process. Complete peace of mind.
            </p>
          </div>

        </div>
      </section>

      {/* 4. SPLIT LAYOUT EVALUATION FORM (Off-white / Dark theme) */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12" id="evaluate">
        <div className="flex flex-col lg:flex-row bg-white dark:bg-[#1A1A1A] border border-[#111111]/10 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left Panel - Imagery & Trust */}
          <div className="w-full lg:w-5/12 relative hidden md:flex flex-col justify-between p-12 overflow-hidden bg-[#FAF8F4] dark:bg-[#111111]">
            <Image 
              src="/sell-hero.png" 
              alt="Luxury Car" 
              fill 
              className="object-cover opacity-20 dark:opacity-30 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F4]/90 dark:from-[#111111]/90 via-[#FAF8F4]/70 dark:via-[#111111]/70 to-transparent" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C8A45D]/30 bg-[#C8A45D]/10 mb-6">
                <TrendingUp size={12} className="text-[#C8A45D]" />
                <span className="text-[9px] font-mono tracking-widest text-[#C8A45D] uppercase">Highest Market Returns</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#111111] dark:text-white leading-tight mb-6">
                Get Your Car <br />
                <span className="text-[#C8A45D] font-serif italic">Evaluated</span>
              </h2>
              <p className="text-[#111111]/70 dark:text-white/70 font-light max-w-sm leading-relaxed">
                Provide your vehicle's details and our experts will calculate a premium, data-driven market valuation specifically for your car.
              </p>
            </div>

            <div className="relative z-10 bg-white/60 dark:bg-[#1A1A1A]/60 backdrop-blur-md border border-[#111111]/10 dark:border-white/10 p-6 rounded-2xl mt-12">
              <div className="flex items-center gap-4 mb-2">
                <ShieldCheck className="text-[#C8A45D]" size={28} />
                <div>
                  <h4 className="text-[#111111] dark:text-white font-medium">Bank-Grade Security</h4>
                  <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light">Your data is encrypted and strictly confidential.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Evaluation Form */}
          <div className="w-full lg:w-7/12 p-8 md:p-16 relative">
            <form className="relative z-10 space-y-12">
              
              {/* Personal Information */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#C8A45D] border border-[#C8A45D]/30 px-2.5 py-1 rounded-full">01</span>
                  <h3 className="text-xl font-heading font-semibold text-[#111111] dark:text-white">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input type="text" id="fullName" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Full Name" />
                    <label htmlFor="fullName" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Full Name *</label>
                  </div>
                  <div className="group relative">
                    <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Mobile Number" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Mobile Number *</label>
                  </div>
                  <div className="group relative md:col-span-2">
                    <input type="email" id="email" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Email Address" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Email Address *</label>
                  </div>
                </div>
              </section>

              {/* Vehicle Information */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#C8A45D] border border-[#C8A45D]/30 px-2.5 py-1 rounded-full">02</span>
                  <h3 className="text-xl font-heading font-semibold text-[#111111] dark:text-white">Vehicle Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input type="text" id="brand" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Brand" />
                    <label htmlFor="brand" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Brand *</label>
                  </div>
                  <div className="group relative">
                    <input type="text" id="model" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Model" />
                    <label htmlFor="model" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Model *</label>
                  </div>
                  <div className="group relative">
                    <input type="text" id="vehicleNumber" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Vehicle Number" />
                    <label htmlFor="vehicleNumber" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Vehicle Number *</label>
                  </div>
                  <div className="group relative">
                    <input type="number" id="km" className="peer w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" placeholder="Kilometers Driven" />
                    <label htmlFor="km" className="absolute left-0 -top-3.5 text-xs text-[#111111]/60 dark:text-white/60 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#C8A45D]">Kilometers Driven *</label>
                  </div>
                  
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] appearance-none cursor-pointer">
                      <option value="" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Select Fuel Type *</option>
                      <option value="petrol" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Petrol</option>
                      <option value="diesel" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Diesel</option>
                      <option value="electric" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Electric</option>
                      <option value="hybrid" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Hybrid</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-4 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] appearance-none cursor-pointer">
                      <option value="" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Select Transmission *</option>
                      <option value="auto" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Automatic</option>
                      <option value="manual" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Manual</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-4 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
                  </div>
                </div>
              </section>

              {/* Additional Information */}
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs font-mono text-[#C8A45D] border border-[#C8A45D]/30 px-2.5 py-1 rounded-full">03</span>
                  <h3 className="text-xl font-heading font-semibold text-[#111111] dark:text-white">Additional Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] appearance-none cursor-pointer">
                      <option value="" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Ownership *</option>
                      <option value="1" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">1st Owner</option>
                      <option value="2" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">2nd Owner</option>
                      <option value="3" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">3rd+ Owner</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-4 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] appearance-none cursor-pointer">
                      <option value="" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Insurance *</option>
                      <option value="comprehensive" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Comprehensive</option>
                      <option value="third-party" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Third Party</option>
                      <option value="expired" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Expired</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-4 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
                  </div>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-[#111111]/20 dark:border-white/20 px-0 py-3 text-[#111111] dark:text-white focus:outline-none focus:border-[#C8A45D] appearance-none cursor-pointer">
                      <option value="" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Accident History *</option>
                      <option value="none" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">No Accidents</option>
                      <option value="minor" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Minor Scratches</option>
                      <option value="major" className="bg-[#FAF8F4] dark:bg-[#1A1A1A]">Major Repair</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-0 top-4 text-[#111111]/40 dark:text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Premium Media Upload */}
                <div className="mt-8">
                  <label className="block text-sm text-[#111111]/70 dark:text-white/70 mb-4 font-medium">Upload Vehicle Media & Documents</label>
                  <PremiumUploader />
                </div>
              </section>

              <div className="pt-6">
                <Button type="button" className="w-full rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 py-6 text-xs uppercase tracking-widest font-semibold transition-all shadow-xl">
                  Submit for Valuation
                </Button>
                <p className="text-center text-[10px] text-[#111111]/50 dark:text-white/50 mt-4 font-light tracking-wide">
                  By submitting, you agree to our strict privacy policy and terms of service.
                </p>
              </div>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
