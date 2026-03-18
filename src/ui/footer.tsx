import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#151515] border-t border-white/5 py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          <div className="flex flex-col gap-4">
            <Link to="/">
              <img
                src="/logo.svg"
                alt="logo"
                className="w-26 transition-all duration-300 ease-in-out hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-xs">
              Connecting global DeFi liquidity to Africa's credit gap — at the
              speed of AI and stablecoins.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
              Platform
            </div>
            <ul className="space-y-4 text-xs font-light text-gray-500">
              <li>
                <a href="#how" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  className="hover:text-white transition-colors"
                >
                  For Investors
                </a>
              </li>
              <li>
                <a
                  href="#audience"
                  className="hover:text-white transition-colors"
                >
                  For MFBs
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  className="hover:text-white transition-colors"
                >
                  Smart Contracts
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
              Company
            </div>
            <ul className="space-y-4 text-xs font-light text-gray-500">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pitch Deck
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
              Connect
            </div>
            <ul className="space-y-4 text-xs font-light text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lanstellar.com"
                  className="hover:text-white transition-colors"
                >
                  hello@lanstellar.com
                </a>
              </li>
              <li className="text-gray-600">Lagos · London</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 border-t border-white/5">
          <div className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2025 Lanstellar. All rights reserved.
          </div>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-400">
              Risk Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
