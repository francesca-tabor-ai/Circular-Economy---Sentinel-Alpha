import React from 'react';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  const FOUNDER_IMAGE = "https://i.postimg.cc/tYWgbdnb/8-Scorpio-Sentinel-Alpha.png";

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dashboard Button */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
          <button
            onClick={onNavigateToDashboard}
            className="px-6 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
          >
            Dashboard
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
          See Systemic Risk Before Markets Price It
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
          Sentinel Alpha delivers proprietary early-warning intelligence for systemic financial stress — interpreted through the civilisation-systems thinking of founder Professor Amina Solberg.
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          Built for the institutions that cannot afford to be late to structural change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
            Request Private Access
          </button>
          <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-900 hover:bg-slate-50 transition-colors">
            Learn How The System Works
          </button>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-slate-50 border-y border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-600 font-medium">
            Trusted by leaders across capital markets, global systems research, and strategic risk intelligence.
          </p>
          <p className="text-xs text-slate-500 mt-2 font-semibold uppercase tracking-widest">
            Private. Limited. Invitation-first.
          </p>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Markets Do Not Fail Suddenly
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-8">
            They Fail Gradually — Then All At Once.
          </h3>
          <p className="text-xl text-slate-600 mb-6 max-w-3xl mx-auto">
            By the time volatility spikes, spreads widen, and liquidity disappears, the system has already changed.
          </p>
          <div className="inline-block px-6 py-3 bg-slate-100 rounded-lg">
            <p className="text-lg font-semibold text-slate-900">
              Most market tools measure outcomes.
            </p>
            <p className="text-lg font-semibold text-slate-900 mt-2">
              Sentinel Alpha measures structural fragility formation.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Early Detection of Systemic Fragility
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Sentinel Alpha continuously analyses structural stress signals across:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Market microstructure</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Funding and liquidity networks</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Counterparty system stability</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Real-economy and infrastructure dependency stress</h3>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-slate-900 mb-2">
              Then translates those signals into clear, decision-ready intelligence.
            </p>
            <p className="text-lg text-slate-600">
              Not more data.<br />
              Earlier understanding.
            </p>
          </div>
        </div>
      </section>

      {/* THE INTELLIGENCE LAYER SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            What You Receive
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Systemic Fragility Early Warning</h3>
            <p className="text-slate-600">
              Probability-weighted detection of systemic instability formation.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Hidden Correlation Drift Detection</h3>
            <p className="text-slate-600">
              Identify where diversification is quietly breaking.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Liquidity Collapse Radar</h3>
            <p className="text-slate-600">
              See market depth fragility before exit doors narrow.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Event Cascade Simulation</h3>
            <p className="text-slate-600">
              Understand what breaks next — and how fast.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLBERG INTERFACE SECTION */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Intelligence Explained, Not Just Delivered
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              All intelligence is accessible through the Sentinel conversational interface, shaped by the systems philosophy of founder:
            </p>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-900">
                <img src={FOUNDER_IMAGE} alt="Professor Amina Solberg" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Professor Amina Solberg</h3>
                <p className="text-lg text-slate-600">Civilisation Systems Scholar</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-3xl mx-auto mb-12">
              <p className="text-lg font-semibold text-slate-900 leading-relaxed">
                Professor Solberg's work focuses on one core principle:
              </p>
              <p className="text-xl font-bold text-slate-900 mt-4 leading-relaxed">
                Civilisations fail when they optimise for extraction.<br />
                They endure when they learn to circulate value intelligently.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Interpret systemic signals in real-world terms</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Understand second and third order effects</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Connect market behaviour to structural global shifts</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">Maintain strategic clarity during volatility</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PHILOSOPHY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Why Sentinel Alpha Exists
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            During recent global system disruptions, one pattern became clear:
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-3xl mx-auto mb-8">
            <p className="text-xl font-semibold text-slate-900 leading-relaxed">
              The most advanced societies were not those producing the most.<br />
              They were those preserving and circulating value most intelligently.
            </p>
          </div>
          <p className="text-lg text-slate-600 mb-4">
            Sentinel Alpha was built on that insight.
          </p>
          <p className="text-xl font-bold text-slate-900">
            The circular economy is not a sustainability movement.<br />
            It is the next phase of civilisation learning.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Who This Is For
            </h2>
            <p className="text-xl text-slate-600 mb-4">
              Sentinel Alpha is built exclusively for:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Macro Hedge Funds</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Strategy Platforms</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Institutional Capital Allocators</h3>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Systemic Risk Strategy Teams</h3>
            </div>
          </div>
          <p className="text-center text-slate-600 italic">
            We intentionally limit client count to preserve signal integrity and data advantage.
          </p>
        </div>
      </section>

      {/* WHAT SUCCESS LOOKS LIKE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            What Success Looks Like
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Our clients use Sentinel Alpha to:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-900">Hedge before volatility reprices</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-900">Preserve liquidity access during stress</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-900">Avoid correlation shock drawdowns</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <p className="font-semibold text-slate-900">Deploy capital into dislocations rather than react to them</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 md:col-span-2">
            <p className="font-semibold text-slate-900 text-center">Maintain LP confidence through crisis cycles</p>
          </div>
        </div>
      </section>

      {/* DIFFERENT BY DESIGN SECTION */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
              Different By Design
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Sentinel Alpha is not:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 font-bold">✕</span>
                  <p className="text-lg text-slate-700">A data terminal</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 font-bold">✕</span>
                  <p className="text-lg text-slate-700">A research vendor</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-red-500 font-bold">✕</span>
                  <p className="text-lg text-slate-700">An alternative data aggregator</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Sentinel Alpha is:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-emerald-500 font-bold">✓</span>
                  <p className="text-lg text-slate-700">A systemic fragility early-warning intelligence layer</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-emerald-500 font-bold">✓</span>
                  <p className="text-lg text-slate-700">A closed, high-trust signal network</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-emerald-500 font-bold">✓</span>
                  <p className="text-lg text-slate-700">A decision clarity system for high-stakes environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS MODEL SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Access Model
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Sentinel Alpha operates on a limited-partnership model.
          </p>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-3xl mx-auto">
            <p className="text-lg font-semibold text-slate-900 mb-6">We prioritise:</p>
            <ul className="space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span className="text-slate-700">Long-term signal integrity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span className="text-slate-700">Deep institutional partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">•</span>
                <span className="text-slate-700">Shared intelligence advantage across a closed client network</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL SECTION — CLOSING */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Next Phase of Market Intelligence Is Not More Data
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-12">
            It Is Earlier Understanding.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto mb-12">
            <button className="w-full px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-lg">
              Request Private Access
            </button>
            <p className="text-sm text-slate-300 mt-4">
              For institutions operating where systemic timing matters.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-600 font-medium mb-2">
            Sentinel Alpha
          </p>
          <p className="text-xs text-slate-500 uppercase tracking-widest">
            Exclusively for Elite Institutional Capital
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
