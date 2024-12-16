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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Bienvenido
          <span className="gradient-text"> Soy Franco</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Licenciado en Administración & Web Developer
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
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
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">About Me</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">
              I am a Frontend Developer with experience in React and modern web technologies. I focus on creating responsive and user-friendly web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSectionContainer() {
  return (
    <section id="skills" className="py-16 px-4 bg-dark-blue/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Skills</h3>
        <SkillsSection />
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Biason Automotores",
    description: "Agencia de compra venta de vehículos",
    image: "/images/biason-automotores.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://biasonautomotores.com.ar/"
  },
  {
    title: "ML Legales",
    description: "Estudio Jurídico",
    image: "/images/ml-legales.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://mllegales.com.ar/"
  },
  {
    title: "Ecommerce - VTEX",
    description: "Modelo de Ecommerce desarrollado con VTEX IO",
    image: "/images/ecommerce-vtex.mp4",
    tags: ["VTEX IO"],
    link: "#"
  },
  {
    title: "Escuela de Fútbol Rosales",
    description: "Escuela de Formación de Fútbol",
    image: "/images/escuela-futbol.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.escueladefutbolrosales.com.ar/"
  },
  {
    title: "La Bancaria Santa Cruz",
    description: "Sindicato Bancario",
    image: "/images/labancaria.png",
    tags: ["WordPress"],
    link: "https://labancariasantacruz.org.ar/"
  },
  {
    title: "TEA Santa Cruz",
    description: "Fundación TEA Santa Cruz",
    image: "/images/tea.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://fundacionteasantacruz.org.ar/"
  },
  {
    title: "Vefrek",
    description: "Catálogo del rubro automotor",
    image: "/images/vefrek.png",
    tags: ["React", "Tailwind", "JavaScript", "TypeScript"],
    link: "https://vefrek.com/"
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
          Los invito a conocer algunos de mis trabajos recientes.
          </p>
        </motion.div>

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
    <section id="contact" className="py-16 px-4 bg-dark-blue/50">
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
    <div className="min-h-screen bg-dark">
      <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSectionContainer />
        <ProjectsSection />
        <ContactSection />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
