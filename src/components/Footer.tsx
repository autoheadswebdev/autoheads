"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F4] dark:bg-[#111111] text-[#111111] dark:text-white pt-24 pb-12 border-t border-[#111111]/10 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Info (Left) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-6 block dark:invert transition-all">
              <div className="relative w-44 md:w-56 h-14 md:h-18 flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="AutoHeads Logo" 
                  fill 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-[#111111]/60 dark:text-white/60 text-sm leading-relaxed mb-8 max-w-sm transition-colors duration-500">
              India's finest collection of premium pre-owned luxury automobiles. Experience uncompromised quality, transparent pricing, and unparalleled customer service.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/autoheads_automotive" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111]/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-colors border border-[#111111]/10 dark:border-white/10 text-[#111111]/80 dark:text-white/80">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com/autoheadsautomotive" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111]/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors border border-[#111111]/10 dark:border-white/10 text-[#111111]/80 dark:text-white/80">
                <FaFacebook size={18} />
              </a>
              <a href="https://wa.me/917034226675" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#111111]/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors border border-[#111111]/10 dark:border-white/10 text-[#111111]/80 dark:text-white/80">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-[#111111] dark:text-white transition-colors duration-500">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/inventory" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Inventory</Link></li>
              <li><Link href="/sell" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Sell Your Car</Link></li>
              <li><Link href="/about" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-[#111111] dark:text-white transition-colors duration-500">Brands</h4>
            <ul className="space-y-4">
              <li><Link href="/inventory?brand=mercedes" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Mercedes-Benz</Link></li>
              <li><Link href="/inventory?brand=bmw" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">BMW</Link></li>
              <li><Link href="/inventory?brand=audi" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Audi</Link></li>
              <li><Link href="/inventory?brand=porsche" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Porsche</Link></li>
              <li><Link href="/inventory?brand=landrover" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">Land Rover</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-[#111111] dark:text-white transition-colors duration-500">Showroom</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-[#C8A45D] shrink-0 mt-0.5" />
                <span className="text-[#111111]/60 dark:text-white/60 text-sm leading-relaxed transition-colors duration-500">
                  SH-69, Panthavoor, Changaramkulam<br />
                  Alamkode P.O., Malappuram Dt,<br />
                  Kerala Pin : 679585
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-[#C8A45D] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#111111]/60 dark:text-white/60">
                  <a href="tel:+917034226675" className="hover:text-[#C8A45D] transition-colors">+91 7034 226675</a>
                  <span>•</span>
                  <a href="tel:+919072226675" className="hover:text-[#C8A45D] transition-colors">+91 9072 226675</a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-[#C8A45D] shrink-0" />
                <a href="mailto:autoheadsautomotive@gmail.com" className="text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] transition-colors text-sm">autoheadsautomotive@gmail.com</a>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={18} className="text-[#C8A45D] shrink-0" />
                <span className="text-[#111111]/60 dark:text-white/60 text-sm transition-colors duration-500">Mon-Sat, 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#111111]/10 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#111111]/40 dark:text-white/40 font-light transition-colors duration-500">
          <p>&copy; {new Date().getFullYear()} AutoHeads Automotive. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#111111] dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#111111] dark:hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-[#111111] dark:hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
