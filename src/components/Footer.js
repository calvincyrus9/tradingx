// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <div className="bg-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-900">FT</span>
              </div>
              <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Futuristic Trading
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              Professional trading signals based on sophisticated market trap analysis. Built by traders for traders.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400">
                
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400">
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Performance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="ml-3 text-gray-400">support@futuristictrading.com</span>
              </li>
              <li className="flex items-start">
                <span className="ml-3 text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="ml-3 text-gray-400">WhatsApp Chat</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Newsletter</h4>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
                <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-r-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Futuristic Trading. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 text-sm">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;