import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ContactForm.css";

const ContactForm = ({ language }) => {
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

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

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/franco.biason@gmail.com", {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Error al enviar el formulario");

      setStatus({ submitting: false, submitted: true, error: null });
      e.target.reset();
    } catch (error) {
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
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{messages[language]?.name || messages.en.name}</label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">{messages[language]?.email || messages.en.email}</label>
          <input type="email" name="email" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">{messages[language]?.message || messages.en.message}</label>
          <textarea name="message" id="message" rows="4" required></textarea>
        </div>

        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://tusitio.com/gracias.html" />

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
