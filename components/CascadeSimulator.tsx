
import React, { useState } from 'react';

const SCENARIOS = [
  { 
    id: 1, 
    trigger: "Tether De-peg (10%)", 
    chain: ["Crypto Liquidation", "Stablecoin Exodus", "Repo Market Tightening", "Treasury Vol Spike"] 
  },
  { 
    id: 2, 
    trigger: "Major Exchange Cyber-Attack", 
    chain: ["Order Book Vanishing", "Payment Rails Latency", "FX Dislocation", "Central Bank Intervention"] 
  },
  { 
    id: 3, 
    trigger: "UST 10Y Rate Spike > 5.5%", 
    chain: ["Corporate Credit Stress", "Carry Trade Unwind", "Emerging Market Outflow", "Equity Tail Hedge Repricing"] 
  }
];

const CascadeSimulator: React.FC = () => {
  const [selected, setSelected] = useState(SCENARIOS[0]);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 card-shadow h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h3 className="text-sm font-bold text-slate-900">Event Cascade Simulator</h3>
        <select 
          onChange={(e) => setSelected(SCENARIOS.find(s => s.id === parseInt(e.target.value)) || SCENARIOS[0])}
          className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
        >
          {SCENARIOS.map(s => <option key={s.id} value={s.id}>{s.trigger}</option>)}
        </select>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-[19px] top-8 bottom-12 w-0.5 bg-slate-100" />
        
        <div className="space-y-6 relative">
          <div className="flex items-start gap-6">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 border border-red-100 flex items-center justify-center font-black text-lg shadow-sm z-10 shrink-0">
              !
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Primary Trigger</div>
              <div className="text-sm font-bold text-slate-900">{selected.trigger}</div>
            </div>
          </div>

          {selected.chain.map((step, idx) => (
            <div key={idx} className="flex items-start gap-6 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center z-10 group-hover:border-blue-400 group-hover:text-blue-500 transition-all shadow-sm shrink-0">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-blue-500 mono">{idx + 1}</span>
              </div>
              <div className="pt-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Propagation Node</div>
                <div className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 mt-8">
        <p className="text-[11px] text-blue-600 leading-relaxed font-semibold italic flex gap-2">
          <span className="not-italic">ℹ</span>
          "Systemic correlation detected at Node 3. Projected contagion timeline: 18-24 hours."
        </p>
      </div>
    </div>
  );
};

export default CascadeSimulator;
