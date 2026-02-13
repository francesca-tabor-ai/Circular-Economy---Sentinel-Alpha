
import React from 'react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-12 lg:py-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-slate-100" />
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mono">Manifesto 01.A</span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-12">
          Sentinel Alpha exists for one reason: To help elite capital allocators see systemic risk forming before markets price it in.
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
          <p>
            In modern markets, information is abundant — but true early warning is rare. Most signals only become visible once volatility rises, liquidity disappears, and correlation shocks are already underway. By that point, protection is expensive, exits are crowded, and losses are locked in.
          </p>
          <p className="font-medium text-slate-900">
            We built Sentinel Alpha to change that timing.
          </p>
        </div>
      </section>

      {/* Structured Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">What We Do</h2>
          <p className="text-slate-600 leading-relaxed">
            Sentinel Alpha delivers proprietary systemic risk intelligence to a small group of global hedge funds and institutional capital allocators.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our technology continuously analyses structural stress signals across financial markets, funding systems, and critical infrastructure dependencies — translating complex multi-domain data into clear, actionable early-warning intelligence.
          </p>
          <div className="pt-4 flex flex-col gap-2">
            {["Not a data terminal.", "Not a research shop.", "Not an alternative data vendor."].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-red-500">✕</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Why We Exist</h2>
          <p className="text-slate-600 leading-relaxed">
            The greatest financial losses rarely come from being wrong about direction. They come from being exposed when the system itself becomes unstable.
          </p>
          <p className="text-slate-600 leading-relaxed">
            History shows that systemic events build quietly, accelerate suddenly, and become obvious only after repricing begins.
          </p>
          <p className="text-slate-900 font-semibold italic">
            "Our mission is to move detection earlier — when action is still cheap and liquidity still exists."
          </p>
        </div>

        <div className="space-y-6 md:col-span-2 bg-slate-900 text-white p-12 rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
             <div className="w-64 h-64 border border-white rounded-full flex items-center justify-center">
               <div className="w-48 h-48 border border-white rounded-full flex items-center justify-center">
                 <div className="w-32 h-32 border border-white rounded-full" />
               </div>
             </div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8">Who We Serve</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Global Macro Funds", desc: "Operating in high-leverage environments." },
                { title: "Multi-Strategy Pods", desc: "Across diverse portfolio mandates." },
                { title: "Institutional Allocators", desc: "With significant systemic exposure." }
              ].map((client, i) => (
                <div key={i} className="space-y-2 border-l border-white/20 pl-6">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-blue-400">{client.title}</h4>
                  <p className="text-sm text-slate-400">{client.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-slate-500 font-medium italic">
              * We intentionally maintain a limited client base to preserve signal integrity and information asymmetry.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Our Philosophy</h2>
          <div className="space-y-8">
            {[
              { title: "Clarity over noise", desc: "Fewer signals. Higher conviction. Clear interpretation." },
              { title: "Speed over volume", desc: "Earlier insight matters more than more data." },
              { title: "Trust over scale", desc: "We prioritise deep, long-term partnerships." },
              { title: "Edge is earned", desc: "True advantage comes from proprietary intelligence." }
            ].map((p, idx) => (
              <div key={idx} className="group">
                <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h4>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Our Approach</h2>
          <ul className="space-y-4">
            {[
              "Cross-asset structural stress monitoring",
              "Liquidity and funding fragility detection",
              "Correlation regime shift analysis",
              "Event cascade modelling across financial systems"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-sm text-slate-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Long-Term Vision</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To become the trusted early-warning intelligence layer that the world’s most sophisticated capital checks before sizing systemic risk.
            </p>
          </div>
        </div>
      </div>

      {/* Final Action Section */}
      <section className="bg-white rounded-[2.5rem] border border-slate-200 p-12 text-center card-shadow">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Success Defined</h2>
        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          <p className="text-slate-600">
            For our clients, success means avoiding tail losses others accept as “unavoidable,” hedging before volatility reprices, and deploying capital into dislocations rather than reacting to them.
          </p>
        </div>
        <button 
          onClick={onBack}
          className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          Return to Dashboard
        </button>
      </section>
    </main>
  );
};

export default About;
