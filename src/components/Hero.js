// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0%,_rgba(0,0,0,0)_70%)]"></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Profit Like a Pro</span>
              <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Get 7 Days Free Access
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Join our elite trading community and get access to our futuristic algo signals with proven results. 
              Identify market traps and enter after confirmation for high-probability trades.
            </p>
            
            <div className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
              <p className="mt-3 text-gray-400 text-sm">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-1 shadow-xl">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-cyan-400 font-semibold">Market Trap Strategy</div>
                  <div className="text-sm text-gray-400">Live Signal</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Asset:</span>
                    <span className="font-medium">US100</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Entry:</span>
                    <span className="text-green-400 font-medium">15,842.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Take Profit:</span>
                    <span className="text-cyan-400 font-medium">15,920.50</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">72.3%</div>
                    <div className="text-xs text-gray-400">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">2.45</div>
                    <div className="text-xs text-gray-400">Profit Factor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">65</div>
                    <div className="text-xs text-gray-400">Trades</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;