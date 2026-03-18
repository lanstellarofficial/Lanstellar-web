import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between h-[87px] md:px-[100px] px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
        scrolled
          ? "bg-[#151515]/90 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/logo.svg"
            alt="logo"
            width={170}
            height={60}
            className="w-30 md:w-42 transition-all duration-300 ease-in-out hover:scale-105"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center">
        <ul className="flex gap-[40px] font-inter text-[14px] font-medium text-gray-300 uppercase tracking-widest">
          <li className="cursor-pointer hover:text-white transition-colors">
            <a href="#how">How It Works</a>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            <a href="#platform">Platform</a>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            <a href="#why">Why Lanstellar</a>
          </li>
          <li className="cursor-pointer hover:text-white transition-colors">
            <a href="#team">Team</a>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          className="hidden sm:inline-flex text-gray-300 border border-gray-700 hover:text-black hover:bg-white rounded-none px-6 h-10 text-[11px] uppercase tracking-[0.1em]"
          asChild
        >
          <a href="#waitlist">Get Liquidity</a>
        </Button>
        <Link to="/login">
          <Button className="bg-[#5B1E9F] hover:bg-[#5B1E9F]/90 text-white rounded-none px-6 h-10 text-[11px] uppercase tracking-[0.1em] font-medium">
            Provide Liquidity
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
