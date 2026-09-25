'use client';

import React from 'react';
import { Star, ShieldCheck, Quote, ThumbsUp, Building2, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: 1,
      author: 'Rajesh Kumar Sharma',
      company: 'Apex Infrastructure Pvt. Ltd.',
      location: 'New Delhi',
      rating: 5,
      date: 'Aug 2024',
      productPurchased: '20mm MS Hex Bolt & Nuts (5 Ton)',
      comment: 'We sourced 5 Metric Tons of M20 Hex Bolts for a solar mounting project. Threads were clean, zinc coating was uniform, and delivery from Ludhiana reached Delhi within 48 hours. Excellent price per KG.'
    },
    {
      id: 2,
      author: 'Harpreet Singh Gill',
      company: 'Gill Fabricators & Tower Erectors',
      location: 'Jalandhar, Punjab',
      rating: 5,
      date: 'Jun 2024',
      productPurchased: 'HB Wires & Carriage Bolts',
      comment: 'Timexo Wire has been our primary fastener supplier for over 8 years. Gautam ji and his team maintain top material quality. HB wires have consistent hardness and zero breakage during drawing.'
    },
    {
      id: 3,
      author: 'Venkatesh Murthy',
      company: 'Deccan Electrical Panel Co.',
      location: 'Hyderabad, Telangana',
      rating: 4,
      date: 'Dec 2024',
      productPurchased: '10mm MS Hex Bolts & Flange Nuts',
      comment: 'Direct factory rates are very competitive compared to local dealers. Tapping precision on MS Nuts is very accurate. Will order next batch soon.'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-industrial-900 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>4.6/5 Rated by 32+ Industrial Buyers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Builders & Industrial Contractors
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified B2B feedback from IndiaMART buyers across India who rely on our MS bolts, nuts, and industrial wire products.
          </p>
        </div>

        {/* Overall Rating Callout */}
        <div className="bg-industrial-950 p-6 rounded-2xl border border-slate-800 mb-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex flex-col items-center justify-center text-white shadow-xl shadow-amber-500/20 shrink-0">
              <span className="text-3xl font-black">{COMPANY_INFO.rating}</span>
              <span className="text-[10px] uppercase font-bold tracking-widest">Out of 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h4 className="text-white font-bold text-base">Verified Seller Rating</h4>
              <p className="text-xs text-slate-400">Based on 32 verified buyer reviews on IndiaMART</p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-8 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Payment Protected</span>
              </span>
              <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
                <ThumbsUp className="w-4 h-4" />
                <span>83% Response Rate</span>
              </span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-amber-500/40 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-4 space-y-1">
                <h4 className="text-sm font-bold text-white">{rev.author}</h4>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Building2 className="w-3 h-3 text-blue-400" />
                  <span>{rev.company}</span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  <span>{rev.location}</span>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] bg-blue-950 text-blue-300 border border-blue-900 px-2 py-0.5 rounded font-mono">
                    Bought: {rev.productPurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
