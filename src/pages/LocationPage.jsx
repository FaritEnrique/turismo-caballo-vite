import React from 'react';
import { useTranslation } from 'react-i18next';

const LocationPage = () => {
  const { t } = useTranslation("location");
  console.log(t("location.hacerText1"));
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 space-y-6">
        {/* Texto descriptivo */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-teal-900">{t("locationTitle")}</h1>
          <p className="text-justify text-gray-700">
            {t("locationText1")}
          </p>
          <p className="text-justify text-gray-700">
            {t("locationText2")}
          </p>
        </section>

        {/* Imágenes */}
        <section className="flex flex-col lg:flex-row gap-6 items-center px-4 md:px-8 lg:px-16">
        {/* Se ajusta el contenedor para que se adapte a distintos tamaños de pantalla */}
          <div className="w-full max-w-[530px] mx-auto">
            <img
              src="https://i.ibb.co/RGxJMSkd/mapa.png"
              alt="Mapa Caballo Cocha - Turismo"
              className="w-full h-auto object-cover rounded-lg border-4 border-teal-900 shadow-xl"
            />
          </div>
  
        {/* Se asegura que las imágenes secundarias también sean responsivas */}
          <div className="flex flex-col gap-6 w-full max-w-[530px]">
            <img
              src="https://i.ibb.co/bgGgjHZ7/Caballo-croquis.png"
              alt="Croquis Turismo Caballococha - Iquitos"
              className="w-full h-auto object-cover rounded-lg border-4 border-teal-900 shadow-xl"
            />
            <img
              src="https://i.ibb.co/GQ6zyfMf/plaza-caballococha.png"
              alt="Plaza Caballococha - Turismo"
              className="w-full h-auto object-cover rounded-lg border-4 border-teal-900 shadow-xl"
            />
          </div>
        </section>

        {/* Información adicional */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-900">{t("hacerTitle")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li dangerouslySetInnerHTML={{ __html: t("hacerText1") }} />
            <li dangerouslySetInnerHTML={{ __html: t("hacerText2") }} />
            <li dangerouslySetInnerHTML={{ __html: t("hacerText3") }} />
            <li dangerouslySetInnerHTML={{ __html: t("hacerText4") }} />
            <li dangerouslySetInnerHTML={{ __html: t("hacerText5") }} />
          </ul>
        </section>

        {/* Clima y recomendaciones */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-900">{t("consejosTitle")}</h2>
          <p className="text-gray-700">
            {t("consejosText1")}
          </p>
        </section>

        {/* Botón de regreso */}
        <div className="flex justify-center">
          <a href="/" className="px-6 py-3 bg-teal-800 text-white rounded-lg shadow-md hover:bg-teal-900 transition">{t("boton")}</a>
        </div>
      </div>
    </main>
  );
};

export default LocationPage;
