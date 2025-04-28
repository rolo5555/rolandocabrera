export interface Project {
  title: string;
  description: string;
  image: string;
  category: 'DevOps' | 'CI/CD' | 'Monitoring';
  technologies: string[];
  detailsLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Kubernetes Cluster Automation",
    description: "Automated Kubernetes cluster deployment with Terraform and Ansible for multi-cloud environments.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "DevOps",
    technologies: ["Kubernetes", "Terraform", "Ansible", "AWS"],
    detailsLink: "#",
    githubLink: "https://github.com"
  },
  {
    title: "CI/CD Pipeline for Microservices",
    description: "Robust CI/CD pipeline for microservices architecture using GitLab CI and ArgoCD with zero-downtime deployments.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "CI/CD",
    technologies: ["GitLab CI", "ArgoCD", "Docker", "Helm"],
    detailsLink: "#",
    githubLink: "https://github.com"
  },
  {
    title: "Infrastructure Monitoring Suite",
    description: "Complete monitoring solution with Prometheus, Grafana, and custom alerting for cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Monitoring",
    technologies: ["Prometheus", "Grafana", "AlertManager", "Loki"],
    detailsLink: "#",
    githubLink: "https://github.com"
  }
];
