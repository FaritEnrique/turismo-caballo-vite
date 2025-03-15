import React, { useEffect, useState } from 'react';
import useFotografias from '../hooks/useFotografias';

const GaleriaPage = () => {
  const { fetchFotografias } = useFotografias();
  const [fotografias, setFotografias] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const obtenerFotos = async () => {
      const fotos = await fetchFotografias();
      setFotografias(fotos);
    };
    obtenerFotos();
  }, []);

  return (
    <main className='bg-gray-300 pt-6 pb-6'>
      <div className='max-w-[1300px] mx-auto p-4 rounded-xl bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 border-gray-200 dark:bg-gray-900'>
        <h1 className='text-center font-extrabold text-3xl text-yellow-100'>Galería de Fotos</h1>
      </div>
      <div className='mt-6 max-w-[1300px] mx-auto p-4 rounded-xl bg-teal-400'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {fotografias.map((foto) => (
            <div key={foto.docId} className='bg-white p-2 rounded-lg shadow-lg'>
              <img 
                src={foto.URL} 
                alt='Fotografía' 
                className='w-full h-48 object-cover rounded-lg' 
              />
              <button 
                onClick={() => setSelectedImage(foto.URL)}
                className='mt-2 w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 transition duration-300'
              >
                Ampliar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white p-4 rounded-lg shadow-lg max-w-[650px] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Ampliada" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default GaleriaPage;