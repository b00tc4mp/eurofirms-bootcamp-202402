import React from 'react';

const FloatingWhatsAppButton = () => {
  const whatsappNumber = '630248450'; // Reemplaza con tu número de WhatsApp
  const message = '¡Hola! Me gustaría obtener más información.';

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-8 right-2 bg-teal-400 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img src= "whatsApp-logo.png" alt="WhatsApp" className="w-6 h-6" />
    </a>
  );
};

export default FloatingWhatsAppButton;