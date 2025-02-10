import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <nav className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/images/logo_header.png" className="w-60 bg-yellow-100 rounded-xl" alt="Logo" />
          </Link>

          {/* Botón de menú para móviles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="bg-white inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Menú"
          >
            <HiMenu size={30} />
          </button>

          {/* Menú de navegación */}
          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 space-y-2 md:flex-row md:space-x-8 md:mt-0 md:space-y-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900">
              <li><Link to="/" className="block py-2 px-3 text-white md:text-blue-200 hover:text-white">Inicio</Link></li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="block py-2 px-3 text-gray-900 md:text-gray-300 hover:text-white"
                >
                  Nosotros
                </button>
              </li>
              <li><Link to="/ubicacion" className="block py-2 px-3 text-gray-900 md:text-gray-300 hover:text-white">Ubicación</Link></li>
              <li><Link to="/paquetes" className="block py-2 px-3 text-gray-900 md:text-gray-300 hover:text-white">Paquetes</Link></li>
              <li><Link to="/promociones" className="block py-2 px-3 text-gray-900 md:text-gray-300 hover:text-white">Promociones</Link></li>
              <li><Link to="/contacto" className="block py-2 px-3 text-gray-900 md:text-gray-300 hover:text-white">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Nosotros</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"/>
                </svg>
                <span className="sr-only">Cerrar modal</span>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Descubre quiénes somos y nuestra misión en el turismo en Caballo Cocha. Queremos ofrecerte las mejores experiencias en la selva amazónica.
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;