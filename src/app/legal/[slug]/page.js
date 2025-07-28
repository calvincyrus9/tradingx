// src/app/legal/[slug]/page.js
'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacyPolicyContent from '@/pages/privacy-policy';
import TermsOfServiceContent from '@/pages/terms-of-service';
import RiskDisclosureContent from '@/pages/risk-disclosure';

const LegalPage = () => {
  const pathname = usePathname();
  const slug = pathname.split('/').pop();

  const renderContent = () => {
    switch (slug) {
      case 'privacy-policy':
        return <PrivacyPolicyContent />;
      case 'terms-of-service':
        return <TermsOfServiceContent />;
      case 'risk-disclosure':
        return <RiskDisclosureContent />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-invert max-w-none bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl p-8">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
