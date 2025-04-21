import React from 'react';
import { useTranslation } from 'react-i18next';

const NosotrosPage = () => {
  const { t } = useTranslation("header");

  return (
    <main className="flex flex-col items-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 space-y-6 border-4 border-green-600">
        
        {/* Logo y Título */}
        <section className="flex flex-col items-center space-y-4">
          <div className="w-32 h-32">
            <img
              src="/images/logo_cuadrado.png"
              alt="Logo Darinka Travel / Turismo Caballococha"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-teal-900 text-center">
            {t("about")}
          </h1>
        </section>

        {/* Contenido */}
        <section className="space-y-4 px-4 md:px-6">
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            {t("modalText1")}
          </p>
          <p className="text-justify text-gray-700 text-base leading-relaxed">
            {t("modalText2")}
          </p>
        </section>
      </div>
    </main>
  );
};

export default NosotrosPage;