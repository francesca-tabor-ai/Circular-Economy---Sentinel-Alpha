
import React from 'react';
import { RiskState } from '../types';

interface RiskGaugeProps {
  score: number; // 0 to 100
  state: RiskState;
}

const RiskGauge: React.FC<RiskGaugeProps> = ({ score, state }) => {
  const getColor = () => {
    if (state === RiskState.GREEN) return '#10b981';
    if (state === RiskState.YELLOW) return '#f59e0b';
    return '#ef4444';
  };

  const rotation = (score / 100) * 180 - 90;

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-3xl border border-slate-200 card-shadow overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: getColor() }} />
      
      <div className="relative w-64 h-32 overflow-hidden mt-4">
        <div className="absolute top-0 left-0 w-64 h-64 border-[14px] border-slate-50 rounded-full" />
        <div 
          className="absolute top-0 left-0 w-64 h-64 border-[14px] rounded-full transition-all duration-1000 ease-out"
          style={{ 
            borderColor: getColor(),
            clipPath: `inset(0 0 50% 0)`,
            transform: `rotate(${rotation}deg)`,
            opacity: 0.8
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full z-10 border-2 border-white" />
        <div 
          className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-slate-900 origin-bottom -translate-x-1/2 transition-transform duration-1000 ease-out z-20"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        />
      </div>

      <div className="mt-6 text-center">
        <span className="block text-5xl font-extrabold tracking-tighter text-slate-900 mono">
          {score.toFixed(1)}%
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold block mt-1">
          Systemic Fragility Index
        </span>
      </div>

      <div className={`mt-6 px-3 py-1 rounded-full text-[10px] font-black tracking-widest border transition-colors duration-500 uppercase ${
        state === RiskState.GREEN ? 'text-emerald-600 border-emerald-100 bg-emerald-50' : 
        state === RiskState.YELLOW ? 'text-amber-600 border-amber-100 bg-amber-50' : 
        'text-red-600 border-red-100 bg-red-50'
      }`}>
        {state} Risk Threshold
      </div>
    </div>
  );
};

export default RiskGauge;
