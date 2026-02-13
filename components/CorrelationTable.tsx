
import React from 'react';
import { CorrelationBreak } from '../types';

interface CorrelationTableProps {
  breaks: CorrelationBreak[];
}

const CorrelationTable: React.FC<CorrelationTableProps> = ({ breaks }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 h-full card-shadow">
      <h3 className="text-sm font-bold text-slate-900 mb-6">Hidden Correlation Drift</h3>
      <div className="space-y-6">
        {breaks.map((b, idx) => (
          <div key={idx} className="flex items-center justify-between group">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-800 mono tracking-tight px-2 py-0.5 bg-slate-50 rounded border border-slate-100 group-hover:border-slate-300 transition-colors">
                  {b.pair[0]}
                </span>
                <span className="text-slate-300">/</span>
                <span className="text-xs font-bold text-slate-800 mono tracking-tight px-2 py-0.5 bg-slate-50 rounded border border-slate-100 group-hover:border-slate-300 transition-colors">
                  {b.pair[1]}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Historical Basis Break</div>
            </div>
            <div className="text-right">
              <div className={`text-xl font-black mono tracking-tighter ${b.drift > 0.3 ? 'text-red-500' : 'text-blue-500'}`}>
                +{b.drift.toFixed(2)}
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Drift Magnitude</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-slate-100">
        <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
          Cross-asset coupling detected in historically divergent portfolios. Adjustment recommended for Global Macro pods.
        </p>
      </div>
    </div>
  );
};

export default CorrelationTable;
