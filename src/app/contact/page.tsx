"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Phone, Mail, MapPin, MessageSquare, 
  ShieldCheck, Award, HeadphonesIcon, Clock, 
  Lock, ChevronDown, ArrowUpRight, ExternalLink,
  MessageCircle
} from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  return (
    <div className="bg-[#FAF8F4] dark:bg-[#0B0B0C] text-[#111111] dark:text-white min-h-screen selection:bg-[#C8A45D] selection:text-white transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matching Reference Mockup 100%) */}
      <section className="relative w-full min-h-[85vh] pt-16 md:pt-20 lg:pt-22 pb-12 px-6 lg:px-12 flex flex-col justify-between items-center overflow-hidden">
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
                WE'RE HERE TO HELP
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-heading font-extrabold tracking-tight text-[#111111] dark:text-white">
              DRIVEN <br />
              BY PASSION <br />
              <span className="font-serif italic font-normal text-[#111111]/30 dark:text-white/30 block mt-1 tracking-normal">
                BACKED BY TRUST
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-[#111111]/70 dark:text-white/70 max-w-lg font-light leading-relaxed">
              India's premier destination for luxury pre-owned cars, handpicked for those who expect more from every drive.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="tel:+917034226675">
                <Button className="rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 group flex items-center justify-center gap-3 shadow-xl">
                  <Phone size={15} />
                  CALL US NOW
                </Button>
              </a>
              <span className="text-xs font-mono text-[#111111]/50 dark:text-white/50 uppercase tracking-widest px-2">
                OR
              </span>
              <a href="https://wa.me/917034226675" target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full border border-[#111111]/20 dark:border-white/20 bg-transparent text-[#111111] dark:text-white hover:bg-[#111111] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] px-8 py-6 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center gap-3">
                  <FaWhatsapp size={16} className="text-[#25D366]" />
                  WHATSAPP US
                </Button>
              </a>
            </div>

          </motion.div>

          {/* Hero Right (Black Mercedes GLS + Building) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[420px] md:h-[580px] w-full flex items-center justify-center -mr-6 lg:-mr-12"
          >
            <div className="relative w-full h-full overflow-hidden group rounded-3xl lg:rounded-none">
              <Image 
                src="/contact-hero.png" 
                alt="Luxury Black Mercedes SUV Showroom" 
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

      {/* 2. SPLIT CONTACT CONSOLE (Matching Reference Mockup 100%) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Dark Card - Multiple Ways to Reach Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 bg-[#141416] text-white p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold text-[#C8A45D] block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-serif font-medium mb-8 text-white">
                Multiple Ways to Reach Us
              </h2>

              <div className="space-y-6">
                {/* Official Phone Lines */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] shrink-0 mt-1">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C8A45D] uppercase block font-semibold">DIRECT PHONE LINES</span>
                    <div className="space-y-1 mt-1">
                      <a href="tel:+917034226675" className="text-sm font-bold text-white hover:text-[#C8A45D] transition-colors block">
                        +91 7034 226675
                      </a>
                      <a href="tel:+919072226675" className="text-sm font-bold text-white hover:text-[#C8A45D] transition-colors block">
                        +91 9072 226675
                      </a>
                      <a href="tel:+919539226675" className="text-sm font-bold text-white hover:text-[#C8A45D] transition-colors block">
                        +91 9539 226675
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 mt-1">
                    <FaWhatsapp size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C8A45D] uppercase block font-semibold">WHATSAPP</span>
                    <a href="https://wa.me/917034226675" target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-[#C8A45D] transition-colors block mt-0.5">
                      +91 7034 226675
                    </a>
                    <span className="text-[11px] text-white/50 font-light block mt-1">Chat directly with our team</span>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] shrink-0 mt-1">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C8A45D] uppercase block font-semibold">EMAIL</span>
                    <a href="mailto:autoheadsautomotive@gmail.com" className="text-sm font-bold text-white hover:text-[#C8A45D] transition-colors block mt-0.5">
                      autoheadsautomotive@gmail.com
                    </a>
                    <span className="text-[11px] text-white/50 font-light block mt-1">We'll reply within 24 hours</span>
                  </div>
                </div>

                {/* Showroom Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C8A45D]/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center justify-center text-[#C8A45D] shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C8A45D] uppercase block font-semibold">SHOWROOM ADDRESS</span>
                    <p className="text-xs font-medium text-white leading-relaxed mt-0.5">
                      SH-69, Panthavoor, Changaramkulam,<br />
                      Alamkode P.O., Malappuram Dt,<br />
                      Kerala Pin : 679585
                    </p>
                    <a href="#map" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C8A45D] hover:underline mt-2">
                      <span>View on Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Dark Card - We'll Get Back to You Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-8 bg-[#141416] text-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold text-[#C8A45D] block mb-2">
                SEND US A MESSAGE
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-serif font-medium mb-8 text-white">
                We'll Get Back to You
              </h2>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C8A45D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C8A45D] transition-colors"
                  />
                </div>

                <div className="relative">
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full appearance-none bg-[#1C1C1E] border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#C8A45D] transition-colors cursor-pointer"
                  >
                    <option value="" className="bg-[#1C1C1E]">Subject</option>
                    <option value="buy" className="bg-[#1C1C1E]">Buy a Pre-Owned Car</option>
                    <option value="sell" className="bg-[#1C1C1E]">Sell / Trade Your Car</option>
                    <option value="test_drive" className="bg-[#1C1C1E]">Schedule Test Drive</option>
                    <option value="general" className="bg-[#1C1C1E]">General Inquiry</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" />
                </div>

                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#1C1C1E] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#C8A45D] transition-colors resize-none"
                  />
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#C8A45D] hover:bg-[#b8944d] text-black font-semibold uppercase tracking-[0.18em] text-xs py-5 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-center text-xs text-white/50 pt-2 font-light">
                  <Lock size={13} className="text-[#C8A45D]" />
                  <span>Your information is safe with us. We respect your privacy.</span>
                </div>

              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. 5-COLUMN PROMISE & TRUST STRIP */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#111111]/10 dark:divide-white/10">
          
          {/* Item 1 */}
          <div className="flex items-center gap-4 px-3 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#111111] dark:text-white mb-0.5">
                100% TRUSTED
              </h4>
              <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light leading-snug">
                Transparent & Secure Process
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-4 px-3 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
              <Award size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#111111] dark:text-white mb-0.5">
                BEST VALUE
              </h4>
              <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light leading-snug">
                Get the best value for your car
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-4 px-3 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
              <HeadphonesIcon size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#111111] dark:text-white mb-0.5">
                EXPERT SUPPORT
              </h4>
              <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light leading-snug">
                Our experts are here to assist you
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-4 px-3 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#111111] dark:text-white mb-0.5">
                QUICK RESPONSE
              </h4>
              <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light leading-snug">
                We respond within 24 hours
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-center gap-4 px-3 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center shrink-0">
              <Lock size={22} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider font-heading text-[#111111] dark:text-white mb-0.5">
                NO HIDDEN CHARGES
              </h4>
              <p className="text-xs text-[#111111]/60 dark:text-white/60 font-light leading-snug">
                What we quote is what you get
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SHOWROOM LOCATION & GOOGLE MAPS SECTION */}
      <section className="py-12 px-6 lg:px-12 max-w-[1600px] mx-auto w-full" id="map">
        <div className="bg-[#EFECE6] dark:bg-[#141416] rounded-3xl p-8 md:p-12 border border-[#111111]/10 dark:border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-semibold text-[#C8A45D]">
              OUR LOCATION
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-serif font-medium text-[#111111] dark:text-white">
              Visit Our Showroom
            </h2>
            <p className="text-sm text-[#111111]/70 dark:text-white/70 font-light leading-relaxed max-w-sm">
              Experience our luxury collection in person at our Panthavoor, Changaramkulam showroom.
            </p>
            <a 
              href="https://www.google.com/maps?daddr=SH-69,+Panthavoor+Palam,+Changaramkulam,+Alamcode,+Kerala+679585" 
              target="_blank" 
              rel="noreferrer"
            >
              <Button className="rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-[#333333] dark:hover:bg-gray-200 px-8 py-5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 inline-flex items-center gap-3 shadow-lg">
                GET DIRECTIONS
                <ArrowUpRight size={15} />
              </Button>
            </a>
          </div>

          {/* Right Map Canvas Column (Panthavoor, Changaramkulam) */}
          <div className="lg:col-span-8 relative h-[360px] md:h-[440px] w-full rounded-2xl overflow-hidden border border-[#111111]/10 dark:border-white/10 shadow-2xl group bg-[#111]">
            
            {/* High-Definition Luxury Map Graphic Background */}
            <Image 
              src="/showroom-map.png" 
              alt="AutoHeads Showroom Panthavoor Location Map" 
              fill 
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 dark:brightness-90"
              priority
            />
            
            {/* Soft Edge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Custom Showroom Location Pin Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none">
              <div className="bg-[#111111]/95 text-white px-5 py-2.5 rounded-2xl border border-[#C8A45D]/60 shadow-2xl flex items-center gap-3 backdrop-blur-md animate-bounce">
                <div className="w-9 h-9 rounded-full bg-[#C8A45D] text-black font-bold text-xs flex items-center justify-center font-heading shadow-md">
                  AH
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white font-heading">AutoHeads Showroom</div>
                  <div className="text-[10px] text-[#C8A45D] font-mono">SH-69, Panthavoor, Changaramkulam</div>
                </div>
              </div>
              <div className="w-3.5 h-3.5 bg-[#C8A45D] rotate-45 -mt-2 shadow-lg" />
            </div>

            {/* Bottom Floating Google Maps Direct Action Bar */}
            <div className="absolute bottom-5 right-5 left-5 z-20 flex flex-wrap justify-between items-center gap-4">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-white text-xs font-mono hidden sm:block">
                📍 10.7620° N, 75.9850° E
              </div>
              <a 
                href="https://www.google.com/maps?daddr=SH-69,+Panthavoor+Palam,+Changaramkulam,+Alamcode,+Kerala+679585" 
                target="_blank" 
                rel="noreferrer"
                className="bg-[#C8A45D] hover:bg-[#b8944d] text-black text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl backdrop-blur-md shadow-2xl transition-all flex items-center gap-2 font-heading"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink size={15} />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
