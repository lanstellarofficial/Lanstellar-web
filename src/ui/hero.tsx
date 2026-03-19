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
        <div className="hidden lg:block w-[400px] animate-fade-in-up delay-400">
          <svg
            viewBox="0 0 340 420"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <rect
              x="80"
              y="20"
              width="180"
              height="64"
              rx="2"
              fill="rgba(0,0,0,0.02)"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="0.8"
            />
            <text
              x="170"
              y="45"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9.5"
              fill="black"
              letterSpacing="2"
              fontWeight="500"
            >
              LIQUIDITY PROVIDERS
            </text>
            <text
              x="170"
              y="64"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="#6b7280"
            >
              DeFi · Institutions · DAOs
            </text>

            <line
              x1="170"
              y1="84"
              x2="170"
              y2="128"
              stroke="rgba(0,0,0,0.15)"
              strokeWidth="0.8"
              strokeDasharray="4 3"
            />
            <polygon
              points="166,124 174,124 170,132"
              fill="rgba(0,0,0,0.2)"
            />

            <rect
              x="36"
              y="136"
              width="268"
              height="80"
              rx="2"
              fill="rgba(91,30,159,0.04)"
              stroke="#5B1E9F"
              strokeWidth="0.9"
            />
            <text
              x="170"
              y="162"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#5B1E9F"
              letterSpacing="3"
              fontWeight="600"
            >
              LANSTELLAR PROTOCOL
            </text>
            <text
              x="170"
              y="183"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="15"
              fill="black"
              fontWeight="300"
            >
              AI · Smart Contracts
            </text>
            <text
              x="170"
              y="203"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="10"
              fill="#6b7280"
              letterSpacing="1"
            >
              Stablecoin Liquidity Pool
            </text>

            <line
              x1="170"
              y1="216"
              x2="170"
              y2="260"
              stroke="rgba(96,165,250,0.4)"
              strokeWidth="0.8"
              strokeDasharray="4 3"
            />
            <polygon
              points="166,256 174,256 170,264"
              fill="rgba(96,165,250,0.5)"
            />

            <rect
              x="80"
              y="268"
              width="180"
              height="64"
              rx="2"
              fill="rgba(59,130,246,0.03)"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="0.8"
            />
            <text
              x="170"
              y="293"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9.5"
              fill="#2563eb"
              letterSpacing="2"
              fontWeight="500"
            >
              MICROFINANCE BANKS
            </text>
            <text
              x="170"
              y="313"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="black"
            >
              Nigeria · Africa · Emerging Markets
            </text>

            <line
              x1="170"
              y1="332"
              x2="170"
              y2="370"
              stroke="rgba(96,165,250,0.3)"
              strokeWidth="0.8"
              strokeDasharray="4 3"
            />
            <polygon
              points="166,366 174,366 170,374"
              fill="rgba(96,165,250,0.4)"
            />

            <rect
              x="100"
              y="378"
              width="140"
              height="36"
              rx="2"
              fill="rgba(96,165,250,0.02)"
              stroke="rgba(96,165,250,0.14)"
              strokeWidth="0.6"
            />
            <text
              x="170"
              y="401"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="9"
              fill="#6b7280"
              letterSpacing="1.5"
            >
              SMEs · LOCAL ECONOMY
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
