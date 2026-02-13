import React, { useEffect, useState } from 'react';

interface LandingProps {
  onNavigateToDashboard: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNavigateToDashboard }) => {
  const FOUNDER_IMAGE = "https://i.postimg.cc/tYWgbdnb/8-Scorpio-Sentinel-Alpha.png";
  const [imageLoaded, setImageLoaded] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Dashboard Button */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
          <button
            onClick={onNavigateToDashboard}
            className="px-6 py-2.5 bg-[#0a0a0a] text-white text-sm font-semibold rounded-ui hover:bg-[#1a1a1a] motion-subtle"
          >
            Dashboard
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with lazy loading */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: 'url(https://tripxl.com/blog/wp-content/uploads/2025/02/Best-Time-To-Visit-49.jpg)'
          }}
        >
          {/* Preload image */}
          <img 
            src="https://tripxl.com/blog/wp-content/uploads/2025/02/Best-Time-To-Visit-49.jpg"
            alt=""
            className="hidden"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
          />
        </div>
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[#1a1a1a] animate-pulse" />
        )}
        
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-[#0a0a0a]/70 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Content */}
        <div className={`relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-40 transform transition-all duration-700 ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1] hover:scale-105 transition-transform duration-300">
            See Circular Economy Risk Before It Becomes Obvious
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed font-normal">
            Sentinel Alpha delivers proprietary early-warning intelligence for circular economy transitions — interpreted through the civilisation-systems thinking of founder Professor Amina Solberg.
          </p>
          <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto leading-relaxed">
            Built for organizations committed to the circular economy transition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-ui hover:bg-[#f9fafb] motion-subtle hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg relative overflow-hidden group">
              <span className="relative z-10">Request Private Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-ui border-2 border-white/80 hover:bg-white/10 hover:border-white motion-subtle hover:scale-105 active:scale-95 transition-all duration-200 hover:shadow-lg">
              Learn How The System Works
            </button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4b5563] font-medium leading-relaxed">
            Trusted by leaders across circular economy organizations, sustainability systems research, and strategic resource intelligence.
          </p>
          <p className="text-xs text-[#6b7280] mt-3 font-semibold uppercase tracking-widest">
            Private. Limited. Invitation-first.
          </p>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6 leading-tight">
            Circular Systems Do Not Fail Suddenly
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-8 leading-tight">
            They Fail Gradually — Then All At Once.
          </h3>
          <p className="text-xl text-[#4b5563] mb-8 max-w-3xl mx-auto leading-relaxed">
            By the time resource constraints tighten, supply chains break, and value circulation stops, the circular system has already changed.
          </p>
          <div className="inline-block px-8 py-5 bg-[#f3f4f6] rounded-ui-lg">
            <p className="text-lg font-semibold text-[#0a0a0a]">
              Most circular economy tools measure outcomes.
            </p>
            <p className="text-lg font-semibold text-[#0a0a0a] mt-2">
              Sentinel Alpha measures circular system fragility formation.
            </p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION SECTION */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Early Detection of Circular System Fragility
            </h2>
            <p className="text-xl text-[#4b5563] mb-12 max-w-3xl mx-auto leading-relaxed">
              Sentinel Alpha continuously analyses structural signals across circular economy systems:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">Resource flow networks</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">Material cycle integrity</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">Value circulation stability</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow">
              <h3 className="text-xl font-bold text-[#0a0a0a] mb-4">Circular infrastructure dependencies</h3>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-[#0a0a0a] mb-3 leading-relaxed">
              Then translates those signals into clear, decision-ready intelligence.
            </p>
            <p className="text-lg text-[#4b5563] leading-relaxed">
              Not more data.<br />
              Earlier understanding of circular economy transitions.
            </p>
          </div>
        </div>
      </section>

      {/* THE INTELLIGENCE LAYER SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
            What You Receive
          </h2>
        </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f9fafb] p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow hover:border-[#3b82f6] hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#3b82f6] transition-colors duration-300">Circular System Fragility Early Warning</h3>
              <p className="text-[#4b5563] leading-relaxed">
                Probability-weighted detection of circular economy system instability formation.
              </p>
            </div>
            <div className="bg-[#f9fafb] p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow hover:border-[#10b981] hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#10b981] transition-colors duration-300">Resource Flow Drift Detection</h3>
              <p className="text-[#4b5563] leading-relaxed">
                Identify where circular value networks are quietly breaking.
              </p>
            </div>
            <div className="bg-[#f9fafb] p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow hover:border-[#06b6d4] hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#06b6d4] transition-colors duration-300">Material Cycle Collapse Radar</h3>
              <p className="text-[#4b5563] leading-relaxed">
                See circular infrastructure fragility before resource flows stop.
              </p>
            </div>
            <div className="bg-[#f9fafb] p-8 rounded-ui-xl border border-[#e5e7eb] card-shadow hover:border-[#6366f1] hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4 group-hover:text-[#6366f1] transition-colors duration-300">Circular Economy Cascade Simulation</h3>
              <p className="text-[#4b5563] leading-relaxed">
                Understand what breaks next in circular systems — and how fast.
              </p>
            </div>
          </div>
      </section>

      {/* THE SOLBERG INTERFACE SECTION */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6 leading-tight">
              Intelligence Explained, Not Just Delivered
            </h2>
            <p className="text-xl text-[#4b5563] mb-10 max-w-3xl mx-auto leading-relaxed">
              All intelligence is accessible through the Sentinel conversational interface, shaped by the systems philosophy of founder:
            </p>
            <div className="flex flex-col items-center gap-4 mb-12">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0a0a0a] hover:scale-110 hover:border-[#3b82f6] transition-all duration-300 cursor-pointer group">
                <img 
                  src={FOUNDER_IMAGE} 
                  alt="Professor Amina Solberg" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0a0a0a]">Professor Amina Solberg</h3>
                <p className="text-lg text-[#4b5563]">Civilisation Systems Scholar</p>
              </div>
            </div>
            <div className="bg-white p-10 rounded-ui-xl border border-[#e5e7eb] max-w-3xl mx-auto mb-16 card-shadow">
              <p className="text-lg font-semibold text-[#0a0a0a] leading-relaxed">
                Professor Solberg's work focuses on one core principle:
              </p>
              <p className="text-xl font-bold text-[#0a0a0a] mt-4 leading-relaxed">
                Civilisations fail when they optimise for extraction.<br />
                They endure when they learn to circulate value intelligently.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
              <h4 className="font-bold text-[#0a0a0a] mb-2">Interpret systemic signals in real-world terms</h4>
            </div>
            <div className="bg-white p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
              <h4 className="font-bold text-[#0a0a0a] mb-2">Understand second and third order effects</h4>
            </div>
            <div className="bg-white p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
              <h4 className="font-bold text-[#0a0a0a] mb-2">Connect market behaviour to structural global shifts</h4>
            </div>
            <div className="bg-white p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
              <h4 className="font-bold text-[#0a0a0a] mb-2">Maintain strategic clarity during volatility</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER PHILOSOPHY SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
            Why Sentinel Alpha Exists
          </h2>
          <p className="text-xl text-[#4b5563] mb-8 max-w-3xl mx-auto leading-relaxed">
            During recent global system disruptions, one pattern became clear:
          </p>
          <div className="bg-[#f9fafb] p-10 rounded-ui-xl border border-[#e5e7eb] max-w-3xl mx-auto mb-8 card-shadow">
            <p className="text-xl font-semibold text-[#0a0a0a] leading-relaxed">
              The most advanced societies were not those producing the most.<br />
              They were those preserving and circulating value most intelligently.
            </p>
          </div>
          <p className="text-lg text-[#4b5563] mb-4 leading-relaxed">
            Sentinel Alpha was built on that insight.
          </p>
          <p className="text-xl font-bold text-[#0a0a0a] leading-relaxed">
            The circular economy is not a sustainability movement.<br />
            It is the next phase of civilisation learning.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
              Who This Is For
            </h2>
            <p className="text-xl text-[#4b5563] mb-4 leading-relaxed">
              Sentinel Alpha is built exclusively for:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] text-center card-shadow">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">Circular Economy Organizations</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] text-center card-shadow">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">Sustainability Leaders</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] text-center card-shadow">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">Resource System Managers</h3>
            </div>
            <div className="bg-white p-8 rounded-ui-xl border border-[#e5e7eb] text-center card-shadow">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">Circular Transition Teams</h3>
            </div>
          </div>
          <p className="text-center text-[#4b5563] italic leading-relaxed">
            We intentionally limit client count to preserve signal integrity and circular economy intelligence advantage.
          </p>
        </div>
      </section>

      {/* WHAT SUCCESS LOOKS LIKE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
            What Success Looks Like
          </h2>
          <p className="text-xl text-[#4b5563] mb-12 leading-relaxed">
            Our clients use Sentinel Alpha to:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f9fafb] p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
            <p className="font-semibold text-[#0a0a0a]">Adapt before resource constraints tighten</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
            <p className="font-semibold text-[#0a0a0a]">Preserve value circulation during transitions</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
            <p className="font-semibold text-[#0a0a0a]">Avoid circular system breakdowns</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-ui-lg border border-[#e5e7eb] card-shadow">
            <p className="font-semibold text-[#0a0a0a]">Deploy resources into circular opportunities rather than react to disruptions</p>
          </div>
          <div className="bg-[#f9fafb] p-6 rounded-ui-lg border border-[#e5e7eb] md:col-span-2 card-shadow">
            <p className="font-semibold text-[#0a0a0a] text-center">Maintain stakeholder confidence through circular economy transitions</p>
          </div>
        </div>
      </section>

      {/* DIFFERENT BY DESIGN SECTION */}
      <section className="bg-[#f9fafb] py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-12 leading-tight">
              Different By Design
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">Sentinel Alpha is not:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#dc2626] font-bold">✕</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">A data terminal</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#dc2626] font-bold">✕</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">A research vendor</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#dc2626] font-bold">✕</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">An alternative data aggregator</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">Sentinel Alpha is:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#10b981] font-bold">✓</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">A circular economy fragility early-warning intelligence layer</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#10b981] font-bold">✓</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">A closed, high-trust circular economy signal network</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-[#10b981] font-bold">✓</span>
                  <p className="text-lg text-[#1a1a1a] leading-relaxed">A decision clarity system for circular economy transitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS MODEL SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 md:py-40">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8 leading-tight">
            Access Model
          </h2>
          <p className="text-xl text-[#4b5563] mb-8 max-w-3xl mx-auto leading-relaxed">
            Sentinel Alpha operates on a limited-partnership model.
          </p>
          <div className="bg-[#f9fafb] p-10 rounded-ui-xl border border-[#e5e7eb] max-w-3xl mx-auto card-shadow">
            <p className="text-lg font-semibold text-[#0a0a0a] mb-6">We prioritise:</p>
            <ul className="space-y-3 text-left max-w-xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">•</span>
                <span className="text-[#1a1a1a] leading-relaxed">Long-term circular economy signal integrity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">•</span>
                <span className="text-[#1a1a1a] leading-relaxed">Deep circular economy partnerships</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold">•</span>
                <span className="text-[#1a1a1a] leading-relaxed">Shared circular economy intelligence advantage across a closed client network</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL SECTION — CLOSING */}
      <section className="gradient-signature text-white py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]/90"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The Next Phase of Circular Economy Intelligence Is Not More Data
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-16 leading-tight">
            It Is Earlier Understanding of Circular Transitions.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-10 rounded-ui-xl border border-white/20 max-w-2xl mx-auto">
            <button className="w-full px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-ui hover:bg-[#f9fafb] motion-subtle text-lg">
              Request Private Access
            </button>
            <p className="text-sm text-white/80 mt-5 leading-relaxed">
              For organizations operating where circular economy timing matters.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f9fafb] border-t border-[#e5e7eb] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-[#4b5563] font-medium mb-2">
            Sentinel Alpha
          </p>
          <p className="text-xs text-[#6b7280] uppercase tracking-widest">
            Exclusively for Circular Economy Organizations
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
