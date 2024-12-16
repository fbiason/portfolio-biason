import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactForm = ({ language }) => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    // Inicializa EmailJS
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

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto"
    >
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {messages[language]?.name || messages.en.name}
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full px-4 py-3 bg-dark-blue/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            {messages[language]?.email || messages.en.email}
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full px-4 py-3 bg-dark-blue/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {messages[language]?.message || messages.en.message}
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full px-4 py-3 bg-dark-blue/30 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 text-white resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.submitting}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-all duration-300 font-medium text-base disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {status.submitting 
            ? messages[language]?.sending 
            : messages[language]?.send}
        </button>

        {status.submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-500 text-center mt-4 p-3 bg-green-500/10 rounded-lg"
          >
            {messages[language]?.success}
          </motion.div>
        )}

        {status.error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mt-4 p-3 bg-red-500/10 rounded-lg"
          >
            {messages[language]?.error}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
