export interface Project {
  title: string;
  description: string;
  image: string;
  category: 'DevOps' | 'CI/CD' | 'Monitoring' | 'Personal';
  technologies: string[];
  detailsLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Personal Blog",
    description: "My technical blog where I share solutions to cloud engineering challenges, Kubernetes tutorials, and DevOps best practices from my daily experiences.",
    image: "https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "Personal",
    technologies: ["GitHub Pages", "Markdown", "Jekyll", "Technical Writing"],
    detailsLink: "https://rolo5555.github.io/blog/",
    githubLink: "https://github.com/rolo5555/rolo5555.github.io"
  }
];
