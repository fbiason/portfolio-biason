import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { translations } from '../translations';

const getExperienceKey = (company) => {
  const keyMap = {
    "CoderHouse": "coderhouse",
    "RedClover": "redclover",
    "InSET": "inset",
    "Even Cabañas": "even",
    "Desarrollador Web": "freelance"
  };
  return keyMap[company];
};

const experiences = [
  {
    company: "CoderHouse",
    period: "Agosto 2022 - Presente"
  },
  {
    company: "RedClover",
    period: "Julio 2024 - Presente"
  },
  {
    company: "InSET",
    period: "Febrero 2021 - Presente"
  },
  {
    company: "Even Cabañas",
    period: "Octubre 2022 - Presente"
  },
  {
    company: "Desarrollador Web",
    period: "Febrero 2021 - Presente"
  }
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
      className="bg-dark-blue/50 rounded-lg overflow-hidden hover:bg-dark-blue/70 transition-all duration-300"
    >
      <div 
        className="p-6 cursor-pointer flex items-start gap-4 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-3 bg-primary/20 rounded-full text-primary">
          <FaBriefcase className="text-xl" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
              <p className="text-primary font-medium">{expTranslations.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{exp.period}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <FaChevronDown className="text-gray-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, scale: 0.95 }}
            animate={{ 
              height: "auto", 
              opacity: 1, 
              scale: 1,
              transition: {
                height: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                },
                opacity: {
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.1
                },
                scale: {
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.1
                }
              }
            }}
            exit={{ 
              height: 0, 
              opacity: 0,
              scale: 0.95,
              transition: {
                height: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1]
                },
                opacity: {
                  duration: 0.25,
                  ease: "easeInOut"
                },
                scale: {
                  duration: 0.3,
                  ease: "easeIn"
                }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="pl-16">
                <motion.p 
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  exit={{ y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300"
                >
                  {expTranslations.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ExperienceSection = ({ language }) => {
  return (
    <section id="experience" className="py-20 px-4 bg-dark-blue/30">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">
          {translations[language].experience}
        </h3>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
