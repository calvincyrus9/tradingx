// src/App.js
'use client';
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Performance from '@/components/Performance';
import HowItWorks from '@/components/HowItWorks';
import PricingPreview from '@/components/PricingPreview';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white">
      <Header />
      <main>
        <Hero />
        <Performance />
        <HowItWorks />
        <PricingPreview />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;