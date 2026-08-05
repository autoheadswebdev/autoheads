"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inventory", href: "/inventory" },
    { name: "Sell Your Car", href: "/sell" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-2 md:py-3 transition-all duration-500 pointer-events-none">
        <div 
          className={`mx-auto pointer-events-auto transition-all duration-500 ease-out ${
            isScrolled 
              ? "max-w-5xl bg-white/80 dark:bg-[#111111]/85 backdrop-blur-2xl shadow-xl shadow-black/[0.04] dark:shadow-white/[0.02] rounded-full border border-black/5 dark:border-white/10 py-1.5 px-8" 
              : "max-w-7xl bg-transparent py-1 px-2"
          }`}
        >
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* Official AutoHeads Logo */}
            <Link href="/" className="flex items-center group h-10 md:h-12 relative">
              <div className="relative w-40 md:w-52 lg:w-56 h-full flex items-center mix-blend-multiply dark:mix-blend-screen dark:invert transition-all origin-left">
                <Image 
                  src="/logo.png" 
                  alt="AutoHeads Automotive Experts" 
                  fill 
                  className="object-contain object-left" 
                  priority 
                />
              </div>
            </Link>

            {/* Desktop Minimal Navigation (Center) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-wider text-[#111111]/70 dark:text-white/70 hover:text-[#111111] dark:hover:text-white transition-colors duration-300 font-medium font-sans"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions (Right) */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Link 
                href="/inventory"
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-semibold text-[#111111] dark:text-white bg-[#111111]/5 dark:bg-white/10 hover:bg-[#111111] dark:hover:bg-white hover:text-white dark:hover:text-[#111111] px-4 py-2 rounded-full border border-[#111111]/10 dark:border-white/15 transition-all duration-300 group"
              >
                <span>Explore</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Controls */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="text-[#111111] dark:text-white p-1.5 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Ultra-Minimal Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#111111]/95 pt-28 px-8 pb-12 md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-heading font-light tracking-wide text-[#111111] dark:text-white hover:text-[#C8A45D] transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#111111]/10 dark:border-white/10 flex flex-col gap-4">
              <Link 
                href="/inventory" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-xs tracking-widest uppercase font-semibold"
              >
                Explore Collection
              </Link>
              <div className="text-[10px] font-mono tracking-widest text-[#111111]/40 dark:text-white/40 text-center uppercase">
                AutoHeads • Luxury Automobiles
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
