// src/components/FAQ.js
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Our free trial gives you full access to all trading signals for 7 days with no credit card required. You'll receive the same signals as our premium members during this period."
    },
    {
      question: "What happens after the free trial ends?",
      answer: "After your 7-day trial, you'll have the option to subscribe to our premium service. If you choose not to continue, your access will be automatically suspended with no charges."
    },
    {
      question: "How are the signals delivered?",
      answer: "Signals are delivered in real-time via email and SMS. Each signal includes entry price, stop loss, take profit levels, and position sizing recommendations based on your risk profile."
    },
    {
      question: "What markets do you cover?",
      answer: "We cover all major markets including US100, US30, US500, EU50, US2000, UK100, and more. Our strategy is continuously tested and optimized across multiple markets."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      question: "What is your win rate?",
      answer: "Our strategy maintains a consistent win rate of 70-75% across different market conditions. However, past performance is not indicative of future results, and trading always involves risk."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our trading signals service
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="w-5 h-5 text-cyan-400" />
                ) : (
                  <FiChevronDown className="w-5 h-5 text-cyan-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
            <p className="mt-4 text-gray-300">
              Our support team is ready to help you with any questions about our service.
            </p>
            <button className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;