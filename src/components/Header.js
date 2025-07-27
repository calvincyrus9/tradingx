// src/components/Header.js
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold text-gray-900">FT</span>
            </div>
            <span className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Futuristic Trading
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-cyan-300 hover:text-cyan-100 font-medium">Home</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Performance</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Testimonials</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium">
              Start Free Trial
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-4">
          <div className="flex flex-col space-y-3">
            <a href="#" className="text-cyan-300 hover:text-cyan-100 font-medium">Home</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Performance</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Testimonials</a>
            <a href="#" className="text-gray-400 hover:text-cyan-100 font-medium">Contact</a>
            <button className="mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;