import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-mid to-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">About Me</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a DevOps Engineer with over 7 years of experience architecting and implementing robust cloud infrastructure solutions. My expertise lies in container orchestration, CI/CD automation, and cloud-native technologies.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Throughout my career, I've helped organizations of all sizes streamline their development workflows, reduce operational overhead, and improve system reliability through proper DevOps practices.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className="fas fa-graduation-cap text-primary"></i>
                  </div>
                  <span className="text-gray-300">MSc in Computer Science, Stanford University</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className="fas fa-briefcase text-primary"></i>
                  </div>
                  <span className="text-gray-300">Lead DevOps Engineer at TechCorp</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                    <i className="fas fa-award text-primary"></i>
                  </div>
                  <span className="text-gray-300">AWS Certified Solutions Architect & DevOps Engineer</span>
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border border-white/20 hover:border-white/40 text-white"
              >
                <a href="#">
                  <i className="fas fa-file-alt mr-2"></i> Download Resume
                </a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                    alt="John Doe, DevOps Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-dark-mid/80 backdrop-blur-sm border border-white/10 p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-lg font-semibold text-white">7+ Years</div>
                  <div className="text-sm text-gray-300">Professional Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
