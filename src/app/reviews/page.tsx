'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';
import { REVIEWS_SLIDES } from '@/data/sliders';

export default function ReviewsPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const handleOpenRFQ = (productName?: string) => {
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={handleOpenRFQ} />

      <main className="flex-grow">
        {/* 4-Slide Interactive Reviews Hero Banner */}
        <HeroSlider slides={REVIEWS_SLIDES} onOpenRFQ={handleOpenRFQ} />

        {/* Testimonials Grid */}
        <div id="reviews-grid">
          <Testimonials />
        </div>
      </main>

      <Footer />

      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </div>
  );
}
