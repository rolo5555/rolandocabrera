import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-dark/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    } border-b border-white/10`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a 
            href="#" 
            className="text-xl font-display font-bold text-white flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fas fa-terminal mr-2 text-primary"></i>
            <span>John<span className="text-primary">DevOps</span></span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </motion.nav>
          
          {/* Mobile Navigation Toggle */}
          <motion.button
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </motion.button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <NavLink href="#projects" onClick={closeMobileMenu}>Projects</NavLink>
              <NavLink href="#skills" onClick={closeMobileMenu}>Skills</NavLink>
              <NavLink href="#about" onClick={closeMobileMenu}>About</NavLink>
              <NavLink href="#contact" onClick={closeMobileMenu}>Contact</NavLink>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className="text-gray-300 hover:text-primary transition duration-200"
      onClick={onClick}
    >
      {children}
    </a>
  );
}
