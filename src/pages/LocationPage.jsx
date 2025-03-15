import React from 'react';

const LocationPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-6 space-y-6">
        {/* Texto descriptivo */}
        <section className="space-y-4">
          <h1 className="text-center text-4xl font-bold text-teal-900">Descubre Caballococha</h1>
          <p className="text-justify text-gray-700">
            Caballococha es una joya escondida en el corazón de la Amazonía peruana, ubicada en la provincia de Mariscal Ramón Castilla, departamento de Loreto. Este destino es conocido por su rica biodiversidad, paisajes naturales impresionantes y su estratégica posición cerca de las fronteras con Colombia y Brasil.
          </p>
          <p className="text-justify text-gray-700">
            A orillas del majestuoso río Amazonas, Caballococha ofrece experiencias únicas para los amantes de la naturaleza y la aventura. Aquí podrás disfrutar de paseos en bote por la selva, observar delfines rosados, conocer comunidades indígenas y explorar la exuberante flora y fauna de la región.
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
          <h2 className="text-2xl font-semibold text-teal-900">¿Qué puedes hacer en Caballococha?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Avistamiento de delfines rosados:</strong> Observa a estos encantadores animales en su hábitat natural.</li>
            <li><strong>Exploración en la selva:</strong> Adéntrate en la flora y fauna amazónica a través de caminatas guiadas.</li>
            <li><strong>Visita a comunidades nativas:</strong> Conoce las costumbres y tradiciones de las comunidades indígenas locales.</li>
            <li><strong>Paseos en bote:</strong> Recorre los afluentes del Amazonas y vive una experiencia inolvidable.</li>
            <li><strong>Disfruta de su gastronomía:</strong> Prueba platos típicos como el juane, el tacacho con cecina y exquisitos pescados amazónicos.</li>
          </ul>
        </section>

        {/* Clima y recomendaciones */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-900">Consejos para tu visita</h2>
          <p className="text-gray-700">
            Caballococha tiene un clima cálido y húmedo durante todo el año, con temperaturas promedio de 25°C a 30°C. Se recomienda llevar ropa ligera, protector solar, repelente de insectos y una actitud aventurera para disfrutar al máximo tu experiencia.
          </p>
        </section>

        {/* Botón de regreso */}
        <div className="flex justify-center">
          <a href="/" className="px-6 py-3 bg-teal-800 text-white rounded-lg shadow-md hover:bg-teal-900 transition">Ir a Inicio</a>
        </div>
      </div>
    </main>
  );
};

export default LocationPage;
