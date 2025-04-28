import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#" className="text-xl font-display font-bold text-white flex items-center">
              <i className="fas fa-terminal mr-2 text-primary"></i>
              <span>rolo<span className="text-primary">5555</span></span>
            </a>
            <p className="text-gray-400 mt-2">Building scalable, resilient cloud systems</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="#projects" className="text-gray-300 hover:text-primary transition duration-200">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-primary transition duration-200">Skills</a>
            <a href="#about" className="text-gray-300 hover:text-primary transition duration-200">About</a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition duration-200">Contact</a>
          </motion.div>
          
          <motion.div 
            className="mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                <i className="fab fa-stack-overflow text-xl"></i>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} rolo5555. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
