import React, { useState } from 'react';
import { GitCommit, Github, PlayCircle, Box, Cloud, CheckCircle, Terminal, Info, ChevronRight } from 'lucide-react';

export default function DevOpsPipeline() {
  const [activeStage, setActiveStage] = useState(0);

  const pipelineStages = [
    {
      id: "code",
      title: "CODE",
      subtitle: "Git Commit",
      icon: GitCommit,
      tool: "Git & VS Code",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      command: "git commit -m 'feat: optimize docker build & add nginx proxy'",
      details: "Developers write features, run local lint tests, and commit cleanly formatted code with semantic commit messages.",
      artifact: "Feature Branch (git push origin main)"
    },
    {
      id: "github",
      title: "GITHUB",
      subtitle: "Repository Push",
      icon: Github,
      tool: "GitHub Repo",
      color: "text-slate-700 dark:text-slate-200",
      bgColor: "bg-slate-500/10",
      borderColor: "border-slate-500/30",
      command: "Webhook Trigger → POST https://api.github.com/repos/dev/events",
      details: "Code is pushed to GitHub repository. Automated webhooks notify CI triggers and protect production branches.",
      artifact: "Pull Request & Branch Protection Rules"
    },
    {
      id: "actions",
      title: "ACTIONS",
      subtitle: "CI/CD Pipeline",
      icon: PlayCircle,
      tool: "GitHub Actions",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      command: "uses: actions/checkout@v4 → run: npm test && docker build",
      details: "Automated workflow executes linting checks, executes unit test suites, and runs security vulnerability scanners.",
      artifact: "Build Artifact & Test Reports (Pass)"
    },
    {
      id: "docker",
      title: "DOCKER",
      subtitle: "Containerization",
      icon: Box,
      tool: "Docker Engine",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      command: "docker build -t app:v1.2 --target production .",
      details: "Packages application into lightweight multi-stage Alpine Docker image with embedded Nginx static server.",
      artifact: "Docker Image (24.8MB) pushed to ECR"
    },
    {
      id: "aws",
      title: "AWS",
      subtitle: "Cloud Provisioning",
      icon: Cloud,
      tool: "AWS EC2 & S3",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      command: "aws ec2 deploy-container --image app:v1.2 --region us-east-1",
      details: "Provisions cloud server instance, configures VPC security group rules, and mounts encrypted EBS/S3 storage.",
      artifact: "EC2 Auto-scaling Group & CloudFront CDN"
    },
    {
      id: "deployment",
      title: "DEPLOYMENT",
      subtitle: "Zero Downtime",
      icon: CheckCircle,
      tool: "Live Production",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      command: "HTTP/2 200 OK — SSL Certificate Active (Let's Encrypt)",
      details: "Traffic smoothly routes to updated container instance with health check pass and zero downtime.",
      artifact: "Production Web App Online (HTTPS)"
    }
  ];

  return (
    <section id="pipeline" className="py-20 md:py-28 bg-white dark:bg-dark-bg/80 border-t border-slate-200/80 dark:border-dark-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-mono font-semibold tracking-widest text-brand-600 dark:text-brand-400 uppercase">
            03. Automation & Deployment Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-1">
            DevOps Workflow Pipeline
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Click any stage in the deployment pipeline below to inspect real-time tool orchestration and commands.
          </p>
        </div>

        {/* Horizontal Pipeline Diagram Card */}
        <div className="p-6 sm:p-8 bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-xl">
          
          {/* Pipeline Nodes Flow */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8 relative">
            {pipelineStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div key={stage.id} className="flex items-center">
                  <button
                    onClick={() => setActiveStage(idx)}
                    className={`w-full flex flex-col items-center p-3 rounded-xl border text-center transition-all duration-200 group ${
                      isSelected
                        ? `${stage.bgColor} ${stage.borderColor} ring-2 ring-brand-500/50 scale-[1.03] shadow-md`
                        : 'bg-white dark:bg-dark-surface border-slate-200 dark:border-dark-border hover:border-brand-500/40'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg mb-2 ${stage.bgColor} ${stage.color} group-hover:scale-110 transition-transform`}>
                      <StageIcon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-xs tracking-wider text-slate-900 dark:text-white">
                      {stage.title}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {stage.subtitle}
                    </span>
                  </button>

                  {/* Connecting Arrow for Desktop */}
                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute -right-2 z-10 pointer-events-none text-slate-400 dark:text-slate-600" style={{ left: `calc(${(idx + 1) * 16.66}% - 8px)` }}>
                      <ChevronRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Inspector Panel for Active Pipeline Stage */}
          {activeStage !== null && (
            <div className="p-5 sm:p-6 bg-white dark:bg-dark-surface rounded-xl border border-slate-200 dark:border-dark-border shadow-inner">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-dark-border gap-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${pipelineStages[activeStage].bgColor} ${pipelineStages[activeStage].color}`}>
                    {React.createElement(pipelineStages[activeStage].icon, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                      <span>Stage {activeStage + 1}: {pipelineStages[activeStage].title}</span>
                      <span className="text-xs font-mono font-normal px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border">
                        {pipelineStages[activeStage].tool}
                      </span>
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Artifact: {pipelineStages[activeStage].artifact}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Pipeline Pass</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {pipelineStages[activeStage].details}
              </p>

              {/* Terminal Code Snippet */}
              <div className="p-3.5 bg-slate-900 rounded-lg text-slate-100 font-mono text-xs overflow-x-auto flex items-center gap-2 border border-slate-800 shadow-inner">
                <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-500">$</span>
                <span className="text-emerald-300">{pipelineStages[activeStage].command}</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
