'use client';

import React from 'react';
import { Factory, ShieldCheck, History, Award, Wrench, Cpu, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-industrial-900 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Company Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-300 text-xs font-semibold uppercase tracking-wider">
              <History className="w-4 h-4 text-amber-400" />
              <span>50+ Years Industrial Heritage (Est. 1972)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Pioneering Metal Fasteners & Wire Manufacturing in Ludhiana
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in 1972 under the visionary leadership of <strong className="text-white">{COMPANY_INFO.proprietor}</strong>, <strong className="text-blue-400">Timexo Wire (India)</strong> has grown into one of Punjab’s most prominent manufacturers and stockists of cold forged Mild Steel Hex Bolts, Heavy Duty Nuts, Hard Bright (HB) Wire, and Industrial Fasteners.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Situated in the heart of Ludhiana’s industrial hub, our manufacturing facility operates advanced multi-station headers, high-speed thread rolling machines, and in-house wire drawing plants capable of processing over <strong className="text-white">1,000 Metric Tons</strong> of steel fasteners and wire products every month.
            </p>

            {/* Feature List Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <Factory className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm">Advanced Cold Forging</h4>
                  <p className="text-xs text-slate-400">High precision high-speed bolt headers and nut formers.</p>
                </div>
              </div>

              <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm">Automatic Thread Rolling</h4>
                  <p className="text-xs text-slate-400">Ensures accurate pitch and zero thread stripping.</p>
                </div>
              </div>

              <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm">Strict Quality Testing</h4>
                  <p className="text-xs text-slate-400">Tensile, proof load, and zinc coating thickness tests.</p>
                </div>
              </div>

              <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <Wrench className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-sm">Custom Fastener Sizes</h4>
                  <p className="text-xs text-slate-400">Manufactured according to client drawings & DIN specs.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Stats & Badges Visual Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
              
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Trust & Operational Metrics</span>
                <Award className="w-5 h-5 text-amber-400" />
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between items-center bg-industrial-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Legal Business Name</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.legalName}</span>
                </div>

                <div className="flex justify-between items-center bg-industrial-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Proprietor Name</span>
                  <span className="font-semibold text-amber-400">{COMPANY_INFO.proprietor}</span>
                </div>

                <div className="flex justify-between items-center bg-industrial-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Year of Establishment</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.establishedYear}</span>
                </div>

                <div className="flex justify-between items-center bg-industrial-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400">IndiaMART TrustSEAL</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Verified (14 Yrs)
                  </span>
                </div>

                <div className="flex justify-between items-center bg-industrial-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Monthly Processing Capacity</span>
                  <span className="font-bold text-blue-400">{COMPANY_INFO.monthlyCapacity}</span>
                </div>
              </div>

              {/* Verified Certificate Banner */}
              <div className="bg-gradient-to-r from-blue-950 to-indigo-950 p-4 rounded-xl border border-blue-800/80 text-center">
                <p className="text-xs text-blue-200 font-medium">
                  Approved supplier for heavy infrastructure, electrical towers, solar frame structures, and automotive OEM components across India.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
