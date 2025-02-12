import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaWordpress, FaPython, FaWater } from 'react-icons/fa';
import { SiVtex, SiMicrosoftoffice, SiGoogledrive, SiPowerbi, SiVisualstudiocode } from 'react-icons/si';
import "../styles/SkillsSection.css";

const hardSkills = [
  { name: "HTML", icon: FaHtml5, color: "html-color", percentage: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "css-color", percentage: 85 },
  { name: "JavaScript", icon: FaJs, color: "js-color", percentage: 80 },
  { name: "React", icon: FaReact, color: "react-color", percentage: 70 },
  { name: "Angular", icon: FaAngular, color: "angular-color", percentage: 35 },
  { name: "WordPress", icon: FaWordpress, color: "wordpress-color", percentage: 90 },
  { name: "VTEX", icon: SiVtex, color: "vtex-color", percentage: 75 },
  { name: "Python", icon: FaPython, color: "python-color", percentage: 60 }
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
  <div className="skill-card">
    <div className="progress-container">
      <svg className="progress-svg">
        <circle className="bg-circle" r="30" cx="32" cy="32" />
        <circle
          className={`progress-bar ${color}`}
          r="30"
          cx="32"
          cy="32"
          style={{
            strokeDasharray: `${2 * Math.PI * 30}`,
            strokeDashoffset: `${2 * Math.PI * 30 * (1 - percentage / 100)}`,
          }}
        />
      </svg>
      <div className="icon-wrapper">
        <Icon className={`skill-icon ${color}`} />
      </div>
    </div>
    <span className="skill-name">{name}</span>
    {percentage !== undefined && <span className="percentage">{percentage}%</span>}
  </div>
);


const SkillsSection = () => {
  return (
    <div className="skills-section">
      {/* Hard Skills */}
      <div>
        <h4>Hard Skills</h4>
        <div className="hard-skills-container">
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
        <h4>Soft Skills</h4>
        <div className="soft-skills-container">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div>
        <h4>Tools</h4>
        <div className="tools-container">
          {tools.map((tool, index) => (
            <SkillIcon key={index} Icon={tool.icon} name={tool.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
