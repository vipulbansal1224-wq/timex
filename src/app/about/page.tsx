'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';
import { ABOUT_SLIDES } from '@/data/sliders';

export default function AboutPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  const handleOpenRFQ = (productName?: string) => {
    setRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={handleOpenRFQ} />

      <main className="flex-grow">
        {/* 4-Slide Interactive About Hero Banner */}
        <HeroSlider slides={ABOUT_SLIDES} onOpenRFQ={handleOpenRFQ} />

        {/* Detailed About Section */}
        <AboutSection />
      </main>

      <Footer />

      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </div>
  );
}
