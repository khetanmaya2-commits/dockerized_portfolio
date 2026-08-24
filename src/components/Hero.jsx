import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, Cloud, Server, Box, Cpu, GitBranch, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern-light dark:bg-grid-pattern">
      {/* Glow effect backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-accent-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profileData.availability}</span>
            </div>

            {/* Sub-label */}
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold text-brand-600 dark:text-brand-400 mb-2">
              HELLO, I'M
            </span>

            {/* Large Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-3">
              {profileData.name}
            </h1>

            {/* Role Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-slate-700 dark:text-slate-300 mb-6 flex items-center gap-3">
              <span>{profileData.title}</span>
              <span className="text-slate-400 dark:text-slate-600 font-light">|</span>
              <span className="text-brand-600 dark:text-brand-400 font-mono text-lg sm:text-xl">AWS & Docker</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              "{profileData.bio}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-slate-900 hover:bg-brand-600 dark:hover:bg-brand-400 dark:hover:text-slate-900 rounded-xl shadow-lg shadow-slate-900/10 transition-all duration-200 group active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
  href={profileData.resumeUrl}
  download
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono text-slate-700 dark:text-slate-200 bg-white dark:bg-dark-surface hover:bg-slate-100 dark:hover:bg-dark-hover border border-slate-200 dark:border-dark-border rounded-xl shadow-sm transition-all duration-200 active:scale-95"
>
  <FileText className="w-4 h-4 text-brand-500" />
  <span>Download Resume</span>
</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-dark-border/80 w-full">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-hover border border-slate-200 dark:border-dark-border rounded-lg transition-all hover:scale-105"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-hover border border-slate-200 dark:border-dark-border rounded-lg transition-all hover:scale-105"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100 dark:bg-dark-surface hover:bg-slate-200 dark:hover:bg-dark-hover border border-slate-200 dark:border-dark-border rounded-lg transition-all hover:scale-105"
                  title="Send Email"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Cloud & DevOps Architecture Visual Element */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 bg-white/70 dark:bg-dark-card/90 rounded-2xl border border-slate-200 dark:border-dark-border shadow-2xl backdrop-blur-xl">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">cloud-topology.yaml</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>HEALTHY</span>
                </div>
              </div>

              {/* Architecture Node Diagram */}
              <div className="flex flex-col items-center gap-4">
                
                {/* Cloud Top Level */}
                <div className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-brand-500/10 to-indigo-500/10 dark:from-brand-500/20 dark:to-indigo-500/20 border border-brand-500/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-500 text-white rounded-lg shadow-md shadow-brand-500/30">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white">Cloud Infrastructure</h4>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">AWS AWS US-East-1</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-brand-600 dark:text-brand-400 font-semibold px-2 py-1 bg-brand-500/10 rounded">99.99%</span>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-0.5 h-6 bg-gradient-to-b from-brand-500 to-accent-cyan relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-500 animate-ping" />
                </div>

                {/* DevOps Orchestration Tier */}
                <div className="w-full p-3.5 bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-accent-cyan" />
                      <span className="font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">DEVOPS PIPELINE</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">AUTO-DEPLOY</span>
                  </div>

                  {/* 3 Tech Columns */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="flex flex-col items-center p-2 bg-white dark:bg-dark-card rounded-lg border border-slate-200 dark:border-dark-border text-center">
                      <Box className="w-4 h-4 text-blue-500 mb-1" />
                      <span className="font-display text-xs font-semibold text-slate-800 dark:text-slate-200">Docker</span>
                      <span className="text-[10px] text-slate-400 font-mono">Containers</span>
                    </div>

                    <div className="flex flex-col items-center p-2 bg-white dark:bg-dark-card rounded-lg border border-slate-200 dark:border-dark-border text-center">
                      <Server className="w-4 h-4 text-amber-500 mb-1" />
                      <span className="font-display text-xs font-semibold text-slate-800 dark:text-slate-200">AWS</span>
                      <span className="text-[10px] text-slate-400 font-mono">EC2 / S3</span>
                    </div>

                    <div className="flex flex-col items-center p-2 bg-white dark:bg-dark-card rounded-lg border border-slate-200 dark:border-dark-border text-center">
                      <GitBranch className="w-4 h-4 text-purple-500 mb-1" />
                      <span className="font-display text-xs font-semibold text-slate-800 dark:text-slate-200">GitHub</span>
                      <span className="text-[10px] text-slate-400 font-mono">CI/CD</span>
                    </div>
                  </div>
                </div>

                {/* Footer Metric line */}
                <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-dark-border/50">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Security: AES-256</span>
                  </span>
                  <span>Latency: 14ms</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Cue */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 hover:text-brand-500 transition-colors uppercase animate-bounce"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
