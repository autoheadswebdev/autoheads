import { ArrowLeft, ShieldCheck, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col px-6 py-24 selection:bg-brand-silver selection:text-black">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] font-mono tracking-widest uppercase">The AutoHeads Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
            ABOUT <span className="text-brand-silver italic">US</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#0a0a0a] border border-white/10 p-10 md:p-14 flex flex-col justify-between">
            <p className="text-brand-silver text-lg leading-relaxed font-light mb-12">
              AutoHeads was founded on a simple principle: radical transparency in the premium pre-owned automotive market. We believe that buying a luxury vehicle should be as refined an experience as driving one.
            </p>
            <div className="flex gap-4">
              <Link href="/">
                <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black uppercase tracking-widest text-[10px] h-12 px-6">
                  <ArrowLeft className="mr-2" size={14} /> Return Home
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 flex-1 flex flex-col justify-center">
              <ShieldCheck size={28} className="text-white/50 mb-6" />
              <h3 className="text-xl font-heading mb-2">Our Mission</h3>
              <p className="text-sm text-brand-silver font-light">To elevate the standard of used car sales through uncompromising quality control.</p>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 p-8 flex-1 flex flex-col justify-center">
              <Award size={28} className="text-white/50 mb-6" />
              <h3 className="text-xl font-heading mb-2">Our Promise</h3>
              <p className="text-sm text-brand-silver font-light">Every vehicle meets our rigorous 150-point inspection criteria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
