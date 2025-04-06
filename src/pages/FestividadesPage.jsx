import React from 'react';
import { useTranslation } from 'react-i18next';

const FestividadesPage = () => {
  const { t } = useTranslation('festividades');

  const festividades = [
    {
      id: 'san-juan',
      title: t('sanJuan.titulo'),
      imgSrc: 'https://i.postimg.cc/L5SF0F7J/San-Juan.png',
      description: t('sanJuan.contenido')
    },
    {
      id: 'purisima',
      title: t('purisima.titulo'),
      imgSrc: 'https://i.postimg.cc/Nj5SD0MN/Pur-sima.png',
      description: t('purisima.contenido')
    },
    {
      id: 'aniversario-iquitos',
      title: t('aniversarioIquitos.titulo'),
      imgSrc: 'https://i.postimg.cc/YSQXDLwx/Aniversario-Iquitos.png',
      description: t('aniversarioIquitos.contenido')
    },
    {
      id: 'carnaval',
      title: t('carnaval.titulo'),
      imgSrc: 'https://i.postimg.cc/MTWYss5W/Carnaval.png',
      description: t('carnaval.contenido')
    },
    {
      id: 'amazonas',
      title: t('amazonas.titulo'),
      imgSrc: 'https://i.postimg.cc/mZnQMZvZ/Amazonas-Maravilla.png',
      description: t('amazonas.contenido')
    },
    {
      id: 'caballo-cocha',
      title: t('caballococha.titulo'),
      imgSrc: 'https://i.postimg.cc/VLMDkbJP/Aniversario-Caballococha.png',
      description: t('caballococha.contenido')
    }
  ];

  return (
    <div className="bg-gray-100 p-6 w-11/12 mx-auto rounded-lg shadow-lg">
      <header className="bg-green-700 text-white text-center p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">{t('titulo')}</h1>
        <img className="w-full rounded-lg mt-4" src="https://i.postimg.cc/c4Y8nR7T/Banner-Festividades.png" alt="Iquitos, Loreto, Amazonía" />
      </header>
      
      <main className="space-y-8 mt-6">
        {festividades.map(fest => (
          <div key={fest.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-6 border-l-4 border-green-700">
            <div className="md:w-1/4 w-full flex justify-center">
              <img className="w-full h-48 object-cover rounded-lg shadow-md" src={fest.imgSrc} alt={fest.title} />
            </div>
            <div className="md:w-3/4 w-full mt-4 md:mt-0 md:pl-6">
              <h2 className="text-center text-2xl font-bold text-green-800 mb-4">{fest.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {fest.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FestividadesPage;