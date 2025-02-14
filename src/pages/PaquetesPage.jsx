import React from 'react';

const PaquetesPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-200 p-6">
      <div className="max-w-5xl w-full bg-gradient-to-t from-yellow-100/50 to-gray-100/50 bg-cover bg-center p-6 rounded-2xl shadow-2xl border-4 border-teal-900" style={{ backgroundImage: "url('https://i.ibb.co/d0dgC3Nr/Foto-fondo-Programa.jpg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        {/* Título */}
        <section className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-black drop-shadow-[2px_2px_4px_white] mb-4">Programa Turístico Caballo Cocha</h2>
          <div className="bg-cyan-100 border-4 border-teal-900 rounded-xl p-4 shadow-lg mb-6">
            <p className="text-lg text-gray-800"><strong>Lugar:</strong> Ciudad de Caballo Cocha.</p>
            <p className="text-lg text-gray-800"><strong>Estadía:</strong> Tres días y dos noches.</p>
          </div>
        </section>

        {/* Itinerario */}
        <div className="space-y-6">
          {[1, 2, 3].map((day) => (
            <div key={day} className="bg-teal-900 text-white rounded-xl p-6 text-justify shadow-lg">
              {day === 1 && (
                <>
                  <p className="text-xl font-semibold mb-4">Primer Día</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Recorrido por la Ciudad y el Mercado Principal para conocer productos locales.</li>
                    <li>Visita a la comunidad de los Ticunas, con observación de flora y artesanías.</li>
                    <li>Almuerzo típico de la región.</li>
                    <li>Paseo por el río Amazonas y avistamiento del atardecer.</li>
                    <li>Regreso al hotel para cena y descanso.</li>
                  </ul>
                </>
              )}
              {day === 2 && (
                <>
                  <p className="text-xl font-semibold mb-4">Segundo Día</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Desayuno y visita a Vista Alegre con caminata en la selva.</li>
                    <li>Observación de flora, fauna y pesca artesanal de pirañas.</li>
                    <li>Almuerzo típico y regreso a la ciudad.</li>
                  </ul>
                </>
              )}
              {day === 3 && (
                <>
                  <p className="text-xl font-semibold mb-4">Tercer Día</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Exploración en bote por la laguna de Caballo Cocha.</li>
                    <li>Avistamiento de delfines rosados y aves locales.</li>
                    <li>Desayuno a bordo y almuerzo típico al finalizar el recorrido.</li>
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="bg-teal-900 text-white rounded-xl p-6 my-6 text-justify shadow-lg">
          <p className="text-lg"><strong>Nota:</strong> La recepción de pasajeros se realiza en los aeropuertos de Iquitos (Perú) o Leticia (Colombia). Los traslados serán por el río Amazonas en botes deslizadores hasta Caballo Cocha. ¡Gran aventura Amazónica!</p>
        </div>

        {/* Sugerencias */}
        <div className="bg-teal-900 text-white rounded-xl p-6 mb-6 text-justify shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Sugerencias para el Turista</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Ponchos para la lluvia</li>
            <li>Repelente para mosquitos</li>
            <li>Botas de jebe para caminatas</li>
            <li>Linterna y baterías</li>
            <li>Ropa de baño y cómoda para el clima</li>
            <li>Medicamentos personales</li>
            <li>Indicar restricciones alimentarias</li>
            <li>Proveer fecha y número de vuelo de retorno</li>
          </ul>
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-6">
          <a href="/" className="px-6 py-3 bg-teal-800 text-white rounded-xl shadow-xl hover:bg-teal-900 transition">
            Ir a Página Principal
          </a>
        </div>
      </div>
    </main>
  );
};

export default PaquetesPage;
