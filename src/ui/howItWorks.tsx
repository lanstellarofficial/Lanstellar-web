const steps = [
  {
    id: "01",
    tag: "Liquidity Provider",
    title: "Deposit Stablecoins",
    body: "LPs deposit USDC or USDT into Lanstellar's smart contract pool. Capital earns yield from day one, secured by AI-verified collateral.",
    color: "white"
  },
  {
    id: "02",
    tag: "AI Engine",
    title: "AI Verification",
    body: "AI agents assess MFB creditworthiness, verify real-world collateral (property, receivables, assets), and generate a risk score — on-chain and transparent.",
    color: "blue"
  },
  {
    id: "03",
    tag: "Microfinance Bank",
    title: "Stablecoin Disbursement",
    body: "Approved MFBs receive stablecoin loans directly within minutes. They convert to local currency and deploy capital immediately to their SME borrowers.",
    color: "blue"
  },
  {
    id: "04",
    tag: "Repayment + Yield",
    title: "Automated Repayment",
    body: "Smart contracts automate repayment schedules. LPs receive principal plus yield. The cycle repeats — compounding returns and real economic impact.",
    color: "white"
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-medium font-helvetica text-white">
            From idle capital to <br />
            <span className="text-[#5B1E9F] italic">active credit</span> in
            minutes
          </h2>
          <p className="text-white/80 text-lg font-light leading-relaxed">
            Lanstellar's AI protocol automates the entire lending lifecycle —
            from collateral verification to stablecoin disbursement — replacing
            60–90 days of manual process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#151515] p-8 space-y-6 relative group transition-colors hover:bg-[#1c1c1c]"
            >
              <div className="space-y-4">
                <div
                  className={`inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest ${
                    step.color === "blue"
                      ? "text-[#439EFF] bg-blue-500/10"
                      : "text-gray-400 bg-white/5"
                  }`}
                >
                  {step.tag}
                </div>
                <div className="text-4xl font-helvetica font-light text-white/80 leading-none">
                  {step.id}
                </div>
                <h3 className="text-sm font-medium text-white tracking-wide">
                  {step.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
