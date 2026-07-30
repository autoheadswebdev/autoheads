"use client";

import { motion } from "framer-motion";
import { FileText, ClipboardCheck, IndianRupee, Car, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function SellCarPage() {
  return (
    <div className="bg-brand-soft min-h-screen pb-24 pt-12">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-semibold text-brand-graphite mb-6"
          >
            Sell Your Car
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-silver"
          >
            Get the best value for your luxury vehicle. Fair pricing, quick process, and hassle-free paperwork.
          </motion.p>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-heading font-semibold text-brand-graphite text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "1. Submit Details", desc: "Fill out our simple evaluation form with your vehicle details." },
              { icon: ClipboardCheck, title: "2. Free Evaluation", desc: "Our experts conduct a thorough inspection of your vehicle." },
              { icon: IndianRupee, title: "3. Get Best Price", desc: "Receive a competitive offer based on market value." },
              { icon: Car, title: "4. Quick Closure", desc: "Complete paperwork and receive instant payment." },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-white border border-brand-border p-8 rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-brand-soft flex items-center justify-center text-brand-graphite mb-6">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-3">{step.title}</h3>
                <p className="text-brand-silver text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Evaluation Form */}
        <div className="max-w-4xl mx-auto bg-brand-white border border-brand-border rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="mb-10 border-b border-brand-border pb-6">
              <h2 className="text-3xl font-heading font-semibold text-brand-graphite mb-2">Vehicle Evaluation Form</h2>
              <p className="text-brand-silver">Provide accurate details for a precise valuation</p>
            </div>

            <form className="space-y-12">
              
              {/* Owner Details */}
              <section>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-6 border-l-4 border-brand-graphite pl-3">Owner Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Full Name *</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Email *</label>
                    <input type="email" placeholder="your@email.com" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Phone Number *</label>
                    <input type="tel" placeholder="+91 90000 90000" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">City *</label>
                    <input type="text" placeholder="Kolkata" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                </div>
              </section>

              {/* Vehicle Details */}
              <section>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-6 border-l-4 border-brand-graphite pl-3">Vehicle Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Brand *</label>
                    <input type="text" placeholder="e.g., Mercedes-Benz, BMW, Audi" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Model *</label>
                    <input type="text" placeholder="e.g., S-Class" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Variant</label>
                    <input type="text" placeholder="e.g., S 350d" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Manufacturing Year *</label>
                    <input type="number" placeholder="2023" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Mileage (km) *</label>
                    <input type="number" placeholder="25000" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Fuel Type *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select fuel type</option>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Transmission *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select transmission</option>
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Number of Owners *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select</option>
                      <option value="1">1st Owner</option>
                      <option value="2">2nd Owner</option>
                      <option value="3">3rd Owner or more</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Registration Number *</label>
                    <input type="text" placeholder="WB01AB1234" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver uppercase" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Expected Price (Optional)</label>
                    <input type="number" placeholder="Enter amount in ₹" className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver" />
                  </div>
                </div>
              </section>

              {/* Vehicle Condition */}
              <section>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-6 border-l-4 border-brand-graphite pl-3">Vehicle Condition</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Overall Condition *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Accident History *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select</option>
                      <option value="none">No Accidents</option>
                      <option value="minor">Minor Accidents</option>
                      <option value="major">Major Accidents</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-graphite mb-2">Service History *</label>
                    <select className="w-full appearance-none bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver">
                      <option value="">Select</option>
                      <option value="authorized">Authorized Dealer</option>
                      <option value="local">Local Workshop</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Vehicle Images */}
              <section>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-6 border-l-4 border-brand-graphite pl-3">Vehicle Images</h3>
                <p className="text-sm text-brand-silver mb-4">Upload clear photos of your vehicle (Minimum 4, maximum 12 images, exterior and interior)</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <button type="button" className="flex items-center gap-2 bg-brand-graphite text-brand-white px-6 py-3 rounded-lg font-medium hover:bg-brand-graphite/90 transition-colors">
                    <ImagePlus size={20} /> Choose Images
                  </button>
                  <span className="text-sm text-brand-silver">0 / 12 images uploaded</span>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="flex items-center gap-2 font-medium text-orange-800 mb-4">
                    <ImagePlus size={18} /> Image Guidelines:
                  </h4>
                  <ul className="list-disc list-inside text-sm text-orange-700 space-y-2">
                    <li>Include front, rear, side views of the vehicle</li>
                    <li>Take interior photos (dashboard, seats, trunk)</li>
                    <li>Capture any damage or wear clearly</li>
                    <li>Ensure good lighting for accurate evaluation</li>
                    <li>Accepted formats: JPG, PNG, WEBP (Max 5MB per image)</li>
                  </ul>
                </div>
              </section>

              {/* Additional Information */}
              <section>
                <h3 className="text-xl font-heading font-medium text-brand-graphite mb-6 border-l-4 border-brand-graphite pl-3">Additional Information</h3>
                <textarea 
                  rows={4} 
                  placeholder="Any modifications, special features, or other details..."
                  className="w-full bg-brand-soft border border-brand-border rounded-lg px-4 py-3 text-brand-graphite focus:outline-none focus:border-brand-silver resize-none"
                ></textarea>
              </section>

              {/* Submit */}
              <section className="pt-6 border-t border-brand-border">
                <label className="flex items-start gap-3 mb-8 cursor-pointer">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-brand-graphite rounded border-brand-border focus:ring-brand-graphite" />
                  <span className="text-sm text-brand-graphite">
                    I agree that AutoHeads may contact me about this car evaluation.
                  </span>
                </label>
                
                <Button className="w-full py-4 text-lg font-semibold rounded-lg">
                  Submit for Evaluation
                </Button>
                <p className="text-center text-xs text-brand-silver mt-4">
                  By submitting this form, you agree to our terms and conditions. Our team will contact you within 24 hours.
                </p>
              </section>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
