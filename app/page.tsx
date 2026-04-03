import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Navigation (Glassmorphism) */}
      <nav className="w-full px-8 py-6 flex justify-between items-center border-b border-white/[0.05] bg-black/20 backdrop-blur-md z-10 sticky top-0">
        <div className="text-xl font-extrabold tracking-widest text-white flex items-center gap-2">
          MODERN GENESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium tracking-normal">TECH</span>
        </div>
        <a href="mailto:contact@moderngenesis.in" className="px-6 py-2.5 text-sm font-semibold border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.0)] hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          Contact Agency
        </a>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-32 z-10">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">Government & Enterprise Ready</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-5xl text-white">
          Architecting the Future of <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-cyan-600 drop-shadow-sm">
            Digital Infrastructure
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-16 leading-relaxed font-light">
          Modern Genesis Technologies engineers zero-trust secure software, high-concurrency geolocation architectures, and AI integrations for entities that demand absolute precision.
        </p>
        
        {/* Glassmorphism Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full text-left">
          {/* Card 1 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm">
            <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">Proprietary Architecture</div>
            <h3 className="text-xl text-white font-bold mb-3 group-hover:text-blue-400 transition-colors">Family Guard Protocol</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Secure ecosystem featuring military-grade end-to-end data encryption, real-time sync protocols, and zero-latency device management.</p>
          </div>
          
          {/* Card 2 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm">
            <div className="text-xs font-mono text-slate-500 mb-3 tracking-widest uppercase">Cloud Infrastructure</div>
            <h3 className="text-xl text-white font-bold mb-3 group-hover:text-cyan-400 transition-colors">Fleet Route Logic</h3>
            <p className="text-sm text-slate-400 leading-relaxed">High-frequency real-time geolocation architecture built with advanced mapping API integrations and concurrent dispatch algorithms.</p>
          </div>
        </div>
      </main>

      {/* Premium Footer */}
      <footer className="w-full px-8 py-8 border-t border-white/[0.05] bg-[#030303] z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h4 className="font-bold text-white tracking-wider text-sm mb-1">MODERN GENESIS TECHNOLOGIES (OPC) PVT. LTD.</h4>
          <p className="text-slate-500 text-xs">Registered Office: Chhindwara, Madhya Pradesh, India</p>
        </div>
        <div className="text-slate-600 text-xs font-mono">
          <p>&copy; {new Date().getFullYear()} MGT. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}