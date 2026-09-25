'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { ProductCatalog } from '@/components/ProductCatalog';
import { RFQModal } from '@/components/RFQModal';
import { Footer } from '@/components/Footer';
import { PRODUCTS_SLIDES } from '@/data/sliders';

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
        {/* 4-Slide Interactive Products Hero Banner */}
        <HeroSlider slides={PRODUCTS_SLIDES} onOpenRFQ={handleOpenRFQ} />

        {/* Full Catalog Component */}
        <div id="catalog-grid">
          <ProductCatalog onOpenRFQ={handleOpenRFQ} />
        </div>
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
