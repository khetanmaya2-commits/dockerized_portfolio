import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  const edu = profileData.education[0];

  return (
    <section className="py-16 bg-white dark:bg-dark-bg/60 border-t border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
                Academic Background
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                Education
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-dark-border gap-2">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">
                  {edu.institution}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 bg-white dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  <span>{edu.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border">
                  <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>{edu.location}</span>
                </span>
              </div>
            </div>

            {/* Coursework Focus Areas */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono uppercase font-semibold text-slate-400">Specialized Coursework & Curriculum Focus:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                {edu.focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-4 border-t border-slate-200 dark:border-dark-border/60">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Academic Honors: {edu.gpa} • Lead of Student Open Source & Cloud Club</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
