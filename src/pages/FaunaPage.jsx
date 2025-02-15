import React from 'react';
import { Link } from 'react-router-dom';

const FaunaPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-300 to-gray-100 p-4 flex flex-col items-center font-sans">
      <div className="w-full max-w-7xl bg-gray-200 p-6 rounded-xl shadow-xl">
        <header className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-teal-700 text-center w-full sm:w-auto mb-4 sm:mb-0">
            FAUNA DE LA AMAZONÍA PERUANA
          </h1>
          <Link to="/" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-700 transition">
            Ir a Página Principal
          </Link>
        </header>

        <section>
          <div className="flex flex-col items-center mb-6">
            <img 
              src="https://i.ibb.co/svys7CJS/Bufeo-Colorado.png" 
              alt="Bufeo Colorado" 
              className="w-48 border border-black rounded-xl transition-transform duration-1000 hover:scale-150" 
            />
          </div>

          <div className="bg-white p-6 text-justify rounded-lg shadow-md text-base leading-relaxed space-y-6">
            <p className="mb-4">
              La fauna en la región Loreto es variada y se encuentran especies como Lagarto, otorongo, boa, anaconda 
              (Eunectes murinus), sajino, sachavaca, venado, ronsoco, mono, perezoso, tortuga, loros, delfín rosado 
              (Inia geoffrensis), etc. Entre las especies amenazadas en peligro de extinción están el jaguar, el 
              lagarto negro, el manatí, diversas tortugas de río, la nutria de río, el guacamayo rojo, el delfín 
              rosado y el paiche. Estas especies habitan en la reserva nacional Pacaya-Samiria.
            </p>
            <p>
              En lo que a animales se refiere, la lista es interminable. Solo en la Reserva Nacional Pacaya Samiria, 
              que recibe el nombre de los dos ríos que la bañan, viven 527 especies de aves, 102 de mamíferos, 
              69 de reptiles, 58 de anfibios y 269 de peces. Entre los animales más curiosos de la zona destacan las 
              temidas anacondas, los perezosos, los monos y el simpáticodelfín rosado, en peligro de extinción. 
              Esta variedad hace que cualquier época del año sea buena para visitar la zona. Eso sí, consultando con 
              anterioridad qué especies frecuentan Loreto en cada momento.
            </p>
            
            <div className="rounded-xl border-2 p-4">
              <h2 className="mt-4 text-xl font-semibold">MAMÍFEROS:</h2>
              <p className="mb-4">
                Sacha Vaca, Danta o Tapir, Venado, Sajino o Jabalí, Huangana, Carachupa, o armadillo, yangunturo, oso hormiguero. 
                Majas, añuje, ronsoco o caphuara, Sacha Accu o perro del monte, ratones del monte en gran variedad. Monos Maquisapa, 
                choro cenizo, machín o mono negro y blanco, Achuni o cuatí, Suihui, pelejo o perezoso, huayhuashi o ardilla, 
                amarilla o negragris, Pichicos o monos más pequeños de los que hay infinidad. Vaca Marina La vaca marina o Manatí, 
                es de color gris oscuro, de piel gruesa, se alimenta de las plantas acuáticas de los lagos y ríos como el gramalote, 
                la huama y otras. Su tamaño es más o menos.de 2 metros de largo. Pesa de 200 a 300 kilogramos. Su carne es semejante 
                a la de la res y del mismo color.
              </p>
              <p>
                <strong>Delfines o Bufeos.</strong> En el rio Amazonas y en todos sus afluentes y lagos existen tres 
                tipos:
                <li>
                  Uno pequeño y juguetón de color cenizo y lo llaman Demente Bufeo (Bufeo Loco), de 1.20 mt. de largo más 
                  o menos. El Bufeo Cenizo, que tiene unos 2 m. de largo y es apacible e indiferente. El Bufeo Colorado, 
                  de las mismas dimensiones que el cenizo.
                </li>
              </p>
              <p>
                Dentro de los Felinos Tenemos el “Tigre negro”, que es enorme y el Otorongo. Estos son los reyes de la 
                Selva. Después tenemos el Lluycho Puma, el Banquete, el tigrillo.
              </p>
            </div>
            <div className="rounded-xl border-2 p-4">
              <h2 className="mt-4 text-xl font-semibold">INSECTOS:</h2>
              <p className="mb-4">
                Tenemos las arañas “La viuda”, que es una araña grande peluda y negra y muy ponzoñosa. Le sigue la Machin 
                Paccha, que tiene un color gris amarillento y es también ponzoñosa. Las Avispas Las más temidas son las 
                Huayrangas, la Carachupa avispa, Shiro Shiro, Campana Avispa, y muchas otras de diferentes tipos.
              </p>
            </div>
            <div className="rounded-xl border-2 p-4">
              <h2 className="mt-4 text-xl font-semibold">AVES:</h2>
              <p className="mb-4">
                Tenermos el Cóndor, gallinazos, gavilanes de diferentes tipos y tamaños, guacamayo negro, colorado y 
                amarillo, el paujil, piuri, que son del tamaño del pavo y de carne muy agradable. La perdiz, la panguana, 
                pava, pucagunga, mala caracuy, carnunguy, patos de diferentes tipos y tamaños, mariquiñas huanana, 
                tuyuyum manshaco, shansho, trompetero negro y gris, tucán y pinsha de varios tipos y tamaños, corcor, 
                tarahui, huanayo, hunchala, huapapa, montete, garzas de diferentes tipos y tamaños.- Loros y pihuichos de 
                diferentes tipos y tamaños el famoso pavoncito o tanrilla, sharara, shucuri, shihuaculli, gaviotas negras 
                y blancas, time los golondrinas, carpinteros de varios tipos, martín pescador o esterero, el Baca muchacho, 
                locrero, lechuza de diferentes tamaños, palomas de diferentes tipos y tamaños y una variedad de pájaros 
                multicolores. Dentro de los pájaros Agoreros Tenemos el Aya pullito, Ayay mama, Chicua, buhos el Tatatao, 
                Huancahuí.
              </p>
            </div>
            <div className="rounded-xl border-2 p-4">
              <h2 className="mt-4 text-xl font-semibold">REPTILES:</h2>
              <p className="mb-4">
                Se tienen Tortugas y Charapas y camaleón. El motelo, la matamata, el asnac charapa que vive en los pantanos 
                de la selva. Culebras y lagartos Las más grandes son La Yacumama, la Sachamama, que son de 40 a 50 mt. 
                de largo de un peso aproximado de 5 a 6 Tn. diámetro 80 cm. La Yacumama (Madre del agua) habita en el agua 
                y la Sacha mama (madre de la selva) habita en la selva. Lagarto blanco y lagarto negro. 
                Víboras venenosas La Chushupe, el Jergón, Loro Machacuy, iguano Machacuy, Yacu jergón (esta vive en el agua) 
                cascabel y nacanaca. Estas dos últimas son las más pequeñas de su especie pero las más venenosas.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-100 flex flex-col sm:flex-row gap-4 rounded-lg">
            <Link to="/" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 transition">
              Ir a página principal
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FaunaPage;