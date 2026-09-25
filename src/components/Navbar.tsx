'use client';

import React, { useState } from 'react';
import { Phone, ShieldCheck, MapPin, Award, Menu, X, FileText, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

interface NavbarProps {
  onOpenRFQ: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-industrial-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl">
      {/* Top Banner Bar */}
      <div className="bg-industrial-900 border-b border-slate-800 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.location}</span>
            </span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-full font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GST Verified</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>TrustSEAL Verified • 14 Yrs</span>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <strong className="text-white">4.6/5</strong> ({COMPANY_INFO.reviewsCount} Buyer Reviews)
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:block text-slate-400">Response Rate: <strong className="text-emerald-400">{COMPANY_INFO.responseRate}</strong></span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform border border-blue-400/30">
            <span className="font-black text-xl text-white tracking-widest font-mono">TW</span>
          </div>
          <div>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
              <span>TIMEXO WIRE</span>
              <span className="text-xs uppercase bg-blue-900/60 text-blue-300 border border-blue-700 px-1.5 py-0.5 rounded">India</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Est. 1972 • Fasteners & Wires Manufacturer</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
          <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
          <a href="#quality" className="hover:text-blue-400 transition-colors">Quality Standards</a>
          <a href="#reviews" className="hover:text-blue-400 transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenRFQ()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium text-sm shadow-lg shadow-blue-600/25 transition-all border border-blue-400/30 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Get Best Quote</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-industrial-900 text-slate-300 border border-slate-800 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-industrial-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-blue-400"
          >
            Product Range
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-blue-400"
          >
            About Us
          </a>
          <a
            href="#quality"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-blue-400"
          >
            Quality Certifications
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-blue-400"
          >
            Customer Reviews
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 font-medium hover:text-blue-400"
          >
            Contact & Address
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-center shadow"
            >
              Get Bulk Price Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
