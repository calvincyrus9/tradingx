// src/components/HowItWorks.js
import React from 'react';
import { 
  HiOutlineUser as FiUser, 
  HiOutlineBell as FiBell, 
  HiOutlineTrendingUp as FiTrendingUp 
} from 'react-icons/hi';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiUser className="w-8 h-8" />,
      title: "Sign Up for Free Trial",
      description: "Create your account and get immediate access to our trading signals with no credit card required."
    },
    {
      icon: <FiBell className="w-8 h-8" />,
      title: "Receive Signals in Real-Time",
      description: "Get instant notifications via email or SMS with entry, stop loss, and take profit levels."
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Upgrade to Premium",
      description: "Continue receiving high-probability signals after your trial ends. Cancel anytime."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Start trading like a professional in just three simple steps
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-gray-400">{step.description}</p>
              <div className="mt-6 text-cyan-400 font-bold text-lg">Step {index + 1}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Transform Your Trading?</h3>
              <p className="mt-2 text-gray-300">Join thousands of traders who are already profiting from our signals.</p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
              Start Your Free Trial Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;