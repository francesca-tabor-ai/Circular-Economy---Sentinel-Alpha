
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { RiskState, FragilityMetric, CorrelationBreak, Insight } from './types';
import RiskGauge from './components/RiskGauge';
import FragilityChart from './components/FragilityChart';
import CorrelationTable from './components/CorrelationTable';
import CascadeSimulator from './components/CascadeSimulator';
import About from './components/About';
import SolbergInterface from './components/SolbergInterface';

// Lazy load Landing page
const Landing = lazy(() => import('./components/Landing'));
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

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

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
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <Landing onNavigateToDashboard={() => setActivePage('dashboard')} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <div className="stripe-gradient w-full fixed top-0 left-0 z-50" />
      
      {/* Navigation / Header */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-[#e5e7eb] sticky top-1 z-40 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActivePage('dashboard')}
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0a0a0a] group-hover:border-[#4b5563] motion-subtle group-hover:scale-105 transition-transform duration-300">
              <img 
                src={FOUNDER_IMAGE} 
                alt="Amina Solberg" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-[#0a0a0a] leading-none">Sentinel Alpha</h1>
              <span className="text-[10px] text-[#6b7280] font-semibold uppercase tracking-widest">Institutional Risk Protocol</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-sm font-medium text-[#6b7280]">
              <button 
                onClick={() => setActivePage('dashboard')} 
                className={`motion-subtle relative ${activePage === 'dashboard' ? 'text-[#0a0a0a] font-semibold' : 'hover:text-[#1a1a1a]'} transition-all duration-200 hover:scale-105 active:scale-95`}
              >
                Dashboard
                {activePage === 'dashboard' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0a0a0a] animate-in slide-in-from-left duration-300" />
                )}
              </button>
              <button 
                onClick={() => setActivePage('about')} 
                className={`motion-subtle relative ${activePage === 'about' ? 'text-[#0a0a0a] font-semibold' : 'hover:text-[#1a1a1a]'} transition-all duration-200 hover:scale-105 active:scale-95`}
              >
                About
                {activePage === 'about' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0a0a0a] animate-in slide-in-from-left duration-300" />
                )}
              </button>
              <button 
                onClick={() => setIsSolbergOpen(true)}
                className="hover:text-[#1a1a1a] motion-subtle font-semibold transition-all duration-200 hover:scale-105 active:scale-95 relative group"
              >
                Solberg AI
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0a0a0a] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            </div>
            <div className="h-6 w-px bg-[#e5e7eb] hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="text-xs font-semibold text-[#4b5563] uppercase tracking-tighter mono">System Nominal</span>
            </div>
          </div>
        </div>
      </nav>

      {activePage === 'dashboard' ? (
        <main className="max-w-7xl mx-auto p-8 md:p-12 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Top Section: Dashboard Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            
            {/* Main Risk Display */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               <RiskGauge score={72.4} state={RiskState.RED} />
               
               {/* Liquidity Radar */}
               <div className="bg-white rounded-ui-xl border border-[#e5e7eb] p-8 card-shadow">
                 <h3 className="text-sm font-bold text-[#0a0a0a] mb-6 flex items-center gap-2">
                   Liquidity Collapse Radar
                   <span className="bg-[#fef2f2] text-[#dc2626] text-[10px] px-2 py-1 rounded-ui font-bold">WARNING</span>
                 </h3>
                 <div className="space-y-5">
                   {[
                     { venue: 'CME Treasury Futures', depth: 45, trend: 'decay' },
                     { venue: 'Eurex Bunds', depth: 62, trend: 'stable' },
                     { venue: 'NY Fed Repo Window', depth: 28, trend: 'decay' }
                   ].map((item, i) => (
                     <div key={i} className="space-y-2">
                       <div className="flex justify-between text-xs font-semibold text-[#6b7280]">
                         <span className="mono uppercase">{item.venue}</span>
                         <span className={item.trend === 'decay' ? 'text-[#dc2626]' : 'text-[#10b981]'}>
                           {item.depth}% Depth
                         </span>
                       </div>
                       <div className="h-2 bg-[#f3f4f6] rounded-full overflow-hidden">
                         <div 
                           className={`h-full motion-subtle ${item.trend === 'decay' ? 'bg-[#dc2626]' : 'bg-[#10b981]'}`} 
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
          <section className="bg-white rounded-ui-xl border border-[#e5e7eb] overflow-hidden card-shadow">
            <div className="border-b border-[#f3f4f6] px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0a0a0a] tracking-tight mb-2">Intelligence Briefing</h2>
                <p className="text-sm text-[#6b7280] leading-relaxed">Proprietary systemic signal synthesis for global macro allocation.</p>
              </div>
              {loading && (
                <div className="flex items-center gap-2 text-[#3b82f6] text-xs font-bold mono uppercase tracking-widest">
                  <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Analyzing Market Context
                </div>
              )}
            </div>
            
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
              {apiKeyError ? (
                <div className="col-span-3 py-12 text-center">
                  <div className="bg-[#fef3c7] border-2 border-[#fbbf24] rounded-ui-xl p-8 max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <svg className="w-8 h-8 text-[#d97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <h3 className="text-lg font-bold text-[#78350f]">Google API Key Required</h3>
                    </div>
                    <p className="text-sm text-[#92400e] mb-4 leading-relaxed">
                      This feature requires a Google Gemini API key to generate systemic risk insights.
                    </p>
                    <p className="text-xs text-[#78350f] leading-relaxed">
                      Please set your <code className="bg-[#fef3c7] px-2 py-1 rounded-ui font-mono">GEMINI_API_KEY</code> in <code className="bg-[#fef3c7] px-2 py-1 rounded-ui font-mono">.env.local</code> to enable this feature.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {insights.map((insight, idx) => (
                    <div 
                      key={idx} 
                      className="space-y-4 group cursor-default hover:transform hover:scale-[1.02] transition-all duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-ui bg-[#eff6ff] text-[#3b82f6] flex items-center justify-center text-[10px] font-bold mono group-hover:bg-[#3b82f6] group-hover:text-white transition-colors duration-300">
                          0{idx + 1}
                        </span>
                        <div className="h-px flex-1 bg-[#f3f4f6] group-hover:bg-[#e5e7eb] transition-colors duration-300" />
                        <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest group-hover:text-[#6b7280] transition-colors duration-300">
                          {(insight.confidence * 100).toFixed(0)}% Confidence
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#0a0a0a] leading-snug group-hover:text-[#3b82f6] transition-colors duration-300">
                        {insight.title}
                      </h4>
                      <p className="text-sm text-[#4b5563] leading-relaxed font-normal">
                        {insight.content}
                      </p>
                    </div>
                  ))}
                  {!loading && insights.length === 0 && !apiKeyError && (
                    <div className="col-span-3 py-12 text-center text-[#9ca3af] text-sm font-medium">
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
        className="fixed bottom-8 right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 motion-subtle z-40 group p-1 border border-[#e5e7eb] overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 hover:rotate-3"
      >
        <img 
          src={FOUNDER_IMAGE} 
          alt="Amina Solberg" 
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute right-full mr-4 px-3 py-1.5 bg-[#0a0a0a] text-white text-[10px] font-bold uppercase tracking-widest rounded-ui opacity-0 group-hover:opacity-100 motion-subtle pointer-events-none whitespace-nowrap transform translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          Summon Solberg AI
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-300" />
      </button>

      {/* Solberg Interface Drawer */}
      <SolbergInterface 
        isOpen={isSolbergOpen} 
        onClose={() => setIsSolbergOpen(false)} 
        currentPage={activePage}
      />

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16 mt-16 border-t border-[#e5e7eb]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-[#9ca3af] tracking-[0.2em] uppercase">Sentinel Alpha</span>
            <div className="h-4 w-px bg-[#e5e7eb]" />
            <span className="text-[10px] font-medium text-[#6b7280] uppercase tracking-widest">Exclusively for Elite Institutional Capital</span>
          </div>
          <div className="flex gap-8 text-[11px] font-bold text-[#6b7280] uppercase tracking-widest">
            <a href="#" className="hover:text-[#0a0a0a] motion-subtle">Privacy Protocol</a>
            <a href="#" className="hover:text-[#0a0a0a] motion-subtle">Risk Disclosure</a>
            <a href="#" className="hover:text-[#0a0a0a] motion-subtle">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
