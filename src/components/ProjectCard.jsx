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
      className="group relative bg-dark-blue/30 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden">
        {isVideo ? (
          <video
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
        )}
      </div>

      {/* Overlay por defecto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500" />

      {/* Overlay adicional en hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Contenido */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-white">{title}</h4>
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary/20 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
          
          <p className="text-gray-300 text-sm text-left transform opacity-60 group-hover:opacity-100 transition-all duration-500">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium"
              >
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
