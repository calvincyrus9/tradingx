// src/app/legal/[slug]/page.js
'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

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

  return <div>{renderContent()}</div>;
};

export default LegalPage;

