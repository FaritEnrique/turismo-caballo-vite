import React from 'react';
import { Link } from 'react-router-dom';

const FloraPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 p-6 flex flex-col items-center font-sans">
      <div className="w-full max-w-5xl p-8 mt-4 mb-4 rounded-xl bg-gray-300 shadow-lg">
        <header className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4 text-center sm:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-teal-700 flex-1 leading-tight">FLORA DE LA AMAZONÍA PERUANA</h1>
          <Link to="/" className="px-3 sm:px-4 py-2 bg-teal-400 rounded-lg hover:bg-teal-600 text-white text-sm sm:text-base transition duration-300">Ir a Página Principal</Link>
        </header>
        <section>
          <div className="flex flex-col items-center mb-6">
            <img src="https://i.ibb.co/cKVVddkS/Victoria-Regia.png" alt="Victoria Regia" className="w-48 border border-black rounded-xl cursor-pointer transition-transform duration-1000 hover:scale-150" />
          </div>
          <div className="bg-white p-8 text-justify rounded-lg shadow-md">
            <p>
              La vegetación de la selva está representada por los bosques tropicales, donde alternan innumerables especies
              de árboles de madera de diversa calidad o de resinas útiles así como de palmeras y plantas Orquídea.
            </p>
            <ul className="mt-4 list-disc list-inside">
              <li>Acacallis</li>
              <li>Cattleya</li>
              <li>Caoba</li>
              <li>Cedro</li>
              <li>Caucho</li>
              <li>Cinchona (el árbol de la quina)</li>
              <li>Drácula (género de orquídeas)</li>
              <li>Epidendrum</li>
              <li>Lirio de Agua</li>
              <li>Tornillo (planta)</li>
              <li>Ishpingo</li>
              <li>Orquídeas</li>
              <li>Swietenia mahagoni</li>
              <li>Smilax regelii</li>
              <li>Lycaste</li>
              <li>Oncidium</li>
              <li>Uña de Gato</li>
              <li>Vainilla</li>
              <li>Zarzaparrilla</li>
              <li>Cactus</li>
              <li>Oreja de elefante</li>
            </ul>
            <p className="mt-4">
              La selva amazónica alberga una diversa selección de flora extremadamente diversa debido a su ubicación en la 
              cuenca del Amazonas.La región alberga una gran cantidad de especies vegetales, incluyendo una variedad de 
              árboles, arbustos, hierbas, plantas trepadoras, orquídeas, arbolesimponentes y frutas exóticas como la baya 
              del Acai.
            </p>
            <h2 className="mt-6 text-xl font-semibold">Como detalle lo siguiente:</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Árboles emblemáticos:</li>
              <p className="ml-6 mb-2">
                En la región se encuentran árboles de gran importancia y tamaño, como la lupuna, conocida también como "el árbol de la 
                ceiba" debido a su imponente presencia y su papel cultural en las comunidades amazónicas. Otros árboles notables 
                incluyen el aguaje y el caucho.
              </p>
              <li>Palmas:</li>
              <p className="ml-6 mb-2">
                La Selva Amazónica conocida por su diversidad de palmas. El aguaje es una de las palmas más destacadas y tiene una 
                importancia económica y cultural significativa en la región. Otras palmas comunes incluyen el ungurahui, el huicungo y la pona.
              </p>
              <li>Plantas acuáticas:</li>
              <p className="ml-6 mb-2">
                La región está atravesada por numerosos ríos y lagos, lo que proporciona un hábitat ideal para las plantas acuáticas.
                Las victorias regias son especialmente llamativas, con enormes hojas flotantes de hasta 2 metros de diámetro. Otras 
                plantas acuáticas incluyen el camalote y el aguapé.
              </p>
              <li>Plantas medicinales:</li>
              <p className="ml-6">
                La flora es rica en plantas medicinales utilizadas por las comunidades locales y reconocidas en la medicina tradicional 
                amazónica. Plantas como la ayahuasca, la uña de gato y el chacruna son ampliamente utilizadas en rituales y 
                tratamientos tradicionales.
              </p>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-yellow-100 flex gap-4 rounded-lg">
            <Link to="/" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700">Ir a página principal</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FloraPage;
