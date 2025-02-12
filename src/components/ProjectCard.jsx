import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, image, tags, link }) => {
  const isVideo = image.endsWith('.mp4') || image.endsWith('.mkv');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="project-card"
    >
      <div className="project-media">
        {isVideo ? (
          <video
            src={image}
            alt={title}
            className="media-content"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="media-content"
          />
        )}
      </div>

      {/* Overlay por defecto */}
      <div className="overlay" />

      {/* Overlay adicional en hover */}
      <div className="overlay-hover" />

      {/* Contenido */}
      <div className="project-content">
        <div className="content-wrapper">
          <div className="content-header">
            <h4>{title}</h4>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="external-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
          
          <p className="description">
            {description}
          </p>
          
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
