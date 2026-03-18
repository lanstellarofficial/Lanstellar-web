import { Button } from "@/components/ui/button";

const Audience = () => {
  return (
    <section id="audience" className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Who It's For</div>
          <h2 className="text-3xl md:text-5xl font-medium font-helvetica text-white">
            Two sides of one <span className="text-[#5B1E9F] italic">powerful protocol</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light leading-relaxed">
            Lanstellar bridges global DeFi capital with Africa's most creditworthy microfinance institutions — creating value for both sides of the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {/* LP Card */}
          <div className="bg-[#151515] p-12 space-y-8 group transition-colors hover:bg-[#1c1c1c]">
            <div className="inline-block px-3 py-1 border border-white/10 text-[10px] tracking-[0.2em] uppercase text-gray-400">
              For Liquidity Providers & Investors
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-white font-helvetica leading-tight">
              Earn Real-World Yield on Verified African Credit
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Deploy stablecoin capital into AI-verified, collateral-backed loans to regulated Microfinance Banks across Africa — and earn yields that outperform treasury bills.
            </p>
            <ul className="space-y-4">
              {[
                "Treasury-bill beating yields on USDC / USDT",
                "AI-verified collateral and on-chain credit scoring",
                "Full transparency — every loan and repayment on-chain",
                "Diversified exposure across multiple MFBs",
                "Smart contract automated repayments"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 font-light">
                  <span className="text-white mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              className="bg-white hover:bg-white/90 text-black rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.12em] font-medium w-full sm:w-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Providing Liquidity
            </Button>
          </div>

          {/* MFB Card */}
          <div className="bg-[#151515] p-12 space-y-8 group transition-colors hover:bg-[#1c1c1c]">
            <div className="inline-block px-3 py-1 border border-blue-500/30 text-[10px] tracking-[0.2em] uppercase text-blue-400">
              For Microfinance Banks
            </div>
            <h3 className="text-2xl md:text-3xl font-medium text-white font-helvetica leading-tight">
              Access Growth Capital in Minutes, Not Months
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stop waiting 60–90 days for TradFi approval. Lanstellar's AI engine verifies your creditworthiness and unlocks stablecoin liquidity against your real-world assets — instantly.
            </p>
            <ul className="space-y-4">
              {[
                "Stablecoin disbursement in minutes, not months",
                "Rates far below current traditional lending costs",
                "AI due diligence — replace months of paperwork",
                "Collateral-backed: real estate, receivables, assets",
                "Scale your SME loan book without capital constraints"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 font-light">
                  <span className="text-[#439EFF] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              variant="outline"
              className="border-[#439EFF]/30 text-[#439EFF] hover:text-[#439EFF]/80 hover:border-[#439EFF]/80 rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.12em] font-medium w-full sm:w-auto"
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply for Capital
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
