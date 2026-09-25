'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, PhoneCall, Award, Factory, PackageCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

interface HeroProps {
  onOpenRFQ: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRFQ }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950 pt-12 pb-20 border-b border-slate-800">
      {/* Background Glow & Industrial Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-blue-300 text-xs font-semibold tracking-wide uppercase shadow-inner">
              <Award className="w-4 h-4 text-amber-400" />
              <span>50+ Years Manufacturing Excellence in Ludhiana</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              High-Precision <br />
              <span className="text-gradient-steel">MS Bolts, Nuts</span> & <br />
              <span className="text-gradient-gold">Industrial Wires</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Timexo Wire (India) is Ludhiana’s trusted manufacturer of cold-forged Mild Steel Hex Bolts, Heavy MS Nuts, HB Wire Coils, and Galvanized Fasteners. Built to ISO/DIN precision standards with direct factory wholesale prices.
            </p>

            {/* Highlights checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300 pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cold Forged Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IS & DIN 933 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wholesale Rates (Per Kg)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1000+ Ton Monthly Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pan-India Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST & TrustSEAL Certified</span>
              </div>
            </div>

            {/* CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenRFQ}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 border border-blue-400/40 flex items-center justify-center gap-2 group"
              >
                <span>Request Wholesale Price Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2 text-slate-200"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                <span>Call Factory: {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Visual Feature Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <h3 className="text-white font-bold text-lg flex items-center gap-2">
                    <Factory className="w-5 h-5 text-blue-400" />
                    <span>Manufacturing Overview</span>
                  </h3>
                  <p className="text-xs text-slate-400">Ludhiana Facility • Est. 1972</p>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-full font-mono font-medium">
                  Verified Supplier
                </span>
              </div>

              {/* Stats Grid inside card */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-industrial-900/90 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">54+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Years Industrial Experience</div>
                </div>
                <div className="bg-industrial-900/90 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-blue-400">1000+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Tons Monthly Production</div>
                </div>
                <div className="bg-industrial-900/90 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">4.6★</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Buyer Rating (32+ Reviews)</div>
                </div>
                <div className="bg-industrial-900/90 p-4 rounded-xl border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-black text-purple-400">14 Yrs</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">IndiaMART Member</div>
                </div>
              </div>

              {/* Product preview ticker / list */}
              <div className="space-y-3 bg-industrial-950/80 p-4 rounded-xl border border-slate-800/80">
                <div className="text-xs font-semibold uppercase text-slate-400 tracking-wider flex items-center justify-between">
                  <span>Core Manufactured Line</span>
                  <PackageCheck className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-blue-950/80 text-blue-200 border border-blue-800/60 px-2.5 py-1 rounded-md">MS Hex Bolts (M6-M36)</span>
                  <span className="bg-blue-950/80 text-blue-200 border border-blue-800/60 px-2.5 py-1 rounded-md">MS Hex Nuts</span>
                  <span className="bg-amber-950/80 text-amber-200 border border-amber-800/60 px-2.5 py-1 rounded-md">Hard Bright (HB) Wire</span>
                  <span className="bg-slate-800 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-md">GI Binding Wire</span>
                  <span className="bg-slate-800 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-md">Carriage Bolts</span>
                  <span className="bg-slate-800 text-slate-200 border border-slate-700 px-2.5 py-1 rounded-md">Spring Washers</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
