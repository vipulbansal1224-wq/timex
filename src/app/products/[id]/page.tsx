'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';
import { PRODUCTS } from '@/data/products';
import { Star, FileText, CheckCircle2, Layers, Send, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const productId = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col justify-between">
        <Navbar />
        <div className="text-center py-20 px-4">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-slate-400 text-sm mb-6">The product specified in the URL does not exist in our catalog.</p>
          <Link href="/products" className="px-6 py-2.5 bg-amber-500 text-black font-bold text-sm rounded-xl">
            Back to Products Catalog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={() => setRfqModalOpen(true)} />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>

        {/* Product Detail Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Image & Key Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-industrial-900 border border-slate-800 p-8 rounded-2xl flex items-center justify-center min-h-[320px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-64 object-contain"
              />
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Rating & Reviews</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold text-xs bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating} / 5 ({product.reviewsCount} reviews)</span>
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
                <span className="text-slate-400">Minimum Order Quantity</span>
                <span className="font-bold text-white">{product.minOrderQuantity}</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs">
                <span className="text-slate-400">Compliance & Certifications</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>IS & DIN Certified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Specifications & Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase bg-amber-950 text-amber-300 border border-amber-800 px-3 py-0.5 rounded">
                Category: {product.category.toUpperCase()}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {product.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                {product.description}
              </p>
            </div>

            {/* Price Banner */}
            <div className="bg-industrial-900/90 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-medium block">Wholesale Rate (Ex-Factory Ludhiana)</span>
                <div className="text-3xl font-black text-amber-400">
                  {product.price} <span className="text-xs text-slate-300 font-normal">/ {product.unit}</span>
                </div>
              </div>
              <button
                onClick={() => setRfqModalOpen(true)}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Get Price Quote</span>
              </button>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span>Engineering & Manufacturing Specifications</span>
              </h3>

              <div className="bg-industrial-900 rounded-xl border border-slate-800 overflow-hidden">
                <table className="w-full text-xs sm:text-sm text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? 'bg-industrial-950/60' : 'bg-industrial-900'}
                      >
                        <td className="px-4 py-3 font-semibold text-slate-400 border-r border-slate-800/80 w-1/3">
                          {key}
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-200">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Applications & Surface Finishes */}
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-industrial-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Primary Applications</span>
                </h4>
                <ul className="space-y-1 text-xs text-slate-400">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-industrial-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Available Coatings & Finishes</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {product.availableFinishes.map((finish) => (
                    <span key={finish} className="bg-industrial-950 text-slate-300 border border-slate-700 px-2.5 py-1 rounded">
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </main>

      <Footer />

      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProductName={product.name}
      />
    </div>
  );
}
