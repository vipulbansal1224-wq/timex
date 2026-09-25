'use client';

import React from 'react';
import { ShieldCheck, Award, Gauge, CheckCircle2, Layers, Binary, ShieldAlert } from 'lucide-react';

export const QualityCertifications: React.FC = () => {
  return (
    <section id="quality" className="py-20 bg-industrial-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Defect Quality Assurance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certified Quality Standards & Testing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every batch of MS Bolts, Nuts, and Wire products undergoes rigorous multi-stage physical and dimensional quality inspection before dispatch.
          </p>
        </div>

        {/* Quality Pillars Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Tensile Strength Test</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tested on hydraulic universal testing machines to guarantee proof load capacity up to Grade 8.8 specifications without fracture.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400">
              <Binary className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Pitch Gauge Accuracy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              100% thread pitch inspection using go/no-go ring gauges to ensure smooth mating with standard internal nuts.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Zinc Plating Micron Test</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Electro-galvanized coating thickness monitored (5 to 15 microns) for long term atmospheric rust protection.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-3 hover:border-blue-500/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Chemical Composition</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Spectro-analysis of raw material steel billets (SAE 1008 / SAE 1018) to verify carbon, manganese, and sulfur purity.
            </p>
          </div>

        </div>

        {/* Quality Workflow Steps */}
        <div className="bg-industrial-900/90 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-white text-center mb-8">
            Our 5-Step Manufacturing & Inspection Flow
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
            
            <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto">1</div>
              <h4 className="text-xs font-bold text-white uppercase">Steel Wire Rod Testing</h4>
              <p className="text-[11px] text-slate-400">Purity and diameter tolerance verification.</p>
            </div>

            <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto">2</div>
              <h4 className="text-xs font-bold text-white uppercase">Cold Heading Forging</h4>
              <p className="text-[11px] text-slate-400">Precision head formation under heavy die pressure.</p>
            </div>

            <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto">3</div>
              <h4 className="text-xs font-bold text-white uppercase">High-Speed Threading</h4>
              <p className="text-[11px] text-slate-400">Cold thread rolling for high fatigue endurance.</p>
            </div>

            <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center mx-auto">4</div>
              <h4 className="text-xs font-bold text-white uppercase">Surface Passivation</h4>
              <p className="text-[11px] text-slate-400">Clear zinc electroplating / HDG coating.</p>
            </div>

            <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center mx-auto">5</div>
              <h4 className="text-xs font-bold text-white uppercase">Final QC & Dispatch</h4>
              <p className="text-[11px] text-slate-400">Batch certificate generation & HDPE packing.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
