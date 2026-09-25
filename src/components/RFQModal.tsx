'use client';

import React, { useState } from 'react';
import { X, Send, PhoneCall, CheckCircle2, ShieldCheck, Calculator, MessageSquare } from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '@/data/products';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProductName?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({
  isOpen,
  onClose,
  defaultProductName = '',
}) => {
  const [productName, setProductName] = useState(defaultProductName || PRODUCTS[0].name);
  const [quantity, setQuantity] = useState('500');
  const [unit, setUnit] = useState('Kg');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [remarks, setRemarks] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Timexo Wire (India),\n\nI am requesting a price quote for:\n- Product: ${productName}\n- Quantity: ${quantity} ${unit}\n- Company: ${company || 'N/A'}\n- Name: ${fullName}\n- Location: ${city || 'N/A'}\n\nPlease share wholesale rates per KG.`
    );
    window.open(`https://wa.me/917942545440?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-industrial-900 border border-slate-700 w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden relative my-8 text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-industrial-950">
          <div>
            <span className="text-xs uppercase bg-blue-950 text-blue-400 font-bold px-2 py-0.5 rounded border border-blue-800">
              Direct B2B Factory Quote
            </span>
            <h3 className="text-xl font-bold text-white mt-1">Request Price Quote</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-industrial-900 text-slate-400 hover:text-white border border-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Quote Request Received!</h4>
            <p className="text-sm text-slate-300">
              Thank you, <strong className="text-white">{fullName}</strong>. Our sales team at Timexo Wire (India) will call you at <strong className="text-amber-400">{phone}</strong> within 30 minutes with our best wholesale price per KG.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Reply on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-industrial-800 text-slate-300 text-xs font-semibold border border-slate-700"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs sm:text-sm">
            
            {/* Product selection */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Select Required Fastener / Wire Product</label>
              <select
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white font-medium focus:outline-none focus:border-blue-500"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name} ({p.price}/{p.unit})
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity & Unit Row */}
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-8">
                <label className="block text-slate-300 font-semibold mb-1">Quantity Required</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="col-span-4">
                <label className="block text-slate-300 font-semibold mb-1">Unit</label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Kg">Kg</option>
                  <option value="Metric Ton">Metric Ton</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Coils">Coils</option>
                </select>
              </div>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Mobile / Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Company & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Company / Firm Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sharma Structures"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Delivery City / State</label>
                <input
                  type="text"
                  placeholder="e.g. Ludhiana / Delhi"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Specific Sizes / Finishes (Optional)</label>
              <textarea
                rows={2}
                placeholder="Mention specific bolt length, thread pitch, or zinc plating requirements..."
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-industrial-950 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="w-full py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-400 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Or Chat Directly on WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
