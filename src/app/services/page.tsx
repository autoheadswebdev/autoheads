import { ArrowLeft, Headphones, Banknote, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col px-6 py-24 selection:bg-brand-silver selection:text-black">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/20 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span className="text-[10px] font-mono tracking-widest uppercase">Concierge Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
            OUR <span className="text-brand-silver italic">SERVICES</span>
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0a0a] border border-white/10 p-10 hover:bg-[#0f0f0f] transition-colors flex flex-col justify-between min-h-[350px]">
            <ShieldCheck size={32} className="text-white/50 mb-12" />
            <div>
              <h3 className="text-2xl font-heading mb-3">Vehicle Inspection</h3>
              <p className="text-sm text-brand-silver font-light leading-relaxed">Comprehensive 150-point quality check by certified mechanics.</p>
            </div>
          </div>
          
          <div className="bg-[#0a0a0a] border border-white/10 p-10 hover:bg-[#0f0f0f] transition-colors flex flex-col justify-between min-h-[350px]">
            <Banknote size={32} className="text-white/50 mb-12" />
            <div>
              <h3 className="text-2xl font-heading mb-3">Finance & Insurance</h3>
              <p className="text-sm text-brand-silver font-light leading-relaxed">Seamless loan approvals and tailored premium insurance packages.</p>
            </div>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 p-10 hover:bg-[#0f0f0f] transition-colors flex flex-col justify-between min-h-[350px]">
            <Headphones size={32} className="text-white/50 mb-12" />
            <div>
              <h3 className="text-2xl font-heading mb-3">Concierge Support</h3>
              <p className="text-sm text-brand-silver font-light leading-relaxed">Dedicated relationship managers handling paperwork and RTO transfers.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex gap-4">
          <Link href="/">
            <Button variant="outline" className="rounded-none border-white/20 hover:bg-white hover:text-black uppercase tracking-widest text-[10px] h-12 px-6">
              <ArrowLeft className="mr-2" size={14} /> Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
