import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenus = useCallback(() => {
    setIsModalOpen(false);
    setIsOpen(false);
  }, []);

  return (
    <header>
      <nav className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo_header.png" className="w-60 bg-yellow-100 rounded-xl" alt="Logo" />
          </Link>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-teal-600 hover:bg-teal-700 mr-2 focus:outline-none focus:ring-2 focus:ring-teal-500 inline-flex items-center justify-center p-2 w-12 h-12 text-white rounded-lg md:hidden"
              aria-label="Menú"
              aria-expanded={isOpen}
            >
              <HiMenu size={30} />
            </button>
          </div>

          <div className={`w-full md:block md:w-auto ${isOpen ? 'block max-w-[600px] bg-gray-700' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 space-y-2 md:flex-row md:space-x-8 md:mt-0 md:space-y-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 rounded-lg shadow-md">
              <li><Link to="/" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">{t("home")}</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li>
                <button
                  onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                  className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200"
                >
                  {t("about")}
                </button>
              </li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/ubicacion" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">{t("location")}</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/paquetes" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">{t("packages")}</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/promociones" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">{t("promotions")}</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/contacto" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal responsive */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-w-[639] sm:max-w-[750px] md:max-w-[85vw] lg:max-w-[80vw] max-h-[90vh] overflow-y-auto overflow-x-hidden">
            
            {/* Header */}
            <div className="w-full items-center p-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center sm:text-left">
                {t("about")}
              </h3>
            </div>
      
            {/* Content */}
            <div className="p-4 space-y-4 w-full overflow-y-auto max-h-[70vh]">
              <p className="text-base leading-relaxed w-full text-gray-500 dark:text-gray-400 text-justify break-words">
                {t("modalText1")}
              </p>
              <p className="text-base leading-relaxed w-full text-gray-500 dark:text-gray-400 text-justify break-words">
                {t("modalText2")}
              </p>
            </div>
      
            {/* Footer */}
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600 w-full justify-end">
              <button
                onClick={closeMenus}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto"
              >
                {t("cerrar")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;