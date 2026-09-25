'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';

export default function AboutPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={() => setRfqModalOpen(true)} />

      <main className="flex-grow">
        <div className="bg-gradient-to-b from-industrial-900 to-industrial-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase bg-amber-950 text-amber-300 border border-amber-800 px-3 py-1 rounded-full">
              Heritage Since 1972
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About Timexo Wire (India)
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Learn about our 50+ years of fastener manufacturing excellence, proprietary cold forging headers, and state-of-the-art wire drawing facilities in Ludhiana, Punjab.
            </p>
          </div>
        </div>

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
