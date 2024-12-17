import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaLanguage } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import BackToTop from './components/BackToTop';
import ExperienceSection from './components/ExperienceSection';
import { translations } from './translations';

function NavBar({ isMenuOpen, setIsMenuOpen, language, toggleLanguage }) {
  const menuItems = [
    { id: "home", label: translations[language].home },
    { id: "about", label: translations[language].about },
    { id: "skills", label: translations[language].skills },
    { id: "experience", label: translations[language].experience },
    { id: "projects", label: translations[language].projects },
    { id: "contact", label: translations[language].contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-blue bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">FB</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((menuItem) => (
              <a 
                key={menuItem.id} 
                href={`#${menuItem.id}`} 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {menuItem.label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <FaLanguage className="text-xl" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white p-2"
            >
              <FaLanguage className="text-xl" />
            </button>
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
            {menuItems.map((menuItem) => (
              <a 
                key={menuItem.id} 
                href={`#${menuItem.id}`} 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {menuItem.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection({ language }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          {translations[language].welcome}
          <span className="gradient-text"> {translations[language].im}</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          {translations[language].role}
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
            {translations[language].contactMe}
          </a>
          <a
            href="#projects"
            className="border-2 border-primary text-white hover:bg-primary hover:border-primary px-6 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            {translations[language].viewProjects}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection({ language }) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">{translations[language].aboutMe}</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              {translations[language].aboutDescription}
            </p>
          </div>
          <div className="flex justify-center">
            <motion.img
              src="/images/biason.jpg"
              alt="Franco Biason"
              className="w-64 h-64 object-cover rounded-full shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSectionContainer({ language }) {
  return (
    <section id="skills" className="py-16 px-4 bg-dark-blue/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">{translations[language].skills}</h3>
        <SkillsSection />
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Biason Automotores",
    description: "Agencia de compra venta de vehículos",
    image: "/images/biason-automotores.mkv",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://biasonautomotores.com.ar/"
  },
  {
    title: "ML Legales",
    description: "Estudio Jurídico",
    image: "/images/ml-legales.mkv",
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
    image: "/images/escuela-futbol.mkv",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://www.escueladefutbolrosales.com.ar/"
  },
  {
    title: "La Bancaria Santa Cruz",
    description: "Sindicato Bancario",
    image: "/images/labancaria.mkv",
    tags: ["WordPress"],
    link: "https://labancariasantacruz.org.ar/"
  },
  {
    title: "TEA Santa Cruz",
    description: "Fundación TEA Santa Cruz",
    image: "/images/tea.mkv",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://fundacionteasantacruz.org.ar/"
  },
  {
    title: "Vefrek",
    description: "Catálogo del rubro automotor",
    image: "/images/vefrek.mkv",
    tags: ["React", "Tailwind", "JavaScript", "TypeScript"],
    link: "https://vefrek.com/"
  }
];

function ProjectsSection({ language }) {
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
            <span className="gradient-text">{translations[language].featuredProjects}</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {translations[language].projectsDescription}
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

function ContactSection({ language }) {
  return (
    <section id="contact" className="py-16 px-4 bg-dark-blue/50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">{translations[language].contact}</h3>
        <ContactForm language={language} />
      </div>
    </section>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };
  
  return (
    <div className="bg-background text-white min-h-screen">
      <NavBar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSectionContainer language={language} />
        <ExperienceSection language={language} />
        <ProjectsSection language={language} />
        <ContactSection language={language} />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
