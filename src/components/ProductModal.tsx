'use client';

import React from 'react';
import { X, CheckCircle2, FileText, Star, ShieldCheck, Send, Layers } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenRFQ: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOpenRFQ,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-industrial-900 border border-slate-700 w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative my-8 text-slate-200 animate-fadeIn">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-industrial-950">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
            <h3 className="text-xl font-bold text-white tracking-tight">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-industrial-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Grid Layout: Image & Overview */}
          <div className="grid md:grid-cols-12 gap-6 items-center bg-industrial-950/60 p-4 rounded-xl border border-slate-800">
            <div className="md:col-span-5 flex justify-center bg-industrial-900 p-4 rounded-xl border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-48 object-contain"
              />
            </div>
            
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-amber-400">{product.price}</span>
                <span className="text-xs text-slate-400 font-medium">per {product.unit} (Ex-Factory Ludhiana)</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{product.rating} / 5</span>
                </span>
                <span className="text-slate-400">MOQ: <strong className="text-white">{product.minOrderQuantity}</strong></span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs">
                {product.standards.map((std) => (
                  <span key={std} className="bg-blue-950 text-blue-300 border border-blue-800 px-2.5 py-0.5 rounded font-mono">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Technical & Engineering Specifications</span>
            </h4>
            
            <div className="bg-industrial-950 rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-xs text-left">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-industrial-900/60' : 'bg-industrial-950'}
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

          {/* Industrial Applications & Available Finishes */}
          <div className="grid md:grid-cols-2 gap-4">
            
            <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Primary Applications</span>
              </h5>
              <ul className="space-y-1 text-xs text-slate-400">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-industrial-950/80 p-4 rounded-xl border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold uppercase text-slate-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Available Surface Coatings</span>
              </h5>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {product.availableFinishes.map((finish) => (
                  <span key={finish} className="bg-industrial-900 text-slate-300 border border-slate-700 px-2.5 py-1 rounded">
                    {finish}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-industrial-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-industrial-900 text-slate-400 hover:text-white border border-slate-800 text-xs font-semibold"
          >
            Close Window
          </button>
          
          <button
            onClick={() => {
              onClose();
              onOpenRFQ(product.name);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Request Quote for {product.name}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
