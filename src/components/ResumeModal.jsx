import React from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';
import { skillsData } from '../data/skills';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-2xl overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-500" />
            <span className="font-display font-bold text-slate-900 dark:text-white">
              {profileData.name} — Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-lg hover:bg-slate-100 dark:hover:bg-dark-hover transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200/50 dark:hover:bg-dark-hover transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200">
          
          {/* Header info */}
          <div className="text-center pb-6 border-b border-slate-200 dark:border-dark-border">
            <h2 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
              {profileData.name}
            </h2>
            <p className="text-sm font-mono text-brand-600 dark:text-brand-400 mt-0.5">
              {profileData.role}
            </p>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              Email: {profileData.email} • GitHub: {profileData.github} • Location: {profileData.location}
            </p>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-2">
              Executive Summary
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
              Education
            </h3>
            <div className="text-sm">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>{profileData.education[0].degree}</span>
                <span className="font-mono text-xs text-slate-500">{profileData.education[0].period}</span>
              </div>
              <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold">
                {profileData.education[0].institution}
              </p>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
              Technical Skill Catalog
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {skillsData.map(cat => (
                <div key={cat.id} className="p-3 bg-slate-50 dark:bg-dark-surface rounded-xl border border-slate-200 dark:border-dark-border">
                  <span className="font-bold font-display text-slate-900 dark:text-white block mb-1">{cat.category}</span>
                  <span className="text-slate-600 dark:text-slate-400 font-mono">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-3">
              Professional Experience
            </h3>
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between font-bold text-slate-900 dark:text-white text-sm">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="font-mono text-xs text-slate-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-lg hover:bg-slate-100 dark:hover:bg-dark-hover"
          >
            Close Resume Preview
          </button>
        </div>

      </div>
    </div>
  );
}
