'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ChevronDown, Send, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export const ContactSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for MS Bolts & Nuts?',
      a: 'Our standard MOQ is 50 Kg to 100 Kg depending on bolt size. For wire coils (HB Wire), minimum order starts from 200 Kg to 500 Kg for wholesale pricing.'
    },
    {
      q: 'Do you manufacture custom fastener dimensions according to technical drawings?',
      a: 'Yes! We possess in-house die development facilities in Ludhiana to forge custom length MS bolts, special flange nuts, and carriage bolts per client blueprints.'
    },
    {
      q: 'What surface finishes are available for corrosion protection?',
      a: 'We offer Electro-Zinc Plating (Bright Yellow/Blue), Hot Dip Galvanizing (HDG) for outdoor/marine use, Black Phosphate coating, and natural self finish.'
    },
    {
      q: 'How fast can order dispatches be arranged to states outside Punjab?',
      a: 'In-stock standard Hex Bolts and HB Wires are dispatched within 24 to 48 hours via leading logistics partners to Delhi, Gujarat, Maharashtra, South India, and across all major hubs.'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-industrial-950 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Factory & Sales Office in Ludhiana</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With Our Sales Team
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Get in touch for instant price quotes per KG, bulk order dispatches, technical spec sheets, or mill test certificates.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Direct Address & Phone Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Manufacturing Address</span>
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <p className="font-bold text-white text-base">{COMPANY_INFO.name}</p>
                <p className="text-amber-400 font-medium">Proprietor: {COMPANY_INFO.proprietor}</p>
                <p className="leading-relaxed text-slate-400">{COMPANY_INFO.address}</p>
                <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GSTIN Registered & TrustSEAL Verified</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>Direct Factory Contact</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-xs">Primary Sales Line</span>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-lg font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs">Secondary Contact</span>
                  <p className="text-slate-200 font-semibold">{COMPANY_INFO.secondaryPhone}</p>
                </div>

                <div>
                  <span className="text-slate-400 block text-xs">Email Inquiry</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:underline font-medium">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Mon - Sat: 9:00 AM - 7:30 PM IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-2 rounded-2xl border border-slate-800 h-full flex flex-col min-h-[350px]">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-industrial-900 border border-slate-800 flex flex-col justify-between p-6">
                
                <div className="space-y-3 z-10">
                  <span className="bg-blue-950 text-blue-300 border border-blue-800 text-xs px-2.5 py-1 rounded font-mono font-medium">
                    Ludhiana Industrial Hub
                  </span>
                  <h4 className="text-2xl font-bold text-white">Visit Our Factory Facility</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                    Located near Gill Road Industrial Area C, Ludhiana. Conveniently connected to major freight rail and highway corridors for fast Pan-India dispatch.
                  </p>
                </div>

                {/* Map Banner simulation graphic */}
                <div className="my-6 p-6 rounded-xl bg-industrial-950 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
                    <span>Dispatch Connectivity:</span>
                    <strong className="text-emerald-400">Direct Highway & Railway Freight</strong>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-industrial-900 p-2 rounded border border-slate-800">
                      <span className="text-white font-bold block">Delhi-NCR</span>
                      <span className="text-[10px] text-slate-400">24 Hrs Transit</span>
                    </div>
                    <div className="bg-industrial-900 p-2 rounded border border-slate-800">
                      <span className="text-white font-bold block">Gujarat / MH</span>
                      <span className="text-[10px] text-slate-400">48-72 Hrs Transit</span>
                    </div>
                    <div className="bg-industrial-900 p-2 rounded border border-slate-800">
                      <span className="text-white font-bold block">South India</span>
                      <span className="text-[10px] text-slate-400">3-4 Days Transit</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=Ludhiana+Punjab+141001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow"
                  >
                    Open Google Maps Location
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold text-white text-center">
            Frequently Asked Buyer Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-industrial-900/90 rounded-xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-white text-sm sm:text-base flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
