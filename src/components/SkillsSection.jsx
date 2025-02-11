import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaWordpress, FaPython, FaWater } from 'react-icons/fa';
import { SiVtex, SiMicrosoftoffice, SiGoogledrive, SiPowerbi, SiVisualstudiocode } from 'react-icons/si';

const hardSkills = [
  { name: "HTML", icon: FaHtml5, color: "text-[#E44D26]", percentage: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "text-[#264DE4]", percentage: 85 },
  { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]", percentage: 80 },
  { name: "React", icon: FaReact, color: "text-[#61DAFB]", percentage: 70 },
  { name: "Angular", icon: FaAngular, color: "text-[#DD0031]", percentage: 35 },
  { name: "WordPress", icon: FaWordpress, color: "text-[#21759B]", percentage: 90 },
  { name: "VTEX", icon: SiVtex, color: "text-[#F71963]", percentage: 75 },
  { name: "Python", icon: FaPython, color: "text-[#3776AB]", percentage: 60 }
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
  { name: "Google Drive", icon: SiGoogledrive },
  { name: "Power BI", icon: SiPowerbi },
  { name: "WindSurf", icon: FaWater },
  { name: "Visual Studio Code", icon: SiVisualstudiocode }
];

const SkillIcon = ({ Icon, name, color, percentage }) => (
  <div className="flex flex-col items-center gap-2 p-4 relative">
    {percentage !== undefined ? (
      <div className="relative">
        <svg className="w-16 h-16">
          <circle
            className="text-gray-700"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
          />
          <circle
            className={`${color}`}
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="32"
            cy="32"
            style={{
              strokeDasharray: `${2 * Math.PI * 30}`,
              strokeDashoffset: `${2 * Math.PI * 30 * (1 - percentage / 100)}`,
              transform: 'rotate(-90deg)',
              transformOrigin: 'center'
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icon className={`text-2xl ${color} hover:scale-110 transition-transform`} />
        </div>
      </div>
    ) : (
      <Icon className={`text-4xl ${color || 'text-gray-300'} hover:scale-110 transition-transform`} />
    )}
    <span className="text-sm text-gray-300">{name}</span>
    {percentage !== undefined && (
      <span className="text-xs text-gray-400">{percentage}%</span>
    )}
  </div>
);

const SkillsSection = () => {
  return (
    <div className="grid gap-12">
      {/* Hard Skills */}
      <div>
        <h4 className="text-2xl font-semibold mb-6">Hard Skills</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {hardSkills.map((skill, index) => (
            <SkillIcon
              key={index}
              Icon={skill.icon}
              name={skill.name}
              color={skill.color}
              percentage={skill.percentage}
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
