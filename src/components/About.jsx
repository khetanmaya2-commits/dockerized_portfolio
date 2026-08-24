import React from 'react';
import { BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const edu = profileData.education[0];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-dark-bg/60 border-y border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
            01. Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            A little about me.
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I'm a Computer Science student with a strong focus on cloud computing and DevOps engineering. I enjoy taking full-stack web applications, containerizing them using Docker, provisioning infrastructure on AWS, and automating deployment workflows through modern CI/CD pipelines.
            </p>
            <p>
              My technical journey began with building web applications, but I quickly developed a deep fascination for what happens behind the scenes — how systems scale, stay resilient, automatically recover from failures, and deliver zero-downtime deployments.
            </p>
            <p>
              Whether it's configuring Nginx reverse proxies, optimizing multi-stage Dockerfiles to cut build times in half, or writing Python automation scripts with Boto3 for AWS S3 backups, I approach every project with an emphasis on performance, security, and developer productivity.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-slate-800 dark:text-slate-200">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <span>Passionate about Infrastructure as Code & System Reliability</span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border">
                <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <span>Focused on zero-downtime CI/CD deployment pipelines</span>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Profile Metadata Box */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-dark-surface/90 rounded-2xl border border-slate-200 dark:border-dark-border space-y-8 shadow-sm">
              
              {/* Education Block */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  <BookOpen className="w-4 h-4 text-brand-500" />
                  <span>Education</span>
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-brand-600 dark:text-brand-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {edu.period} • {edu.location}
                </p>
              </div>

              {/* Core Focus Areas */}
              <div className="pt-6 border-t border-slate-200 dark:border-dark-border">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  <Target className="w-4 h-4 text-accent-cyan" />
                  <span>Focus</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Cloud Computing", "DevOps", "AWS", "Docker", "CI/CD Pipelines", "Linux"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-white dark:bg-dark-card text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-dark-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Currently Learning */}
              <div className="pt-6 border-t border-slate-200 dark:border-dark-border">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Currently Learning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Infrastructure as Code", "Cloud Security", "Terraform"].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
