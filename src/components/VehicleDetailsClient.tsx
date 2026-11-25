"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, ChevronRight, Calendar, Gauge, Fuel, 
  Settings2, MessageSquare, PhoneCall, Phone
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";

interface VehicleDetailsProps {
  car: {
    id: string;
    brand: string;
    model: string;
    year: number;
    price: string;
    emi: string;
    images: string[];
    quickStats: {
      year: number;
      mileage: string;
      fuel: string;
      transmission: string;
    };
    specs: {
      bodyType: string;
      exteriorColor: string;
      interiorColor: string;
      engine: string;
      driveType: string;
      registrationYear: string;
      roadTax: string;
    };
  };
}

export default function VehicleDetailsClient({ car }: VehicleDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const nextImage = () => {
    setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  const whatsappMessage = encodeURIComponent(
    `Hi AutoHeads, I'm interested in the ${car.year} ${car.brand} ${car.model} listed for ${car.price}. Please provide more details.`
  );

  return (
    <div className="bg-[#FAF8F4] dark:bg-[#0B0B0C] text-[#111111] dark:text-white min-h-screen pb-28 md:pb-24 transition-colors duration-500 font-sans">
      <div className="container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28">
        
        {/* Back Button */}
        <Link 
          href="/inventory" 
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#111111]/60 dark:text-white/60 hover:text-[#C8A45D] dark:hover:text-[#C8A45D] mb-6 sm:mb-8 transition-colors font-medium min-h-[44px]"
        >
          <ChevronLeft size={18} /> Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Media & Specs */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Main Photo Gallery */}
            <div className="bg-white dark:bg-[#131315] p-3 sm:p-5 rounded-2xl sm:rounded-3xl border border-[#111111]/10 dark:border-white/10 shadow-xl">
              <div 
                className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 group bg-[#EAEAEA] dark:bg-[#1B1B1B] touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {car.images.length > 0 ? (
                  <Image 
                    src={car.images[activeImage]} 
                    alt={`${car.brand} ${car.model}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-500"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#111111]/40 dark:text-white/40">No Image Available</div>
                )}
                
                {/* Navigation Arrows */}
                {car.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all shadow-lg z-10 backdrop-blur-sm"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-all shadow-lg z-10 backdrop-blur-sm"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={20} />
                    </button>
                    {/* Counter */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/70 text-white text-[11px] sm:text-xs font-mono font-medium px-3 py-1 rounded-full backdrop-blur-md">
                      {activeImage + 1} / {car.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {car.images.length > 1 && (
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 hide-scrollbar snap-x">
                  {car.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 sm:w-24 h-14 sm:h-16 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all snap-start ${
                        activeImage === idx 
                          ? 'border-[#C8A45D] opacity-100 scale-95' 
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <Image src={img} alt="thumbnail" fill sizes="100px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#111111]/50 dark:text-white/50 uppercase font-mono tracking-wider mb-0.5">Year</div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.quickStats.year || 'N/A'}</div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center">
                  <Gauge size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#111111]/50 dark:text-white/50 uppercase font-mono tracking-wider mb-0.5">Mileage</div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.quickStats.mileage || 'N/A'}</div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center">
                  <Fuel size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#111111]/50 dark:text-white/50 uppercase font-mono tracking-wider mb-0.5">Fuel</div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.quickStats.fuel || 'N/A'}</div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-2 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center">
                  <Settings2 size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-[#111111]/50 dark:text-white/50 uppercase font-mono tracking-wider mb-0.5">Transmission</div>
                  <div className="font-heading font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.quickStats.transmission || 'N/A'}</div>
                </div>
              </div>
            </div>

            {/* Specifications Card */}
            <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-[#111111] dark:text-white mb-6">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-8 lg:gap-x-12">
                
                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Body Type</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.bodyType || 'N/A'}</span>
                </div>
                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Exterior Color</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.exteriorColor || 'N/A'}</span>
                </div>
                
                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Interior Color</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.interiorColor || 'N/A'}</span>
                </div>
                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Engine</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.engine || 'N/A'}</span>
                </div>

                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Drive Type</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.driveType || 'N/A'}</span>
                </div>
                <div className="flex justify-between sm:flex-col border-b border-[#111111]/10 dark:border-white/10 pb-3">
                  <span className="text-xs sm:text-sm text-[#111111]/50 dark:text-white/50 mb-1">Registration Year</span>
                  <span className="font-semibold text-sm sm:text-base text-[#111111] dark:text-white">{car.specs.registrationYear || 'N/A'}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4" id="inquire">
            <div className="sticky top-24 space-y-6">
              
              {/* Title & Price Header */}
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C8A45D] font-bold block mb-1">
                  {car.brand}
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-[#111111] dark:text-white leading-tight mb-4">
                  {car.year} {car.model}
                </h1>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#111111] dark:text-white">
                  {car.price}
                </div>
              </div>

              {/* Lead Form */}
              <div className="bg-white dark:bg-[#131315] border border-[#111111]/10 dark:border-white/10 p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl">
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-[#111111] dark:text-white mb-5">
                  Interested in this car?
                </h3>
                
                <form className="space-y-3.5 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your name" 
                      className="w-full bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      className="w-full bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#111111]/70 dark:text-white/70 mb-1">Message</label>
                    <textarea 
                      rows={3} 
                      defaultValue={`I'm interested in the ${car.year} ${car.brand} ${car.model}...`} 
                      className="w-full bg-[#111111]/5 dark:bg-white/5 border border-[#111111]/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C8A45D] transition-colors resize-none" 
                    />
                  </div>
                  
                  <Button className="w-full py-4 text-xs font-semibold uppercase tracking-wider bg-[#C8A45D] hover:bg-[#b8944d] text-black rounded-xl flex items-center justify-center gap-2 min-h-[44px]">
                    <MessageSquare size={16} /> Send Inquiry
                  </Button>

                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <a href="tel:+917034226675" className="w-full">
                      <Button variant="outline" className="w-full text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 min-h-[44px] border-[#111111]/20 dark:border-white/20">
                        <PhoneCall size={15} /> Call
                      </Button>
                    </a>
                    <a 
                      href={`https://wa.me/917034226675?text=${whatsappMessage}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full text-xs font-semibold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 min-h-[44px] text-[#25D366] hover:text-[#128C7E] border-[#25D366]/40">
                        <FaWhatsapp size={16} /> WhatsApp
                      </Button>
                    </a>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Action Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#131315]/95 backdrop-blur-xl border-t border-[#111111]/10 dark:border-white/10 p-3 px-4 shadow-2xl flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-[#111111]/50 dark:text-white/50 uppercase font-mono block">Price</span>
          <span className="text-lg font-mono font-bold text-[#111111] dark:text-white">{car.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <a href="tel:+917034226675" className="p-3 rounded-xl bg-[#111111]/5 dark:bg-white/10 text-[#111111] dark:text-white min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Call Dealership">
            <Phone size={18} />
          </a>
          <a 
            href={`https://wa.me/917034226675?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noreferrer"
            className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] min-w-[44px] min-h-[44px] flex items-center justify-center border border-[#25D366]/30"
            aria-label="WhatsApp Dealership"
          >
            <FaWhatsapp size={18} />
          </a>
          <a href="#inquire">
            <Button className="px-5 py-3 rounded-xl bg-[#C8A45D] hover:bg-[#b8944d] text-black font-semibold text-xs uppercase tracking-wider min-h-[44px]">
              Inquire
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
