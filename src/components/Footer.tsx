'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-industrial-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-800 flex items-center justify-center font-mono text-black font-black text-xl shadow-lg border border-amber-400/40">
                TW
              </div>
              <div>
                <span className="text-lg font-bold text-white block">TIMEXO WIRE (INDIA)</span>
                <span className="text-xs text-slate-400">Mild Steel Fasteners & Wire Manufacturers</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Established in 1972, Timexo Wire (India) is a premier manufacturer and supplier of cold forged MS Hex Bolts, Heavy MS Nuts, HB Wire Coils, and Galvanized Fasteners based in Ludhiana, Punjab.
            </p>

            <div className="flex items-center gap-3 text-xs pt-1">
              <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                <ShieldCheck className="w-3.5 h-3.5" /> GST Verified
              </span>
              <span className="flex items-center gap-1 text-amber-400 bg-amber-950/80 border border-amber-800 px-2 py-0.5 rounded">
                <Award className="w-3.5 h-3.5" /> TrustSEAL 14 Yrs
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Products Catalog</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">Company Overview</Link></li>
              <li><Link href="/quality" className="hover:text-amber-400 transition-colors">Quality Standards</Link></li>
              <li><Link href="/reviews" className="hover:text-amber-400 transition-colors">Buyer Ratings & Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Factory</Link></li>
            </ul>
          </div>

          {/* Core Products */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product Categories</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Mild Steel Hex Bolts</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Heavy MS Hex Nuts</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Carriage Cup Head Bolts</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">HB Wire Coils (Hard Bright)</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Galvanized Binding Wire</Link></li>
              <li><Link href="/products" className="hover:text-amber-400 transition-colors">Plain & Spring Washers</Link></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Ludhiana Office</h4>
            <div className="space-y-2 text-xs">
              <p className="text-slate-300 font-semibold">{COMPANY_INFO.name}</p>
              <p className="text-slate-400">{COMPANY_INFO.location} - 141001</p>
              <p className="text-amber-400 font-bold">{COMPANY_INFO.phone}</p>
              <p className="text-slate-400">{COMPANY_INFO.email}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Timexo Wire (India). All Rights Reserved. Manufactured in Ludhiana, Punjab.</p>

          <div className="flex items-center gap-4">
            <span>GST & DIN Standard Compliant</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="p-2 rounded-lg bg-industrial-900 hover:bg-industrial-800 text-slate-300 border border-slate-700 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
