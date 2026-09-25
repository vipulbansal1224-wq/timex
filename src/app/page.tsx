'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { ProductModal } from '@/components/ProductModal';
import { AboutSection } from '@/components/AboutSection';
import { QualityCertifications } from '@/components/QualityCertifications';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { RFQModal } from '@/components/RFQModal';
import { Footer } from '@/components/Footer';
import { Product } from '@/data/products';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProductName, setRfqProductName] = useState('');

  const handleOpenRFQ = (productName?: string) => {
    if (productName) {
      setRfqProductName(productName);
    } else {
      setRfqProductName('');
    }
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header & Navbar */}
      <Navbar onOpenRFQ={handleOpenRFQ} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* High-Impact Hero Banner */}
        <Hero onOpenRFQ={() => handleOpenRFQ()} />

        {/* Filterable Product Catalog Grid */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenRFQ={handleOpenRFQ}
        />

        {/* 50+ Year Company Heritage & Legacy */}
        <AboutSection />

        {/* Quality Standards & Process Flow */}
        <QualityCertifications />

        {/* B2B Testimonials & TrustSEAL Ratings */}
        <Testimonials />

        {/* Contact Info, Factory Location & FAQs */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Technical Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenRFQ={handleOpenRFQ}
      />

      {/* Request For Quote Modal */}
      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProductName={rfqProductName}
      />
    </div>
  );
}
