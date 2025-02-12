import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import "../styles/ContactForm.css";

const ContactForm = ({ language }) => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const messages = {
    es: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "There was an error sending your message. Please try again."
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const templateParams = {
      from_name: form.current.user_name.value,
      from_email: form.current.user_email.value,
      message: form.current.message.value,
      to_email: 'franco.biason@gmail.com'
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      setStatus({ submitting: false, submitted: true, error: null });
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-container"
    >
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{messages[language]?.name || messages.en.name}</label>
          <input type="text" name="user_name" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">{messages[language]?.email || messages.en.email}</label>
          <input type="email" name="user_email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">{messages[language]?.message || messages.en.message}</label>
          <textarea name="message" id="message" rows="4" required></textarea>
        </div>

        <button type="submit" disabled={status.submitting} className="contact-button">
          {status.submitting ? messages[language]?.sending : messages[language]?.send}
        </button>

        {status.submitted && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="success-message">
            {messages[language]?.success}
          </motion.div>
        )}

        {status.error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="error-message">
            {messages[language]?.error}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
