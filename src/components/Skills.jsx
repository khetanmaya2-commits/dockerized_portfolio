import React, { useState } from 'react';
import { 
  Cloud, Cpu, Code2, Wrench, Server, Database, Zap, Shield, 
  Layers, Globe, Code, Box, Container, GitCommit, Workflow, 
  Terminal, Radio, Atom, FileCode, Layout, FileTerminal, Palette, 
  GitBranch, Github, Monitor, Send 
} from 'lucide-react';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Cloud, Cpu, Code2, Wrench, Server, Database, Zap, Shield, 
    Layers, Globe, Code, Box, Container, GitCommit, Workflow, 
    Terminal, Radio, Atom, FileCode, Layout, FileTerminal, Palette, 
    GitBranch, Github, Monitor, Send
  };

  const filteredCategories = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
              02. Technical Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
              Technologies I work with
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0 p-1.5 bg-slate-200/60 dark:bg-dark-surface rounded-xl border border-slate-300/60 dark:border-dark-border">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Skills
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-brand-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Categories */}
        <div className="space-y-10">
          {filteredCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon] || Cloud;
            return (
              <div
                key={category.id}
                className="p-6 sm:p-8 bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-sm"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100 dark:border-dark-border/60">
                  <div className="p-2.5 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 text-brand-600 dark:text-brand-400">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        className={`group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                          skill.highlight
                            ? 'bg-brand-500/5 dark:bg-brand-500/10 border-brand-500/30 text-slate-900 dark:text-white shadow-sm'
                            : 'bg-slate-50 dark:bg-dark-surface/60 border-slate-200/80 dark:border-dark-border text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
                        } hover:scale-[1.02]`}
                      >
                        <div className={`p-2 rounded-lg ${
                          skill.highlight 
                            ? 'bg-brand-500 text-white' 
                            : 'bg-white dark:bg-dark-card text-slate-600 dark:text-slate-400 group-hover:text-brand-500'
                        } transition-colors`}>
                          <SkillIcon className="w-4 h-4" />
                        </div>
                        
                        <div className="flex flex-col min-w-0">
                          <span className="font-display font-semibold text-sm tracking-tight truncate">
                            {skill.name}
                          </span>
                          <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
