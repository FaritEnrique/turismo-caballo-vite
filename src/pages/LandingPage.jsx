import React from 'react';

const LandingPage = () => {
  return (
    <section className="min-h-screen bg-green-50 text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Vive la Amazonía como nunca antes
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Descubre la magia de Caballococha, en el corazón del Amazonas. Únete a nuestros tours vivenciales de 3 a 6 días y experimenta la selva, su gente y su cultura de forma auténtica y responsable.
          </p>
          <ul className="list-disc list-inside mb-6 text-base md:text-lg space-y-2">
            <li>Alojamientos cómodos y seguros</li>
            <li>Guías locales expertos</li>
            <li>Experiencias culturales auténticas</li>
            <li>Excursiones en bote, caminatas, avistamiento de fauna</li>
          </ul>
          <a
            href="https://m.me/tu_pagina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Reservar ahora
          </a>
        </div>

        <div className="relative">
          <img
            src="/images/turismo-caballococha.jpg"
            alt="Turistas explorando Caballococha"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <p className="absolute bottom-4 left-4 bg-white bg-opacity-70 text-sm px-3 py-1 rounded-md text-gray-900">
            Tours vivenciales todo incluido
          </p>
        </div>
      </div>

      <div className="bg-green-100 dark:bg-green-800 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Por qué elegirnos?</h2>
          <p className="mb-6 text-lg">
            Nos enfocamos en el turismo sostenible y el respeto por las comunidades locales. Te llevamos más allá del turismo tradicional para que conectes con la Amazonía de verdad.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md w-64">
              <h3 className="font-bold text-xl mb-2">100% Local</h3>
              <p>Apoyamos la economía local trabajando con guías, hospedajes y cocineros de la zona.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md w-64">
              <h3 className="font-bold text-xl mb-2">Aventura Segura</h3>
              <p>Operamos bajo protocolos de seguridad y salubridad para que solo te preocupes por disfrutar.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md w-64">
              <h3 className="font-bold text-xl mb-2">Turismo Cultural</h3>
              <p>Convivencia con familias locales, preparación de platos típicos y talleres artesanales.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;