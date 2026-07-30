"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Calendar, Gauge, Fuel, 
  Settings2, Info, Phone, MessageSquare, PhoneCall, ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Dummy data for the car details
const getCarDetails = (id: string) => {
  return {
    id,
    brand: "Mercedes-Benz",
    model: "E270 CDI",
    year: 2004,
    price: "₹5,95,000",
    emi: "₹10,349",
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop",
    ],
    quickStats: {
      year: 2004,
      mileage: "1,05,700 km",
      fuel: "Diesel",
      transmission: "Automatic",
    },
    specs: {
      bodyType: "Sedan",
      exteriorColor: "Silver",
      interiorColor: "Black",
      engine: "2.7L Inline-5 Diesel",
      driveType: "RWD",
      registrationYear: "2004",
      roadTax: "Lifetime",
    }
  };
};

export default function CarDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const car = getCarDetails(id);

  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    setActiveImage((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-brand-soft min-h-screen pb-24">
      <div className="container mx-auto px-4 md:px-8 pt-8">
        
        {/* Back Button */}
        <Link href="/inventory" className="inline-flex items-center gap-2 text-brand-silver hover:text-brand-graphite mb-8 transition-colors font-medium">
          <ChevronLeft size={20} /> Back to Inventory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Media & Specs */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Main Photo Gallery */}
            <div className="bg-brand-white p-4 rounded-2xl border border-brand-border shadow-sm">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group bg-brand-light-grey">
                <Image 
                  src={car.images[activeImage]} 
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-cover transition-transform duration-500"
                  priority
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-brand-graphite rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white text-brand-graphite rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Counter */}
                <div className="absolute top-4 right-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded-full backdrop-blur-md">
                  {activeImage + 1} / {car.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar snap-x">
                {car.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all snap-start ${activeImage === idx ? 'border-brand-graphite opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <Image src={img} alt="thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-soft text-brand-graphite rounded-full flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="text-xs text-brand-silver uppercase tracking-wider mb-1">Year</div>
                  <div className="font-heading font-semibold text-brand-graphite">{car.quickStats.year}</div>
                </div>
              </div>
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-soft text-brand-graphite rounded-full flex items-center justify-center">
                  <Gauge size={24} />
                </div>
                <div>
                  <div className="text-xs text-brand-silver uppercase tracking-wider mb-1">Mileage</div>
                  <div className="font-heading font-semibold text-brand-graphite">{car.quickStats.mileage}</div>
                </div>
              </div>
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-soft text-brand-graphite rounded-full flex items-center justify-center">
                  <Fuel size={24} />
                </div>
                <div>
                  <div className="text-xs text-brand-silver uppercase tracking-wider mb-1">Fuel</div>
                  <div className="font-heading font-semibold text-brand-graphite">{car.quickStats.fuel}</div>
                </div>
              </div>
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-soft text-brand-graphite rounded-full flex items-center justify-center">
                  <Settings2 size={24} />
                </div>
                <div>
                  <div className="text-xs text-brand-silver uppercase tracking-wider mb-1">Transmission</div>
                  <div className="font-heading font-semibold text-brand-graphite">{car.quickStats.transmission}</div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-brand-white border border-brand-border rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-heading font-semibold text-brand-graphite mb-6">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                
                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Body Type</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.bodyType}</span>
                </div>
                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Exterior Color</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.exteriorColor}</span>
                </div>
                
                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Interior Color</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.interiorColor}</span>
                </div>
                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Engine</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.engine}</span>
                </div>

                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Drive Type</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.driveType}</span>
                </div>
                <div className="flex flex-col border-b border-brand-border pb-3">
                  <span className="text-sm text-brand-silver mb-1">Registration Year</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.registrationYear}</span>
                </div>

                <div className="flex flex-col border-b border-brand-border pb-3 md:border-none">
                  <span className="text-sm text-brand-silver mb-1">Road Tax</span>
                  <span className="font-semibold text-brand-graphite">{car.specs.roadTax}</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Title & Price Header */}
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl shadow-sm">
                <h1 className="text-3xl font-heading font-semibold text-brand-graphite leading-tight mb-4">
                  {car.year} {car.brand} <br/> {car.model}
                </h1>
                <div className="text-4xl font-mono font-bold text-brand-graphite">
                  {car.price}
                </div>
              </div>

              {/* Lead Form */}
              <div className="bg-brand-white border border-brand-border p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-heading font-semibold text-brand-graphite mb-6">Interested in this car?</h3>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-brand-graphite mb-1">Name</label>
                    <input type="text" placeholder="Your name" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-graphite transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-graphite mb-1">Email</label>
                    <input type="email" placeholder="your@email.com" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-graphite transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-graphite mb-1">Phone</label>
                    <input type="tel" placeholder="+45 90000 90000" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-graphite transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-graphite mb-1">Message</label>
                    <textarea rows={3} defaultValue="I'm interested in this vehicle..." className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 focus:outline-none focus:border-brand-graphite transition-colors resize-none" />
                  </div>
                  
                  <Button className="w-full py-6 text-lg mt-2 flex items-center justify-center gap-2">
                    <MessageSquare size={20} /> Send Inquiry
                  </Button>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <PhoneCall size={18} /> Call Us
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 text-[#25D366] hover:text-[#128C7E] border-brand-border">
                      <Phone size={18} /> WhatsApp Us
                    </Button>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
