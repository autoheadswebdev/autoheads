"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Sell Your Car", href: "/sell" },
  ];

  const moreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-brand-white/90 backdrop-blur-md py-4 shadow-sm border-b border-brand-border" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2">
          <Image
            src="/logo-icon.jpeg"
            alt="AutoHeads Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="text-2xl font-heading font-semibold text-brand-graphite tracking-wide">
            AUTOHEADS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-graphite hover:text-brand-silver transition-colors duration-300 font-heading"
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
            <button className="flex items-center gap-1 text-sm font-medium text-brand-graphite hover:text-brand-silver transition-colors duration-300 font-heading py-2">
              More <ChevronDown size={16} className={`transition-transform duration-300 ${moreDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {moreDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-48 bg-brand-graphite rounded-lg shadow-xl overflow-hidden py-2 mt-2 border border-brand-gunmetal"
                >
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm font-medium text-brand-white hover:bg-brand-charcoal hover:text-brand-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/inventory">
            <Button size="sm">Explore Inventory</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 text-brand-graphite p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-white border-b border-brand-border py-6 px-4 flex flex-col gap-6 md:hidden shadow-lg"
          >
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-brand-graphite hover:text-brand-silver transition-colors duration-300 font-heading"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pl-4 border-l-2 border-brand-border">
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-brand-silver hover:text-brand-graphite transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/inventory" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Explore Inventory</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
