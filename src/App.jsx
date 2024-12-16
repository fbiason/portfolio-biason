import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import BackToTop from './components/BackToTop';

function NavBar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-blue bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">FB</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#skills" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="section-padding pt-32 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent opacity-30" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Welcome
          <span className="gradient-text"> I'm Franco</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Frontend Developer passionate about creating beautiful and functional web experiences
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-4 max-w-2xl mx-auto"
        >
          <a
            href="#contact"
            className="bg-primary text-white hover:bg-accent px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border-2 border-primary text-white hover:bg-primary hover:border-primary px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-conic from-primary/20 via-transparent to-transparent opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              I am a Frontend Developer with experience in React and modern web technologies. I focus on creating responsive and user-friendly web applications.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SkillsSectionContainer() {
  return (
    <section id="skills" className="section-padding bg-dark-blue/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>
        <SkillsSection />
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/project1.jpg",
    tags: ["React", "TailwindCSS"],
    link: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/project2.jpg",
    tags: ["JavaScript", "CSS"],
    link: "https://project2.com"
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-dark-blue/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Contact</h3>
        <ContactForm />
      </div>
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-dark text-white">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <SkillsSectionContainer />
      <ProjectsSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
}

export default App;
