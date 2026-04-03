import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[600px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="w-full px-8 py-6 flex justify-between items-center border-b border-white/[0.05] bg-black/40 backdrop-blur-md z-50 sticky top-0">
        <div className="text-xl font-extrabold tracking-widest text-white flex items-center gap-2">
          MODERN GENESIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-medium tracking-normal">TECH</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase text-slate-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
          <a href="#compliance" className="hover:text-white transition-colors">Compliance</a>
        </div>
        <a href="#contact" className="px-6 py-2.5 text-sm font-semibold border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-white transition-all duration-300 rounded shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          Initiate Project
        </a>
      </nav>

      {/* 1. Hero Section */}
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 z-10 relative">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">Registered IT Procurement Vendor</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 max-w-5xl text-white leading-tight">
          Architecting the Future of <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-cyan-600 drop-shadow-sm">
            Digital Infrastructure
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-light">
          Modern Genesis Technologies engineers zero-trust secure software, high-concurrency cloud architectures, and AI integrations for government entities and enterprise sectors demanding absolute precision.
        </p>
      </main>

      {/* 2. Core Competencies (Services) */}
      <section id="services" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 mb-6 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">01</div>
            <h3 className="text-xl text-white font-bold mb-3">Enterprise Software Engineering</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Full-lifecycle development of highly scalable, redundant, and secure web and mobile applications tailored for complex organizational workflows.</p>
          </div>
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 transition-all group">
            <div className="w-12 h-12 mb-6 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl">02</div>
            <h3 className="text-xl text-white font-bold mb-3">AI & Machine Learning Integration</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Implementation of predictive analytics, automated decision engines, and generative AI models to optimize government and corporate resource allocation.</p>
          </div>
          <div className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 mb-6 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">03</div>
            <h3 className="text-xl text-white font-bold mb-3">Cloud & DevOps Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Designing high-availability, load-balanced server infrastructure with automated CI/CD pipelines and military-grade database encryption.</p>
          </div>
        </div>
      </section>

      {/* 3. Proprietary Case Studies */}
      <section id="infrastructure" className="w-full max-w-7xl mx-auto px-6 py-24 z-10 relative border-t border-white/[0.02]">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Deployed Infrastructure</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-blue-500/30 transition-all duration-500 backdrop-blur-sm">
            <div className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Active Deployment</div>
            <h3 className="text-2xl text-white font-bold mb-4">Family Guard Security Protocol</h3>
            <p className="text-slate-400 leading-relaxed mb-6">A secure ecosystem engineered with military-grade end-to-end data encryption, real-time sync protocols, and zero-latency device management for ultimate digital safety.</p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 text-xs border border-white/10 rounded text-slate-300">End-to-End Encryption</span>
              <span className="px-3 py-1 text-xs border border-white/10 rounded text-slate-300">Real-Time Sync</span>
            </div>
          </div>
          
          <div className="group p-10 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm">
            <div className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Active Deployment</div>
            <h3 className="text-2xl text-white font-bold mb-4">Fleet Route Dispatch Logic</h3>
            <p className="text-slate-400 leading-relaxed mb-6">A high-frequency real-time geolocation architecture built with advanced mapping API integrations, WebSocket connections, and concurrent dispatch algorithms.</p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-3 py-1 text-xs border border-white/10 rounded text-slate-300">Geolocation APIs</span>
              <span className="px-3 py-1 text-xs border border-white/10 rounded text-slate-300">Concurrent Routing</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compliance & Stack */}
      <section id="compliance" className="w-full bg-[#030303] border-y border-white/[0.05] z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Regulatory & Technical Compliance</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">Modern Genesis Technologies adheres to strict data sovereignty laws and operates under official Indian government frameworks to ensure secure B2B and B2G procurement.</p>
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-xs font-mono text-slate-300">MSME Udyam Verified</div>
              <div className="px-4 py-2 bg-white/[0.02] border border-white/10 rounded text-xs font-mono text-slate-300">GeM Portal Registered</div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <p className="text-xs font-mono tracking-widest uppercase text-slate-500 mb-4">Approved Technology Stack</p>
            <div className="flex flex-wrap gap-3">
              {['React / Next.js', 'Node.js', 'Python', 'AWS Infrastructure', 'PostgreSQL', 'TensorFlow', 'Docker / Kubernetes'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-full text-sm text-slate-300 hover:border-blue-500/50 transition-colors cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact / Lead Gen */}
      <section id="contact" className="w-full max-w-4xl mx-auto px-6 py-32 z-10 relative text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Initiate a Project</h2>
        <p className="text-slate-400 mb-10">Secure a consultation with our engineering architects to discuss your enterprise requirements.</p>
        
        <form className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-2xl text-left max-w-2xl mx-auto backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Official Name</label>
              <input type="text" className="w-full bg-[#050505] border border-white/10 rounded p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Organization / Department</label>
              <input type="text" className="w-full bg-[#050505] border border-white/10 rounded p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ministry of IT" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Secure Email Address</label>
            <input type="email" className="w-full bg-[#050505] border border-white/10 rounded p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="contact@organization.gov.in" />
          </div>
          <div className="mb-8">
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Project Specifications</label>
            <textarea rows={4} className="w-full bg-[#050505] border border-white/10 rounded p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Outline your technical requirements here..."></textarea>
          </div>
          <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded tracking-wide transition-colors">
            Submit Request for Proposal (RFP)
          </button>
        </form>
      </section>

      {/* 6. Corporate Footer */}
      <footer className="w-full px-8 py-12 border-t border-white/[0.05] bg-[#020202] z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="text-lg font-bold tracking-widest text-white mb-2">
            MODERN GENESIS TECH
          </div>
          <h4 className="font-semibold text-slate-400 text-xs mb-1">Modern Genesis Technologies (OPC) Private Limited</h4>
          <p className="text-slate-500 text-xs">Registered Corporate Office: Chhindwara, Madhya Pradesh, India</p>
          <p className="text-slate-500 text-xs mt-1">CIN: Application Pending | MSME: Pending</p>
        </div>
        
        <div className="flex gap-8 text-xs text-slate-500 font-semibold tracking-wider">
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-white transition-colors">Information Security</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}