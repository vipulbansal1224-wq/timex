'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, CheckCircle2, Award, PhoneCall } from 'lucide-react';
import { SlideItem } from '@/data/sliders';
import { COMPANY_INFO } from '@/data/products';

interface HeroSliderProps {
  slides: SlideItem[];
  onOpenRFQ?: (productName?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides, onOpenRFQ }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  const handlePrimaryClick = () => {
    if (slide.ctaPrimaryAction === 'rfq' && onOpenRFQ) {
      onOpenRFQ();
    } else if (slide.ctaPrimaryAction === 'call') {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
    } else if (slide.ctaPrimaryAction === 'contact') {
      window.location.href = '/contact';
    } else if (onOpenRFQ) {
      onOpenRFQ();
    }
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950 pt-12 pb-20 border-b border-slate-800"
    >
      {/* Background Glow & Industrial Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slide Counter & Dots Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-amber-300 text-xs font-semibold tracking-wide uppercase shadow-inner">
            <Award className="w-4 h-4 text-amber-400" />
            <span>{slide.badge}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold text-amber-400 bg-industrial-900 px-3 py-1 rounded-full border border-slate-800">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? 'w-6 bg-amber-500'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Slide Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[420px]">
          
          {/* Left Column Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left transition-all duration-500">
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              {slide.titlePrefix} <br />
              <span className="text-gradient-gold">{slide.titleHighlight}</span> <br />
              {slide.titleSuffix && <span className="text-gradient-steel">{slide.titleSuffix}</span>}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Slide Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300 pt-1 max-w-xl mx-auto lg:mx-0">
              {slide.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={handlePrimaryClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-base shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 border border-amber-300/40 flex items-center justify-center gap-2 group"
              >
                <span>{slide.ctaPrimaryText}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {slide.ctaSecondaryHref && (
                slide.ctaSecondaryHref.startsWith('tel:') ? (
                  <a
                    href={slide.ctaSecondaryHref}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2 text-slate-200"
                  >
                    <PhoneCall className="w-5 h-5 text-amber-400" />
                    <span>{slide.ctaSecondaryText}</span>
                  </a>
                ) : (
                  <Link
                    href={slide.ctaSecondaryHref}
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-white font-semibold text-base border border-slate-700 transition-all flex items-center justify-center gap-2 text-slate-200"
                  >
                    <span>{slide.ctaSecondaryText}</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                )
              )}
            </div>

          </div>

          {/* Right Column Product/Visual Box */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-white font-bold text-lg">Product Highlight</h3>
                  <p className="text-xs text-slate-400">Timexo Wire Ludhiana</p>
                </div>
                <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded-full font-mono font-medium">
                  Verified Batch
                </span>
              </div>

              <div className="bg-industrial-900 border border-slate-800 p-6 rounded-xl flex items-center justify-center min-h-[180px]">
                <img
                  src={slide.image}
                  alt={slide.titleHighlight}
                  className="max-h-44 max-w-full object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Metric Stat Box */}
              <div className="bg-industrial-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium block">Key Capability</span>
                  <span className="text-sm font-bold text-white">{slide.statLabel}</span>
                </div>
                <div className="text-2xl font-black text-amber-400">{slide.statNumber}</div>
              </div>

            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/60">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Previous Slide</span>
          </button>

          <span className="text-xs text-slate-500 font-mono">Auto-playing every 5s • Hover to pause</span>

          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-industrial-900 hover:bg-industrial-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
            aria-label="Next Slide"
          >
            <span className="hidden sm:inline">Next Slide</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
