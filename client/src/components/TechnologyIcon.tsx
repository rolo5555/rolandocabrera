import { motion } from "framer-motion";

interface TechnologyIconProps {
  icon: string;
  color: string;
  delay?: number;
}

export default function TechnologyIcon({ icon, color, delay = 0 }: TechnologyIconProps) {
  return (
    <motion.div 
      className="tech-tag p-4 bg-dark-mid/40 rounded-xl border border-white/10 hover:border-primary/30 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <i className={`${icon} text-2xl ${color}`}></i>
    </motion.div>
  );
}
