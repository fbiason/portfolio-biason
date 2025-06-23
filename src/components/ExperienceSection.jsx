import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { translations } from '../translations';
import "../styles/ExperienceSection.css";

const getExperienceKey = (company) => {
  const keyMap = {
    "CoderHouse": "coderhouse",
    "RedClover": "redclover",
    "InSET": "inset",
    "Even Cabañas": "even",
    "Web Developer": "freelance"
  };
  return keyMap[company];
};

const experiences = [
  { company: "CoderHouse", period: "Agosto 2022 - Presente" },
  { company: "RedClover", period: "Julio 2024 - Presente" },
  { company: "InSET", period: "Febrero 2021 - Presente" },
  { company: "Even Cabañas", period: "Octubre 2022 - Presente" },
  { company: "Web Developer", period: "Febrero 2021 - Presente" }
];

const ExperienceCard = ({ exp, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const expKey = getExperienceKey(exp.company);
  const expTranslations = translations[language].experiences[expKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="experience-card"
    >
      <div className="experience-card-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="icon-container">
          <FaBriefcase className="icon" />
        </div>
        <div className="experience-info">
          <div className="experience-title">
            <h4>{exp.company}</h4>
            <p className="role">{expTranslations.role}</p>
          </div>
          <div className="experience-meta">
            <span className="period">{exp.period}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.6 }}>
              <FaChevronDown className="chevron" />
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ height: "auto", opacity: 1, scale: 1 }}
            exit={{ height: 0, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="experience-card-body"
          >
            <p className="experience-description">{expTranslations.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExperienceSection = ({ language }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-content">
        <h3 className="experience-heading">{translations[language].experience}</h3>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
