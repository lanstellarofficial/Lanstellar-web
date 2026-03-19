import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white text-gray-900 flex flex-col pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/heropatern.svg')] bg-cover bg-center opacity-10 bg-blend-multiply"
      />
      {/* Noise background */}
      <img
        src="/heronoise.png"
        alt="hero"
        width={1200}
        height={800}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-10 object-cover"
      />

      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 w-full gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-8 py-12 md:py-24">
          <div className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 animate-fade-in-up">
            <span className="w-8 h-[1px] bg-gray-300"></span>
            AI-Powered DeFi Protocol · Stablecoins · African MFBs
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[68px] leading-[1.1] font-medium font-helvetica animate-fade-in-up delay-100">
            Connecting{" "}
            <span className="text-[#5B1E9F] italic">Global Liquidity</span> to
            Africa's Credit Gap — at the Speed of{" "}
            <span className="text-[#5B1E9F] italic">DeFi</span>
          </h1>

          <p className="max-w-xl text-gray-600 text-lg md:text-xl leading-relaxed font-inter animate-fade-in-up delay-200">
            Lanstellar is an AI-powered stablecoin lending protocol that gives
            Microfinance Banks instant access to growth capital — so they can
            finance more SMEs, create more jobs, and grow local economies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-in-up delay-300">
            <Button
              className="bg-[#5B1E9F] hover:bg-[#5B1E9F]/90 text-white rounded-none px-8 h-14 text-[11px] uppercase tracking-[0.12em] font-medium"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Provide Liquidity
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-[#5B1E9F] hover:bg-gray-50 rounded-none px-8 h-14 text-[11px] uppercase tracking-[0.12em] font-medium"
              onClick={() =>
                document
                  .getElementById("waitlist")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Capital for your MFB
            </Button>
            <button
              className="text-[11px] uppercase tracking-[0.1em] text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2 group"
              onClick={() =>
                document
                  .getElementById("how")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See how it works{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Right Visual - SVG Protocol Diagram */}
        <div className="hidden lg:block w-[480px] animate-fade-in-up delay-400">
          <svg
            viewBox="0 0 380 460"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full drop-shadow-2xl"
          >
            <defs>
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#5B1E9F" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#5B1E9F" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* LIQUIDITY PROVIDERS */}
            <rect
              x="90"
              y="10"
              width="200"
              height="70"
              rx="4"
              fill="white"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
            <rect
              x="95"
              y="15"
              width="190"
              height="60"
              rx="2"
              fill="url(#purpleGradient)"
            />
            <text
              x="190"
              y="42"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#5B1E9F"
              letterSpacing="2.5"
              fontWeight="600"
            >
              LIQUIDITY PROVIDERS
            </text>
            <text
              x="190"
              y="60"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="#6b7280"
              fontWeight="400"
            >
              Institutional DeFi · Stablecoins
            </text>

            {/* Connection 1 */}
            <line
              x1="190"
              y1="80"
              x2="190"
              y2="130"
              stroke="rgba(91,30,159,0.2)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <circle cx="190" cy="105" r="3" fill="#5B1E9F" opacity="0.4" />

            {/* LANSTELLAR PROTOCOL - CENTRAL HUB */}
            <rect
              x="30"
              y="130"
              width="320"
              height="100"
              rx="6"
              fill="white"
              stroke="#5B1E9F"
              strokeWidth="1.5"
              style={{ filter: 'url(#softGlow)' }}
            />
            <rect
              x="40"
              y="140"
              width="300"
              height="80"
              rx="4"
              fill="rgba(91,30,159,0.03)"
            />
            <text
              x="190"
              y="165"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#5B1E9F"
              letterSpacing="4"
              fontWeight="700"
            >
              LANSTELLAR CORE
            </text>
            <text
              x="190"
              y="190"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="18"
              fill="#151515"
              fontWeight="500"
            >
              AI-Driven Credit Engine
            </text>
            <text
              x="190"
              y="208"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#6b7280"
            >
              Real-Time Risk Analysis · Smart Yield
            </text>

            {/* Connection 2 */}
            <path
              d="M190 230 V280"
              stroke="rgba(59,130,246,0.2)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <circle cx="190" cy="255" r="3" fill="#3b82f6" opacity="0.4" />

            {/* MICROFINANCE BANKS */}
            <rect
              x="70"
              y="280"
              width="240"
              height="80"
              rx="4"
              fill="white"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="1"
            />
            <rect
              x="75"
              y="285"
              width="230"
              height="70"
              rx="2"
              fill="url(#blueGradient)"
            />
            <text
              x="190"
              y="312"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#2563eb"
              letterSpacing="2.5"
              fontWeight="600"
            >
              MICROFINANCE BANKS
            </text>
            <text
              x="190"
              y="335"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="12"
              fill="#111827"
              fontWeight="450"
            >
              Strategic Partners in Africa
            </text>

            {/* Connector to SMEs */}
            <line
              x1="190"
              y1="360"
              x2="190"
              y2="395"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* SMEs */}
            <rect
              x="100"
              y="395"
              width="180"
              height="45"
              rx="22.5"
              fill="#f9fafb"
              stroke="rgba(0,0,0,0.06)"
              strokeWidth="1"
            />
            <text
              x="190"
              y="423"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#4b5563"
              letterSpacing="1.5"
              fontWeight="500"
            >
              GROWING SMEs & ECONOMIES
            </text>
          </svg>
        </div>
      </div>

      {/* Hero Stats Footer */}
      <div className="relative z-10 w-full border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 uppercase">
          <div className="p-6 md:p-8 space-y-2">
            <div className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              27%+
            </div>
            <div className="text-[10px] text-gray-600 tracking-[0.1em]">
              Nigerian Lending Rates
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <div className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              60–90
            </div>
            <div className="text-[10px] text-gray-600 tracking-[0.1em]">
              Days TradFi Takes
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <div className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              Minutes
            </div>
            <div className="text-[10px] text-gray-600 tracking-[0.1em]">
              Lanstellar Takes
            </div>
          </div>
          <div className="p-6 md:p-8 space-y-2">
            <div className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">
              $16T
            </div>
            <div className="text-[10px] text-gray-600 tracking-[0.1em]">
              RWA Market Opportunity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
