
import React, { useState, useEffect } from 'react';
import { RiskState, FragilityMetric, CorrelationBreak, Insight } from './types';
import RiskGauge from './components/RiskGauge';
import FragilityChart from './components/FragilityChart';
import CorrelationTable from './components/CorrelationTable';
import CascadeSimulator from './components/CascadeSimulator';
import About from './components/About';
import Landing from './components/Landing';
import SolbergInterface from './components/SolbergInterface';
import { getSystemicInsights } from './services/geminiService';

// Updated founder image reference
const FOUNDER_IMAGE = "https://i.postimg.cc/tYWgbdnb/8-Scorpio-Sentinel-Alpha.png";

const MOCK_FRAGILITY: FragilityMetric[] = [
  { date: 'T-6', score: 24, tailProbability: 0.02 },
  { date: 'T-5', score: 28, tailProbability: 0.03 },
  { date: 'T-4', score: 35, tailProbability: 0.05 },
  { date: 'T-3', score: 42, tailProbability: 0.08 },
  { date: 'T-2', score: 38, tailProbability: 0.06 },
  { date: 'T-1', score: 55, tailProbability: 0.15 },
  { date: 'Now', score: 72.4, tailProbability: 0.28 },
];

const MOCK_BREAKS: CorrelationBreak[] = [
  { pair: ['USD/JPY', 'Gold'], historical: -0.85, current: 0.12, drift: 0.97, severity: 'high' },
  { pair: ['S&P 500', 'Crypto'], historical: 0.15, current: 0.78, drift: 0.63, severity: 'medium' },
  { pair: ['US10Y', 'BTC'], historical: -0.32, current: -0.05, drift: 0.27, severity: 'low' },
];

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<'landing' | 'dashboard' | 'about'>('landing');
  const [isSolbergOpen, setIsSolbergOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [apiKeyError, setApiKeyError] = useState(false);
  const [marketContext] = useState("Yield curve inversion deepening, Repo spreads widening, Crude Oil volatility spikes, Liquidity thinning in corporate bond markets.");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setApiKeyError(false);
      try {
        const res = await getSystemicInsights(marketContext);
        setInsights(res);
      } catch (error: any) {
        if (error.message === 'GOOGLE_API_KEY_REQUIRED') {
          setApiKeyError(true);
          setInsights([]);
        } else {
          console.error('Error fetching insights:', error);
          setInsights([]);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [marketContext]);

  if (activePage === 'landing') {
    return <Landing onNavigateToDashboard={() => setActivePage('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 selection:bg-blue-100">
      <div className="stripe-gradient w-full fixed top-0 left-0 z-50" />
      
      {/* Navigation / Header */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-1 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActivePage('dashboard')}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-slate-900 group-hover:border-blue-600 transition-colors">
              <img src={FOUNDER_IMAGE} alt="Amina Solberg" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none">Sentinel Alpha</h1>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Institutional Risk Protocol</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <button 
                onClick={() => setActivePage('dashboard')} 
                className={`transition-colors ${activePage === 'dashboard' ? 'text-slate-900' : 'hover:text-slate-900'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActivePage('about')} 
                className={`transition-colors ${activePage === 'about' ? 'text-slate-900' : 'hover:text-slate-900'}`}
              >
                About
              </button>
              <button 
                onClick={() => setIsSolbergOpen(true)}
                className="hover:text-slate-900 transition-colors text-blue-600 font-semibold"
              >
                Solberg AI
              </button>
            </div>
            <div className="h-6 w-px bg-slate-200 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-tighter mono">System Nominal</span>
            </div>
          </div>
        </div>
      </nav>

      {activePage === 'dashboard' ? (
        <main className="max-w-7xl mx-auto p-6 md:p-8 mt-4 animate-in fade-in duration-500">
          {/* Top Section: Dashboard Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Main Risk Display */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               <RiskGauge score={72.4} state={RiskState.RED} />
               
               {/* Liquidity Radar */}
               <div className="bg-white rounded-3xl border border-slate-200 p-6 card-shadow">
                 <h3 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                   Liquidity Collapse Radar
                   <span className="bg-red-50 text-red-600 text-[10px] px-1.5 py-0.5 rounded font-bold">WARNING</span>
                 </h3>
                 <div className="space-y-5">
                   {[
                     { venue: 'CME Treasury Futures', depth: 45, trend: 'decay' },
                     { venue: 'Eurex Bunds', depth: 62, trend: 'stable' },
                     { venue: 'NY Fed Repo Window', depth: 28, trend: 'decay' }
                   ].map((item, i) => (
                     <div key={i} className="space-y-2">
                       <div className="flex justify-between text-xs font-semibold text-slate-500">
                         <span className="mono uppercase">{item.venue}</span>
                         <span className={item.trend === 'decay' ? 'text-red-500' : 'text-emerald-500'}>
                           {item.depth}% Depth
                         </span>
                       </div>
                       <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                         <div 
                           className={`h-full ${item.trend === 'decay' ? 'bg-red-500' : 'bg-emerald-500'} transition-all duration-1000`} 
                           style={{ width: `${item.depth}%` }} 
                         />
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* Visualization Section */}
            <div className="lg:col-span-8 space-y-8">
              <FragilityChart data={MOCK_FRAGILITY} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CorrelationTable breaks={MOCK_BREAKS} />
                <CascadeSimulator />
              </div>
            </div>
          </div>

          {/* AI Insights - Briefing Section */}
          <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden card-shadow">
            <div className="border-b border-slate-100 px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Intelligence Briefing</h2>
                <p className="text-sm text-slate-500">Proprietary systemic signal synthesis for global macro allocation.</p>
              </div>
              {loading && (
                <div className="flex items-center gap-2 text-blue-500 text-xs font-bold mono uppercase tracking-widest">
                  <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Analyzing Market Context
                </div>
              )}
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {apiKeyError ? (
                <div className="col-span-3 py-12 text-center">
                  <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h3 className="text-lg font-bold text-amber-900">Google API Key Required</h3>
                    </div>
                    <p className="text-sm text-amber-800 mb-4">
                      This feature requires a Google Gemini API key to generate systemic risk insights.
                    </p>
                    <p className="text-xs text-amber-700">
                      Please set your <code className="bg-amber-100 px-2 py-1 rounded">GEMINI_API_KEY</code> in <code className="bg-amber-100 px-2 py-1 rounded">.env.local</code> to enable this feature.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {insights.map((insight, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold mono">
                          0{idx + 1}
                        </span>
                        <div className="h-px flex-1 bg-slate-100" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          {(insight.confidence * 100).toFixed(0)}% Confidence
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {insight.content}
                      </p>
                    </div>
                  ))}
                  {!loading && insights.length === 0 && !apiKeyError && (
                    <div className="col-span-3 py-12 text-center text-slate-400 text-sm font-medium">
                      Scanning global venues for stress anomalies...
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>
      ) : (
        <About onBack={() => setActivePage('dashboard')} />
      )}

      {/* Floating Action Button for Solberg Interface */}
      <button 
        onClick={() => setIsSolbergOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group p-1 border border-slate-200 overflow-hidden"
      >
        <img src={FOUNDER_IMAGE} alt="Amina Solberg" className="w-full h-full object-cover rounded-full" />
        <div className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Summon Solberg AI
        </div>
      </button>

      {/* Solberg Interface Drawer */}
      <SolbergInterface 
        isOpen={isSolbergOpen} 
        onClose={() => setIsSolbergOpen(false)} 
        currentPage={activePage}
      />

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-slate-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">Sentinel Alpha</span>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Exclusively for Elite Institutional Capital</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Risk Disclosure</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
