import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaCloud, FaRocket, FaShieldAlt } from 'react-icons/fa';
import '../styles/AWSPromoSection.css';

function AWSPromoSection({ language, translations }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <section className="aws-promo-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aws-promo-container"
          onClick={openPopup}
        >
          <div className="aws-logo">
            <FaCloud className="aws-icon" />
          </div>
          <div className="aws-content">
            <h3 className="aws-title">{translations[language].awsPromo.title}</h3>
            <p className="aws-subtitle">{translations[language].awsPromo.subtitle}</p>
            <p className="aws-description">{translations[language].awsPromo.description}</p>
            <button className="aws-cta">{translations[language].awsPromo.cta}</button>
          </div>
        </motion.div>
      </section>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={closePopup}>
              <FaTimes />
            </button>
            
            <div className="popup-header">
              <FaCloud className="popup-icon" />
              <h2>Amazon Web Services</h2>
            </div>
            
            <div className="popup-body">
              <div className="aws-features">
                <div className="feature">
                  <FaRocket className="feature-icon" />
                  <h4>Escalabilidad</h4>
                  <p>Crece sin límites con la infraestructura más confiable del mundo</p>
                </div>
                <div className="feature">
                  <FaShieldAlt className="feature-icon" />
                  <h4>Seguridad</h4>
                  <p>Protección de nivel empresarial para tus datos y aplicaciones</p>
                </div>
                <div className="feature">
                  <FaCloud className="feature-icon" />
                  <h4>Innovación</h4>
                  <p>Accede a más de 200 servicios para transformar tu negocio</p>
                </div>
              </div>
              
              <div className="popup-actions">
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="btn primary">
                  Comenzar con AWS
                </a>
                <button onClick={closePopup} className="btn secondary">
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default AWSPromoSection;