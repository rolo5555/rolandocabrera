import Terminal from "./Terminal";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-mesh py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DevOps Engineering <span className="text-primary">& Infrastructure</span> Solutions
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building scalable, reliable and automated infrastructure for modern applications
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            >
              <a href="#projects">View My Projects</a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border border-white/20 hover:border-white/40 text-white"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ animationName: "float", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
