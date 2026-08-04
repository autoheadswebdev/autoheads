"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { 
  MapPin, Phone, Mail, MessageCircle, 
  CheckCircle, ArrowRight, ChevronDown, Clock, 
  ShieldCheck, Zap, HeadphonesIcon, Copy
} from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) setActiveFaq(null);
    else setActiveFaq(index);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#111111] overflow-hidden selection:bg-[#C8A45D] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col space-y-8 z-10"
          >
            <div>
              <motion.span variants={fadeUp} className="text-xs font-mono tracking-widest text-[#C8A45D] uppercase font-semibold">
                Get In Touch
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-medium mt-4 mb-6 leading-tight">
                Contact Us
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#2B2B2B] text-lg md:text-xl font-light max-w-lg leading-relaxed">
                Whether you're looking to buy a premium pre-owned vehicle, schedule a test drive, sell your car, or speak with our experts, we're here to provide a seamless and professional experience.
              </motion.p>
            </div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 pt-4">
              {[
                { text: "Trusted & Secure", icon: ShieldCheck },
                { text: "Expert Support", icon: HeadphonesIcon },
                { text: "Quick Response", icon: Zap },
                { text: "Customer First", icon: CheckCircle },
              ].map((badge, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex items-center gap-3">
                  <div className="p-1.5 rounded-full border border-[#C8A45D]/40 bg-white shadow-sm">
                    <badge.icon size={16} className="text-[#C8A45D]" />
                  </div>
                  <span className="text-sm font-medium text-[#2B2B2B]">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:-mr-12 z-0"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/5"
            >
              <Image 
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=2000&auto=format&fit=crop" 
                alt="Premium Showroom"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
        
        {/* Contact Information Cards (Left Column) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col space-y-8"
        >
          <div className="bg-white rounded-3xl p-8 border border-[#E8E8E8] shadow-xl shadow-black/[0.02]">
            <h2 className="text-2xl font-heading font-medium mb-8">Get In Touch</h2>
            
            <div className="space-y-10">
              {/* Direct Lines */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4 border-b border-[#E8E8E8] pb-2">Direct Lines</h3>
                <div className="space-y-4">
                  {[
                    { label: "WhatsApp", number: "+91 7034 226675", icon: FaWhatsapp, link: "https://wa.me/917034226675", color: "text-[#25D366]" },
                    { label: "Sales", number: "+91 9072 226675", icon: Phone, link: "tel:+919072226675", color: "text-[#111111]" },
                    { label: "Service", number: "+91 9539 226675", icon: Phone, link: "tel:+919539226675", color: "text-[#111111]" },
                  ].map((contact, idx) => (
                    <div key={idx} className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-[#FAF9F6] transition-colors">
                      <a href={contact.link} className="flex items-center gap-4">
                        <div className={`p-2 rounded-full bg-white shadow-sm border border-[#E8E8E8] group-hover:border-[#C8A45D]/30 transition-colors ${contact.color}`}>
                          <contact.icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-[#2B2B2B] font-medium mb-0.5">{contact.label}</p>
                          <p className="text-sm font-semibold tracking-wide">{contact.number}</p>
                        </div>
                      </a>
                      <button 
                        onClick={() => copyToClipboard(contact.number)}
                        className="p-2 text-[#2B2B2B]/40 hover:text-[#C8A45D] transition-colors"
                        title="Copy Number"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Showroom */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4 border-b border-[#E8E8E8] pb-2">Showroom</h3>
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-full bg-white shadow-sm border border-[#E8E8E8] text-[#111111]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-[#2B2B2B] leading-relaxed mb-4">
                      SH-69, Panthavoor, Changaramkulam<br />
                      Alamkode P.O., Malappuram Dt,<br />
                      Kerala Pin : 679585
                    </p>
                    <a href="https://www.google.com/maps?daddr=SH-69,+Panthavoor+Palam,+Changaramkulam,+Alamcode,+Kerala+679585" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#111111] transition-colors group">
                      Get Directions <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Digital */}
              <div>
                <h3 className="text-sm font-semibold text-[#2B2B2B] uppercase tracking-wider mb-4 border-b border-[#E8E8E8] pb-2">Digital</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href="mailto:autoheadsautomotive@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E8E8] transition-all group">
                    <Mail size={18} className="text-[#2B2B2B] group-hover:text-[#C8A45D] transition-colors" />
                    <span className="text-sm font-medium truncate">Email</span>
                  </a>
                  <a href="https://instagram.com/autoheads_automotive" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E8E8] transition-all group">
                    <FaInstagram size={18} className="text-[#2B2B2B] group-hover:text-[#E1306C] transition-colors" />
                    <span className="text-sm font-medium truncate">Instagram</span>
                  </a>
                  <a href="https://facebook.com/autoheadsautomotive" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E8E8] transition-all group">
                    <FaFacebook size={18} className="text-[#2B2B2B] group-hover:text-[#1877F2] transition-colors" />
                    <span className="text-sm font-medium truncate">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map & Form (Right Column) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="map"
            className="w-full h-[300px] bg-white rounded-3xl border border-[#E8E8E8] shadow-xl shadow-black/[0.02] overflow-hidden relative group"
          >
            <div className="absolute top-4 left-4 z-10">
              <a 
                href="https://www.google.com/maps?daddr=SH-69,+Panthavoor+Palam,+Changaramkulam,+Alamcode,+Kerala+679585" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#E8E8E8] shadow-sm hover:bg-[#C8A45D] hover:text-white hover:border-[#C8A45D] transition-all duration-300"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
              <iframe 
                src="https://maps.google.com/maps?q=Autoheads+Automotive,+SH-69,+Panthavoor+Palam,+Changaramkulam,+Alamcode,+Kerala+679585&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full grayscale-[50%] contrast-100 opacity-90" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-[#E8E8E8] shadow-xl shadow-black/[0.02]"
          >
            <h2 className="text-2xl font-heading font-medium mb-8">Send Us A Message</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="text" id="name" placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#E8E8E8] px-0 py-3 text-[#111111] placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" />
                  <label htmlFor="name" className="absolute left-0 top-3 text-[#2B2B2B]/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C8A45D]">Full Name</label>
                </div>
                <div className="relative group">
                  <input type="email" id="email" placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#E8E8E8] px-0 py-3 text-[#111111] placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" />
                  <label htmlFor="email" className="absolute left-0 top-3 text-[#2B2B2B]/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C8A45D]">Email Address</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input type="tel" id="phone" placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#E8E8E8] px-0 py-3 text-[#111111] placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors" />
                  <label htmlFor="phone" className="absolute left-0 top-3 text-[#2B2B2B]/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C8A45D]">Phone Number</label>
                </div>
                <div className="relative group">
                  <select id="reason" defaultValue="" className="peer w-full bg-transparent border-b-2 border-[#E8E8E8] px-0 py-3 text-[#111111] focus:outline-none focus:border-[#C8A45D] transition-colors appearance-none cursor-pointer">
                    <option value="" disabled hidden></option>
                    <option value="buy">Buy a Car</option>
                    <option value="sell">Sell a Car</option>
                    <option value="finance">Finance</option>
                    <option value="insurance">Insurance</option>
                    <option value="test_drive">Test Drive</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <label htmlFor="reason" className="absolute left-0 -top-3 text-[#C8A45D] text-xs transition-all">Reason for Contact</label>
                  <ChevronDown className="absolute right-0 top-4 text-[#2B2B2B]/60 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="relative group">
                <textarea id="message" rows={4} placeholder=" " className="peer w-full bg-transparent border-b-2 border-[#E8E8E8] px-0 py-3 text-[#111111] placeholder-transparent focus:outline-none focus:border-[#C8A45D] transition-colors resize-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-[#2B2B2B]/60 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#C8A45D]">Your Message</label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-1 bg-[#111111] text-white py-4 px-8 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#C8A45D] transition-colors duration-300">
                  Send Message
                </button>
                <a href="tel:+919072226675" className="flex-1 text-center bg-white border border-[#E8E8E8] text-[#111111] py-4 px-8 rounded-full font-semibold uppercase tracking-wider text-xs hover:border-[#111111] transition-colors duration-300">
                  Call Now
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Feature Strip */}
      <section className="max-w-7xl mx-auto px-6 mt-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Working Hours", desc: "Mon-Sat, 9 AM – 7 PM", icon: Clock },
            { title: "Test Drive", desc: "Book instantly online", icon: ShieldCheck },
            { title: "Free Valuation", desc: "Get vehicle evaluation", icon: Zap },
            { title: "Customer Support", desc: "24/7 Assistance available", icon: HeadphonesIcon },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-[#E8E8E8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4 text-[#C8A45D] group-hover:scale-110 transition-transform duration-300 origin-left">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-heading font-medium text-lg mb-1">{feature.title}</h4>
              <p className="text-[#2B2B2B] text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-3xl mx-auto px-6 text-center mt-24 mb-8">
        <h2 className="text-3xl font-heading font-medium mb-4">Stay Connected</h2>
        <p className="text-[#2B2B2B] mb-8">Subscribe for the latest arrivals, luxury offers, and industry updates.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-white border border-[#E8E8E8] rounded-full px-6 py-4 focus:outline-none focus:border-[#C8A45D] transition-colors"
            required
          />
          <button type="submit" className="bg-[#C8A45D] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#b08f4c] transition-colors">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
