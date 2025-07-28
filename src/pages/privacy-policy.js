// src/pages/legal/privacy-policy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
      <div className="space-y-6">
        <p className="text-gray-300">
          Last updated: July 28, 2025
        </p>
        
        <p className="text-gray-300">
          Futuristic Trading (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the www.futuristictrading.com website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Information Collection and Use</h2>
          <p className="text-gray-300">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6">Types of Data Collected</h3>
          <p className="text-gray-300">
            <span className="font-medium text-cyan-300">Personal Data:</span> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Cookies and Usage Data</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-white mt-6">Usage Data</h3>
          <p className="text-gray-300">
            We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
          
          <h3 className="text-xl font-semibold text-white mt-6">Tracking & Cookies Data</h3>
          <p className="text-gray-300">
            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Use of Data</h2>
          <p className="text-gray-300">
            Futuristic Trading uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Data Security</h2>
          <p className="text-gray-300">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Service Providers</h2>
          <p className="text-gray-300">
            We may employ third party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>
          <p className="text-gray-300">
            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Changes to This Privacy Policy</h2>
          <p className="text-gray-300">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p className="text-gray-300">
            We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;effective date&quot; at the top of this Privacy Policy.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
            <li>By email: privacy@futuristictrading.com</li>
            <li>By visiting this page on our website: www.futuristictrading.com/contact</li>
          </ul>
        </div>
      </div>
  );
};

export default PrivacyPolicy;