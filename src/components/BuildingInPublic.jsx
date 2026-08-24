import React from 'react';
import { Github, GitPullRequest, GitCommit, Star, ExternalLink, Activity } from 'lucide-react';
import { profileData } from '../data/profile';

export default function BuildingInPublic() {
  // Generate 52 weeks of mock contribution activity levels (0 to 4)
  const activityData = Array.from({ length: 52 * 7 }, (_, i) => {
    // Generate organic activity pattern
    const rand = Math.sin(i * 0.1) + Math.cos(i * 0.3) + Math.random();
    if (rand > 1.8) return 4;
    if (rand > 1.2) return 3;
    if (rand > 0.6) return 2;
    if (rand > 0.1) return 1;
    return 0;
  });

  const getColorClass = (level) => {
    switch (level) {
      case 4: return 'bg-emerald-500';
      case 3: return 'bg-emerald-600/80';
      case 2: return 'bg-emerald-700/60';
      case 1: return 'bg-emerald-900/40 dark:bg-emerald-950/60';
      default: return 'bg-slate-200 dark:bg-dark-surface';
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
              07. Open Source & Contributions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Building in public
            </h2>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 md:mt-0 px-4 py-2 text-xs font-mono font-bold text-slate-900 dark:text-white bg-white dark:bg-dark-card hover:bg-slate-100 dark:hover:bg-dark-hover border border-slate-200 dark:border-dark-border rounded-xl shadow-sm transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Follow on GitHub</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* GitHub Statistics Box */}
        <div className="p-6 sm:p-8 bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 mb-8 border-b border-slate-100 dark:border-dark-border/60">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <GitCommit className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">29+</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Commits (Past Year)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">135+</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Pull Requests Merged</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">7+</span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 block">Public Repositories</span>
              </div>
            </div>
          </div>

          {/* GitHub Activity Matrix Simulation */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-500" />
                <span>Contributions & Commit Heatmap (Past 365 Days)</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                Less <span className="inline-block w-2.5 h-2.5 bg-slate-200 dark:bg-dark-surface rounded-sm mx-0.5" />
                <span className="inline-block w-2.5 h-2.5 bg-emerald-900/40 rounded-sm mx-0.5" />
                <span className="inline-block w-2.5 h-2.5 bg-emerald-600/80 rounded-sm mx-0.5" />
                <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-sm mx-0.5" /> More
              </span>
            </div>

            <div className="overflow-x-auto pb-2">
              <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[680px]">
                {activityData.slice(0, 52 * 7).map((level, idx) => (
                  <div
                    key={idx}
                    className={`w-2.5 h-2.5 rounded-sm transition-colors ${getColorClass(level)}`}
                    title={`Day ${idx + 1}: ${level * 3} contributions`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Statement */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-6 pt-4 border-t border-slate-100 dark:border-dark-border/50 leading-relaxed">
            "I believe in building open, transparent software. Writing code publicly holds me accountable to high engineering standards, clean documentation, and automated testing."
          </p>

        </div>

      </div>
    </section>
  );
}
