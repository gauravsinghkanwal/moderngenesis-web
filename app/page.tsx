import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500 selection:text-white flex flex-col">
      
      {/* Navigation */}
      <nav className="w-full p-6 flex justify-between items-center border-b border-slate-800">
        <div className="text-xl font-bold tracking-wider text-white">
          MODERN GENESIS <span className="text-emerald-500">TECH</span>
        </div>
        <a href="mailto:contact@moderngenesis.in" className="px-5 py-2 text-sm font-medium border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 transition-colors rounded">
          Contact Us
        </a>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-24">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          Government & Enterprise Solutions
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl">
          Architecting the Future of <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Digital Infrastructure</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Modern Genesis Technologies delivers secure, scalable custom software, real-time geolocation architectures, and AI integrations anywhere everywhere.
        </p>
        
        {/* Case Studies Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full mt-8 text-left">
          <div className="p-6 rounded-lg bg-slate-900 border border-slate-800">
            <h3 className="text-emerald-400 font-bold mb-2">Enterprise Case Study: Family Guard</h3>
            <p className="text-sm text-slate-400">Secure Family Digital Infrastructure featuring end-to-end data encryption and real-time sync protocols.</p>
          </div>
          <div className="p-6 rounded-lg bg-slate-900 border border-slate-800">
            <h3 className="text-emerald-400 font-bold mb-2">Enterprise Case Study: Fleet Route</h3>
            <p className="text-sm text-slate-400">Real-Time Geolocation architecture with mapping API integrations and concurrent dispatch logic.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 border-t border-slate-800 bg-slate-950 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div>
          <p className="font-semibold text-slate-300">Modern Genesis Technologies (OPC) Private Limited</p>
          <p>Chhindwara, Madhya Pradesh, India</p>
        </div>
        <div>
          <p>&copy; {new Date().getFullYear()} Modern Genesis Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}