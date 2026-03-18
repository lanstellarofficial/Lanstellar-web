import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getNames } from "country-list";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import api from "@/lib/api";

const Opportunity = () => (
  <div id="why" className="py-24 px-6 md:px-12 bg-white text-black">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">The Opportunity</div>
        <h2 className="text-3xl md:text-5xl font-medium font-helvetica text-black">
          The numbers behind the <span className="text-gray-400 italic">mission</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
        {[
          { val: "$16", sup: "T", label: "Real-world assets trapped with no DeFi liquidity access globally", src: "BCG / WEF RWA Report" },
          { val: "$140", sup: "B+", label: "Stablecoins sitting idle in DeFi with no real-world economic yield", src: "DeFiLlama, 2024" },
          { val: "27", sup: "%+", label: "Average commercial lending rate for MFBs in Nigeria today", src: "CBN Monetary Policy, 2024" },
          { val: "41", sup: "M+", label: "Nigerian SMEs underserved by the current financial system", src: "SMEDAN / World Bank" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 space-y-4 group hover:bg-gray-50 transition-colors">
            <div className="text-4xl md:text-5xl font-helvetica font-medium">
              {item.val}<sup className="text-xl md:text-2xl text-gray-400 ml-1">{item.sup}</sup>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.label}</p>
            <div className="text-[9px] text-gray-300 uppercase tracking-widest pt-2">{item.src}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Waitlist = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [telegramUsername, setTelegramUsername] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    try {
      try {
        const res = await api.post("/waitlist", {
          fullName: fullName,
          email: email,
          country: country,
          telegramUsername: telegramUsername,
        });
        console.log("Waitlist submission response:", res.data);
      } catch {
        console.info("Waitlist submission", {
          fullName,
          email,
          country,
          telegramUsername,
        });
      }

      toast.success("You're on the waitlist! We'll be in touch.");
      setFullName("");
      setEmail("");
      setCountry("");
      setTelegramUsername("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = getNames();

  return (
    <>
      <Opportunity />
      <section id="waitlist" className="w-full bg-[#151515] font-inter text-white pb-24">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Get Started</div>
            <h2 className="text-3xl md:text-5xl font-medium font-helvetica leading-tight">
              Be part of <span className="text-gray-500 italic">Africa's credit revolution</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Whether you're a liquidity provider seeking real-world yield or a Microfinance Bank ready to break free from expensive, slow capital — Lanstellar was built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-24">
            <div className="bg-[#1a1a1a] p-12 space-y-6 text-center md:text-left">
              <div className="text-[9px] uppercase tracking-widest text-white/40">For Investors & LPs</div>
              <h3 className="text-xl font-medium text-white font-helvetica">Earn yield on verified African credit</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Deploy USDC or USDT into AI-verified MFB loans and earn treasury-beating returns — with full on-chain transparency and smart contract security.
              </p>
              <Button 
                className="bg-white hover:bg-white/90 text-black rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.12em] font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Provide Liquidity
              </Button>
            </div>
            <div className="bg-[#1a1a1a] p-12 space-y-6 text-center md:text-left">
              <div className="text-[9px] uppercase tracking-widest text-blue-400">For Microfinance Banks</div>
              <h3 className="text-xl font-medium text-white font-helvetica">Access stablecoin capital in minutes</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Submit your application, pass AI verification, and receive stablecoin liquidity against your real-world assets — without the 60–90 day TradFi wait.
              </p>
              <Button 
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-300 rounded-none px-8 h-12 text-[11px] uppercase tracking-[0.12em] font-medium w-full sm:w-auto"
                onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Apply for Capital
              </Button>
            </div>
          </div>

          <div id="waitlist-form" className="max-w-xl mx-auto space-y-8 pt-12 border-t border-white/5">
            <div className="text-center space-y-3">
              <div className="text-[10px] text-gray-500 tracking-[0.2em] uppercase">Join the Waitlist</div>
              <h3 className="text-xl font-medium text-white">Get early access at launch.</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <Input
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-[#1a1a1a] border-[#222] focus:outline-none rounded-none text-white placeholder:text-gray-600 shadow-none p-4 h-14"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#1a1a1a] border-[#222] focus:outline-none rounded-none text-white placeholder:text-gray-600 shadow-none p-4 h-14"
                />
              </div>
              <div className="flex flex-row gap-3">
                <Select value={country} onValueChange={(value) => setCountry(value)}>
                  <SelectTrigger className="bg-[#1a1a1a] border-[#222] rounded-none text-white h-14 w-1/2">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-[#222] text-white">
                    {countries.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Telegram Username"
                  value={telegramUsername}
                  onChange={(e) => setTelegramUsername(e.target.value)}
                  className="bg-[#1a1a1a] border-[#222] focus:outline-none rounded-none text-white placeholder:text-gray-600 shadow-none p-4 h-14 w-1/2"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-white hover:bg-white/90 text-black py-4 rounded-none h-14 text-[13px] font-medium transition-opacity mt-4 cursor-pointer disabled:opacity-50 uppercase tracking-widest"
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Waitlist;
