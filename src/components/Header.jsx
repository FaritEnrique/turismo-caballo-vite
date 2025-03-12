import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMenus = () => {
    setIsModalOpen(false);
    setIsOpen(false);
  };

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
            className="bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 inline-flex items-center justify-center p-2 w-12 h-12 text-white rounded-lg md:hidden"
            aria-label="Menú"
            style={{ marginRight: '5px' }}
          >
            <HiMenu size={30} />
          </button>

          {/* Menú de navegación */}
          <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 space-y-2 md:flex-row md:space-x-8 md:mt-0 md:space-y-0 bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 rounded-lg shadow-md">
              <li><Link to="/" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">Inicio</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li>
                <button
                  onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                  className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200"
                >
                  Nosotros
                </button>
              </li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/ubicacion" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">Ubicación</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/paquetes" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">Paquetes</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/promociones" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">Promociones</Link></li>
              <hr className="md:hidden border-gray-200 dark:border-gray-600" />
              <li><Link to="/contacto" onClick={closeMenus} className="block py-2 px-3 text-white md:text-gray-300 hover:text-yellow-200">Contacto</Link></li>
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
                onClick={closeMenus}
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
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                Gracias por visitar nuestro sitio web, <strong>DANIKAH TRAVEL</strong>, una agencia líder en el área de turismo y vuelos aéreos. Contamos con atención especializada en los más diversos productos del rubro, como asesoría y venta de pasajes aéreos nacionales e internacionales, paquetes turísticos, cruceros marítimos, excursiones, y mucho más.<br />
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 text-justify">
                <strong>DANIKAH TRAVEL</strong> fue fundada en el año 2018 en la ciudad de Iquitos, Perú. Iniciamos ofreciendo servicios de venta de boletos aéreos nacionales y, prontamente, expandimos nuestra oferta a todo el país. Hoy, consolidamos una amplia variedad de servicios turísticos con las mejores alternativas para nuestros clientes.
              </p>
            </div>

            {/* Modal footer */}
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                onClick={closeMenus}
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