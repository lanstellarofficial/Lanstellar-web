const Team = () => {
  return (
    <section id="team" className="py-24 px-6 md:px-12 bg-[#1a1a1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">The Team</div>
          <h2 className="text-3xl md:text-5xl font-medium font-helvetica text-white">
            Built by <span className="text-gray-500 italic">operators</span> who've done it before
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Our founders bring together Web3 infrastructure, AI engineering, and deep African financial markets expertise — the rare combination this problem demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 mb-24">
          {[
            { name: "Femi Adegolu", role: "CEO & Co-Founder", prev: "5 Years Web3 · Founder, BD, Advisor", initials: "F·A" },
            { name: "Olumide Silas", role: "CTO & Co-Founder", prev: "Full-Stack · Coinbase Dev Ambassador", initials: "O·S" },
            { name: "Toyin Aguda", role: "Advisor", prev: "Ex-JP Morgan Chase · VP AI Research", initials: "T·A" }
          ].map((member, i) => (
            <div key={i} className="bg-[#151515] group">
              <div className="aspect-[3/4] bg-[#1a1a1a] border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="text-4xl font-helvetica font-light text-white/10">{member.initials}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 space-y-1">
                <h4 className="text-lg font-medium text-white">{member.name}</h4>
                <p className="text-xs text-gray-400 font-light tracking-wide">{member.role}</p>
                <p className="text-[10px] text-blue-400/80 uppercase tracking-widest pt-2">{member.prev}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-12">
          <div className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">SDG Alignment</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            <div className="bg-[#151515] p-10 flex gap-8 items-start">
              <div className="text-3xl font-helvetica font-bold text-white/20">SDG 8</div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Decent Work & Economic Growth</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  By drastically lowering the cost of capital for MFBs, Lanstellar directly enables more SME financing — creating jobs and driving inclusive economic growth across Africa.
                </p>
              </div>
            </div>
            <div className="bg-[#151515] p-10 flex gap-8 items-start">
              <div className="text-3xl font-helvetica font-bold text-white/20">SDG 9</div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-white">Industry, Innovation & Infrastructure</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">
                  We are building resilient financial infrastructure for emerging markets — combining AI, DeFi, and blockchain to create a new category of inclusive, scalable fintech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
