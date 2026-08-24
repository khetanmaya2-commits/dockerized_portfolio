import React from 'react';
import { Award, ExternalLink, Cloud, Globe, Box, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  const iconMap = {
    Cloud: Cloud,
    Globe: Globe,
    Box: Box
  };

  return (
    <section id="certifications" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
            06. Credentials & Badges
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert, idx) => {
            const IconComp = iconMap[cert.icon] || Award;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm hover:border-brand-500/40 transition-all duration-200 group"
              >
                <div>
                  {/* Top Icon & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-surface text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-dark-border">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-600 dark:text-brand-400 mb-4">
                    {cert.issuer}
                  </p>

                  {/* Skills Covered List */}
                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Domains Validated:</span>
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Credential Verification Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-dark-border/60">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
