import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const { title, description, image, category, technologies, detailsLink, githubLink } = project;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-dark-mid/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30 group h-full">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
            <Badge
              variant="outline"
              className={`bg-dark px-2 py-1 rounded text-xs ${
                category === 'DevOps' ? 'text-primary border-primary/20' : 
                category === 'CI/CD' ? 'text-secondary border-secondary/20' : 
                'text-accent border-accent/20'
              }`}
            >
              {category}
            </Badge>
          </div>
          <p className="text-gray-300 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag px-3 py-1 bg-dark rounded-full text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a href={detailsLink} className="text-primary hover:text-primary/80 font-medium flex items-center">
              View Details <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-github text-lg"></i>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
