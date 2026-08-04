"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Sell Your Car", href: "/sell" },
  ];

  const moreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-500 pointer-events-none">
        <div className={`mx-auto max-w-7xl pointer-events-auto transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full border border-white/40 py-2 px-6" 
            : "bg-transparent py-4 px-2"
        }`}>
          <div className="flex justify-between items-center h-14">
            
            <Link href="/" className="relative z-10 flex items-center gap-2 group h-full py-1">
              {/* Force constraints so the square logo doesn't overflow */}
              <div className="relative w-24 md:w-36 h-full flex items-center">
                <Image
                  src="/logo-full.jpeg"
                  alt="AutoHeads Logo"
                  fill
                  className={`mix-blend-multiply object-contain transition-all duration-500 origin-left ${isScrolled ? "scale-[1.3] md:scale-[1.5]" : "scale-[1.6] md:scale-[2]"}`}
                />
              </div>
            </Link>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#111111] hover:text-[#C8A45D] transition-colors duration-300 font-heading"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Dropdown for More */}
              <div 
                className="relative"
                onMouseEnter={() => setMoreDropdownOpen(true)}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-[#111111] hover:text-[#C8A45D] transition-colors duration-300 font-heading py-2">
                  More <ChevronDown size={14} className={`transition-transform duration-300 ${moreDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                
                <AnimatePresence>
                  {moreDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 overflow-hidden py-3 mt-4 border border-white/50"
                    >
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-6 py-2.5 text-sm font-medium text-[#2B2B2B] hover:bg-[#FAF9F6] hover:text-[#C8A45D] transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA (Right) */}
            <div className="hidden md:block">
              <Link href="/inventory">
                <Button className="bg-[#111111] hover:bg-[#C8A45D] text-white rounded-full px-6 py-5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 group flex items-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                  Explore Inventory
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[#111111] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-32 px-6 pb-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-6 flex-grow">
              {[...mainLinks, ...moreLinks].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-heading font-medium text-[#111111] hover:text-[#C8A45D] transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="pt-8 border-t border-[#E8E8E8]">
              <Link href="/inventory" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#111111] hover:bg-[#C8A45D] text-white rounded-full py-6 text-sm uppercase tracking-widest font-semibold transition-all">
                  Explore Inventory
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
