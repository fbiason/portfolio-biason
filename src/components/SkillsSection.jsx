import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaWordpress } from 'react-icons/fa';
import { SiVtex, SiMicrosoftoffice, SiGoogledrive } from 'react-icons/si';

const hardSkills = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E44D26]" },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#264DE4]" },
  { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Angular", icon: FaAngular, color: "text-[#DD0031]" },
  { name: "WordPress", icon: FaWordpress, color: "text-[#21759B]" },
  { name: "VTEX", icon: SiVtex, color: "text-[#F71963]" },
];

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Adaptabilidad",
  "Liderazgo",
  "Pensamiento crítico",
  "Creatividad",
  "Gestión del tiempo"
];

const tools = [
  { name: "Microsoft Office", icon: SiMicrosoftoffice },
  { name: "Google Drive", icon: SiGoogledrive }
];

const SkillIcon = ({ Icon, name, color }) => (
  <div className="flex flex-col items-center gap-2 p-4">
    <Icon className={`text-4xl ${color} hover:scale-110 transition-transform`} />
    <span className="text-sm text-gray-300">{name}</span>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="grid gap-12">
      {/* Hard Skills */}
      <div>
        <h4 className="text-2xl font-semibold mb-6">Hard Skills</h4>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {hardSkills.map((skill, index) => (
            <SkillIcon
              key={index}
              Icon={skill.icon}
              name={skill.name}
              color={skill.color}
            />
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h4 className="text-2xl font-semibold mb-6">Soft Skills</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span className="text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4 className="text-2xl font-semibold mb-6">Tools</h4>
        <div className="flex gap-8">
          {tools.map((tool, index) => (
            <SkillIcon
              key={index}
              Icon={tool.icon}
              name={tool.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
