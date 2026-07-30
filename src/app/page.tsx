"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle, ShieldCheck, Banknote, FileText, Headphones } from "lucide-react";
import Link from "next/link";
import ShowroomCarousel from "@/components/ShowroomCarousel";

const heroImages = [
  "/hero-1.jpeg",
  "/hero-2.jpeg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 1000); // 1 second as requested
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full bg-brand-soft">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-brand-graphite">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={heroImages[currentImageIndex]} 
                alt="AutoHeads Premium Drive" 
                fill 
                className="object-cover opacity-60 mix-blend-overlay"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-soft via-transparent to-brand-graphite/40 z-10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold text-brand-graphite tracking-tight mb-6"
          >
            Find Your Next <br />
            Premium Drive
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-brand-silver max-w-2xl mb-10"
          >
            Premium pre-owned cars inspected and certified. Experience the luxury of choice with AutoHeads.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/inventory">
              <Button size="lg" className="w-full sm:w-auto group">
                Explore Inventory
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book Inspection
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Showroom Carousel */}
      <ShowroomCarousel />

      {/* 3. Why AutoHeads */}
      <section className="py-24 bg-brand-white border-y border-brand-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm uppercase tracking-widest text-brand-silver mb-2 font-mono">The AutoHeads Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-semibold text-brand-graphite mb-6">Why Choose Us</h3>
            <p className="text-brand-silver text-lg">We bring transparency, quality, and luxury to the pre-owned car market. Every vehicle is thoroughly inspected and certified.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Certified Cars", desc: "150-point inspection for absolute peace of mind." },
              { icon: CheckCircle, title: "Rigorous Inspection", desc: "Every car passes stringent quality and mechanical checks." },
              { icon: Banknote, title: "Finance Assistance", desc: "Seamless loan approvals with competitive interest rates." },
              { icon: ShieldCheck, title: "Insurance Support", desc: "Hassle-free insurance renewal and claims assistance." },
              { icon: FileText, title: "Clear Documentation", desc: "100% transparent paperwork and RTO transfer." },
              { icon: Headphones, title: "Premium Support", desc: "Dedicated relationship managers for a luxury experience." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-brand-soft p-8 rounded-2xl flex flex-col items-start border border-brand-border hover:border-brand-silver transition-colors shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-brand-white flex items-center justify-center mb-6 text-brand-graphite shadow-sm">
                  <feature.icon size={28} />
                </div>
                <h4 className="text-xl font-heading font-medium text-brand-graphite mb-3">{feature.title}</h4>
                <p className="text-brand-silver text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
