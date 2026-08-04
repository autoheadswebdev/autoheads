"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardCheck, IndianRupee, Car, ImagePlus, CheckCircle, ShieldCheck, Banknote, Clock, Star, MapPin, ChevronDown, Shield, TrendingUp, Zap, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import PremiumUploader from "@/components/PremiumUploader";

export default function SellCarPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#D4AF37] selection:text-black overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-1.jpeg" 
            alt="Luxury Car Showcase" 
            fill 
            className="object-cover opacity-40 grayscale-[30%] contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">Premium Valuation</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] leading-[1.05] font-heading font-medium tracking-tighter mb-8 text-white">
                Sell Your Car <br />
                <span className="text-[#D4AF37] italic">With Confidence</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-silver max-w-2xl font-light leading-relaxed mb-12">
                Get the best market value for your luxury vehicle with a transparent, secure, and hassle-free concierge selling experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="rounded-none border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/10 px-8 py-6 text-xs uppercase tracking-widest font-semibold transition-colors">
                  Call Our Experts
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-white/10 pt-12">
            {[
              { icon: Shield, text: "100% Secure Process" },
              { icon: CheckCircle, text: "Free Vehicle Inspection" },
              { icon: IndianRupee, text: "Instant Best Offer" },
              { icon: FileSignature, text: "Fast Documentation" },
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + (idx * 0.1) }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-colors">
                  <badge.icon size={18} />
                </div>
                <span className="text-sm font-light tracking-wide text-brand-silver">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS (Timeline) */}
      <section className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono tracking-widest text-[#D4AF37] uppercase mb-4">The Process</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-medium text-white">How It Works</h3>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent -translate-y-1/2 z-0" />
            
            {/* Connecting Line (Mobile) */}
            <div className="md:hidden absolute top-0 left-8 w-[1px] h-full bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/30 to-transparent z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { icon: FileText, title: "Submit Details", desc: "Share your vehicle's specifications through our secure form." },
                { icon: ClipboardCheck, title: "Free Evaluation", desc: "Our certified mechanics conduct a meticulous 150-point inspection." },
                { icon: IndianRupee, title: "Get Best Offer", desc: "Receive a competitive, data-driven market valuation instantly." },
                { icon: Car, title: "Quick Payment", desc: "Seamless ownership transfer and immediate secure payment." },
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative flex flex-col items-center text-center md:text-center group"
                >
                  <div className="flex md:flex-col items-center md:items-center text-left md:text-center gap-6 md:gap-0 w-full">
                    {/* Icon/Badge */}
                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center relative mb-0 md:mb-8 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500">
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <step.icon size={24} className="text-[#D4AF37]" />
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="text-xl font-heading text-white mb-2 group-hover:text-[#D4AF37] transition-colors">{step.title}</h4>
                      <p className="text-sm font-light text-brand-silver leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "No Hidden Charges", desc: "100% transparent pricing structure." },
              { icon: Clock, title: "24-Hour Evaluation", desc: "Get an offer within a single day." },
              { icon: FileText, title: "Free Documentation", desc: "We handle all RTO transfers for you." },
              { icon: Banknote, title: "Secure Payment", desc: "Instant transfers upon verification." },
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#050505] border border-white/10 hover:border-[#D4AF37]/50 p-8 rounded-2xl flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <benefit.icon size={28} className="text-[#D4AF37] mb-6" />
                <h4 className="text-lg font-heading text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-brand-silver font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPLIT LAYOUT EVALUATION FORM */}
      <section className="py-32 bg-[#050505]" id="evaluate">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Left Panel - Imagery & Trust */}
            <div className="w-full lg:w-5/12 relative hidden md:flex flex-col justify-between p-12 overflow-hidden bg-[#050505]">
              <Image 
                src="/hero-1.jpeg" 
                alt="Luxury Car" 
                fill 
                className="object-cover opacity-30 grayscale mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-transparent" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 mb-6">
                  <TrendingUp size={12} className="text-[#D4AF37]" />
                  <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase">Highest Market Returns</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-medium text-white leading-tight mb-6">
                  Get Your Car <br />
                  <span className="text-[#D4AF37] italic">Evaluated</span>
                </h2>
                <p className="text-brand-silver font-light max-w-sm leading-relaxed">
                  Provide your vehicle's details and our experts will calculate a premium, data-driven market valuation specifically for your car.
                </p>
              </div>

              <div className="relative z-10 bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl mt-12">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="text-[#D4AF37]" size={28} />
                  <div>
                    <h4 className="text-white font-medium">Bank-Grade Security</h4>
                    <p className="text-xs text-brand-silver font-light">Your data is encrypted and strictly confidential.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Glass Form */}
            <div className="w-full lg:w-7/12 p-8 md:p-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
              
              <form className="relative z-10 space-y-12">
                
                {/* Personal Information */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1 rounded-sm">01</span>
                    <h3 className="text-xl font-heading text-white">Personal Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <input type="text" id="fullName" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Full Name" />
                      <label htmlFor="fullName" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Full Name *</label>
                    </div>
                    <div className="group relative">
                      <input type="tel" id="phone" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Mobile Number" />
                      <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Mobile Number *</label>
                    </div>
                    <div className="group relative md:col-span-2">
                      <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Email Address" />
                      <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Email Address *</label>
                    </div>
                  </div>
                </section>

                {/* Vehicle Information */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1 rounded-sm">02</span>
                    <h3 className="text-xl font-heading text-white">Vehicle Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <input type="text" id="brand" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Brand" />
                      <label htmlFor="brand" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Brand *</label>
                    </div>
                    <div className="group relative">
                      <input type="text" id="model" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Model" />
                      <label htmlFor="model" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Model *</label>
                    </div>
                    <div className="group relative">
                      <input type="text" id="vehicleNumber" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Vehicle Number" />
                      <label htmlFor="vehicleNumber" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Vehicle Number *</label>
                    </div>
                    <div className="group relative">
                      <input type="number" id="km" className="peer w-full bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Kilometers Driven" />
                      <label htmlFor="km" className="absolute left-0 -top-3.5 text-xs text-brand-silver transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D4AF37]">Kilometers Driven *</label>
                    </div>
                    
                    {/* Selects styled as borders */}
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                        <option value="" className="bg-[#0a0a0a]">Select Fuel Type *</option>
                        <option value="petrol" className="bg-[#0a0a0a]">Petrol</option>
                        <option value="diesel" className="bg-[#0a0a0a]">Diesel</option>
                        <option value="electric" className="bg-[#0a0a0a]">Electric</option>
                        <option value="hybrid" className="bg-[#0a0a0a]">Hybrid</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-4 text-white/40 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                        <option value="" className="bg-[#0a0a0a]">Select Transmission *</option>
                        <option value="auto" className="bg-[#0a0a0a]">Automatic</option>
                        <option value="manual" className="bg-[#0a0a0a]">Manual</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>
                </section>

                {/* Additional Information */}
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-[#D4AF37] border border-[#D4AF37]/30 px-2 py-1 rounded-sm">03</span>
                    <h3 className="text-xl font-heading text-white">Additional Information</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                        <option value="" className="bg-[#0a0a0a]">Ownership *</option>
                        <option value="1" className="bg-[#0a0a0a]">1st Owner</option>
                        <option value="2" className="bg-[#0a0a0a]">2nd Owner</option>
                        <option value="3" className="bg-[#0a0a0a]">3rd+ Owner</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-4 text-white/40 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                        <option value="" className="bg-[#0a0a0a]">Insurance *</option>
                        <option value="comprehensive" className="bg-[#0a0a0a]">Comprehensive</option>
                        <option value="third-party" className="bg-[#0a0a0a]">Third Party</option>
                        <option value="expired" className="bg-[#0a0a0a]">Expired</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-4 text-white/40 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-[#D4AF37] appearance-none cursor-pointer">
                        <option value="" className="bg-[#0a0a0a]">Accident History *</option>
                        <option value="none" className="bg-[#0a0a0a]">No Accidents</option>
                        <option value="minor" className="bg-[#0a0a0a]">Minor Scratches</option>
                        <option value="major" className="bg-[#0a0a0a]">Major Repair</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-0 top-4 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Premium File Upload */}
                  <div className="mt-8">
                    <label className="block text-sm text-brand-silver mb-4">Upload Vehicle Media & Documents</label>
                    <PremiumUploader />
                  </div>
                </section>

                <div className="pt-8">
                  <Button type="button" className="w-full rounded-none bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-black hover:opacity-90 py-5 text-sm uppercase tracking-widest font-semibold border-none shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] relative overflow-hidden group">
                    <span className="relative z-10">Submit for Valuation</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                  </Button>
                  <p className="text-center text-[10px] text-brand-silver mt-4 font-light tracking-wide">
                    By submitting, you agree to our strict privacy policy and terms of service.
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST STATISTICS */}
      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { num: "5,000+", label: "Vehicles Acquired" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "10+", label: "Years Excellence" },
              { num: "₹500Cr+", label: "Volume Transacted" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-medium text-white mb-2">{stat.num}</div>
                <div className="text-xs font-mono tracking-widest uppercase text-[#D4AF37]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
