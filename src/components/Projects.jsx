import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, Layers, Box, Cloud, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Cloud & DevOps', 'Web Apps', 'Automation'];

  const featuredProject = projectsData.find(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  const filteredProjects = activeFilter === 'All'
    ? otherProjects
    : otherProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-dark-bg/60 border-t border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
              05. Project Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Things I've built
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 p-1.5 bg-slate-100 dark:bg-dark-surface rounded-xl border border-slate-200 dark:border-dark-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. FEATURED PROJECT CARD (Large Visually Prominent Layout) */}
        {featuredProject && (
          <div className="mb-16">
            <div className="relative p-6 sm:p-10 bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
              
              {/* Subtle background glow grid */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                {/* Left Side Info */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 text-xs font-mono font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                      ★ FEATURED SYSTEM ARCHITECTURE
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white group-hover:text-brand-300 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                    {featuredProject.fullDescription}
                  </p>

                  {/* Problem & Solution Callout Box */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                    <div>
                      <span className="font-mono text-amber-400 font-semibold uppercase block mb-1 flex items-center gap-1">
                        <ShieldAlert className="w-3.5 h-3.5" /> Problem Solved
                      </span>
                      <p className="text-slate-300">{featuredProject.problem}</p>
                    </div>
                    <div>
                      <span className="font-mono text-emerald-400 font-semibold uppercase block mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Architecture Solution
                      </span>
                      <p className="text-slate-300">{featuredProject.solution}</p>
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 font-mono text-xs font-medium rounded-lg bg-slate-800 text-brand-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={featuredProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold text-slate-900 bg-white hover:bg-brand-300 rounded-xl transition-all shadow-md group/btn"
                    >
                      <span>Live System Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  </div>

                </div>

                {/* Right Side Architecture Preview Graphic */}
                <div className="lg:col-span-5">
                  <div className="p-5 bg-slate-950/90 rounded-2xl border border-slate-800 shadow-inner font-mono text-xs text-slate-300 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-brand-400" />
                        <span>System Pipeline Topology</span>
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">ACTIVE</span>
                    </div>

                    <div className="space-y-3">
                      {featuredProject.architectureSteps?.map((item, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800/80 flex items-start gap-3">
                          <span className="text-brand-400 font-bold shrink-0">{item.step}</span>
                          <span className="text-slate-300 text-[11px]">{item.detail}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 2. EDITORIAL PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-8 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h4 className="font-display font-bold text-2xl text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-3">
                  {project.title}
                </h4>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/80 dark:border-dark-border/80 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-dark-hover rounded-lg transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
