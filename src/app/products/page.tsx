'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ProductCatalog } from '@/components/ProductCatalog';
import { RFQModal } from '@/components/RFQModal';
import { Footer } from '@/components/Footer';

export default function ProductsPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProductName, setRfqProductName] = useState('');

  const handleOpenRFQ = (productName?: string) => {
    if (productName) setRfqProductName(productName);
    else setRfqProductName('');
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={handleOpenRFQ} />

      <main className="flex-grow">
        {/* Page Banner */}
        <div className="bg-gradient-to-b from-industrial-900 to-industrial-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase bg-amber-950 text-amber-300 border border-amber-800 px-3 py-1 rounded-full">
              Ludhiana Manufacturing Line
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Industrial Fasteners & Wire Products Catalog
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our complete range of cold-forged Mild Steel Hex Bolts, Heavy MS Nuts, HB Wire Coils, and Galvanized Fasteners. Standard and custom drawing sizes available.
            </p>
          </div>
        </div>

        {/* Full Catalog Component */}
        <ProductCatalog onOpenRFQ={handleOpenRFQ} />
      </main>

      <Footer />

      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProductName={rfqProductName}
      />
    </div>
  );
}
