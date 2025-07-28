// src/pages/legal/risk-disclosure.js
import React from 'react';
import LegalLayout from '@/components/LegalLayout';

const RiskDisclosure = () => {
  return (
    <LegalLayout title="Risk Disclosure">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-900/20 to-gray-900 border border-red-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-400">Important Risk Warning</h2>
          <p className="mt-4 text-gray-300">
            Trading financial instruments involves significant risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your financial condition, investment objectives, and risk tolerance.
          </p>
        </div>
        
        <p className="text-gray-300 mt-6">
          The risk of loss in trading can be substantial. You should therefore carefully consider whether such trading is suitable for you in light of your financial condition. The high degree of leverage that is often obtainable in trading can work against you as well as for you. The use of leverage can lead to large losses as well as gains.
        </p>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">1. Market Risk</h2>
          <p className="text-gray-300">
            Market prices may move rapidly and unpredictably. You may sustain a total loss of the funds in your account. Past performance is not indicative of future results. The historical returns, expected returns, or probability projections may not reflect actual future performance.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">2. Liquidity Risk</h2>
          <p className="text-gray-300">
            Some markets may become illiquid meaning that you may not be able to exit a position at the desired price. This can occur at any time but is more likely in volatile market conditions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">3. Leverage Risk</h2>
          <p className="text-gray-300">
            The use of leverage can magnify both gains and losses. While leverage allows you to control large positions with relatively little capital, small market movements against your position may result in substantial losses that exceed your initial investment.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">4. Strategy Risk</h2>
          <p className="text-gray-300">
            Our trading signals and strategies are based on our proprietary analysis and market trap identification methodology. However, no strategy can guarantee profits or prevent losses. Market conditions change rapidly and strategies that were profitable in the past may not be profitable in the future.
          </p>
          <p className="text-gray-300">
            The performance results provided on our website are based on historical backtesting and live trading results. These results do not guarantee future performance and may not account for all market conditions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">5. Technology Risk</h2>
          <p className="text-gray-300">
            Technical failures, including but not limited to internet connectivity issues, platform malfunctions, or server outages, may prevent you from executing trades or managing existing positions. We are not responsible for losses resulting from such failures.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">6. Third-Party Risk</h2>
          <p className="text-gray-300">
            We are not responsible for the performance or reliability of any broker, trading platform, or other third-party service you may use to execute trades based on our signals.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">7. No Investment Advice</h2>
          <p className="text-gray-300">
            The information provided on our platform, including trading signals, market analysis, and educational content, is for informational purposes only and should not be construed as investment advice. We do not provide personalized investment recommendations or advice about the suitability of any particular investment.
          </p>
          <p className="text-gray-300">
            You are solely responsible for your trading decisions. You should consult with a qualified financial advisor before making any investment decisions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">8. Hypothetical Performance</h2>
          <p className="text-gray-300">
            Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program.
          </p>
          <p className="text-gray-300">
            One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. Additionally, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">9. Acknowledgment</h2>
          <p className="text-gray-300">
            By using our Service, you acknowledge that you have read, understood, and agree to this Risk Disclosure statement. You understand that trading involves significant risk of loss and that you may lose some or all of your invested capital.
          </p>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-cyan-400 mt-8">10. Contact Us</h2>
          <p className="text-gray-300">
            If you have any questions about this Risk Disclosure, please contact us at support@futuristictrading.com.
          </p>
        </div>
      </div>
    </LegalLayout>
  );
};

export default RiskDisclosure;