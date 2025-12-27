import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "8801863071462";
  const message = "Hello Sifat! I'm interested in working with you.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-28 right-6 md:right-10 z-[150]">
      {/* Pulse Animation Effect */}
      <span className="absolute inset-0 rounded-[20px] bg-green-500 animate-ping opacity-20"></span>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-[18px] flex items-center justify-center shadow-2xl shadow-green-500/40 transition-transform cursor-pointer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;