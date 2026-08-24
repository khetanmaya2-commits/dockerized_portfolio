export const skillsData = [
  {
    category: "Cloud Computing",
    id: "cloud",
    icon: "Cloud",
    description: "Cloud infrastructure provisioning, storage, and serverless compute Services.",
    skills: [
      { name: "AWS", level: "Advanced", icon: "Cloud", highlight: true },
      { name: "EC2", level: "Proficient", icon: "Server", highlight: false },
      { name: "S3", level: "Advanced", icon: "Database", highlight: false },
      { name: "Lambda", level: "Intermediate", icon: "Zap", highlight: false },
      { name: "IAM", level: "Proficient", icon: "Shield", highlight: false },
      { name: "Elastic Beanstalk", level: "Intermediate", icon: "Layers", highlight: false },
      { name: "CloudFront", level: "Proficient", icon: "Globe", highlight: false },
      { name: "CloudFormation", level: "Intermediate", icon: "Code", highlight: false }
    ]
  },
  {
    category: "DevOps & Automation",
    id: "devops",
    icon: "Cpu",
    description: "Containerization, CI/CD pipelines, Linux web servers, and deployment automation.",
    skills: [
      { name: "Docker", level: "Advanced", icon: "Box", highlight: true },
      { name: "Kubernetes", level: "Learning", icon: "Container", highlight: false },
      { name: "GitHub Actions", level: "Advanced", icon: "GitCommit", highlight: true },
      { name: "CI/CD Pipelines", level: "Proficient", icon: "Workflow", highlight: false },
      { name: "Linux Administration", level: "Proficient", icon: "Terminal", highlight: false },
      { name: "Nginx", level: "Proficient", icon: "Radio", highlight: false }
    ]
  },
  {
    category: "Development",
    id: "development",
    icon: "Code2",
    description: "Modern frontend and backend programming languages & web technologies.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode", highlight: false },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout", highlight: false },
      { name: "Node.js", level: "Proficient", icon: "Server", highlight: false },
      { name: "Python", level: "Proficient", icon: "FileTerminal", highlight: true },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette", highlight: false }
    ]
  },
  {
    category: "Tools & Utilities",
    id: "tools",
    icon: "Wrench",
    description: "Essential developer tooling, version control, and API testing environments.",
    skills: [
      { name: "Git", level: "Advanced", icon: "GitBranch", highlight: false },
      { name: "GitHub", level: "Advanced", icon: "Github", highlight: false },
      { name: "VS Code", level: "Advanced", icon: "Monitor", highlight: false },
      { name: "Postman", level: "Proficient", icon: "Send", highlight: false }
    ]
  }
];
