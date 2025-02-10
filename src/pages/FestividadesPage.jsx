import React from 'react';

const festividades = [
  {
    id: 'san-juan',
    title: 'FIESTA PATRONAL DE SAN JUAN BAUTISTA',
    imgSrc: 'https://i.postimg.cc/L5SF0F7J/San-Juan.png',
    description: `Una festividad con arraigo cristiano que se popularizó y volvió tradicional en la selva del Perú.
    Se celebra cada 24 de junio con una misa conmemorativa seguida de una procesión con banda típica y festividades.
    Luego se realiza una procesión con banda típica y mucho jolgorio, con bombos, flautas y tambores, cambiando el tono solemne
    por uno más festivo y alegre. Aquí los locales y turistas comparten rodeados de desfiles, bailes y música.`
  },
  {
    id: 'purisima',
    title: 'FIESTA PATRONAL DE LA PURÍSIMA',
    imgSrc: 'https://i.postimg.cc/Nj5SD0MN/Pur-sima.png',
    description: `El distrito de Punchana celebra esta fiesta del 1 al 8 de diciembre en la plaza Almirante Miguel Grau.
    Su historia involucra la migración de los habitantes de San Francisco de Borja ante un inminente ataque.
    Así, estos humildes hombres y mujeres dedicados a la pesca y agricultura llevaron consigo una imagen de la Virgen y caminaron sin rumbo,
    hasta llegar cerca del caserío donde vivían los indios Iquito, quienes no los recibieron amistosamente.`
  },
  {
    id: 'aniversario-iquitos',
    title: 'ANIVERSARIO DE IQUITOS',
    imgSrc: 'https://i.postimg.cc/YSQXDLwx/Aniversario-Iquitos.png',
    description: `Cada 5 de enero se celebra la fundación de Iquitos en 1863 con diversas actividades organizadas
    por la Municipalidad Provincial de Maynas. La trascendencia histórica de Iquitos se conmemora con eventos,
    resaltando la llegada de la primera nave de la flota de vapores de la Marina de Guerra del Perú.`
  },
  {
    id: 'carnaval',
    title: 'CARNAVAL AMAZONICO',
    imgSrc: 'https://i.postimg.cc/MTWYss5W/Carnaval.png',
    description: `El Carnaval Amazónico en Iquitos reúne comunidades nativas en una de las festividades más antiguas
    de la Amazonía. Es considerado Patrimonio Cultural de la Nación por su importancia en el fortalecimiento de la identidad cultural.`
  },
  {
    id: 'amazonas',
    title: 'RÍO AMAZONAS MARAVILLA NATURAL',
    imgSrc: 'https://i.postimg.cc/mZnQMZvZ/Amazonas-Maravilla.png',
    description: `El 13 de agosto de 2012, la Amazonía fue reconocida como una Maravilla Natural del Mundo en una ceremonia en Iquitos,
    con la presencia del Presidente de la República. El Amazonas es uno de los ríos más impresionantes del planeta, con una longitud
    total de 7,100 kilómetros y la cuenca hidrográfica más grande del mundo.`
  },
  {
    id: 'caballo-cocha',
    title: 'ANIVERSARIO DE CABALLO COCHA',
    imgSrc: 'https://i.postimg.cc/VLMDkbJP/Aniversario-Caballococha.png',
    description: `Caballococha celebra su aniversario cada 18 de octubre con diversas actividades como pasacalles,
    concursos y festivales. Las actividades por aniversario duran una semana, incluyendo:
    - Embanderamiento
    - Matrimonio Civil
    - Pasacalle y Concurso de Faroles
    - Campeonato de Futbol
    - Campaña Médica
    - Capacitaciones
    - Noche Cultural
    - Concurso de Belleza
    - Ciclismo
    - Concurso de Pintura
    - Festival de la Canción.`
  }
];

const FestividadesPage = () => {
  return (
    <div className="bg-gray-100 p-6 w-11/12 mx-auto rounded-lg shadow-lg">
      <header className="bg-green-700 text-white text-center p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">FESTIVIDADES</h1>
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
              <p className="text-gray-700 leading-relaxed">{fest.description}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default FestividadesPage;