import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  color: string;
  delay?: number;
}

export default function SkillBar({ name, level, percentage, color, delay = 0 }: SkillBarProps) {
  return (
    <motion.div 
      className="bg-dark-mid/40 rounded-lg p-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-300">{name}</span>
        <span className={color}>{level}</span>
      </div>
      <div className="w-full bg-dark rounded-full h-2">
        <motion.div 
          className={`${color.replace('text-', 'bg-')} h-2 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
