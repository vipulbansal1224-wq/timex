'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProductCatalog } from '@/components/ProductCatalog';
import { AboutSection } from '@/components/AboutSection';
import { QualityCertifications } from '@/components/QualityCertifications';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { RFQModal } from '@/components/RFQModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqProductName, setRfqProductName] = useState('');

  const handleOpenRFQ = (productName?: string) => {
    if (productName) setRfqProductName(productName);
    else setRfqProductName('');
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Sticky Top Header & Navbar */}
      <Navbar onOpenRFQ={handleOpenRFQ} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* High-Impact Hero Banner */}
        <Hero onOpenRFQ={() => handleOpenRFQ()} />

        {/* Featured Products Catalog Section (Limited to 6 items with link to /products) */}
        <ProductCatalog
          limit={6}
          onOpenRFQ={handleOpenRFQ}
        />

        {/* 50+ Year Company Heritage & Legacy */}
        <AboutSection />

        {/* Quality Control Standards */}
        <QualityCertifications />

        {/* B2B Testimonials & Ratings */}
        <Testimonials />

        {/* Contact Info & Location */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request For Quote Modal */}
      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
        defaultProductName={rfqProductName}
      />
    </div>
  );
}
