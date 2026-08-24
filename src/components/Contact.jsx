import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate contact form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Internship Opportunity / Inquiry', message: '' });
      
      // Auto reset success message after 6 seconds
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-dark-bg/60 border-t border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Side: Contact CTA Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
                08. Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1 mb-6">
                Let's build something meaningful.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I'm actively seeking cloud computing and DevOps internship roles. Whether you have a project idea, a job opening, or just want to connect over cloud architecture — my inbox is open!
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-brand-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                        {profileData.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-brand-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">LinkedIn Profile</span>
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:border-brand-500/50 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-slate-500/10 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">GitHub Profile</span>
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                        View Code Repositories
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-border text-xs font-mono text-slate-500 dark:text-slate-400">
              🟢 Typically responds within 24 hours.
            </div>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-slate-50 dark:bg-dark-card rounded-3xl border border-slate-200 dark:border-dark-border shadow-xl">
              
              <div className="flex items-center gap-2 mb-6 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase">
                <MessageSquare className="w-4 h-4 text-brand-500" />
                <span>Send a Direct Message</span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-500/10 border border-emerald-500/30 rounded-2xl animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out. I've received your inquiry and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Rivera"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-dark-surface text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-dark-border focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 text-sm bg-white dark:bg-dark-surface text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-dark-border focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      SUBJECT / PURPOSE
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-dark-surface text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-dark-border focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
                    >
                      <option value="Internship Opportunity / Inquiry">DevOps / Cloud Internship Opportunity</option>
                      <option value="Freelance / Project Collaboration">Project Collaboration</option>
                      <option value="Technical Networking">Technical Networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      YOUR MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi! We saw your cloud portfolio and would love to discuss a DevOps internship opportunity..."
                      className="w-full px-4 py-3 text-sm bg-white dark:bg-dark-surface text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-dark-border focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 font-mono text-sm font-bold text-white bg-brand-600 hover:bg-brand-500 active:scale-[0.99] rounded-xl shadow-lg shadow-brand-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
