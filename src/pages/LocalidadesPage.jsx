import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";
import { useTranslation } from 'react-i18next';

const LocalidadesPage = () => {
  const { t } = useTranslation('localidades');
  const [showFullText, setShowFullText] = useState({ iquitos: false, caballoCocha: false });

  const toggleText = (city) => {
    setShowFullText((prev) => ({ ...prev, [city]: !prev[city] }));
  };

  const renderText = (text, city) => {
    const preview = text.split(" ").slice(0, 200).join(" ") + "...";
    const isExpanded = showFullText[city];

    return (
      <div className='mb-6 p-4 bg-white rounded-2xl shadow-md'>
        <ReactMarkdown className="text-justify text-gray-700 leading-relaxed mb-4">
          {isExpanded ? text : preview}
        </ReactMarkdown>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          onClick={() => toggleText(city)}
        >
          {isExpanded ? t('verMenos') : t('verMas')}
        </button>
      </div>
    );
  };

  const iquitosText = t('iquitos.contenido');
  /* const iquitosText = `
  Iquitos está ubicado en el noreste de Perú, al noreste de departamento de Loreto, y en el extremo sur de la Provincia de Maynas.
  Es considerada la capital del Departamento de Loreto y la ciudad tiene una extensión de 368,9 km², abarcando parte de los 
  distritos de Belén, Punchana y San Juan Bautista.  
  Se encuentra aproximadamente en las coordenadas 03°43'46″S 73°14'18″O a 106 m s. n. m. Es también la ciudad peruana más 
  septentrional.
  
  La planicie donde se encuentra la ciudad está ubicada en la llanura amazónica, conocida en el Perú como 
  selva baja o región Omagua, cuyo relieve horizontal, por debajo de los 800 m.s.n.m. (2624.67 pies), se 
  encuentra cubierto por densa vegetación, con zonas que son inundadas por los ríos en la temporada de lluvias. 
  Los ríos son anchos y describen varias curvas así como meandros. El clima en la selva baja es cálido y humedad alta, 
  con lluvias abundantes durante todo el año.

  Está considerada oficialmente por el INEI como una metrópoli regional en el Microsistema Norte del Perú. 
  Hasta la fecha, es la metrópoli más grande de la Amazonía peruana y es la novena ciudad más poblada del país según 
  estimaciones del 2023.

  Iquitos es considerada la ciudad más grande del mundo que no cuenta con conexión terrestre, es por ello que 
  sólo se puede llegar por vía aérea y fluvial. Es el principal puerto peruano en el río Amazonas y uno de los 
  principales a lo largo del río hasta su desembocadura en el Atlántico.  
  Está rodeada por el Puerto de Iquitos que conforma los ríos Amazonas, Nanay e Itaya. Está situada a la orilla izquierda 
  del río Amazonas, el cual proporciona una vida económica característica, entre ellas comercio y transporte. Los ríos 
  Itaya y Nanay son límites naturales de la expansión física de la ciudad, permitiendo que la urbanización por derrame 
  crezca hacia el sur y exista una ligera densidad poblacional el Centro de Iquitos. Cerca a Iquitos también existe un 
  sinnúmero de lagunas y cochas, prominentemente el lago Moronococha, que delimitan la ciudad por el oeste. 
  Está característica hidrográfica convierte a la ciudad en una isla fluvial.

  La fecha de fundación de la ciudad es incierta, pero los documentos históricos afirman que inició como una reducción 
  española establecida por los jesuitas a orillas del río Nanay alrededor del año 1757 con el nombre de «San Pablo de Nuevo 
  Napeanos», pueblo habitado por indígenas napeanos (yameos) e iquito. Por 1999, la ciudad estuvo finalmente consolidada en 
  sus cuatro municipalidades. Las mayores industrias extracción de la ciudad están conformadas por la maderera, pesquera, 
  petrolera, minera y agrícola, y tiene un alta actividad económica en el turismo, la artesanía, la panadería y la bebidas 
  gasificadas.

  Se ha convertido en una importante ciudad cosmopolita de fuertes raíces amazónicas con un notable complejo histórico, 
  una característica gastronomía, paisajes amazónicos, un acento cantor, vida nocturna y un creciente movimiento cultural. 
  En 2012, se registró 250.000 visitantes, y ha recibido más después de ser receptor de la premiación de Amazonía como 
  maravilla natural del mundo. Su aeropuerto internacional espera convertirse en uno de los seis centros aéreos 
  internacionales de Perú.

  La Zona Monumental de Iquitos contiene varios Patrimonios Culturales de la Nación: la Catedral de Iquitos, la Casa de 
  Fierro, el Antiguo Hotel Palace, la Casa Cohen, la Casa Morey y más de 70 edificios. 
  Otros conocidos puntos de referencia es la Plaza de Armas de Iquitos; el Jirón Próspero, una vía que conglomera varios 
  locales comerciales e históricos, y el concurrido Barrio de Belén, a veces apodado como la «Venecia Amazónica». 
  La ciudad también alberga a la Biblioteca Amazónica, una de las dos más importantes en América Latina.

  # **Historia.**

  Antes del comienzo preliminar de Iquitos, existió un conjunto de «reducciones» entre 1638 a 1769, donde varias tribus 
  indígenas, entre ellas los iquitos, fueron albergadas y administrada por misioneros jesuitas, perteneciente a la orden 
  religiosa de la Compañía de Jesús. Las reducciones a menudo eran reubicadas a kilómetros de su localización original, 
  pero solían conservar su nombre. Otras etnias eran trasladadas y se asentaban en algún otro pueblo. En ese entonces, 
  se fundaron varias reducciones como Juan Nepomuceno de Iquitos y Santa Bárbara de Iquitos en 1740, San Sebastián de 
  Iquitos en 1742 y Sagrado Corazón de Jesús de Maracanos en 1748, todos fundados por el sacerdote José Bahamonde 
  perteneciente a la congregación de la Compañía de Jesús con su misión en Quito; Santa María de Iquitos fue fundada 
  por el padre Uriarte en 1754; San Javier de Iquitos por el padre Palme en 1763 y San José de Iquitos fundada por el 
  padre Uriarte en 1767, año en que los jesuitas son obligados a retirarse de las colonias hispánicas.
  Iquitos fue fundada como misión jesuita en 1757 con el nombre de San Pablo de los Napeanos. La misión consistió de 
  nativos napeanos e Iquitos y estaba situada a orillas del río Nanay hasta mediados del siglo XVIII. El sacerdote 
  llevó aves de corral, vacas, cabras, cerdos, instaló un trapiche para procesar miel y aguardiente, una carpintería 
  y una escuela para los niños. Luego de un traslado definitivo en 1764 a su ubicación actual con el nombre de «San 
  Pablo de Nuevo Napeanos», los nativos napeanos progresivamente fueron abandonando el caserío hasta quedar solo 
  nativos Iquitos. Debido a eso, a fines del siglo XVIII, la población fue conocida como el «caserío de Iquitos».  
  Entre 1863 y 1864, Iquitos era una pequeña villa hasta la llegada de los marinos y buques peruanos Pastaza, 
  Próspero y Morona, mandados por el presidente Ramón Castilla y Marquesado, que traían las piezas para instalar 
  la Factoría Naval (ubicada en el actual Malecón Tarapacá), debido a que la ciudad se encuentra favorablemente 
  situada entre el río Nanay y la margen izquierda del río Amazonas, convirtiéndose en un puerto fluvial hacia 
  otras regiones. Actualmente, la fecha de llegada de los transportes fluviales, 5 de enero, está considerada 
  como aniversario de la ciudad. El auge desencadenó en un incipiente crecimiento urbano cuando se construyó 
  una factoría y un apostadero. El 7 de febrero de 1866, la ciudad fue declarada como capital provincial de 
  Maynas, y se nombró José Jesús Jiménez como primer alcalde. Después de la insurrección loretana de 1896, 
  el 9 de noviembre de 1897, Nicolás de Pierola nombra a la ciudad como capital del departamento de Loreto.

  La fiebre del caucho (Hevea brasiliensis) trajo una intensa atención comercial en la ciudad. Iniciada 
  aproximadamente en 1880, el acontecimiento convirtió a Iquitos en el centro de explotación del caucho en 
  la Amazonía peruana, y junto a Manaos, en las dos principales centros caucheros, así como una de las ciudades 
  más ricas del continente. Varios peruanos de otros puntos del país y extranjeros, especialmente europeos, 
  llegaron a la ciudad para conseguir una fortuna más rápida y fácil a costa de la explotación y abuso de los 
  nativos amazónicos. Durante este período se construyó la arquitectura de Iquitos, y dotó a la ciudad de los 
  servicios básicos y públicos. El 9 de noviembre de 1897, Iquitos es declarada como capital de Loreto, en 
  reemplazo de Moyobamba. En 1905, se instaló el alumbrado eléctrico y funcionó el ferrocarril urbano, 
  servicios que llegaron a Iquitos antes que a varias ciudades peruanas y europeas. La Corte Superior fue 
  colocada en 1907 y la Iglesia Matriz en 1919, entre otros. Alrededor del año 1914, el monopolio cauchero 
  amazónico terminó cuando las plantaciones inglesas en Singapur y Malasia comenzaron a ser productivas para 
  la cosecha del caucho. Las semillas del Hevea brasiliensis habían sido llevadas subrepticiamente. Esto dejó 
  nuevamente a Iquitos en la pobreza y aislamiento de las ciudades selváticas, así como el abandono de fastuosos 
  edificios de estilo europeo.  
  `; */

  const caballoCochaText = t('caballococha.contenido');
  /* const caballoCochaText = `Caballococha es una ciudad peruana capital del distrito de Ramón Castilla y a la vez de la provincia de Mariscal 
  Ramón Castilla en el departamento de Loreto. Se encuentra en el Noreste del país, sobre la orilla derecha del río 
  Amazonas en la quebrada de Caballococha, muy cerca al trapecio amazónico; se puede decir esta ciudad pequeña como 
  puerto de entrada (y salida) al (o del) Perú ya que esta a menos de 50 km de Santa Rosa (Perú), Leticia, (Colombia) 
  y Tabatinga,(Brasil) por el río Amazonas.

  La ciudad de Caballococha se encuentra a una distancia de 325 km de la ciudad de Iquitos, latitud sur de 3°55' y 
  a 70°34' latitud oeste, a 60 m s. n. m. ; en la margen izquierda del lago Caballococha, cuya desembocadura es de 
  más de 3 km aproximadamente.

  Caballococha es muy visitada por ser una ciudad fronteriza y para llegar a ella es posible viajar 2 días en 
  lancha, 8 a 9 horas en un rápido o ferry, o acceder vía aérea desde Iquitos. Tanto la ciudad como toda la provincia 
  juegan un papel muy importante en la comunicación fronteriza con países vecinos como Brasil y Colombia. Asimismo 
  la ciudad cuenta con los servicios básicos para atender a los turistas que visitan el lugar. La zona cuenta con una 
  gran diversidad biológica (ecosistemas, especies y material genético de gran importancia), varios paisajes naturales 
  y una población indígena integrada por diferentes etnias que conforman uno de los atractivos de gran interés para 
  los turistas extranjeros y nacionales, la actividad turística en la zona se viene incrementando cada año, lo cual 
  ha determinado que el uso de los recursos sea ordenado y responsable que conlleve a una conservación aceptable de 
  dichos recursos, se debe mencionar también que los entes comprometidos con el sector se han visto obligados a brindar 
  paquetes turísticos de mejor calidad, dando prioridad al turismo ecológico, promoviendo la conservación de áreas muy 
  importantes para aprovechar sus recursos.

  # **Historia.**

  Según la leyenda que relata César Lequerica en su pequeño libro Sachachorro, existía antiguamente en el lugar donde 
  esta el lago actual, un pueblo que un desbordamiento extraordinario del Amazonas se hubiera totalmente inundado, 
  dejando en este mismo lugar un inmenso lago. Caballococha, nombre que despierta la curiosidad de todos, tiene su 
  origen de esta misma leyenda que relata que en ciertas noches, salía del lago un enorme caballo cuyos relinchos 
  sembraba el terror en los habitantes de los alrededores; de ahí el nombre Caballococha, caballo y cocha (lago). 
  El origen del pueblo actual está envuelto en tinieblas. El documento oficial más antiguo que ha sido descubierto 
  es un certificado de bautismo fechado de 1845 y que empieza con estas palabras; "En la Iglesia de este Pueblo..." 
  En su tercer libro de la historia del Perú, Raymondi señala que "en este lugar pintoresco hace treinta años" es 
  decir antes de su viaje a Caballococha en el Pastaza en 1869, "no existía ningún pueblo"... Es solamente en 1845 
  que el vicario Pedro Celestino Flores fundó, en la ribera del pequeño río que sirve de desembocadura al lago, el 
  pueblo que lleva el mismo nombre, Caballococha. Su población se componía de alrededor de 275 nativos ticunas y de 
  algunos murichinos. Solamente hacia 1860, que los mestizos empezaron a establecerse.

  Los primeros años de su existencia conocieron un pronto desarrollo. Ya, en 1869, este pueblo contaba con 400 
  habitantes. A fines del siglo pasado, Caballococha llegaba a su apogeo con la explotación del caucho. 
  Estratégicamente situado, era el centro de actividad y de riquezas. Alcanzó una población de cerca de 4000 
  habitantes. Desgraciadamente, la caída inesperada de los precios del caucho le dio un golpe mortal. Según un 
  empadronamiento local de 1935 por el P. P. Avencio Villarejo, O. S. A., la población era solamente de 550 
  habitantes. Desde entonces, esta población se debate entre la decadencia y la adaptación. Sin embargo, un 
  débil esfuerzo de levantamiento parece ejercerse desde algunos años. En efecto, en el censo del distrito de 
  Ramón Castilla en 1951, Caballo Cocha, su capital desde 1893, contaba con una población de 683 habitantes. 
  Recientemente, el R. P. M. Anselmo Descary, franciscano canadiense, empadronaba, en los archivos de la 
  parroquia, una población de 700 habitantes. El R. Padre se impuso él mismo la tarea de hacer este censo local.

  Es el decir de los ancianos, la iglesia anterior de Caballococha, construida en 1900, reemplazaba a una capilla 
  de pona cuya fecha de construcción no es posible precisar. Esta última reemplazaba a otra construida hacia 
  el fin del año de 1845, existía al menos una capilla. Cuatro templos de Dios hicieron la gloria de 
  Caballococha. De toda evidencia, la fe católica es la hermana melliza de su historia. 
  Es alrededor de esta iglesia que se agrupa la población actual. Las casas rodean una plaza pública en el 
  centro del cual se levanta un monumento "al soldado Cariguero" en recuerdo del pobre soldado nativo que debía 
  llevar en hombros, a través de la selva, víveres y municiones durante el conflicto con Colombia (1932-1933).. 
  Una pista de cemento rodea a este humilde monumento.

  El R. P. Mariano Bonin fue el primer canadiense en encargarse del puesto de misión, el 27 de julio de 1946. 
  En seguida, se puso a la obra de restaurar la iglesia y su propia residencia. Más tarde, sus esfuerzos se 
  centralizaron totalmente en la preparación de una residencia para una comunidad religiosa española, las siervas 
  de san José, que llegaron a Caballococha, el 12 de junio de 1954. Estas religiosas tomaron a cargo la dirección 
  de la escuela para mujeres. La enseñanza religiosa de los varones era a cargo del padre Cura. Dos salas 
  parroquiales testimonian igualmente del inmenso trabajo realizado por el reverendo Padre.

  Hoy, Caballococha se perfila como uno de los pueblos mejores organizados de la selva. Goza de un gobernador, 
  un juez de paz, una municipalidad, un puesto de policía, un banco y un pequeño hospital, dos escuelas primarias 
  para varones y para mujeres y de un generador eléctrico desde julio de 1958. Igualmente, es uno de los pocos 
  pueblos de esta región amazónica que se han beneficiado de un sacerdote con residencia. Los archivos de esta 
  parroquia conservan una lista de 38 sacerdotes que se sucedieron desde su fundación, desplegaron un celo 
  sostenido por el desarrollo material y espiritual del pueblo y de los alrededores. Su semilla ha producido 
  ya dos vocaciones sacerdotales y agustinas. Dos jóvenes seminaristas prosiguen sus estudios en el seminario 
  Santo Toribio de Lima.
  `; */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center text-teal-700 mb-8 tracking-wide drop-shadow-lg">{t('titulo')}</h1>
      <section className="p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mb-8">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {t('texto')}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#iquitos" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">{t('iquitos.titulo')}</a>
          <a href="#caballoCocha" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">{t('caballococha.titulo')}</a>
        </div>
      </section>
      <section id="iquitos" className="p-6 bg-white shadow-xl rounded-2xl my-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6">{t('iquitos.titulo')}</h2>
        <img
          src="https://i.ibb.co/TBgb2ZTh/Ciudad-Iquitos.png"
          alt="Ciudad de Iquitos"
          className="w-1/2 md:w-1/3 h-auto object-cover rounded-xl border-4 border-teal-200 shadow-md mb-6 mx-auto" />
          {renderText(iquitosText, 'iquitos')}
        <div className="flex gap-4 mt-6 justify-center">
          <Link to="/" className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">{t('boton1')}</Link>
          <Link to="https://es.wikipedia.org/wiki/Iquitos" target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">{t('boton2')}</Link>
        </div>
      </section>
      <section id="caballoCocha" className="p-6 bg-white shadow-xl rounded-2xl my-4 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-teal-600 mb-6">{t('caballococha.titulo')}</h2>
        <img
          src="https://i.ibb.co/4RtKHjD2/Ciudad-Caballococha.png"
          alt="Ciudad de Caballo Cocha"
          className="w-1/2 md:w-1/3 h-auto object-cover rounded-xl border-4 border-teal-200 shadow-md mb-6 mx-auto" />
        {renderText(caballoCochaText, 'caballoCocha')}
        <div className="flex gap-4 mt-6 justify-center">
          <Link to="/" className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-800 transition">{t('boton1')}</Link>
          <Link to="https://es.wikipedia.org/wiki/Caballococha" target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">{t('boton2')}</Link>
        </div>
      </section>
    </div>
  );
};

export default LocalidadesPage;
