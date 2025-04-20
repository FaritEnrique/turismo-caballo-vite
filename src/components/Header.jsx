import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);  // Estado del menú hamburguesa
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenus = useCallback(() => {
    setIsModalOpen(false);
    setIsOpen(false);  // Cierra ambos menús
  }, []);

  // Evita el scroll de fondo cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <header>
      <nav className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 border-gray-200 dark:bg-gray-900 relative z-10">
        {/* Contenedor ajustado para pantallas más pequeñas, cambio realizado */}
        <div className="w-full mx-auto px-4 py-4 flex items-center justify-between"> {/* Cambio aquí: w-full en lugar de max-w-screen-xl */}
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo_header.png" className="w-60 bg-yellow-100 rounded-xl" alt="Logo" />
          </Link>

          {/* Botón hamburguesa + lenguaje (solo en móvil) */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}  // Cambia el estado del menú hamburguesa
              className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 p-2 rounded-lg text-white"
              aria-label="Menú"
              aria-expanded={isOpen}
            >
              <HiMenu size={30} />
            </button>
          </div>

          {/* Menú horizontal (solo en md+) */}
          <ul className="hidden md:flex items-center gap-6 font-medium text-gray-300">
            <li><Link to="/" className="hover:text-yellow-200">{t("home")}</Link></li>
            <li><button onClick={() => setIsModalOpen(true)} className="hover:text-yellow-200">{t("about")}</button></li>
            <li><Link to="/ubicacion" className="hover:text-yellow-200">{t("location")}</Link></li>
            <li><Link to="/paquetes" className="hover:text-yellow-200">{t("packages")}</Link></li>
            <li><Link to="/promociones" className="hover:text-yellow-200">{t("promotions")}</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-200">{t("contact")}</Link></li>
            <LanguageSwitcher />
          </ul>
        </div>

        {/* Menú móvil (sólo en móviles) */}
        {/* Este es el menú desplegable que se muestra cuando el estado isOpen es true */}
        <div className={`md:hidden px-4 pb-4 ${isOpen ? "block" : "hidden"}`}> {/* Cambio aquí: Utilizamos el estado isOpen para mostrar u ocultar el menú */}
          <ul className="flex flex-col gap-2 bg-gray-800 rounded-lg p-4 shadow-lg text-white">
            <li><Link to="/" onClick={closeMenus} className="hover:text-yellow-200">{t("home")}</Link></li>
            <li><button onClick={() => { setIsModalOpen(true); setIsOpen(false); }} className="hover:text-yellow-200">{t("about")}</button></li>
            <li><Link to="/ubicacion" onClick={closeMenus} className="hover:text-yellow-200">{t("location")}</Link></li>
            <li><Link to="/paquetes" onClick={closeMenus} className="hover:text-yellow-200">{t("packages")}</Link></li>
            <li><Link to="/promociones" onClick={closeMenus} className="hover:text-yellow-200">{t("promotions")}</Link></li>
            <li><Link to="/contacto" onClick={closeMenus} className="hover:text-yellow-200">{t("contact")}</Link></li>
          </ul>
        </div>
      </nav>

      {/* MODAL CON Z-50 Y FONDO CORRECTO */}
      {isModalOpen && (
        <div className='max-w-[1300px]'>
          <div className="w-full fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="relative bg-white dark:bg-gray-700 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              {/* Botón cerrar arriba derecha */}
              <button
                onClick={closeMenus}
                className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-red-500"
              >
                ✕
              </button>

              {/* Encabezado */}
              <div className="w-full p-4 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                  {t("about")}
                </h3>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-4">
                <p className="text-base text-gray-600 dark:text-gray-300 text-justify">
                  {t("modalText1")}
                </p>
                <p className="text-base text-gray-600 dark:text-gray-300 text-justify">
                  {t("modalText2")}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-600">
                <button
                  onClick={closeMenus}
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  {t("cerrar")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;