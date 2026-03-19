import { ShieldCheck, Landmark, Zap } from "lucide-react";

const Problem = () => (
  <section
    id="problem"
    className="py-24 px-6 md:px-12 bg-[#151515] text-white overflow-hidden"
  >
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
          <span className="w-8 h-[1px] bg-gray-700"></span>
          The Problem
        </div>
        <h2 className="text-3xl md:text-5xl font-medium font-helvetica leading-tight">
          Credit in Africa is{" "}
          <span className="text-[#5B1E9F] italic">broken</span> — and businesses
          pay the price
        </h2>
        <div className="space-y-4 text-white/80 font-light leading-relaxed">
          <p>
            In Nigeria, commercial interest rates exceed 27%. Microfinance Banks
            that serve the real economy — small businesses, traders, farmers —
            borrow at these punishing rates and pass the pain to their SME
            customers.
          </p>
          <p>
            Meanwhile, over $140 billion in stablecoins sit idle in DeFi
            protocols generating no real-world impact. The gap between global
            DeFi liquidity and African credit demand is the largest mispriced
            opportunity in global finance.
          </p>
        </div>
        <div className="border-l-2 border-white/20 pl-8 py-2 italic font-helvetica text-xl text-gray-300">
          "$140B in idle DeFi stablecoins. $16 trillion in trapped real-world
          assets. Lanstellar is the bridge that connects them."
        </div>
      </div>

      <div className="grid gap-px bg-white/5 border border-white/5">
        {[
          {
            num: "01",
            title: "Capital access takes 60–90 days",
            text: "TradFi demands months of manual due diligence before MFBs access growth capital — by which time opportunities are lost.",
            stat: "60-90",
            label: "Days for approval",
          },
          {
            num: "02",
            title: "Interest rates are crippling",
            text: "Nigerian banks raise money at high rates and pass costs to MFBs, who pass them to SMEs. The entire chain is broken.",
            stat: "27%+",
            label: "Average MFB rate",
          },
          {
            num: "03",
            title: "DeFi capital earns no real yield",
            text: "Over $140B in stablecoins earn suboptimal yields in DeFi pools disconnected from productive real-world activity.",
            stat: "$140B+",
            label: "Idle stablecoins",
          },
          {
            num: "04",
            title: "Trust Gap remains wide",
            text: "Without on-chain transparency and AI verification, investors cannot trust collateral quality — creating a barrier for credit.",
            stat: "",
            label: "",
          },
        ].map((item, i) => (
          <div key={i} className="bg-[#1a1a1a] p-8 space-y-4">
            <div className="text-[10px] text-gray-500 uppercase tracking-widest">
              {item.num} — PROBLEM
            </div>
            <h4 className="text-sm font-medium text-white">{item.title}</h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              {item.text}
            </p>
            {item.stat && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xl font-helvetica text-white">
                  {item.stat}
                </span>
                <span className="text-[10px] text-white/60 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Platform = () => (
  <section id="platform" className="py-24 px-6 md:px-12 bg-white text-black">
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl mb-16 space-y-4">
        <div className="flex items-center gap-4 text-[10px] text-gray-400 tracking-[0.2em] uppercase">
          <span className="w-8 h-[1px] bg-gray-200"></span>
          The Platform
        </div>
        <h2 className="text-[32px] md:text-[48px] font-bold text-gray-900 leading-tight">
          Built for <span className="text-[#5B1E9F]">trust, speed,</span> <br />
          and real-world scale
        </h2>
        <p className="text-gray-500 font-medium">
          Every component of Lanstellar is engineered to solve a specific
          failure in the traditional system — from opaque collateral to slow due
          diligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
        {[
          {
            icon: Zap,
            num: "01 — Intelligence",
            title: "AI Credit Assessment",
            body: "Our AI agents replace 60–90 days of manual due diligence with automated, objective credit scoring and real-world collateral verification.",
            tags: ["Risk Scoring", "Collateral Verify", "Fraud Detect"],
          },
          {
            icon: Landmark,
            num: "02 — Trust",
            title: "On-Chain Transparency",
            body: "Every loan, every collateral record, every repayment — written to the blockchain. Investors verify their exposure in real time.",
            tags: ["Multi-Chain", "Smart Contracts", "Real-Time Audit"],
          },
          {
            icon: ShieldCheck,
            num: "03 — Liquidity",
            title: "Multi-Chain Stablecoin Pool",
            body: "A multi-chain stablecoin liquidity pool aggregates capital from DeFi investors globally and routes it to vetted MFB borrowers.",
            tags: ["USDC / USDT", "Multi-Chain", "Instant Disburse"],
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-10 space-y-6 group hover:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 border border-[#5B1E9F]/20 flex items-center justify-center text-[#5B1E9F] group-hover:bg-[#5B1E9F] group-hover:text-white transition-all duration-300">
              <item.icon size={24} />
            </div>
            <div className="space-y-3">
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">
                {item.num}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {item.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => {
  return (
    <>
      <Problem />
      <Platform />
    </>
  );
};

export default Features;
