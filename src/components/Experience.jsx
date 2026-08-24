import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
            04. Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            Experience & Internships
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-8 border-l-2 border-slate-200 dark:border-dark-border space-y-12">
          {profileData.experience.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 border-slate-50 dark:border-dark-bg group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-dark-border/60 gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 text-xs font-mono font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-dark-surface px-3 py-1.5 rounded-lg border border-slate-200 dark:border-dark-border">
                      <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-mono uppercase font-semibold text-slate-400 tracking-wider">Key Contributions & Impact:</h4>
                  {exp.achievements.map((item, achievementIdx) => (
                    <div key={achievementIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-dark-border/50">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-dark-surface text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
