export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  barColor: string;
  items: Skill[];
}

export interface Technology {
  icon: string;
  color: string;
}

export const skills: SkillCategory[] = [
  {
    name: "Container Infrastructure",
    icon: "fas fa-cubes",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    barColor: "text-primary",
    items: [
      { name: "Kubernetes", level: "Advanced", percentage: 95 },
      { name: "Docker", level: "Advanced", percentage: 90 },
      { name: "Helm", level: "Intermediate", percentage: 75 }
    ]
  },
  {
    name: "CI/CD & Automation",
    icon: "fas fa-infinity",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    barColor: "text-secondary",
    items: [
      { name: "Jenkins", level: "Advanced", percentage: 90 },
      { name: "GitLab CI", level: "Advanced", percentage: 85 },
      { name: "GitHub Actions", level: "Intermediate", percentage: 80 }
    ]
  },
  {
    name: "Infrastructure as Code",
    icon: "fas fa-code",
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    barColor: "text-accent",
    items: [
      { name: "Terraform", level: "Advanced", percentage: 95 },
      { name: "Ansible", level: "Advanced", percentage: 85 },
      { name: "CloudFormation", level: "Intermediate", percentage: 70 }
    ]
  },
  {
    name: "Cloud Platforms",
    icon: "fas fa-cloud",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    barColor: "text-primary",
    items: [
      { name: "AWS", level: "Advanced", percentage: 90 },
      { name: "Google Cloud", level: "Intermediate", percentage: 75 },
      { name: "Azure", level: "Intermediate", percentage: 70 }
    ]
  }
];

export const technologies: Technology[] = [
  { icon: "fab fa-docker", color: "text-blue-400" },
  { icon: "fas fa-dharmachakra", color: "text-blue-500" },
  { icon: "fab fa-aws", color: "text-orange-400" },
  { icon: "fab fa-google", color: "text-red-400" },
  { icon: "fab fa-github", color: "text-white" },
  { icon: "fab fa-gitlab", color: "text-orange-500" },
  { icon: "fab fa-jenkins", color: "text-red-500" },
  { icon: "fab fa-linux", color: "text-yellow-400" },
  { icon: "fab fa-python", color: "text-blue-300" },
  { icon: "fas fa-terminal", color: "text-green-400" }
];
