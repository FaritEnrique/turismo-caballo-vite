import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Animación para llamar la atención al botón
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000);
    }, 5000); // Cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50" style={{ bottom: 'calc(2vh + 1rem)' }}>
      {/* Botón flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 bg-yellow-300 p-3 rounded-full shadow-lg transition-transform duration-500 ${
          animate ? "scale-110" : "scale-100"
        } hover:scale-110`}
      >
        <FaGlobe className="text-blue-700 w-6 h-6" />
        <span className="text-gray-900 font-semibold">{t("languages")}</span>
      </button>

      {/* Menú desplegable hacia arriba */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 bg-gray-200 p-3 rounded-lg shadow-md">
          <button
            onClick={() => changeLanguage("en")}
            className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center space-x-2"
          >
            <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-5 h-5" />
            <span>English</span>
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center space-x-2"
          >
            <img src="https://flagcdn.com/w40/es.png" alt="Español" className="w-5 h-5" />
            <span>Español</span>
          </button>
          <button
            onClick={() => changeLanguage("no")}
            className="px-4 py-2 text-gray-800 hover:bg-gray-300 flex items-center space-x-2"
          >
            <img src="https://flagcdn.com/w40/no.png" alt="Norwegian" className="w-5 h-5" />
            <span>Norwegian</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;