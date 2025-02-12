import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaLanguage } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import BackToTop from './components/BackToTop';
import ExperienceSection from './components/ExperienceSection';
import { translations } from './translations';
import "./styles/App.css";

function NavBar({ isMenuOpen, setIsMenuOpen, language, toggleLanguage }) {
  const menuItems = [
    { id: "about", label: translations[language].aboutMe },
    { id: "skills", label: translations[language].skills },
    { id: "experience", label: translations[language].experience },
    { id: "projects", label: translations[language].projects },
    { id: "contact", label: translations[language].contact },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">FB</a>

        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map(menuItem => (
            <a key={menuItem.id} href={`#${menuItem.id}`} className="menu-link">
              {menuItem.label}
            </a>
          ))}
          <button onClick={toggleLanguage} className="menu-link language-btn">
            <FaLanguage className="icon" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>

        <div className="menu-toggle">
          <button onClick={toggleLanguage} className="icon-btn">
            <FaLanguage className="icon" />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon-btn">
            {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map(menuItem => (
            <a key={menuItem.id} href={`#${menuItem.id}`} className="menu-link">
              {menuItem.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function HeroSection({ language }) {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2 className="hero-title">
          {translations[language].welcome} 
          <span className="hero-name">{translations[language].im}</span>
        </h2>
        <p className="hero-subtitle">{translations[language].role}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">{translations[language].contactMe}</a>
          <a href="#projects" className="btn secondary">{translations[language].viewProjects}</a>
        </div>
      </div>
    </section>
  );
}


function AboutSection({ language }) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h3 className="about-title">{translations[language].aboutMe}</h3>
        <div className="about-content">
          <div className="about-text">
            <p>{translations[language].aboutDescription}</p>
          </div>
          <div className="about-image">
            <motion.img
              src="/images/biason.jpg"
              alt="Franco Biason"
              className="about-img"
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
    <section id="skills" className="skills">
       <div className="skills-content">
       <h3 className="skills-heading">{translations[language].skills}</h3>
        <SkillsSection />
      </div>
    </section>
  );
}

const projects = [
  // Autogestionables
  {
    title: "Webs Autoadministrables",
    isTitle: true
  },
  {
    title: "La Bancaria",
    description: "Sindicato Bancario de Santa Cruz",
    image: "/images/labancaria.mp4",
    tags: ["WordPress"],
    link: "https://labancariasantacruz.org.ar/"
  },
  // Corporativo
  {
    title: "Corporativo",
    isTitle: true
  },
  {
    title: "Biason Automotores",
    description: "Agencia de compra venta de vehículos",
    image: "/images/biason-automotores.mp4",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://biasonautomotores.com.ar/"
  },
  {
    title: "TEA Santa Cruz",
    description: "Fundación TEA Santa Cruz",
    image: "/images/tea.mp4",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://fundacionteasantacruz.org.ar/"
  },
  {
    title: "Vefrek",
    description: "Catálogo del rubro automotor",
    image: "/images/vefrek.mp4",
    tags: ["React", "Tailwind", "JavaScript", "TypeScript"],
    link: "https://vefrek.com/"
  },
  // Landing Pages
  {
    title: "Landing Pages",
    isTitle: true
  },
  {
    title: "ML Legales",
    description: "Servicios legales",
    image: "/images/ml-legales.mp4",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://mllegales.com.ar/"
  },
  {
    title: "GEOFORZA",
    description: "Soluciones Integrales",
    image: "/images/geoforza.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://geoforza.com.ar/"
  },
  // E-Commerce
  {
    title: "E-Commerce",
    isTitle: true
  },
  {
    title: "Original1",
    description: "Tienda de ropa",
    image: "/images/original1.mp4",
    tags: ["Shopify"],
    link: "https://original-one.com/"
  },
  {
    title: "VTEX",
    description: "Plataforma de comercio electrónico",
    image: "/images/ecommerce-vtex.mp4",
    tags: ["E-Commerce"],
    link: "https://vtex.com/"
  }
];

function ProjectsSection({ language }) {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h3 className="projects-title">
            <span className="gradient-text">{translations[language].featuredProjects}</span>
          </h3>
          <p className="projects-description">
            {translations[language].projectsDescription}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) =>
            project.isTitle ? (
              <h2 key={index} className="project-category">{project.title}</h2>
            ) : (
              <ProjectCard key={index} {...project} />
            )
          )}
        </div>
      </div>
    </section>
  );
}


function ContactSection({ language }) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h3 className="contact-title">
          {translations[language].contact}
        </h3>
        <ContactForm language={language} />
      </div>
    </section>
  );
}


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <div>
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
