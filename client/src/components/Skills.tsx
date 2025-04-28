import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import TechnologyIcon from "./TechnologyIcon";
import { skills, technologies } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive toolkit for modern infrastructure and DevOps
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Skills Categories */}
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className={categoryIndex < skills.length - 1 ? "mb-12" : ""}>
              <h3 className="text-xl font-display font-semibold mb-6 text-white flex items-center">
                <div className={`w-10 h-10 rounded-lg ${category.iconBg} flex items-center justify-center mr-3`}>
                  <i className={`${category.icon} ${category.iconColor}`}></i>
                </div>
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    name={skill.name} 
                    level={skill.level} 
                    percentage={skill.percentage} 
                    color={category.barColor} 
                    delay={0.1 * skillIndex + 0.3 * categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Technologies Cloud */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-display font-semibold mb-10 text-white text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyIcon 
                key={index} 
                icon={tech.icon} 
                color={tech.color} 
                delay={index * 0.05}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
