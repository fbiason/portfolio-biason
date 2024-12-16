import { motion } from 'framer-motion';

const skills = [
  {
    category: "Desarrollo Web",
    technologies: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 60 },
      { name: "Angular", level: 30 },
      { name: "Python", level: 55 },
    ]
  },
  {
    category: "Herramientas y Plataformas",
    technologies: [
      { name: "VTEX", level: 75 },
      { name: "Git", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Tailwind CSS", level: 50 },
      { name: "WindSurf", level: 80 },
    ]
  },
  {
    category: "Herramientas de Oficina",
    technologies: [
      { name: "Microsoft Excel", level: 95 },
      { name: "Microsoft Word", level: 90 },
      { name: "SQL", level: 70 },
    ]
  }
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-300">{name}</span>
      <span className="text-sm font-medium text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-2.5 rounded-full bg-gradient-to-r from-primary to-accent"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skillGroup, index) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-dark-blue p-6 rounded-lg shadow-xl"
        >
          <h4 className="text-xl font-bold mb-4 gradient-text">{skillGroup.category}</h4>
          <div className="space-y-4">
            {skillGroup.technologies.map((tech) => (
              <SkillBar key={tech.name} {...tech} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsSection;
