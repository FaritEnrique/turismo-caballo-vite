import React, { useEffect, useState } from 'react';
import usePromociones from '../hooks/usePromociones';

const PromocionesPage = () => {
  const { fetchPromociones } = usePromociones();
  const [promociones, setPromociones] = useState([]);

  useEffect(() => {
    const obtenerPromociones = async () => {
      const promos = await fetchPromociones();
      setPromociones(promos);
    };
    obtenerPromociones();
  }, []);

  // Función para formatear la fecha sin incluir la hora
  const formatearFecha = (timestamp) => {
    if (!timestamp) return 'Fecha no disponible';
    try {
      const fecha = timestamp.toDate(); // Convierte el timestamp de Firebase a Date
      return fecha.toISOString().split('T')[0]; // Devuelve solo YYYY-MM-DD
    } catch (error) {
      console.error("Error formateando fecha:", error);
      return 'Fecha inválida';
    }
  };

  return (
    <main className='bg-gray-300 pt-6 pb-6'>
      <div className='max-w-[1300px] mx-auto p-4 rounded-xl bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 border-gray-200 dark:bg-gray-900'>
        <h1 className='text-center font-extrabold text-3xl text-yellow-100'>Promociones</h1>
      </div>
      <div className='mt-6 max-w-[1300px] mx-auto p-4 rounded-xl bg-teal-400'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {promociones.map((promo) => (
            <div key={promo.docId} className='bg-white p-4 rounded-lg shadow-lg'>
              <img 
                src={promo.imagenURL} 
                alt={promo.titulo} 
                className='w-full h-48 object-cover rounded-lg' 
              />
              <h2 className='mt-2 text-xl font-bold text-gray-800'>{promo.titulo}</h2>
              <p className='text-gray-700'>{promo.descripcion}</p>
              <p className='text-gray-900 font-semibold mt-1'>Descuento: {promo.descuento}%</p>
              <p className='text-gray-700 line-through'>Precio Original: S/ {promo.precioOriginal}</p>
              <p className='text-green-600 font-bold'>Precio Final: S/ {promo.precioFinal}</p>
              <p className='text-gray-600 text-sm mt-2'>Inicio: {formatearFecha(promo.fechaInicio)}</p>
              <p className='text-gray-600 text-sm'>Fin: {formatearFecha(promo.fechaFin)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PromocionesPage;