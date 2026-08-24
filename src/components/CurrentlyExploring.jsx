import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function CurrentlyExploring() {
  const techList = profileData.currentlyExploring;
  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...techList, ...techList, ...techList];

  return (
    <section className="py-12 bg-slate-900 text-white overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-brand-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>CURRENTLY EXPLORING & ADVANCING SKILLS</span>
        </div>
        <span className="text-xs font-mono text-slate-400 hidden sm:inline">2026 Tech Focus</span>
      </div>

      {/* Infinite Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-2">
        
        {/* Left/Right Fading Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-track flex items-center gap-4">
          {marqueeItems.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-sm font-mono font-medium text-slate-200 hover:border-brand-400/60 hover:text-white transition-colors shrink-0"
            >
              <Terminal className="w-4 h-4 text-brand-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
