import emailjs from '@emailjs/browser';

// Inicializa EmailJS con tu clave pública
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
