import { ShieldCheck, Landmark, Zap } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, badge }: { icon: React.ElementType, title: string, description: string, badge?: string }) => (
  <div className="group relative p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col items-start space-y-4 overflow-hidden">
    {/* Decorative Gradient Background */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full blur-3xl group-hover:bg-gray-100 transition-colors duration-500" />
    
    <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 text-black group-hover:bg-black group-hover:text-white transition-all duration-500">
      <Icon size={28} />
    </div>

    <div className="relative z-10 space-y-2">
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold tracking-wider uppercase text-gray-500 mb-2">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 font-medium leading-relaxed">
        {description}
      </p>
    </div>

    {/* Subtle Link/Interaction Indicator */}
    <div className="relative z-10 mt-auto pt-4 flex items-center text-sm font-bold text-gray-400 group-hover:text-black transition-colors duration-300">
      <span>Learn more</span>
      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 sm:px-12 lg:px-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-sm font-bold tracking-widest uppercase text-gray-400">
              Solutions for the Ecosystem
            </span>
            <h2 className="text-[32px] md:text-[48px] font-bold text-gray-900 leading-tight">
              Empowering Finance <br />
              <span className="text-gray-400">With Technology.</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 font-medium">
            Tailored solutions designed to bridge the gap between global liquidity and local credit markets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={ShieldCheck}
            badge="For Liquidity Providers"
            title="Secure Yield"
            description="Secure 20% Annualized Yield backed by real-world community debt."
          />
          <FeatureCard
            icon={Landmark}
            badge="For Asset Managers (MFBs)"
            title="Instant Liquidity"
            description="Access $1M+ in instant liquidity without the 30% local interest rates."
          />
          <FeatureCard
            icon={Zap}
            badge="The Engine"
            title="AI/Blockchain"
            description="Automated 'Credit scores'—AI-audited onchain proof."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
