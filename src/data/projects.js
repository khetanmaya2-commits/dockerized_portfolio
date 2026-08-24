export const projectsData = [
  {
    id: "clouddeploy-hub",
    title: "CloudDeploy Hub",
    featured: true,
    category: "Cloud & DevOps",
    shortDescription: "Cloud deployment management platform empowering developers to monitor microservices and automated CI/CD pipelines in real time.",
    fullDescription: "CloudDeploy Hub bridges the gap between cloud infrastructure and developer observability. It provides a sleek centralized dashboard to inspect AWS EC2 instances, Docker container metrics, and GitHub Actions build pipelines with live status updates.",
    problem: "Engineers often lose visibility into container status and pipeline deployment failures across dispersed AWS EC2 instances and GitHub repositories.",
    solution: "Engineered a unified dashboard using React and Node.js that aggregates AWS Boto3 telemetry and GitHub webhook triggers, showcasing real-time container health and deployment logs.",
    technologies: ["React.js", "Node.js", "AWS EC2 & S3", "Docker", "GitHub Actions", "Tailwind CSS"],
    highlights: [
      "Real-time pipeline status tracking via GitHub webhooks.",
      "Visual Docker container health & CPU/Memory monitoring interface.",
      "One-click trigger for automated staging rollbacks.",
      "Configured multi-region AWS S3 log archive fallback."
    ],
    githubUrl: "https://github.com/khetanmaya2-commits/clouddeploy-hub",
    liveUrl: "https://clouddeploy-hub.demo.app",
    badge: "Featured System Architecture",
    architectureSteps: [
      { step: "1. Code Commit", detail: "Developer pushes code to GitHub main branch." },
      { step: "2. CI Pipeline", detail: "GitHub Actions triggers automated linting & test suite." },
      { step: "3. Docker Build", detail: "Multi-stage Docker image built & pushed to ECR." },
      { step: "4. AWS Deploy", detail: "Deployment updated via SSH/Boto3 on AWS EC2." }
    ]
  },
  {
    id: "floodshield",
    title: "FloodShield",
    featured: false,
    category: "Web Apps",
    shortDescription: "Offline-first disaster relief Progressive Web App designed to record emergency requests and sync data seamlessly upon connection recovery.",
    fullDescription: "Built for crisis situations with zero internet access, FloodShield leverages Service Workers and IndexedDB to cache critical shelter maps, medical contact forms, and distress signals directly on the user's device.",
    problem: "Mobile networks and internet connectivity frequently fail during flooding emergencies, leaving victims unable to submit aid requests.",
    solution: "Designed a resilient PWA architecture that saves distress logs locally in IndexedDB and automatically transmits queued payloads to emergency servers once connectivity is restored.",
    technologies: ["React.js", "IndexedDB", "PWA / Service Workers", "Tailwind CSS", "Lucide React"],
    highlights: [
      "100% offline functionality using Service Worker caching.",
      "IndexedDB persistent client storage for unsent relief requests.",
      "Low-bandwidth emergency map tile render mode."
    ],
    githubUrl: "https://github.com/yourusername/floodshield-pwa",
    liveUrl: "https://floodshield.demo.app",
    badge: "Offline-First PWA"
  },
  {
    id: "aws-s3-backup-system",
    title: "AWS S3 Backup System",
    featured: false,
    category: "Automation",
    shortDescription: "Automated backup & archival system written in Python with Boto3 and executed via scheduled GitHub Actions workflows.",
    fullDescription: "A robust developer CLI and background job that compresses target database snapshots, encrypts data payloads with AES-256, and uploads assets directly to Amazon S3 Glacier archive tier with lifecycle rules.",
    problem: "Manual database snapshots and file backups are prone to human oversight and lack automated cloud lifecycle retention strategies.",
    solution: "Created an automated Python utility leveraging Boto3 SDK, containerized and scheduled with GitHub Actions CRON jobs for zero-touch cloud backups.",
    technologies: ["Python", "AWS S3 & Boto3", "GitHub Actions", "Docker", "Linux Shell"],
    highlights: [
      "Scheduled nightly automated backup execution via GitHub Actions CRON.",
      "Automated AES-256 client-side payload encryption.",
      "Configured S3 Glacier lifecycle transitions for cost optimization."
    ],
    githubUrl: "https://github.com/khetanmaya2-commits/Automated-AWS-S3-Backup-System",
    liveUrl: "https://github.com/yourusername/aws-s3-backup-system#readme",
    badge: "Cloud Automation"
  },
  {
    id: "dockerized-portfolio",
    title: "Dockerized Nginx Web Server",
    featured: false,
    category: "Cloud & DevOps",
    shortDescription: "Production-grade containerized web portfolio served via optimized Nginx reverse proxy inside lightweight Alpine Linux Docker containers.",
    fullDescription: "Demonstrates containerization best practices by serving static React production builds through custom-configured Nginx web servers with custom caching headers, gzipping, and security headers.",
    problem: "Running web apps across non-standard developer environments leads to routing mismatches and unoptimized static asset Delivery.",
    solution: "Packaged production React build artifacts inside an ultra-lightweight Alpine Linux Docker image with custom Nginx routing and Gzip compression rules.",
    technologies: ["HTML5", "CSS3", "Docker", "Nginx", "Linux Alpine", "Shell Scripting"],
    highlights: [
      "Multi-stage Docker build resulting in an image size under 25MB.",
      "Custom Nginx configuration with Gzip compression and cache control headers.",
      "Implemented security headers (CSP, X-Frame-Options, X-Content-Type-Options)."
    ],
    githubUrl: "https://github.com/khetanmaya2-commits/dockerized-portfolio",
    liveUrl: "https://dockerized-portfolio.demo.app",
    badge: "Containerization"
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",
    featured: false,
    category: "Web Apps",
    shortDescription: "High-performance HR employee management dashboard featuring full CRUD operations, role filtering, and dark mode interface.",
    fullDescription: "A modern management dashboard designed to streamline internal organizational directory searching, department transfers, and performance tracking with instant response times.",
    problem: "Legacy HR web portals suffer from slow page reloads, cumbersome data entry forms, and outdated user interfaces.",
    solution: "Built a responsive single-page React frontend backed by a high-speed Python FastAPI REST API with SQLite database persistence.",
    technologies: ["React.js", "FastAPI", "Python", "SQLite", "Tailwind CSS"],
    highlights: [
      "Fast API search with live client-side filtering by department.",
      "Clean dark/light theme switching built with Tailwind CSS.",
      "Structured REST API endpoint architecture with Pydantic validation."
    ],
    githubUrl: "https://github.com/khetanmaya2-commits/employee-management-system",
    liveUrl: "https://employee-system.demo.app",
    badge: "Full-Stack Application"
  }
];
