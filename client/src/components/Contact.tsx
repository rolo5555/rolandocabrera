import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how I can help with your infrastructure needs
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex justify-center">
            {/* Contact Info */}
            <div className="md:w-2/3 lg:w-1/2">
              <Card className="bg-dark-mid/40 backdrop-blur-sm border border-white/10 rounded-xl h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-6 text-white">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-envelope text-primary"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email</p>
                        <a href="mailto:rolando.cabrera@ib.edu.ar" className="text-white hover:text-primary transition duration-200">rolando.cabrera@ib.edu.ar</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-map-marker-alt text-primary"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Location</p>
                        <p className="text-white">Rosario, Argentina</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-1">
                        <i className="fas fa-globe text-primary"></i>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Social Profiles</p>
                        <div className="flex space-x-4 mt-2">
                          <a href="https://www.linkedin.com/in/rcabrerablanch/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                            <i className="fab fa-linkedin text-xl"></i>
                          </a>
                          <a href="https://github.com/rolo5555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                            <i className="fab fa-github text-xl"></i>
                          </a>
                          <a href="https://rolo5555.github.io/blog/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition duration-200">
                            <i className="fas fa-blog text-xl"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
