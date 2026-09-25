'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';

export default function ReviewsPage() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-industrial-950 text-slate-100 flex flex-col font-sans">
      <Navbar onOpenRFQ={() => setRfqModalOpen(true)} />

      <main className="flex-grow">
        <div className="bg-gradient-to-b from-industrial-900 to-industrial-950 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase bg-amber-950 text-amber-400 border border-amber-800 px-3 py-1 rounded-full">
              Verified Buyer Ratings
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Customer Reviews & Feedback
            </h1>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
              Read real feedback from infrastructure builders, solar frame fabricators, and machinery OEMs who trust Timexo Wire (India) for bulk fasteners.
            </p>
          </div>
        </div>

        <Testimonials />
      </main>

      <Footer />

      <RFQModal
        isOpen={rfqModalOpen}
        onClose={() => setRfqModalOpen(false)}
      />
    </div>
  );
}
