import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaWordpress, FaPython, FaWater, FaGithub, FaTrello } from 'react-icons/fa';
import { SiVtex, SiMicrosoftoffice, SiGoogledrive, SiPowerbi, SiVisualstudiocode, SiVercel } from 'react-icons/si';
import "../styles/SkillsSection.css";

const hardSkills = [
  { name: "HTML", icon: FaHtml5, color: "html-color", percentage: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "css-color", percentage: 85 },
  { name: "JavaScript", icon: FaJs, color: "js-color", percentage: 80 },
  { name: "React", icon: FaReact, color: "react-color", percentage: 70 },
  { name: "Angular", icon: FaAngular, color: "angular-color", percentage: 35 },
  { name: "WordPress", icon: FaWordpress, color: "wordpress-color", percentage: 90 },
  { name: "VTEX", icon: SiVtex, color: "vtex-color", percentage: 75 },
  { name: "Python", icon: FaPython, color: "python-color", percentage: 60 },
  { name: "R", isImage: true, imageSrc: "/images/r.svg", color: "r-color", percentage: 30 },
  { name: "Shopify", isImage: true, imageSrc: "/images/shopify.webp", color: "shopify-color", percentage: 80 },
  { name: "TiendaNube", isImage: true, imageSrc: "/images/tiendanube.png", color: "tiendanube-color", percentage: 80 },
  { name: "Moodle", isImage: true, imageSrc: "/images/moodle.webp", color: "moodle-color", percentage: 80 }
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
  { name: "Visual Studio Code", icon: SiVisualstudiocode },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "Trello", icon: FaTrello }
];

const SkillIcon = ({ Icon, name, color, percentage, isImage, imageSrc }) => (
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
        {isImage ? (
          <img 
            src={imageSrc} 
            alt={name} 
            className={`skill-icon ${color}`} 
            style={{ 
              width: '32px', 
              height: name === "TiendaNube" ? 'auto' : '32px',
              filter: name === "TiendaNube" ? 'brightness(0) invert(1)' : 'none'
            }} 
          />
        ) : (
          <Icon className={`skill-icon ${color}`} />
        )}
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
              isImage={skill.isImage}
              imageSrc={skill.imageSrc}
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
