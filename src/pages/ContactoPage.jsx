import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white p-6 rounded-2xl shadow-xl border-4 border-teal-900">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/images/logo_cuadrado.png" alt="Logo" className="w-32 h-32" />
        </div>

        {/* Información de Contacto */}
        <section className="text-center mb-6">
          <h2 className="text-4xl font-bold text-teal-900 mb-4">Contactos</h2>
          <p className="text-lg mb-4">
            Para solicitar información, envíe un WhatsApp, indicando la información que requiera.
          </p>
          <div className="bg-cyan-100 border-4 border-teal-900 rounded-xl p-4 shadow-lg mb-6">
            <div className="items-center justify-center gap-4">
              <p className="text-lg text-gray-900 font-medium">Información Tours Caballo Cocha:</p>
              <div className="mt-2">
                
                <Link to="https://api.whatsapp.com/send?phone=+51926245191&text=Hola, estoy interesado en el paquete turístico a Caballo Cocha" target="_blank" className="inline-block">
                  <div className='flex items-center'>
                    <FaWhatsapp className="text-green-500 text-3xl" />
                    <p className="text-lg mt-1">+51 926 245191</p>
                  </div>
                </Link>
              </div>
            </div>
            <br />
            <div className="items-center justify-center gap-4">
              <p className="text-lg text-gray-900 font-medium">Información Paquetes y Pasajes Aéreos:</p>
              <div className="mt-2">
                <Link to="https://api.whatsapp.com/send?phone=+51917365332&text=Hola, estoy interesado en el paquete turístico" target="_blank" className="inline-block">
                  <div className='flex items-center'>
                    <FaWhatsapp className="text-green-500 text-3xl" />
                    <p className="text-lg mt-1">+51 917 365332</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Redes Sociales */}
        <section className="text-center mt-6">
          <h3 className="text-2xl font-bold text-teal-900 mb-4">Síguenos en redes sociales</h3>
          <div className="flex justify-center space-x-6">
            <Link to="https://web.facebook.com/profile.php?id=100057419862464" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-4xl hover:scale-110 transition-transform" />
            </Link>
            <Link to="https://www.instagram.com/p/DA5C54tO16m/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 text-4xl hover:scale-110 transition-transform" />
            </Link>
            <Link to="https://www.youtube.com/@danikahtravelsac7404" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 text-4xl hover:scale-110 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Botón */}
        <div className="flex justify-center mt-6">
          <Link to="/" className="px-6 py-3 bg-teal-800 text-white rounded-xl shadow-xl hover:bg-teal-900 transition">
            Ir a Página Principal
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
