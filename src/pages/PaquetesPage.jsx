import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PaquetesPage = () => {
  const { t } = useTranslation("paquetes");
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-200 p-6">
      <div className="max-w-5xl w-full bg-gradient-to-t from-yellow-100/50 to-gray-100/50 bg-cover bg-center p-6 rounded-2xl shadow-2xl border-4 border-teal-900" style={{ backgroundImage: "url('https://i.ibb.co/d0dgC3Nr/Foto-fondo-Programa.jpg')", backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        {/* Título */}
        <section className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-black drop-shadow-[2px_2px_4px_white] mb-4">
            {t('programaTuristicoTitulo')}
            {/* Programa Turístico Caballo Cocha */}
          </h2>
          <div className="bg-cyan-100 border-4 border-teal-900 rounded-xl p-4 shadow-lg mb-6">
            <p className="text-lg text-gray-800"><strong>{t('lugar')}</strong> {t('programaTuristicoLugar')}</p>
            <p className="text-lg text-gray-800"><strong>{t('estadia')}</strong> {t('programaTuristicoEstadia')}</p>
          </div>
        </section>

        {/* Itinerario */}
        <div className="space-y-6">
          {[1, 2, 3].map((day) => (
            <div key={day} className="bg-teal-900 text-white rounded-xl p-6 text-justify shadow-lg">
              {day === 1 && (
                <>
                  <p className="text-xl font-semibold mb-4">{t('itinerario.dias.dia1.titulo')}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {t('itinerario.dias.dia1.actividades', { returnObjects: true }).map((actividad, index) => (
                    <li key={index}>{actividad}</li>
                    ))}
                  </ul>
                </>
              )}
              {day === 2 && (
                <>
                  <p className="text-xl font-semibold mb-4">{t('itinerario.dias.dia2.titulo')}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {t('itinerario.dias.dia2.actividades', { returnObjects: true }).map((actividad, index) => (
                    <li key={index}>{actividad}</li>
                    ))}
                  </ul>
                </>
              )}
              {day === 3 && (
                <>
                  <p className="text-xl font-semibold mb-4">{t('itinerario.dias.dia3.titulo')}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {t('itinerario.dias.dia3.actividades', { returnObjects: true }).map((actividad, index) => (
                      <li key={index}>{actividad}</li>
                      ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Nota */}
        <div className="bg-teal-900 text-white rounded-xl p-6 my-6 text-justify shadow-lg">
          <p className="text-lg">
            <strong>{t('nota.titulo')}:</strong> {t('nota.contenido')}
          </p>
        </div>

        {/* Sugerencias */}
        <div className="bg-teal-900 text-white rounded-xl p-6 mb-6 text-justify shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{t('sugerencias.titulo')}</h3>
          <ul className="list-disc list-inside space-y-2">
            {t('sugerencias.lista', { returnObjects: true }).map((sugerencia, index) => (
              <li key={index}>{sugerencia}</li>
            ))}
          </ul>
        </div>

        {/* Botón */}
        <div className="flex justify-center mt-6">
          <Link to="/" className="px-6 py-3 bg-teal-800 text-white rounded-xl shadow-xl hover:bg-teal-900 transition">
            {t('boton.texto')}
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PaquetesPage;
