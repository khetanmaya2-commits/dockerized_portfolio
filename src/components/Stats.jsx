import React from 'react';
import { FolderCode, Cloud, Box, GitBranch } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Stats() {
  const iconMap = {
    FolderCode: FolderCode,
    Cloud: Cloud,
    Box: Box,
    GitBranch: GitBranch
  };

  return (
    <section className="py-12 bg-slate-100/70 dark:bg-dark-surface/50 border-b border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {profileData.stats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || FolderCode;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-dark-card/80 border border-slate-200/80 dark:border-dark-border/80 shadow-sm backdrop-blur-sm group hover:border-brand-500/40 transition-all duration-200"
              >
                <div className="p-3 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {stat.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
