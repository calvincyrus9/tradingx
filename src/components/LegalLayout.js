// src/components/LegalLayout.js
import React from 'react';
import Head from 'next/head';
import Header from '/Header';
import Footer from '/Footer';

const LegalLayout = ({ children, title }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen text-white">
      <Head>
        <title>{title} | Futuristic Trading</title>
        <meta name="description" content={`${title} for Futuristic Trading`} />
      </Head>
      
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            {title}
          </h1>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="prose prose-invert max-w-none bg-gray-900/50 backdrop-blur-md border border-gray-700 rounded-xl p-8">
          {children}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalLayout;