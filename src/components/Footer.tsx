"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info (Left) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-8 block">
              <span style={{ fontFamily: 'Optima, Candara, sans-serif' }} className="text-4xl tracking-wider flex items-baseline">
                <span className="text-[#C8A45D] font-normal">Auto</span>
                <span className="text-white font-semibold">HEADs</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
              India's finest collection of premium pre-owned luxury automobiles. Experience uncompromised quality, transparent pricing, and unparalleled customer service.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/autoheads_automotive" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors border border-white/10 text-white/80">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com/autoheadsautomotive" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors border border-white/10 text-white/80">
                <FaFacebook size={18} />
              </a>
              <a href="https://wa.me/917034226675" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-white/10 text-white/80">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/inventory" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Inventory</Link></li>
              <li><Link href="/sell" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Sell Your Car</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Brands</h4>
            <ul className="space-y-4">
              <li><Link href="/inventory?brand=mercedes" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Mercedes-Benz</Link></li>
              <li><Link href="/inventory?brand=bmw" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">BMW</Link></li>
              <li><Link href="/inventory?brand=audi" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Audi</Link></li>
              <li><Link href="/inventory?brand=porsche" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Porsche</Link></li>
              <li><Link href="/inventory?brand=landrover" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">Land Rover</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-white">Showroom</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#C8A45D] shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm leading-relaxed">
                  SH-69, Panthavoor, Changaramkulam<br />
                  Alamkode P.O., Malappuram Dt,<br />
                  Kerala Pin : 679585
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#C8A45D] shrink-0" />
                <a href="tel:+919072226675" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">+91 9072 226675</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#C8A45D] shrink-0" />
                <a href="mailto:autoheadsautomotive@gmail.com" className="text-white/60 hover:text-[#C8A45D] transition-colors text-sm">autoheadsautomotive@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={18} className="text-[#C8A45D] shrink-0" />
                <span className="text-white/60 text-sm">Mon-Sat, 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Bottom */}
        <div className="border-t border-white/10 pt-12 pb-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-heading font-medium mb-2 text-white">Join the Inner Circle</h4>
            <p className="text-white/50 text-sm">Subscribe for the latest luxury arrivals and exclusive offers.</p>
          </div>
          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 max-w-md lg:max-w-none" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#C8A45D] transition-colors min-w-[280px]"
              required
            />
            <button type="submit" className="bg-[#C8A45D] text-white px-8 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#b08f4c] transition-colors flex items-center justify-center gap-2 group">
              Subscribe <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} AutoHeads Automotive. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
