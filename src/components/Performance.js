// src/components/Performance.js
import React from 'react';

const Performance = () => {
  const performanceData = [
    { market: 'US100', pnl: '8.03%', maxDrawdown: '1.29%', trades: 65, winRate: '72.31%', pf: 2.45 },
    { market: 'US30', pnl: '3.11%', maxDrawdown: '1.90%', trades: 62, winRate: '61.29%', pf: 1.56 },
    { market: 'US500', pnl: '4.09%', maxDrawdown: '2.20%', trades: 54, winRate: '64.81%', pf: 1.79 },
    { market: 'EU50', pnl: '5.86%', maxDrawdown: '1.59%', trades: 51, winRate: '56.86%', pf: 1.68 },
    { market: 'US2000', pnl: '11.58%', maxDrawdown: '2.47%', trades: 66, winRate: '69.70%', pf: 2.18 },
    { market: 'UK100', pnl: '2.51%', maxDrawdown: '1.67%', trades: 48, winRate: '58.33%', pf: 1.57 },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Verified Performance
          </h2>
          <p className="mt-3 text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Real results from our market trap strategy across multiple markets
          </p>
        </div>

        <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Strategy Highlights Card */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-cyan-300">Strategy Highlights</h3>
            <div className="mt-4 md:mt-6 space-y-3 md:space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-xs md:text-sm text-gray-300">
                    <span className="font-medium text-white">58 Trades Total</span> with 41 Winning Trades (70.7% success rate)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-xs md:text-sm text-gray-300">
                    <span className="font-medium text-white">Risk Management:</span> Max Loss 0.26% with 10% risk per trade
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                    <svg className="w-2 h-2 md:w-3 md:h-3 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-xs md:text-sm text-gray-300">
                    <span className="font-medium text-white">High Capital Efficiency:</span> Up to 14.98% gain per trade with 99% capital usage
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700">
              <h4 className="text-base md:text-lg font-semibold text-cyan-300">Tiered Analysis</h4>
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">
                Each market is analyzed separately with trap filtering logic. Our tiered structure identifies the highest probability traps while reducing noise and false signals.
              </p>
            </div>
          </div>
          
          {/* Performance Table Card */}
          <div className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-cyan-300">Market Performance (Last 3 Months)</h3>
            <div className="mt-4 md:mt-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">Market</th>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">PNL</th>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">Max DD</th>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">Trades</th>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">Win Rate</th>
                    <th className="px-2 py-2 md:px-4 md:py-3 text-left text-[10px] md:text-xs font-medium text-cyan-400 uppercase tracking-wider">PF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {performanceData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-900/50' : ''}>
                      <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm font-medium">{item.market}</td>
                      <td className={`px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm ${parseFloat(item.pnl) > 5 ? 'text-green-400' : 'text-cyan-400'}`}>
                        {item.pnl}
                      </td>
                      <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm text-red-400">{item.maxDrawdown}</td>
                      <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap text-xs md:text-sm">{item.trades}</td>
                      <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-xs md:text-sm">{item.winRate}</span>
                          <div className="ml-1 md:ml-2 w-10 md:w-16 bg-gray-700 rounded-full h-1.5 md:h-2">
                            <div 
                              className="bg-cyan-500 h-1.5 md:h-2 rounded-full" 
                              style={{ width: `${parseFloat(item.winRate)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 py-2 md:px-4 md:py-3 whitespace-nowrap">
                        <span className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${
                          item.pf > 2 ? 'bg-green-900/50 text-green-400' : 
                          item.pf > 1.5 ? 'bg-cyan-900/50 text-cyan-400' : 'bg-yellow-900/50 text-yellow-400'
                        }`}>
                          {item.pf}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">
              * Based on $100,000 capital with 10% risk per trade
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;